"use client";

import { useState, useEffect } from "react";
import type { Locale } from "@/lib/i18n";

const STORAGE_KEY = "ai-super-app-locale";

function getStoredLocale(): Locale {
  if (typeof window === "undefined") return "ja";
  return (localStorage.getItem(STORAGE_KEY) as Locale) || "ja";
}

const content: Record<Locale, { title: string; lastUpdated: string; sections: { heading: string; body: string }[] }> = {
  ja: {
    title: "プライバシーポリシー",
    lastUpdated: "最終更新日: 2026年2月15日",
    sections: [
      {
        heading: "1. はじめに",
        body: "AI Super App（以下「本アプリ」）は、ユーザーのプライバシーを尊重し、個人情報の保護に最大限の配慮を行います。本ポリシーでは、本アプリがどのような情報を収集・利用するかについて説明します。",
      },
      {
        heading: "2. 収集する情報",
        body: `本アプリは以下の情報を収集・使用します。

• デバイスID: ランダムに生成されるUUID（ブラウザのlocalStorageに保存）。ユーザーの識別に使用しますが、個人を特定する情報ではありません。
• 利用回数: 1日あたりの利用回数をサーバー側で管理し、無料プランの制限に使用します。
• 入力データ: AIツールに送信されたテキストはリアルタイムで処理され、サーバーには保存しません。
• 決済情報: プレミアムプランの決済はStripe社（またはApple/Googleのアプリ内課金）を通じて処理されます。カード番号等の決済情報を本アプリが直接取得・保存することはありません。
• 利用履歴: ツールの利用履歴はブラウザのlocalStorageにのみ保存されます（サーバーには送信されません）。`,
      },
      {
        heading: "3. 収集しない情報",
        body: `本アプリは以下の情報を収集しません。

• 氏名、メールアドレス、電話番号などの個人情報
• 位置情報
• 連絡先やカメラへのアクセス
• Cookie やトラッキングツールによる行動追跡`,
      },
      {
        heading: "4. 第三者サービスの利用",
        body: `本アプリは以下の第三者サービスを利用しています。

• Anthropic (Claude AI): テキスト生成に使用。ユーザーの入力はAnthropicのAPIに送信されます。Anthropicのプライバシーポリシーに従い処理されます。
• Together AI / Replicate: 画像生成に使用。画像生成プロンプトのみ送信されます。
• Stripe: Web版での決済処理に使用。Stripeのプライバシーポリシーに従い処理されます。
• Vercel: アプリのホスティングに使用。`,
      },
      {
        heading: "5. データの保存と削除",
        body: `• デバイスID・利用履歴はブラウザのlocalStorageに保存されます。ブラウザの設定からlocalStorageをクリアすることで、すべてのローカルデータを削除できます。
• サーバー側で保存するデータは、Stripeの顧客情報（デバイスIDとの紐づけ）のみです。
• データの削除を希望される場合は、お問い合わせください。`,
      },
      {
        heading: "6. セキュリティ",
        body: "本アプリは、HTTPS通信の強制、セキュリティヘッダーの設定、サーバーサイドでの入力検証、レート制限など、適切なセキュリティ対策を講じています。",
      },
      {
        heading: "7. 子どものプライバシー",
        body: "本アプリは13歳未満のお子様を対象としたサービスではありません。13歳未満の方による利用は想定しておりません。",
      },
      {
        heading: "8. ポリシーの変更",
        body: "本ポリシーは予告なく変更される場合があります。重要な変更がある場合は、アプリ内でお知らせします。",
      },
      {
        heading: "9. お問い合わせ",
        body: "プライバシーに関するお問い合わせは、アプリ内のお問い合わせ機能またはメールにてご連絡ください。",
      },
    ],
  },
  en: {
    title: "Privacy Policy",
    lastUpdated: "Last updated: February 15, 2026",
    sections: [
      {
        heading: "1. Introduction",
        body: "AI Super App (\"the App\") respects your privacy and is committed to protecting your personal information. This policy explains what information we collect and how we use it.",
      },
      {
        heading: "2. Information We Collect",
        body: `The App collects and uses the following information:

• Device ID: A randomly generated UUID stored in your browser's localStorage. Used for identification purposes but does not contain personally identifiable information.
• Usage Count: Daily usage counts are managed server-side for free plan limitations.
• Input Data: Text submitted to AI tools is processed in real-time and is not stored on our servers.
• Payment Information: Premium plan payments are processed through Stripe (or Apple/Google in-app purchases). We never directly collect or store your card details.
• Usage History: Tool usage history is stored only in your browser's localStorage (never sent to servers).`,
      },
      {
        heading: "3. Information We Do NOT Collect",
        body: `The App does not collect:

• Personal information such as name, email address, or phone number
• Location data
• Access to your contacts or camera
• Behavioral tracking through cookies or tracking tools`,
      },
      {
        heading: "4. Third-Party Services",
        body: `The App uses the following third-party services:

• Anthropic (Claude AI): Used for text generation. Your input is sent to Anthropic's API and processed according to their privacy policy.
• Together AI / Replicate: Used for image generation. Only image generation prompts are sent.
• Stripe: Used for payment processing on the web version, governed by Stripe's privacy policy.
• Vercel: Used for app hosting.`,
      },
      {
        heading: "5. Data Storage and Deletion",
        body: `• Device ID and usage history are stored in your browser's localStorage. You can delete all local data by clearing localStorage in your browser settings.
• The only server-side data we store is Stripe customer information (linked to your device ID).
• If you wish to delete your data, please contact us.`,
      },
      {
        heading: "6. Security",
        body: "The App implements appropriate security measures including HTTPS enforcement, security headers, server-side input validation, and rate limiting.",
      },
      {
        heading: "7. Children's Privacy",
        body: "The App is not designed for children under 13 years of age. We do not knowingly collect information from children under 13.",
      },
      {
        heading: "8. Changes to This Policy",
        body: "This policy may be updated without prior notice. Significant changes will be communicated through the App.",
      },
      {
        heading: "9. Contact Us",
        body: "For privacy-related inquiries, please contact us through the in-app contact feature or email.",
      },
    ],
  },
  zh: {
    title: "隐私政策",
    lastUpdated: "最后更新：2026年2月15日",
    sections: [
      {
        heading: "1. 简介",
        body: "AI Super App（以下简称\u201C本应用\u201D）尊重用户隐私，致力于保护您的个人信息。本政策说明我们收集哪些信息以及如何使用。",
      },
      {
        heading: "2. 收集的信息",
        body: `本应用收集和使用以下信息：

• 设备ID：随机生成的UUID，存储在浏览器的localStorage中。用于用户识别，但不包含个人身份信息。
• 使用次数：服务器端管理每日使用次数，用于免费计划限制。
• 输入数据：提交给AI工具的文本实时处理，不存储在服务器上。
• 付款信息：高级计划的付款通过Stripe（或Apple/Google应用内购买）处理。我们不直接收集或存储您的卡片信息。
• 使用历史：工具使用历史仅存储在浏览器的localStorage中（不发送到服务器）。`,
      },
      {
        heading: "3. 不收集的信息",
        body: `本应用不收集：

• 姓名、电子邮箱、电话号码等个人信息
• 位置数据
• 联系人或摄像头访问权限
• 通过Cookie或跟踪工具进行的行为跟踪`,
      },
      {
        heading: "4. 第三方服务",
        body: `本应用使用以下第三方服务：

• Anthropic（Claude AI）：用于文本生成。您的输入将发送到Anthropic的API。
• Together AI / Replicate：用于图像生成。
• Stripe：用于网页版支付处理。
• Vercel：用于应用托管。`,
      },
      {
        heading: "5. 数据存储与删除",
        body: `• 设备ID和使用历史存储在浏览器的localStorage中。您可以通过清除浏览器设置中的localStorage来删除所有本地数据。
• 服务器端仅存储Stripe客户信息（与您的设备ID关联）。
• 如需删除数据，请联系我们。`,
      },
      {
        heading: "6. 安全性",
        body: "本应用实施了适当的安全措施，包括HTTPS强制、安全头部、服务器端输入验证和速率限制。",
      },
      {
        heading: "7. 儿童隐私",
        body: "本应用不面向13岁以下儿童。我们不会故意收集13岁以下儿童的信息。",
      },
      {
        heading: "8. 政策变更",
        body: "本政策可能不经事先通知而更新。重大变更将通过应用内通知。",
      },
      {
        heading: "9. 联系我们",
        body: "有关隐私的咨询，请通过应用内联系功能或电子邮件与我们联系。",
      },
    ],
  },
  ko: {
    title: "개인정보 처리방침",
    lastUpdated: "최종 업데이트: 2026년 2월 15일",
    sections: [
      {
        heading: "1. 소개",
        body: "AI Super App(이하 '본 앱')은 사용자의 프라이버시를 존중하며 개인정보 보호에 최선을 다합니다. 본 방침은 어떤 정보를 수집하고 어떻게 사용하는지 설명합니다.",
      },
      {
        heading: "2. 수집하는 정보",
        body: `본 앱은 다음 정보를 수집·사용합니다:

• 기기 ID: 브라우저의 localStorage에 저장되는 무작위 생성 UUID. 사용자 식별에 사용되지만 개인 식별 정보는 포함하지 않습니다.
• 사용 횟수: 무료 플랜 제한을 위해 서버에서 일일 사용 횟수를 관리합니다.
• 입력 데이터: AI 도구에 제출된 텍스트는 실시간으로 처리되며 서버에 저장되지 않습니다.
• 결제 정보: 프리미엄 플랜 결제는 Stripe(또는 Apple/Google 인앱 결제)를 통해 처리됩니다. 카드 정보를 직접 수집하거나 저장하지 않습니다.
• 사용 기록: 도구 사용 기록은 브라우저의 localStorage에만 저장됩니다(서버로 전송되지 않음).`,
      },
      {
        heading: "3. 수집하지 않는 정보",
        body: `본 앱은 다음을 수집하지 않습니다:

• 이름, 이메일, 전화번호 등 개인정보
• 위치 데이터
• 연락처나 카메라 접근
• 쿠키나 추적 도구를 통한 행동 추적`,
      },
      {
        heading: "4. 제3자 서비스",
        body: `본 앱은 다음 제3자 서비스를 사용합니다:

• Anthropic (Claude AI): 텍스트 생성에 사용.
• Together AI / Replicate: 이미지 생성에 사용.
• Stripe: 웹 버전 결제 처리에 사용.
• Vercel: 앱 호스팅에 사용.`,
      },
      {
        heading: "5. 데이터 저장 및 삭제",
        body: `• 기기 ID와 사용 기록은 브라우저의 localStorage에 저장됩니다. 브라우저 설정에서 localStorage를 지우면 모든 로컬 데이터를 삭제할 수 있습니다.
• 서버에 저장되는 데이터는 Stripe 고객 정보(기기 ID와 연결)뿐입니다.
• 데이터 삭제를 원하시면 문의해 주세요.`,
      },
      {
        heading: "6. 보안",
        body: "본 앱은 HTTPS 강제, 보안 헤더, 서버 측 입력 검증, 속도 제한 등 적절한 보안 조치를 시행하고 있습니다.",
      },
      {
        heading: "7. 아동 프라이버시",
        body: "본 앱은 만 13세 미만 아동을 대상으로 하지 않습니다. 만 13세 미만의 아동 정보를 의도적으로 수집하지 않습니다.",
      },
      {
        heading: "8. 방침 변경",
        body: "본 방침은 사전 통지 없이 업데이트될 수 있습니다. 중요한 변경 사항은 앱 내에서 알려드립니다.",
      },
      {
        heading: "9. 문의",
        body: "프라이버시 관련 문의는 앱 내 문의 기능 또는 이메일로 연락해 주세요.",
      },
    ],
  },
};

export default function PrivacyPage() {
  const [locale, setLocale] = useState<Locale>("ja");

  useEffect(() => {
    setLocale(getStoredLocale());
  }, []);

  const c = content[locale];

  return (
    <main className="max-w-lg mx-auto px-6 py-10 min-h-screen">
      <a
        href="/"
        className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 mb-6"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        {locale === "ja" ? "ホームに戻る" : locale === "zh" ? "返回首页" : locale === "ko" ? "홈으로 돌아가기" : "Back to Home"}
      </a>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">{c.title}</h1>
      <p className="text-xs text-gray-400 mb-8">{c.lastUpdated}</p>
      <div className="space-y-6">
        {c.sections.map((s, i) => (
          <section key={i}>
            <h2 className="text-base font-bold text-gray-800 mb-2">{s.heading}</h2>
            <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">{s.body}</p>
          </section>
        ))}
      </div>
      <p className="text-center text-[10px] text-gray-300 mt-12 pb-8">AI Super App</p>
    </main>
  );
}
