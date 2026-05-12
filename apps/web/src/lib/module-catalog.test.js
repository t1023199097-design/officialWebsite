const assert = require("node:assert/strict");

(async () => {
  const { moduleCatalog, moduleCategories, getModuleBySlug } = await import("./module-catalog.mjs");
  const {
    contactContent,
    demoHomeContent,
    getDemoHomeContent,
    getInsightBySlug,
    insightArticles,
    marketScaleContent,
    serviceCapabilities
  } = await import("./site-content.mjs");

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
  console.log("module catalog assertions passed");
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
