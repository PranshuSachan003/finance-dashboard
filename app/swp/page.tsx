"use client";

import { useState } from "react";

import {
  calculateSwp,
} from "../../utils/calculations";

import {
  formatIndianCurrency,
} from "../../utils/formatCurrency";

import InvestmentPieChart
  from "../../components/InvestmentPieChart";

import CompoundingChart
  from "../../components/CompoundingChart";

export default function SwpCalculator() {

  const [
    initialCorpus,
    setInitialCorpus,
  ] = useState(50000000);

  const [
    monthlyWithdrawal,
    setMonthlyWithdrawal,
  ] = useState(100000);

  const [
    expectedReturn,
    setExpectedReturn,
  ] = useState(10);

  const [
    inflation,
    setInflation,
  ] = useState(6);

  const [
    years,
    setYears,
  ] = useState(30);

  const swpData =
    calculateSwp(
      initialCorpus,
      monthlyWithdrawal,
      expectedReturn,
      inflation,
      years
    );

  // ✅ Inflation Adjusted Remaining Corpus
  const inflationAdjustedCorpus =
    swpData.corpusLeft /
    Math.pow(
      1 + inflation / 100,
      years
    );

  return (
    <main className="min-h-screen bg-[#020817] text-white p-6">

      <div className="max-w-7xl mx-auto">

        {/* PAGE TITLE */}
        <h1 className="text-5xl font-bold mb-10">
          SWP Calculator
        </h1>

        {/* INPUT SECTION */}
        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 mb-10 shadow-xl">

          <h2 className="text-3xl font-bold mb-8">
            Withdrawal Details
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* INITIAL CORPUS */}
            <div>

              <label className="block mb-3 text-slate-300 text-lg">
                Initial Corpus (₹)
              </label>

              <input
                type="number"
                value={initialCorpus}
                onChange={(e) =>
                  setInitialCorpus(
                    Number(
                      e.target.value
                    )
                  )
                }
                className="w-full bg-slate-800 border border-slate-600 text-white p-4 rounded-2xl outline-none"
              />

            </div>

            {/* MONTHLY WITHDRAWAL */}
            <div>

              <label className="block mb-3 text-slate-300 text-lg">
                Monthly Withdrawal (₹)
              </label>

              <input
                type="number"
                value={monthlyWithdrawal}
                onChange={(e) =>
                  setMonthlyWithdrawal(
                    Number(
                      e.target.value
                    )
                  )
                }
                className="w-full bg-slate-800 border border-slate-600 text-white p-4 rounded-2xl outline-none"
              />

            </div>

            {/* EXPECTED RETURN */}
            <div>

              <label className="block mb-3 text-slate-300 text-lg">
                Expected Return (%)
              </label>

              <input
                type="number"
                value={expectedReturn}
                onChange={(e) =>
                  setExpectedReturn(
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

            {/* YEARS */}
            <div>

              <label className="block mb-3 text-slate-300 text-lg">
                Duration (Years)
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
                className="w-full bg-slate-800 border border-slate-600 text-white p-4 rounded-2xl outline-none"
              />

            </div>

          </div>

        </div>

        {/* RESULT SECTION */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">

          {/* CORPUS LEFT */}
          <div className="bg-blue-100 text-slate-900 rounded-3xl p-8 shadow-xl">

            <h2 className="text-xl font-semibold mb-4">
              Corpus Left
            </h2>

            <p className="text-4xl font-bold break-words">
              ₹
              {
                formatIndianCurrency(
                  swpData.corpusLeft
                )
              }
            </p>

          </div>

          {/* INFLATION ADJUSTED */}
          <div className="bg-purple-100 text-slate-900 rounded-3xl p-8 shadow-xl">

            <h2 className="text-xl font-semibold mb-4">
              Inflation Adjusted Corpus
            </h2>

            <p className="text-4xl font-bold text-purple-700 break-words">
              ₹
              {
                formatIndianCurrency(
                  inflationAdjustedCorpus
                )
              }
            </p>

            <p className="text-sm mt-3 text-slate-700">
              (Today's purchasing power)
            </p>

          </div>

          {/* SURVIVAL DURATION */}
          <div className="bg-green-100 text-slate-900 rounded-3xl p-8 shadow-xl">

            <h2 className="text-xl font-semibold mb-4">
              Survival Duration
            </h2>

            <p className="text-4xl font-bold text-green-700 break-words">
              {
                swpData.survivedYears
              } Years
            </p>

          </div>

          {/* STATUS */}
          <div className="bg-yellow-100 text-slate-900 rounded-3xl p-8 shadow-xl">

            <h2 className="text-xl font-semibold mb-4">
              Status
            </h2>

            <p
              className={`text-4xl font-bold break-words ${
                swpData.depleted
                  ? "text-red-600"
                  : "text-green-700"
              }`}
            >
              {
                swpData.depleted
                  ? "Corpus Depleted"
                  : "Corpus Survived"
              }
            </p>

          </div>

        </div>

        {/* PIE CHART */}
        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 mb-10 shadow-xl">

          <h2 className="text-3xl font-bold mb-8">
            Corpus Breakdown
          </h2>

          <InvestmentPieChart
            invested={
              initialCorpus
            }
            wealth={
              swpData.corpusLeft
            }
            investedLabel="Initial Corpus"
            wealthLabel="Remaining Corpus"
          />

        </div>

        {/* COMPOUNDING CURVE */}
        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 mb-10 shadow-xl">

          <h2 className="text-3xl font-bold mb-8">
            Corpus Survival Curve
          </h2>

          <CompoundingChart
            data={
              swpData.yearlyData.map(
                (item) => ({
                  year:
                    item.year,

                  nominalValue:
                    item.corpus,

                  realValue:
                    item.corpus /
                    Math.pow(
                      1 + inflation / 100,
                      item.year
                    ),
                })
              )
            }
          />

        </div>

        {/* INFO SECTION */}
        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 shadow-xl">

          <h2 className="text-4xl font-bold mb-8">
            Understanding SWP Calculator
          </h2>

          <div className="space-y-8 text-slate-300 leading-8">

            {/* WHAT IS SWP */}
            <div>

              <h3 className="text-2xl font-semibold text-white mb-3">
                What is SWP?
              </h3>

              <p>
                SWP (Systematic Withdrawal Plan)
                allows investors to withdraw
                a fixed amount regularly from
                investments while the remaining
                corpus continues compounding.
              </p>

            </div>

            {/* WHY SWP */}
            <div>

              <h3 className="text-2xl font-semibold text-white mb-3">
                Why SWP is Useful
              </h3>

              <ul className="list-disc ml-8 space-y-3">

                <li>
                  Creates passive retirement income
                </li>

                <li>
                  Helps manage monthly cash flow
                </li>

                <li>
                  Remaining corpus continues growing
                </li>

                <li>
                  Can be tax efficient in some cases
                </li>

              </ul>

            </div>

            {/* IMPORTANT INSIGHTS */}
            <div className="bg-blue-500/10 p-6 rounded-2xl">

              <h3 className="text-2xl font-semibold text-white mb-3">
                Important SWP Insights
              </h3>

              <ul className="list-disc ml-8 space-y-3">

                <li>
                  Higher withdrawals can exhaust corpus quickly
                </li>

                <li>
                  Inflation-adjusted withdrawals are important
                </li>

                <li>
                  Portfolio return should ideally exceed withdrawal rate
                </li>

                <li>
                  Market crashes impact SWP sustainability
                </li>

              </ul>

            </div>

            {/* USE CASES */}
            <div className="bg-green-500/10 p-6 rounded-2xl">

              <h3 className="text-2xl font-semibold text-white mb-3">
                Common SWP Use Cases
              </h3>

              <ul className="list-disc ml-8 space-y-3">

                <li>
                  Retirement income
                </li>

                <li>
                  Monthly passive cash flow
                </li>

                <li>
                  Parents' income planning
                </li>

                <li>
                  Temporary salary replacement
                </li>

              </ul>

            </div>

            {/* INFLATION */}
            <div className="bg-orange-500/10 p-6 rounded-2xl">

              <h3 className="text-2xl font-semibold text-white mb-3">
                Inflation Impact
              </h3>

              <p>
                Inflation slowly reduces purchasing power.
                Inflation-adjusted corpus shows the real
                value of remaining money in today's terms.
              </p>

            </div>

            {/* DISCLAIMER */}
            <div className="bg-yellow-500/10 p-6 rounded-2xl">

              <h3 className="text-2xl font-semibold text-white mb-3">
                Disclaimer
              </h3>

              <p>
                SWP projections are estimates based on
                assumed returns and withdrawals.
                Actual portfolio survival depends on
                market returns, inflation, taxes,
                and withdrawal discipline.
              </p>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}