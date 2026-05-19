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
  const [
    monthlyInvestment,
    setMonthlyInvestment,
  ] = useState(10000);

  // STEP UP %
  const [stepUp, setStepUp] =
    useState(10);

  // INFLATION %
  const [
    inflation,
    setInflation,
  ] = useState(6);

  // RETURN PHASES
  const [
    returnPhases,
    setReturnPhases,
  ] = useState([
    {
      years: 15,
      returnRate: 12,
    },
    {
      years: 10,
      returnRate: 10,
    },
  ]);

  // TOTAL YEARS
  const totalYears =
    returnPhases.reduce(
      (sum, phase) =>
        sum + phase.years,
      0
    );

  // SIP SUMMARY
  const sipData =
    calculateSip(
      monthlyInvestment,
      stepUp,
      returnPhases
    );

  // YEARLY DATA FOR CHARTS
  const yearlyData =
    generateSipYearlyData(
      monthlyInvestment,
      stepUp,
      inflation,
      returnPhases
    );

  return (
    <main className="min-h-screen bg-[#020817] text-white p-6">

      <div
        id="sip-report"
        className="max-w-7xl mx-auto"
      >

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
                  setMonthlyInvestment(
                    Number(
                      e.target.value
                    )
                  )
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
                  setStepUp(
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
            returnPhases={
              returnPhases
            }
            setReturnPhases={
              setReturnPhases
            }
          />

        </div>

        {/* RESULT SECTION */}
        <div className="grid md:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">

          {/* TOTAL INVESTED */}
          <div className="bg-blue-100 text-slate-900 rounded-3xl p-8 shadow-xl">

            <h2 className="text-xl font-semibold mb-4">
              Total Invested
            </h2>

            <p className="text-4xl font-bold break-words">

              ₹
              {
                formatIndianCurrency(
                  sipData.totalInvested
                )
              }

            </p>

          </div>

          {/* WEALTH GAINED */}
          <div className="bg-green-100 text-slate-900 rounded-3xl p-8 shadow-xl">

            <h2 className="text-xl font-semibold mb-4">
              Wealth Gained
            </h2>

            <p className="text-4xl font-bold text-green-700 break-words">

              ₹
              {
                formatIndianCurrency(
                  sipData.wealthGained
                )
              }

            </p>

          </div>

          {/* FUTURE VALUE */}
          <div className="bg-yellow-100 text-slate-900 rounded-3xl p-8 shadow-xl">

            <h2 className="text-xl font-semibold mb-4">
              Future Value
            </h2>

            <p className="text-4xl font-bold break-words">

              ₹
              {
                formatIndianCurrency(
                  sipData.totalValue
                )
              }

            </p>

          </div>

        </div>

        {/* PIE CHART */}
        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 mb-10 shadow-xl">

          <h2 className="text-3xl font-bold mb-8">
            Investment Breakdown
          </h2>

          <InvestmentPieChart
            invested={
              sipData.totalInvested
            }
            wealth={
              sipData.wealthGained
            }
          />

        </div>

        {/* COMPOUNDING CURVE */}
        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 mb-10 shadow-xl">

          <h2 className="text-3xl font-bold mb-8">
            Compounding Curve
          </h2>

          <CompoundingCurveChart
            data={yearlyData}
          />

        </div>

        {/* INFO SECTION */}
        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 shadow-xl">

          <h2 className="text-4xl font-bold mb-8">
            Understanding SIP Investing
          </h2>

          <div className="space-y-8 text-slate-300 leading-8">

            {/* WHAT IS SIP */}
            <div>

              <h3 className="text-2xl font-semibold text-white mb-3">
                What is SIP?
              </h3>

              <p>
                SIP (Systematic Investment Plan)
                allows you to invest a fixed amount
                regularly into mutual funds or
                market-linked investments.
              </p>

            </div>

            {/* WHY SIP */}
            <div>

              <h3 className="text-2xl font-semibold text-white mb-3">
                Why SIP Works Well
              </h3>

              <ul className="list-disc ml-8 space-y-3">

                <li>
                  Benefits from long-term compounding
                </li>

                <li>
                  Reduces timing risk
                </li>

                <li>
                  Builds investment discipline
                </li>

                <li>
                  Affordable for salaried investors
                </li>

                <li>
                  Can create large corpus over time
                </li>

              </ul>

            </div>

            {/* STEP UP */}
            <div className="bg-blue-500/10 p-6 rounded-2xl">

              <h3 className="text-2xl font-semibold text-white mb-3">
                Why Step-Up SIP is Powerful
              </h3>

              <p>
                Increasing SIP amount every year
                through salary growth can dramatically
                increase long-term wealth creation.
              </p>

            </div>

            {/* INFLATION */}
            <div className="bg-orange-500/10 p-6 rounded-2xl">

              <h3 className="text-2xl font-semibold text-white mb-3">
                Importance of Inflation
              </h3>

              <p>
                Inflation reduces purchasing power
                over time. Inflation-adjusted returns
                help estimate the real value of
                future money.
              </p>

            </div>

            {/* IMPORTANT TIP */}
            <div className="bg-green-500/10 p-6 rounded-2xl">

              <h3 className="text-2xl font-semibold text-white mb-3">
                Important Insight
              </h3>

              <p>
                Time in the market matters more
                than timing the market. Long
                investment duration is the biggest
                wealth creation factor.
              </p>

            </div>

            {/* DISCLAIMER */}
            <div className="bg-yellow-500/10 p-6 rounded-2xl">

              <h3 className="text-2xl font-semibold text-white mb-3">
                Disclaimer
              </h3>

              <p>
                Investment returns are estimates
                based on assumed return rates.
                Actual market returns may vary
                significantly depending on market
                conditions.
              </p>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}