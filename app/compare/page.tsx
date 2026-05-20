"use client";

import { useState } from "react";

import {
  calculateSip,
  generateSipYearlyData,
} from "../../utils/calculations";

import {
  formatIndianCurrency,
} from "../../utils/formatCurrency";

import CompoundingChart
  from "../../components/CompoundingChart";

export default function CompareCalculator() {

  // =============================
  // SCENARIO A
  // =============================

  const [sipA, setSipA] =
    useState(10000);

  const [returnA, setReturnA] =
    useState(12);

  const [yearsA, setYearsA] =
    useState(20);

  const [stepUpA, setStepUpA] =
    useState(10);

  // =============================
  // SCENARIO B
  // =============================

  const [sipB, setSipB] =
    useState(15000);

  const [returnB, setReturnB] =
    useState(14);

  const [yearsB, setYearsB] =
    useState(20);

  const [stepUpB, setStepUpB] =
    useState(10);

  // =============================
  // GLOBAL INFLATION
  // =============================

  const [inflation, setInflation] =
    useState(6);

  // =============================
  // CALCULATIONS
  // =============================

  const scenarioA = calculateSip(
    sipA,
    stepUpA,
    [
      {
        years: yearsA,
        returnRate: returnA,
      },
    ]
  );

  const scenarioB = calculateSip(
    sipB,
    stepUpB,
    [
      {
        years: yearsB,
        returnRate: returnB,
      },
    ]
  );

  // =============================
  // YEARLY CHART DATA
  // =============================

  const chartA =
    generateSipYearlyData(
      sipA,
      stepUpA,
      inflation,
      [
        {
          years: yearsA,
          returnRate: returnA,
        },
      ]
    );

  const chartB =
    generateSipYearlyData(
      sipB,
      stepUpB,
      inflation,
      [
        {
          years: yearsB,
          returnRate: returnB,
        },
      ]
    );

  // =============================
  // INFLATION ADJUSTED VALUES
  // =============================

  const inflationAdjustedA =
    scenarioA.totalValue /
    Math.pow(
      1 + inflation / 100,
      yearsA
    );

  const inflationAdjustedB =
    scenarioB.totalValue /
    Math.pow(
      1 + inflation / 100,
      yearsB
    );

  return (
    <main className="min-h-screen bg-[#020817] text-white p-6">

      <div className="max-w-7xl mx-auto">

        {/* PAGE TITLE */}

        <h1 className="text-5xl font-bold mb-10">
          Compare Investment Scenarios
        </h1>

        {/* GLOBAL SETTINGS */}

        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 mb-10 shadow-xl">

          <div className="grid md:grid-cols-2 gap-8">

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

          </div>

        </div>

        {/* SCENARIOS */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">

          {/* =========================
              SCENARIO A
          ========================== */}

          <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 shadow-xl">

            <h2 className="text-3xl font-bold mb-8">
              Scenario A
            </h2>

            <div className="space-y-6">

              {/* SIP */}

              <div>

                <label className="block mb-3 text-slate-300 text-lg">
                  Monthly SIP (₹)
                </label>

                <input
                  type="number"
                  value={sipA}
                  onChange={(e) =>
                    setSipA(
                      Number(e.target.value)
                    )
                  }
                  className="
                    w-full
                    bg-slate-800
                    border
                    border-slate-600
                    p-4
                    rounded-2xl
                    outline-none
                  "
                />

              </div>

              {/* RETURN */}

              <div>

                <label className="block mb-3 text-slate-300 text-lg">
                  Expected Return (%)
                </label>

                <input
                  type="number"
                  value={returnA}
                  onChange={(e) =>
                    setReturnA(
                      Number(e.target.value)
                    )
                  }
                  className="
                    w-full
                    bg-slate-800
                    border
                    border-slate-600
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
                  value={yearsA}
                  onChange={(e) =>
                    setYearsA(
                      Number(e.target.value)
                    )
                  }
                  className="
                    w-full
                    bg-slate-800
                    border
                    border-slate-600
                    p-4
                    rounded-2xl
                    outline-none
                  "
                />

              </div>

              {/* STEP UP */}

              <div>

                <label className="block mb-3 text-slate-300 text-lg">
                  Annual Step-Up (%)
                </label>

                <input
                  type="number"
                  value={stepUpA}
                  onChange={(e) =>
                    setStepUpA(
                      Number(e.target.value)
                    )
                  }
                  className="
                    w-full
                    bg-slate-800
                    border
                    border-slate-600
                    p-4
                    rounded-2xl
                    outline-none
                  "
                />

              </div>

            </div>

            {/* RESULTS */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

              <div className="bg-blue-100 text-slate-900 rounded-3xl p-6">

                <h3 className="text-lg font-semibold mb-3">
                  Total Invested
                </h3>

                <p className="text-2xl font-bold break-words">
                  ₹{
                    formatIndianCurrency(
                      scenarioA.totalInvested
                    )
                  }
                </p>

              </div>

              <div className="bg-green-100 text-slate-900 rounded-3xl p-6">

                <h3 className="text-lg font-semibold mb-3">
                  Wealth Gained
                </h3>

                <p className="text-2xl font-bold text-green-700 break-words">
                  ₹{
                    formatIndianCurrency(
                      scenarioA.wealthGained
                    )
                  }
                </p>

              </div>

              <div className="bg-yellow-100 text-slate-900 rounded-3xl p-6">

                <h3 className="text-lg font-semibold mb-3">
                  Future Value
                </h3>

                <p className="text-3xl font-bold break-words">
                  ₹{
                    formatIndianCurrency(
                      scenarioA.totalValue
                    )
                  }
                </p>

              </div>

              <div className="bg-purple-100 text-slate-900 rounded-3xl p-6">

                <h3 className="text-lg font-semibold mb-3">
                  Inflation Adjusted
                </h3>

                <p className="text-3xl font-bold text-purple-700 break-words">
                  ₹{
                    formatIndianCurrency(
                      inflationAdjustedA
                    )
                  }
                </p>

              </div>

            </div>

          </div>

          {/* =========================
              SCENARIO B
          ========================== */}

          <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 shadow-xl">

            <h2 className="text-3xl font-bold mb-8">
              Scenario B
            </h2>

            <div className="space-y-6">

              {/* SIP */}

              <div>

                <label className="block mb-3 text-slate-300 text-lg">
                  Monthly SIP (₹)
                </label>

                <input
                  type="number"
                  value={sipB}
                  onChange={(e) =>
                    setSipB(
                      Number(e.target.value)
                    )
                  }
                  className="
                    w-full
                    bg-slate-800
                    border
                    border-slate-600
                    p-4
                    rounded-2xl
                    outline-none
                  "
                />

              </div>

              {/* RETURN */}

              <div>

                <label className="block mb-3 text-slate-300 text-lg">
                  Expected Return (%)
                </label>

                <input
                  type="number"
                  value={returnB}
                  onChange={(e) =>
                    setReturnB(
                      Number(e.target.value)
                    )
                  }
                  className="
                    w-full
                    bg-slate-800
                    border
                    border-slate-600
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
                  value={yearsB}
                  onChange={(e) =>
                    setYearsB(
                      Number(e.target.value)
                    )
                  }
                  className="
                    w-full
                    bg-slate-800
                    border
                    border-slate-600
                    p-4
                    rounded-2xl
                    outline-none
                  "
                />

              </div>

              {/* STEP UP */}

              <div>

                <label className="block mb-3 text-slate-300 text-lg">
                  Annual Step-Up (%)
                </label>

                <input
                  type="number"
                  value={stepUpB}
                  onChange={(e) =>
                    setStepUpB(
                      Number(e.target.value)
                    )
                  }
                  className="
                    w-full
                    bg-slate-800
                    border
                    border-slate-600
                    p-4
                    rounded-2xl
                    outline-none
                  "
                />

              </div>

            </div>

            {/* RESULTS */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

              <div className="bg-blue-100 text-slate-900 rounded-3xl p-6">

                <h3 className="text-lg font-semibold mb-3">
                  Total Invested
                </h3>

                <p className="text-2xl font-bold break-words">
                  ₹{
                    formatIndianCurrency(
                      scenarioB.totalInvested
                    )
                  }
                </p>

              </div>

              <div className="bg-green-100 text-slate-900 rounded-3xl p-6">

                <h3 className="text-lg font-semibold mb-3">
                  Wealth Gained
                </h3>

                <p className="text-2xl font-bold text-green-700 break-words">
                  ₹{
                    formatIndianCurrency(
                      scenarioB.wealthGained
                    )
                  }
                </p>

              </div>

              <div className="bg-yellow-100 text-slate-900 rounded-3xl p-6">

                <h3 className="text-lg font-semibold mb-3">
                  Future Value
                </h3>

                <p className="text-3xl font-bold break-words">
                  ₹{
                    formatIndianCurrency(
                      scenarioB.totalValue
                    )
                  }
                </p>

              </div>

              <div className="bg-purple-100 text-slate-900 rounded-3xl p-6">

                <h3 className="text-lg font-semibold mb-3">
                  Inflation Adjusted
                </h3>

                <p className="text-3xl font-bold text-purple-700 break-words">
                  ₹{
                    formatIndianCurrency(
                      inflationAdjustedB
                    )
                  }
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* CHARTS */}

        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 mb-10 shadow-xl">

          <h2 className="text-3xl font-bold mb-8">
            Growth Comparison
          </h2>

          <div className="space-y-12">

            {/* SCENARIO A */}

            <div>

              <h3 className="text-2xl font-semibold mb-4">
                Scenario A Growth
              </h3>

              <CompoundingChart
                data={chartA}
              />

            </div>

            {/* SCENARIO B */}

            <div>

              <h3 className="text-2xl font-semibold mb-4">
                Scenario B Growth
              </h3>

              <CompoundingChart
                data={chartB}
              />

            </div>

          </div>

        </div>

        {/* INFO SECTION */}

        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 shadow-xl">

          <h2 className="text-4xl font-bold mb-8">
            Understanding SIP Scenario Comparison
          </h2>

          <div className="space-y-8 text-slate-300 leading-8">

            <div>

              <h3 className="text-2xl font-semibold text-white mb-3">
                What does this calculator do?
              </h3>

              <p>
                This calculator compares two different SIP
                investment strategies to help understand how
                returns, investment duration, SIP amount,
                and annual step-up affect long-term wealth creation.
              </p>

            </div>

            <div>

              <h3 className="text-2xl font-semibold text-white mb-3">
                Why Compare SIP Scenarios?
              </h3>

              <ul className="list-disc ml-8 space-y-3">

                <li>
                  Compare aggressive vs conservative investing
                </li>

                <li>
                  Understand impact of larger SIP amounts
                </li>

                <li>
                  Compare different return assumptions
                </li>

                <li>
                  Analyze long-term compounding impact
                </li>

                <li>
                  Understand step-up investing benefits
                </li>

              </ul>

            </div>

            <div className="bg-blue-500/10 p-6 rounded-2xl">

              <h3 className="text-2xl font-semibold text-white mb-3">
                Important Insight
              </h3>

              <p>
                Even small differences in return percentage
                or investment duration can create massive
                differences in final wealth because of compounding.
              </p>

            </div>

            <div>

              <h3 className="text-2xl font-semibold text-white mb-3">
                Key Metrics To Compare
              </h3>

              <ul className="list-disc ml-8 space-y-3">

                <li>
                  Total invested amount
                </li>

                <li>
                  Wealth generated
                </li>

                <li>
                  Future portfolio value
                </li>

                <li>
                  Inflation-adjusted purchasing power
                </li>

                <li>
                  Speed of compounding
                </li>

              </ul>

            </div>

            <div className="bg-green-500/10 p-6 rounded-2xl">

              <h3 className="text-2xl font-semibold text-white mb-3">
                Pro Tip
              </h3>

              <p>
                Increasing SIP every year using step-up investing
                often creates bigger long-term impact than trying
                to chase slightly higher returns.
              </p>

            </div>

            <div className="bg-yellow-500/10 p-6 rounded-2xl">

              <h3 className="text-2xl font-semibold text-white mb-3">
                Disclaimer
              </h3>

              <p>
                Investment projections are based on assumed
                returns and compounding. Actual market
                performance can vary significantly.
              </p>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}