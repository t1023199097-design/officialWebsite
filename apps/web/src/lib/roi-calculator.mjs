export function calculateRoiProjection({
  monthlyPremium,
  years,
  expectedAnnualReturn,
  protectionMultiple
}) {
  const safeMonthlyPremium = clampNumber(monthlyPremium, 0, 1000000);
  const safeYears = clampNumber(years, 1, 50);
  const safeAnnualReturn = clampNumber(expectedAnnualReturn, -20, 30);
  const safeProtectionMultiple = clampNumber(protectionMultiple, 0, 100);
  const totalPremium = Math.round(safeMonthlyPremium * 12 * safeYears);
  const monthlyRate = safeAnnualReturn / 100 / 12;
  const months = safeYears * 12;
  const projectedValue = monthlyRate === 0
    ? totalPremium
    : Math.round(safeMonthlyPremium * (((1 + monthlyRate) ** months - 1) / monthlyRate));
  const projectedGain = Math.round(projectedValue - totalPremium);
  const roiPercent = totalPremium === 0 ? 0 : roundTo((projectedGain / totalPremium) * 100, 2);
  const protectionValue = Math.round(totalPremium * safeProtectionMultiple);

  return {
    totalPremium,
    projectedValue,
    projectedGain,
    roiPercent,
    protectionValue
  };
}

function clampNumber(value, min, max) {
  const numericValue = Number(value);
  if (!Number.isFinite(numericValue)) {
    return min;
  }
  return Math.min(Math.max(numericValue, min), max);
}

function roundTo(value, places) {
  const multiplier = 10 ** places;
  return Math.round(value * multiplier) / multiplier;
}
