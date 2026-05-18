export type Cashflow = {
    amount: number;
    date: string;
  };
  
  function xnpv(
    rate: number,
    cashflows: Cashflow[]
  ) {
  
    const firstDate =
      new Date(cashflows[0].date);
  
    return cashflows.reduce(
      (sum, cashflow) => {
  
        const days =
          (
            new Date(cashflow.date)
              .getTime() -
            firstDate.getTime()
          ) /
          (1000 * 60 * 60 * 24);
  
        return (
          sum +
          cashflow.amount /
            Math.pow(
              1 + rate,
              days / 365
            )
        );
      },
      0
    );
  }
  
  export function calculateXIRR(
    cashflows: Cashflow[]
  ) {
  
    let rate = 0.1;
  
    for (
      let i = 0;
      i < 1000;
      i++
    ) {
  
      const value =
        xnpv(rate, cashflows);
  
      const derivative =
        (
          xnpv(
            rate + 0.0001,
            cashflows
          ) - value
        ) / 0.0001;
  
      const newRate =
        rate - value / derivative;
  
      if (
        Math.abs(newRate - rate) <
        0.000001
      ) {
        return newRate * 100;
      }
  
      rate = newRate;
    }
  
    return rate * 100;
  }