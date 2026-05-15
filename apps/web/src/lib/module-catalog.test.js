const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

(async () => {
  const { moduleCatalog, moduleCategories, getModuleBySlug } = await import("./module-catalog.mjs");
  const {
    contactContent,
    demoHomeContent,
    getDemoHomeContent,
    getInsightBySlug,
    homeAnchorNav,
    homeFeaturePreview,
    homeShowcaseSections,
    insightArticles,
    marketScaleContent,
    serviceCapabilities
  } = await import("./site-content.mjs");
  const { productServicesSections } = await import("./product-services-content.mjs");

  assert.deepEqual(moduleCategories, ["content", "support", "tools"]);
  assert.equal(moduleCatalog.length, 3);

  for (const moduleEntry of moduleCatalog) {
    assert.equal(moduleEntry.enabled, false);
    assert.match(moduleEntry.publicRoute, /^\/services\//);
    assert.match(moduleEntry.adminRoute, /^\/admin\/services\//);
  }

  assert.equal(getModuleBySlug("industry-insights").category, "content");
  assert.equal(getModuleBySlug("faq-ticket-center").category, "support");
  assert.equal(getModuleBySlug("roi-calculator").category, "tools");
  assert.equal(getModuleBySlug("missing-module"), null);

  assert.equal(demoHomeContent.hero.sloganMain, "客戶至上，服務為先");
  assert.equal(demoHomeContent.hero.sloganSub, "以科技力量擁抱世界");
  assert.equal(demoHomeContent.hero.lead.length, 2);
  assert.equal(demoHomeContent.hero.lead[0], "香港首家科創.香港保險展業全鏈條經紀業務管理系統(LifeBee)");
  assert.match(demoHomeContent.hero.lead.join(""), /香港首家專註保險經紀全鏈路/);
  assert.match(demoHomeContent.hero.lead.join(""), /合規、效率、數據/);
  assert.deepEqual(
    demoHomeContent.serviceFeatures.map((feature) => feature.title),
    ["資訊", "產品庫", "投保", "新單", "保單", "介紹費"]
  );
  assert.deepEqual(
    demoHomeContent.locales.map((locale) => locale.label),
    ["繁", "简", "EN"]
  );
  assert.equal(getDemoHomeContent("zh-Hant").hero.sloganMain, "客戶至上，服務為先");
  assert.equal(getDemoHomeContent("zh-Hans").hero.sloganMain, "客户至上，服务为先");
  assert.equal(getDemoHomeContent("en").hero.sloganMain, "Customer first, service first");
  assert.equal(getDemoHomeContent("missing").hero.sloganMain, demoHomeContent.hero.sloganMain);
  assert.equal(demoHomeContent.motion.gradientSpeed, "4.2s");
  assert.deepEqual(
    demoHomeContent.pillarThemes.map((theme) => theme.key),
    ["day", "gold", "night"]
  );
  assert.equal(demoHomeContent.metrics.length, 4);
  assert.deepEqual(
    serviceCapabilities.map((capability) => capability.title),
    ["展業效率提升", "經營管理提效", "流程協同與數據賦能", "長期服務支持"]
  );
  assert.equal(marketScaleContent.sections.length, 3);
  assert.equal(marketScaleContent.notes.length, 2);
  assert.equal(insightArticles.length, 2);
  assert.equal(getInsightBySlug("insurance-brokerage-digital-operations").category, "保險科技資訊");
  assert.equal(getInsightBySlug("missing-article"), null);
  assert.equal(contactContent.channels.length, 3);
  assert.deepEqual(
    homeAnchorNav.map((item) => item.href),
    ["/", "/#brand-functions", "/#market-scale", "/#content-service", "/#about-lifeBee", "/#contact-lifeBee"]
  );
  assert.equal(homeFeaturePreview.title, "快人一步 數碼保險化");
  assert.equal(homeFeaturePreview.cards.length, 4);
  assert.equal(homeFeaturePreview.phoneGroups.length, 6);
  const pagePath = path.join(process.cwd(), "app/page.js");
  const page = fs.readFileSync(pagePath, "utf8");
  assert.match(page, /品牌功能/);
  assert.match(page, /市場規模/);
  assert.match(page, /關於我們/);
  assert.doesNotMatch(page, /demoHomeContent\.hero\.primaryCta/);
  assert.match(page, /hero-action-button/);
  assert.deepEqual(
    homeShowcaseSections.map((item) => item.id),
    ["brand-functions", "market-scale", "content-service", "about-lifeBee", "contact-lifeBee"]
  );
  assert.equal(homeShowcaseSections.every((item) => item.points.length === 4), true);
  assert.equal(homeShowcaseSections.every((item) => item.details.length === 3), true);
  assert.equal(homeShowcaseSections.every((item) => item.motionLabel), true);
  assert.equal(productServicesSections[0].title, "產品功能服務升級");
  assert.equal(productServicesSections.length >= 6, true);
  assert.equal(productServicesSections.some((section) => section.title.includes("香港保險中介市場")), true);
  assert.equal(productServicesSections.some((section) => section.title.includes("客戶資源")), true);
  assert.equal(productServicesSections.some((section) => section.title.includes("每月產值")), true);

  const cssPath = path.join(process.cwd(), "app/globals.css");
  const css = fs.readFileSync(cssPath, "utf8");
  assert.match(css, /\.waterdrop-ripple/);
  assert.match(css, /@keyframes waterdrop-ripple/);
  assert.match(css, /\.hero-visual:hover \.waterdrop-ripple/);
  assert.match(css, /waterdrop-liquid-ripple/);
  assert.match(css, /blur\(8px\)/);
  assert.match(css, /\.waterdrop-shadow/);
  assert.match(css, /\.waterdrop-caustic/);
  assert.match(css, /inset -70px -90px 140px/);
  assert.match(css, /\.feature-laptop/);
  assert.match(css, /\.feature-phone/);
  assert.match(css, /\.feature-stat-row/);
  assert.match(css, /\.feature-chart-grid/);
  assert.match(css, /\.phone-grid/);
  assert.match(css, /feature-shine/);
  console.log("module catalog assertions passed");
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
