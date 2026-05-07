import { moduleCatalog } from "./module-catalog.mjs";

export const demoHomeContent = {
  locales: [
    { label: "繁", name: "繁體中文" },
    { label: "简", name: "简体中文" },
    { label: "EN", name: "English" }
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
      "LifeBee 是香港保險經紀團隊的",
      "一站式流程輔助工具，",
      "連接 APP、Admin、AI Robot",
      "與安全數據隔離，",
      "讓客戶、保單、文件到續保跟進",
      "都更快、更清晰。"
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
  trustLogos: ["經紀營運", "顧問 APP", "管理後台", "保司 API", "數據金庫"],
  metrics: [
    { value: "1,200+", label: "已投入使用的活躍用戶" },
    { value: "80,000+", label: "已服務客戶資料量" },
    { value: "300,000+", label: "已處理流程個案" },
    { value: "35%", label: "平均營運效率提升" }
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
