export function calculateRetirementStress(
    corpus: number,
    monthlyExpense: number,
    healthcareExpense: number,
    returnRate: number,
    inflation: number,
    healthcareInflation: number,
    years: number,
    cashBucketYears: number,
    debtBucketYears: number
  ) {
  
    let yearlyExpense =
      monthlyExpense * 12;
  
    let yearlyHealthcare =
      healthcareExpense * 12;
  
    // Initial bucket allocation
    let cashBucket =
      yearlyExpense *
      cashBucketYears;
  
    let debtBucket =
      yearlyExpense *
      debtBucketYears;
  
    let equityBucket =
      corpus -
      cashBucket -
      debtBucket;
  
    const yearlyData = [];
  
    for (
      let year = 1;
      year <= years;
      year++
    ) {
  
      const totalExpense =
        yearlyExpense +
        yearlyHealthcare;
  
      // Withdraw from cash bucket
      cashBucket -= totalExpense;
  
      // If cash bucket exhausted
      if (cashBucket < 0) {
  
        debtBucket += cashBucket;
        cashBucket = 0;
      }
  
      // If debt bucket exhausted
      if (debtBucket < 0) {
  
        equityBucket += debtBucket;
        debtBucket = 0;
      }
  
      // Portfolio exhausted
      if (equityBucket <= 0) {
  
        yearlyData.push({
          year,
          cashBucket,
          debtBucket,
          equityBucket: 0,
          totalCorpus: 0,
        });
  
        return {
          survived: false,
          exhaustedYear: year,
          remainingCorpus: 0,
          yearlyData,
        };
      }
  
      // Equity grows
      equityBucket =
        equityBucket *
        (1 + returnRate / 100);
  
      const totalCorpus =
        cashBucket +
        debtBucket +
        equityBucket;
  
      yearlyData.push({
        year,
        cashBucket,
        debtBucket,
        equityBucket,
        totalCorpus,
        expense: totalExpense,
      });
  
      // Inflate expenses
      yearlyExpense =
        yearlyExpense *
        (1 + inflation / 100);
  
      yearlyHealthcare =
        yearlyHealthcare *
        (
          1 +
          healthcareInflation / 100
        );
    }
  
    return {
      survived: true,
      exhaustedYear: null,
      remainingCorpus:
        cashBucket +
        debtBucket +
        equityBucket,
      yearlyData,
    };
  }