"use client";

import Link from "next/link";

const calculatorCards = [
  {
    title: "SIP Calculator",
    href: "/sip",
    description: "Plan wealth creation with SIP investing.",
  },
  {
    title: "Lumpsum Calculator",
    href: "/lumpsum",
    description: "Calculate future value of one-time investments.",
  },
  {
    title: "FIRE Calculator",
    href: "/fire",
    description: "Estimate financial independence corpus.",
  },
  {
    title: "SWP Calculator",
    href: "/swp",
    description: "Plan retirement withdrawals systematically.",
  },
  {
    title: "Goal Planner",
    href: "/goal-planner",
    description: "Plan future goals like home, car, education.",
  },
  {
    title: "Dividend Calculator",
    href: "/dividend",
    description: "Estimate dividend income from stocks.",
  },
  {
    title: "Compare Scenarios",
    href: "/compare-scenarios",
    description: "Compare multiple investment strategies.",
  },
  {
    title: "XIRR Calculator",
    href: "/xirr",
    description: "Calculate actual annualized portfolio returns.",
  },
  {
    title: "Asset Allocation",
    href: "/asset-allocation",
    description: "Rebalance investment allocation intelligently.",
  },
  {
    title: "Net Worth Tracker",
    href: "/networth",
    description: "Track assets and liabilities over time.",
  },
  {
    title: "Monte Carlo",
    href: "/montecarlo",
    description: "Run market simulations for future outcomes.",
  },
  {
    title: "Stock CAGR",
    href: "/stock-cagr",
    description: "Calculate long-term stock growth rate.",
  },
  {
    title: "Tax Calculator",
    href: "/tax",
    description: "Estimate income tax under different regimes.",
  },
  {
    title: "Real Estate vs SIP",
    href: "/realestate-vs-sip",
    description: "Compare property investment with SIP investing.",
  },
  {
    title: "EMI Calculator",
    href: "/emi",
    description: "Calculate loan EMI and interest breakdown.",
  },
  {
    title: "Retirement Stress Test",
    href: "/retirement-stress",
    description:
      "Test retirement sustainability under different scenarios.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#020817] text-white px-4 py-6 md:p-6 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">

        {/* HERO */}
        <div className="mb-10 md:mb-12">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-5 leading-tight">
            Finance Dashboard
          </h1>

          <p className="text-slate-400 text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed">
            Comprehensive investment, retirement, tax, and wealth planning tools for
            long-term financial growth.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-10">

          {/* LEFT */}
          <div className="lg:col-span-2">

            <div className="bg-slate-900 border border-slate-700 rounded-2xl md:rounded-3xl p-4 md:p-8">

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 md:mb-8">
                Financial Calculators
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">

                {calculatorCards.map((card) => (
                  <Link
                    key={card.href}
                    href={card.href}
                    className="
                      bg-slate-800 hover:bg-slate-700
                      border border-slate-700
                      rounded-xl md:rounded-2xl
                      p-4 md:p-6
                      transition-all
                      min-w-0
                    "
                  >
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 md:mb-3 leading-tight break-words">
                      {card.title}
                    </h3>

                    <p className="text-slate-400 text-sm md:text-base leading-relaxed break-words">
                      {card.description}
                    </p>
                  </Link>
                ))}

              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-6 md:space-y-8">

            <div className="bg-slate-900 border border-slate-700 rounded-2xl md:rounded-3xl p-4 md:p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 md:mb-8">
                Financial Tips
              </h2>

              <div className="space-y-4 md:space-y-6 text-slate-300 leading-relaxed text-sm md:text-base">

                <div className="bg-yellow-500/10 p-4 rounded-xl">
                  Long-term wealth is created through discipline, patience, and consistency.
                </div>

                <div className="bg-blue-500/10 p-4 rounded-xl">
                  Increase SIP yearly with salary growth.
                </div>

                <div className="bg-green-500/10 p-4 rounded-xl">
                  Long-term investing benefits heavily from compounding.
                </div>

                <div className="bg-yellow-500/10 p-4 rounded-xl">
                  Inflation silently reduces purchasing power over decades.
                </div>

                <div className="bg-red-500/10 p-4 rounded-xl">
                  Emergency funds are critical before aggressive investing.
                </div>

              </div>
            </div>

            <div className="bg-slate-900 border border-slate-700 rounded-2xl md:rounded-3xl p-4 md:p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 md:mb-8">
                Market Assumptions
              </h2>

              <div className="space-y-4 text-sm md:text-base">

                <div className="flex justify-between">
                  <span className="text-slate-400">Equity Return</span>
                  <span className="font-semibold">12%</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-400">Inflation</span>
                  <span className="font-semibold">6%</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-400">Debt Return</span>
                  <span className="font-semibold">7%</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-400">Safe Withdrawal Rate</span>
                  <span className="font-semibold">4%</span>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </main>
  );
}