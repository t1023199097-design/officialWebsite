import { moduleCatalog } from "./module-catalog.mjs";

const locales = [
  { label: "繁", name: "繁體中文", code: "zh-Hant" },
  { label: "简", name: "简体中文", code: "zh-Hans" },
  { label: "EN", name: "English", code: "en" }
];

export const demoHomeContent = {
  locales: [
    ...locales
  ],
  motion: {
    gradientSpeed: "4.2s",
    hoverSpeed: "2.4s"
  },
  hero: {
    eyebrow: "Beefintech 旗下 LifeBee",
    sloganMain: "客戶至上，服務為先",
    sloganSub: "以科技力量擁抱世界",
    lead: [
      "香港首家科創.香港保險展業全鏈條經紀業務管理系統(LifeBee)",
      "LifeBee是香港首家專註保險經紀全鏈路的科創SaaS平台，由BeeFintech研發，服務港澳、台灣及新加坡等亞太市場。平台提供PC端與移動端，整合傳統流程碎片化、合規成本高、結算低效等痛點，以合規、效率、數據為核心，打造一體化保險經紀業務中台。"
    ],
    primaryCta: "預約演示",
    secondaryCta: "查看解決方案"
  },
  dashboard: {
    small: "營運工作台",
    title: "待跟進流程",
    status: "即時",
    signals: ["客戶資料", "保單更新", "保費提醒", "待處理個案", "介紹費流程"]
  },
  heroModules: [
    { icon: "info", title: "市場資訊", detail: "保司優惠與公司公告" },
    { icon: "library", title: "產品庫", detail: "產品資料與官方文件" },
    { icon: "compare", title: "產品對比", detail: "多產品方案清晰比較" },
    { icon: "quote", title: "保費試算", detail: "快速取得產品報價" },
    { icon: "plan", title: "計劃書", detail: "申請、生成與分享" },
    { icon: "client", title: "客戶跟進", detail: "潛在客戶與活動記錄" },
    { icon: "booking", title: "預約簽單", detail: "預約資料同步後台" },
    { icon: "pipeline", title: "新單跟進", detail: "Pending 與狀態提醒" },
    { icon: "policy", title: "保單服務", detail: "保單資料與續保提醒" },
    { icon: "commission", title: "介紹費", detail: "帳單狀態與核對進度" }
  ],
  trustLogos: ["經紀營運", "顧問 APP", "管理後台", "保司 API", "數據金庫"],
  metrics: [
    { value: "近10年", label: "深耕香港保險經紀行業" },
    { value: "亞太", label: "覆蓋香港、澳門、台灣及新加坡方向" },
    { value: "雙端", label: "PC 管理端與手機 APP 協同" },
    { value: "可核實", label: "具體市場數據待團隊確認口徑" }
  ],
  pillarThemes: [
    { key: "day", label: "專業藍", detail: "清晰可信的預設展示" },
    { key: "gold", label: "暖金", detail: "成熟商務的價值表達" },
    { key: "night", label: "夜間", detail: "科技演示與數據流感" }
  ],
  workflow: {
    eyebrow: "一套流程，雙端協同",
    title: "一套平台連接外部理財顧問與內部營運團隊。",
    description:
      "LifeBee 把客戶、保單、文件、任務與提醒收束進結構化流程，讓 APP 與 Admin 在同一套數據邏輯下協同。",
    highlights: [
      { label: "APP", detail: "顧問前台協作" },
      { label: "Admin", detail: "內部營運管理" },
      { label: "API", detail: "保司授權接入" },
      { label: "私有部署", detail: "數據主權掌控" }
    ]
  },
  serviceShowcase: {
    eyebrow: "工具與服務功能",
    title: "像 Stripe 一樣流動展示核心能力，讓保險流程一眼可讀。",
    description:
      "六個常用模塊覆蓋從資訊獲取、產品查詢到新單、保單與介紹費跟進的完整營運場景。"
  },
  serviceFeatures: [
    {
      kicker: "Content",
      title: "資訊",
      description: "集中展示市場資訊、產品更新與團隊公告，減少跨群組查找。"
    },
    {
      kicker: "Library",
      title: "產品庫",
      description: "按保司、類型與銷售場景整理產品資料，顧問能快速取得準確內容。"
    },
    {
      kicker: "Application",
      title: "投保",
      description: "承接投保資料、文件與節點提醒，讓行政與顧問保持同一進度。"
    },
    {
      kicker: "Pipeline",
      title: "新單",
      description: "把新單從線索、客戶到文件補交整理成可追蹤的流程管線。"
    },
    {
      kicker: "Policy",
      title: "保單",
      description: "集中保單狀態、文件與服務紀錄，支援續保與客戶服務跟進。"
    },
    {
      kicker: "Commission",
      title: "介紹費",
      description: "清晰記錄介紹費狀態、歸屬與核對進度，降低人工對賬成本。"
    }
  ],
  values: [
    {
      title: "APP + Admin 雙端協同",
      description: "外部顧問用 APP 跟進業務，內部團隊用 Admin 管理流程與資料。"
    },
    {
      title: "AI Robot 自動更新",
      description: "自動提示待處理、保單更新、保費提醒等關鍵節點。"
    },
    {
      title: "保險公司 API 授權",
      description: "支援與保險公司官方系統授權接入，減少人工查詢與重複輸入。"
    },
    {
      title: "私有化部署",
      description: "支持企業級私有化部署，客戶擁有數據所有權與更高控制力。"
    },
    {
      title: "權限隔離",
      description: "按角色、團隊、業務場景控制資料可見範圍，降低合規壓力。"
    },
    {
      title: "營運可視化",
      description: "讓管理層從數據看見進度、效率與服務質量。"
    }
  ],
  cta: {
    eyebrow: "面向經紀業務營運",
    title: "以數字化效率提升服務，同時保留企業對數據的控制力。",
    description: "用科技金融藍的速度感，承載保險經紀公司真正需要的效率、安全與數據主權。",
    button: "聯絡 LifeBee"
  }
};

export const serviceCapabilities = [
  {
    title: "展業效率提升",
    audience: "前線顧問、銷售團隊、獨立 IFA",
    description: "集中產品資料、市場資訊、方案準備、客戶跟進與業務提醒，減少顧問在群組、表格和文件夾之間反覆查找。"
  },
  {
    title: "經營管理提效",
    audience: "管理層、行政營運、財務團隊",
    description: "把客戶、保單、佣金、文件與任務集中到可視化流程中，讓內部團隊用同一套標準管理進度與責任。"
  },
  {
    title: "流程協同與數據賦能",
    audience: "需要標準化流程和數據化經營的經紀公司",
    description: "讓 APP、Admin、API 與資料權限在同一邏輯下協作，幫助團隊看清流程、看見進度、看懂經營結果。"
  },
  {
    title: "長期服務支持",
    audience: "現有客戶與潛在合作伙伴",
    description: "以持續產品迭代、部署支持、合規意識和保險行業理解，陪伴機構完成長期數字化升級。"
  }
];

export const marketScaleContent = {
  hero: {
    eyebrow: "Market Scale",
    title: "以香港保險經紀市場為基礎，連接亞太核心市場的數字化服務能力。",
    description:
      "LifeBee 的市場表達以可核實資料與保守口徑為原則，重點展示服務伙伴、覆蓋方向、流程改善與長期營運價值。"
  },
  sections: [
    {
      title: "服務伙伴",
      body: "面向香港保險中介機構、經紀公司、獨立 IFA、保險公司及合作伙伴，提供從前線展業到後台營運的數字化支援。"
    },
    {
      title: "市場覆蓋",
      body: "以香港市場服務基礎為核心，服務網絡輻射澳門、台灣、新加坡等亞太核心市場方向，支持跨區域經紀業務拓展。"
    },
    {
      title: "服務成果",
      body: "聚焦資料集中、流程透明、提醒自動化、服務跟進與經營可視化，幫助機構降低碎片化流程帶來的管理成本。"
    }
  ],
  notes: [
    "具體服務數量、客戶資料量、流程個案量與市場份額，需由團隊確認後展示。",
    "涉及市場排名或份額時，需標注來源、統計口徑與更新時間。"
  ]
};

export const insightArticles = [
  {
    slug: "insurance-brokerage-digital-operations",
    category: "保險科技資訊",
    date: "2026-05-12",
    title: "保險經紀公司如何從碎片化流程走向數字化營運",
    summary: "從客戶資料、保單服務、佣金核對與任務提醒四個場景，理解經紀業務數字化的第一步。",
    body: [
      "保險經紀公司的日常營運往往分散在聊天工具、表格、文件夾和不同保司系統之間。當業務量增加時，資料查找、文件補交、續保提醒和佣金核對都會成為管理壓力。",
      "LifeBee 的價值不在於把每個操作變得更複雜，而是把關鍵資料、流程節點和團隊責任收束到同一套數據邏輯中。前線顧問能更快準備方案，內部團隊能更清楚看見進度，管理層也能用可視化資料判斷經營狀態。",
      "對第一階段的數字化升級而言，企業應優先處理資料集中、流程標準化和提醒機制，再逐步擴展到 API 授權、私有部署和更細緻的經營分析。"
    ]
  },
  {
    slug: "broker-compliance-data-governance",
    category: "行業政策解讀",
    date: "2026-05-12",
    title: "合規壓力下，保險中介為什麼需要更清晰的資料治理",
    summary: "面對跨團隊協作與客戶服務留痕要求，資料權限、流程記錄與可追溯管理正變得越來越重要。",
    body: [
      "保險中介機構在服務客戶時，需要同時兼顧效率、合規與資料安全。當客戶資料和服務記錄散落在不同個人工具中，企業很難形成穩定、可追溯的管理機制。",
      "數字化系統能幫助機構建立角色權限、資料隔離、流程記錄和關鍵節點提醒，讓服務不只依賴個人經驗，也能沉澱為可管理的組織能力。",
      "任何對外展示的政策或市場判斷，都應保留更新日期與資料來源。LifeBee 官網第一階段以專業解讀和保守表達為主，避免使用未確認的市場承諾。"
    ]
  }
];

export function getInsightBySlug(slug) {
  return insightArticles.find((article) => article.slug === slug) || null;
}

export const contactContent = {
  hero: {
    eyebrow: "Contact",
    title: "與 LifeBee 團隊聊聊保險經紀業務的數字化升級。",
    description: "無論是商務合作、渠道合作、客戶服務或一般查詢，都可以先留下需求，團隊會按內容安排跟進。"
  },
  channels: [
    { title: "商務合作", body: "適合經紀公司、保險中介機構、IFA 團隊與保險公司了解 LifeBee 服務能力。" },
    { title: "渠道合作", body: "適合希望共同拓展香港及亞太保險科技服務的合作伙伴。" },
    { title: "客戶服務", body: "適合現有客戶提交服務諮詢、流程協作或後續支持需求。" }
  ]
};

export const homeAnchorNav = [
  { href: "/", label: "首頁" },
  { href: "/#brand-functions", label: "品牌功能" },
  { href: "/#market-scale", label: "市場規模" },
  { href: "/#content-service", label: "內容服務" },
  { href: "/#about-lifeBee", label: "關於我們" },
  { href: "/#contact-lifeBee", label: "聯絡我們" }
];

export const homeFeaturePreview = {
  eyebrow: "Function Service",
  title: "快人一步 數碼保險化",
  cards: [
    { value: "1,132,344", label: "保費統計" },
    { value: "3,808,007.85", label: "保單金額" },
    { value: "2,106,881.86", label: "收益統計" },
    { value: "1,275,110.05", label: "規模總覽" }
  ],
  phoneGroups: ["產品庫", "保費試算", "計劃書", "客戶跟進", "新單跟進", "保單服務"]
};

export const homeShowcaseSections = [
  {
    id: "brand-functions",
    eyebrow: "Brand Capabilities",
    title: "品牌功能",
    motionLabel: "Core system",
    subtitle: "四大服務能力模塊",
    description: "展業效率提升、經營管理提效、流程協同與數據賦能、長期服務支持，讓保險經紀公司快速理解 LifeBee 的核心價值。",
    points: ["展業效率提升", "經營管理提效", "流程協同與數據賦能", "長期服務支持"],
    details: [
      { label: "展業效率提升", text: "集中產品資料、市場資訊、方案準備與客戶跟進，減少顧問在多個工具之間切換。" },
      { label: "經營管理提效", text: "把客戶、保單、文件、佣金與任務放入同一套可視化流程，讓管理層看見進度與責任。" },
      { label: "流程協同與數據賦能", text: "連接 APP、Admin、API 與資料權限，讓前線顧問與內部營運使用一致的數據邏輯。" }
    ],
    href: "/services"
  },
  {
    id: "market-scale",
    eyebrow: "Market Scale",
    title: "市場規模",
    motionLabel: "Market reach",
    subtitle: "服務伙伴、覆蓋方向與成果口徑",
    description: "以香港市場服務基礎為核心，展示 LifeBee 面向保險中介、經紀公司、獨立 IFA 和亞太核心市場方向的服務能力。",
    points: ["服務伙伴", "香港市場基礎", "亞太核心市場方向", "可核實數據口徑"],
    details: [
      { label: "服務伙伴", text: "面向香港保險中介機構、經紀公司、獨立 IFA、保險公司及合作伙伴。" },
      { label: "市場覆蓋", text: "以香港服務基礎為核心，延伸澳門、台灣、新加坡等亞太核心市場方向。" },
      { label: "數據口徑", text: "具體數字與市場份額保留來源、統計口徑與團隊確認機制，避免誇大承諾。" }
    ],
    href: "/market-scale"
  },
  {
    id: "content-service",
    eyebrow: "Content Service",
    title: "內容服務",
    motionLabel: "Editorial flow",
    subtitle: "保險科技資訊與政策解讀",
    description: "以保險科技資訊與行業政策解讀建立專業度，保留內容服務類增值功能，不擴展工具型模塊。",
    points: ["保險科技資訊", "行業政策解讀", "市場觀察", "文章詳情入口"],
    details: [
      { label: "保險科技資訊", text: "展示保險科技行業趨勢、市場觀察和經紀業務數字化案例。" },
      { label: "行業政策解讀", text: "圍繞保險經紀相關政策、行業規範和市場變化提供清晰解讀。" },
      { label: "內容邊界", text: "第一階段只保留內容服務，不擴展 FAQ、工單、ROI 計算器等工具型功能。" }
    ],
    href: "/insights"
  },
  {
    id: "about-lifeBee",
    eyebrow: "About LifeBee",
    title: "關於我們",
    motionLabel: "Long-term partner",
    subtitle: "行業理解與長期服務願景",
    description: "展示 BeeFintech 對香港保險經紀行業的理解、產品理念、服務優勢與長期陪伴客戶數字化升級的願景。",
    points: ["公司背景", "行業理解", "產品理念", "長期願景"],
    details: [
      { label: "公司背景", text: "BeeFintech 深耕香港保險經紀行業，LifeBee 由金融保險從業者與科技產品團隊共同打造。" },
      { label: "產品理念", text: "不把官網做成操作手冊，而是聚焦品牌價值、服務能力、成果信任與預約轉化。" },
      { label: "長期願景", text: "作為保險經紀公司的長期數字化服務伙伴，持續支持企業提升營運與服務能力。" }
    ],
    href: "/about"
  },
  {
    id: "contact-lifeBee",
    eyebrow: "Contact LifeBee",
    title: "聯絡我們",
    motionLabel: "Start a conversation",
    subtitle: "合作諮詢與預約演示",
    description: "承接商務合作、渠道合作、客戶服務和一般查詢，將訪客引導至預約諮詢演示表單。",
    points: ["商務合作", "渠道合作", "客戶服務", "預約諮詢演示"],
    details: [
      { label: "商務合作", text: "適合經紀公司、保險中介機構、IFA 團隊與保險公司了解 LifeBee 服務能力。" },
      { label: "渠道合作", text: "適合希望共同拓展香港及亞太保險科技服務的合作伙伴。" },
      { label: "預約演示", text: "表單收集姓名、公司、電話、預約時間和需求方向，方便團隊安排跟進。" }
    ],
    href: "/contact"
  }
];

const localizedHomeContent = {
  "zh-Hant": demoHomeContent,
  "zh-Hans": {
    ...demoHomeContent,
    hero: {
      ...demoHomeContent.hero,
      eyebrow: "Beefintech 旗下 LifeBee",
      sloganMain: "客户至上，服务为先",
      sloganSub: "以科技力量拥抱世界",
      lead: [
        "香港首家科创.香港保险展业全链条经纪业务管理系统(LifeBee)",
        "LifeBee是香港首家专注保险经纪全链路的科创SaaS平台，由BeeFintech研发，服务港澳、台湾及新加坡等亚太市场。平台提供PC端与移动端，整合传统流程碎片化、合规成本高、结算低效等痛点，以合规、效率、数据为核心，打造一体化保险经纪业务中台。"
      ],
      primaryCta: "预约演示",
      secondaryCta: "查看解决方案"
    },
    dashboard: {
      small: "运营工作台",
      title: "待跟进流程",
      status: "即时",
      signals: ["客户资料", "保单更新", "保费提醒", "待处理个案", "介绍费流程"]
    },
    heroModules: [
      { icon: "info", title: "市场资讯", detail: "保司优惠与公司公告" },
      { icon: "library", title: "产品库", detail: "产品资料与官方文件" },
      { icon: "compare", title: "产品对比", detail: "多产品方案清晰比较" },
      { icon: "quote", title: "保费试算", detail: "快速取得产品报价" },
      { icon: "plan", title: "计划书", detail: "申请、生成与分享" },
      { icon: "client", title: "客户跟进", detail: "潜在客户与活动记录" },
      { icon: "booking", title: "预约签单", detail: "预约资料同步后台" },
      { icon: "pipeline", title: "新单跟进", detail: "Pending 与状态提醒" },
      { icon: "policy", title: "保单服务", detail: "保单资料与续保提醒" },
      { icon: "commission", title: "介绍费", detail: "账单状态与核对进度" }
    ]
  },
  en: {
    ...demoHomeContent,
    hero: {
      ...demoHomeContent.hero,
      eyebrow: "LifeBee by Beefintech",
      sloganMain: "Customer first, service first",
      sloganSub: "Embracing the world with technology",
      lead: [
        "Hong Kong's first technology-driven full-chain brokerage business management system for insurance distribution (LifeBee)",
        "LifeBee is Hong Kong's first insurtech SaaS platform focused on the full insurance brokerage value chain. Developed by BeeFintech, it serves Hong Kong, Macau, Taiwan, Singapore and other Asia-Pacific markets. The platform provides PC and mobile access, addressing fragmented workflows, high compliance costs and inefficient settlement with an integrated brokerage business hub built around compliance, efficiency and data."
      ],
      primaryCta: "Book a demo",
      secondaryCta: "View solutions"
    },
    dashboard: {
      small: "Operations desk",
      title: "Pending workflows",
      status: "Live",
      signals: ["Client data", "Policy updates", "Premium reminders", "Pending cases", "Commission flow"]
    },
    heroModules: [
      { icon: "info", title: "Market updates", detail: "Promotions and notices" },
      { icon: "library", title: "Product library", detail: "Product files and documents" },
      { icon: "compare", title: "Product compare", detail: "Clear multi-product views" },
      { icon: "quote", title: "Premium quote", detail: "Faster client quotations" },
      { icon: "plan", title: "Proposal", detail: "Request, generate and share" },
      { icon: "client", title: "Client follow-up", detail: "Prospects and activity records" },
      { icon: "booking", title: "Booking", detail: "Appointments synced to Admin" },
      { icon: "pipeline", title: "New business", detail: "Pending and status reminders" },
      { icon: "policy", title: "Policy service", detail: "Policies and renewal reminders" },
      { icon: "commission", title: "Commission", detail: "Statements and reconciliation" }
    ]
  }
};

export function normalizeLocale(locale) {
  return locales.some((item) => item.code === locale) ? locale : "zh-Hant";
}

export function getDemoHomeContent(locale = "zh-Hant") {
  return localizedHomeContent[normalizeLocale(locale)];
}

export const heroMetrics = [
  { label: "行业解决方案", value: "03" },
  { label: "服务化能力入口", value: "04" },
  { label: "预留扩展模块", value: "03" }
];

export const solutionCards = [
  {
    title: "品牌门户升级",
    body: "将静态官网升级为承载方案、行业场景和产品价值表达的动态门户。"
  },
  {
    title: "预约演示编排",
    body: "通过 Java 聚合平台承接预约表单、落库和外部 API 编排，方便后续接真实流程。"
  },
  {
    title: "增值服务预留",
    body: "内容服务、客户赋能、工具服务全部预留统一接口和后台入口。"
  }
];

export const moduleHighlights = moduleCatalog;

export const adminNavigation = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/demo-requests", label: "Demo Requests" },
  { href: "/admin/services", label: "Service Modules" },
  { href: "/admin/login", label: "Login" }
];
