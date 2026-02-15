"use client";

import { useState, useEffect, useCallback } from "react";
import { categories } from "@/data/categories";
import { bundles } from "@/data/bundles";
import { type Locale, LOCALES, getLocaleLabel, getDict, t } from "@/lib/i18n";
import {
  canUse,
  getRemainingUses,
  isPremium,
  recordUse,
  syncFromServer,
  refreshPremiumStatus,
} from "@/lib/usage";
import { getDeviceId } from "@/lib/device-id";
import { getPlatform, isNativeApp } from "@/lib/platform";
import { initIAP, purchasePremium, restorePurchases } from "@/lib/iap";
import type { Bundle, Tool } from "@/data/types";

type View = "home" | "category" | "bundle" | "history";

interface HistoryEntry {
  id: string;
  bundleId: string;
  toolId: string;
  input: string;
  output: string[];
  createdAt: string;
}

const HISTORY_KEY = "ai-super-app-history";
const MAX_HISTORY = 50;

function getLocalHistory(): HistoryEntry[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveLocalHistory(entry: Omit<HistoryEntry, "id" | "createdAt">) {
  const history = getLocalHistory();
  history.unshift({
    ...entry,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
  });
  if (history.length > MAX_HISTORY) history.length = MAX_HISTORY;
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
}

export default function AppShell() {
  const [locale, setLocale] = useState<Locale>("ja");
  const [dict, setDict] = useState<Record<string, unknown>>(() => getDict("ja"));
  const [view, setView] = useState<View>("home");
  const [categoryId, setCategoryId] = useState<string | null>(null);
  const [bundleId, setBundleId] = useState<string | null>(null);
  const [toolIdx, setToolIdx] = useState(0);
  const [processing, setProcessing] = useState(false);
  const [results, setResults] = useState<string[]>([]);
  const [htmlPreview, setHtmlPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [remaining, setRemaining] = useState(() => getRemainingUses());
  const [historyList, setHistoryList] = useState<HistoryEntry[]>([]);
  const [showInfo, setShowInfo] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const [checkingOut, setCheckingOut] = useState(false);

  // On mount: init IAP and check premium status
  useEffect(() => {
    // Initialize RevenueCat for native platforms
    if (isNativeApp()) {
      initIAP();
    }

    refreshPremiumStatus().then((premium) => {
      if (premium) setRemaining(Infinity);
      // Clean up checkout query params
      const params = new URLSearchParams(window.location.search);
      if (params.has("checkout") || params.has("session_id")) {
        window.history.replaceState({}, "", "/");
      }
    });
  }, []);

  useEffect(() => {
    setDict(getDict(locale));
    document.documentElement.lang = locale;
    localStorage.setItem("ai-super-app-locale", locale);
  }, [locale]);

  const tt = useCallback(
    (key: string, vars?: Record<string, string | number>) => t(dict, key, vars),
    [dict]
  );

  const bundle: Bundle | undefined = bundleId
    ? bundles.find((b) => b.id === bundleId)
    : undefined;
  const tool: Tool | undefined = bundle ? bundle.tools[toolIdx] : undefined;

  const userIsPremium = isPremium();

  function openCategory(id: string) {
    setView("category");
    setCategoryId(id);
    setResults([]);
    setHtmlPreview(null);
    setError(null);
    window.scrollTo(0, 0);
  }

  function openBundle(id: string) {
    setView("bundle");
    setBundleId(id);
    setToolIdx(0);
    setResults([]);
    setHtmlPreview(null);
    setError(null);
    window.scrollTo(0, 0);
  }

  function goHome() {
    setView("home");
    setCategoryId(null);
    setBundleId(null);
    setToolIdx(0);
    setResults([]);
    setHtmlPreview(null);
    setError(null);
    window.scrollTo(0, 0);
  }

  function goBackToCategory() {
    setView("category");
    setBundleId(null);
    setToolIdx(0);
    setResults([]);
    setHtmlPreview(null);
    setError(null);
    window.scrollTo(0, 0);
  }

  function switchTool(idx: number) {
    setToolIdx(idx);
    setResults([]);
    setHtmlPreview(null);
    setError(null);
    setShowInfo(false);
  }

  async function processAI() {
    if (!tool || !bundle) return;

    // Check usage limit (client-side)
    if (!canUse()) {
      setError(tt("nav.dailyLimitReached"));
      return;
    }

    setProcessing(true);
    setResults([]);
    setHtmlPreview(null);
    setError(null);

    // Gather user input
    const inputArea = document.getElementById("input-area");
    let userInput = "";

    if (tool.type === "text-input") {
      const textarea = inputArea?.querySelector("textarea");
      userInput = textarea?.value || "(入力なし — サンプルデータで実行)";
    } else if (tool.type === "form-input") {
      const inputs = inputArea?.querySelectorAll("input");
      const fields: string[] = [];
      inputs?.forEach((inp) => {
        const label = inp.previousElementSibling?.textContent || "";
        fields.push(`${label}: ${inp.value || inp.placeholder}`);
      });
      userInput = fields.join("\n") || "(入力なし — サンプルデータで実行)";
    } else if (tool.type === "image-upload" || tool.type === "file-upload") {
      userInput =
        "(ファイルがアップロードされました — サンプルデータで分析してください)";
    }

    try {
      const res = await fetch("/api/process", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-device-id": getDeviceId(),
        },
        body: JSON.stringify({
          aiPrompt: tool.aiPrompt,
          userInput,
          locale,
          bundleId: bundle.id,
          toolId: tool.id,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.limitReached) {
          setError(tt("nav.dailyLimitReached"));
        } else {
          setError(data.error || "API error");
        }
      } else {
        setResults(data.results || []);
        if (data.html) {
          setHtmlPreview(data.html);
        }
        // Sync usage from server response
        if (data.usage) {
          syncFromServer(data.usage);
        } else {
          recordUse();
        }
        setRemaining(getRemainingUses());
        // Save to local history
        saveLocalHistory({
          bundleId: bundle.id,
          toolId: tool.id,
          input: userInput.slice(0, 500),
          output: data.results || [],
        });
      }
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Network error");
    } finally {
      setProcessing(false);
    }
  }

  // ─── Language switcher ───
  function LangSwitcher() {
    return (
      <div className="flex gap-1">
        {LOCALES.map((l) => (
          <button
            key={l}
            onClick={() => setLocale(l)}
            className={`px-3 py-1.5 text-xs rounded-full transition-colors min-w-[36px] min-h-[36px] flex items-center justify-center ${
              locale === l
                ? "bg-gray-800 text-white"
                : "bg-gray-200 text-gray-500 hover:bg-gray-300"
            }`}
          >
            {getLocaleLabel(l)}
          </button>
        ))}
      </div>
    );
  }

  // ─── Back button ───
  function BackButton({ onClick }: { onClick: () => void }) {
    return (
      <button
        onClick={onClick}
        className="w-9 h-9 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:bg-white/40 transition-colors active:scale-90"
      >
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
    );
  }

  // ─── Usage badge ───
  function UsageBadge() {
    if (userIsPremium) {
      return (
        <span className="text-[10px] bg-yellow-400 text-yellow-900 px-2 py-0.5 rounded-full font-bold">
          {tt("nav.premium")}
        </span>
      );
    }
    return (
      <span className="text-[10px] bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">
        {tt("nav.freeRemaining", { count: remaining })}
      </span>
    );
  }

  // ─── History (localStorage) ───
  function openHistory() {
    setHistoryList(getLocalHistory());
    setView("history");
    window.scrollTo(0, 0);
  }

  // ─── HISTORY VIEW ───
  if (view === "history") {
    return (
      <main className="max-w-lg mx-auto px-4 min-h-screen">
        <div className="bg-gradient-to-r from-gray-700 to-gray-900 rounded-b-3xl px-6 pt-8 pb-8 text-white mb-6">
          <div className="flex items-center justify-between mb-4">
            <BackButton onClick={goHome} />
          </div>
          <h1 className="text-2xl font-bold">{tt("nav.history") || "履歴"}</h1>
        </div>
        <div className="px-2 pb-16 space-y-3">
          {historyList.length === 0 && (
            <p className="text-center text-gray-400 text-sm py-8">まだ履歴がありません</p>
          )}
          {historyList.map((h) => {
            const b = bundles.find((b) => b.id === h.bundleId);
            return (
              <div key={h.id} className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">{b?.emoji || "🤖"}</span>
                  <span className="text-xs font-semibold text-gray-700">{tt(`bundles.${h.bundleId}.name`)}</span>
                  <span className="text-[10px] text-gray-400 ml-auto">{new Date(h.createdAt).toLocaleString()}</span>
                </div>
                <p className="text-xs text-gray-500 mb-2 truncate">{h.input}</p>
                <div className="space-y-1">
                  {h.output.slice(0, 3).map((line, i) => (
                    <p key={i} className="text-xs text-gray-600 bg-gray-50 rounded p-1.5">{line}</p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </main>
    );
  }

  // ─── HOME VIEW ───
  if (view === "home") {
    return (
      <main className="max-w-lg mx-auto px-6 py-12 min-h-screen flex flex-col">
        <div className="flex justify-between items-start mb-10">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {tt("app.title")}
            </h1>
            <p className="text-gray-400 text-sm mt-1">{tt("app.subtitle")}</p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <LangSwitcher />
            <UsageBadge />
          </div>
        </div>

        {/* Action bar */}
        <div className="flex gap-2 mb-8">
          <button onClick={openHistory} className="px-3 py-1.5 text-xs font-medium bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
            履歴
          </button>
          {!userIsPremium && (
            <button
              disabled={checkingOut}
              onClick={async () => {
                const platform = getPlatform();

                // Native app: use RevenueCat IAP
                if (platform === "ios" || platform === "android") {
                  setCheckingOut(true);
                  try {
                    const result = await purchasePremium();
                    if (result.success) {
                      const { setPremium } = await import("@/lib/usage");
                      setPremium(true);
                      setRemaining(Infinity);
                    } else if (result.error && result.error !== "cancelled") {
                      alert(result.error);
                    }
                  } catch {
                    alert("Purchase failed");
                  } finally {
                    setCheckingOut(false);
                  }
                  return;
                }

                // Web: use Stripe checkout
                setCheckingOut(true);
                try {
                  const res = await fetch("/api/checkout", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ deviceId: getDeviceId() }),
                  });
                  const data = await res.json();
                  if (data.premium) {
                    const { setPremium } = await import("@/lib/usage");
                    setPremium(true);
                    setRemaining(Infinity);
                  } else if (data.url) {
                    window.location.href = data.url;
                  } else if (data.error === "Payments not configured") {
                    alert(tt("nav.premiumComingSoon") || "プレミアムプランは近日公開予定です");
                  } else {
                    alert(data.error || "Checkout failed");
                  }
                } catch {
                  alert("Network error");
                } finally {
                  setCheckingOut(false);
                }
              }}
              className="px-3 py-1.5 text-xs font-medium bg-gradient-to-r from-yellow-400 to-amber-500 text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-60"
            >
              {checkingOut ? "..." : tt("nav.upgradePremium")}
            </button>
          )}
          {/* Restore Purchases button (required by Apple for native apps) */}
          {!userIsPremium && isNativeApp() && (
            <button
              disabled={checkingOut}
              onClick={async () => {
                setCheckingOut(true);
                try {
                  const restored = await restorePurchases();
                  if (restored) {
                    const { setPremium } = await import("@/lib/usage");
                    setPremium(true);
                    setRemaining(Infinity);
                  } else {
                    alert(tt("nav.noRestorablePurchases") || "復元できる購入がありません");
                  }
                } catch {
                  alert("Restore failed");
                } finally {
                  setCheckingOut(false);
                }
              }}
              className="px-3 py-1.5 text-xs font-medium bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-60"
            >
              {tt("nav.restorePurchases") || "購入を復元"}
            </button>
          )}
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-y-10 gap-x-4 justify-items-center">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => openCategory(c.id)}
              className="flex flex-col items-center gap-3 group"
            >
              <div
                className={`w-24 h-24 md:w-28 md:h-28 rounded-[26px] bg-gradient-to-br ${c.gradient} shadow-lg flex items-center justify-center transition-all group-hover:scale-110 group-hover:shadow-xl group-active:scale-95`}
              >
                <span className="text-4xl md:text-5xl">{c.emoji}</span>
              </div>
              <div className="text-center">
                <span className="text-xs font-bold text-gray-700 group-hover:text-gray-900 transition-colors block">
                  {tt(`categories.${c.id}.name`)}
                </span>
                <span className="text-[10px] text-gray-400">
                  {c.bundleIds.length}
                  {tt("nav.apps")}
                </span>
              </div>
            </button>
          ))}
        </div>
        <div className="text-center mt-16 space-y-2">
          <div className="flex justify-center gap-3">
            <a href="/privacy" className="text-[10px] text-gray-400 hover:text-gray-600 underline">
              {tt("nav.privacy")}
            </a>
            <a href="/terms" className="text-[10px] text-gray-400 hover:text-gray-600 underline">
              {tt("nav.terms")}
            </a>
          </div>
          <p className="text-[10px] text-gray-300">
            {tt("app.footer")}
          </p>
        </div>
      </main>
    );
  }

  // ─── CATEGORY VIEW ───
  if (view === "category") {
    const cat = categories.find((c) => c.id === categoryId)!;
    const catBundles = cat.bundleIds
      .map((id) => bundles.find((b) => b.id === id))
      .filter(Boolean) as Bundle[];

    return (
      <main className="max-w-lg mx-auto min-h-screen">
        <div
          className={`bg-gradient-to-r ${cat.gradient} rounded-b-3xl px-6 pt-8 pb-8 text-white mb-8`}
        >
          <div className="flex items-center justify-between mb-4">
            <BackButton onClick={goHome} />
            <LangSwitcher />
          </div>
          <div className="flex items-center gap-4">
            <span className="text-5xl">{cat.emoji}</span>
            <div>
              <h1 className="text-3xl font-bold">
                {tt(`categories.${cat.id}.name`)}
              </h1>
              <p className="text-white/70 text-sm mt-1">
                {catBundles.length}
                {tt("nav.apps")}
              </p>
            </div>
          </div>
        </div>
        <div className="px-4 pb-16">
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-y-8 gap-x-4 justify-items-center">
            {catBundles.map((b) => (
              <button
                key={b.id}
                onClick={() => openBundle(b.id)}
                className="flex flex-col items-center gap-2 group"
              >
                <div
                  className={`w-20 h-20 md:w-24 md:h-24 rounded-[22px] bg-gradient-to-br ${b.gradient} shadow-lg flex items-center justify-center transition-all group-hover:scale-110 group-hover:shadow-xl group-active:scale-95`}
                >
                  <span className="text-3xl md:text-4xl">{b.emoji}</span>
                </div>
                <div className="text-center">
                  <span className="text-xs font-semibold text-gray-700 group-hover:text-gray-900 transition-colors block">
                    {tt(`bundles.${b.id}.name`)}
                  </span>
                  <span className="text-[10px] text-gray-400">
                    {b.tools.length} {tt("nav.tools")}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </main>
    );
  }

  // ─── BUNDLE VIEW ───
  if (!bundle || !tool) return null;

  return (
    <div className="max-w-lg mx-auto min-h-screen flex flex-col">
      {/* Header */}
      <div className={`bg-gradient-to-r ${bundle.gradient} px-5 pt-6 pb-5 text-white`}>
        <div className="flex items-center justify-between mb-1">
          <BackButton onClick={goBackToCategory} />
          <div className="flex items-center gap-2">
            <UsageBadge />
            <span className="text-xs text-white/50">
              {bundle.tools.length} {tt("nav.tools")}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3 mt-2">
          <span className="text-3xl">{bundle.emoji}</span>
          <div>
            <h1 className="text-2xl font-bold">
              {tt(`bundles.${bundle.id}.name`)}
            </h1>
            <p className="text-white/70 text-xs">
              {tt(`bundles.${bundle.id}.tagline`)}
            </p>
          </div>
        </div>
      </div>

      {/* Tool Content */}
      <div className="flex-1 px-4 py-6 pb-24" id="input-area">
        <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-800 text-sm">
              {tt(tool.inputLabelKey)}
            </h3>
            <button
              onClick={() => setShowInfo(!showInfo)}
              className={`w-6 h-6 rounded-full text-[11px] font-bold flex items-center justify-center transition-colors ${
                showInfo
                  ? "bg-gray-800 text-white"
                  : "bg-gray-200 text-gray-500 hover:bg-gray-300"
              }`}
            >
              ?
            </button>
          </div>
          {showInfo && (
            <div className="mb-4 p-3 bg-gray-50 rounded-xl border border-gray-100 fadein">
              <p className="text-xs text-gray-600 leading-relaxed">
                {tt(tool.nameKey.replace(/\.[^.]+$/, `.${tool.id}_desc`))}
              </p>
              {tool.hasImage && (
                <span className="inline-block mt-2 px-2 py-0.5 text-[10px] font-bold bg-purple-100 text-purple-700 rounded-full">
                  AI {tt("nav.imageGen") || "Image Generation"}
                </span>
              )}
            </div>
          )}
          <div className="space-y-3">
            {(tool.type === "image-upload" || tool.type === "file-upload") && (
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-gray-400 transition-colors">
                <div className="text-3xl mb-2">
                  {tool.type === "image-upload" ? "📷" : "📎"}
                </div>
                <p className="text-xs text-gray-400 mb-3">
                  {tt("nav.uploadHint")}
                </p>
                <label
                  htmlFor="file-input"
                  className={`inline-block px-4 py-2 rounded-lg text-xs font-medium cursor-pointer bg-gradient-to-r ${bundle.gradient} text-white hover:opacity-90 transition-opacity`}
                >
                  {tt("nav.selectFile")}
                </label>
                <input
                  type="file"
                  className="hidden"
                  id="file-input"
                  accept={
                    tool.type === "image-upload"
                      ? "image/*"
                      : ".pdf,.doc,.docx,.txt"
                  }
                />
              </div>
            )}
            {tool.type === "text-input" && (
              <div className="relative">
                <textarea
                  className="w-full border border-gray-300 rounded-xl p-3 text-sm resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  rows={4}
                  placeholder={tool.placeholder || ""}
                  maxLength={10000}
                  onChange={(e) => setCharCount(e.target.value.length)}
                />
                <span className={`absolute bottom-2 right-3 text-[10px] ${charCount > 9000 ? "text-red-400" : "text-gray-300"}`}>
                  {charCount > 0 ? `${charCount}/10000` : ""}
                </span>
              </div>
            )}
            {tool.type === "form-input" &&
              tool.fields?.map((f, i) => (
                <div key={i}>
                  <label className="block text-xs font-medium text-gray-500 mb-1">
                    {f.name}
                  </label>
                  <input
                    type="text"
                    placeholder={f.placeholder}
                    className="w-full border border-gray-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>
              ))}
          </div>

          <button
            onClick={processAI}
            disabled={processing}
            className={`mt-4 w-full py-3 rounded-xl text-white font-semibold text-sm bg-gradient-to-r ${bundle.gradient} hover:opacity-90 transition-opacity active:scale-[0.98] disabled:opacity-60`}
          >
            {processing ? (
              <span className="flex flex-col items-center justify-center gap-1">
                <span className="flex items-center gap-2">
                  <span className="flex gap-1">
                    <span className="w-2 h-2 bg-white rounded-full dot1 inline-block" />
                    <span className="w-2 h-2 bg-white rounded-full dot2 inline-block" />
                    <span className="w-2 h-2 bg-white rounded-full dot3 inline-block" />
                  </span>
                  {tt("nav.processing")}
                </span>
                <span className="text-[10px] text-white/60">AIが分析中です…少々お待ちください</span>
              </span>
            ) : (
              `${tool.emoji} ${tt("nav.process")}`
            )}
          </button>
        </div>

        {/* Error */}
        {error && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl fadein">
            <p className="text-sm text-red-600">{error}</p>
            <button
              onClick={processAI}
              className="mt-2 px-3 py-1.5 text-xs font-medium bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors"
            >
              もう一度試す
            </button>
          </div>
        )}

        {/* Rich HTML Result */}
        {htmlPreview && (
          <div className="mt-5 fadein">
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white">
              <iframe
                sandbox="allow-same-origin allow-popups allow-popups-to-escape-sandbox"
                srcDoc={`<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; img-src data: https:;"><style>*{box-sizing:border-box}body{margin:0;padding:16px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Hiragino Sans',sans-serif;background:#f8fafc;color:#1e293b;line-height:1.6;-webkit-font-smoothing:antialiased}img{max-width:100%;border-radius:12px;}</style></head><body>${htmlPreview}</body></html>`}
                className="w-full border-0"
                style={{ minHeight: "500px" }}
                onLoad={(e) => {
                  const iframe = e.target as HTMLIFrameElement;
                  const resize = () => {
                    if (iframe.contentDocument?.body) {
                      iframe.style.height = Math.max(500, iframe.contentDocument.body.scrollHeight + 40) + "px";
                    }
                  };
                  resize();
                  iframe.contentDocument?.querySelectorAll("img").forEach((img) => {
                    img.addEventListener("load", resize);
                  });
                  setTimeout(resize, 2000);
                  setTimeout(resize, 5000);
                }}
              />
            </div>
            <div className="mt-3 flex gap-2">
              <button
                onClick={processAI}
                className={`px-4 py-2 text-xs font-medium text-white rounded-lg bg-gradient-to-r ${bundle.gradient} hover:opacity-90 transition-opacity`}
              >
                {tt("nav.regenerate")}
              </button>
              <button
                onClick={() => {
                  const iframe = document.querySelector("iframe");
                  const text = iframe?.contentDocument?.body?.innerText || results.join("\n");
                  navigator.clipboard.writeText(text).then(() => {
                    const btn = document.getElementById("copy-btn");
                    if (btn) { btn.textContent = "✓ コピー済み"; setTimeout(() => { btn.textContent = "📋 コピー"; }, 1500); }
                  }).catch(() => {});
                }}
                id="copy-btn"
                className="px-4 py-2 text-xs font-medium bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
              >
                📋 コピー
              </button>
            </div>
          </div>
        )}

        {/* Fallback text results (when no HTML) */}
        {!htmlPreview && results.length > 0 && (
          <div className="mt-5 bg-white rounded-2xl border border-gray-200 p-5 shadow-sm fadein">
            <h3 className="font-semibold text-gray-800 mb-3 text-sm flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse inline-block" />
              {tt(tool.outputLabelKey)}
            </h3>
            <div className="space-y-2">
              {results.map((r, i) => (
                <div
                  key={i}
                  className="text-sm text-gray-700 p-3 bg-gray-50 rounded-lg fadein"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  {r}
                </div>
              ))}
            </div>
            <div className="mt-4 flex gap-2">
              <button
                onClick={processAI}
                className="px-3 py-1.5 text-xs font-medium bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
              >
                {tt("nav.regenerate")}
              </button>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(results.join("\n")).then(() => {
                    const btn = document.getElementById("copy-btn2");
                    if (btn) { btn.textContent = "✓ コピー済み"; setTimeout(() => { btn.textContent = "📋 コピー"; }, 1500); }
                  }).catch(() => {});
                }}
                id="copy-btn2"
                className="px-3 py-1.5 text-xs font-medium bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
              >
                📋 コピー
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Tab Nav */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-2 pb-[env(safe-area-inset-bottom)]">
        <div className="max-w-lg mx-auto flex">
          {bundle.tools.map((t, i) => {
            const active = i === toolIdx;
            return (
              <button
                key={t.id}
                onClick={() => switchTool(i)}
                className={`flex flex-col items-center gap-1 py-2 px-1 flex-1 transition-colors ${
                  active
                    ? "text-gray-900"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                <span className="text-xl">{t.emoji}</span>
                <span className="text-[10px] font-medium leading-tight">
                  {tt(t.nameKey)}
                </span>
                {active && (
                  <span
                    className={`w-1 h-1 rounded-full bg-gradient-to-r ${bundle.gradient} inline-block`}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
