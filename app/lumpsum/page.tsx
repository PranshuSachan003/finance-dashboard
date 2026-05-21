"use client";

import { useState } from "react";

import ReturnPhases from "../../components/ReturnPhases";
import InvestmentPieChart from "../../components/InvestmentPieChart";
import CompoundingCurveChart from "../../components/CompoundingChart";

import {
  calculateLumpsum,
  generateLumpsumYearlyData,
} from "../../utils/calculations";

import {
  formatIndianCurrency,
} from "../../utils/formatCurrency";

export default function LumpsumPage() {

  const [lumpsumAmount, setLumpsumAmount] =
    useState(500000);

  const [inflation, setInflation] =
    useState(6);

  const [
    lumpsumReturnPhases,
    setLumpsumReturnPhases,
  ] = useState([
    { years: 15, returnRate: 12 },
    { years: 10, returnRate: 10 },
  ]);

  // TOTAL YEARS
  const totalYears =
    lumpsumReturnPhases.reduce(
      (sum, phase) =>
        sum + phase.years,
      0
    );

  // LUMPSUM DATA
  const lumpsumData =
    calculateLumpsum(
      lumpsumAmount,
      lumpsumReturnPhases
    );

  // YEARLY DATA
  const yearlyData =
    generateLumpsumYearlyData(
      lumpsumAmount,
      inflation,
      lumpsumReturnPhases
    );

  // INFLATION ADJUSTED VALUE
  const inflationAdjustedValue =
    lumpsumData.futureValue /
    Math.pow(
      1 + inflation / 100,
      totalYears
    );

  return (
    <main className="min-h-screen bg-[#020817] text-white p-6">

      <div className="max-w-7xl mx-auto">

        {/* PAGE TITLE */}
        <h1 className="text-5xl font-bold mb-10">
          Lumpsum Calculator
        </h1>

        {/* INPUT SECTION */}
        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 mb-10 shadow-xl">

          <h2 className="text-3xl font-bold mb-8">
            Investment Details
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* INVESTMENT AMOUNT */}
            <div>

              <label className="block mb-3 text-slate-300 text-lg">
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
                className="w-full bg-slate-800 border border-slate-600 text-white p-4 rounded-2xl outline-none"
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
                    Number(
                      e.target.value
                    )
                  )
                }
                className="w-full bg-slate-800 border border-slate-600 text-white p-4 rounded-2xl outline-none"
              />

            </div>

            {/* TOTAL YEARS */}
            <div>

              <label className="block mb-3 text-slate-300 text-lg">
                Total Duration
              </label>

              <div className="bg-slate-800 border border-slate-600 p-4 rounded-2xl text-xl font-semibold">
                {totalYears} Years
              </div>

            </div>

          </div>

        </div>

        {/* RETURN PHASES */}
        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 mb-10 shadow-xl">

          <h2 className="text-3xl font-bold mb-8">
            Return Phases
          </h2>

          <ReturnPhases
            returnPhases={
              lumpsumReturnPhases
            }
            setReturnPhases={
              setLumpsumReturnPhases
            }
          />

        </div>

        {/* RESULT SECTION */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">

          {/* TOTAL INVESTED */}
          <div className="bg-blue-100 text-slate-900 rounded-3xl p-8 shadow-xl">

            <h2 className="text-xl font-semibold mb-4">
              Total Invested
            </h2>

            <p className="text-4xl font-bold break-words">
              ₹
              {formatIndianCurrency(
                lumpsumAmount
              )}
            </p>

          </div>

          {/* WEALTH GAINED */}
          <div className="bg-green-100 text-slate-900 rounded-3xl p-8 shadow-xl">

            <h2 className="text-xl font-semibold mb-4">
              Wealth Gained
            </h2>

            <p className="text-4xl font-bold text-green-700 break-words">
              ₹
              {formatIndianCurrency(
                lumpsumData.wealthGained
              )}
            </p>

          </div>

          {/* FUTURE VALUE */}
          <div className="bg-yellow-100 text-slate-900 rounded-3xl p-8 shadow-xl">

            <h2 className="text-xl font-semibold mb-4">
              Future Value
            </h2>

            <p className="text-4xl font-bold break-words">
              ₹
              {formatIndianCurrency(
                lumpsumData.futureValue
              )}
            </p>

          </div>

          {/* INFLATION ADJUSTED */}
          <div className="bg-purple-100 text-slate-900 rounded-3xl p-8 shadow-xl">

            <h2 className="text-xl font-semibold mb-4">
              Inflation Adjusted Value
            </h2>

            <p className="text-4xl font-bold text-purple-700 break-words">
              ₹
              {formatIndianCurrency(
                inflationAdjustedValue
              )}
            </p>

            <p className="text-sm mt-3 text-slate-700">
              (Today's purchasing power)
            </p>

          </div>

        </div>

        {/* PIE CHART */}
        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 mb-10 shadow-xl">

          <h2 className="text-3xl font-bold mb-8">
            Investment Breakdown
          </h2>

          <InvestmentPieChart
            invested={lumpsumAmount}
            wealth={
              lumpsumData.wealthGained
            }
          />

        </div>

        {/* COMPOUNDING CURVE */}
        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 mb-10 shadow-xl">

          <h2 className="text-3xl font-bold mb-8">
            Compounding Curve
          </h2>

          <CompoundingCurveChart
            data={yearlyData}
          />

        </div>

        {/* INFO SECTION */}
        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 shadow-xl">

          <h2 className="text-4xl font-bold mb-8">
            Understanding Lumpsum Investing
          </h2>

          <div className="space-y-8 text-slate-300 leading-8">

            <div>

              <h3 className="text-2xl font-semibold text-white mb-3">
                What is Lumpsum Investment?
              </h3>

              <p>
                A lumpsum investment means
                investing a large amount of
                money at one time instead of
                investing gradually through
                SIPs. It is commonly used
                for bonuses, inheritance,
                business proceeds, or
                accumulated savings.
              </p>

            </div>

            <div>

              <h3 className="text-2xl font-semibold text-white mb-3">
                Why Lumpsum Investing Works
              </h3>

              <ul className="list-disc ml-8 space-y-3">

                <li>
                  Full capital starts compounding immediately
                </li>

                <li>
                  Long investment duration creates massive wealth
                </li>

                <li>
                  Suitable during market corrections
                </li>

                <li>
                  Helps deploy idle cash efficiently
                </li>

                <li>
                  Powerful for long-term goals
                </li>

              </ul>

            </div>

            <div className="bg-blue-500/10 p-6 rounded-2xl">

              <h3 className="text-2xl font-semibold text-white mb-3">
                Power of Compounding
              </h3>

              <p>
                The earlier a lumpsum is
                invested, the more time it
                gets to compound and grow
                exponentially over decades.
              </p>

            </div>

            <div className="bg-orange-500/10 p-6 rounded-2xl">

              <h3 className="text-2xl font-semibold text-white mb-3">
                Inflation Impact
              </h3>

              <p>
                Inflation reduces future
                purchasing power, which is
                why inflation-adjusted
                returns are important for
                long-term investing.
              </p>

            </div>

            <div>

              <h3 className="text-2xl font-semibold text-white mb-3">
                Important Lumpsum Insights
              </h3>

              <ul className="list-disc ml-8 space-y-3">

                <li>
                  Market timing can impact short-term returns
                </li>

                <li>
                  Longer duration reduces volatility risk
                </li>

                <li>
                  Equity investments perform best over long periods
                </li>

                <li>
                  Diversification helps reduce risk
                </li>

                <li>
                  Inflation-adjusted wealth matters more than nominal returns
                </li>

              </ul>

            </div>

            <div className="bg-yellow-500/10 p-6 rounded-2xl">

              <h3 className="text-2xl font-semibold text-white mb-3">
                Disclaimer
              </h3>

              <p>
                Investment projections are
                estimates based on assumed
                returns and compounding.
                Actual returns may vary
                significantly depending on
                market conditions, taxes,
                inflation, and investment
                behavior.
              </p>

            </div>

          </div>

        </div>

        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 shadow-xl">

          {/* FAQ + SEO SECTION */}

          <div className="mt-16 space-y-12">

            {/* FAQ */}

            <div>

              <h2 className="text-4xl font-bold mb-8">
                Frequently Asked Questions
              </h2>

              <div className="space-y-8">

                <div>

                  <h3 className="text-2xl font-semibold text-white mb-3">
                    Is lumpsum investment better than SIP?
                  </h3>

                  <p className="text-slate-300 leading-8">
                    Lumpsum investing can generate higher returns if invested
                    during attractive market valuations and held for long durations.
                    SIPs, however, reduce timing risk by investing gradually.
                  </p>

                </div>

                <div>

                  <h3 className="text-2xl font-semibold text-white mb-3">
                    When is lumpsum investing suitable?
                  </h3>

                  <p className="text-slate-300 leading-8">
                    Lumpsum investing is commonly suitable when investors receive
                    bonuses, inheritance, business proceeds, or large accumulated savings
                    that can remain invested for long periods.
                  </p>

                </div>

                <div>

                  <h3 className="text-2xl font-semibold text-white mb-3">
                    Can lumpsum investing create long-term wealth?
                  </h3>

                  <p className="text-slate-300 leading-8">
                    Yes. Long-term compounding on a large initial investment
                    can create substantial wealth over decades if investments
                    remain disciplined and patient.
                  </p>

                </div>

                <div>

                  <h3 className="text-2xl font-semibold text-white mb-3">
                    Does inflation impact lumpsum returns?
                  </h3>

                  <p className="text-slate-300 leading-8">
                    Inflation reduces future purchasing power significantly over
                    long durations. Inflation-adjusted returns are therefore
                    important while evaluating actual wealth creation.
                  </p>

                </div>

              </div>

            </div>

            {/* COMMON MISTAKES */}

            <div>

              <h2 className="text-4xl font-bold mb-8">
                Common Lumpsum Investing Mistakes
              </h2>

              <div className="grid md:grid-cols-2 gap-6">

                <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6">

                  <h3 className="text-2xl font-semibold text-red-300 mb-3">
                    Investing Without Emergency Fund
                  </h3>

                  <p className="text-slate-300 leading-8">
                    Investors should maintain sufficient emergency reserves
                    before deploying large amounts into market-linked investments.
                  </p>

                </div>

                <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-6">

                  <h3 className="text-2xl font-semibold text-orange-300 mb-3">
                    Panic Selling During Market Crash
                  </h3>

                  <p className="text-slate-300 leading-8">
                    Short-term volatility often causes emotional decisions.
                    Long-term investing generally rewards patience and discipline.
                  </p>

                </div>

                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-6">

                  <h3 className="text-2xl font-semibold text-yellow-300 mb-3">
                    Ignoring Inflation
                  </h3>

                  <p className="text-slate-300 leading-8">
                    Nominal returns can appear attractive, but inflation-adjusted
                    purchasing power matters more for real wealth creation.
                  </p>

                </div>

                <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-6">

                  <h3 className="text-2xl font-semibold text-blue-300 mb-3">
                    Short-Term Investing Expectations
                  </h3>

                  <p className="text-slate-300 leading-8">
                    Equity investments may remain volatile in the short term.
                    Long holding periods generally improve compounding outcomes.
                  </p>

                </div>

              </div>

            </div>

            {/* LUMPSUM VS SIP */}

            <div className="bg-slate-800 rounded-3xl p-8">

              <h2 className="text-4xl font-bold mb-8">
                Lumpsum vs SIP Investing
              </h2>

              <div className="space-y-6 text-slate-300 leading-8">

                <p>
                  SIP investing spreads investments gradually over time,
                  helping reduce timing risk and emotional investing decisions.
                </p>

                <p>
                  Lumpsum investing deploys the entire capital immediately,
                  allowing the full amount to benefit from long-term compounding.
                </p>

                <p>
                  SIPs are generally preferred for salaried investors with
                  regular income, while lumpsum investing may suit investors
                  with large available capital and long investment horizons.
                </p>

                <ul className="list-disc ml-8 space-y-3">

                  <li>SIP reduces timing risk</li>

                  <li>Lumpsum maximizes compounding duration</li>

                  <li>SIP builds investing discipline</li>

                  <li>Lumpsum works well during market corrections</li>

                </ul>

              </div>

            </div>

            {/* MARKET INSIGHT */}

            <div className="bg-green-500/10 border border-green-500/20 rounded-3xl p-8">

              <h2 className="text-4xl font-bold mb-6">
                Long-Term Investing Insight
              </h2>

              <p className="text-slate-300 leading-8 text-lg">

                The biggest advantage of lumpsum investing is time.
                Capital invested early gets more years to compound,
                often leading to exponential wealth growth over decades.

              </p>

              <p className="text-slate-300 leading-8 text-lg mt-6">

                Historically, long-term equity investing has rewarded
                disciplined investors who remained patient during periods
                of market volatility and economic uncertainty.

              </p>

            </div>

            {/* RELATED CALCULATORS */}

            <div>

              <h2 className="text-4xl font-bold mb-8">
                Explore More Calculators
              </h2>

              <div className="flex flex-wrap gap-4">

                <a
                  href="/sip"
                  className="bg-slate-800 hover:bg-slate-700 px-6 py-4 rounded-2xl transition-colors"
                >
                  SIP Calculator
                </a>

                <a
                  href="/fire"
                  className="bg-slate-800 hover:bg-slate-700 px-6 py-4 rounded-2xl transition-colors"
                >
                  FIRE Calculator
                </a>

                <a
                  href="/goal-planner"
                  className="bg-slate-800 hover:bg-slate-700 px-6 py-4 rounded-2xl transition-colors"
                >
                  Goal Planner
                </a>

                <a
                  href="/retirement-stress"
                  className="bg-slate-800 hover:bg-slate-700 px-6 py-4 rounded-2xl transition-colors"
                >
                  Retirement Stress Test
                </a>

              </div>

            </div>

          </div>
        </div>

      </div>

    </main>
  );
}