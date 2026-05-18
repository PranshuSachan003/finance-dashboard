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

  const goalData =
    calculateGoalSip(
      targetAmount,
      years,
      expectedReturn,
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
          Goal Planner
        </h1>

        {/* GOAL NAME */}
        <div className="mb-4">
          <label className="block mb-2">
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
            className="w-full border p-3 rounded"
          />
        </div>

        {/* TARGET */}
        <div className="mb-4">
          <label className="block mb-2">
            Target Amount (Today)
          </label>

          <input
            type="number"
            value={targetAmount}
            onChange={(e) =>
              setTargetAmount(
                Number(e.target.value)
              )
            }
            className="w-full border p-3 rounded"
          />
        </div>

        {/* YEARS */}
        <div className="mb-4">
          <label className="block mb-2">
            Years To Goal
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

        {/* RETURN */}
        <div className="mb-4">
          <label className="block mb-2">
            Expected Return (%)
          </label>

          <input
            type="number"
            value={expectedReturn}
            onChange={(e) =>
              setExpectedReturn(
                Number(e.target.value)
              )
            }
            className="w-full border p-3 rounded"
          />
        </div>

        {/* INFLATION */}
        <div className="mb-6">
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

        {/* RESULTS */}
        <div className="bg-green-50 dark:bg-green-950 p-6 rounded-xl space-y-4">

          <div>
            <h2 className="text-gray-600 dark:text-gray-300">
              Goal
            </h2>

            <p className="text-2xl font-bold">
              {goalName}
            </p>
          </div>

          <div>
            <h2 className="text-gray-600 dark:text-gray-300">
              Inflation Adjusted Target
            </h2>

            <p className="text-3xl font-bold">
              ₹{
                formatIndianCurrency(
                  goalData.futureTarget
                )
              }
            </p>
          </div>

          <div>
            <h2 className="text-gray-600 dark:text-gray-300">
              Required Monthly SIP
            </h2>

            <p className="text-3xl font-bold text-blue-700">
              ₹{
                formatIndianCurrency(
                  goalData.requiredSip
                )
              }
            </p>
          </div>

          <div>
            <h2 className="text-gray-600 dark:text-gray-300">
              Total Invested
            </h2>

            <p className="text-2xl font-bold">
              ₹{
                formatIndianCurrency(
                  goalData.totalInvested
                )
              }
            </p>
          </div>

          <div>
            <h2 className="text-gray-600 dark:text-gray-300">
              Wealth Generated
            </h2>

            <p className="text-2xl font-bold text-green-700">
              ₹{
                formatIndianCurrency(
                  goalData.wealthGained
                )
              }
            </p>
          </div>

          {/* PIE CHART */}
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

          {/* COMPOUNDING CHART */}
          <CompoundingChart
            data={
              goalData.yearlyData
            }
          />

        </div>

        {/* INFO SECTION */}

        <div className="mt-14 card">

          <h2 className="text-4xl font-bold mb-8">
            Understanding Goal Planner
          </h2>

          <div className="space-y-10">

            <div>

              <h3 className="text-2xl font-semibold mb-3">
                What is Goal-Based Investing?
              </h3>

              <p className="text-gray-700 dark:text-gray-300 leading-8">
                Goal-based investing helps you invest for
                specific future goals such as retirement,
                home purchase, child education, travel,
                or wealth creation.
              </p>

            </div>

            <div>

              <h3 className="text-2xl font-semibold mb-3">
                Goal Amount
              </h3>

              <p className="text-gray-700 dark:text-gray-300 leading-8">
                This is the future amount required to achieve
                your financial goal after accounting for inflation.
              </p>

            </div>

            <div>

              <h3 className="text-2xl font-semibold mb-3">
                Important Goal Planning Insights
              </h3>

              <ul className="list-disc ml-8 space-y-4 text-gray-700 dark:text-gray-300">

                <li>
                  Inflation significantly increases future goal cost.
                </li>

                <li>
                  Starting early reduces monthly SIP burden.
                </li>

                <li>
                  Long-term goals can take higher equity exposure.
                </li>

                <li>
                  Delaying investments increases required SIP dramatically.
                </li>

              </ul>

            </div>

            <div className="bg-green-500/10 rounded-2xl p-6">

              <h3 className="text-2xl font-semibold mb-3">
                Popular Financial Goals
              </h3>

              <ul className="list-disc ml-8 space-y-3 text-gray-700 dark:text-gray-300">

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

            <div className="bg-yellow-500/10 rounded-2xl p-6">

              <h3 className="text-2xl font-semibold mb-3">
                Disclaimer
              </h3>

              <p className="text-gray-700 dark:text-gray-300 leading-8">
                Goal projections are estimates based on assumed
                returns and inflation rates. Actual investment
                performance and future goal costs may vary.
              </p>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}