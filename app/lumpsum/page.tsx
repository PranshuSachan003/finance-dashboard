"use client";

import { useState } from "react";

import ReturnPhases
  from "../../components/ReturnPhases";

import InvestmentPieChart
  from "../../components/InvestmentPieChart";

import CompoundingCurveChart
  from "../../components/CompoundingChart";

import {
  calculateLumpsum,
  generateLumpsumYearlyData,
} from "../../utils/calculations";

import {
  formatIndianCurrency,
} from "../../utils/formatCurrency";

export default function LumpsumPage() {

  const [
    lumpsumAmount,
    setLumpsumAmount,
  ] = useState(500000);

  const [
    inflation,
    setInflation,
  ] = useState(6);

  const [
    lumpsumReturnPhases,
    setLumpsumReturnPhases,
  ] = useState([
    {
      years: 15,
      returnRate: 12,
    },
    {
      years: 10,
      returnRate: 10,
    },
  ]);

  const lumpsumData =
    calculateLumpsum(
      lumpsumAmount,
      lumpsumReturnPhases
    );

  const yearlyData =
    generateLumpsumYearlyData(
      lumpsumAmount,
      inflation,
      lumpsumReturnPhases
    );

  const totalYears =
    lumpsumReturnPhases.reduce(
      (sum, phase) =>
        sum + phase.years,
      0
    );

  return (
    <main className="
min-h-screen
bg-gray-100
dark:bg-black
p-8
text-black
dark:text-white
">

      <div className="max-w-5xl mx-auto bg-white dark:bg-gray-900 p-6 rounded-xl shadow">

        <h1 className="text-4xl font-bold text-black dark:text-white mb-8">
          Lumpsum Calculator
        </h1>

        {/* AMOUNT */}
        <div className="mb-5">

          <label className="block mb-2 font-medium">
            Investment Amount (₹)
          </label>

          <input
            type="number"
            value={lumpsumAmount}
            onChange={(e) =>
              setLumpsumAmount(
                Number(
                  e.target.value
                )
              )
            }
            className="
w-full
border
p-3
rounded-lg
bg-white
text-black
dark:bg-gray-800
dark:text-white
dark:border-gray-700
"
          />

        </div>

        {/* INFLATION */}
        <div className="mb-6">

          <label className="block mb-2 font-medium">
            Inflation Rate (%)
          </label>

          <input
            type="number"
            value={inflation}
            onChange={(e) =>
              setInflation(
                Number(
                  e.target.value
                )
              )
            }
            className="
w-full
border
p-3
rounded-lg
bg-white
text-black
dark:bg-gray-800
dark:text-white
dark:border-gray-700
"
          />

        </div>

        {/* RETURN PHASES */}
        <ReturnPhases
          returnPhases={
            lumpsumReturnPhases
          }
          setReturnPhases={
            setLumpsumReturnPhases
          }
        />

        {/* RESULTS */}
        <div className="bg-green-50 dark:bg-green-950 p-6 rounded-xl mt-8 space-y-5">

          <div>
            <h2 className="text-gray-600 dark:text-gray-300">
              Total Duration
            </h2>

            <p className="text-2xl font-bold">
              {totalYears} Years
            </p>
          </div>

          <div>
            <h2 className="text-gray-600 dark:text-gray-300">
              Total Invested
            </h2>

            <p className="text-3xl font-bold">
              ₹{
                formatIndianCurrency(
                  lumpsumAmount
                )
              }
            </p>
          </div>

          <div>
            <h2 className="text-gray-600 dark:text-gray-300">
              Wealth Gained
            </h2>

            <p className="text-3xl font-bold text-green-700">
              ₹{
                formatIndianCurrency(
                  lumpsumData.wealthGained
                )
              }
            </p>
          </div>

          <div>
            <h2 className="text-gray-600 dark:text-gray-300">
              Future Value
            </h2>

            <p className="text-4xl font-bold text-black dark:text-white">
              ₹{
                formatIndianCurrency(
                  lumpsumData.futureValue
                )
              }
            </p>
          </div>

        </div>

        {/* PIE CHART */}
        <div className="mt-10">

          <InvestmentPieChart
            invested={lumpsumAmount}
            wealth={
              lumpsumData.wealthGained
            }
          />

        </div>

        {/* COMPOUNDING CURVE */}
        <div className="mt-10">

          <CompoundingCurveChart
            data={yearlyData}
          />

        </div>

        {/* INFO SECTION */}

        <div className="mt-14 card">

          <h2 className="text-4xl font-bold mb-8">
            Understanding Lumpsum Calculator
          </h2>

          <div className="space-y-10">

            {/* WHAT IS LUMPSUM */}

            <div>

              <h3 className="text-2xl font-semibold mb-3">
                What is Lumpsum Investment?
              </h3>

              <p className="text-gray-700 dark:text-gray-300 leading-8">
                A lumpsum investment means investing a large
                amount of money at one time instead of investing
                gradually through SIPs. It is commonly used for
                bonuses, inheritance, business proceeds,
                or accumulated savings.
              </p>

            </div>

            {/* INVESTMENT AMOUNT */}

            <div>

              <h3 className="text-2xl font-semibold mb-3">
                Lumpsum Amount
              </h3>

              <p className="text-gray-700 dark:text-gray-300 leading-8">
                This is the one-time amount invested at the
                beginning of the investment period. Larger
                investment amounts combined with long durations
                can generate substantial compounding benefits.
              </p>

            </div>

            {/* RETURN PHASES */}

            <div>

              <h3 className="text-2xl font-semibold mb-3">
                Return Phases
              </h3>

              <p className="text-gray-700 dark:text-gray-300 leading-8">
                Markets do not generate fixed returns every
                year. Return phases allow you to simulate
                different market conditions over time such as
                bull markets, corrections, or slower growth periods.
              </p>

            </div>

            {/* INFLATION */}

            <div>

              <h3 className="text-2xl font-semibold mb-3">
                Inflation Adjustment
              </h3>

              <p className="text-gray-700 dark:text-gray-300 leading-8">
                Inflation reduces the real purchasing power of
                future wealth. Inflation-adjusted projections
                help estimate the actual value of your money
                in today’s terms.
              </p>

            </div>

            {/* IMPORTANT INSIGHTS */}

            <div>

              <h3 className="text-2xl font-semibold mb-4">
                Important Lumpsum Insights
              </h3>

              <ul className="list-disc ml-8 space-y-4 text-gray-700 dark:text-gray-300">

                <li>
                  Long investment duration significantly improves compounding.
                </li>

                <li>
                  Staying invested during market volatility is critical.
                </li>

                <li>
                  Equity investments generally outperform inflation over long periods.
                </li>

                <li>
                  Large early investments can generate exponential future growth.
                </li>

                <li>
                  Market timing is difficult — disciplined long-term investing matters more.
                </li>

              </ul>

            </div>

            {/* WHEN TO USE */}

            <div>

              <h3 className="text-2xl font-semibold mb-3">
                When is Lumpsum Investing Useful?
              </h3>

              <ul className="list-disc ml-8 space-y-4 text-gray-700 dark:text-gray-300">

                <li>
                  Annual bonuses
                </li>

                <li>
                  Inheritance money
                </li>

                <li>
                  Property sale proceeds
                </li>

                <li>
                  Business profits
                </li>

                <li>
                  Idle cash deployment
                </li>

              </ul>

            </div>

            {/* RECOMMENDED RETURNS */}

            <div>

              <h3 className="text-2xl font-semibold mb-3">
                Recommended Return Assumptions
              </h3>

              <div className="overflow-x-auto">

                <table className="w-full border-collapse">

                  <thead>

                    <tr className="bg-gray-200 dark:bg-gray-800">

                      <th className="border p-3 text-left">
                        Asset Type
                      </th>

                      <th className="border p-3 text-left">
                        Expected Return
                      </th>

                    </tr>

                  </thead>

                  <tbody>

                    <tr>
                      <td className="border p-3">
                        Equity Mutual Funds
                      </td>

                      <td className="border p-3">
                        10% - 12%
                      </td>
                    </tr>

                    <tr>
                      <td className="border p-3">
                        Hybrid Funds
                      </td>

                      <td className="border p-3">
                        8% - 10%
                      </td>
                    </tr>

                    <tr>
                      <td className="border p-3">
                        Debt Funds / Bonds
                      </td>

                      <td className="border p-3">
                        6% - 8%
                      </td>
                    </tr>

                    <tr>
                      <td className="border p-3">
                        Fixed Deposits
                      </td>

                      <td className="border p-3">
                        5% - 7%
                      </td>
                    </tr>

                  </tbody>

                </table>

              </div>

            </div>

            {/* POWER OF COMPOUNDING */}

            <div className="bg-green-500/10 rounded-2xl p-6">

              <h3 className="text-2xl font-semibold mb-3">
                Long-Term Compounding
              </h3>

              <p className="text-gray-700 dark:text-gray-300 leading-8">
                The biggest wealth creation in long-term investing
                usually happens in later years because returns
                themselves start generating additional returns.
              </p>

            </div>

            {/* DISCLAIMER */}

            <div className="bg-yellow-500/10 rounded-2xl p-6">

              <h3 className="text-2xl font-semibold mb-3">
                Disclaimer
              </h3>

              <p className="text-gray-700 dark:text-gray-300 leading-8">
                Investment returns are market-linked and not guaranteed.
                Actual performance may vary due to market conditions,
                taxes, inflation, asset allocation, and economic cycles.
              </p>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}