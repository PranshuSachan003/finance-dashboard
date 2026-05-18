export function formatIndianCurrency(
    value: number
  ) {
  
    return new Intl.NumberFormat(
      "en-IN",
      {
        maximumFractionDigits: 0,
      }
    ).format(value);
  }