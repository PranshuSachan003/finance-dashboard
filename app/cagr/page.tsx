"use client";

import { useState } from "react";

import {
  formatIndianCurrency,
} from "../../utils/formatCurrency";

import {
  TrendingUp,
  IndianRupee,
  Percent,
  BarChart3,
} from "lucide-react";

export default function CAGRCalculator() {

  const [
    buyPrice,
    setBuyPrice,
  ] = useState(100);

  const [
    sellPrice,
    setSellPrice,
  ] = useState(250);

  const [
    quantity,
    setQuantity,
  ] = useState(100);

  const [
    years,
    setYears,
  ] = useState(5);

  // CALCULATIONS
  const investedAmount =
    buyPrice * quantity;

  const currentValue =
    sellPrice * quantity;

  const gain =
    currentValue -
    investedAmount;

  const absoluteReturn =
    (
      gain /
      investedAmount
    ) * 100;

  const cagr =
    (
      Math.pow(
        currentValue /
        investedAmount,
        1 / years
      ) - 1
    ) * 100;

  const yearlyGrowth =
    Array.from(
      { length: years },
      (_, index) => {

        const year =
          index + 1;

        const value =
          investedAmount *
          Math.pow(
            1 + cagr / 100,
            year
          );

        return {
          year,
          value,
        };
      }
    );

  return (

    <main className="
min-h-screen
bg-[#020817]
text-white
p-6
">

      <div className="
max-w-6xl
mx-auto
">

        {/* HERO */}
        <div className="
mb-10
bg-gradient-to-br
from-green-900/40
via-slate-900
to-slate-950
border
border-slate-800
rounded-3xl
p-8
">

          <div className="
flex
flex-col
lg:flex-row
lg:items-center
lg:justify-between
gap-8
">

            <div>

              <div className="
inline-flex
items-center
gap-2
bg-green-500/10
text-green-400
px-4
py-2
rounded-full
mb-5
">

                <TrendingUp
                  className="w-5 h-5"
                />

                CAGR Analysis
              </div>

              <h1 className="
text-4xl
md:text-5xl
font-bold
leading-tight
mb-4
">

                Stock CAGR
                Calculator

              </h1>

              <p className="
text-slate-400
text-lg
leading-8
max-w-2xl
">

                Analyze long-term stock performance
                using CAGR, total returns,
                and compounding growth analysis.

              </p>

            </div>

            {/* QUICK RESULT */}
            <div className="
bg-slate-900/80
border
border-slate-700
rounded-3xl
p-6
min-w-[280px]
">

              <p className="
text-slate-400
mb-2
">

                CAGR

              </p>

              <h2 className="
text-5xl
font-bold
text-green-400
mb-5
">

                {
                  cagr.toFixed(2)
                }%

              </h2>

              <div className="
space-y-3
text-sm
">

                <div className="
flex
justify-between
">

                  <span className="text-slate-400">
                    Invested
                  </span>

                  <span>
                    ₹{
                      formatIndianCurrency(
                        investedAmount
                      )
                    }
                  </span>

                </div>

                <div className="
flex
justify-between
">

                  <span className="text-slate-400">
                    Current Value
                  </span>

                  <span>
                    ₹{
                      formatIndianCurrency(
                        currentValue
                      )
                    }
                  </span>

                </div>

                <div className="
flex
justify-between
">

                  <span className="text-slate-400">
                    Profit
                  </span>

                  <span className="text-green-400">
                    ₹{
                      formatIndianCurrency(
                        gain
                      )
                    }
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* INPUT + RESULT */}
        <div className="
grid
grid-cols-1
lg:grid-cols-5
gap-6
">

          {/* INPUTS */}
          <div className="
lg:col-span-2
bg-slate-900
border
border-slate-800
rounded-3xl
p-6
">

            <h2 className="
text-2xl
font-bold
mb-8
">

              Investment Details

            </h2>

            <div className="
space-y-6
">

              {/* BUY PRICE */}
              <div>

                <label className="
block
mb-2
text-slate-300
font-medium
">

                  Buy Price (₹)

                </label>

                <input
                  type="number"
                  value={buyPrice}
                  onChange={(e) =>
                    setBuyPrice(
                      Number(
                        e.target.value
                      )
                    )
                  }
                  className="
w-full
bg-slate-800
border
border-slate-700
rounded-2xl
p-4
outline-none
focus:border-green-500
"
                />

              </div>

              {/* SELL PRICE */}
              <div>

                <label className="
block
mb-2
text-slate-300
font-medium
">

                  Current / Sell Price (₹)

                </label>

                <input
                  type="number"
                  value={sellPrice}
                  onChange={(e) =>
                    setSellPrice(
                      Number(
                        e.target.value
                      )
                    )
                  }
                  className="
w-full
bg-slate-800
border
border-slate-700
rounded-2xl
p-4
outline-none
focus:border-green-500
"
                />

              </div>

              {/* QUANTITY */}
              <div>

                <label className="
block
mb-2
text-slate-300
font-medium
">

                  Quantity

                </label>

                <input
                  type="number"
                  value={quantity}
                  onChange={(e) =>
                    setQuantity(
                      Number(
                        e.target.value
                      )
                    )
                  }
                  className="
w-full
bg-slate-800
border
border-slate-700
rounded-2xl
p-4
outline-none
focus:border-green-500
"
                />

              </div>

              {/* YEARS */}
              <div>

                <label className="
block
mb-2
text-slate-300
font-medium
">

                  Holding Period (Years)

                </label>

                <input
                  type="number"
                  value={years}
                  onChange={(e) =>
                    setYears(
                      Number(
                        e.target.value
                      )
                    )
                  }
                  className="
w-full
bg-slate-800
border
border-slate-700
rounded-2xl
p-4
outline-none
focus:border-green-500
"
                />

              </div>

            </div>

          </div>

          {/* RESULTS */}
          <div className="
lg:col-span-3
space-y-6
">

            {/* RESULT CARDS */}
            <div className="
grid
grid-cols-1
md:grid-cols-2
gap-6
">

              {/* INVESTED */}
              <div className="
bg-slate-900
border
border-slate-800
rounded-3xl
p-6
">

                <div className="
flex
items-center
justify-between
mb-5
">

                  <div>

                    <p className="
text-slate-400
mb-2
">

                      Invested Amount

                    </p>

                    <h2 className="
text-3xl
font-bold
">

                      ₹{
                        formatIndianCurrency(
                          investedAmount
                        )
                      }

                    </h2>

                  </div>

                  <div className="
bg-blue-500/10
p-4
rounded-2xl
">

                    <IndianRupee
                      className="
w-7
h-7
text-blue-400
"
                    />

                  </div>

                </div>

              </div>

              {/* CURRENT VALUE */}
              <div className="
bg-slate-900
border
border-slate-800
rounded-3xl
p-6
">

                <div className="
flex
items-center
justify-between
mb-5
">

                  <div>

                    <p className="
text-slate-400
mb-2
">

                      Current Value

                    </p>

                    <h2 className="
text-3xl
font-bold
text-green-400
">

                      ₹{
                        formatIndianCurrency(
                          currentValue
                        )
                      }

                    </h2>

                  </div>

                  <div className="
bg-green-500/10
p-4
rounded-2xl
">

                    <TrendingUp
                      className="
w-7
h-7
text-green-400
"
                    />

                  </div>

                </div>

              </div>

              {/* ABSOLUTE RETURN */}
              <div className="
bg-slate-900
border
border-slate-800
rounded-3xl
p-6
">

                <div className="
flex
items-center
justify-between
mb-5
">

                  <div>

                    <p className="
text-slate-400
mb-2
">

                      Total Return

                    </p>

                    <h2 className="
text-3xl
font-bold
text-blue-400
">

                      {
                        absoluteReturn.toFixed(2)
                      }%

                    </h2>

                  </div>

                  <div className="
bg-purple-500/10
p-4
rounded-2xl
">

                    <Percent
                      className="
w-7
h-7
text-purple-400
"
                    />

                  </div>

                </div>

              </div>

              {/* CAGR */}
              <div className="
bg-gradient-to-br
from-green-900/30
to-slate-900
border
border-green-500/20
rounded-3xl
p-6
">

                <div className="
flex
items-center
justify-between
mb-5
">

                  <div>

                    <p className="
text-slate-400
mb-2
">

                      CAGR

                    </p>

                    <h2 className="
text-5xl
font-bold
text-green-400
">

                      {
                        cagr.toFixed(2)
                      }%

                    </h2>

                  </div>

                  <div className="
bg-green-500/10
p-4
rounded-2xl
">

                    <BarChart3
                      className="
w-8
h-8
text-green-400
"
                    />

                  </div>

                </div>

              </div>

            </div>

            {/* GROWTH TABLE */}
            <div className="
bg-slate-900
border
border-slate-800
rounded-3xl
p-6
overflow-x-auto
">

              <h2 className="
text-2xl
font-bold
mb-6
">

                Yearly Compounding Growth

              </h2>

              <table className="
w-full
border-collapse
">

                <thead>

                  <tr className="
bg-slate-800
">

                    <th className="
text-left
p-4
rounded-l-2xl
">

                      Year

                    </th>

                    <th className="
text-left
p-4
">

                      Portfolio Value

                    </th>

                    <th className="
text-left
p-4
rounded-r-2xl
">

                      Growth

                    </th>

                  </tr>

                </thead>

                <tbody>

                  {
                    yearlyGrowth.map(
                      (
                        item,
                        index
                      ) => {

                        const growth =
                          item.value -
                          investedAmount;

                        return (

                          <tr
                            key={index}
                            className="
border-b
border-slate-800
"
                          >

                            <td className="p-4">
                              Year {item.year}
                            </td>

                            <td className="p-4">
                              ₹{
                                formatIndianCurrency(
                                  item.value
                                )
                              }
                            </td>

                            <td className="
p-4
text-green-400
font-semibold
">

                              ₹{
                                formatIndianCurrency(
                                  growth
                                )
                              }

                            </td>

                          </tr>
                        );
                      }
                    )
                  }

                </tbody>

              </table>

            </div>

          </div>

        </div>

        {/* INFO SECTION */}
        <div className="
mt-14
bg-slate-900
border
border-slate-800
rounded-3xl
p-8
">

          <h2 className="
text-4xl
font-bold
mb-10
">

            Understanding CAGR

          </h2>

          <div className="
space-y-10
">

            <div>

              <h3 className="
text-2xl
font-semibold
mb-4
">

                What is CAGR?

              </h3>

              <p className="
text-slate-300
leading-8
text-lg
">

                CAGR (Compound Annual Growth Rate)
                measures the average annual growth
                rate of an investment assuming
                profits are reinvested every year.

              </p>

            </div>

            <div className="
bg-blue-500/10
border
border-blue-500/20
rounded-3xl
p-6
">

              <h3 className="
text-2xl
font-semibold
mb-4
">

                CAGR Formula

              </h3>

              <div className="
text-xl
font-medium
text-blue-300
leading-10
">

                CAGR =
                (Final Value / Initial Value)
                ^ (1 / Years) − 1

              </div>

            </div>

            <div>

              <h3 className="
text-2xl
font-semibold
mb-4
">

                Why CAGR Matters?

              </h3>

              <ul className="
list-disc
ml-8
space-y-4
text-slate-300
leading-8
">

                <li>
                  Helps compare investment performance fairly
                </li>

                <li>
                  Removes short-term volatility noise
                </li>

                <li>
                  Shows long-term compounding efficiency
                </li>

                <li>
                  Useful for stocks, mutual funds, and portfolios
                </li>

              </ul>

            </div>

            <div className="
bg-green-500/10
border
border-green-500/20
rounded-3xl
p-6
">

              <h3 className="
text-2xl
font-semibold
mb-4
">

                Important Insight

              </h3>

              <p className="
text-slate-300
leading-8
text-lg
">

                Even a small difference in CAGR can create
                massive wealth differences over long periods
                because compounding accelerates exponentially.

              </p>

            </div>

            <div className="
bg-yellow-500/10
border
border-yellow-500/20
rounded-3xl
p-6
">

              <h3 className="
text-2xl
font-semibold
mb-4
">

                Disclaimer

              </h3>

              <p className="
text-slate-300
leading-8
text-lg
">

                CAGR is a historical performance metric and
                does not guarantee future returns. Markets
                are volatile and actual investment outcomes
                may differ significantly.

              </p>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}