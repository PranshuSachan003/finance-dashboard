"use client";

import { useState } from "react";

import {
  calculateGoalSip,
} from "../../utils/calculations";

import {
  formatIndianCurrency,
} from "../../utils/formatCurrency";

import InvestmentPieChart
  from "../../components/InvestmentPieChart";

import CompoundingChart
  from "../../components/CompoundingChart";

export default function GoalPlanner() {

  const [
    goalName,
    setGoalName,
  ] = useState(
    "Child Education"
  );

  const [
    targetAmount,
    setTargetAmount,
  ] = useState(5000000);

  const [years, setYears] =
    useState(15);

  const [
    expectedReturn,
    setExpectedReturn,
  ] = useState(12);

  const [
    inflation,
    setInflation,
  ] = useState(6);

  // GOAL DATA
  const goalData =
    calculateGoalSip(
      targetAmount,
      years,
      expectedReturn,
      inflation
    );

  return (
    <main className="min-h-screen bg-[#020817] text-white p-6">

      <div className="max-w-7xl mx-auto">

        {/* PAGE TITLE */}
        <h1 className="text-5xl font-bold mb-10">
          Goal Planner
        </h1>

        {/* INPUT SECTION */}
        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 mb-10 shadow-xl">

          <h2 className="text-3xl font-bold mb-8">
            Goal Details
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* GOAL NAME */}
            <div>

              <label className="block mb-3 text-slate-300 text-lg">
                Goal Name
              </label>

              <input
                type="text"
                value={goalName}
                onChange={(e) =>
                  setGoalName(
                    e.target.value
                  )
                }
                className="w-full bg-slate-800 border border-slate-600 text-white p-4 rounded-2xl outline-none"
              />

            </div>

            {/* TARGET AMOUNT */}
            <div>

              <label className="block mb-3 text-slate-300 text-lg">
                Target Amount (Today)
              </label>

              <input
                type="number"
                value={targetAmount}
                onChange={(e) =>
                  setTargetAmount(
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
                Years To Goal
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

          </div>

        </div>

        {/* RESULT SECTION */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">

          {/* GOAL */}
          <div className="bg-blue-100 text-slate-900 rounded-3xl p-8 shadow-xl">

            <h2 className="text-xl font-semibold mb-4">
              Goal
            </h2>

            <p className="text-3xl font-bold break-words">
              {goalName}
            </p>

          </div>

          {/* FUTURE TARGET */}
          <div className="bg-yellow-100 text-slate-900 rounded-3xl p-8 shadow-xl">

            <h2 className="text-xl font-semibold mb-4">
              Inflation Adjusted Target
            </h2>

            <p className="text-4xl font-bold break-words">
              ₹
              {formatIndianCurrency(
                goalData.futureTarget
              )}
            </p>

          </div>

          {/* REQUIRED SIP */}
          <div className="bg-green-100 text-slate-900 rounded-3xl p-8 shadow-xl">

            <h2 className="text-xl font-semibold mb-4">
              Required Monthly SIP
            </h2>

            <p className="text-4xl font-bold text-green-700 break-words">
              ₹
              {formatIndianCurrency(
                goalData.requiredSip
              )}
            </p>

          </div>

          {/* WEALTH GENERATED */}
          <div className="bg-purple-100 text-slate-900 rounded-3xl p-8 shadow-xl">

            <h2 className="text-xl font-semibold mb-4">
              Wealth Generated
            </h2>

            <p className="text-4xl font-bold text-purple-700 break-words">
              ₹
              {formatIndianCurrency(
                goalData.wealthGained
              )}
            </p>

          </div>

        </div>

        {/* SECOND RESULT SECTION */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">

          {/* TOTAL INVESTED */}
          <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 shadow-xl">

            <h2 className="text-2xl font-bold mb-6">
              Investment Summary
            </h2>

            <div className="space-y-6">

              <div>

                <p className="text-slate-400 text-lg">
                  Total Invested
                </p>

                <p className="text-4xl font-bold mt-2">
                  ₹
                  {formatIndianCurrency(
                    goalData.totalInvested
                  )}
                </p>

              </div>

              <div>

                <p className="text-slate-400 text-lg">
                  Expected Return
                </p>

                <p className="text-4xl font-bold text-green-400 mt-2">
                  {expectedReturn}%
                </p>

              </div>

              <div>

                <p className="text-slate-400 text-lg">
                  Inflation Rate
                </p>

                <p className="text-4xl font-bold text-orange-400 mt-2">
                  {inflation}%
                </p>

              </div>

            </div>

          </div>

          {/* GOAL SUMMARY */}
          <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 shadow-xl">

            <h2 className="text-2xl font-bold mb-6">
              Goal Summary
            </h2>

            <div className="space-y-6">

              <div>

                <p className="text-slate-400 text-lg">
                  Years To Goal
                </p>

                <p className="text-4xl font-bold mt-2">
                  {years} Years
                </p>

              </div>

              <div>

                <p className="text-slate-400 text-lg">
                  Future Goal Value
                </p>

                <p className="text-4xl font-bold text-yellow-400 mt-2 break-words">
                  ₹
                  {formatIndianCurrency(
                    goalData.futureTarget
                  )}
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* PIE CHART */}
        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 mb-10 shadow-xl">

          <h2 className="text-3xl font-bold mb-8">
            Investment Breakdown
          </h2>

          <InvestmentPieChart
            invested={
              goalData.totalInvested
            }
            wealth={
              goalData.wealthGained
            }
            investedLabel="Invested"
            wealthLabel="Growth"
          />

        </div>

        {/* COMPOUNDING CURVE */}
        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 mb-10 shadow-xl">

          <h2 className="text-3xl font-bold mb-8">
            Goal Growth Projection
          </h2>

          <CompoundingChart
            data={
              goalData.yearlyData
            }
          />

        </div>

        {/* INFO SECTION */}
        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 shadow-xl">

          <h2 className="text-4xl font-bold mb-8">
            Understanding Goal Planner
          </h2>

          <div className="space-y-8 text-slate-300 leading-8">

            <div>

              <h3 className="text-2xl font-semibold text-white mb-3">
                What is Goal-Based Investing?
              </h3>

              <p>
                Goal-based investing helps
                you invest for specific
                future goals such as
                retirement, home purchase,
                child education, travel,
                or wealth creation.
              </p>

            </div>

            <div>

              <h3 className="text-2xl font-semibold text-white mb-3">
                Goal Amount
              </h3>

              <p>
                This is the future amount
                required to achieve your
                financial goal after
                accounting for inflation.
              </p>

            </div>

            <div>

              <h3 className="text-2xl font-semibold text-white mb-3">
                Important Goal Planning Insights
              </h3>

              <ul className="list-disc ml-8 space-y-3">

                <li>
                  Inflation significantly increases future goal cost
                </li>

                <li>
                  Starting early reduces monthly SIP burden
                </li>

                <li>
                  Long-term goals can take higher equity exposure
                </li>

                <li>
                  Delaying investments increases required SIP dramatically
                </li>

              </ul>

            </div>

            <div className="bg-green-500/10 p-6 rounded-2xl">

              <h3 className="text-2xl font-semibold text-white mb-3">
                Popular Financial Goals
              </h3>

              <ul className="list-disc ml-8 space-y-3">

                <li>
                  Retirement planning
                </li>

                <li>
                  Child education
                </li>

                <li>
                  Buying a house
                </li>

                <li>
                  Car purchase
                </li>

                <li>
                  International travel
                </li>

              </ul>

            </div>

            <div className="bg-blue-500/10 p-6 rounded-2xl">

              <h3 className="text-2xl font-semibold text-white mb-3">
                Why Early Investing Matters
              </h3>

              <p>
                The earlier you start,
                the lower your required
                SIP becomes because
                compounding gets more
                time to work.
              </p>

            </div>

            <div className="bg-yellow-500/10 p-6 rounded-2xl">

              <h3 className="text-2xl font-semibold text-white mb-3">
                Disclaimer
              </h3>

              <p>
                Goal projections are
                estimates based on assumed
                returns and inflation
                rates. Actual investment
                performance and future
                goal costs may vary.
              </p>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}