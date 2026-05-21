"use client";

import { useState } from "react";

import ReturnPhases from "../../components/ReturnPhases";
import InvestmentPieChart from "../../components/InvestmentPieChart";
import CompoundingCurveChart from "../../components/CompoundingChart";

import {
  calculateSip,
  generateSipYearlyData,
} from "../../utils/calculations";

import {
  formatIndianCurrency,
} from "../../utils/formatCurrency";

import {
  exportToPdf,
} from "../../utils/exportToPdf";

export default function SipPage() {

  // MONTHLY SIP
  const [monthlyInvestment, setMonthlyInvestment] = useState(10000);

  // STEP UP %
  const [stepUp, setStepUp] = useState(10);

  // INFLATION %
  const [inflation, setInflation] = useState(6);

  // RETURN PHASES
  const [returnPhases, setReturnPhases] = useState([
    { years: 15, returnRate: 12 },
    { years: 10, returnRate: 10 },
  ]);

  // TOTAL YEARS
  const totalYears = returnPhases.reduce(
    (sum, phase) => sum + phase.years,
    0
  );

  // SIP SUMMARY
  const sipData = calculateSip(
    monthlyInvestment,
    stepUp,
    returnPhases
  );

  // YEARLY DATA FOR CHARTS
  const yearlyData = generateSipYearlyData(
    monthlyInvestment,
    stepUp,
    inflation,
    returnPhases
  );

  // ==========================================
  // ✅ NEW: Inflation Adjusted Future Value
  // ==========================================
  const inflationAdjustedValue =
    sipData.totalValue /
    Math.pow(1 + inflation / 100, totalYears);

  return (
    <main className="min-h-screen bg-[#020817] text-white p-6">

      <div id="sip-report" className="max-w-7xl mx-auto">

        {/* PAGE TITLE */}
        <h1 className="text-5xl font-bold mb-10">
          SIP Calculator
        </h1>

        {/* INPUT SECTION */}
        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 mb-10 shadow-xl">

          <h2 className="text-3xl font-bold mb-8">
            Investment Details
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* MONTHLY SIP */}
            <div>

              <label className="block mb-3 text-slate-300 text-lg">
                Monthly SIP Amount (₹)
              </label>

              <input
                type="number"
                value={monthlyInvestment}
                onChange={(e) =>
                  setMonthlyInvestment(Number(e.target.value))
                }
                className="w-full bg-slate-800 border border-slate-600 text-white p-4 rounded-2xl outline-none"
              />

            </div>

            {/* STEP UP */}
            <div>

              <label className="block mb-3 text-slate-300 text-lg">
                Annual Step-Up (%)
              </label>

              <input
                type="number"
                value={stepUp}
                onChange={(e) =>
                  setStepUp(Number(e.target.value))
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
                  setInflation(Number(e.target.value))
                }
                className="w-full bg-slate-800 border border-slate-600 text-white p-4 rounded-2xl outline-none"
              />

            </div>

            {/* TOTAL YEARS */}
            <div>

              <label className="block mb-3 text-slate-300 text-lg">
                Total Duration
              </label>

              <div className="bg-slate-800 border border-slate-600 p-4 rounded-2xl text-xl font-semibold">
                {totalYears} Years
              </div>

            </div>

          </div>

        </div>

        {/* RETURN PHASES */}
        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 mb-10 shadow-xl">

          <h2 className="text-3xl font-bold mb-8">
            Return Phases
          </h2>

          <ReturnPhases
            returnPhases={returnPhases}
            setReturnPhases={setReturnPhases}
          />

        </div>

        {/* RESULT SECTION */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">

          {/* TOTAL INVESTED */}
          <div className="bg-blue-100 text-slate-900 rounded-3xl p-8 shadow-xl">

            <h2 className="text-xl font-semibold mb-4">
              Total Invested
            </h2>

            <p className="text-4xl font-bold break-words">
              ₹{formatIndianCurrency(sipData.totalInvested)}
            </p>

          </div>

          {/* WEALTH GAINED */}
          <div className="bg-green-100 text-slate-900 rounded-3xl p-8 shadow-xl">

            <h2 className="text-xl font-semibold mb-4">
              Wealth Gained
            </h2>

            <p className="text-4xl font-bold text-green-700 break-words">
              ₹{formatIndianCurrency(sipData.wealthGained)}
            </p>

          </div>

          {/* FUTURE VALUE */}
          <div className="bg-yellow-100 text-slate-900 rounded-3xl p-8 shadow-xl">

            <h2 className="text-xl font-semibold mb-4">
              Future Value
            </h2>

            <p className="text-4xl font-bold break-words">
              ₹{formatIndianCurrency(sipData.totalValue)}
            </p>

          </div>

          {/* ✅ NEW: INFLATION ADJUSTED VALUE */}
          <div className="bg-purple-100 text-slate-900 rounded-3xl p-8 shadow-xl">

            <h2 className="text-xl font-semibold mb-4">
              Inflation Adjusted Value
            </h2>

            <p className="text-4xl font-bold text-purple-700 break-words">
              ₹{formatIndianCurrency(inflationAdjustedValue)}
            </p>

            <p className="text-sm mt-3 text-slate-700">
              (Today's purchasing power)
            </p>

          </div>

        </div>

        {/* PIE CHART */}
        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 mb-10 shadow-xl">

          <h2 className="text-3xl font-bold mb-8">
            Investment Breakdown
          </h2>

          <InvestmentPieChart
            invested={sipData.totalInvested}
            wealth={sipData.wealthGained}
          />

        </div>

        {/* COMPOUNDING CURVE */}
        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 mb-10 shadow-xl">

          <h2 className="text-3xl font-bold mb-8">
            Compounding Curve
          </h2>

          <CompoundingCurveChart data={yearlyData} />

        </div>

        {/* INFO SECTION */}
        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 shadow-xl">

          <h2 className="text-4xl font-bold mb-8">
            Understanding SIP Investing
          </h2>

          <div className="space-y-8 text-slate-300 leading-8">

            <div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                What is SIP?
              </h3>
              <p>
                SIP (Systematic Investment Plan)
                allows you to invest a fixed amount
                regularly into mutual funds or market-linked investments.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                Why SIP Works Well
              </h3>

              <ul className="list-disc ml-8 space-y-3">
                <li>Benefits from long-term compounding</li>
                <li>Reduces timing risk</li>
                <li>Builds investment discipline</li>
                <li>Affordable for salaried investors</li>
                <li>Creates large corpus over time</li>
              </ul>

            </div>

            <div className="bg-blue-500/10 p-6 rounded-2xl">
              <h3 className="text-2xl font-semibold text-white mb-3">
                Step-Up SIP Power
              </h3>
              <p>
                Increasing SIP annually significantly boosts long-term wealth.
              </p>
            </div>

            <div className="bg-orange-500/10 p-6 rounded-2xl">
              <h3 className="text-2xl font-semibold text-white mb-3">
                Inflation Impact
              </h3>
              <p>
                Inflation reduces purchasing power over time, making real returns important.
              </p>
            </div>

            <div className="bg-yellow-500/10 p-6 rounded-2xl">
              <h3 className="text-2xl font-semibold text-white mb-3">
                Disclaimer
              </h3>
              <p>
                Returns are assumptions and may vary with market conditions.
              </p>
            </div>

          </div>

        </div>

        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 shadow-xl">
          {/* FAQ + SEO SECTION */}

          <div className="mt-16 space-y-12">

            {/* FAQ */}

            <div>

              <h2 className="text-4xl font-bold mb-8">
                Frequently Asked Questions
              </h2>

              <div className="space-y-8">

                <div>

                  <h3 className="text-2xl font-semibold text-white mb-3">
                    Is SIP safe for long-term investing?
                  </h3>

                  <p className="text-slate-300 leading-8">
                    SIPs invested into diversified mutual funds
                    are generally considered suitable for long-term
                    wealth creation. However, market-linked investments
                    always carry risk and returns are never guaranteed.
                  </p>

                </div>

                <div>

                  <h3 className="text-2xl font-semibold text-white mb-3">
                    Can SIP make you a crorepati?
                  </h3>

                  <p className="text-slate-300 leading-8">
                    Yes. Consistent SIP investing over long periods
                    combined with compounding can create substantial wealth.
                    For example, a ₹10,000 monthly SIP with annual step-up
                    can potentially grow into crores over 25-30 years.
                  </p>

                </div>

                <div>

                  <h3 className="text-2xl font-semibold text-white mb-3">
                    What is the ideal SIP duration?
                  </h3>

                  <p className="text-slate-300 leading-8">
                    Longer durations usually provide better compounding benefits.
                    SIP investing for 10, 15, or 20+ years significantly improves
                    wealth creation potential compared to short-term investing.
                  </p>

                </div>

                <div>

                  <h3 className="text-2xl font-semibold text-white mb-3">
                    Does inflation affect SIP returns?
                  </h3>

                  <p className="text-slate-300 leading-8">
                    Yes. Inflation reduces purchasing power over time.
                    That is why inflation-adjusted returns are important
                    while planning long-term financial goals.
                  </p>

                </div>

              </div>

            </div>

            {/* COMMON MISTAKES */}

            <div>

              <h2 className="text-4xl font-bold mb-8">
                Common SIP Investing Mistakes
              </h2>

              <div className="grid md:grid-cols-2 gap-6">

                <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6">

                  <h3 className="text-2xl font-semibold text-red-300 mb-3">
                    Stopping SIP During Market Crash
                  </h3>

                  <p className="text-slate-300 leading-8">
                    Many investors stop investing during market falls.
                    However, crashes often provide opportunities to accumulate
                    more units at lower prices.
                  </p>

                </div>

                <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-6">

                  <h3 className="text-2xl font-semibold text-orange-300 mb-3">
                    Expecting Quick Returns
                  </h3>

                  <p className="text-slate-300 leading-8">
                    SIP works best over long periods. Wealth creation through
                    compounding takes time and patience.
                  </p>

                </div>

                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-6">

                  <h3 className="text-2xl font-semibold text-yellow-300 mb-3">
                    Ignoring Inflation
                  </h3>

                  <p className="text-slate-300 leading-8">
                    Future value alone can be misleading.
                    Inflation-adjusted purchasing power matters more.
                  </p>

                </div>

                <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-6">

                  <h3 className="text-2xl font-semibold text-blue-300 mb-3">
                    Not Increasing SIP Amount
                  </h3>

                  <p className="text-slate-300 leading-8">
                    Step-up SIPs can dramatically improve long-term corpus
                    by increasing investments alongside salary growth.
                  </p>

                </div>

              </div>

            </div>

            {/* SIP VS FD */}

            <div className="bg-slate-800 rounded-3xl p-8">

              <h2 className="text-4xl font-bold mb-8">
                SIP vs Fixed Deposit (FD)
              </h2>

              <div className="space-y-6 text-slate-300 leading-8">

                <p>
                  Fixed Deposits provide stable and predictable returns,
                  but long-term wealth creation may be limited because
                  inflation reduces real purchasing power.
                </p>

                <p>
                  SIP investments in equity mutual funds are market-linked
                  and volatile in the short term, but historically they
                  have generated higher long-term returns compared to
                  traditional fixed-income instruments.
                </p>

                <p>
                  SIPs are generally more suitable for long-term goals like:
                </p>

                <ul className="list-disc ml-8 space-y-3">

                  <li>Retirement planning</li>

                  <li>Children education</li>

                  <li>Financial independence</li>

                  <li>Long-term wealth creation</li>

                </ul>

              </div>

            </div>

            {/* COMPOUNDING INSIGHT */}

            <div className="bg-green-500/10 border border-green-500/20 rounded-3xl p-8">

              <h2 className="text-4xl font-bold mb-6">
                Power of Long-Term Compounding
              </h2>

              <p className="text-slate-300 leading-8 text-lg">

                Long-term investing is one of the most powerful wealth-building
                strategies. Even modest monthly SIP amounts can grow significantly
                over decades because returns themselves start generating additional returns.

              </p>

              <p className="text-slate-300 leading-8 text-lg mt-6">

                Time in the market is usually more important than trying
                to perfectly time market entries and exits.

              </p>

            </div>

            {/* RELATED CALCULATORS */}

            <div>

              <h2 className="text-4xl font-bold mb-8">
                Explore More Calculators
              </h2>

              <div className="flex flex-wrap gap-4">

                <a
                  href="/fire"
                  className="bg-slate-800 hover:bg-slate-700 px-6 py-4 rounded-2xl transition-colors"
                >
                  FIRE Calculator
                </a>

                <a
                  href="/xirr"
                  className="bg-slate-800 hover:bg-slate-700 px-6 py-4 rounded-2xl transition-colors"
                >
                  XIRR Calculator
                </a>

                <a
                  href="/goal-planner"
                  className="bg-slate-800 hover:bg-slate-700 px-6 py-4 rounded-2xl transition-colors"
                >
                  Goal Planner
                </a>

                <a
                  href="/retirement-stress"
                  className="bg-slate-800 hover:bg-slate-700 px-6 py-4 rounded-2xl transition-colors"
                >
                  Retirement Stress Test
                </a>

              </div>

            </div>

          </div>
        </div>

      </div>

    </main>
  );
}