import assert from "node:assert/strict";
import { productServicesSections } from "./product-services-content.mjs";

assert.equal(productServicesSections[0].eyebrow, "服務功能");
assert.equal(productServicesSections[0].title, "產品功能服務升級");
assert.ok(productServicesSections.length >= 6);
assert.ok(productServicesSections.some((section) => section.title.includes("香港保險中介市場")));
assert.ok(productServicesSections.some((section) => section.title.includes("客戶資源")));
assert.ok(productServicesSections.some((section) => section.title.includes("每月產值")));

console.log("product services content assertions passed");
