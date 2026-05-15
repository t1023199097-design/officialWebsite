"use client";

import { useMemo, useState } from "react";
import { calculateRoiProjection } from "@/lib/roi-calculator.mjs";

const currencyFormatter = new Intl.NumberFormat("zh-HK", {
  currency: "HKD",
  maximumFractionDigits: 0,
  style: "currency"
});

const roiCopy = {
  "zh-Hant": {
    ariaLabel: "ROI 計算器輸入",
    monthlyPremium: "每月保費",
    years: "持有年期",
    expectedAnnualReturn: "預期年化回報",
    protectionMultiple: "保障倍數",
    yearSuffix: "年",
    projection: "ROI Projection",
    roiLabel: "預估 ROI 回報率",
    totalPremium: "總投入",
    projectedValue: "預估價值",
    projectedGain: "預估收益",
    protectionValue: "保障額度"
  },
  "zh-Hans": {
    ariaLabel: "ROI 计算器输入",
    monthlyPremium: "每月保费",
    years: "持有年期",
    expectedAnnualReturn: "预期年化回报",
    protectionMultiple: "保障倍数",
    yearSuffix: "年",
    projection: "ROI Projection",
    roiLabel: "预估 ROI 回报率",
    totalPremium: "总投入",
    projectedValue: "预估价值",
    projectedGain: "预估收益",
    protectionValue: "保障额度"
  },
  en: {
    ariaLabel: "ROI calculator inputs",
    monthlyPremium: "Monthly premium",
    years: "Holding period",
    expectedAnnualReturn: "Expected annual return",
    protectionMultiple: "Protection multiple",
    yearSuffix: " yrs",
    projection: "ROI Projection",
    roiLabel: "Estimated ROI",
    totalPremium: "Total input",
    projectedValue: "Projected value",
    projectedGain: "Projected gain",
    protectionValue: "Protection value"
  }
};

export function RoiCalculator({ locale = "zh-Hant" }) {
  const copy = roiCopy[locale] || roiCopy["zh-Hant"];
  const [monthlyPremium, setMonthlyPremium] = useState(5000);
  const [years, setYears] = useState(10);
  const [expectedAnnualReturn, setExpectedAnnualReturn] = useState(6);
  const [protectionMultiple, setProtectionMultiple] = useState(8);

  const projection = useMemo(
    () => calculateRoiProjection({ monthlyPremium, years, expectedAnnualReturn, protectionMultiple }),
    [monthlyPremium, years, expectedAnnualReturn, protectionMultiple]
  );

  return (
    <div className="roi-calculator">
      <div className="roi-controls" aria-label={copy.ariaLabel}>
        <RoiSlider
          label={copy.monthlyPremium}
          max={50000}
          min={1000}
          prefix="HK$"
          step={500}
          value={monthlyPremium}
          onChange={setMonthlyPremium}
        />
        <RoiSlider
          label={copy.years}
          max={30}
          min={1}
          suffix={copy.yearSuffix}
          step={1}
          value={years}
          onChange={setYears}
        />
        <RoiSlider
          label={copy.expectedAnnualReturn}
          max={12}
          min={0}
          suffix="%"
          step={0.5}
          value={expectedAnnualReturn}
          onChange={setExpectedAnnualReturn}
        />
        <RoiSlider
          label={copy.protectionMultiple}
          max={20}
          min={1}
          suffix="x"
          step={1}
          value={protectionMultiple}
          onChange={setProtectionMultiple}
        />
      </div>

      <div className="roi-result-card" aria-live="polite">
        <span>{copy.projection}</span>
        <strong>{projection.roiPercent}%</strong>
        <p>{copy.roiLabel}</p>
        <div className="roi-result-grid">
          <ResultItem label={copy.totalPremium} value={currencyFormatter.format(projection.totalPremium)} />
          <ResultItem label={copy.projectedValue} value={currencyFormatter.format(projection.projectedValue)} />
          <ResultItem label={copy.projectedGain} value={currencyFormatter.format(projection.projectedGain)} />
          <ResultItem label={copy.protectionValue} value={currencyFormatter.format(projection.protectionValue)} />
        </div>
      </div>
    </div>
  );
}

function RoiSlider({ label, max, min, onChange, prefix = "", step, suffix = "", value }) {
  return (
    <label className="roi-slider">
      <span>
        {label}
        <strong>{prefix}{value.toLocaleString("zh-HK")}{suffix}</strong>
      </span>
      <input
        max={max}
        min={min}
        step={step}
        type="range"
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
      />
    </label>
  );
}

function ResultItem({ label, value }) {
  return (
    <div>
      <small>{label}</small>
      <b>{value}</b>
    </div>
  );
}
