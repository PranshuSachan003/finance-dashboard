"use client";

import { useEffect, useState } from "react";

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
    mounted,
    setMounted,
  ] = useState(false);

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

  const [
    simulationData,
    setSimulationData,
  ] = useState<any>(null);

  useEffect(() => {

    setMounted(true);

  }, []);

  useEffect(() => {

    if (!mounted) return;

    const data =
      runMonteCarloSimulation(
        monthlyInvestment,
        years,
        expectedReturn,
        volatility,
        simulations
      );

    setSimulationData(data);

  }, [
    mounted,
    monthlyInvestment,
    years,
    expectedReturn,
    volatility,
    simulations,
  ]);

  const totalInvested =
    monthlyInvestment * 12 * years;

  if (!mounted || !simulationData) {

    return (
      <main
        className="
        min-h-screen
        bg-[#020817]
        text-white
        flex
        items-center
        justify-center
        "
      >

        <div
          className="
          text-xl
          text-slate-400
          "
        >

          Loading Monte Carlo Simulation...

        </div>

      </main>
    );
  }

  return (
    <main
      className="
      min-h-screen
      bg-[#020817]
      text-white
      "
    >

      {/* HERO SECTION */}
      <section
        className="
        relative
        overflow-hidden
        border-b
        border-slate-800
        bg-gradient-to-br
        from-slate-950
        via-[#020817]
        to-slate-900
        "
      >

        {/* GLOW EFFECTS */}
        <div
          className="
          absolute
          top-0
          left-0
          w-[500px]
          h-[500px]
          bg-purple-500/10
          blur-3xl
          rounded-full
          "
        />

        <div
          className="
          absolute
          bottom-0
          right-0
          w-[500px]
          h-[500px]
          bg-blue-500/10
          blur-3xl
          rounded-full
          "
        />

        <div
          className="
          relative
          max-w-7xl
          mx-auto
          px-6
          lg:px-10
          py-16
          lg:py-24
          "
        >

          {/* BADGE */}
          <div
            className="
            inline-flex
            items-center
            gap-2
            bg-purple-500/10
            border
            border-purple-500/20
            text-purple-300
            px-4
            py-2
            rounded-full
            text-sm
            font-semibold
            mb-6
            "
          >

            📈 Probability Based Investing

          </div>

          {/* TITLE */}
          <h1
            className="
            text-5xl
            lg:text-7xl
            font-black
            leading-tight
            tracking-tight
            max-w-4xl
            "
          >

            Monte Carlo

            <span
              className="
              block
              bg-gradient-to-r
              from-purple-400
              to-pink-400
              bg-clip-text
              text-transparent
              "
            >

              Simulation

            </span>

          </h1>

          {/* SUBTITLE */}
          <p
            className="
            mt-6
            text-lg
            lg:text-xl
            text-slate-400
            max-w-3xl
            leading-9
            "
          >

            Simulate thousands of possible market outcomes
            to understand best-case, worst-case, and median
            investment scenarios under real market volatility.

          </p>

          {/* HERO CARDS */}
          <div
            className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-5
            mt-12
            "
          >

            {/* MONTHLY SIP */}
            <div
              className="
              bg-slate-900/80
              border
              border-slate-800
              rounded-3xl
              p-6
              shadow-xl
              "
            >

              <p
                className="
                text-sm
                text-slate-400
                mb-2
                "
              >

                Monthly Investment

              </p>

              <h2
                className="
                text-3xl
                font-black
                text-white
                "
              >

                ₹{
                  formatIndianCurrency(
                    monthlyInvestment
                  )
                }

              </h2>

            </div>

            {/* YEARS */}
            <div
              className="
              bg-slate-900/80
              border
              border-slate-800
              rounded-3xl
              p-6
              shadow-xl
              "
            >

              <p
                className="
                text-sm
                text-slate-400
                mb-2
                "
              >

                Investment Horizon

              </p>

              <h2
                className="
                text-3xl
                font-black
                text-white
                "
              >

                {years} Years

              </h2>

            </div>

            {/* TOTAL INVESTED */}
            <div
              className="
              bg-slate-900/80
              border
              border-slate-800
              rounded-3xl
              p-6
              shadow-xl
              "
            >

              <p
                className="
                text-sm
                text-slate-400
                mb-2
                "
              >

                Total Invested

              </p>

              <h2
                className="
                text-3xl
                font-black
                text-white
                "
              >

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
      <section
        className="
        max-w-7xl
        mx-auto
        px-6
        lg:px-10
        py-14
        "
      >

        {/* INPUT + RESULTS */}
        <div
          className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-8
          "
        >

          {/* LEFT INPUTS */}
          <div
            className="
            bg-slate-900
            border
            border-slate-800
            rounded-3xl
            p-8
            shadow-xl
            "
          >

            <h2
              className="
              text-3xl
              font-bold
              mb-8
              "
            >

              Simulation Inputs

            </h2>

            <div className="space-y-8">

              {/* SIP */}
              <div>

                <div
                  className="
                  flex
                  justify-between
                  mb-3
                  "
                >

                  <label className="font-semibold">
                    Monthly SIP
                  </label>

                  <span
                    className="
                    text-purple-400
                    font-bold
                    "
                  >

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
                  className="
                  w-full
                  accent-purple-500
                  "
                />

              </div>

              {/* YEARS */}
              <div>

                <div
                  className="
                  flex
                  justify-between
                  mb-3
                  "
                >

                  <label className="font-semibold">
                    Duration
                  </label>

                  <span
                    className="
                    text-purple-400
                    font-bold
                    "
                  >

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
                  className="
                  w-full
                  accent-purple-500
                  "
                />

              </div>

              {/* RETURN */}
              <div>

                <div
                  className="
                  flex
                  justify-between
                  mb-3
                  "
                >

                  <label className="font-semibold">
                    Expected Return
                  </label>

                  <span
                    className="
                    text-purple-400
                    font-bold
                    "
                  >

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
                  className="
                  w-full
                  accent-purple-500
                  "
                />

              </div>

              {/* VOLATILITY */}
              <div>

                <div
                  className="
                  flex
                  justify-between
                  mb-3
                  "
                >

                  <label className="font-semibold">
                    Volatility
                  </label>

                  <span
                    className="
                    text-purple-400
                    font-bold
                    "
                  >

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
                  className="
                  w-full
                  accent-purple-500
                  "
                />

              </div>

              {/* SIMULATIONS */}
              <div>

                <div
                  className="
                  flex
                  justify-between
                  mb-3
                  "
                >

                  <label className="font-semibold">
                    Simulations
                  </label>

                  <span
                    className="
                    text-purple-400
                    font-bold
                    "
                  >

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
                  className="
                  w-full
                  accent-purple-500
                  "
                />

              </div>

            </div>

          </div>

          {/* RIGHT RESULTS */}
          <div
            className="
            grid
            grid-cols-1
            gap-6
            "
          >

            {/* BEST */}
            <div
              className="
              bg-gradient-to-br
              from-green-900/40
              to-slate-900
              border
              border-green-500/20
              rounded-3xl
              p-7
              shadow-xl
              "
            >

              <p className="text-green-300 mb-2">
                Best Case Scenario
              </p>

              <h2
                className="
                text-4xl
                font-black
                text-green-400
                mb-4
                "
              >

                ₹{
                  formatIndianCurrency(
                    simulationData.bestCase.finalValue
                  )
                }

              </h2>

            </div>

            {/* MEDIAN */}
            <div
              className="
              bg-gradient-to-br
              from-blue-900/40
              to-slate-900
              border
              border-blue-500/20
              rounded-3xl
              p-7
              shadow-xl
              "
            >

              <p className="text-blue-300 mb-2">
                Median Scenario
              </p>

              <h2
                className="
                text-4xl
                font-black
                text-blue-400
                mb-4
                "
              >

                ₹{
                  formatIndianCurrency(
                    simulationData.medianCase.finalValue
                  )
                }

              </h2>

            </div>

            {/* WORST */}
            <div
              className="
              bg-gradient-to-br
              from-red-900/40
              to-slate-900
              border
              border-red-500/20
              rounded-3xl
              p-7
              shadow-xl
              "
            >

              <p className="text-red-300 mb-2">
                Worst Case Scenario
              </p>

              <h2
                className="
                text-4xl
                font-black
                text-red-400
                mb-4
                "
              >

                ₹{
                  formatIndianCurrency(
                    simulationData.worstCase.finalValue
                  )
                }

              </h2>

            </div>

          </div>

        </div>

        {/* INFO SECTION */} <div className=" mt-14 bg-slate-900 border border-slate-800 rounded-3xl p-8 lg:p-12 shadow-xl " > <h2 className=" text-4xl font-black mb-10 " > Understanding Monte Carlo Simulation </h2> <div className="space-y-10"> {/* WHAT IS IT */} <div> <h3 className=" text-2xl font-bold mb-4 " > What is Monte Carlo Simulation? </h3> <p className=" text-slate-300 leading-9 text-lg " > Monte Carlo simulation models thousands of possible market outcomes using random return assumptions to estimate future investment performance under uncertainty. </p> </div> {/* WHY IT MATTERS */} <div> <h3 className=" text-2xl font-bold mb-4 " > Why It Matters? </h3> <p className=" text-slate-300 leading-9 text-lg " > Real-world investing is unpredictable. Markets rarely generate fixed returns every year. Monte Carlo analysis helps investors understand risk, volatility, uncertainty, and possible long-term outcomes. </p> </div> {/* INSIGHTS */} <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 " > <div className=" bg-purple-500/10 border border-purple-500/20 rounded-3xl p-6 " > <h3 className=" text-2xl font-bold mb-4 " > What It Helps Analyze </h3> <ul className=" space-y-3 text-slate-300 leading-8 " > <li>• Best-case outcomes</li> <li>• Worst-case outcomes</li> <li>• Median probabilities</li> <li>• Portfolio survival chances</li> <li>• Retirement success rates</li> </ul> </div> <div className=" bg-blue-500/10 border border-blue-500/20 rounded-3xl p-6 " > <h3 className=" text-2xl font-bold mb-4 " > Key Insight </h3> <p className=" text-slate-300 leading-8 " > Two portfolios with the same average return can generate very different outcomes depending on volatility and sequence of returns. </p> </div> </div> {/* USE CASES */} <div> <h3 className=" text-2xl font-bold mb-5 " > Common Use Cases </h3> <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 " > {["Retirement Planning", "FIRE Analysis", "Portfolio Risk Analysis", "Goal Probability Planning", "Withdrawal Sustainability", "Long-Term Wealth Forecasting",].map((item) => (<div key={item} className=" bg-slate-800 border border-slate-700 rounded-2xl p-5 font-medium " > {item} </div>))} </div> </div> {/* PRO TIP */} <div className=" bg-green-500/10 border border-green-500/20 rounded-3xl p-8 " > <h3 className=" text-2xl font-bold mb-4 " > Pro Tip </h3> <p className=" text-slate-300 leading-8 text-lg " > Long investment horizons, diversified portfolios, and disciplined SIP investing generally improve the probability of successful investment outcomes. </p> </div> {/* DISCLAIMER */} <div className=" bg-yellow-500/10 rounded-3xl p-8 border border-yellow-500/20 " > <h3 className=" text-2xl font-bold mb-4 " > Disclaimer </h3> <p className=" text-slate-300 leading-8 text-lg " > Monte Carlo simulations are based on probabilistic assumptions and modeled market volatility. Actual investment performance may differ significantly from simulated outcomes. </p> </div> </div> </div>

      </section>

    </main>
  );
}