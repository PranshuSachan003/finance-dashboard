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
  Legend,
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

  const totalInvested =
    monthlyInvestment * 12 * years;

  return (
    <main className="
min-h-screen
bg-gray-100
dark:bg-black
text-black
dark:text-white
">

      {/* HERO SECTION */}
      <section className="
relative
overflow-hidden
border-b
border-gray-200
dark:border-gray-800
bg-gradient-to-br
from-purple-100
via-white
to-pink-100
dark:from-purple-950/40
dark:via-black
dark:to-pink-950/20
">

        <div className="
absolute
inset-0
bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.15),transparent_30%)]
dark:bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.25),transparent_30%)]
" />

        <div className="
relative
max-w-7xl
mx-auto
px-6
lg:px-10
py-16
lg:py-24
">

          <div className="
inline-flex
items-center
gap-2
bg-purple-500/10
text-purple-700
dark:text-purple-300
px-4
py-2
rounded-full
text-sm
font-semibold
mb-6
">

            📈 Probability Based Investing

          </div>

          <h1 className="
text-5xl
lg:text-7xl
font-black
leading-tight
tracking-tight
max-w-4xl
">

            Monte Carlo
            <span className="
block
bg-gradient-to-r
from-purple-600
to-pink-600
bg-clip-text
text-transparent
">
              Simulation
            </span>

          </h1>

          <p className="
mt-6
text-lg
lg:text-xl
text-gray-700
dark:text-gray-300
max-w-3xl
leading-9
">

            Simulate thousands of possible market outcomes to
            understand best-case, worst-case, and median
            investment scenarios under market volatility.

          </p>

          {/* HERO CARDS */}
          <div className="
grid
grid-cols-1
md:grid-cols-3
gap-5
mt-12
">

            <div className="
bg-white/70
dark:bg-gray-900/70
backdrop-blur-xl
border
border-white/20
dark:border-gray-800
rounded-3xl
p-6
shadow-xl
">

              <p className="
text-sm
text-gray-500
dark:text-gray-400
mb-2
">
                Monthly Investment
              </p>

              <h2 className="
text-3xl
font-black
">
                ₹{
                  formatIndianCurrency(
                    monthlyInvestment
                  )
                }
              </h2>

            </div>

            <div className="
bg-white/70
dark:bg-gray-900/70
backdrop-blur-xl
border
border-white/20
dark:border-gray-800
rounded-3xl
p-6
shadow-xl
">

              <p className="
text-sm
text-gray-500
dark:text-gray-400
mb-2
">
                Investment Horizon
              </p>

              <h2 className="
text-3xl
font-black
">
                {years} Years
              </h2>

            </div>

            <div className="
bg-white/70
dark:bg-gray-900/70
backdrop-blur-xl
border
border-white/20
dark:border-gray-800
rounded-3xl
p-6
shadow-xl
">

              <p className="
text-sm
text-gray-500
dark:text-gray-400
mb-2
">
                Total Invested
              </p>

              <h2 className="
text-3xl
font-black
">
                ₹{
                  formatIndianCurrency(
                    totalInvested
                  )
                }
              </h2>

            </div>

          </div>

        </div>

      </section>

      {/* MAIN SECTION */}
      <section className="
max-w-7xl
mx-auto
px-6
lg:px-10
py-14
">

        {/* INPUTS */}
        <div className="
grid
grid-cols-1
lg:grid-cols-2
gap-8
">

          {/* LEFT */}
          <div className="
bg-white
dark:bg-gray-900
border
border-gray-200
dark:border-gray-800
rounded-3xl
p-8
shadow-sm
">

            <h2 className="
text-3xl
font-bold
mb-8
">
              Simulation Inputs
            </h2>

            <div className="space-y-7">

              {/* SIP */}
              <div>

                <div className="
flex
justify-between
mb-3
">

                  <label className="font-semibold">
                    Monthly SIP
                  </label>

                  <span className="
text-purple-600
font-bold
">
                    ₹{
                      formatIndianCurrency(
                        monthlyInvestment
                      )
                    }
                  </span>

                </div>

                <input
                  type="range"
                  min="1000"
                  max="500000"
                  step="1000"
                  value={monthlyInvestment}
                  onChange={(e) =>
                    setMonthlyInvestment(
                      Number(e.target.value)
                    )
                  }
                  className="w-full"
                />

              </div>

              {/* YEARS */}
              <div>

                <div className="
flex
justify-between
mb-3
">

                  <label className="font-semibold">
                    Duration
                  </label>

                  <span className="
text-purple-600
font-bold
">
                    {years} Years
                  </span>

                </div>

                <input
                  type="range"
                  min="1"
                  max="40"
                  step="1"
                  value={years}
                  onChange={(e) =>
                    setYears(
                      Number(e.target.value)
                    )
                  }
                  className="w-full"
                />

              </div>

              {/* RETURN */}
              <div>

                <div className="
flex
justify-between
mb-3
">

                  <label className="font-semibold">
                    Expected Return
                  </label>

                  <span className="
text-purple-600
font-bold
">
                    {expectedReturn}%
                  </span>

                </div>

                <input
                  type="range"
                  min="1"
                  max="25"
                  step="1"
                  value={expectedReturn}
                  onChange={(e) =>
                    setExpectedReturn(
                      Number(e.target.value)
                    )
                  }
                  className="w-full"
                />

              </div>

              {/* VOLATILITY */}
              <div>

                <div className="
flex
justify-between
mb-3
">

                  <label className="font-semibold">
                    Volatility
                  </label>

                  <span className="
text-purple-600
font-bold
">
                    {volatility}%
                  </span>

                </div>

                <input
                  type="range"
                  min="1"
                  max="50"
                  step="1"
                  value={volatility}
                  onChange={(e) =>
                    setVolatility(
                      Number(e.target.value)
                    )
                  }
                  className="w-full"
                />

              </div>

              {/* SIMULATIONS */}
              <div>

                <div className="
flex
justify-between
mb-3
">

                  <label className="font-semibold">
                    Simulations
                  </label>

                  <span className="
text-purple-600
font-bold
">
                    {simulations}
                  </span>

                </div>

                <input
                  type="range"
                  min="10"
                  max="1000"
                  step="10"
                  value={simulations}
                  onChange={(e) =>
                    setSimulations(
                      Number(e.target.value)
                    )
                  }
                  className="w-full"
                />

              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="
grid
grid-cols-1
gap-6
">

            {/* BEST */}
            <div className="
bg-gradient-to-br
from-green-500
to-emerald-700
rounded-3xl
p-7
text-white
shadow-xl
">

              <p className="
text-green-100
mb-2
">
                Best Case Scenario
              </p>

              <h2 className="
text-4xl
font-black
mb-4
">
                ₹{
                  formatIndianCurrency(
                    simulationData.bestCase.finalValue
                  )
                }
              </h2>

              <p className="
text-green-100
leading-7
">
                Represents optimistic market performance
                over the selected investment period.
              </p>

            </div>

            {/* MEDIAN */}
            <div className="
bg-gradient-to-br
from-blue-500
to-indigo-700
rounded-3xl
p-7
text-white
shadow-xl
">

              <p className="
text-blue-100
mb-2
">
                Median Scenario
              </p>

              <h2 className="
text-4xl
font-black
mb-4
">
                ₹{
                  formatIndianCurrency(
                    simulationData.medianCase.finalValue
                  )
                }
              </h2>

              <p className="
text-blue-100
leading-7
">
                Represents the most probable investment
                outcome based on simulation assumptions.
              </p>

            </div>

            {/* WORST */}
            <div className="
bg-gradient-to-br
from-red-500
to-rose-700
rounded-3xl
p-7
text-white
shadow-xl
">

              <p className="
text-red-100
mb-2
">
                Worst Case Scenario
              </p>

              <h2 className="
text-4xl
font-black
mb-4
">
                ₹{
                  formatIndianCurrency(
                    simulationData.worstCase.finalValue
                  )
                }
              </h2>

              <p className="
text-red-100
leading-7
">
                Represents unfavorable market conditions
                and prolonged volatility periods.
              </p>

            </div>

          </div>

        </div>

        {/* CHART */}
        <div className="
mt-12
bg-white
dark:bg-gray-900
border
border-gray-200
dark:border-gray-800
rounded-3xl
p-8
shadow-sm
">

          <div className="
flex
flex-col
lg:flex-row
lg:items-center
lg:justify-between
mb-10
gap-4
">

            <div>

              <h2 className="
text-3xl
font-bold
mb-2
">
                Simulation Curves
              </h2>

              <p className="
text-gray-600
dark:text-gray-400
leading-7
">
                Compare how different market conditions
                can impact long-term wealth creation.
              </p>

            </div>

          </div>

          <div className="h-[520px]">

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

                <Legend />

                {/* BEST */}
                <Line
                  name="Best Case"
                  data={
                    simulationData.bestCase.yearlyData
                  }
                  type="monotone"
                  dataKey="value"
                  strokeWidth={3}
                  dot={false}
                  stroke="#16a34a"
                />

                {/* MEDIAN */}
                <Line
                  name="Median Case"
                  data={
                    simulationData.medianCase.yearlyData
                  }
                  type="monotone"
                  dataKey="value"
                  strokeWidth={3}
                  dot={false}
                  stroke="#2563eb"
                />

                {/* WORST */}
                <Line
                  name="Worst Case"
                  data={
                    simulationData.worstCase.yearlyData
                  }
                  type="monotone"
                  dataKey="value"
                  strokeWidth={3}
                  dot={false}
                  stroke="#dc2626"
                />

              </LineChart>

            </ResponsiveContainer>

          </div>

        </div>

        {/* INFO SECTION */}
        <div className="
mt-14
bg-white
dark:bg-gray-900
border
border-gray-200
dark:border-gray-800
rounded-3xl
p-8
lg:p-12
shadow-sm
">

          <h2 className="
text-4xl
font-black
mb-10
">
            Understanding Monte Carlo Simulation
          </h2>

          <div className="space-y-10">

            <div>

              <h3 className="
text-2xl
font-bold
mb-4
">
                What is Monte Carlo Simulation?
              </h3>

              <p className="
text-gray-700
dark:text-gray-300
leading-9
text-lg
">
                Monte Carlo simulation models thousands of
                possible market outcomes using random return
                assumptions to estimate future investment
                performance under uncertainty.
              </p>

            </div>

            <div>

              <h3 className="
text-2xl
font-bold
mb-4
">
                Why It Matters?
              </h3>

              <p className="
text-gray-700
dark:text-gray-300
leading-9
text-lg
">
                Real-world investing is unpredictable.
                Markets rarely generate fixed returns every
                year. Monte Carlo analysis helps investors
                understand risk, volatility, uncertainty,
                and possible long-term outcomes.
              </p>

            </div>

            {/* INSIGHTS */}
            <div className="
grid
grid-cols-1
md:grid-cols-2
gap-6
">

              <div className="
bg-purple-500/10
rounded-3xl
p-6
">

                <h3 className="
text-2xl
font-bold
mb-4
">
                  What It Helps Analyze
                </h3>

                <ul className="
space-y-3
text-gray-700
dark:text-gray-300
leading-8
">

                  <li>• Best-case outcomes</li>
                  <li>• Worst-case outcomes</li>
                  <li>• Median probabilities</li>
                  <li>• Portfolio survival chances</li>
                  <li>• Retirement success rates</li>

                </ul>

              </div>

              <div className="
bg-blue-500/10
rounded-3xl
p-6
">

                <h3 className="
text-2xl
font-bold
mb-4
">
                  Key Insight
                </h3>

                <p className="
text-gray-700
dark:text-gray-300
leading-8
">

                  Two portfolios with the same average
                  return can generate very different
                  outcomes depending on volatility and
                  sequence of returns.

                </p>

              </div>

            </div>

            {/* USE CASES */}
            <div>

              <h3 className="
text-2xl
font-bold
mb-5
">
                Common Use Cases
              </h3>

              <div className="
grid
grid-cols-1
md:grid-cols-2
gap-5
">

                {
                  [
                    "Retirement Planning",
                    "FIRE Analysis",
                    "Portfolio Risk Analysis",
                    "Goal Probability Planning",
                    "Withdrawal Sustainability",
                    "Long-Term Wealth Forecasting",
                  ].map((item) => (

                    <div
                      key={item}
                      className="
bg-gray-100
dark:bg-gray-800
rounded-2xl
p-5
font-medium
"
                    >

                      {item}

                    </div>

                  ))
                }

              </div>

            </div>

            {/* PRO TIP */}
            <div className="
bg-green-500/10
rounded-3xl
p-8
">

              <h3 className="
text-2xl
font-bold
mb-4
">
                Pro Tip
              </h3>

              <p className="
text-gray-700
dark:text-gray-300
leading-8
text-lg
">

                Long investment horizons, diversified
                portfolios, and disciplined SIP investing
                generally improve the probability of
                successful investment outcomes.

              </p>

            </div>

            {/* DISCLAIMER */}
            <div className="
bg-yellow-500/10
rounded-3xl
p-8
border
border-yellow-500/20
">

              <h3 className="
text-2xl
font-bold
mb-4
">
                Disclaimer
              </h3>

              <p className="
text-gray-700
dark:text-gray-300
leading-8
text-lg
">

                Monte Carlo simulations are based on
                probabilistic assumptions and modeled
                market volatility. Actual investment
                performance may differ significantly
                from simulated outcomes.

              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}