import assert from "node:assert/strict";
import { productServicesSections } from "./product-services-content.mjs";

assert.equal(productServicesSections[0].eyebrow, "服務功能");
assert.equal(productServicesSections[0].title, "產品功能服務升級");
assert.ok(productServicesSections.length >= 6);
assert.ok(productServicesSections.some((section) => section.eyebrow === "市場規模"));
assert.ok(productServicesSections.some((section) => section.title.includes("新加坡與亞太")));
assert.ok(productServicesSections.some((section) => section.eyebrow === "港險資訊一覽"));
assert.ok(productServicesSections.some((section) => section.eyebrow === "ROI計算器"));
assert.ok(productServicesSections.some((section) => section.eyebrow === "預約演示 / 聯絡我們"));
assert.ok(productServicesSections.some((section) => section.contacts?.some((item) => item.value === "5575 1661")));

console.log("product services content assertions passed");
