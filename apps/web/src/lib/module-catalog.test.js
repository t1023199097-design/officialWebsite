const assert = require("node:assert/strict");

(async () => {
  const { moduleCatalog, moduleCategories, getModuleBySlug } = await import("./module-catalog.mjs");

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
  console.log("module catalog assertions passed");
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
