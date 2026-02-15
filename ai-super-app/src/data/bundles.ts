import { Bundle } from "./types";

export const bundles: Bundle[] = [
  {
    id:"daily",emoji:"☀️",gradient:"from-orange-400 to-amber-500",bgLight:"bg-orange-50",
    tools:[
      {id:"wardrobe",nameKey:"tools.daily.wardrobe",emoji:"👔",type:"image-upload",
        inputLabelKey:"tools.daily.wardrobe_input",outputLabelKey:"tools.daily.wardrobe_output",
        aiPrompt:"あなたはファッションコーディネーターです。クローゼットの写真を分析し、今日の天気と気温を考慮したおすすめコーデを提案してください。"},
      {id:"calorie",nameKey:"tools.daily.calorie",emoji:"🍽️",type:"image-upload",
        inputLabelKey:"tools.daily.calorie_input",outputLabelKey:"tools.daily.calorie_output",
        aiPrompt:"あなたは管理栄養士です。食事の写真からカロリー、主要栄養素(タンパク質・脂質・炭水化物)を推定し、健康アドバイスを提供してください。"},
      {id:"recipe",nameKey:"tools.daily.recipe",emoji:"🍳",type:"image-upload",
        inputLabelKey:"tools.daily.recipe_input",outputLabelKey:"tools.daily.recipe_output",
        aiPrompt:"あなたは料理研究家です。冷蔵庫の写真から使える食材を特定し、簡単に作れるレシピを3つ提案してください。調理時間と難易度も記載してください。"}
    ]
  },
  {
    id:"creator",emoji:"🎬",gradient:"from-purple-500 to-indigo-600",bgLight:"bg-purple-50",
    tools:[
      {id:"thumbnail",nameKey:"tools.creator.thumbnail",emoji:"🖼️",type:"text-input",hasImage:true,
        inputLabelKey:"tools.creator.thumbnail_input",outputLabelKey:"tools.creator.thumbnail_output",
        placeholder:"例: 【衝撃】プログラマーが1ヶ月で月収100万円達成した方法",
        aiPrompt:"あなたはYouTubeサムネイルデザイナーです。動画タイトルから、クリック率の高いサムネイルの構図・色使い・テキスト配置を提案してください。"},
      {id:"voice",nameKey:"tools.creator.voice",emoji:"🎙️",type:"text-input",
        inputLabelKey:"tools.creator.voice_input",outputLabelKey:"tools.creator.voice_output",
        placeholder:"例: 今日はReactの新機能について解説します",
        aiPrompt:"あなたはナレーションディレクターです。テキストを自然な話し言葉に変換し、強調ポイントや間の取り方を指示してください。"},
      {id:"pitch",nameKey:"tools.creator.pitch",emoji:"📊",type:"text-input",
        inputLabelKey:"tools.creator.pitch_input",outputLabelKey:"tools.creator.pitch_output",
        placeholder:"例: AIを活用した個人向け栄養管理アプリの提案",
        aiPrompt:"あなたはプレゼンテーションデザイナーです。テーマからスライドの構成(タイトル・各スライドの見出しと要点)を提案してください。5〜8枚程度で。"}
    ]
  },
  {
    id:"sidehustle",emoji:"💼",gradient:"from-green-500 to-emerald-600",bgLight:"bg-green-50",
    tools:[
      {id:"listing",nameKey:"tools.sidehustle.listing",emoji:"🏷️",type:"image-upload",
        inputLabelKey:"tools.sidehustle.listing_input",outputLabelKey:"tools.sidehustle.listing_output",
        aiPrompt:"あなたはフリマアプリの出品エキスパートです。商品写真から魅力的な出品タイトルと説明文を生成してください。適正価格も提案してください。"},
      {id:"invoice",nameKey:"tools.sidehustle.invoice",emoji:"💴",type:"form-input",
        inputLabelKey:"tools.sidehustle.invoice_input",outputLabelKey:"tools.sidehustle.invoice_output",
        fields:[{name:"クライアント名",placeholder:"例: 株式会社ABC"},{name:"金額",placeholder:"例: 50,000円"},{name:"内容",placeholder:"例: Webサイトデザイン"}],
        aiPrompt:"あなたは経理のプロです。入力情報から請求書のフォーマットを生成してください。振込先や支払期限の注意点も記載してください。"},
      {id:"contract",nameKey:"tools.sidehustle.contract",emoji:"⚖️",type:"file-upload",
        inputLabelKey:"tools.sidehustle.contract_input",outputLabelKey:"tools.sidehustle.contract_output",
        aiPrompt:"あなたは契約書レビューの専門家です。契約書の内容を分析し、リスクのある条項や修正すべきポイントを指摘してください。"}
    ]
  },
  {
    id:"parent",emoji:"👨‍👩‍👧‍👦",gradient:"from-sky-400 to-blue-500",bgLight:"bg-sky-50",
    tools:[
      {id:"babyname",nameKey:"tools.parent.babyname",emoji:"👶",type:"form-input",
        inputLabelKey:"tools.parent.babyname_input",outputLabelKey:"tools.parent.babyname_output",
        fields:[{name:"姓",placeholder:"例: 田中"},{name:"希望する響き",placeholder:"例: 明るい、和風"},{name:"文字数",placeholder:"例: 2文字"}],
        aiPrompt:"あなたは命名の専門家です。姓との相性、画数、意味を考慮した名前を5つ提案してください。それぞれの由来と画数も記載してください。"},
      {id:"plant",nameKey:"tools.parent.plant",emoji:"🌿",type:"image-upload",
        inputLabelKey:"tools.parent.plant_input",outputLabelKey:"tools.parent.plant_output",
        aiPrompt:"あなたは植物の専門家です。植物の写真から種類を特定し、育て方のアドバイス(水やり頻度、日当たり、肥料)を提供してください。"},
      {id:"receipt",nameKey:"tools.parent.receipt",emoji:"🧾",type:"image-upload",
        inputLabelKey:"tools.parent.receipt_input",outputLabelKey:"tools.parent.receipt_output",
        aiPrompt:"あなたは家計管理のプロです。レシートの写真から金額とカテゴリを読み取り、月の支出傾向と節約アドバイスを提供してください。"}
    ]
  },
  {
    id:"student",emoji:"🎓",gradient:"from-indigo-500 to-blue-600",bgLight:"bg-indigo-50",
    tools:[
      {id:"study",nameKey:"tools.student.study",emoji:"📚",type:"image-upload",
        inputLabelKey:"tools.student.study_input",outputLabelKey:"tools.student.study_output",
        aiPrompt:"あなたは教育の専門家です。教科書やノートの写真から重要なポイントを抽出し、理解度チェック用の問題を5問作成してください。"},
      {id:"tone",nameKey:"tools.student.tone",emoji:"✏️",type:"text-input",
        inputLabelKey:"tools.student.tone_input",outputLabelKey:"tools.student.tone_output",
        placeholder:"例: 本研究では、機械学習アルゴリズムの性能評価を実施した。",
        aiPrompt:"あなたは文章のプロです。入力された文章のトーンを変換してください(カジュアル↔フォーマル、敬語↔タメ口など)。変換前後の違いのポイントも説明してください。"},
      {id:"resume",nameKey:"tools.student.resume",emoji:"📄",type:"file-upload",
        inputLabelKey:"tools.student.resume_input",outputLabelKey:"tools.student.resume_output",
        aiPrompt:"あなたはキャリアアドバイザーです。履歴書を分析し、改善ポイント、強調すべきスキル、面接対策のアドバイスを提供してください。"}
    ]
  },
  {
    id:"design",emoji:"🎯",gradient:"from-violet-500 to-purple-600",bgLight:"bg-violet-50",
    tools:[
      {id:"logo",nameKey:"tools.design.logo",emoji:"🎨",type:"form-input",hasImage:true,
        inputLabelKey:"tools.design.logo_input",outputLabelKey:"tools.design.logo_output",
        fields:[{name:"ブランド名",placeholder:"例: TechFlow"},{name:"業種",placeholder:"例: ITスタートアップ"},{name:"イメージ",placeholder:"例: モダン、信頼感"}],
        aiPrompt:"あなたはロゴデザイナーです。ブランド情報からロゴのコンセプト、形状、配色、フォントの提案をしてください。3パターン提案してください。"},
      {id:"color",nameKey:"tools.design.color",emoji:"🌈",type:"image-upload",
        inputLabelKey:"tools.design.color_input",outputLabelKey:"tools.design.color_output",
        aiPrompt:"あなたはカラーコンサルタントです。画像から色を抽出し、調和のとれたカラーパレットを提案してください。HEXコードも記載してください。"},
      {id:"mockup",nameKey:"tools.design.mockup",emoji:"📱",type:"form-input",hasImage:true,
        inputLabelKey:"tools.design.mockup_input",outputLabelKey:"tools.design.mockup_output",
        fields:[{name:"プロダクト",placeholder:"例: モバイルアプリ"},{name:"画面",placeholder:"例: ログイン画面"},{name:"スタイル",placeholder:"例: ミニマル"}],
        aiPrompt:"あなたはUIデザイナーです。プロダクト情報からUI/UXのモックアップ構成を提案してください。レイアウト、要素配置、インタラクションを記載してください。"}
    ]
  },
  {
    id:"realestate",emoji:"🏠",gradient:"from-amber-500 to-orange-600",bgLight:"bg-amber-50",
    tools:[
      {id:"floor",nameKey:"tools.realestate.floor",emoji:"🛋️",type:"image-upload",
        inputLabelKey:"tools.realestate.floor_input",outputLabelKey:"tools.realestate.floor_output",
        aiPrompt:"あなたはインテリアコーディネーターです。部屋の写真から最適な家具配置と内装のアドバイスを提供してください。"},
      {id:"compare",nameKey:"tools.realestate.compare",emoji:"🔍",type:"form-input",
        inputLabelKey:"tools.realestate.compare_input",outputLabelKey:"tools.realestate.compare_output",
        fields:[{name:"候補1",placeholder:"例: 渋谷区 2LDK 家賃15万"},{name:"候補2",placeholder:"例: 世田谷区 2LDK 家賃12万"},{name:"重視ポイント",placeholder:"例: 通勤時間、子育て環境"}],
        aiPrompt:"あなたは住まい選びのアドバイザーです。複数の物件候補の特徴を比較整理し、ライフスタイルに合った選択のポイントを提案してください。"},
      {id:"checklist",nameKey:"tools.realestate.checklist",emoji:"📋",type:"form-input",
        inputLabelKey:"tools.realestate.checklist_input",outputLabelKey:"tools.realestate.checklist_output",
        fields:[{name:"物件タイプ",placeholder:"例: 中古マンション"},{name:"家族構成",placeholder:"例: 夫婦+子供1人"},{name:"重視ポイント",placeholder:"例: 通勤、子育て環境"}],
        aiPrompt:"あなたは不動産コンサルタントです。内見時にチェックすべきポイントを網羅的にリストアップしてください。"}
    ]
  },
  {
    id:"sns",emoji:"📱",gradient:"from-blue-500 to-cyan-500",bgLight:"bg-blue-50",
    tools:[
      {id:"caption",nameKey:"tools.sns.caption",emoji:"✍️",type:"text-input",
        inputLabelKey:"tools.sns.caption_input",outputLabelKey:"tools.sns.caption_output",
        placeholder:"例: 新しいカフェを見つけた。ラテアートが最高。",
        aiPrompt:"あなたはSNSマーケティングのプロです。投稿内容からInstagram/Twitter/TikTok向けのバズるキャプションを3パターン生成してください。"},
      {id:"hashtag",nameKey:"tools.sns.hashtag",emoji:"#️⃣",type:"text-input",
        inputLabelKey:"tools.sns.hashtag_input",outputLabelKey:"tools.sns.hashtag_output",
        placeholder:"例: 東京 カフェ巡り スイーツ",
        aiPrompt:"あなたはSNSハッシュタグ戦略の専門家です。キーワードから最適なハッシュタグセット(人気タグ+ニッチタグ)を提案してください。"},
      {id:"bg",nameKey:"tools.sns.bg",emoji:"🖼️",type:"image-upload",
        inputLabelKey:"tools.sns.bg_input",outputLabelKey:"tools.sns.bg_output",
        aiPrompt:"あなたは商品写真の編集エキスパートです。商品写真の背景除去・差し替えのアドバイスと、魅力的な撮影アングルを提案してください。"}
    ]
  },
  {
    id:"money",emoji:"💰",gradient:"from-yellow-500 to-amber-600",bgLight:"bg-yellow-50",
    tools:[
      {id:"budget",nameKey:"tools.money.budget",emoji:"📊",type:"form-input",
        inputLabelKey:"tools.money.budget_input",outputLabelKey:"tools.money.budget_output",
        fields:[{name:"月収",placeholder:"例: 30万円"},{name:"固定費",placeholder:"例: 家賃8万、光熱費1.5万"},{name:"貯金目標",placeholder:"例: 月5万円"}],
        aiPrompt:"あなたはファイナンシャルプランナーです。収支情報から最適な予算配分と節約ポイントを提案してください。"},
      {id:"deal",nameKey:"tools.money.deal",emoji:"🏷️",type:"form-input",
        inputLabelKey:"tools.money.deal_input",outputLabelKey:"tools.money.deal_output",
        fields:[{name:"見直したい項目",placeholder:"例: スマホ代、サブスク"},{name:"月の支出",placeholder:"例: 25万円"},{name:"家族構成",placeholder:"例: 一人暮らし"}],
        aiPrompt:"あなたは節約アドバイザーです。固定費・変動費の見直しポイントと、すぐに実践できる節約テクニックを具体的に提案してください。"},
      {id:"saving",nameKey:"tools.money.saving",emoji:"🐷",type:"form-input",
        inputLabelKey:"tools.money.saving_input",outputLabelKey:"tools.money.saving_output",
        fields:[{name:"目標金額",placeholder:"例: 100万円"},{name:"期間",placeholder:"例: 1年"},{name:"月の余裕額",placeholder:"例: 5万円"}],
        aiPrompt:"あなたは貯蓄アドバイザーです。目標から逆算した具体的な貯蓄プランを提案してください。自動積立の設定方法も記載してください。"}
    ]
  },
  {
    id:"pet",emoji:"🐾",gradient:"from-orange-400 to-red-400",bgLight:"bg-orange-50",
    tools:[
      {id:"petphoto",nameKey:"tools.pet.petphoto",emoji:"📸",type:"image-upload",
        inputLabelKey:"tools.pet.petphoto_input",outputLabelKey:"tools.pet.petphoto_output",
        aiPrompt:"あなたはペット写真の専門家です。ペット写真をよりかわいく撮るためのアングル、照明、ポーズのアドバイスを提供してください。"},
      {id:"petfood",nameKey:"tools.pet.petfood",emoji:"🦴",type:"form-input",
        inputLabelKey:"tools.pet.petfood_input",outputLabelKey:"tools.pet.petfood_output",
        fields:[{name:"ペットの種類",placeholder:"例: 柴犬"},{name:"年齢・体重",placeholder:"例: 3歳 10kg"},{name:"健康状態",placeholder:"例: 特になし"}],
        aiPrompt:"あなたはペット栄養士です。ペットの情報から最適な食事プランとおすすめフードを提案してください。"},
      {id:"training",nameKey:"tools.pet.training",emoji:"🎾",type:"text-input",
        inputLabelKey:"tools.pet.training_input",outputLabelKey:"tools.pet.training_output",
        placeholder:"例: 散歩中に他の犬に吠えてしまう。1歳のトイプードル。",
        aiPrompt:"あなたはペットトレーナーです。しつけの悩みに対して、ポジティブ強化を中心とした具体的なトレーニング方法を提案してください。"}
    ]
  },
  {
    id:"travel",emoji:"✈️",gradient:"from-cyan-500 to-blue-600",bgLight:"bg-cyan-50",
    tools:[
      {id:"plan",nameKey:"tools.travel.plan",emoji:"🗺️",type:"form-input",
        inputLabelKey:"tools.travel.plan_input",outputLabelKey:"tools.travel.plan_output",
        fields:[{name:"目的地",placeholder:"例: バルセロナ"},{name:"期間",placeholder:"例: 4泊5日"},{name:"予算",placeholder:"例: 30万円"},{name:"興味",placeholder:"例: 建築、グルメ"}],
        aiPrompt:"あなたはプロの旅行プランナーです。条件に合った具体的で実用的な日ごとの旅行プランを作成してください。実在する具体的なスポット名・レストラン名・ホテル名を使い、Google Maps等のURLも可能な限り含めてください。移動手段、所要時間、費用目安、おすすめの食事スポットも記載してください。"},
      {id:"pack",nameKey:"tools.travel.pack",emoji:"🧳",type:"form-input",
        inputLabelKey:"tools.travel.pack_input",outputLabelKey:"tools.travel.pack_output",
        fields:[{name:"目的地",placeholder:"例: ハワイ"},{name:"期間",placeholder:"例: 5日間"},{name:"季節",placeholder:"例: 夏"}],
        aiPrompt:"あなたは旅行準備の専門家です。目的地と期間に合った持ち物リストを作成してください。必需品と便利グッズに分けてください。"},
      {id:"phrase",nameKey:"tools.travel.phrase",emoji:"💬",type:"form-input",
        inputLabelKey:"tools.travel.phrase_input",outputLabelKey:"tools.travel.phrase_output",
        fields:[{name:"言語",placeholder:"例: スペイン語"},{name:"場面",placeholder:"例: レストラン、ホテル、買い物"}],
        aiPrompt:"あなたは語学コーチです。旅行で使える実践的なフレーズを場面別に10個ずつ提案してください。発音ガイドも記載してください。"}
    ]
  },
  {
    id:"writer",emoji:"📝",gradient:"from-gray-600 to-gray-800",bgLight:"bg-gray-50",
    tools:[
      {id:"blog",nameKey:"tools.writer.blog",emoji:"📰",type:"text-input",
        inputLabelKey:"tools.writer.blog_input",outputLabelKey:"tools.writer.blog_output",
        placeholder:"例: リモートワークで生産性を上げる5つの方法",
        aiPrompt:"あなたはプロのブログライターです。テーマから読みやすいブログ記事の構成(見出し、導入、各セクションの要点)を提案してください。"},
      {id:"mail",nameKey:"tools.writer.mail",emoji:"📧",type:"text-input",
        inputLabelKey:"tools.writer.mail_input",outputLabelKey:"tools.writer.mail_output",
        placeholder:"例: 納期延長のお願い。理由は資材の遅延。1週間の延長を希望。",
        aiPrompt:"あなたはビジネスメールの専門家です。要点からプロフェッショナルなメールを作成してください。敬語・ビジネスマナーを守ってください。"},
      {id:"proofread",nameKey:"tools.writer.proofread",emoji:"🔍",type:"text-input",
        inputLabelKey:"tools.writer.proofread_input",outputLabelKey:"tools.writer.proofread_output",
        placeholder:"文章を貼り付けてください",
        aiPrompt:"あなたはプロの校正者です。文章の誤字脱字、文法ミス、表現の改善点を指摘してください。修正案も提示してください。"}
    ]
  },
  {
    id:"diy",emoji:"🔨",gradient:"from-yellow-600 to-orange-600",bgLight:"bg-yellow-50",
    tools:[
      {id:"plan",nameKey:"tools.diy.plan",emoji:"📐",type:"image-upload",
        inputLabelKey:"tools.diy.plan_input",outputLabelKey:"tools.diy.plan_output",
        aiPrompt:"あなたはDIYアドバイザーです。写真から改修・制作プランを提案してください。必要な工具・材料・手順を記載してください。"},
      {id:"cost",nameKey:"tools.diy.cost",emoji:"💰",type:"form-input",
        inputLabelKey:"tools.diy.cost_input",outputLabelKey:"tools.diy.cost_output",
        fields:[{name:"プロジェクト",placeholder:"例: 本棚を作る"},{name:"サイズ",placeholder:"例: 幅80cm×高さ180cm"},{name:"素材",placeholder:"例: パイン材"}],
        aiPrompt:"あなたはDIYコストの専門家です。プロジェクトの材料費・工具費を見積もってください。ホームセンターでの購入先も提案してください。"},
      {id:"fix",nameKey:"tools.diy.fix",emoji:"🔧",type:"image-upload",
        inputLabelKey:"tools.diy.fix_input",outputLabelKey:"tools.diy.fix_output",
        aiPrompt:"あなたは修理の専門家です。壊れた箇所の写真から修理方法をステップバイステップで説明してください。必要な道具と難易度も記載してください。"}
    ]
  },
  {
    id:"music",emoji:"🎵",gradient:"from-pink-500 to-purple-600",bgLight:"bg-pink-50",
    tools:[
      {id:"chord",nameKey:"tools.music.chord",emoji:"🎸",type:"form-input",
        inputLabelKey:"tools.music.chord_input",outputLabelKey:"tools.music.chord_output",
        fields:[{name:"ジャンル",placeholder:"例: J-Pop、ボサノバ"},{name:"雰囲気",placeholder:"例: 切ない、爽やか"},{name:"キー",placeholder:"例: Cメジャー"}],
        aiPrompt:"あなたは作曲家です。条件に合ったコード進行を3パターン提案してください。各コードの機能と雰囲気の説明も記載してください。"},
      {id:"lyric",nameKey:"tools.music.lyric",emoji:"🎤",type:"text-input",
        inputLabelKey:"tools.music.lyric_input",outputLabelKey:"tools.music.lyric_output",
        placeholder:"例: 夏の終わり、片思いの思い出",
        aiPrompt:"あなたは作詞家です。テーマからAメロ・Bメロ・サビの歌詞を作成してください。韻を踏んだり、印象的なフレーズを入れてください。"},
      {id:"mix",nameKey:"tools.music.mix",emoji:"🎛️",type:"text-input",
        inputLabelKey:"tools.music.mix_input",outputLabelKey:"tools.music.mix_output",
        placeholder:"例: ボーカル+アコギ+ドラムの3トラック。ボーカルが埋もれる。",
        aiPrompt:"あなたはミキシングエンジニアです。トラック構成の問題を分析し、EQ、コンプ、パンニングのアドバイスを提供してください。"}
    ]
  },
  {
    id:"game",emoji:"🎮",gradient:"from-green-500 to-teal-600",bgLight:"bg-green-50",
    tools:[
      {id:"idea",nameKey:"tools.game.idea",emoji:"💡",type:"form-input",
        inputLabelKey:"tools.game.idea_input",outputLabelKey:"tools.game.idea_output",
        fields:[{name:"ジャンル",placeholder:"例: ローグライク、パズル"},{name:"プラットフォーム",placeholder:"例: スマホ"},{name:"ターゲット",placeholder:"例: カジュアルゲーマー"}],
        aiPrompt:"あなたはゲームデザイナーです。条件に合ったゲームのコンセプトを提案してください。コアメカニクス、ユニークポイント、マネタイズを記載してください。"},
      {id:"story",nameKey:"tools.game.story",emoji:"📖",type:"text-input",
        inputLabelKey:"tools.game.story_input",outputLabelKey:"tools.game.story_output",
        placeholder:"例: ポスト・アポカリプスの世界。主人公は記憶喪失のロボット。",
        aiPrompt:"あなたはゲームシナリオライターです。世界観設定からメインストーリーの概要、キャラクター設定、重要なプロットポイントを提案してください。"},
      {id:"balance",nameKey:"tools.game.balance",emoji:"⚖️",type:"text-input",
        inputLabelKey:"tools.game.balance_input",outputLabelKey:"tools.game.balance_output",
        placeholder:"例: 戦士クラスが強すぎて魔法使いが使われない。戦士HP100攻撃30、魔法使いHP60攻撃20+魔法。",
        aiPrompt:"あなたはゲームバランスの専門家です。パラメータを分析し、バランス改善の提案をしてください。数値の根拠も説明してください。"}
    ]
  },
  {
    id:"cook",emoji:"👨‍🍳",gradient:"from-red-500 to-orange-500",bgLight:"bg-red-50",
    tools:[
      {id:"arrange",nameKey:"tools.cook.arrange",emoji:"✨",type:"image-upload",
        inputLabelKey:"tools.cook.arrange_input",outputLabelKey:"tools.cook.arrange_output",
        aiPrompt:"あなたは料理研究家です。料理の写真から盛り付けの改善点と、味のアレンジ提案をしてください。"},
      {id:"menu",nameKey:"tools.cook.menu",emoji:"📋",type:"form-input",
        inputLabelKey:"tools.cook.menu_input",outputLabelKey:"tools.cook.menu_output",
        fields:[{name:"人数",placeholder:"例: 4人家族"},{name:"制限",placeholder:"例: 子供あり、アレルギーなし"},{name:"予算",placeholder:"例: 週5000円"}],
        aiPrompt:"あなたは献立アドバイザーです。条件に合った1週間の献立を作成してください。買い物リストも付けてください。"},
      {id:"pairing",nameKey:"tools.cook.pairing",emoji:"🍷",type:"text-input",
        inputLabelKey:"tools.cook.pairing_input",outputLabelKey:"tools.cook.pairing_output",
        placeholder:"例: 鶏の唐揚げ",
        aiPrompt:"あなたはフードペアリングの専門家です。メイン料理に合う副菜、ドリンク、デザートを提案してください。"}
    ]
  },
  {
    id:"photo",emoji:"📸",gradient:"from-gray-700 to-gray-900",bgLight:"bg-gray-50",
    tools:[
      {id:"enhance",nameKey:"tools.photo.enhance",emoji:"✨",type:"image-upload",
        inputLabelKey:"tools.photo.enhance_input",outputLabelKey:"tools.photo.enhance_output",
        aiPrompt:"あなたはプロの写真家です。写真の改善ポイント(露出、ホワイトバランス、彩度、シャープネス)を分析し、具体的な編集パラメータを提案してください。"},
      {id:"comp",nameKey:"tools.photo.comp",emoji:"📐",type:"image-upload",
        inputLabelKey:"tools.photo.comp_input",outputLabelKey:"tools.photo.comp_output",
        aiPrompt:"あなたは写真構図の専門家です。写真の構図を分析し、三分割法・対角線構図などの観点から改善点を提案してください。"},
      {id:"edit",nameKey:"tools.photo.edit",emoji:"🎨",type:"image-upload",
        inputLabelKey:"tools.photo.edit_input",outputLabelKey:"tools.photo.edit_output",
        aiPrompt:"あなたはLightroom/Photoshopのエキスパートです。写真に最適な編集ワークフローをステップバイステップで提案してください。"}
    ]
  },
  {
    id:"learn",emoji:"📖",gradient:"from-emerald-500 to-green-600",bgLight:"bg-emerald-50",
    tools:[
      {id:"explain",nameKey:"tools.learn.explain",emoji:"💡",type:"text-input",
        inputLabelKey:"tools.learn.explain_input",outputLabelKey:"tools.learn.explain_output",
        placeholder:"例: 量子コンピュータの仕組みを中学生にもわかるように",
        aiPrompt:"あなたは優秀な家庭教師です。難しい概念を身近な例えを使ってわかりやすく説明してください。段階的に理解が深まるよう構成してください。"},
      {id:"quiz",nameKey:"tools.learn.quiz",emoji:"❓",type:"form-input",
        inputLabelKey:"tools.learn.quiz_input",outputLabelKey:"tools.learn.quiz_output",
        fields:[{name:"科目",placeholder:"例: 日本史、Python"},{name:"範囲",placeholder:"例: 江戸時代、リスト操作"},{name:"難易度",placeholder:"例: 中級"}],
        aiPrompt:"あなたはテスト作成の専門家です。条件に合った確認テスト(5問)を作成してください。選択肢式と記述式を混ぜてください。解答と解説も付けてください。"},
      {id:"roadmap",nameKey:"tools.learn.roadmap",emoji:"🗺️",type:"form-input",
        inputLabelKey:"tools.learn.roadmap_input",outputLabelKey:"tools.learn.roadmap_output",
        fields:[{name:"学びたいこと",placeholder:"例: Webエンジニアになる"},{name:"現在のレベル",placeholder:"例: HTML/CSSは少し"},{name:"期間",placeholder:"例: 6ヶ月"}],
        aiPrompt:"あなたは学習コーチです。目標達成のための段階的な学習ロードマップを作成してください。週ごとのマイルストーンとおすすめリソースを記載してください。"}
    ]
  },
  {
    id:"wedding",emoji:"💒",gradient:"from-rose-400 to-pink-500",bgLight:"bg-rose-50",
    tools:[
      {id:"plan",nameKey:"tools.wedding.plan",emoji:"📋",type:"form-input",
        inputLabelKey:"tools.wedding.plan_input",outputLabelKey:"tools.wedding.plan_output",
        fields:[{name:"時期",placeholder:"例: 来年6月"},{name:"人数",placeholder:"例: 80人"},{name:"予算",placeholder:"例: 300万円"},{name:"スタイル",placeholder:"例: ガーデンウェディング"}],
        aiPrompt:"あなたはウェディングプランナーです。条件に合った結婚式の全体プランを提案してください。タイムライン、会場選び、演出のアイデアを記載してください。"},
      {id:"speech",nameKey:"tools.wedding.speech",emoji:"🎤",type:"form-input",
        inputLabelKey:"tools.wedding.speech_input",outputLabelKey:"tools.wedding.speech_output",
        fields:[{name:"関係",placeholder:"例: 新郎の友人"},{name:"エピソード",placeholder:"例: 大学のサークルで出会った"},{name:"長さ",placeholder:"例: 3分程度"}],
        aiPrompt:"あなたはスピーチライターです。結婚式のスピーチを作成してください。温かみがあり、会場が笑顔になるような内容にしてください。"},
      {id:"budget",nameKey:"tools.wedding.budget",emoji:"💰",type:"form-input",
        inputLabelKey:"tools.wedding.budget_input",outputLabelKey:"tools.wedding.budget_output",
        fields:[{name:"総予算",placeholder:"例: 300万円"},{name:"人数",placeholder:"例: 80人"},{name:"こだわり",placeholder:"例: 料理、ドレス"}],
        aiPrompt:"あなたはウェディングの予算管理の専門家です。総予算から各項目の適切な配分を提案してください。節約ポイントも記載してください。"}
    ]
  },
  {
    id:"moving",emoji:"🚚",gradient:"from-blue-500 to-indigo-600",bgLight:"bg-blue-50",
    tools:[
      {id:"checklist",nameKey:"tools.moving.checklist",emoji:"✅",type:"form-input",
        inputLabelKey:"tools.moving.checklist_input",outputLabelKey:"tools.moving.checklist_output",
        fields:[{name:"引越し日",placeholder:"例: 3月15日"},{name:"現住所→新住所",placeholder:"例: 東京→大阪"},{name:"家族構成",placeholder:"例: 一人暮らし"}],
        aiPrompt:"あなたは引越しアドバイザーです。引越し日から逆算した準備チェックリストを作成してください。手続き、片付け、当日の動きを時系列で記載してください。"},
      {id:"cost",nameKey:"tools.moving.cost",emoji:"💰",type:"form-input",
        inputLabelKey:"tools.moving.cost_input",outputLabelKey:"tools.moving.cost_output",
        fields:[{name:"距離",placeholder:"例: 東京→大阪"},{name:"荷物量",placeholder:"例: 1LDK分"},{name:"時期",placeholder:"例: 3月"}],
        aiPrompt:"あなたは引越し費用の専門家です。条件から引越し費用の相場を見積もってください。節約のコツも記載してください。"},
      {id:"layout",nameKey:"tools.moving.layout",emoji:"🏠",type:"image-upload",
        inputLabelKey:"tools.moving.layout_input",outputLabelKey:"tools.moving.layout_output",
        aiPrompt:"あなたはインテリアコーディネーターです。新居の写真から最適な家具配置を提案してください。動線と収納効率を考慮してください。"}
    ]
  },
  {
    id:"kid",emoji:"🧒",gradient:"from-yellow-400 to-orange-400",bgLight:"bg-yellow-50",
    tools:[
      {id:"story",nameKey:"tools.kid.story",emoji:"📖",type:"form-input",
        inputLabelKey:"tools.kid.story_input",outputLabelKey:"tools.kid.story_output",
        fields:[{name:"子供の年齢",placeholder:"例: 5歳"},{name:"テーマ",placeholder:"例: 勇気、友情"},{name:"好きなもの",placeholder:"例: 恐竜、宇宙"}],
        aiPrompt:"あなたは絵本作家です。子供の年齢に合ったオリジナルの短いお話を作成してください。教育的な要素も自然に盛り込んでください。"},
      {id:"quiz",nameKey:"tools.kid.quiz",emoji:"❓",type:"form-input",
        inputLabelKey:"tools.kid.quiz_input",outputLabelKey:"tools.kid.quiz_output",
        fields:[{name:"年齢",placeholder:"例: 8歳"},{name:"教科",placeholder:"例: 算数、理科"},{name:"苦手なところ",placeholder:"例: かけ算"}],
        aiPrompt:"あなたは子供向けの家庭教師です。年齢に合った楽しいクイズを5問作成してください。ヒントと解説も付けてください。"},
      {id:"craft",nameKey:"tools.kid.craft",emoji:"✂️",type:"form-input",
        inputLabelKey:"tools.kid.craft_input",outputLabelKey:"tools.kid.craft_output",
        fields:[{name:"年齢",placeholder:"例: 6歳"},{name:"材料",placeholder:"例: 牛乳パック、折り紙"},{name:"テーマ",placeholder:"例: 動物"}],
        aiPrompt:"あなたは工作の先生です。材料で作れる楽しい工作アイデアを提案してください。手順をイラスト付きで説明するように記載してください。"}
    ]
  },
  {
    id:"senior",emoji:"👴",gradient:"from-teal-500 to-green-600",bgLight:"bg-teal-50",
    tools:[
      {id:"exercise",nameKey:"tools.senior.exercise",emoji:"🤸",type:"form-input",
        inputLabelKey:"tools.senior.exercise_input",outputLabelKey:"tools.senior.exercise_output",
        fields:[{name:"年齢",placeholder:"例: 70歳"},{name:"体力レベル",placeholder:"例: 毎日散歩している"},{name:"場所",placeholder:"例: 自宅、公園"}],
        aiPrompt:"あなたはシニア向けの運動インストラクターです。年齢と体力に合った安全で楽しい軽運動メニューを提案してください。ラジオ体操やウォーキングなど日常に取り入れやすいものを中心に。"},
      {id:"digital",nameKey:"tools.senior.digital",emoji:"📱",type:"text-input",
        inputLabelKey:"tools.senior.digital_input",outputLabelKey:"tools.senior.digital_output",
        placeholder:"例: LINEでビデオ通話のやり方がわからない",
        aiPrompt:"あなたはシニア向けのデジタル教室の先生です。スマホやパソコンの操作方法を大きな文字で、専門用語を使わず、ステップバイステップで説明してください。"},
      {id:"memory",nameKey:"tools.senior.memory",emoji:"📷",type:"image-upload",
        inputLabelKey:"tools.senior.memory_input",outputLabelKey:"tools.senior.memory_output",
        aiPrompt:"あなたは回想法の専門家です。古い写真から時代背景や思い出を語りかけるような文章を生成してください。温かみのある文体で。"}
    ]
  },
  {
    id:"date",emoji:"❤️",gradient:"from-red-400 to-pink-500",bgLight:"bg-red-50",
    tools:[
      {id:"plan",nameKey:"tools.date.plan",emoji:"📍",type:"form-input",
        inputLabelKey:"tools.date.plan_input",outputLabelKey:"tools.date.plan_output",
        fields:[{name:"エリア",placeholder:"例: 表参道〜渋谷"},{name:"時間帯",placeholder:"例: 午後〜夜"},{name:"雰囲気",placeholder:"例: おしゃれ、カジュアル"},{name:"予算",placeholder:"例: 1万円"}],
        aiPrompt:"あなたはデートプランナーです。条件に合ったデートコースを提案してください。時間配分、お店の提案、会話のネタも記載してください。"},
      {id:"gift",nameKey:"tools.date.gift",emoji:"🎁",type:"form-input",
        inputLabelKey:"tools.date.gift_input",outputLabelKey:"tools.date.gift_output",
        fields:[{name:"相手",placeholder:"例: 20代女性、付き合って半年"},{name:"予算",placeholder:"例: 1万円"},{name:"好み",placeholder:"例: 甘いもの、アクセサリー"}],
        aiPrompt:"あなたはギフトコンシェルジュです。相手の情報から最適なプレゼントを5つ提案してください。購入場所と選んだ理由も記載してください。"},
      {id:"message",nameKey:"tools.date.message",emoji:"💌",type:"text-input",
        inputLabelKey:"tools.date.message_input",outputLabelKey:"tools.date.message_output",
        placeholder:"例: 初デート後のお礼メッセージ。楽しかったと伝えたい。",
        aiPrompt:"あなたは恋愛コミュニケーションの専門家です。場面に合ったメッセージを3パターン(カジュアル・丁寧・ロマンチック)で作成してください。"}
    ]
  },
  {
    id:"car",emoji:"🚗",gradient:"from-blue-600 to-indigo-700",bgLight:"bg-blue-50",
    tools:[
      {id:"diagnose",nameKey:"tools.car.diagnose",emoji:"🔧",type:"text-input",
        inputLabelKey:"tools.car.diagnose_input",outputLabelKey:"tools.car.diagnose_output",
        placeholder:"例: エンジンをかけると異音がする。キュルキュルという音。",
        aiPrompt:"あなたは自動車整備士です。症状から考えられる原因と対処法を説明してください。緊急度と修理費の目安も記載してください。"},
      {id:"cost",nameKey:"tools.car.cost",emoji:"💰",type:"form-input",
        inputLabelKey:"tools.car.cost_input",outputLabelKey:"tools.car.cost_output",
        fields:[{name:"車種",placeholder:"例: トヨタ ヤリス"},{name:"年間走行距離",placeholder:"例: 10,000km"},{name:"駐車場代",placeholder:"例: 月2万円"}],
        aiPrompt:"あなたは車の維持費の専門家です。年間の維持費(ガソリン、保険、車検、税金、駐車場)を試算してください。節約ポイントも記載してください。"},
      {id:"compare",nameKey:"tools.car.compare",emoji:"🔍",type:"form-input",
        inputLabelKey:"tools.car.compare_input",outputLabelKey:"tools.car.compare_output",
        fields:[{name:"候補1",placeholder:"例: トヨタ ヤリス"},{name:"候補2",placeholder:"例: ホンダ フィット"},{name:"重視ポイント",placeholder:"例: 燃費、安全性"}],
        aiPrompt:"あなたは車の比較レビュアーです。2車種を燃費、安全性、価格、室内空間、走行性能で比較してください。"}
    ]
  },
  {
    id:"eco",emoji:"🌍",gradient:"from-green-500 to-emerald-600",bgLight:"bg-green-50",
    tools:[
      {id:"footprint",nameKey:"tools.eco.footprint",emoji:"👣",type:"form-input",
        inputLabelKey:"tools.eco.footprint_input",outputLabelKey:"tools.eco.footprint_output",
        fields:[{name:"移動手段",placeholder:"例: 車通勤 往復30km"},{name:"食生活",placeholder:"例: 肉多め"},{name:"電気使用量",placeholder:"例: 月300kWh"}],
        aiPrompt:"あなたは環境コンサルタントです。生活情報からCO2排出量を推定し、削減のための具体的なアクションを提案してください。"},
      {id:"swap",nameKey:"tools.eco.swap",emoji:"♻️",type:"image-upload",
        inputLabelKey:"tools.eco.swap_input",outputLabelKey:"tools.eco.swap_output",
        aiPrompt:"あなたはサステナブルライフの専門家です。日用品の写真からエコフレンドリーな代替品を提案してください。コストと環境効果も記載してください。"},
      {id:"save",nameKey:"tools.eco.save",emoji:"⚡",type:"form-input",
        inputLabelKey:"tools.eco.save_input",outputLabelKey:"tools.eco.save_output",
        fields:[{name:"住居タイプ",placeholder:"例: マンション 2LDK"},{name:"月の電気代",placeholder:"例: 8000円"},{name:"家電",placeholder:"例: エアコン2台、冷蔵庫"}],
        aiPrompt:"あなたは省エネアドバイザーです。電力使用状況を分析し、節電の具体的な方法と月の節約額を提案してください。"}
    ]
  },
  {
    id:"garden",emoji:"🌻",gradient:"from-lime-500 to-green-600",bgLight:"bg-lime-50",
    tools:[
      {id:"identify",nameKey:"tools.garden.identify",emoji:"🔍",type:"image-upload",
        inputLabelKey:"tools.garden.identify_input",outputLabelKey:"tools.garden.identify_output",
        aiPrompt:"あなたは植物学者です。植物の写真から種類を特定し、育て方(水やり、日光、土)のアドバイスを提供してください。"},
      {id:"calendar",nameKey:"tools.garden.calendar",emoji:"📅",type:"form-input",
        inputLabelKey:"tools.garden.calendar_input",outputLabelKey:"tools.garden.calendar_output",
        fields:[{name:"地域",placeholder:"例: 関東"},{name:"スペース",placeholder:"例: ベランダ"},{name:"育てたいもの",placeholder:"例: ハーブ、トマト"}],
        aiPrompt:"あなたはガーデニングの専門家です。条件に合った月ごとの栽培カレンダーを作成してください。種まき、植え付け、収穫のタイミングを記載してください。"},
      {id:"trouble",nameKey:"tools.garden.trouble",emoji:"🐛",type:"image-upload",
        inputLabelKey:"tools.garden.trouble_input",outputLabelKey:"tools.garden.trouble_output",
        aiPrompt:"あなたは植物のドクターです。植物のトラブル写真から病気や害虫を特定し、対処法を提案してください。予防法も記載してください。"}
    ]
  },
  {
    id:"biz",emoji:"💼",gradient:"from-gray-700 to-gray-900",bgLight:"bg-gray-50",
    tools:[
      {id:"swot",nameKey:"tools.biz.swot",emoji:"📊",type:"form-input",
        inputLabelKey:"tools.biz.swot_input",outputLabelKey:"tools.biz.swot_output",
        fields:[{name:"事業内容",placeholder:"例: オンライン英会話サービス"},{name:"強み",placeholder:"例: 低価格、24時間対応"},{name:"競合",placeholder:"例: DMM英会話、レアジョブ"}],
        aiPrompt:"あなたはビジネスコンサルタントです。事業情報からSWOT分析を行い、戦略的な示唆を提供してください。"},
      {id:"pitch",nameKey:"tools.biz.pitch",emoji:"🎯",type:"text-input",
        inputLabelKey:"tools.biz.pitch_input",outputLabelKey:"tools.biz.pitch_output",
        placeholder:"例: AIを使った個人向け栄養管理アプリ。忙しい会社員がターゲット。",
        aiPrompt:"あなたはスタートアップアドバイザーです。事業アイデアからエレベーターピッチと事業計画の骨子を作成してください。"},
      {id:"email",nameKey:"tools.biz.email",emoji:"📧",type:"text-input",
        inputLabelKey:"tools.biz.email_input",outputLabelKey:"tools.biz.email_output",
        placeholder:"例: クライアントに納期遅延のお詫びと新しいスケジュールの提案",
        aiPrompt:"あなたはビジネスコミュニケーションの専門家です。要点からプロフェッショナルなビジネスメールを作成してください。"}
    ]
  },
  {
    id:"lang",emoji:"🗣️",gradient:"from-sky-500 to-blue-600",bgLight:"bg-sky-50",
    tools:[
      {id:"conv",nameKey:"tools.lang.conv",emoji:"💬",type:"text-input",
        inputLabelKey:"tools.lang.conv_input",outputLabelKey:"tools.lang.conv_output",
        placeholder:"例: I'd like to book a table for two tonight.",
        aiPrompt:"あなたは語学の先生です。ユーザーの外国語文を添削し、文法・表現・自然さをフィードバックしてください。より良い表現も提案してください。"},
      {id:"vocab",nameKey:"tools.lang.vocab",emoji:"📝",type:"form-input",
        inputLabelKey:"tools.lang.vocab_input",outputLabelKey:"tools.lang.vocab_output",
        fields:[{name:"言語",placeholder:"例: 英語、韓国語"},{name:"レベル",placeholder:"例: TOEIC 600目標"},{name:"テーマ",placeholder:"例: ビジネス、旅行"}],
        aiPrompt:"あなたは語学教師です。条件に合った重要単語リストを10語作成してください。例文と発音ガイドも記載してください。"},
      {id:"trans",nameKey:"tools.lang.trans",emoji:"🌐",type:"text-input",
        inputLabelKey:"tools.lang.trans_input",outputLabelKey:"tools.lang.trans_output",
        placeholder:"例: この案件について、来週中にお返事いただけますでしょうか。",
        aiPrompt:"あなたはプロの翻訳者です。テキストを翻訳し、重要な表現やニュアンスの解説も付けてください。"}
    ]
  },
  {
    id:"archive",emoji:"🗂️",gradient:"from-amber-500 to-yellow-600",bgLight:"bg-amber-50",
    tools:[
      {id:"closet",nameKey:"tools.archive.closet",emoji:"👕",type:"image-upload",
        inputLabelKey:"tools.archive.closet_input",outputLabelKey:"tools.archive.closet_output",
        aiPrompt:"あなたは整理収納アドバイザーです。クローゼットの写真から断捨離のアドバイスと効率的な収納方法を提案してください。"},
      {id:"desk",nameKey:"tools.archive.desk",emoji:"🖥️",type:"image-upload",
        inputLabelKey:"tools.archive.desk_input",outputLabelKey:"tools.archive.desk_output",
        aiPrompt:"あなたはデスク環境の専門家です。デスクの写真から作業効率を上げるための改善ポイントを提案してください。"},
      {id:"digital",nameKey:"tools.archive.digital",emoji:"📱",type:"form-input",
        inputLabelKey:"tools.archive.digital_input",outputLabelKey:"tools.archive.digital_output",
        fields:[{name:"アプリ数(目安)",placeholder:"例: 120個くらい"},{name:"写真枚数",placeholder:"例: 15000枚"},{name:"ストレージ残り",placeholder:"例: 5GB"}],
        aiPrompt:"あなたはデジタル整理の専門家です。スマホの整理プランを作成してください。アプリの断捨離、写真の整理、ストレージ節約の方法を記載してください。"}
    ]
  },
  {
    id:"event",emoji:"🎉",gradient:"from-pink-500 to-rose-600",bgLight:"bg-pink-50",
    tools:[
      {id:"plan",nameKey:"tools.event.plan",emoji:"📋",type:"form-input",
        inputLabelKey:"tools.event.plan_input",outputLabelKey:"tools.event.plan_output",
        fields:[{name:"種類",placeholder:"例: 誕生日会、忘年会"},{name:"人数",placeholder:"例: 15人"},{name:"予算",placeholder:"例: 5万円"},{name:"場所",placeholder:"例: 東京都内"}],
        aiPrompt:"あなたはイベントプランナーです。条件に合ったイベントの企画プランを作成してください。タイムライン、会場候補、食事、演出を記載してください。"},
      {id:"invite",nameKey:"tools.event.invite",emoji:"💌",type:"text-input",
        inputLabelKey:"tools.event.invite_input",outputLabelKey:"tools.event.invite_output",
        placeholder:"例: 3/15 土曜 18時から渋谷で花子の誕生日会。会費3000円。",
        aiPrompt:"あなたは招待状ライターです。イベント情報からおしゃれな招待状テキストを作成してください。LINE、Instagram、メール向けの3パターンを提供してください。"},
      {id:"gift",nameKey:"tools.event.gift",emoji:"🎁",type:"form-input",
        inputLabelKey:"tools.event.gift_input",outputLabelKey:"tools.event.gift_output",
        fields:[{name:"相手",placeholder:"例: 30代女性、同僚"},{name:"予算",placeholder:"例: 5000円"},{name:"好み",placeholder:"例: コスメ好き、猫好き"}],
        aiPrompt:"あなたはギフトコンシェルジュです。相手の情報から最適なプレゼントを5つ提案してください。購入場所とおすすめ理由も記載してください。"}
    ]
  },
  {
    id:"access",emoji:"♿",gradient:"from-teal-500 to-cyan-600",bgLight:"bg-teal-50",
    tools:[
      {id:"web",nameKey:"tools.access.web",emoji:"🌐",type:"text-input",
        inputLabelKey:"tools.access.web_input",outputLabelKey:"tools.access.web_output",
        placeholder:"例: https://example.com",
        aiPrompt:"あなたはWebアクセシビリティの専門家です。URLから一般的なアクセシビリティ問題を分析し、WCAG 2.1準拠のための改善提案をしてください。"},
      {id:"doc",nameKey:"tools.access.doc",emoji:"📄",type:"text-input",
        inputLabelKey:"tools.access.doc_input",outputLabelKey:"tools.access.doc_output",
        placeholder:"例: 当施設では、利用者の皆様に対し、所定の手続きを経た上で、各種サービスの提供を行っております。",
        aiPrompt:"あなたはやさしい日本語の専門家です。難しい文章を外国人や高齢者にも理解しやすい「やさしい日本語」に変換してください。ふりがなも付けてください。"},
      {id:"sign",nameKey:"tools.access.sign",emoji:"🪧",type:"form-input",
        inputLabelKey:"tools.access.sign_input",outputLabelKey:"tools.access.sign_output",
        fields:[{name:"内容",placeholder:"例: トイレの場所案内"},{name:"設置場所",placeholder:"例: 商業施設の1階"},{name:"対象者",placeholder:"例: 外国人観光客、高齢者"}],
        aiPrompt:"あなたはユニバーサルデザインの専門家です。多言語対応でアクセシブルな案内板のデザイン提案をしてください。ピクトグラムの使い方も記載してください。"}
    ]
  },
  {
    id:"time",emoji:"⏰",gradient:"from-blue-400 to-indigo-500",bgLight:"bg-blue-50",
    tools:[
      {id:"schedule",nameKey:"tools.time.schedule",emoji:"📅",type:"form-input",
        inputLabelKey:"tools.time.schedule_input",outputLabelKey:"tools.time.schedule_output",
        fields:[{name:"やること",placeholder:"例: 勉強、運動、読書、家事"},{name:"使える時間",placeholder:"例: 平日は仕事後の3時間"},{name:"優先度",placeholder:"例: 勉強を最優先"}],
        aiPrompt:"あなたはタイムマネジメントの専門家です。やりたいことと使える時間から、効率的な週間スケジュールを作成してください。時間ブロック法を活用してください。"},
      {id:"morning",nameKey:"tools.time.morning",emoji:"🌅",type:"form-input",
        inputLabelKey:"tools.time.morning_input",outputLabelKey:"tools.time.morning_output",
        fields:[{name:"起床時間",placeholder:"例: 6:00"},{name:"出発時間",placeholder:"例: 8:30"},{name:"やりたいこと",placeholder:"例: 運動、読書、英語学習"}],
        aiPrompt:"あなたは朝活コーチです。起床から出発までの時間を最大限活用するモーニングルーティンを提案してください。段階的に習慣化するコツも記載してください。"},
      {id:"habit",nameKey:"tools.time.habit",emoji:"✅",type:"form-input",
        inputLabelKey:"tools.time.habit_input",outputLabelKey:"tools.time.habit_output",
        fields:[{name:"身につけたい習慣",placeholder:"例: 毎日30分読書"},{name:"現状",placeholder:"例: 3日坊主になりがち"},{name:"環境",placeholder:"例: 在宅勤務"}],
        aiPrompt:"あなたは習慣化の専門家です。行動科学に基づいた習慣定着のプランを作成してください。トリガー設定、小さく始める方法、記録の仕方を記載してください。"}
    ]
  },
  {
    id:"career",emoji:"🎯",gradient:"from-indigo-600 to-blue-700",bgLight:"bg-indigo-50",
    tools:[
      {id:"skill",nameKey:"tools.career.skill",emoji:"📊",type:"text-input",
        inputLabelKey:"tools.career.skill_input",outputLabelKey:"tools.career.skill_output",
        placeholder:"例: Webエンジニア3年目。React, TypeScript, Node.jsが使える。マネジメント経験なし。",
        aiPrompt:"あなたはキャリアコンサルタントです。現在のスキルセットを分析し、市場価値を高めるために伸ばすべきスキルとその学習方法を提案してください。"},
      {id:"interview",nameKey:"tools.career.interview",emoji:"🎤",type:"form-input",
        inputLabelKey:"tools.career.interview_input",outputLabelKey:"tools.career.interview_output",
        fields:[{name:"応募職種",placeholder:"例: フロントエンドエンジニア"},{name:"経験",placeholder:"例: React 2年"},{name:"不安な点",placeholder:"例: 転職理由の答え方"}],
        aiPrompt:"あなたは面接対策のコーチです。職種に合った想定質問と模範回答例を提案してください。STAR法を活用した回答の組み立て方も記載してください。"},
      {id:"plan",nameKey:"tools.career.plan",emoji:"🗺️",type:"form-input",
        inputLabelKey:"tools.career.plan_input",outputLabelKey:"tools.career.plan_output",
        fields:[{name:"現在の職種",placeholder:"例: 営業職"},{name:"目標",placeholder:"例: プロダクトマネージャー"},{name:"期間",placeholder:"例: 2年以内"}],
        aiPrompt:"あなたはキャリアプランナーです。現在地から目標までのキャリアパスを設計してください。必要なスキル、経験、ステップを段階的に記載してください。"}
    ]
  },
  {
    id:"marketing",emoji:"📣",gradient:"from-orange-500 to-red-500",bgLight:"bg-orange-50",
    tools:[
      {id:"copy",nameKey:"tools.marketing.copy",emoji:"✍️",type:"form-input",
        inputLabelKey:"tools.marketing.copy_input",outputLabelKey:"tools.marketing.copy_output",
        fields:[{name:"商品・サービス",placeholder:"例: オンライン英会話アプリ"},{name:"ターゲット",placeholder:"例: 20-30代ビジネスパーソン"},{name:"媒体",placeholder:"例: LP、広告バナー"}],
        aiPrompt:"あなたはコピーライターです。商品の特徴とターゲットから、キャッチコピー、ボディコピー、CTAを3パターン提案してください。AIDMA法則を活用してください。"},
      {id:"seo",nameKey:"tools.marketing.seo",emoji:"🔍",type:"text-input",
        inputLabelKey:"tools.marketing.seo_input",outputLabelKey:"tools.marketing.seo_output",
        placeholder:"例: 「プログラミング 初心者 始め方」で上位表示したい",
        aiPrompt:"あなたはSEOの専門家です。キーワードから検索意図を分析し、上位表示のための記事構成、見出し案、内部リンク戦略を提案してください。"},
      {id:"ad",nameKey:"tools.marketing.ad",emoji:"📱",type:"form-input",
        inputLabelKey:"tools.marketing.ad_input",outputLabelKey:"tools.marketing.ad_output",
        fields:[{name:"商品・サービス",placeholder:"例: カフェの新メニュー"},{name:"予算",placeholder:"例: 月5万円"},{name:"目的",placeholder:"例: 来店数増加"}],
        aiPrompt:"あなたは広告プランナーです。予算と目的から最適な広告プラットフォームの選定と、効果的な広告文・クリエイティブの方向性を提案してください。"}
    ]
  },
  {
    id:"news",emoji:"📰",gradient:"from-slate-600 to-gray-800",bgLight:"bg-slate-50",
    tools:[
      {id:"summary",nameKey:"tools.news.summary",emoji:"📋",type:"text-input",
        inputLabelKey:"tools.news.summary_input",outputLabelKey:"tools.news.summary_output",
        placeholder:"例: ニュース記事のURLまたは本文を貼り付け",
        aiPrompt:"あなたはニュース要約の専門家です。記事を3行で要約し、キーワードと関連トピックも記載してください。"},
      {id:"brief",nameKey:"tools.news.brief",emoji:"☀️",type:"form-input",
        inputLabelKey:"tools.news.brief_input",outputLabelKey:"tools.news.brief_output",
        fields:[{name:"興味のある分野",placeholder:"例: テクノロジー、経済"},{name:"読みたい量",placeholder:"例: 5分で読める量"},{name:"言語",placeholder:"例: 日本語"}],
        aiPrompt:"あなたはニュースキュレーターです。分野に合った今日の重要ニュースをブリーフィング形式でまとめてください。"},
      {id:"fact",nameKey:"tools.news.fact",emoji:"🔍",type:"text-input",
        inputLabelKey:"tools.news.fact_input",outputLabelKey:"tools.news.fact_output",
        placeholder:"例: 日本の人口は2025年に1億人を下回った",
        aiPrompt:"あなたはファクトチェッカーです。情報の真偽を分析し、根拠となるデータや出典を示してください。判定(正確/不正確/部分的に正確)を明示してください。"}
    ]
  },
  {
    id:"fitness",emoji:"🏋️",gradient:"from-rose-500 to-red-600",bgLight:"bg-rose-50",
    tools:[
      {id:"workout",nameKey:"tools.fitness.workout",emoji:"💪",type:"form-input",
        inputLabelKey:"tools.fitness.workout_input",outputLabelKey:"tools.fitness.workout_output",
        fields:[{name:"目的",placeholder:"例: 筋力アップ"},{name:"時間",placeholder:"例: 30分"},{name:"器具",placeholder:"例: なし(自重のみ)"}],
        aiPrompt:"あなたはパーソナルトレーナーです。条件に合ったワークアウトメニューを作成してください。セット数、レップ数、休憩時間も記載してください。"},
      {id:"stretch",nameKey:"tools.fitness.stretch",emoji:"🤸",type:"form-input",
        inputLabelKey:"tools.fitness.stretch_input",outputLabelKey:"tools.fitness.stretch_output",
        fields:[{name:"目的",placeholder:"例: 腰痛改善"},{name:"時間",placeholder:"例: 15分"}],
        aiPrompt:"あなたはストレッチの専門家です。目的に合ったストレッチメニューを作成してください。各ポーズの姿勢と注意点を記載してください。"}
    ]
  },
  {
    id:"sleep",emoji:"😴",gradient:"from-indigo-400 to-blue-500",bgLight:"bg-indigo-50",
    tools:[
      {id:"improve",nameKey:"tools.sleep.improve",emoji:"🌙",type:"form-input",
        inputLabelKey:"tools.sleep.improve_input",outputLabelKey:"tools.sleep.improve_output",
        fields:[{name:"悩み",placeholder:"例: 寝つきが悪い"},{name:"生活リズム",placeholder:"例: 23時就寝、7時起床"},{name:"環境",placeholder:"例: マンション、一人暮らし"}],
        aiPrompt:"あなたは睡眠改善の専門家です。睡眠の悩みを分析し、科学的根拠に基づいた改善アドバイスを提供してください。"},
      {id:"routine",nameKey:"tools.sleep.routine",emoji:"🛏️",type:"form-input",
        inputLabelKey:"tools.sleep.routine_input",outputLabelKey:"tools.sleep.routine_output",
        fields:[{name:"就寝時間",placeholder:"例: 23:00"},{name:"起床時間",placeholder:"例: 7:00"}],
        aiPrompt:"あなたは睡眠コーチです。就寝前のリラックスルーティンを提案してください。入浴、ストレッチ、呼吸法などを時系列で記載してください。"},
      {id:"bedroom",nameKey:"tools.sleep.bedroom",emoji:"🏠",type:"image-upload",
        inputLabelKey:"tools.sleep.bedroom_input",outputLabelKey:"tools.sleep.bedroom_output",
        aiPrompt:"あなたは寝室環境の専門家です。寝室の写真から睡眠の質を上げるための環境改善ポイントを提案してください。照明、温度、寝具について記載してください。"}
    ]
  },
  {
    id:"beauty",emoji:"💄",gradient:"from-pink-400 to-rose-500",bgLight:"bg-pink-50",
    tools:[
      {id:"skincare",nameKey:"tools.beauty.skincare",emoji:"🧴",type:"form-input",
        inputLabelKey:"tools.beauty.skincare_input",outputLabelKey:"tools.beauty.skincare_output",
        fields:[{name:"肌タイプ",placeholder:"例: 混合肌"},{name:"悩み",placeholder:"例: 毛穴、くすみ"},{name:"予算",placeholder:"例: 月5000円"}],
        aiPrompt:"あなたはスキンケアアドバイザーです。肌タイプと悩みに合ったスキンケアルーティンとおすすめアイテムを提案してください。"},
      {id:"makeup",nameKey:"tools.beauty.makeup",emoji:"💋",type:"image-upload",
        inputLabelKey:"tools.beauty.makeup_input",outputLabelKey:"tools.beauty.makeup_output",
        aiPrompt:"あなたはメイクアップアーティストです。顔写真から骨格に合ったメイクテクニックとおすすめカラーを提案してください。"},
      {id:"hair",nameKey:"tools.beauty.hair",emoji:"💇",type:"image-upload",
        inputLabelKey:"tools.beauty.hair_input",outputLabelKey:"tools.beauty.hair_output",
        aiPrompt:"あなたはヘアスタイリストです。写真から顔型に合ったヘアスタイルを3パターン提案してください。スタイリング方法も記載してください。"}
    ]
  },
  {
    id:"reading",emoji:"📚",gradient:"from-amber-600 to-orange-700",bgLight:"bg-amber-50",
    tools:[
      {id:"recommend",nameKey:"tools.reading.recommend",emoji:"📖",type:"form-input",
        inputLabelKey:"tools.reading.recommend_input",outputLabelKey:"tools.reading.recommend_output",
        fields:[{name:"好きなジャンル",placeholder:"例: SF、ミステリー"},{name:"最近読んだ本",placeholder:"例: 三体"},{name:"気分",placeholder:"例: 考えさせられる本が読みたい"}],
        aiPrompt:"あなたは書店員です。好みに合った本を5冊おすすめしてください。各本のあらすじと「こんな人におすすめ」も記載してください。"},
      {id:"summary",nameKey:"tools.reading.summary",emoji:"📋",type:"text-input",
        inputLabelKey:"tools.reading.summary_input",outputLabelKey:"tools.reading.summary_output",
        placeholder:"例: 本のタイトル、または内容を貼り付け",
        aiPrompt:"あなたは読書アドバイザーです。本の内容を要約し、キーポイントと実生活への活かし方をまとめてください。"},
      {id:"note",nameKey:"tools.reading.note",emoji:"📝",type:"text-input",
        inputLabelKey:"tools.reading.note_input",outputLabelKey:"tools.reading.note_output",
        placeholder:"例: 本のタイトルと気になったポイントを入力",
        aiPrompt:"あなたは読書ノートの専門家です。読書メモを構造化し、要約・気づき・アクションプランの形式で読書ノートを作成してください。"}
    ]
  },
  {
    id:"movie",emoji:"🎬",gradient:"from-gray-600 to-slate-700",bgLight:"bg-gray-50",
    tools:[
      {id:"recommend",nameKey:"tools.movie.recommend",emoji:"🎥",type:"form-input",
        inputLabelKey:"tools.movie.recommend_input",outputLabelKey:"tools.movie.recommend_output",
        fields:[{name:"好きなジャンル",placeholder:"例: アクション、ヒューマンドラマ"},{name:"気分",placeholder:"例: 泣ける映画が見たい"},{name:"好きな作品",placeholder:"例: ショーシャンクの空に"}],
        aiPrompt:"あなたは映画評論家です。好みに合った映画を5本おすすめしてください。各作品のあらすじと見どころも記載してください。"},
      {id:"review",nameKey:"tools.movie.review",emoji:"✍️",type:"text-input",
        inputLabelKey:"tools.movie.review_input",outputLabelKey:"tools.movie.review_output",
        placeholder:"例: 映画のタイトルと感想を入力",
        aiPrompt:"あなたは映画ブロガーです。感想をもとに読みやすい映画レビューを作成してください。ネタバレなしの構成にしてください。"}
    ]
  },
  {
    id:"camping",emoji:"⛺",gradient:"from-green-600 to-emerald-700",bgLight:"bg-green-50",
    tools:[
      {id:"gear",nameKey:"tools.camping.gear",emoji:"🎒",type:"form-input",
        inputLabelKey:"tools.camping.gear_input",outputLabelKey:"tools.camping.gear_output",
        fields:[{name:"キャンプスタイル",placeholder:"例: ソロキャンプ"},{name:"季節",placeholder:"例: 秋"},{name:"予算",placeholder:"例: 5万円"}],
        aiPrompt:"あなたはキャンプギアの専門家です。条件に合ったギアリストを作成してください。必須アイテムとあると便利なアイテムに分けて記載してください。"},
      {id:"meal",nameKey:"tools.camping.meal",emoji:"🍖",type:"form-input",
        inputLabelKey:"tools.camping.meal_input",outputLabelKey:"tools.camping.meal_output",
        fields:[{name:"人数",placeholder:"例: 4人"},{name:"設備",placeholder:"例: 焚き火台、バーナー"},{name:"食材制限",placeholder:"例: 特になし"}],
        aiPrompt:"あなたはアウトドア料理の専門家です。キャンプで作れる美味しい料理レシピを3つ提案してください。持参する食材リストと手順を記載してください。"},
      {id:"spot",nameKey:"tools.camping.spot",emoji:"🏕️",type:"form-input",
        inputLabelKey:"tools.camping.spot_input",outputLabelKey:"tools.camping.spot_output",
        fields:[{name:"地域",placeholder:"例: 関東"},{name:"スタイル",placeholder:"例: 初心者向け、設備充実"},{name:"時期",placeholder:"例: 10月"}],
        aiPrompt:"あなたはキャンプ場ガイドです。条件に合ったキャンプ場を3ヶ所おすすめしてください。設備、アクセス、周辺の見どころも記載してください。"}
    ]
  },
  {
    id:"handmade",emoji:"🧵",gradient:"from-fuchsia-500 to-pink-600",bgLight:"bg-fuchsia-50",
    tools:[
      {id:"pattern",nameKey:"tools.handmade.pattern",emoji:"✂️",type:"form-input",
        inputLabelKey:"tools.handmade.pattern_input",outputLabelKey:"tools.handmade.pattern_output",
        fields:[{name:"作りたいもの",placeholder:"例: トートバッグ"},{name:"素材",placeholder:"例: 帆布"},{name:"サイズ",placeholder:"例: A4が入るサイズ"}],
        aiPrompt:"あなたはハンドメイドの先生です。作りたいものの型紙の取り方と制作手順をステップバイステップで説明してください。"},
      {id:"material",nameKey:"tools.handmade.material",emoji:"🧶",type:"image-upload",
        inputLabelKey:"tools.handmade.material_input",outputLabelKey:"tools.handmade.material_output",
        aiPrompt:"あなたはハンドメイド素材の専門家です。素材の写真から種類を特定し、その素材で作れるアイテムのアイデアを提案してください。"},
      {id:"pricing",nameKey:"tools.handmade.pricing",emoji:"💰",type:"form-input",
        inputLabelKey:"tools.handmade.pricing_input",outputLabelKey:"tools.handmade.pricing_output",
        fields:[{name:"作品",placeholder:"例: 手編みのマフラー"},{name:"材料費",placeholder:"例: 2000円"},{name:"制作時間",placeholder:"例: 8時間"}],
        aiPrompt:"あなたはハンドメイド販売のアドバイザーです。作品の適正価格と販売戦略を提案してください。原価計算と利益率も記載してください。"}
    ]
  },
  {
    id:"presentation",emoji:"🎤",gradient:"from-blue-600 to-violet-600",bgLight:"bg-blue-50",
    tools:[
      {id:"design",nameKey:"tools.presentation.design",emoji:"🖥️",type:"text-input",
        inputLabelKey:"tools.presentation.design_input",outputLabelKey:"tools.presentation.design_output",
        placeholder:"例: 新規事業の社内プレゼン。役員向け。15分。",
        aiPrompt:"あなたはプレゼンデザイナーです。プレゼンの目的に合ったスライド構成、デザインテーマ、フォント・配色の提案をしてください。"},
      {id:"speaking",nameKey:"tools.presentation.speaking",emoji:"🗣️",type:"text-input",
        inputLabelKey:"tools.presentation.speaking_input",outputLabelKey:"tools.presentation.speaking_output",
        placeholder:"例: プレゼンの原稿テキストを貼り付け",
        aiPrompt:"あなたはスピーチコーチです。プレゼン原稿を分析し、話し方のコツ、間の取り方、アイコンタクトのポイントをアドバイスしてください。"},
      {id:"qa",nameKey:"tools.presentation.qa",emoji:"❓",type:"text-input",
        inputLabelKey:"tools.presentation.qa_input",outputLabelKey:"tools.presentation.qa_output",
        placeholder:"例: AIを使った業務効率化の提案プレゼン",
        aiPrompt:"あなたはプレゼン対策の専門家です。テーマから想定される質問を10個リストアップし、それぞれの模範回答を作成してください。"}
    ]
  },
  {
    id:"mental",emoji:"🧘",gradient:"from-teal-400 to-emerald-500",bgLight:"bg-teal-50",
    tools:[
      {id:"meditate",nameKey:"tools.mental.meditate",emoji:"🕯️",type:"form-input",
        inputLabelKey:"tools.mental.meditate_input",outputLabelKey:"tools.mental.meditate_output",
        fields:[{name:"時間",placeholder:"例: 10分"},{name:"目的",placeholder:"例: リラックス、集中力向上"},{name:"経験",placeholder:"例: 初心者"}],
        aiPrompt:"あなたは瞑想インストラクターです。条件に合ったガイド付き瞑想のスクリプトを作成してください。呼吸のガイドと誘導文を記載してください。"},
      {id:"stress",nameKey:"tools.mental.stress",emoji:"💆",type:"text-input",
        inputLabelKey:"tools.mental.stress_input",outputLabelKey:"tools.mental.stress_output",
        placeholder:"例: 仕事のプレッシャーで眠れない日が続いている",
        aiPrompt:"あなたはメンタルヘルスの専門家です。ストレスの状況を分析し、具体的なセルフケア方法を提案してください。認知行動療法の手法も活用してください。"},
      {id:"journal",nameKey:"tools.mental.journal",emoji:"📓",type:"text-input",
        inputLabelKey:"tools.mental.journal_input",outputLabelKey:"tools.mental.journal_output",
        placeholder:"例: 今日あった出来事や感じたことを自由に書いてください",
        aiPrompt:"あなたは感謝日記のファシリテーターです。日記の内容からポジティブな側面を見つけ、感謝のポイントと明日への前向きなメッセージを提案してください。"}
    ]
  },
  {
    id:"cleaning",emoji:"🧹",gradient:"from-cyan-500 to-blue-500",bgLight:"bg-cyan-50",
    tools:[
      {id:"plan",nameKey:"tools.cleaning.plan",emoji:"📋",type:"form-input",
        inputLabelKey:"tools.cleaning.plan_input",outputLabelKey:"tools.cleaning.plan_output",
        fields:[{name:"間取り",placeholder:"例: 2LDK"},{name:"人数",placeholder:"例: 3人家族"},{name:"使える時間",placeholder:"例: 週末2時間"}],
        aiPrompt:"あなたは掃除プランナーです。間取りと生活スタイルに合った掃除スケジュールを作成してください。日次・週次・月次に分けて記載してください。"},
      {id:"stain",nameKey:"tools.cleaning.stain",emoji:"🧽",type:"image-upload",
        inputLabelKey:"tools.cleaning.stain_input",outputLabelKey:"tools.cleaning.stain_output",
        aiPrompt:"あなたはクリーニングの専門家です。シミの写真から種類を特定し、最適な落とし方を手順付きで説明してください。必要な洗剤も記載してください。"},
      {id:"storage",nameKey:"tools.cleaning.storage",emoji:"📦",type:"image-upload",
        inputLabelKey:"tools.cleaning.storage_input",outputLabelKey:"tools.cleaning.storage_output",
        aiPrompt:"あなたは収納アドバイザーです。写真から収納スペースの使い方を分析し、効率的な収納方法を提案してください。おすすめ収納グッズも記載してください。"}
    ]
  },
  {
    id:"baby",emoji:"🍼",gradient:"from-pink-300 to-rose-400",bgLight:"bg-pink-50",
    tools:[
      {id:"food",nameKey:"tools.baby.food",emoji:"🥄",type:"form-input",
        inputLabelKey:"tools.baby.food_input",outputLabelKey:"tools.baby.food_output",
        fields:[{name:"月齢",placeholder:"例: 8ヶ月"},{name:"アレルギー",placeholder:"例: 特になし"},{name:"進み具合",placeholder:"例: もぐもぐ期"}],
        aiPrompt:"あなたは離乳食アドバイザーです。月齢に合った離乳食レシピを1週間分提案してください。栄養バランスと新しい食材の進め方も記載してください。"},
      {id:"growth",nameKey:"tools.baby.growth",emoji:"📏",type:"form-input",
        inputLabelKey:"tools.baby.growth_input",outputLabelKey:"tools.baby.growth_output",
        fields:[{name:"月齢",placeholder:"例: 10ヶ月"},{name:"身長・体重",placeholder:"例: 72cm、9kg"},{name:"できること",placeholder:"例: つかまり立ち"}],
        aiPrompt:"あなたは育児アドバイザーです。赤ちゃんの発達状況を分析し、この時期に適した遊びや刺激、注意すべきポイントをアドバイスしてください。"},
      {id:"cry",nameKey:"tools.baby.cry",emoji:"😢",type:"text-input",
        inputLabelKey:"tools.baby.cry_input",outputLabelKey:"tools.baby.cry_output",
        placeholder:"例: 生後4ヶ月。夜中2時に必ず起きて泣く。授乳しないと寝ない。",
        aiPrompt:"あなたは夜泣き対策の専門家です。状況を分析し、考えられる原因と具体的な対策方法を提案してください。段階的に改善する方法を記載してください。"}
    ]
  },
  {
    id:"tax",emoji:"🏛️",gradient:"from-slate-600 to-gray-700",bgLight:"bg-slate-50",
    tools:[
      {id:"filing",nameKey:"tools.tax.filing",emoji:"📄",type:"form-input",
        inputLabelKey:"tools.tax.filing_input",outputLabelKey:"tools.tax.filing_output",
        fields:[{name:"職業",placeholder:"例: フリーランスエンジニア"},{name:"年収",placeholder:"例: 600万円"},{name:"状況",placeholder:"例: 初めての確定申告"}],
        aiPrompt:"あなたは確定申告アドバイザーです。必要な書類、手続きの流れ、注意すべきポイントをステップバイステップで説明してください。"},
      {id:"expense",nameKey:"tools.tax.expense",emoji:"🧾",type:"image-upload",
        inputLabelKey:"tools.tax.expense_input",outputLabelKey:"tools.tax.expense_output",
        aiPrompt:"あなたは経費管理の専門家です。領収書の写真から内容を読み取り、経費区分の分類と帳簿への記載方法をアドバイスしてください。"},
      {id:"deduction",nameKey:"tools.tax.deduction",emoji:"💡",type:"form-input",
        inputLabelKey:"tools.tax.deduction_input",outputLabelKey:"tools.tax.deduction_output",
        fields:[{name:"家族構成",placeholder:"例: 配偶者あり、子供1人"},{name:"住宅",placeholder:"例: 住宅ローンあり"},{name:"保険",placeholder:"例: 生命保険、医療保険"}],
        aiPrompt:"あなたは税金の専門家です。状況から使える控除を洗い出し、節税額の目安と手続き方法を説明してください。"}
    ]
  },
  {
    id:"freelance",emoji:"💻",gradient:"from-violet-500 to-indigo-600",bgLight:"bg-violet-50",
    tools:[
      {id:"portfolio",nameKey:"tools.freelance.portfolio",emoji:"🎨",type:"text-input",
        inputLabelKey:"tools.freelance.portfolio_input",outputLabelKey:"tools.freelance.portfolio_output",
        placeholder:"例: Webデザイナー歴3年。LP制作、バナーデザインが得意。",
        aiPrompt:"あなたはフリーランスコンサルタントです。スキルセットから効果的なポートフォリオの構成と、載せるべき実績の見せ方を提案してください。"},
      {id:"rate",nameKey:"tools.freelance.rate",emoji:"💰",type:"form-input",
        inputLabelKey:"tools.freelance.rate_input",outputLabelKey:"tools.freelance.rate_output",
        fields:[{name:"職種",placeholder:"例: Webエンジニア"},{name:"経験年数",placeholder:"例: 5年"},{name:"スキル",placeholder:"例: React, TypeScript"}],
        aiPrompt:"あなたは単価交渉の専門家です。職種と経験から適切な単価レンジを提案してください。単価アップの戦略も記載してください。"},
      {id:"client",nameKey:"tools.freelance.client",emoji:"🤝",type:"text-input",
        inputLabelKey:"tools.freelance.client_input",outputLabelKey:"tools.freelance.client_output",
        placeholder:"例: クライアントから仕様変更を何度も要求される。追加費用を請求したい。",
        aiPrompt:"あなたはフリーランスの仕事術の専門家です。クライアント対応の悩みに対する具体的な解決策と、使えるメールテンプレートを提案してください。"}
    ]
  },
  {
    id:"meeting",emoji:"🤝",gradient:"from-blue-500 to-indigo-500",bgLight:"bg-blue-50",
    tools:[
      {id:"minutes",nameKey:"tools.meeting.minutes",emoji:"📝",type:"text-input",
        inputLabelKey:"tools.meeting.minutes_input",outputLabelKey:"tools.meeting.minutes_output",
        placeholder:"例: 会議の内容メモを貼り付け",
        aiPrompt:"あなたは議事録作成の専門家です。会議メモから、決定事項・アクションアイテム・担当者・期限を整理した議事録を作成してください。"},
      {id:"agenda",nameKey:"tools.meeting.agenda",emoji:"📋",type:"form-input",
        inputLabelKey:"tools.meeting.agenda_input",outputLabelKey:"tools.meeting.agenda_output",
        fields:[{name:"目的",placeholder:"例: 新プロジェクトのキックオフ"},{name:"参加者",placeholder:"例: 5名、開発チーム"},{name:"時間",placeholder:"例: 1時間"}],
        aiPrompt:"あなたはファシリテーターです。会議の目的から効果的なアジェンダを作成してください。各議題の所要時間と進行のポイントを記載してください。"},
      {id:"facilitate",nameKey:"tools.meeting.facilitate",emoji:"🎯",type:"text-input",
        inputLabelKey:"tools.meeting.facilitate_input",outputLabelKey:"tools.meeting.facilitate_output",
        placeholder:"例: ブレスト会議で一部の人しか発言しない。全員から意見を引き出したい。",
        aiPrompt:"あなたはファシリテーションの専門家です。会議の課題に対する具体的な進行テクニックとアイスブレイクのアイデアを提案してください。"}
    ]
  },
  {
    id:"datavis",emoji:"📊",gradient:"from-emerald-500 to-teal-600",bgLight:"bg-emerald-50",
    tools:[
      {id:"chart",nameKey:"tools.datavis.chart",emoji:"📈",type:"text-input",
        inputLabelKey:"tools.datavis.chart_input",outputLabelKey:"tools.datavis.chart_output",
        placeholder:"例: 月別売上データ。前年比較もしたい。経営会議で使う。",
        aiPrompt:"あなたはデータ可視化の専門家です。データの内容と用途から最適なグラフの種類を選び、効果的な見せ方を提案してください。"},
      {id:"dashboard",nameKey:"tools.datavis.dashboard",emoji:"🖥️",type:"form-input",
        inputLabelKey:"tools.datavis.dashboard_input",outputLabelKey:"tools.datavis.dashboard_output",
        fields:[{name:"用途",placeholder:"例: 営業チームのKPI管理"},{name:"指標",placeholder:"例: 売上、顧客数、商談数"},{name:"ツール",placeholder:"例: Google スプレッドシート"}],
        aiPrompt:"あなたはBIダッシュボードの専門家です。用途に合ったダッシュボードの構成とKPIの配置を提案してください。"},
      {id:"report",nameKey:"tools.datavis.report",emoji:"📄",type:"text-input",
        inputLabelKey:"tools.datavis.report_input",outputLabelKey:"tools.datavis.report_output",
        placeholder:"例: 分析データや数値を貼り付け",
        aiPrompt:"あなたはデータアナリストです。データからインサイトを抽出し、ビジネスレポートの形式でまとめてください。改善提案も記載してください。"}
    ]
  },
  {
    id:"startup",emoji:"🚀",gradient:"from-orange-500 to-amber-600",bgLight:"bg-orange-50",
    tools:[
      {id:"mvp",nameKey:"tools.startup.mvp",emoji:"🎯",type:"text-input",
        inputLabelKey:"tools.startup.mvp_input",outputLabelKey:"tools.startup.mvp_output",
        placeholder:"例: 飲食店向けのAI予約管理システムを作りたい",
        aiPrompt:"あなたはスタートアップメンターです。アイデアから最小限のMVPの機能セットと、最速で検証する方法を提案してください。"},
      {id:"pitch",nameKey:"tools.startup.pitch",emoji:"📊",type:"form-input",
        inputLabelKey:"tools.startup.pitch_input",outputLabelKey:"tools.startup.pitch_output",
        fields:[{name:"事業内容",placeholder:"例: AIチャットボットSaaS"},{name:"ターゲット",placeholder:"例: 中小企業"},{name:"差別化",placeholder:"例: 日本語特化、低価格"}],
        aiPrompt:"あなたは投資家向けプレゼンの専門家です。事業情報から説得力のあるピッチデックの構成を提案してください。各スライドの内容とストーリーラインを記載してください。"},
      {id:"growth",nameKey:"tools.startup.growth",emoji:"📈",type:"form-input",
        inputLabelKey:"tools.startup.growth_input",outputLabelKey:"tools.startup.growth_output",
        fields:[{name:"サービス",placeholder:"例: 月額制フィットネスアプリ"},{name:"現状",placeholder:"例: ユーザー500人"},{name:"目標",placeholder:"例: 3ヶ月で3000人"}],
        aiPrompt:"あなたはグロースハッカーです。サービスの成長戦略を提案してください。獲得チャネル、施策の優先度、KPIを記載してください。"}
    ]
  },
  {
    id:"podcast",emoji:"🎧",gradient:"from-purple-600 to-violet-700",bgLight:"bg-purple-50",
    tools:[
      {id:"plan",nameKey:"tools.podcast.plan",emoji:"📋",type:"form-input",
        inputLabelKey:"tools.podcast.plan_input",outputLabelKey:"tools.podcast.plan_output",
        fields:[{name:"テーマ",placeholder:"例: テクノロジー×ビジネス"},{name:"形式",placeholder:"例: 対談形式"},{name:"長さ",placeholder:"例: 30分"}],
        aiPrompt:"あなたはポッドキャストプロデューサーです。テーマから番組企画を作成してください。コーナー構成、ターゲット層、差別化ポイントを記載してください。"},
      {id:"script",nameKey:"tools.podcast.script",emoji:"📝",type:"form-input",
        inputLabelKey:"tools.podcast.script_input",outputLabelKey:"tools.podcast.script_output",
        fields:[{name:"テーマ",placeholder:"例: リモートワークの未来"},{name:"ゲスト",placeholder:"例: あり、IT企業の経営者"},{name:"時間",placeholder:"例: 20分"}],
        aiPrompt:"あなたはポッドキャスト台本ライターです。テーマから自然な会話の流れを作る台本を作成してください。オープニング、本編、エンディングの構成で。"},
      {id:"edit",nameKey:"tools.podcast.edit",emoji:"🎛️",type:"text-input",
        inputLabelKey:"tools.podcast.edit_input",outputLabelKey:"tools.podcast.edit_output",
        placeholder:"例: 収録した音声の問題点（ノイズが多い、間延びしているなど）",
        aiPrompt:"あなたはポッドキャスト編集のプロです。音声の問題に対する具体的な編集テクニックとおすすめツールを提案してください。"}
    ]
  },
  {
    id:"sports",emoji:"⚽",gradient:"from-green-500 to-lime-600",bgLight:"bg-green-50",
    tools:[
      {id:"training",nameKey:"tools.sports.training",emoji:"🏃",type:"form-input",
        inputLabelKey:"tools.sports.training_input",outputLabelKey:"tools.sports.training_output",
        fields:[{name:"競技",placeholder:"例: テニス"},{name:"レベル",placeholder:"例: 初級者"},{name:"目標",placeholder:"例: 試合で勝てるようになりたい"}],
        aiPrompt:"あなたはスポーツコーチです。競技とレベルに合ったトレーニングメニューを作成してください。週間スケジュールと各メニューの目的を記載してください。"},
      {id:"tactics",nameKey:"tools.sports.tactics",emoji:"📋",type:"text-input",
        inputLabelKey:"tools.sports.tactics_input",outputLabelKey:"tools.sports.tactics_output",
        placeholder:"例: フットサルで5人制。相手が引いて守る場合の攻め方。",
        aiPrompt:"あなたは戦術アナリストです。試合の状況に合った戦術とフォーメーションを提案してください。図解の説明も記載してください。"},
      {id:"analysis",nameKey:"tools.sports.analysis",emoji:"📊",type:"text-input",
        inputLabelKey:"tools.sports.analysis_input",outputLabelKey:"tools.sports.analysis_output",
        placeholder:"例: テニスの試合結果。サーブの入りが悪い。セカンドサーブを狙われる。",
        aiPrompt:"あなたはスポーツアナリストです。試合の結果や課題を分析し、改善ポイントと練習方法を提案してください。"}
    ]
  },
  {
    id:"abroad",emoji:"🌏",gradient:"from-sky-500 to-cyan-600",bgLight:"bg-sky-50",
    tools:[
      {id:"prepare",nameKey:"tools.abroad.prepare",emoji:"📋",type:"form-input",
        inputLabelKey:"tools.abroad.prepare_input",outputLabelKey:"tools.abroad.prepare_output",
        fields:[{name:"国",placeholder:"例: カナダ"},{name:"期間",placeholder:"例: 1年間"},{name:"目的",placeholder:"例: 語学留学"}],
        aiPrompt:"あなたは留学アドバイザーです。留学準備のチェックリストを作成してください。ビザ、保険、住居、持ち物を時系列で記載してください。"},
      {id:"essay",nameKey:"tools.abroad.essay",emoji:"✍️",type:"form-input",
        inputLabelKey:"tools.abroad.essay_input",outputLabelKey:"tools.abroad.essay_output",
        fields:[{name:"学校",placeholder:"例: トロント大学"},{name:"専攻",placeholder:"例: コンピュータサイエンス"},{name:"強み",placeholder:"例: 独学でアプリ開発経験あり"}],
        aiPrompt:"あなたは留学エッセイの専門家です。志望動機エッセイの構成と各段落で書くべき内容を提案してください。英語での表現例も記載してください。"},
      {id:"culture",nameKey:"tools.abroad.culture",emoji:"🌍",type:"form-input",
        inputLabelKey:"tools.abroad.culture_input",outputLabelKey:"tools.abroad.culture_output",
        fields:[{name:"国",placeholder:"例: アメリカ"},{name:"場面",placeholder:"例: ビジネス、日常生活"}],
        aiPrompt:"あなたは異文化コミュニケーションの専門家です。その国の文化・マナー・タブーを説明してください。日本との違いと注意点を記載してください。"}
    ]
  },
  {
    id:"interior",emoji:"🪴",gradient:"from-amber-400 to-yellow-500",bgLight:"bg-amber-50",
    tools:[
      {id:"makeover",nameKey:"tools.interior.makeover",emoji:"🏠",type:"image-upload",
        inputLabelKey:"tools.interior.makeover_input",outputLabelKey:"tools.interior.makeover_output",
        aiPrompt:"あなたはインテリアデザイナーです。部屋の写真から模様替えのプランを提案してください。テイスト、配色、おすすめ家具を記載してください。"},
      {id:"lighting",nameKey:"tools.interior.lighting",emoji:"💡",type:"image-upload",
        inputLabelKey:"tools.interior.lighting_input",outputLabelKey:"tools.interior.lighting_output",
        aiPrompt:"あなたは照明デザイナーです。部屋の写真から最適な照明プランを提案してください。器具の種類、配置、色温度について記載してください。"},
      {id:"curtain",nameKey:"tools.interior.curtain",emoji:"🪟",type:"image-upload",
        inputLabelKey:"tools.interior.curtain_input",outputLabelKey:"tools.interior.curtain_output",
        aiPrompt:"あなたはカーテンコーディネーターです。窓と部屋の写真から最適なカーテンの色・素材・スタイルを提案してください。機能性も考慮してください。"}
    ]
  },
  {
    id:"party",emoji:"🥳",gradient:"from-yellow-400 to-orange-500",bgLight:"bg-yellow-50",
    tools:[
      {id:"plan",nameKey:"tools.party.plan",emoji:"📋",type:"form-input",
        inputLabelKey:"tools.party.plan_input",outputLabelKey:"tools.party.plan_output",
        fields:[{name:"種類",placeholder:"例: ホームパーティ"},{name:"人数",placeholder:"例: 8人"},{name:"テーマ",placeholder:"例: ハロウィン"}],
        aiPrompt:"あなたはパーティプランナーです。テーマに合ったパーティの企画プランを作成してください。料理、飾り付け、タイムラインを記載してください。"},
      {id:"games",nameKey:"tools.party.games",emoji:"🎮",type:"form-input",
        inputLabelKey:"tools.party.games_input",outputLabelKey:"tools.party.games_output",
        fields:[{name:"人数",placeholder:"例: 10人"},{name:"年齢層",placeholder:"例: 20〜30代"},{name:"場所",placeholder:"例: 室内"}],
        aiPrompt:"あなたはパーティゲームの専門家です。条件に合った盛り上がるゲームを5つ提案してください。ルール説明と必要な準備物も記載してください。"},
      {id:"deco",nameKey:"tools.party.deco",emoji:"🎈",type:"form-input",
        inputLabelKey:"tools.party.deco_input",outputLabelKey:"tools.party.deco_output",
        fields:[{name:"テーマ",placeholder:"例: クリスマス"},{name:"予算",placeholder:"例: 3000円"},{name:"場所",placeholder:"例: リビング"}],
        aiPrompt:"あなたはパーティデコレーションの専門家です。テーマと予算に合った飾り付けプランを提案してください。100均で揃う材料も記載してください。"}
    ]
  },
  {
    id:"ceremony",emoji:"🎌",gradient:"from-red-500 to-rose-600",bgLight:"bg-red-50",
    tools:[
      {id:"manner",nameKey:"tools.ceremony.manner",emoji:"🎎",type:"form-input",
        inputLabelKey:"tools.ceremony.manner_input",outputLabelKey:"tools.ceremony.manner_output",
        fields:[{name:"場面",placeholder:"例: 結婚式のご祝儀"},{name:"関係",placeholder:"例: 会社の同僚"},{name:"年齢",placeholder:"例: 30代"}],
        aiPrompt:"あなたは冠婚葬祭マナーの専門家です。場面に応じた正しいマナー、金額の相場、服装のアドバイスを提供してください。"},
      {id:"envelope",nameKey:"tools.ceremony.envelope",emoji:"✉️",type:"form-input",
        inputLabelKey:"tools.ceremony.envelope_input",outputLabelKey:"tools.ceremony.envelope_output",
        fields:[{name:"種類",placeholder:"例: 結婚祝い、香典"},{name:"金額",placeholder:"例: 3万円"},{name:"名前",placeholder:"例: 山田太郎"}],
        aiPrompt:"あなたはのし袋の専門家です。場面に合ったのし袋の選び方、表書き、中袋の書き方を詳しく説明してください。"},
      {id:"return",nameKey:"tools.ceremony.return",emoji:"🎁",type:"form-input",
        inputLabelKey:"tools.ceremony.return_input",outputLabelKey:"tools.ceremony.return_output",
        fields:[{name:"もらったもの",placeholder:"例: 出産祝い5000円"},{name:"相手",placeholder:"例: 友人"},{name:"時期",placeholder:"例: 1ヶ月以内"}],
        aiPrompt:"あなたはお返しマナーの専門家です。いただいたお祝いに対する適切なお返しの品物、金額、時期、送り状の文面を提案してください。"}
    ]
  },
  {
    id:"recycle",emoji:"♻️",gradient:"from-lime-500 to-green-600",bgLight:"bg-lime-50",
    tools:[
      {id:"remake",nameKey:"tools.recycle.remake",emoji:"✂️",type:"image-upload",
        inputLabelKey:"tools.recycle.remake_input",outputLabelKey:"tools.recycle.remake_output",
        aiPrompt:"あなたはリメイクの専門家です。不要品の写真から、おしゃれにリメイクするアイデアと手順を提案してください。"},
      {id:"reuse",nameKey:"tools.recycle.reuse",emoji:"🔄",type:"image-upload",
        inputLabelKey:"tools.recycle.reuse_input",outputLabelKey:"tools.recycle.reuse_output",
        aiPrompt:"あなたはアップサイクルの専門家です。捨てようとしているものの写真から、再利用のアイデアを5つ提案してください。"},
      {id:"appraise",nameKey:"tools.recycle.appraise",emoji:"💰",type:"image-upload",
        inputLabelKey:"tools.recycle.appraise_input",outputLabelKey:"tools.recycle.appraise_output",
        aiPrompt:"あなたはリサイクルショップの査定員です。商品の写真から、おおよその買取価格と高く売るためのコツを提案してください。"}
    ]
  },
  {
    id:"nail",emoji:"💅",gradient:"from-rose-400 to-pink-500",bgLight:"bg-rose-50",
    tools:[
      {id:"design",nameKey:"tools.nail.design",emoji:"🎨",type:"form-input",
        inputLabelKey:"tools.nail.design_input",outputLabelKey:"tools.nail.design_output",
        fields:[{name:"イメージ",placeholder:"例: 春らしい、ガーリー"},{name:"色",placeholder:"例: ピンク系"},{name:"イベント",placeholder:"例: デート"}],
        aiPrompt:"あなたはネイリストです。イメージに合ったネイルデザインを3パターン提案してください。カラー、アート、パーツの組み合わせを記載してください。"},
      {id:"selfnail",nameKey:"tools.nail.selfnail",emoji:"💅",type:"text-input",
        inputLabelKey:"tools.nail.selfnail_input",outputLabelKey:"tools.nail.selfnail_output",
        placeholder:"例: ジェルネイル初心者。自宅でフレンチネイルをやりたい。",
        aiPrompt:"あなたはセルフネイルの先生です。やりたいデザインの手順を初心者にもわかるように説明してください。必要な道具と失敗しないコツも記載してください。"},
      {id:"care",nameKey:"tools.nail.care",emoji:"🧴",type:"image-upload",
        inputLabelKey:"tools.nail.care_input",outputLabelKey:"tools.nail.care_output",
        aiPrompt:"あなたはネイルケアの専門家です。爪の写真から状態を診断し、適切なケア方法を提案してください。おすすめのケアアイテムも記載してください。"}
    ]
  },
  {
    id:"yoga",emoji:"🧘‍♀️",gradient:"from-purple-400 to-indigo-500",bgLight:"bg-purple-50",
    tools:[
      {id:"pose",nameKey:"tools.yoga.pose",emoji:"🧘",type:"form-input",
        inputLabelKey:"tools.yoga.pose_input",outputLabelKey:"tools.yoga.pose_output",
        fields:[{name:"レベル",placeholder:"例: 初心者"},{name:"目的",placeholder:"例: 肩こり解消"},{name:"時間",placeholder:"例: 20分"}],
        aiPrompt:"あなたはヨガインストラクターです。条件に合ったヨガポーズを5つ提案してください。各ポーズの効果、姿勢のポイント、注意点を記載してください。"},
      {id:"sequence",nameKey:"tools.yoga.sequence",emoji:"📋",type:"form-input",
        inputLabelKey:"tools.yoga.sequence_input",outputLabelKey:"tools.yoga.sequence_output",
        fields:[{name:"時間",placeholder:"例: 30分"},{name:"テーマ",placeholder:"例: 朝ヨガ、リラックス"},{name:"レベル",placeholder:"例: 中級"}],
        aiPrompt:"あなたはヨガのシークエンスデザイナーです。テーマに合ったヨガの流れ(シークエンス)を作成してください。各ポーズの呼吸数とトランジションを記載してください。"},
      {id:"breathe",nameKey:"tools.yoga.breathe",emoji:"🌬️",type:"form-input",
        inputLabelKey:"tools.yoga.breathe_input",outputLabelKey:"tools.yoga.breathe_output",
        fields:[{name:"目的",placeholder:"例: リラックス、集中力"},{name:"時間",placeholder:"例: 5分"}],
        aiPrompt:"あなたは呼吸法の専門家です。目的に合ったプラーナーヤーマ(呼吸法)を提案してください。手順とカウントを詳しく記載してください。"}
    ]
  },
  {
    id:"bicycle",emoji:"🚴",gradient:"from-sky-600 to-blue-700",bgLight:"bg-sky-50",
    tools:[
      {id:"maintain",nameKey:"tools.bicycle.maintain",emoji:"🔧",type:"image-upload",
        inputLabelKey:"tools.bicycle.maintain_input",outputLabelKey:"tools.bicycle.maintain_output",
        aiPrompt:"あなたは自転車整備士です。自転車の写真から状態を診断し、必要なメンテナンスと手順を説明してください。"},
      {id:"route",nameKey:"tools.bicycle.route",emoji:"🗺️",type:"form-input",
        inputLabelKey:"tools.bicycle.route_input",outputLabelKey:"tools.bicycle.route_output",
        fields:[{name:"出発地",placeholder:"例: 東京駅"},{name:"目的",placeholder:"例: 景色を楽しむ"},{name:"距離",placeholder:"例: 30km以内"}],
        aiPrompt:"あなたはサイクリングガイドです。条件に合ったサイクリングコースを提案してください。見どころ、休憩スポット、難易度を記載してください。"},
      {id:"choose",nameKey:"tools.bicycle.choose",emoji:"🚲",type:"form-input",
        inputLabelKey:"tools.bicycle.choose_input",outputLabelKey:"tools.bicycle.choose_output",
        fields:[{name:"用途",placeholder:"例: 通勤"},{name:"予算",placeholder:"例: 5万円"},{name:"こだわり",placeholder:"例: 軽さ、デザイン"}],
        aiPrompt:"あなたは自転車選びの専門家です。用途と予算に合った自転車を3台おすすめしてください。スペック比較と選び方のポイントも記載してください。"}
    ]
  },
  {
    id:"running",emoji:"🏃",gradient:"from-orange-500 to-red-500",bgLight:"bg-orange-50",
    tools:[
      {id:"plan",nameKey:"tools.running.plan",emoji:"📋",type:"form-input",
        inputLabelKey:"tools.running.plan_input",outputLabelKey:"tools.running.plan_output",
        fields:[{name:"目標",placeholder:"例: フルマラソン完走"},{name:"現在の走力",placeholder:"例: 5km走れる"},{name:"期間",placeholder:"例: 6ヶ月"}],
        aiPrompt:"あなたはランニングコーチです。目標達成のためのトレーニング計画を作成してください。週間スケジュールと段階的なステップアップを記載してください。"},
      {id:"form",nameKey:"tools.running.form",emoji:"🦶",type:"image-upload",
        inputLabelKey:"tools.running.form_input",outputLabelKey:"tools.running.form_output",
        aiPrompt:"あなたはランニングフォームの専門家です。走っている写真からフォームを分析し、改善ポイントを提案してください。"},
      {id:"shoes",nameKey:"tools.running.shoes",emoji:"👟",type:"form-input",
        inputLabelKey:"tools.running.shoes_input",outputLabelKey:"tools.running.shoes_output",
        fields:[{name:"用途",placeholder:"例: フルマラソン"},{name:"足の特徴",placeholder:"例: 偏平足気味"},{name:"予算",placeholder:"例: 15000円"}],
        aiPrompt:"あなたはランニングシューズの専門家です。足の特徴と用途に合ったシューズを3足おすすめしてください。クッション性、安定性、重量を比較してください。"}
    ]
  },
  {
    id:"manga",emoji:"📔",gradient:"from-yellow-500 to-amber-600",bgLight:"bg-yellow-50",
    tools:[
      {id:"story",nameKey:"tools.manga.story",emoji:"📖",type:"form-input",
        inputLabelKey:"tools.manga.story_input",outputLabelKey:"tools.manga.story_output",
        fields:[{name:"ジャンル",placeholder:"例: バトル、恋愛"},{name:"テーマ",placeholder:"例: 友情と成長"},{name:"ページ数",placeholder:"例: 30ページ読み切り"}],
        aiPrompt:"あなたは漫画原作者です。ジャンルとテーマからストーリーのプロットを作成してください。起承転結と各シーンの概要を記載してください。"},
      {id:"character",nameKey:"tools.manga.character",emoji:"👤",type:"form-input",
        inputLabelKey:"tools.manga.character_input",outputLabelKey:"tools.manga.character_output",
        fields:[{name:"役割",placeholder:"例: 主人公"},{name:"性格",placeholder:"例: 明るいが不器用"},{name:"世界観",placeholder:"例: 現代の高校"}],
        aiPrompt:"あなたはキャラクターデザイナーです。条件に合ったキャラクター設定を作成してください。外見、性格、過去、口癖、人間関係を記載してください。"},
      {id:"panel",nameKey:"tools.manga.panel",emoji:"🖼️",type:"text-input",
        inputLabelKey:"tools.manga.panel_input",outputLabelKey:"tools.manga.panel_output",
        placeholder:"例: 主人公が敵と初対面するシーン。緊張感を出したい。",
        aiPrompt:"あなたは漫画のコマ割りの専門家です。シーンの内容から効果的なコマ割りを提案してください。構図、カメラアングル、効果線の使い方を記載してください。"}
    ]
  },
  {
    id:"video",emoji:"📹",gradient:"from-red-500 to-pink-600",bgLight:"bg-red-50",
    tools:[
      {id:"edit",nameKey:"tools.video.edit",emoji:"🎬",type:"text-input",
        inputLabelKey:"tools.video.edit_input",outputLabelKey:"tools.video.edit_output",
        placeholder:"例: 旅行Vlog。素材は5時間分。10分にまとめたい。BGMはチル系。",
        aiPrompt:"あなたは動画編集ディレクターです。素材の内容から効果的な編集プランを作成してください。カット割り、テロップ、BGMの使い方を記載してください。"},
      {id:"effect",nameKey:"tools.video.effect",emoji:"✨",type:"text-input",
        inputLabelKey:"tools.video.effect_input",outputLabelKey:"tools.video.effect_output",
        placeholder:"例: 商品紹介動画。プロっぽいトランジションと字幕を入れたい。",
        aiPrompt:"あなたはモーショングラフィックスの専門家です。動画の内容に合ったエフェクト、トランジション、字幕デザインを提案してください。使用ツールの操作手順も記載してください。"},
      {id:"storyboard",nameKey:"tools.video.storyboard",emoji:"📋",type:"form-input",
        inputLabelKey:"tools.video.storyboard_input",outputLabelKey:"tools.video.storyboard_output",
        fields:[{name:"目的",placeholder:"例: 商品PR動画"},{name:"長さ",placeholder:"例: 60秒"},{name:"ターゲット",placeholder:"例: 20代女性"}],
        aiPrompt:"あなたは映像ディレクターです。動画の絵コンテ(ストーリーボード)を作成してください。各カットの構図、セリフ、秒数を記載してください。"}
    ]
  },
  {
    id:"speech",emoji:"🗣️",gradient:"from-blue-400 to-cyan-500",bgLight:"bg-blue-50",
    tools:[
      {id:"draft",nameKey:"tools.speech.draft",emoji:"📝",type:"form-input",
        inputLabelKey:"tools.speech.draft_input",outputLabelKey:"tools.speech.draft_output",
        fields:[{name:"場面",placeholder:"例: 送別会での挨拶"},{name:"長さ",placeholder:"例: 3分"},{name:"ポイント",placeholder:"例: 感謝を伝えたい"}],
        aiPrompt:"あなたはスピーチライターです。場面に合ったスピーチ原稿を作成してください。聴衆の心に響く構成と表現を心がけてください。"},
      {id:"practice",nameKey:"tools.speech.practice",emoji:"🎯",type:"text-input",
        inputLabelKey:"tools.speech.practice_input",outputLabelKey:"tools.speech.practice_output",
        placeholder:"例: スピーチ原稿を貼り付け",
        aiPrompt:"あなたはスピーチコーチです。原稿を分析し、話すスピード、強調すべき箇所、ジェスチャーのポイントを具体的にアドバイスしてください。"},
      {id:"anxiety",nameKey:"tools.speech.anxiety",emoji:"💆",type:"text-input",
        inputLabelKey:"tools.speech.anxiety_input",outputLabelKey:"tools.speech.anxiety_output",
        placeholder:"例: 明日100人の前でプレゼンがある。人前で話すのが苦手。",
        aiPrompt:"あなたはあがり症対策の専門家です。状況に合ったリラックス法と本番で使えるテクニックを提案してください。呼吸法、準備法、マインドセットを記載してください。"}
    ]
  },
  {
    id:"nutrition",emoji:"🥗",gradient:"from-green-400 to-emerald-500",bgLight:"bg-green-50",
    tools:[
      {id:"mealplan",nameKey:"tools.nutrition.mealplan",emoji:"🍽️",type:"form-input",
        inputLabelKey:"tools.nutrition.mealplan_input",outputLabelKey:"tools.nutrition.mealplan_output",
        fields:[{name:"目的",placeholder:"例: ダイエット、筋肉増量"},{name:"制限",placeholder:"例: グルテンフリー"},{name:"予算",placeholder:"例: 週5000円"}],
        aiPrompt:"あなたは管理栄養士です。目的に合った1週間の食事プランを作成してください。各食のカロリーとPFCバランスも記載してください。"},
      {id:"supplement",nameKey:"tools.nutrition.supplement",emoji:"💊",type:"form-input",
        inputLabelKey:"tools.nutrition.supplement_input",outputLabelKey:"tools.nutrition.supplement_output",
        fields:[{name:"目的",placeholder:"例: 疲労回復"},{name:"食生活",placeholder:"例: 外食多め"},{name:"運動",placeholder:"例: 週3回ジム"}],
        aiPrompt:"あなたはサプリメントアドバイザーです。生活習慣から不足しがちな栄養素を分析し、おすすめの栄養補給方法を提案してください。食事での摂取を優先してください。"},
      {id:"ingredient",nameKey:"tools.nutrition.ingredient",emoji:"🥦",type:"image-upload",
        inputLabelKey:"tools.nutrition.ingredient_input",outputLabelKey:"tools.nutrition.ingredient_output",
        aiPrompt:"あなたは食材の専門家です。食材の写真から栄養素と効能を説明し、おすすめの食べ方と組み合わせを提案してください。"}
    ]
  },
  {
    id:"giftwrap",emoji:"🎀",gradient:"from-pink-400 to-fuchsia-500",bgLight:"bg-pink-50",
    tools:[
      {id:"wrap",nameKey:"tools.giftwrap.wrap",emoji:"🎁",type:"form-input",
        inputLabelKey:"tools.giftwrap.wrap_input",outputLabelKey:"tools.giftwrap.wrap_output",
        fields:[{name:"箱のサイズ",placeholder:"例: 20cm×15cm×10cm"},{name:"用途",placeholder:"例: 誕生日プレゼント"},{name:"素材",placeholder:"例: 包装紙、リボン"}],
        aiPrompt:"あなたはラッピングの専門家です。箱のサイズと用途に合ったラッピング方法を手順付きで説明してください。おしゃれなアレンジも提案してください。"},
      {id:"card",nameKey:"tools.giftwrap.card",emoji:"💌",type:"form-input",
        inputLabelKey:"tools.giftwrap.card_input",outputLabelKey:"tools.giftwrap.card_output",
        fields:[{name:"場面",placeholder:"例: 誕生日、感謝"},{name:"相手",placeholder:"例: 友人、上司"},{name:"伝えたいこと",placeholder:"例: いつもありがとう"}],
        aiPrompt:"あなたはメッセージカードの専門家です。場面と相手に合った心のこもったメッセージを3パターン提案してください。手書き風のレイアウトアイデアも記載してください。"}
    ]
  },
  {
    id:"aquarium",emoji:"🐠",gradient:"from-blue-400 to-teal-500",bgLight:"bg-blue-50",
    tools:[
      {id:"setup",nameKey:"tools.aquarium.setup",emoji:"🐟",type:"form-input",
        inputLabelKey:"tools.aquarium.setup_input",outputLabelKey:"tools.aquarium.setup_output",
        fields:[{name:"水槽サイズ",placeholder:"例: 60cm"},{name:"予算",placeholder:"例: 3万円"},{name:"経験",placeholder:"例: 初心者"}],
        aiPrompt:"あなたはアクアリウムの専門家です。条件に合った水槽のセットアップ手順と必要な器材を説明してください。おすすめのレイアウトも提案してください。"},
      {id:"water",nameKey:"tools.aquarium.water",emoji:"💧",type:"form-input",
        inputLabelKey:"tools.aquarium.water_input",outputLabelKey:"tools.aquarium.water_output",
        fields:[{name:"水質",placeholder:"例: pHが高い"},{name:"症状",placeholder:"例: 水が白く濁る"},{name:"飼育魚",placeholder:"例: ネオンテトラ"}],
        aiPrompt:"あなたは水質管理の専門家です。症状から原因を分析し、水質改善の方法をステップバイステップで説明してください。"},
      {id:"fish",nameKey:"tools.aquarium.fish",emoji:"🐡",type:"form-input",
        inputLabelKey:"tools.aquarium.fish_input",outputLabelKey:"tools.aquarium.fish_output",
        fields:[{name:"水槽サイズ",placeholder:"例: 45cm"},{name:"好み",placeholder:"例: カラフル、群泳する"},{name:"難易度",placeholder:"例: 初心者向け"}],
        aiPrompt:"あなたは熱帯魚の専門家です。条件に合った魚を5種類おすすめしてください。混泳の相性と飼育のポイントも記載してください。"}
    ]
  },
  {
    id:"debug",emoji:"🐛",gradient:"from-gray-600 to-zinc-700",bgLight:"bg-gray-50",
    tools:[
      {id:"error",nameKey:"tools.debug.error",emoji:"🔴",type:"text-input",
        inputLabelKey:"tools.debug.error_input",outputLabelKey:"tools.debug.error_output",
        placeholder:"例: エラーメッセージやスタックトレースを貼り付け",
        aiPrompt:"あなたはシニアエンジニアです。エラーメッセージを分析し、原因の特定と解決方法を提案してください。類似のエラーを防ぐための対策も記載してください。"},
      {id:"review",nameKey:"tools.debug.review",emoji:"👀",type:"text-input",
        inputLabelKey:"tools.debug.review_input",outputLabelKey:"tools.debug.review_output",
        placeholder:"例: レビューしてほしいコードを貼り付け",
        aiPrompt:"あなたはコードレビュアーです。コードの品質、可読性、パフォーマンス、セキュリティの観点からレビューし、改善点を提案してください。"},
      {id:"perf",nameKey:"tools.debug.perf",emoji:"⚡",type:"text-input",
        inputLabelKey:"tools.debug.perf_input",outputLabelKey:"tools.debug.perf_output",
        placeholder:"例: 遅いクエリやパフォーマンスの問題を説明",
        aiPrompt:"あなたはパフォーマンスエンジニアです。パフォーマンスの問題を分析し、ボトルネックの特定と最適化方法を提案してください。"}
    ]
  },
  {
    id:"exam",emoji:"📝",gradient:"from-indigo-500 to-blue-600",bgLight:"bg-indigo-50",
    tools:[
      {id:"strategy",nameKey:"tools.exam.strategy",emoji:"🎯",type:"form-input",
        inputLabelKey:"tools.exam.strategy_input",outputLabelKey:"tools.exam.strategy_output",
        fields:[{name:"試験",placeholder:"例: TOEIC 800点"},{name:"現状",placeholder:"例: 600点"},{name:"期間",placeholder:"例: 3ヶ月"}],
        aiPrompt:"あなたは試験対策の専門家です。目標スコア達成のための戦略的な学習プランを作成してください。分野別の優先度と教材も記載してください。"},
      {id:"memorize",nameKey:"tools.exam.memorize",emoji:"🧠",type:"text-input",
        inputLabelKey:"tools.exam.memorize_input",outputLabelKey:"tools.exam.memorize_output",
        placeholder:"例: 覚えたい内容（用語リスト、公式など）を貼り付け",
        aiPrompt:"あなたは記憶術の専門家です。内容を効率的に覚えるための暗記法を提案してください。語呂合わせ、ストーリー法、場所法などを活用してください。"},
      {id:"timetable",nameKey:"tools.exam.timetable",emoji:"📅",type:"form-input",
        inputLabelKey:"tools.exam.timetable_input",outputLabelKey:"tools.exam.timetable_output",
        fields:[{name:"試験日",placeholder:"例: 6月15日"},{name:"科目",placeholder:"例: 数学、英語、物理"},{name:"1日の勉強時間",placeholder:"例: 4時間"}],
        aiPrompt:"あなたは学習計画の専門家です。試験日から逆算した勉強スケジュールを作成してください。科目バランスと復習のタイミングも考慮してください。"}
    ]
  },
  {
    id:"email_pro",emoji:"✉️",gradient:"from-slate-500 to-gray-600",bgLight:"bg-slate-50",
    tools:[
      {id:"template",nameKey:"tools.email_pro.template",emoji:"📄",type:"form-input",
        inputLabelKey:"tools.email_pro.template_input",outputLabelKey:"tools.email_pro.template_output",
        fields:[{name:"場面",placeholder:"例: お見積りの送付"},{name:"相手",placeholder:"例: 取引先"},{name:"トーン",placeholder:"例: フォーマル"}],
        aiPrompt:"あなたはビジネスメールの専門家です。場面に合ったメールテンプレートを作成してください。件名、本文、署名の例を記載してください。"},
      {id:"followup",nameKey:"tools.email_pro.followup",emoji:"🔄",type:"text-input",
        inputLabelKey:"tools.email_pro.followup_input",outputLabelKey:"tools.email_pro.followup_output",
        placeholder:"例: 先週見積もりを送ったが返信がない。催促したい。",
        aiPrompt:"あなたはビジネスコミュニケーションの専門家です。状況に合ったフォローアップメールを作成してください。失礼にならない丁寧な催促の表現を使ってください。"},
      {id:"apology",nameKey:"tools.email_pro.apology",emoji:"🙏",type:"text-input",
        inputLabelKey:"tools.email_pro.apology_input",outputLabelKey:"tools.email_pro.apology_output",
        placeholder:"例: 納品が3日遅れた。原因は社内の確認漏れ。",
        aiPrompt:"あなたはお詫びメールの専門家です。状況に合った誠意のあるお詫びメールを作成してください。原因説明、対策、今後の対応を記載してください。"}
    ]
  },
  {
    id:"mindmap",emoji:"🗺️",gradient:"from-violet-400 to-purple-500",bgLight:"bg-violet-50",
    tools:[
      {id:"organize",nameKey:"tools.mindmap.organize",emoji:"🧩",type:"text-input",
        inputLabelKey:"tools.mindmap.organize_input",outputLabelKey:"tools.mindmap.organize_output",
        placeholder:"例: 頭の中にあるアイデアや考えを自由に書き出してください",
        aiPrompt:"あなたは思考整理の専門家です。書き出された内容をマインドマップ形式で構造化してください。中心テーマ、大分類、小分類に整理してください。"},
      {id:"brainstorm",nameKey:"tools.mindmap.brainstorm",emoji:"💡",type:"form-input",
        inputLabelKey:"tools.mindmap.brainstorm_input",outputLabelKey:"tools.mindmap.brainstorm_output",
        fields:[{name:"テーマ",placeholder:"例: 新サービスのアイデア"},{name:"制約",placeholder:"例: 予算100万円以内"},{name:"ターゲット",placeholder:"例: 20代会社員"}],
        aiPrompt:"あなたはアイデア発想の専門家です。テーマに沿ったアイデアをブレインストーミング形式で20個生成してください。実現可能性と新規性で分類してください。"},
      {id:"project",nameKey:"tools.mindmap.project",emoji:"📋",type:"text-input",
        inputLabelKey:"tools.mindmap.project_input",outputLabelKey:"tools.mindmap.project_output",
        placeholder:"例: Webアプリ開発プロジェクト。メンバー3人。納期は2ヶ月。",
        aiPrompt:"あなたはプロジェクトマネージャーです。プロジェクト概要からWBS(作業分解構成図)を作成してください。マイルストーンと依存関係も記載してください。"}
    ]
  },
  {
    id:"boardgame",emoji:"🎲",gradient:"from-amber-500 to-orange-600",bgLight:"bg-amber-50",
    tools:[
      {id:"rules",nameKey:"tools.boardgame.rules",emoji:"📖",type:"text-input",
        inputLabelKey:"tools.boardgame.rules_input",outputLabelKey:"tools.boardgame.rules_output",
        placeholder:"例: カタンの開拓者たちのルールを教えて",
        aiPrompt:"あなたはボードゲームインストラクターです。ゲームのルールを初心者にもわかるように説明してください。セットアップ、手番の流れ、勝利条件を記載してください。"},
      {id:"strategy",nameKey:"tools.boardgame.strategy",emoji:"🎯",type:"text-input",
        inputLabelKey:"tools.boardgame.strategy_input",outputLabelKey:"tools.boardgame.strategy_output",
        placeholder:"例: カタンで序盤にどこに開拓地を置くべきか",
        aiPrompt:"あなたはボードゲーム戦略の専門家です。ゲームの状況に対する効果的な戦略とテクニックを提案してください。初級〜上級のコツを記載してください。"},
      {id:"recommend",nameKey:"tools.boardgame.recommend",emoji:"🎁",type:"form-input",
        inputLabelKey:"tools.boardgame.recommend_input",outputLabelKey:"tools.boardgame.recommend_output",
        fields:[{name:"人数",placeholder:"例: 4人"},{name:"プレイ時間",placeholder:"例: 60分以内"},{name:"好み",placeholder:"例: 戦略系、協力系"}],
        aiPrompt:"あなたはボードゲームソムリエです。条件に合ったボードゲームを5つおすすめしてください。難易度、プレイ感、おすすめポイントを記載してください。"}
    ]
  },
  {
    id:"tea",emoji:"🍵",gradient:"from-green-400 to-lime-500",bgLight:"bg-green-50",
    tools:[
      {id:"brew",nameKey:"tools.tea.brew",emoji:"🫖",type:"form-input",
        inputLabelKey:"tools.tea.brew_input",outputLabelKey:"tools.tea.brew_output",
        fields:[{name:"茶葉の種類",placeholder:"例: 玉露"},{name:"道具",placeholder:"例: 急須"},{name:"好み",placeholder:"例: 濃いめ"}],
        aiPrompt:"あなたは日本茶インストラクターです。茶葉に合った最適な淹れ方を説明してください。湯温、蒸らし時間、湯量を記載してください。"},
      {id:"leaf",nameKey:"tools.tea.leaf",emoji:"🍃",type:"form-input",
        inputLabelKey:"tools.tea.leaf_input",outputLabelKey:"tools.tea.leaf_output",
        fields:[{name:"好み",placeholder:"例: 甘め、さっぱり"},{name:"場面",placeholder:"例: 仕事中、リラックス"},{name:"予算",placeholder:"例: 1000円"}],
        aiPrompt:"あなたはお茶のソムリエです。好みに合ったお茶を5種類おすすめしてください。味の特徴と購入先も記載してください。"},
      {id:"pairing",nameKey:"tools.tea.pairing",emoji:"🍡",type:"text-input",
        inputLabelKey:"tools.tea.pairing_input",outputLabelKey:"tools.tea.pairing_output",
        placeholder:"例: 抹茶に合うお菓子を知りたい",
        aiPrompt:"あなたはお茶とスイーツのペアリング専門家です。お茶の種類に合うお菓子や食べ物を5つ提案してください。相性の理由も記載してください。"}
    ]
  },
  {
    id:"astro",emoji:"🔭",gradient:"from-indigo-600 to-purple-700",bgLight:"bg-indigo-50",
    tools:[
      {id:"observe",nameKey:"tools.astro.observe",emoji:"⭐",type:"form-input",
        inputLabelKey:"tools.astro.observe_input",outputLabelKey:"tools.astro.observe_output",
        fields:[{name:"場所",placeholder:"例: 東京"},{name:"日時",placeholder:"例: 今週末の夜"},{name:"機材",placeholder:"例: 肉眼、双眼鏡"}],
        aiPrompt:"あなたは天文ガイドです。日時と場所から見える星座や天体を紹介してください。見つけ方のコツと観察のポイントも記載してください。"},
      {id:"event",nameKey:"tools.astro.event",emoji:"🌠",type:"form-input",
        inputLabelKey:"tools.astro.event_input",outputLabelKey:"tools.astro.event_output",
        fields:[{name:"時期",placeholder:"例: 2026年春"},{name:"興味",placeholder:"例: 流星群、月食"}],
        aiPrompt:"あなたは天文学者です。指定時期に見られる天文イベントを紹介してください。観測のベストタイミングと準備するものを記載してください。"},
      {id:"photograph",nameKey:"tools.astro.photograph",emoji:"📷",type:"form-input",
        inputLabelKey:"tools.astro.photograph_input",outputLabelKey:"tools.astro.photograph_output",
        fields:[{name:"対象",placeholder:"例: 天の川"},{name:"カメラ",placeholder:"例: ミラーレス一眼"},{name:"レンズ",placeholder:"例: 14mm F2.8"}],
        aiPrompt:"あなたは天体写真の専門家です。撮影対象に合ったカメラ設定と撮影テクニックを提案してください。ISO、シャッタースピード、構図を記載してください。"}
    ]
  }
];
