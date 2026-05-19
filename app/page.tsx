"use client";

import Link from "next/link";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const calculatorCards = [

  {
    title: "SIP Calculator",
    href: "/sip",
    description:
      "Plan wealth creation with SIP investing.",
  },

  {
    title: "Lumpsum Calculator",
    href: "/lumpsum",
    description:
      "Calculate future value of one-time investments.",
  },

  {
    title: "FIRE Calculator",
    href: "/fire",
    description:
      "Estimate financial independence corpus.",
  },

  {
    title: "SWP Calculator",
    href: "/swp",
    description:
      "Plan retirement withdrawals systematically.",
  },

  {
    title: "Goal Planner",
    href: "/goal-planner",
    description:
      "Plan future goals like home, car, education.",
  },

  {
    title: "Dividend Calculator",
    href: "/dividend",
    description:
      "Estimate dividend income from stocks.",
  },

  {
    title: "Compare Scenarios",
    href: "/compare-scenarios",
    description:
      "Compare multiple investment strategies.",
  },

  {
    title: "XIRR Calculator",
    href: "/xirr",
    description:
      "Calculate actual annualized portfolio returns.",
  },

  {
    title: "Asset Allocation",
    href: "/asset-allocation",
    description:
      "Rebalance investment allocation intelligently.",
  },

  {
    title: "Net Worth Tracker",
    href: "/networth",
    description:
      "Track assets and liabilities over time.",
  },

  {
    title: "Monte Carlo",
    href: "/montecarlo",
    description:
      "Run market simulations for future outcomes.",
  },

  {
    title: "Stock CAGR",
    href: "/stock-cagr",
    description:
      "Calculate long-term stock growth rate.",
  },

  {
    title: "Tax Calculator",
    href: "/tax",
    description:
      "Estimate income tax under different regimes.",
  },

  {
    title: "Real Estate vs SIP",
    href: "/realestate-vs-sip",
    description:
      "Compare property investment with SIP investing.",
  },

  {
    title: "EMI Calculator",
    href: "/emi",
    description:
      "Calculate loan EMI and interest breakdown.",
  },

  {
    title: "Retirement Stress Test",
    href: "/retirement-stress",
    description:
      "Test retirement sustainability under different scenarios.",
  },

];

const assetAllocationData = [

  {
    name: "Equity",
    value: 55,
  },

  {
    name: "Debt",
    value: 25,
  },

  {
    name: "Gold",
    value: 10,
  },

  {
    name: "Cash",
    value: 10,
  },

];

const COLORS = [
  "#3b82f6",
  "#22c55e",
  "#eab308",
  "#ef4444",
];

export default function HomePage() {

  return (
    <main className="min-h-screen bg-[#020817] text-white p-6">

      <div className="max-w-7xl mx-auto">

        {/* HERO SECTION */}
        <div className="mb-12">

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-5">

            Finance Dashboard

          </h1>

          <p className="text-slate-400 text-xl max-w-3xl leading-9">

            Comprehensive investment, retirement,
            tax, and wealth planning tools for
            long-term financial growth.

          </p>

        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">

          {/* LEFT SECTION */}
          <div className="lg:col-span-2">

            {/* QUICK ACCESS */}
            <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 mb-8">

              <h2 className="text-3xl font-bold mb-8">

                Financial Calculators

              </h2>

              <div className="grid md:grid-cols-2 gap-5">

                {
                  calculatorCards.map(
                    (card) => (

                      <Link
                        key={card.href}
                        href={card.href}
                        className="bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-2xl p-6 transition-all"
                      >

                        <h3 className="text-2xl font-semibold mb-3">

                          {card.title}

                        </h3>

                        <p className="text-slate-400 leading-7">

                          {card.description}

                        </p>

                      </Link>
                    )
                  )
                }

              </div>

            </div>

          </div>

          {/* RIGHT SIDEBAR */}
          <div className="space-y-8">

            {/* FINANCIAL TIPS */}
            <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8">

              <h2 className="text-3xl font-bold mb-8">

                Financial Tips

              </h2>

              <div className="space-y-6 text-slate-300 leading-8">


                <div className="bg-yellow-500/10 p-5 rounded-2xl">

                  <p>

                    Long-term wealth is created through
                    discipline, patience, and consistency.

                  </p>

                </div>


                <div className="bg-blue-500/10 p-5 rounded-2xl">

                  <p>
                    Increase SIP yearly with salary growth.
                  </p>

                </div>

                <div className="bg-green-500/10 p-5 rounded-2xl">

                  <p>
                    Long-term investing benefits heavily
                    from compounding.
                  </p>

                </div>

                <div className="bg-yellow-500/10 p-5 rounded-2xl">

                  <p>
                    Inflation silently reduces purchasing
                    power over decades.
                  </p>

                </div>

                <div className="bg-red-500/10 p-5 rounded-2xl">

                  <p>
                    Emergency funds are critical before
                    aggressive investing.
                  </p>

                </div>

              </div>

            </div>

            {/* MARKET ASSUMPTIONS */}
            <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8">

              <h2 className="text-3xl font-bold mb-8">

                Market Assumptions

              </h2>

              <div className="space-y-5">

                <div className="flex justify-between">

                  <span className="text-slate-400">
                    Equity Return
                  </span>

                  <span className="font-semibold">
                    12%
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-slate-400">
                    Inflation
                  </span>

                  <span className="font-semibold">
                    6%
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-slate-400">
                    Debt Return
                  </span>

                  <span className="font-semibold">
                    7%
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-slate-400">
                    Safe Withdrawal Rate
                  </span>

                  <span className="font-semibold">
                    4%
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}