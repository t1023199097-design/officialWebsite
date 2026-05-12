export const moduleCategories = ["content", "support", "tools"];

export const moduleCatalog = [
  {
    slug: "industry-insights",
    category: "content",
    name: "Insurance Insights Hub",
    tagline: "政策解读、行业资讯与解决方案观察",
    description: "为保险科技团队预留资讯/政策专栏能力，后续可接 CMS 或后台发布流。",
    enabled: false,
    status: "reserved",
    publicRoute: "/services/industry-insights",
    adminRoute: "/admin/services/industry-insights"
  },
  {
    slug: "faq-ticket-center",
    category: "support",
    name: "FAQ & Ticket Center",
    tagline: "常见问题、在线工单与版本更新中心",
    description: "为客户赋能场景预留统一入口，后续可按时间接入 FAQ、工单和更新日志。",
    enabled: false,
    status: "reserved",
    publicRoute: "/services/faq-ticket-center",
    adminRoute: "/admin/services/faq-ticket-center"
  },
  {
    slug: "roi-calculator",
    category: "tools",
    name: "ROI Calculator",
    tagline: "保险科技投资回报计算器与术语工具",
    description: "为 ROI 计算器和术语字典提供统一扩展位，适合比赛后续做差异化功能。",
    enabled: false,
    status: "reserved",
    publicRoute: "/services/roi-calculator",
    adminRoute: "/admin/services/roi-calculator"
  }
];

export function getModuleBySlug(slug) {
  return moduleCatalog.find((moduleEntry) => moduleEntry.slug === slug) || null;
}

