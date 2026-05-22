export function calculateSip(
    monthlyInvestment: number,
    stepUp: number,
    returnPhases: {
      years: number;
      returnRate: number;
    }[]
  ) {
  
    let totalValue = 0;
    let totalInvested = 0;
  
    let currentSip =
      monthlyInvestment;
  
    for (
      let phaseIndex = 0;
      phaseIndex < returnPhases.length;
      phaseIndex++
    ) {
  
      const phase =
        returnPhases[phaseIndex];
  
      const monthlyRate =
        phase.returnRate / 12 / 100;
  
      for (
        let year = 0;
        year < phase.years;
        year++
      ) {
  
        for (
          let month = 0;
          month < 12;
          month++
        ) {
  
          totalValue =
            (totalValue + currentSip) *
            (1 + monthlyRate);
  
          totalInvested += currentSip;
        }
  
        currentSip =
          currentSip *
          (1 + stepUp / 100);
      }
    }
  
    return {
      totalValue,
      totalInvested,
      wealthGained:
        totalValue - totalInvested,
    };
  }
  
  export function calculateLumpsum(
    lumpsumAmount: number,
    returnPhases: {
      years: number;
      returnRate: number;
    }[]
  ) {
  
    let futureValue =
      lumpsumAmount;
  
    for (
      let i = 0;
      i < returnPhases.length;
      i++
    ) {
  
      const phase =
        returnPhases[i];
  
      futureValue =
        futureValue *
        Math.pow(
          1 + phase.returnRate / 100,
          phase.years
        );
    }
  
    return {
      futureValue,
      wealthGained:
        futureValue - lumpsumAmount,
    };
  }

  export function generateSipYearlyData(
    monthlyInvestment: number,
    stepUp: number,
    inflation: number,
    returnPhases: {
      years: number;
      returnRate: number;
    }[]
  ) {
  
    const yearlyData = [];
  
    let totalValue = 0;
  
    let currentSip =
      monthlyInvestment;
  
    let currentYear = 1;
  
    for (
      let phaseIndex = 0;
      phaseIndex < returnPhases.length;
      phaseIndex++
    ) {
  
      const phase =
        returnPhases[phaseIndex];
  
      const monthlyRate =
        phase.returnRate / 12 / 100;
  
      for (
        let year = 0;
        year < phase.years;
        year++
      ) {
  
        for (
          let month = 0;
          month < 12;
          month++
        ) {
  
          totalValue =
            (totalValue + currentSip) *
            (1 + monthlyRate);
        }
  
        // INFLATION ADJUSTED VALUE
        const inflationAdjustedValue =
          totalValue /
          Math.pow(
            1 + inflation / 100,
            currentYear
          );
  
        yearlyData.push({
          year: currentYear,
  
          nominalValue:
            Math.round(totalValue),
  
          realValue:
            Math.round(
              inflationAdjustedValue
            ),
        });
  
        currentSip =
          currentSip *
          (1 + stepUp / 100);
  
        currentYear++;
      }
    }
  
    return yearlyData;
  }

  export function generateLumpsumYearlyData(
    lumpsumAmount: number,
    inflation: number,
    returnPhases: {
      years: number;
      returnRate: number;
    }[]
  ) {
  
    const yearlyData = [];
  
    let totalValue =
      lumpsumAmount;
  
    let currentYear = 1;
  
    for (
      let phaseIndex = 0;
      phaseIndex < returnPhases.length;
      phaseIndex++
    ) {
  
      const phase =
        returnPhases[phaseIndex];
  
      for (
        let year = 0;
        year < phase.years;
        year++
      ) {
  
        totalValue =
          totalValue *
          (1 + phase.returnRate / 100);
  
        // INFLATION ADJUSTED
        const inflationAdjustedValue =
          totalValue /
          Math.pow(
            1 + inflation / 100,
            currentYear
          );
  
        yearlyData.push({
          year: currentYear,
  
          nominalValue:
            Math.round(totalValue),
  
          realValue:
            Math.round(
              inflationAdjustedValue
            ),
        });
  
        currentYear++;
      }
    }
  
    return yearlyData;
  }

  export function generateFireYearlyData(
    currentAge: number,
    retirementAge: number,
    existingCorpus: number,
    monthlySip: number,
    expectedReturn: number,
    inflation: number
  ) {
  
    const yearlyData = [];
  
    let totalValue =
      existingCorpus;
  
    let currentYear = 1;
  
    const years =
      retirementAge - currentAge;
  
    const monthlyRate =
      expectedReturn / 12 / 100;
  
    for (
      let year = 1;
      year <= years;
      year++
    ) {
  
      for (
        let month = 0;
        month < 12;
        month++
      ) {
  
        totalValue =
          (totalValue + monthlySip) *
          (1 + monthlyRate);
      }
  
      // INFLATION ADJUSTED
      const inflationAdjustedValue =
        totalValue /
        Math.pow(
          1 + inflation / 100,
          year
        );
  
      yearlyData.push({
        age:
          currentAge + year,
  
        nominalValue:
          Math.round(totalValue),
  
        realValue:
          Math.round(
            inflationAdjustedValue
          ),
      });
  
      currentYear++;
    }
  
    return yearlyData;
  }

  export function calculateSwp(
    initialCorpus: number,
    monthlyWithdrawal: number,
    expectedReturn: number,
    inflation: number,
    years: number
  ) {
  
    const yearlyData = [];
  
    let corpus =
      initialCorpus;
  
    let currentWithdrawal =
      monthlyWithdrawal;
  
    const monthlyRate =
      expectedReturn / 12 / 100;
  
    for (
      let year = 1;
      year <= years;
      year++
    ) {
  
      for (
        let month = 0;
        month < 12;
        month++
      ) {
  
        // GROWTH
        corpus =
          corpus *
          (1 + monthlyRate);
  
        // WITHDRAWAL
        corpus =
          corpus -
          currentWithdrawal;
  
        // CORPUS DEPLETED
        if (corpus <= 0) {
  
          yearlyData.push({
            year,
            corpus: 0,
            withdrawal:
              Math.round(
                currentWithdrawal * 12
              ),
          });
  
          return {
            yearlyData,
            survivedYears:
              year,
            corpusLeft: 0,
            depleted: true,
          };
        }
      }
  
      yearlyData.push({
        year,
        corpus:
          Math.round(corpus),
  
        withdrawal:
          Math.round(
            currentWithdrawal * 12
          ),
      });
  
      // INCREASE WITHDRAWAL
      currentWithdrawal =
        currentWithdrawal *
        (1 + inflation / 100);
    }
  
    return {
      yearlyData,
      survivedYears:
        years,
      corpusLeft:
        Math.round(corpus),
      depleted: false,
    };
  }

  export function calculateGoalSip(
    targetAmount: number,
    years: number,
    expectedReturn: number,
    inflation: number
  ) {
  
    // INFLATION ADJUSTED TARGET
    const futureTarget =
      targetAmount *
      Math.pow(
        1 + inflation / 100,
        years
      );
  
    const monthlyRate =
      expectedReturn / 12 / 100;
  
    const totalMonths =
      years * 12;
  
    // SIP FORMULA
    const sip =
      futureTarget /
      (
        (
          Math.pow(
            1 + monthlyRate,
            totalMonths
          ) - 1
        ) / monthlyRate
      ) /
      (1 + monthlyRate);
  
    const totalInvested =
      sip * totalMonths;
  
    const wealthGained =
      futureTarget -
      totalInvested;
  
    // YEARLY DATA
    const yearlyData = [];
  
    let totalValue = 0;
  
    for (
      let year = 1;
      year <= years;
      year++
    ) {
  
      for (
        let month = 0;
        month < 12;
        month++
      ) {
  
        totalValue =
          (totalValue + sip) *
          (1 + monthlyRate);
      }
  
      const realValue =
        totalValue /
        Math.pow(
          1 + inflation / 100,
          year
        );
  
      yearlyData.push({
        year,
  
        nominalValue:
          Math.round(totalValue),
  
        realValue:
          Math.round(realValue),
      });
    }
  
    return {
      requiredSip:
        Math.round(sip),
  
      futureTarget:
        Math.round(
          futureTarget
        ),
  
      totalInvested:
        Math.round(
          totalInvested
        ),
  
      wealthGained:
        Math.round(
          wealthGained
        ),
  
      yearlyData,
    };
  }

  export function calculateDividendIncome(
    portfolioValue: number,
    dividendYield: number,
    dividendGrowth: number,
    years: number,
    inflation: number
  ) {
  
    const yearlyData = [];
  
    let currentDividendYield =
      dividendYield;
  
    let cumulativeDividends = 0;
  
    for (
      let year = 1;
      year <= years;
      year++
    ) {
  
      const yearlyDividend =
        portfolioValue *
        (currentDividendYield / 100);
  
      cumulativeDividends +=
        yearlyDividend;
  
      const inflationAdjustedDividend =
        yearlyDividend /
        Math.pow(
          1 + inflation / 100,
          year
        );
  
      yearlyData.push({
        year,
  
        nominalValue:
          Math.round(
            yearlyDividend
          ),
  
        realValue:
          Math.round(
            inflationAdjustedDividend
          ),
      });
  
      currentDividendYield =
        currentDividendYield *
        (
          1 +
          dividendGrowth / 100
        );
    }
  
    return {
      yearlyDividend:
        Math.round(
          portfolioValue *
          (dividendYield / 100)
        ),
  
      monthlyDividend:
        Math.round(
          (
            portfolioValue *
            (dividendYield / 100)
          ) / 12
        ),
  
      cumulativeDividends:
        Math.round(
          cumulativeDividends
        ),
  
      yearlyData,
    };
  }

  export function calculateXIRR(
    cashflows: {
      amount: number;
      date: string;
    }[],
    currentValue: number
  ) {
  
    if (
      cashflows.length === 0
    ) {
      return 0;
    }
  
    const transactions = [
      ...cashflows.map(
        (cf) => ({
          amount: -Math.abs(
            cf.amount
          ),
          date: new Date(
            cf.date
          ),
        })
      ),
  
      {
        amount: currentValue,
        date: new Date(),
      },
    ];
  
    const xnpv = (
      rate: number
    ) => {
  
      const firstDate =
        transactions[0].date;
  
      return transactions.reduce(
        (sum, tx) => {
  
          const days =
            (
              tx.date.getTime() -
              firstDate.getTime()
            ) /
            (
              1000 *
              60 *
              60 *
              24
            );
  
          return (
            sum +
            tx.amount /
              Math.pow(
                1 + rate,
                days / 365
              )
          );
        },
        0
      );
    };
  
    // Newton-Raphson
    let rate = 0.1;
  
    for (
      let i = 0;
      i < 100;
      i++
    ) {
  
      const value =
        xnpv(rate);
  
      const derivative =
        (
          xnpv(
            rate + 0.0001
          ) - value
        ) / 0.0001;
  
      const newRate =
        rate -
        value /
          derivative;
  
      if (
        Math.abs(
          newRate - rate
        ) < 0.000001
      ) {
        rate = newRate;
        break;
      }
  
      rate = newRate;
    }
  
    return (
      rate * 100
    ).toFixed(2);
  }

  export function calculateRebalancing(
    assets: {
      name: string;
      currentValue: number;
      targetPercent: number;
    }[]
  ) {
  
    const totalPortfolio =
      assets.reduce(
        (sum, asset) =>
          sum +
          asset.currentValue,
        0
      );
  
    return assets.map(
      (asset) => {
  
        const currentPercent =
          (
            asset.currentValue /
            totalPortfolio
          ) * 100;
  
        const idealValue =
          (
            asset.targetPercent /
            100
          ) * totalPortfolio;
  
        const difference =
          idealValue -
          asset.currentValue;
  
        return {
          ...asset,
  
          currentPercent:
            currentPercent.toFixed(
              2
            ),
  
          idealValue:
            Math.round(
              idealValue
            ),
  
          difference:
            Math.round(
              difference
            ),
        };
      }
    );
  }

  export function runMonteCarloSimulation(
    monthlyInvestment: number,
    years: number,
    expectedReturn: number,
    volatility: number,
    simulations: number
  ) {
  
    const yearlyInvestment =
      monthlyInvestment * 12;
  
    const allSimulations = [];
  
    for (
      let sim = 0;
      sim < simulations;
      sim++
    ) {
  
      let value = 0;
  
      const yearlyData = [];
  
      for (
        let year = 1;
        year <= years;
        year++
      ) {
  
        const randomReturn =
          expectedReturn +
          (
            (Math.random() - 0.5) *
            volatility
          );
  
        value =
          (
            value +
            yearlyInvestment
          ) *
          (
            1 +
            randomReturn / 100
          );
  
        yearlyData.push({
          year,
          value,
        });
      }
  
      allSimulations.push(yearlyData);
    }
  
    // FINAL VALUES
    const finalValues =
      allSimulations.map(
        (
          sim
        ) =>
          sim[
            sim.length - 1
          ].value
      );
  
    finalValues.sort(
      (a, b) => a - b
    );
  
    const worstCase =
      finalValues[
        Math.floor(
          simulations * 0.1
        )
      ];
  
    const medianCase =
      finalValues[
        Math.floor(
          simulations * 0.5
        )
      ];
  
    const bestCase =
      finalValues[
        Math.floor(
          simulations * 0.9
        )
      ];
  
    // BUILD CHART DATA
    const chartData = [];
  
    for (
      let year = 0;
      year < years;
      year++
    ) {
  
      const yearlyValues =
        allSimulations.map(
          (
            sim
          ) =>
            sim[year].value
        );
  
      yearlyValues.sort(
        (a, b) => a - b
      );
  
      chartData.push({
        year: year + 1,
  
        worst:
          yearlyValues[
            Math.floor(
              simulations * 0.1
            )
          ],
  
        median:
          yearlyValues[
            Math.floor(
              simulations * 0.5
            )
          ],
  
        best:
          yearlyValues[
            Math.floor(
              simulations * 0.9
            )
          ],
      });
    }
  
    return {
  
      bestCase: {
        finalValue: bestCase,
      },
  
      medianCase: {
        finalValue: medianCase,
      },
  
      worstCase: {
        finalValue: worstCase,
      },
  
      chartData,
    };
  }