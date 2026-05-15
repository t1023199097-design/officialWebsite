export const productServicesSections = [
  {
    eyebrow: "服務功能",
    title: "產品功能服務升級",
    subtitle: "保單管理更智能，投保更省心",
    cards: [
      {
        number: "1",
        label: "AI",
        title: "保單同步",
        headline: "AI 保單同步",
        accent: "green",
        illustration: "sync",
        bullets: ["每日同步保單資料&狀態", "及時提醒數據差異", "告別人工繁瑣操作"]
      },
      {
        number: "2",
        label: "Eform",
        title: "無紙化投保",
        headline: "Eform 無紙化投保",
        accent: "mint",
        illustration: "eform",
        bullets: ["預填電子投保表單", "導出一系列簽單文件", "資料一鍵同步保司簽單系統"]
      },
      {
        number: "3",
        label: "",
        title: "合規資料庫",
        headline: "合規資料庫",
        accent: "amber",
        illustration: "archive",
        bullets: ["多類型文件分類存儲", "用戶實時在線預覽", "預覽數據統計與導出Report"]
      },
      {
        number: "4",
        label: "",
        title: "邀約神器",
        headline: "邀約神器",
        accent: "violet",
        illustration: "invite",
        bullets: ["OCR自動讀取證件信息", "AI智能提交保單申請", "VIP邀約概要聯動推送"]
      }
    ]
  },
  {
    eyebrow: "市場規模",
    title: "從香港出發，連接新加坡與亞太海外保險服務市場",
    description:
      "LifeBee 以香港保險經紀業務場景為核心，向新加坡與亞太海外市場延伸，透過客戶、保單、流程、佣金與資料權限的一體化系統，放大跨境展業與長期服務的市場份額優勢。",
    panel: {
      label: "LifeBee Market OS",
      title: "海外保險服務增長版圖",
      body: "以香港為起點，覆蓋新加坡及亞太高淨值客戶服務場景。",
      meta: "HK · SG · APAC"
    },
    stats: [
      { value: "52%", label: "香港核心客戶基盤", region: "Hong Kong", share: 52, trend: "+18%" },
      { value: "27%", label: "新加坡高淨值延展", region: "Singapore", share: 27, trend: "+31%" },
      { value: "21%", label: "亞太海外市場拓展", region: "APAC Overseas", share: 21, trend: "+46%" }
    ],
    notes: ["跨境服務伙伴", "高淨值客戶版圖", "保司與資料接口"]
  },
  {
    eyebrow: "ROI計算器",
    title: "在線測算港險方案投入、回報與保障價值",
    description:
      "先提供可交互使用的 ROI 計算器，讓客戶調整每月保費、持有年期、預期回報與保障倍數，即時看到投入、收益與保障額度。"
  },
  {
    eyebrow: "港險資訊一覽",
    title: "集中呈現香港保險市場資訊、產品動態與政策解讀",
    description:
      "為客戶和顧問提供一個可持續更新的內容中心，先保留清晰分類與入口，後續再補充文章、專題與產品內容。",
    bullets: [
      "市場與政策解讀：承接最新港險市場趨勢與監管資訊。",
      "產品資訊索引：預留產品比較、保障亮點與常見問題入口。",
      "專題內容沉澱：支持後續加入文章、案例、白皮書和推送內容。"
    ],
    panelTitle: "資訊分類",
    panel: [
      {
        category: "市場快訊",
        title: "每日財經新聞早知道",
        meta: "追蹤每日財經與港險市場資訊",
        href: "https://www.hkinsu.com/"
      },
      {
        category: "監管動態",
        title: "銀行及保險跨行業背景查核安排",
        meta: "關注香港金管局與保險業合規趨勢",
        href: "https://www.hkinsu.com/"
      },
      {
        category: "產品專題",
        title: "分紅險的分紅收入從哪里來",
        meta: "補充分紅保單收益邏輯與客戶教育內容",
        href: "https://www.hkinsu.com/"
      },
      {
        category: "保司觀察",
        title: "友邦、保誠、宏利和安盛業績對比",
        meta: "預留四大香港保司內容比較入口",
        href: "https://www.hkinsu.com/"
      }
    ]
  },
  {
    eyebrow: "ROI計算器",
    title: "用收益測算把保險方案價值轉化為直觀決策依據",
    description:
      "先搭建 ROI 計算器的展示框架，後續可接入保費、年期、預期回報、保障額度等欄位，幫助客戶快速理解方案價值。",
    metrics: [
      { value: "保費", label: "預留年度/每月投入欄位" },
      { value: "年期", label: "預留持有週期與回報區間" },
      { value: "ROI", label: "預留收益率與方案比較" }
    ]
  },
  {
    eyebrow: "預約演示 / 聯絡我們",
    title: "預約 LifeBee 演示，了解保險經紀數字化方案",
    description:
      "留下你的需求或直接聯絡我們，團隊會根據業務規模、服務地區與關注模塊安排產品演示。",
    contactTitle: "Beefintech / LifeBee",
    contacts: [
      { label: "電話", value: "5575 1661", href: "tel:+85255751661" },
      { label: "WhatsApp", value: "6709 2908", href: "https://wa.me/85267092908" },
      { label: "郵箱", value: "info@beefintech.hk", href: "mailto:info@beefintech.hk" },
      { label: "地址", value: "香港九龍塘達之路72號創新中心5樓FinTech Centre" }
    ]
  }
];

export const localizedProductServicesSections = {
  "zh-Hant": productServicesSections,
  "zh-Hans": [
    {
      ...productServicesSections[0],
      eyebrow: "服务功能",
      title: "产品功能服务升级",
      subtitle: "保单管理更智能，投保更省心",
      cards: [
        { ...productServicesSections[0].cards[0], title: "保单同步", headline: "AI 保单同步", bullets: ["每日同步保单资料&状态", "及时提醒数据差异", "告别人工繁琐操作"] },
        { ...productServicesSections[0].cards[1], title: "无纸化投保", headline: "Eform 无纸化投保", bullets: ["预填电子投保表单", "导出一系列签单文件", "资料一键同步保司签单系统"] },
        { ...productServicesSections[0].cards[2], title: "合规资料库", headline: "合规资料库", bullets: ["多类型文件分类存储", "用户实时在线预览", "预览数据统计与导出Report"] },
        { ...productServicesSections[0].cards[3], title: "邀约神器", bullets: ["OCR自动读取证件信息", "AI智能提交保单申请", "VIP邀约概要联动推送"] }
      ]
    },
    {
      ...productServicesSections[1],
      eyebrow: "市场规模",
      title: "从香港出发，连接新加坡与亚太海外保险服务市场",
      description: "LifeBee 以香港保险经纪业务场景为核心，向新加坡与亚太海外市场延伸，通过客户、保单、流程、佣金与资料权限的一体化系统，放大跨境展业与长期服务的市场份额优势。",
      panel: { label: "LifeBee Market OS", title: "海外保险服务增长版图", body: "以香港为起点，覆盖新加坡及亚太高净值客户服务场景。", meta: "HK · SG · APAC" },
      stats: [
        { value: "52%", label: "香港核心客户基盘", region: "Hong Kong", share: 52, trend: "+18%" },
        { value: "27%", label: "新加坡高净值延展", region: "Singapore", share: 27, trend: "+31%" },
        { value: "21%", label: "亚太海外市场拓展", region: "APAC Overseas", share: 21, trend: "+46%" }
      ],
      notes: ["跨境服务伙伴", "高净值客户版图", "保司与资料接口"]
    },
    {
      ...productServicesSections[2],
      eyebrow: "ROI计算器",
      title: "在线测算港险方案投入、回报与保障价值",
      description: "先提供可交互使用的 ROI 计算器，让客户调整每月保费、持有年期、预期回报与保障倍数，即时看到投入、收益与保障额度。"
    },
    {
      ...productServicesSections[3],
      eyebrow: "港险资讯一览",
      title: "集中呈现香港保险市场资讯、产品动态与政策解读",
      description: "为客户和顾问提供一个可持续更新的内容中心，先保留清晰分类与入口，后续再补充文章、专题与产品内容。",
      bullets: [
        "市场与政策解读：承接最新港险市场趋势与监管资讯。",
        "产品资讯索引：预留产品比较、保障亮点与常见问题入口。",
        "专题内容沉淀：支持后续加入文章、案例、白皮书和推送内容。"
      ],
      panelTitle: "资讯分类",
      panel: productServicesSections[3].panel.map((item) => ({
        ...item,
        category: item.category.replace("市場", "市场").replace("監管", "监管").replace("動態", "动态").replace("產品", "产品").replace("專題", "专题").replace("觀察", "观察"),
        title: item.title.replace("資訊", "资讯").replace("銀行", "银行").replace("保險", "保险").replace("哪里", "哪里").replace("對比", "对比"),
        meta: item.meta.replace("財經", "财经").replace("港險", "港险").replace("資訊", "资讯").replace("關注", "关注").replace("保險", "保险").replace("趨勢", "趋势").replace("補充", "补充").replace("邏輯", "逻辑").replace("預留", "预留").replace("對比", "对比")
      }))
    },
    {
      ...productServicesSections[4],
      eyebrow: "ROI计算器",
      title: "用收益测算把保险方案价值转化为直观决策依据",
      description: "先搭建 ROI 计算器的展示框架，后续可接入保费、年期、预期回报、保障额度等栏位，帮助客户快速理解方案价值。",
      metrics: [
        { value: "保费", label: "预留年度/每月投入栏位" },
        { value: "年期", label: "预留持有周期与回报区间" },
        { value: "ROI", label: "预留收益率与方案比较" }
      ]
    },
    {
      ...productServicesSections[5],
      eyebrow: "预约演示 / 联系我们",
      title: "预约 LifeBee 演示，了解保险经纪数字化方案",
      description: "留下你的需求或直接联系我们，团队会根据业务规模、服务地区与关注模块安排产品演示。",
      contacts: [
        { label: "电话", value: "5575 1661", href: "tel:+85255751661" },
        { label: "WhatsApp", value: "6709 2908", href: "https://wa.me/85267092908" },
        { label: "邮箱", value: "info@beefintech.hk", href: "mailto:info@beefintech.hk" },
        { label: "地址", value: "香港九龙塘达之路72号创新中心5楼FinTech Centre" }
      ]
    }
  ],
  en: [
    {
      ...productServicesSections[0],
      eyebrow: "Service Features",
      title: "Product Service Upgrades",
      subtitle: "Smarter policy management and easier applications",
      cards: [
        { ...productServicesSections[0].cards[0], title: "Policy Sync", headline: "AI Policy Sync", bullets: ["Sync policy data and status daily", "Flag data differences in time", "Reduce repetitive manual work"] },
        { ...productServicesSections[0].cards[1], title: "Paperless Application", headline: "Eform Paperless Application", bullets: ["Pre-fill digital application forms", "Export signing document packs", "Sync data to insurer signing systems"] },
        { ...productServicesSections[0].cards[2], title: "Compliance Library", headline: "Compliance Library", bullets: ["Classify and store multiple document types", "Preview files online in real time", "Export preview statistics and reports"] },
        { ...productServicesSections[0].cards[3], title: "Invitation Engine", bullets: ["Read ID information with OCR", "Submit policy applications with AI support", "Push VIP invitation summaries"] }
      ]
    },
    {
      ...productServicesSections[1],
      eyebrow: "Market Scale",
      title: "Starting in Hong Kong, connecting Singapore and APAC insurance markets",
      description: "LifeBee starts from Hong Kong insurance brokerage workflows and expands toward Singapore and APAC overseas markets, integrating clients, policies, workflows, commissions and data permissions into one operating system.",
      panel: { label: "LifeBee Market OS", title: "Overseas insurance growth map", body: "Starting from Hong Kong, covering Singapore and APAC high-net-worth client service scenarios.", meta: "HK · SG · APAC" },
      stats: [
        { value: "52%", label: "Hong Kong core base", region: "Hong Kong", share: 52, trend: "+18%" },
        { value: "27%", label: "Singapore HNW expansion", region: "Singapore", share: 27, trend: "+31%" },
        { value: "21%", label: "APAC overseas reach", region: "APAC Overseas", share: 21, trend: "+46%" }
      ],
      notes: ["Cross-border partners", "HNW client coverage", "Insurer and data interfaces"]
    },
    {
      ...productServicesSections[2],
      eyebrow: "ROI Calculator",
      title: "Estimate insurance plan input, return and protection value online",
      description: "Use the interactive ROI calculator to adjust monthly premium, holding period, expected return and protection multiple, then view input, gain and protection value instantly."
    },
    {
      ...productServicesSections[3],
      eyebrow: "Hong Kong Insurance Updates",
      title: "Centralize Hong Kong insurance market news, product updates and policy explainers",
      description: "Provide a continuously updated content center for clients and advisors, with clear categories today and room for articles, topics and product content later.",
      bullets: [
        "Market and policy explainers: follow Hong Kong insurance trends and regulatory updates.",
        "Product information index: reserve entries for product comparison, highlights and FAQs.",
        "Editorial library: support future articles, cases, whitepapers and push content."
      ],
      panelTitle: "Information Categories",
      panel: [
        { category: "Market Update", title: "Daily finance news briefing", meta: "Track daily finance and Hong Kong insurance market updates", href: "https://www.hkinsu.com/" },
        { category: "Regulatory", title: "Cross-sector background checking for banking and insurance", meta: "Follow compliance trends across HKMA and insurance", href: "https://www.hkinsu.com/" },
        { category: "Product Topic", title: "Where participating policy dividends come from", meta: "Support client education on participating policy returns", href: "https://www.hkinsu.com/" },
        { category: "Insurer Watch", title: "AIA, Prudential, Manulife and AXA performance comparison", meta: "Reserve an entry for major Hong Kong insurer comparison", href: "https://www.hkinsu.com/" }
      ]
    },
    {
      ...productServicesSections[4],
      eyebrow: "ROI Calculator",
      title: "Turn plan value into a clear decision basis with return estimates",
      description: "Reserve a calculator framework for premium, term, expected return and protection amount fields to help clients understand plan value faster.",
      metrics: [
        { value: "Premium", label: "Reserve annual/monthly input fields" },
        { value: "Term", label: "Reserve holding period and return range" },
        { value: "ROI", label: "Reserve yield and plan comparison" }
      ]
    },
    {
      ...productServicesSections[5],
      eyebrow: "Book a Demo / Contact Us",
      title: "Book a LifeBee demo and explore insurance brokerage digitization",
      description: "Share your needs or contact us directly. Our team will arrange a product demo based on your business scale, service regions and modules of interest.",
      contacts: [
        { label: "Phone", value: "5575 1661", href: "tel:+85255751661" },
        { label: "WhatsApp", value: "6709 2908", href: "https://wa.me/85267092908" },
        { label: "Email", value: "info@beefintech.hk", href: "mailto:info@beefintech.hk" },
        { label: "Address", value: "FinTech Centre, 5/F, InnoCentre, 72 Tat Chee Avenue, Kowloon Tong, Hong Kong" }
      ]
    }
  ]
};

export function getProductServicesSections(locale = "zh-Hant") {
  return localizedProductServicesSections[locale] || productServicesSections;
}
