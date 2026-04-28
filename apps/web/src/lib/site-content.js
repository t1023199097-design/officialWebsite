import { moduleCatalog } from "./module-catalog.mjs";

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

