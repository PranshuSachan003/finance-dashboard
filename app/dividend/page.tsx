"use client";

import { useState } from "react";

import {
  calculateDividendIncome,
} from "../../utils/calculations";

import {
  formatIndianCurrency,
} from "../../utils/formatCurrency";

import InvestmentPieChart
  from "../../components/InvestmentPieChart";

import CompoundingChart
  from "../../components/CompoundingChart";

export default function DividendCalculator() {

  const [
    portfolioValue,
    setPortfolioValue,
  ] = useState(10000000);

  const [
    dividendYield,
    setDividendYield,
  ] = useState(5);

  const [
    dividendGrowth,
    setDividendGrowth,
  ] = useState(5);

  const [
    inflation,
    setInflation,
  ] = useState(6);

  const [years, setYears] =
    useState(20);

  const dividendData =
    calculateDividendIncome(
      portfolioValue,
      dividendYield,
      dividendGrowth,
      years,
      inflation
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

      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 p-6 rounded-xl shadow">

        <h1 className="text-3xl font-bold mb-6">
          Dividend Income Calculator
        </h1>

        {/* PORTFOLIO */}
        <div className="mb-4">
          <label className="block mb-2">
            Portfolio Value
          </label>

          <input
            type="number"
            value={portfolioValue}
            onChange={(e) =>
              setPortfolioValue(
                Number(e.target.value)
              )
            }
            className="w-full border p-3 rounded"
          />
        </div>

        {/* YIELD */}
        <div className="mb-4">
          <label className="block mb-2">
            Dividend Yield (%)
          </label>

          <input
            type="number"
            value={dividendYield}
            onChange={(e) =>
              setDividendYield(
                Number(e.target.value)
              )
            }
            className="w-full border p-3 rounded"
          />
        </div>

        {/* GROWTH */}
        <div className="mb-4">
          <label className="block mb-2">
            Dividend Growth (%)
          </label>

          <input
            type="number"
            value={dividendGrowth}
            onChange={(e) =>
              setDividendGrowth(
                Number(e.target.value)
              )
            }
            className="w-full border p-3 rounded"
          />
        </div>

        {/* INFLATION */}
        <div className="mb-4">
          <label className="block mb-2">
            Inflation (%)
          </label>

          <input
            type="number"
            value={inflation}
            onChange={(e) =>
              setInflation(
                Number(e.target.value)
              )
            }
            className="w-full border p-3 rounded"
          />
        </div>

        {/* YEARS */}
        <div className="mb-6">
          <label className="block mb-2">
            Years
          </label>

          <input
            type="number"
            value={years}
            onChange={(e) =>
              setYears(
                Number(e.target.value)
              )
            }
            className="w-full border p-3 rounded"
          />
        </div>

        {/* RESULTS */}
        <div className="bg-green-50 dark:bg-green-950 p-6 rounded-xl space-y-4">

          <div>
            <h2 className="text-gray-600 dark:text-gray-300">
              Yearly Dividend
            </h2>

            <p className="text-3xl font-bold">
              ₹{
                formatIndianCurrency(
                  dividendData.yearlyDividend
                )
              }
            </p>
          </div>

          <div>
            <h2 className="text-gray-600 dark:text-gray-300">
              Monthly Passive Income
            </h2>

            <p className="text-3xl font-bold text-blue-700">
              ₹{
                formatIndianCurrency(
                  dividendData.monthlyDividend
                )
              }
            </p>
          </div>

          <div>
            <h2 className="text-gray-600 dark:text-gray-300">
              Cumulative Dividends
            </h2>

            <p className="text-2xl font-bold text-green-700">
              ₹{
                formatIndianCurrency(
                  dividendData.cumulativeDividends
                )
              }
            </p>
          </div>

          {/* PIE CHART */}
          <InvestmentPieChart
            invested={
              portfolioValue
            }
            wealth={
              dividendData.cumulativeDividends
            }
            investedLabel="Portfolio"
            wealthLabel="Dividends Earned"
          />

          {/* COMPOUNDING CHART */}
          <CompoundingChart
            data={
              dividendData.yearlyData
            }
          />

        </div>

        {/* INFO SECTION */}

        <div className="mt-14 card">

          <h2 className="text-4xl font-bold mb-8">
            Understanding Dividend Calculator
          </h2>

          <div className="space-y-10">

            <div>

              <h3 className="text-2xl font-semibold mb-3">
                What is Dividend Income?
              </h3>

              <p className="text-gray-700 dark:text-gray-300 leading-8">
                Dividend income is the cash distributed by
                companies to shareholders from profits.
                Investors use dividends to generate passive income.
              </p>

            </div>

            <div>

              <h3 className="text-2xl font-semibold mb-3">
                Dividend Yield
              </h3>

              <p className="text-gray-700 dark:text-gray-300 leading-8">
                Dividend yield measures annual dividend income
                relative to stock price or investment amount.
              </p>

            </div>

            <div>

              <h3 className="text-2xl font-semibold mb-3">
                Important Dividend Insights
              </h3>

              <ul className="list-disc ml-8 space-y-4 text-gray-700 dark:text-gray-300">

                <li>
                  High dividend yield does not always mean safer investment.
                </li>

                <li>
                  Dividend growth matters more than temporary high yields.
                </li>

                <li>
                  Strong businesses can increase dividends over time.
                </li>

                <li>
                  Dividend reinvestment can significantly accelerate compounding.
                </li>

              </ul>

            </div>

            <div className="bg-blue-500/10 rounded-2xl p-6">

              <h3 className="text-2xl font-semibold mb-3">
                Dividend Investing Strategies
              </h3>

              <ul className="list-disc ml-8 space-y-3 text-gray-700 dark:text-gray-300">

                <li>
                  Dividend Growth Investing
                </li>

                <li>
                  High Yield Investing
                </li>

                <li>
                  Dividend Reinvestment Strategy
                </li>

                <li>
                  Passive Income Portfolio
                </li>

              </ul>

            </div>

            <div className="bg-green-500/10 rounded-2xl p-6">

              <h3 className="text-2xl font-semibold mb-3">
                Important Tip
              </h3>

              <p className="text-gray-700 dark:text-gray-300 leading-8">
                Sustainable dividend-paying companies usually
                have strong cash flow, healthy balance sheets,
                and long-term business stability.
              </p>

            </div>

            <div className="bg-yellow-500/10 rounded-2xl p-6">

              <h3 className="text-2xl font-semibold mb-3">
                Disclaimer
              </h3>

              <p className="text-gray-700 dark:text-gray-300 leading-8">
                Dividend payouts are not guaranteed and may
                change based on company profitability,
                economic conditions, and management decisions.
              </p>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}