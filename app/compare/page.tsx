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

  // SCENARIO A
  const [
    sipA,
    setSipA,
  ] = useState(10000);

  const [
    returnA,
    setReturnA,
  ] = useState(12);

  const [
    yearsA,
    setYearsA,
  ] = useState(20);

  const [
    stepUpA,
    setStepUpA,
  ] = useState(10);

  // SCENARIO B
  const [
    sipB,
    setSipB,
  ] = useState(15000);

  const [
    returnB,
    setReturnB,
  ] = useState(14);

  const [
    yearsB,
    setYearsB,
  ] = useState(20);

  const [
    stepUpB,
    setStepUpB,
  ] = useState(10);

  // CALCULATE
  const scenarioA =
    calculateSip(
      sipA,
      stepUpA,
      [
        {
          years: yearsA,
          returnRate:
            returnA,
        },
      ]
    );

  const scenarioB =
    calculateSip(
      sipB,
      stepUpB,
      [
        {
          years: yearsB,
          returnRate:
            returnB,
        },
      ]
    );

  // CHART DATA
  const chartA =
    generateSipYearlyData(
      sipA,
      stepUpA,
      6,
      [
        {
          years: yearsA,
          returnRate:
            returnA,
        },
      ]
    );

  const chartB =
    generateSipYearlyData(
      sipB,
      stepUpB,
      6,
      [
        {
          years: yearsB,
          returnRate:
            returnB,
        },
      ]
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

      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-black dark:text-white mb-8">
          Compare Investment Scenarios
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* SCENARIO A */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow">

            <h2 className="text-2xl font-bold mb-6">
              Scenario A
            </h2>

            <div className="space-y-5">

              {/* SIP */}
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Monthly SIP (₹)
                </label>

                <input
                  type="number"
                  value={sipA}
                  onChange={(e) =>
                    setSipA(
                      Number(
                        e.target.value
                      )
                    )
                  }
                  placeholder="Enter monthly SIP"
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

              {/* RETURN */}
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Expected Return (%)
                </label>

                <input
                  type="number"
                  value={returnA}
                  onChange={(e) =>
                    setReturnA(
                      Number(
                        e.target.value
                      )
                    )
                  }
                  placeholder="Enter expected return"
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

              {/* YEARS */}
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Investment Duration (Years)
                </label>

                <input
                  type="number"
                  value={yearsA}
                  onChange={(e) =>
                    setYearsA(
                      Number(
                        e.target.value
                      )
                    )
                  }
                  placeholder="Enter duration"
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

              {/* STEP UP */}
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Annual Step-Up (%)
                </label>

                <input
                  type="number"
                  value={stepUpA}
                  onChange={(e) =>
                    setStepUpA(
                      Number(
                        e.target.value
                      )
                    )
                  }
                  placeholder="Enter annual step-up"
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

            </div>

            {/* RESULTS */}
            <div className="mt-6 bg-green-50 dark:bg-green-950 p-5 rounded-xl space-y-4">

              <div>
                <h3 className="text-gray-600 dark:text-gray-300">
                  Total Invested
                </h3>

                <p className="text-xl font-bold">
                  ₹{
                    formatIndianCurrency(
                      scenarioA.totalInvested
                    )
                  }
                </p>
              </div>

              <div>
                <h3 className="text-gray-600 dark:text-gray-300">
                  Wealth Gained
                </h3>

                <p className="text-xl font-bold text-green-700">
                  ₹{
                    formatIndianCurrency(
                      scenarioA.wealthGained
                    )
                  }
                </p>
              </div>

              <div>
                <h3 className="text-gray-600 dark:text-gray-300">
                  Future Value
                </h3>

                <p className="text-3xl font-bold">
                  ₹{
                    formatIndianCurrency(
                      scenarioA.totalValue
                    )
                  }
                </p>
              </div>

            </div>

          </div>

          {/* SCENARIO B */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow">

            <h2 className="text-2xl font-bold mb-6">
              Scenario B
            </h2>

            <div className="space-y-5">

              {/* SIP */}
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Monthly SIP (₹)
                </label>

                <input
                  type="number"
                  value={sipB}
                  onChange={(e) =>
                    setSipB(
                      Number(
                        e.target.value
                      )
                    )
                  }
                  placeholder="Enter monthly SIP"
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

              {/* RETURN */}
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Expected Return (%)
                </label>

                <input
                  type="number"
                  value={returnB}
                  onChange={(e) =>
                    setReturnB(
                      Number(
                        e.target.value
                      )
                    )
                  }
                  placeholder="Enter expected return"
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

              {/* YEARS */}
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Investment Duration (Years)
                </label>

                <input
                  type="number"
                  value={yearsB}
                  onChange={(e) =>
                    setYearsB(
                      Number(
                        e.target.value
                      )
                    )
                  }
                  placeholder="Enter duration"
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

              {/* STEP UP */}
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Annual Step-Up (%)
                </label>

                <input
                  type="number"
                  value={stepUpB}
                  onChange={(e) =>
                    setStepUpB(
                      Number(
                        e.target.value
                      )
                    )
                  }
                  placeholder="Enter annual step-up"
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

            </div>

            {/* RESULTS */}
            <div className="mt-6 bg-blue-50 dark:bg-blue-950 p-5 rounded-xl space-y-4">

              <div>
                <h3 className="text-gray-600 dark:text-gray-300">
                  Total Invested
                </h3>

                <p className="text-xl font-bold">
                  ₹{
                    formatIndianCurrency(
                      scenarioB.totalInvested
                    )
                  }
                </p>
              </div>

              <div>
                <h3 className="text-gray-600 dark:text-gray-300">
                  Wealth Gained
                </h3>

                <p className="text-xl font-bold text-green-700">
                  ₹{
                    formatIndianCurrency(
                      scenarioB.wealthGained
                    )
                  }
                </p>
              </div>

              <div>
                <h3 className="text-gray-600 dark:text-gray-300">
                  Future Value
                </h3>

                <p className="text-3xl font-bold">
                  ₹{
                    formatIndianCurrency(
                      scenarioB.totalValue
                    )
                  }
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* CHARTS */}
        <div className="mt-10 bg-white dark:bg-gray-900 p-6 rounded-xl shadow">

          <h2 className="text-2xl font-bold mb-8">
            Growth Comparison
          </h2>

          <div className="space-y-10">

            <div>
              <h3 className="text-xl font-semibold mb-3">
                Scenario A Growth
              </h3>

              <CompoundingChart
                data={chartA}
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                Scenario B Growth
              </h3>

              <CompoundingChart
                data={chartB}
              />
            </div>

            {/* INFO SECTION */}

            <div className="mt-14 card">

              <h2 className="text-4xl font-bold mb-8">
                Understanding SIP Scenario Comparison
              </h2>

              <div className="space-y-10">

                <div>

                  <h3 className="text-2xl font-semibold mb-3">
                    What does this calculator do?
                  </h3>

                  <p className="text-gray-700 dark:text-gray-300 leading-8">
                    This calculator compares two different SIP
                    investment scenarios to help understand how
                    investment amount, duration, returns, and
                    step-up strategies impact long-term wealth creation.
                  </p>

                </div>

                <div>

                  <h3 className="text-2xl font-semibold mb-3">
                    Why Compare SIP Scenarios?
                  </h3>

                  <ul className="list-disc ml-8 space-y-4 text-gray-700 dark:text-gray-300">

                    <li>
                      Compare aggressive vs conservative investing
                    </li>

                    <li>
                      Understand impact of higher SIP amounts
                    </li>

                    <li>
                      Compare different return assumptions
                    </li>

                    <li>
                      Analyze impact of investment duration
                    </li>

                    <li>
                      Compare step-up strategies
                    </li>

                  </ul>

                </div>

                <div className="bg-blue-500/10 rounded-2xl p-6">

                  <h3 className="text-2xl font-semibold mb-3">
                    Important Insight
                  </h3>

                  <p className="text-gray-700 dark:text-gray-300 leading-8">
                    Even small differences in return percentage
                    or investment duration can create very large
                    differences in final wealth because of compounding.
                  </p>

                </div>

                <div>

                  <h3 className="text-2xl font-semibold mb-3">
                    Key Things to Compare
                  </h3>

                  <ul className="list-disc ml-8 space-y-4 text-gray-700 dark:text-gray-300">

                    <li>
                      Total invested amount
                    </li>

                    <li>
                      Wealth gained
                    </li>

                    <li>
                      Final corpus
                    </li>

                    <li>
                      Inflation-adjusted value
                    </li>

                    <li>
                      Compounding speed over time
                    </li>

                  </ul>

                </div>

                <div className="bg-green-500/10 rounded-2xl p-6">

                  <h3 className="text-2xl font-semibold mb-3">
                    Pro Tip
                  </h3>

                  <p className="text-gray-700 dark:text-gray-300 leading-8">
                    Increasing SIP every year through step-up
                    investing is often more powerful than chasing
                    slightly higher market returns.
                  </p>

                </div>

                <div className="bg-yellow-500/10 rounded-2xl p-6">

                  <h3 className="text-2xl font-semibold mb-3">
                    Disclaimer
                  </h3>

                  <p className="text-gray-700 dark:text-gray-300 leading-8">
                    Investment projections are estimates based on
                    assumed returns and compounding. Actual market
                    performance may vary significantly.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}