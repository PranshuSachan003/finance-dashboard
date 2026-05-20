"use client";

import { useState } from "react";

import InvestmentPieChart
  from "../../components/InvestmentPieChart";

import CompoundingChart
  from "../../components/CompoundingChart";

import {
  calculateDividendIncome,
} from "../../utils/calculations";

import {
  formatIndianCurrency,
} from "../../utils/formatCurrency";

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

  // ==========================================
  // INFLATION ADJUSTED DIVIDENDS
  // ==========================================

  const inflationAdjustedDividends =
    dividendData.cumulativeDividends /
    Math.pow(
      1 + inflation / 100,
      years
    );

  const inflationAdjustedMonthlyIncome =
    dividendData.monthlyDividend /
    Math.pow(
      1 + inflation / 100,
      years
    );

  return (
    <main className="min-h-screen bg-[#020817] text-white p-6">

      <div className="max-w-7xl mx-auto">

        {/* PAGE TITLE */}
        <h1 className="text-5xl font-bold mb-10">
          Dividend Income Calculator
        </h1>

        {/* INPUT SECTION */}
        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 mb-10 shadow-xl">

          <h2 className="text-3xl font-bold mb-8">
            Dividend Investment Details
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* PORTFOLIO VALUE */}
            <div>

              <label className="block mb-3 text-slate-300 text-lg">
                Portfolio Value (₹)
              </label>

              <input
                type="number"
                value={portfolioValue}
                onChange={(e) =>
                  setPortfolioValue(
                    Number(e.target.value)
                  )
                }
                className="
                  w-full
                  bg-slate-800
                  border
                  border-slate-600
                  text-white
                  p-4
                  rounded-2xl
                  outline-none
                "
              />

            </div>

            {/* DIVIDEND YIELD */}
            <div>

              <label className="block mb-3 text-slate-300 text-lg">
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
                className="
                  w-full
                  bg-slate-800
                  border
                  border-slate-600
                  text-white
                  p-4
                  rounded-2xl
                  outline-none
                "
              />

            </div>

            {/* DIVIDEND GROWTH */}
            <div>

              <label className="block mb-3 text-slate-300 text-lg">
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
                className="
                  w-full
                  bg-slate-800
                  border
                  border-slate-600
                  text-white
                  p-4
                  rounded-2xl
                  outline-none
                "
              />

            </div>

            {/* INFLATION */}
            <div>

              <label className="block mb-3 text-slate-300 text-lg">
                Inflation Rate (%)
              </label>

              <input
                type="number"
                value={inflation}
                onChange={(e) =>
                  setInflation(
                    Number(e.target.value)
                  )
                }
                className="
                  w-full
                  bg-slate-800
                  border
                  border-slate-600
                  text-white
                  p-4
                  rounded-2xl
                  outline-none
                "
              />

            </div>

            {/* YEARS */}
            <div>

              <label className="block mb-3 text-slate-300 text-lg">
                Investment Duration (Years)
              </label>

              <input
                type="number"
                value={years}
                onChange={(e) =>
                  setYears(
                    Number(e.target.value)
                  )
                }
                className="
                  w-full
                  bg-slate-800
                  border
                  border-slate-600
                  text-white
                  p-4
                  rounded-2xl
                  outline-none
                "
              />

            </div>

          </div>

        </div>

        {/* RESULT SECTION */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">

          {/* YEARLY DIVIDEND */}
          <div className="bg-blue-100 text-slate-900 rounded-3xl p-8 shadow-xl">

            <h2 className="text-xl font-semibold mb-4">
              Yearly Dividend
            </h2>

            <p className="text-4xl font-bold break-words">
              ₹{
                formatIndianCurrency(
                  dividendData.yearlyDividend
                )
              }
            </p>

          </div>

          {/* MONTHLY PASSIVE INCOME */}
          <div className="bg-green-100 text-slate-900 rounded-3xl p-8 shadow-xl">

            <h2 className="text-xl font-semibold mb-4">
              Monthly Passive Income
            </h2>

            <p className="text-4xl font-bold text-green-700 break-words">
              ₹{
                formatIndianCurrency(
                  dividendData.monthlyDividend
                )
              }
            </p>

          </div>

          {/* CUMULATIVE DIVIDENDS */}
          <div className="bg-yellow-100 text-slate-900 rounded-3xl p-8 shadow-xl">

            <h2 className="text-xl font-semibold mb-4">
              Cumulative Dividends
            </h2>

            <p className="text-4xl font-bold break-words">
              ₹{
                formatIndianCurrency(
                  dividendData.cumulativeDividends
                )
              }
            </p>

          </div>

          {/* INFLATION ADJUSTED MONTHLY */}
          <div className="bg-purple-100 text-slate-900 rounded-3xl p-8 shadow-xl">

            <h2 className="text-xl font-semibold mb-4">
              Inflation Adjusted Monthly Income
            </h2>

            <p className="text-4xl font-bold text-purple-700 break-words">
              ₹{
                formatIndianCurrency(
                  inflationAdjustedMonthlyIncome
                )
              }
            </p>

            <p className="text-sm mt-3 text-slate-700">
              (Today's purchasing power)
            </p>

          </div>

          {/* INFLATION ADJUSTED DIVIDENDS */}
          <div className="bg-orange-100 text-slate-900 rounded-3xl p-8 shadow-xl">

            <h2 className="text-xl font-semibold mb-4">
              Inflation Adjusted Dividends
            </h2>

            <p className="text-4xl font-bold text-orange-700 break-words">
              ₹{
                formatIndianCurrency(
                  inflationAdjustedDividends
                )
              }
            </p>

            <p className="text-sm mt-3 text-slate-700">
              (Real purchasing power)
            </p>

          </div>

        </div>

        {/* PIE CHART */}
        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 mb-10 shadow-xl">

          <h2 className="text-3xl font-bold mb-8">
            Dividend Income Breakdown
          </h2>

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

        </div>

        {/* COMPOUNDING CURVE */}
        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 mb-10 shadow-xl">

          <h2 className="text-3xl font-bold mb-8">
            Dividend Growth Curve
          </h2>

          <CompoundingChart
            data={
              dividendData.yearlyData
            }
          />

        </div>

        {/* INFO SECTION */}
        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 shadow-xl">

          <h2 className="text-4xl font-bold mb-8">
            Understanding Dividend Calculator
          </h2>

          <div className="space-y-10">

            <div>

              <h3 className="text-2xl font-semibold mb-3">
                What is Dividend Income?
              </h3>

              <p className="text-slate-300 leading-8">
                Dividend income is the cash distributed by
                companies to shareholders from profits.
                Investors use dividends to generate passive income.
              </p>

            </div>

            <div>

              <h3 className="text-2xl font-semibold mb-3">
                Dividend Yield
              </h3>

              <p className="text-slate-300 leading-8">
                Dividend yield measures annual dividend income
                relative to stock price or investment amount.
              </p>

            </div>

            <div>

              <h3 className="text-2xl font-semibold mb-3">
                Important Dividend Insights
              </h3>

              <ul className="list-disc ml-8 space-y-4 text-slate-300">

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

              <ul className="list-disc ml-8 space-y-3 text-slate-300">

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

              <p className="text-slate-300 leading-8">
                Sustainable dividend-paying companies usually
                have strong cash flow, healthy balance sheets,
                and long-term business stability.
              </p>

            </div>

            <div className="bg-orange-500/10 rounded-2xl p-6">

              <h3 className="text-2xl font-semibold mb-3">
                Inflation Impact
              </h3>

              <p className="text-slate-300 leading-8">
                Inflation reduces the real purchasing power
                of future dividend income. Growing dividend
                businesses can help partially offset inflation
                over long investment periods.
              </p>

            </div>

            <div className="bg-yellow-500/10 rounded-2xl p-6">

              <h3 className="text-2xl font-semibold mb-3">
                Disclaimer
              </h3>

              <p className="text-slate-300 leading-8">
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