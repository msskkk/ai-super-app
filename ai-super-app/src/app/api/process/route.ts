export const dynamic = "force-dynamic";
export const maxDuration = 60;

import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";
import { getToolPrompt, renderToolHtml } from "@/lib/tool-templates";

// Fallback: text → styled HTML converter for tools without specific templates
const FCOLORS = [
  { bg: "linear-gradient(135deg,#667eea,#764ba2)", light: "#f0f4ff", border: "#667eea", text: "#4338ca" },
  { bg: "linear-gradient(135deg,#f093fb,#f5576c)", light: "#fef0f7", border: "#f5576c", text: "#be185d" },
  { bg: "linear-gradient(135deg,#4facfe,#00f2fe)", light: "#eff8ff", border: "#4facfe", text: "#0369a1" },
  { bg: "linear-gradient(135deg,#43e97b,#38f9d7)", light: "#f0fdf9", border: "#43e97b", text: "#047857" },
  { bg: "linear-gradient(135deg,#fa709a,#fee140)", light: "#fff7ed", border: "#fa709a", text: "#c2410c" },
];
const SF = `-apple-system,BlinkMacSystemFont,'Segoe UI','Hiragino Sans',sans-serif`;

function textToStyledHtml(text: string): string {
  const lines = text.split("\n").filter((l) => l.trim());
  let html = `<div style="max-width:480px;margin:0 auto;font-family:${SF};">`;
  let ci = 0, inCards = false;
  const bold = (s: string) => s.replace(/\*\*(.+?)\*\*/g, '<strong style="color:#1e293b;">$1</strong>');
  const linkify = (s: string) => s.replace(/(https?:\/\/[^\s<)]+)/g, '<a href="$1" target="_blank" rel="noopener" style="color:#3b82f6;text-decoration:none;font-weight:600;">🔗 リンク</a>');

  for (const line of lines) {
    const t = line.trim();
    if (!t) continue;
    if (t.startsWith("# ")) {
      if (inCards) { html += "</div>"; inCards = false; }
      const c = FCOLORS[ci % FCOLORS.length]; ci++;
      html += `<div style="background:${c.bg};color:#fff;padding:16px 20px;border-radius:14px;margin:18px 0 12px;font-size:17px;font-weight:800;box-shadow:0 2px 8px rgba(0,0,0,0.1);">${t.slice(2)}</div>`;
    } else if (t.startsWith("## ")) {
      if (inCards) html += "</div>";
      const c = FCOLORS[ci % FCOLORS.length]; ci++;
      html += `<div style="margin:16px 0 8px;padding:10px 14px;background:${c.light};border-left:4px solid ${c.border};border-radius:0 10px 10px 0;font-weight:700;color:${c.text};font-size:13px;">${t.slice(3)}</div><div style="padding:0 2px;">`;
      inCards = true;
    } else if (t.startsWith("**") && t.endsWith("**") && t.indexOf("**", 2) === t.length - 2) {
      if (inCards) html += "</div>";
      const c = FCOLORS[ci % FCOLORS.length]; ci++;
      html += `<div style="margin:16px 0 8px;padding:12px 16px;background:${c.light};border-left:4px solid ${c.border};border-radius:0 12px 12px 0;font-weight:700;color:${c.text};font-size:14px;">${t.slice(2, -2)}</div><div style="padding:0 2px;">`;
      inCards = true;
    } else if (/^\d+\.\s/.test(t)) {
      const num = t.match(/^(\d+)\.\s*/)!;
      const content = t.slice(num[0].length);
      const c = FCOLORS[ci % FCOLORS.length];
      html += `<div style="display:flex;align-items:flex-start;gap:10px;padding:10px 14px;margin:6px 0;background:#fff;border-radius:12px;box-shadow:0 1px 6px rgba(0,0,0,0.06);font-size:13px;line-height:1.6;">
        <span style="width:24px;height:24px;border-radius:50%;background:${c.bg};color:#fff;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:800;flex-shrink:0;">${num[1]}</span>
        <span style="color:#334155;flex:1;">${linkify(bold(content))}</span></div>`;
    } else if (/^(\p{Emoji_Presentation}|\p{Extended_Pictographic})\s*/u.test(t)) {
      const em = t.match(/^(\p{Emoji_Presentation}|\p{Extended_Pictographic})\s*/u)!;
      html += `<div style="display:flex;align-items:flex-start;gap:10px;padding:12px 14px;margin:6px 0;background:#fff;border-radius:12px;box-shadow:0 1px 6px rgba(0,0,0,0.06);font-size:13px;line-height:1.6;"><span style="font-size:20px;flex-shrink:0;">${em[0].trim()}</span><span style="color:#334155;flex:1;">${linkify(bold(t.slice(em[0].length)))}</span></div>`;
    } else if (/^\s+[-・•]\s/.test(line)) {
      html += `<div style="display:flex;align-items:flex-start;gap:6px;padding:4px 14px 4px 36px;margin:2px 0;font-size:12px;line-height:1.6;color:#64748b;"><span style="color:#c0c8d4;font-size:6px;margin-top:6px;">●</span><span>${linkify(bold(t.replace(/^[-・•]\s*/, "")))}</span></div>`;
    } else if (/^[-・•]\s/.test(t)) {
      html += `<div style="display:flex;align-items:flex-start;gap:8px;padding:8px 14px;margin:4px 0;font-size:13px;line-height:1.6;color:#475569;"><span style="color:#94a3b8;font-size:8px;margin-top:6px;">●</span><span>${linkify(bold(t.replace(/^[-・•]\s*/, "")))}</span></div>`;
    } else {
      html += `<div style="padding:6px 14px;font-size:13px;color:#475569;line-height:1.6;">${linkify(bold(t))}</div>`;
    }
  }
  if (inCards) html += "</div>";
  html += "</div>";
  return html;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { aiPrompt, userInput, locale, toolId } = body;

    if (!aiPrompt || !userInput) {
      return NextResponse.json(
        { error: "Missing aiPrompt or userInput" },
        { status: 400 }
      );
    }

    if (typeof aiPrompt !== "string" || typeof userInput !== "string") {
      return NextResponse.json(
        { error: "Invalid input types" },
        { status: 400 }
      );
    }

    if (userInput.length > 10000 || aiPrompt.length > 5000) {
      return NextResponse.json(
        { error: "Input too long" },
        { status: 400 }
      );
    }

    const localeInstruction =
      locale && locale !== "ja"
        ? `\n\n重要: ユーザーの言語は${locale === "en" ? "英語" : locale === "zh" ? "中国語" : locale === "ko" ? "韓国語" : locale}です。必ずその言語で回答してください。`
        : "";

    // Check if this tool has a dedicated JSON template
    const toolJsonPrompt = toolId ? getToolPrompt(toolId) : null;

    const fallbackFormatPrompt = `出力形式を厳守してください:

1. # で大見出し（セクションタイトル、3-5個まで）
2. **太字** でサブセクション見出し
3. 各項目は適切な絵文字で始め、具体的で実用的な内容を記載
4. 箇条書き（- ）で整理。各項目に具体例・数値・理由を含める
5. 抽象的な説明ではなく、すぐに使える具体的なアドバイスを提供
6. 重要なポイントは**太字**で強調
7. 可能な場合は数値（金額、時間、回数等）を含めて具体性を持たせる

回答は丁寧で読みやすく、専門知識がなくてもわかるようにしてください。`;

    const systemPrompt = toolJsonPrompt
      ? aiPrompt + localeInstruction + "\n\n" + toolJsonPrompt
      : aiPrompt + localeInstruction + "\n\n" + fallbackFormatPrompt;

    const client = new Anthropic();
    const message = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: toolJsonPrompt ? 4096 : 3072,
      system: systemPrompt,
      messages: [{ role: "user", content: userInput }],
    });

    let text =
      message.content[0].type === "text" ? message.content[0].text : "";

    // AI image generation for tools with imagePrompt
    const IMAGE_TOOLS: Record<string, { width: number; height: number; aspect: string }> = {
      thumbnail: { width: 1024, height: 576, aspect: "16:9" },
      logo: { width: 1024, height: 1024, aspect: "1:1" },
      mockup: { width: 576, height: 1024, aspect: "9:16" },
    };
    const imageApiKey = process.env.TOGETHER_API_KEY || process.env.REPLICATE_API_TOKEN;
    const imageProvider = process.env.TOGETHER_API_KEY ? "together" : process.env.REPLICATE_API_TOKEN ? "replicate" : null;
    const imageConfig = toolId ? IMAGE_TOOLS[toolId] : null;

    if (imageConfig && imageApiKey && imageProvider) {
      try {
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          const parsed = JSON.parse(jsonMatch[0]);
          if (parsed.imagePrompt) {
            if (imageProvider === "together") {
              const res = await fetch("https://api.together.xyz/v1/images/generations", {
                method: "POST",
                headers: {
                  Authorization: `Bearer ${imageApiKey}`,
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  model: "black-forest-labs/FLUX.1-schnell",
                  prompt: parsed.imagePrompt,
                  width: imageConfig.width,
                  height: imageConfig.height,
                  n: 1,
                  response_format: "b64_json",
                }),
              });

              if (res.ok) {
                const data = await res.json();
                const b64 = data.data?.[0]?.b64_json;
                if (b64) {
                  parsed.imageUrl = `data:image/png;base64,${b64}`;
                  text = JSON.stringify(parsed);
                }
              }
            } else {
              const res = await fetch(
                "https://api.replicate.com/v1/models/black-forest-labs/flux-schnell/predictions",
                {
                  method: "POST",
                  headers: {
                    Authorization: `Bearer ${imageApiKey}`,
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    input: { prompt: parsed.imagePrompt, aspect_ratio: imageConfig.aspect, num_outputs: 1 },
                  }),
                }
              );
              if (res.ok) {
                let imgData = await res.json();
                while (imgData.status === "starting" || imgData.status === "processing") {
                  await new Promise((r) => setTimeout(r, 1500));
                  const pollRes = await fetch(
                    `https://api.replicate.com/v1/predictions/${imgData.id}`,
                    { headers: { Authorization: `Bearer ${imageApiKey}` } }
                  );
                  imgData = await pollRes.json();
                }
                const imageUrl = Array.isArray(imgData.output) ? imgData.output[0] : imgData.output;
                if (imgData.status === "succeeded" && imageUrl) {
                  parsed.imageUrl = imageUrl;
                  text = JSON.stringify(parsed);
                }
              }
            }
          }
        }
      } catch {
        // Image generation failed, continue without image
      }
    }

    // Try template-based rendering first, fallback to text-to-HTML
    let html: string | null = null;
    if (toolId && toolJsonPrompt) {
      html = renderToolHtml(toolId, text, userInput);
    }
    if (!html) {
      const looksLikeJson = /^\s*[\{```]/.test(text.trim());
      if (toolJsonPrompt && looksLikeJson) {
        html = `<div style="max-width:480px;margin:0 auto;font-family:${SF};text-align:center;padding:40px 20px;">
          <div style="font-size:48px;margin-bottom:16px;">⚠️</div>
          <div style="font-size:15px;font-weight:700;color:#1e293b;margin-bottom:8px;">表示の処理中にエラーが発生しました</div>
          <div style="font-size:12px;color:#64748b;">もう一度お試しください</div>
        </div>`;
      } else {
        html = textToStyledHtml(text);
      }
    }

    const lines = text
      .split("\n")
      .map((l) => l.trim())
      .filter((l) => l.length > 0);

    return NextResponse.json({ results: lines, html });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "Unknown error";
    console.error("AI processing error:", msg);
    return NextResponse.json({ error: "Processing failed" }, { status: 500 });
  }
}
