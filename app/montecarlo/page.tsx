"use client";

import { useState } from "react";

import {
  runMonteCarloSimulation,
} from "../../utils/calculations";

import {
  formatIndianCurrency,
} from "../../utils/formatCurrency";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function MonteCarloPage() {

  const [
    monthlyInvestment,
    setMonthlyInvestment,
  ] = useState(10000);

  const [
    years,
    setYears,
  ] = useState(20);

  const [
    expectedReturn,
    setExpectedReturn,
  ] = useState(12);

  const [
    volatility,
    setVolatility,
  ] = useState(15);

  const [
    simulations,
    setSimulations,
  ] = useState(100);

  // RUN SIMULATION
  const simulationData =
    runMonteCarloSimulation(
      monthlyInvestment,
      years,
      expectedReturn,
      volatility,
      simulations
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

      <div className="max-w-6xl mx-auto bg-white dark:bg-gray-900 p-6 rounded-xl shadow">

        <h1 className="text-4xl font-bold text-black dark:text-white mb-8">
          Monte Carlo Simulation
        </h1>

        {/* INPUTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* SIP */}
          <div>
            <label className="block mb-2 font-medium">
              Monthly SIP (₹)
            </label>

            <input
              type="number"
              value={monthlyInvestment}
              onChange={(e) =>
                setMonthlyInvestment(
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

          {/* YEARS */}
          <div>
            <label className="block mb-2 font-medium">
              Investment Duration
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
            <label className="block mb-2 font-medium">
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

          {/* VOLATILITY */}
          <div>
            <label className="block mb-2 font-medium">
              Volatility (%)
            </label>

            <input
              type="number"
              value={volatility}
              onChange={(e) =>
                setVolatility(
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

          {/* SIMULATIONS */}
          <div>
            <label className="block mb-2 font-medium">
              Simulations
            </label>

            <input
              type="number"
              value={simulations}
              onChange={(e) =>
                setSimulations(
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

        </div>

        {/* RESULTS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

          {/* BEST */}
          <div className="bg-green-50 dark:bg-green-950 p-5 rounded-xl">

            <h2 className="text-gray-600 dark:text-gray-300 mb-2">
              Best Case
            </h2>

            <p className="text-3xl font-bold text-green-700">
              ₹{
                formatIndianCurrency(
                  simulationData.bestCase.finalValue
                )
              }
            </p>

          </div>

          {/* MEDIAN */}
          <div className="bg-blue-50 dark:bg-blue-950 p-5 rounded-xl">

            <h2 className="text-gray-600 dark:text-gray-300 mb-2">
              Median Case
            </h2>

            <p className="text-3xl font-bold text-blue-700">
              ₹{
                formatIndianCurrency(
                  simulationData.medianCase.finalValue
                )
              }
            </p>

          </div>

          {/* WORST */}
          <div className="bg-red-50 p-5 rounded-xl">

            <h2 className="text-gray-600 dark:text-gray-300 mb-2">
              Worst Case
            </h2>

            <p className="text-3xl font-bold text-red-700">
              ₹{
                formatIndianCurrency(
                  simulationData.worstCase.finalValue
                )
              }
            </p>

          </div>

        </div>

        {/* CHART */}
        <div className="mt-12">

          <h2 className="text-2xl font-bold mb-6">
            Simulation Curves
          </h2>

          <div className="h-[500px]">

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <LineChart>

                <CartesianGrid
                  strokeDasharray="3 3"
                />

                <XAxis
                  dataKey="year"
                  type="number"
                />

                <YAxis />

                <Tooltip
                  formatter={(value) =>
                    `₹${formatIndianCurrency(
                      Number(value)
                    )}`
                  }
                />

                {/* BEST */}
                <Line
                  data={
                    simulationData.bestCase.yearlyData
                  }
                  type="monotone"
                  dataKey="value"
                  dot={false}
                />

                {/* MEDIAN */}
                <Line
                  data={
                    simulationData.medianCase.yearlyData
                  }
                  type="monotone"
                  dataKey="value"
                  dot={false}
                />

                {/* WORST */}
                <Line
                  data={
                    simulationData.worstCase.yearlyData
                  }
                  type="monotone"
                  dataKey="value"
                  dot={false}
                />

              </LineChart>

            </ResponsiveContainer>

          </div>

        </div>
        {/* INFO SECTION */}

        <div className="mt-14 card">

          <h2 className="text-4xl font-bold mb-8">
            Understanding Monte Carlo Simulation
          </h2>

          <div className="space-y-10">

            <div>

              <h3 className="text-2xl font-semibold mb-3">
                What is Monte Carlo Simulation?
              </h3>

              <p className="text-gray-700 dark:text-gray-300 leading-8">
                Monte Carlo simulation models thousands of
                possible market outcomes using random returns
                to estimate the probability of investment success.
              </p>

            </div>

            <div>

              <h3 className="text-2xl font-semibold mb-3">
                Why Monte Carlo Matters?
              </h3>

              <p className="text-gray-700 dark:text-gray-300 leading-8">
                Real markets do not generate fixed returns
                every year. Monte Carlo simulation helps
                understand uncertainty, volatility, and
                risk in long-term investing.
              </p>

            </div>

            <div>

              <h3 className="text-2xl font-semibold mb-3">
                What the Simulation Shows
              </h3>

              <ul className="list-disc ml-8 space-y-4 text-gray-700 dark:text-gray-300">

                <li>
                  Best-case outcomes
                </li>

                <li>
                  Worst-case outcomes
                </li>

                <li>
                  Average expected outcomes
                </li>

                <li>
                  Probability of reaching goals
                </li>

                <li>
                  Risk of portfolio failure
                </li>

              </ul>

            </div>

            <div className="bg-blue-500/10 rounded-2xl p-6">

              <h3 className="text-2xl font-semibold mb-3">
                Important Insight
              </h3>

              <p className="text-gray-700 dark:text-gray-300 leading-8">
                Two portfolios with the same average return
                can produce very different outcomes depending
                on volatility and sequence of returns.
              </p>

            </div>

            <div>

              <h3 className="text-2xl font-semibold mb-3">
                Common Uses of Monte Carlo Simulation
              </h3>

              <ul className="list-disc ml-8 space-y-4 text-gray-700 dark:text-gray-300">

                <li>
                  Retirement planning
                </li>

                <li>
                  FIRE analysis
                </li>

                <li>
                  Portfolio risk analysis
                </li>

                <li>
                  Financial goal probability analysis
                </li>

                <li>
                  Safe withdrawal testing
                </li>

              </ul>

            </div>

            <div className="bg-green-500/10 rounded-2xl p-6">

              <h3 className="text-2xl font-semibold mb-3">
                Pro Tip
              </h3>

              <p className="text-gray-700 dark:text-gray-300 leading-8">
                Long investment horizons and diversified
                portfolios generally improve the probability
                of successful outcomes.
              </p>

            </div>

            <div className="bg-yellow-500/10 rounded-2xl p-6">

              <h3 className="text-2xl font-semibold mb-3">
                Disclaimer
              </h3>

              <p className="text-gray-700 dark:text-gray-300 leading-8">
                Monte Carlo simulations are based on probabilistic
                assumptions and historical-style volatility.
                Actual market outcomes may differ significantly.
              </p>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}