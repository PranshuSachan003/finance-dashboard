"use client";

import { useState } from "react";

import InvestmentPieChart
  from "../../components/InvestmentPieChart";

import CompoundingChart
  from "../../components/CompoundingChart";

import {
  generateFireYearlyData,
} from "../../utils/calculations";

import {
  formatIndianCurrency,
} from "../../utils/formatCurrency";

export default function FireCalculator() {

  const [
    currentAge,
    setCurrentAge,
  ] = useState(30);

  const [
    retirementAge,
    setRetirementAge,
  ] = useState(50);

  const [
    monthlyExpense,
    setMonthlyExpense,
  ] = useState(80000);

  const [
    inflation,
    setInflation,
  ] = useState(6);

  const [
    withdrawalRate,
    setWithdrawalRate,
  ] = useState(4);

  const [
    expectedReturn,
    setExpectedReturn,
  ] = useState(12);

  const [
    existingCorpus,
    setExistingCorpus,
  ] = useState(3000000);

  const [
    monthlySip,
    setMonthlySip,
  ] = useState(15000);

  // YEARS LEFT
  const yearsToRetirement =
    retirementAge - currentAge;

  // FUTURE MONTHLY EXPENSE
  const futureMonthlyExpense =
    monthlyExpense *
    Math.pow(
      1 + inflation / 100,
      yearsToRetirement
    );

  // YEARLY EXPENSE
  const futureYearlyExpense =
    futureMonthlyExpense * 12;

  // FIRE CORPUS
  const fireCorpus =
    futureYearlyExpense /
    (withdrawalRate / 100);

  // EXISTING CORPUS GROWTH
  const futureExistingCorpus =
    existingCorpus *
    Math.pow(
      1 + expectedReturn / 100,
      yearsToRetirement
    );

  // SIP FUTURE VALUE
  const monthlyRate =
    expectedReturn / 12 / 100;

  const totalMonths =
    yearsToRetirement * 12;

  const futureSipValue =
    monthlySip *
    (
      (
        Math.pow(
          1 + monthlyRate,
          totalMonths
        ) - 1
      ) / monthlyRate
    ) *
    (1 + monthlyRate);

  // TOTAL PROJECTED WEALTH
  const projectedWealth =
    futureExistingCorpus +
    futureSipValue;

  // INFLATION ADJUSTED WEALTH
  const inflationAdjustedWealth =
    projectedWealth /
    Math.pow(
      1 + inflation / 100,
      yearsToRetirement
    );

  // SHORTFALL
  const shortfall =
    fireCorpus -
    projectedWealth;

  const fireYearlyData =
    generateFireYearlyData(
      currentAge,
      retirementAge,
      existingCorpus,
      monthlySip,
      expectedReturn,
      inflation
    );

  return (
    <main className="min-h-screen bg-[#020817] text-white p-6">

      <div className="max-w-7xl mx-auto">

        {/* PAGE TITLE */}
        <h1 className="text-5xl font-bold mb-10">
          FIRE Calculator
        </h1>

        {/* INPUT SECTION */}
        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 mb-10 shadow-xl">

          <h2 className="text-3xl font-bold mb-8">
            FIRE Planning Details
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* CURRENT AGE */}
            <div>

              <label className="block mb-3 text-slate-300 text-lg">
                Current Age
              </label>

              <input
                type="number"
                value={currentAge}
                onChange={(e) =>
                  setCurrentAge(
                    Number(e.target.value)
                  )
                }
                className="w-full bg-slate-800 border border-slate-600 text-white p-4 rounded-2xl outline-none"
              />

            </div>

            {/* RETIREMENT AGE */}
            <div>

              <label className="block mb-3 text-slate-300 text-lg">
                Retirement Age
              </label>

              <input
                type="number"
                value={retirementAge}
                onChange={(e) =>
                  setRetirementAge(
                    Number(e.target.value)
                  )
                }
                className="w-full bg-slate-800 border border-slate-600 text-white p-4 rounded-2xl outline-none"
              />

            </div>

            {/* MONTHLY EXPENSE */}
            <div>

              <label className="block mb-3 text-slate-300 text-lg">
                Monthly Expense (₹)
              </label>

              <input
                type="number"
                value={monthlyExpense}
                onChange={(e) =>
                  setMonthlyExpense(
                    Number(e.target.value)
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
                    Number(e.target.value)
                  )
                }
                className="w-full bg-slate-800 border border-slate-600 text-white p-4 rounded-2xl outline-none"
              />

            </div>

            {/* WITHDRAWAL RATE */}
            <div>

              <label className="block mb-3 text-slate-300 text-lg">
                Safe Withdrawal Rate (%)
              </label>

              <input
                type="number"
                value={withdrawalRate}
                onChange={(e) =>
                  setWithdrawalRate(
                    Number(e.target.value)
                  )
                }
                className="w-full bg-slate-800 border border-slate-600 text-white p-4 rounded-2xl outline-none"
              />

            </div>

            {/* EXPECTED RETURN */}
            <div>

              <label className="block mb-3 text-slate-300 text-lg">
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
                className="w-full bg-slate-800 border border-slate-600 text-white p-4 rounded-2xl outline-none"
              />

            </div>

            {/* EXISTING CORPUS */}
            <div>

              <label className="block mb-3 text-slate-300 text-lg">
                Existing Corpus (₹)
              </label>

              <input
                type="number"
                value={existingCorpus}
                onChange={(e) =>
                  setExistingCorpus(
                    Number(e.target.value)
                  )
                }
                className="w-full bg-slate-800 border border-slate-600 text-white p-4 rounded-2xl outline-none"
              />

            </div>

            {/* MONTHLY SIP */}
            <div>

              <label className="block mb-3 text-slate-300 text-lg">
                Monthly SIP (₹)
              </label>

              <input
                type="number"
                value={monthlySip}
                onChange={(e) =>
                  setMonthlySip(
                    Number(e.target.value)
                  )
                }
                className="w-full bg-slate-800 border border-slate-600 text-white p-4 rounded-2xl outline-none"
              />

            </div>

          </div>

        </div>

        {/* RESULT SECTION */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">

          {/* YEARS TO RETIREMENT */}
          <div className="bg-blue-100 text-slate-900 rounded-3xl p-8 shadow-xl">

            <h2 className="text-xl font-semibold mb-4">
              Years To Retirement
            </h2>

            <p className="text-4xl font-bold">
              {yearsToRetirement} Years
            </p>

          </div>

          {/* FUTURE MONTHLY EXPENSE */}
          <div className="bg-orange-100 text-slate-900 rounded-3xl p-8 shadow-xl">

            <h2 className="text-xl font-semibold mb-4">
              Future Monthly Expense
            </h2>

            <p className="text-4xl font-bold text-orange-700 break-words">
              ₹
              {
                formatIndianCurrency(
                  futureMonthlyExpense
                )
              }
            </p>

          </div>

          {/* FIRE CORPUS */}
          <div className="bg-red-100 text-slate-900 rounded-3xl p-8 shadow-xl">

            <h2 className="text-xl font-semibold mb-4">
              FIRE Corpus Needed
            </h2>

            <p className="text-4xl font-bold text-red-700 break-words">
              ₹
              {
                formatIndianCurrency(
                  fireCorpus
                )
              }
            </p>

          </div>

          {/* PROJECTED WEALTH */}
          <div className="bg-green-100 text-slate-900 rounded-3xl p-8 shadow-xl">

            <h2 className="text-xl font-semibold mb-4">
              Projected Wealth
            </h2>

            <p className="text-4xl font-bold text-green-700 break-words">
              ₹
              {
                formatIndianCurrency(
                  projectedWealth
                )
              }
            </p>

          </div>

          {/* INFLATION ADJUSTED */}
          <div className="bg-purple-100 text-slate-900 rounded-3xl p-8 shadow-xl">

            <h2 className="text-xl font-semibold mb-4">
              Inflation Adjusted Wealth
            </h2>

            <p className="text-4xl font-bold text-purple-700 break-words">
              ₹
              {
                formatIndianCurrency(
                  inflationAdjustedWealth
                )
              }
            </p>

            <p className="text-sm mt-3 text-slate-700">
              (Today's purchasing power)
            </p>

          </div>

          {/* GAP / SURPLUS */}
          <div
            className={`rounded-3xl p-8 shadow-xl ${
              shortfall > 0
                ? "bg-red-100 text-slate-900"
                : "bg-green-100 text-slate-900"
            }`}
          >

            <h2 className="text-xl font-semibold mb-4">
              Gap / Surplus
            </h2>

            <p
              className={`text-4xl font-bold break-words ${
                shortfall > 0
                  ? "text-red-700"
                  : "text-green-700"
              }`}
            >
              ₹
              {
                formatIndianCurrency(
                  Math.abs(shortfall)
                )
              }
            </p>

            <p className="text-sm mt-3 text-slate-700">
              {
                shortfall > 0
                  ? "Additional corpus needed"
                  : "Projected surplus over FIRE target"
              }
            </p>

          </div>

        </div>

        {/* PIE CHART */}
        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 mb-10 shadow-xl">

          <h2 className="text-3xl font-bold mb-8">
            FIRE Corpus Comparison
          </h2>

          <InvestmentPieChart
            invested={projectedWealth}
            wealth={fireCorpus}
            investedLabel="Projected Wealth"
            wealthLabel="FIRE Corpus"
          />

        </div>

        {/* COMPOUNDING CURVE */}
        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 mb-10 shadow-xl">

          <h2 className="text-3xl font-bold mb-8">
            Wealth Growth Projection
          </h2>

          <CompoundingChart
            data={fireYearlyData.map(
              (item) => ({
                year: item.age,
                nominalValue:
                  item.nominalValue,
                realValue:
                  item.realValue,
              })
            )}
          />

        </div>

        {/* INFO SECTION */}
        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 shadow-xl">

          <h2 className="text-4xl font-bold mb-8">
            Understanding FIRE Calculator
          </h2>

          <div className="space-y-10 text-slate-300">

            {/* WHAT IS FIRE */}
            <div>

              <h3 className="text-2xl font-semibold text-white mb-3">
                What is FIRE?
              </h3>

              <p className="leading-8">
                FIRE stands for Financial Independence,
                Retire Early. The goal of FIRE is to build
                enough investment corpus so your investments
                can generate sufficient income to cover your
                living expenses without active employment.
              </p>

            </div>

            {/* MONTHLY EXPENSE */}
            <div>

              <h3 className="text-2xl font-semibold text-white mb-3">
                Monthly Expense
              </h3>

              <p className="leading-8">
                Your expected monthly expenses after achieving
                financial independence. This should include
                lifestyle expenses, insurance, travel,
                utilities, healthcare, and other recurring costs.
              </p>

            </div>

            {/* INFLATION */}
            <div>

              <h3 className="text-2xl font-semibold text-white mb-3">
                Inflation
              </h3>

              <p className="leading-8">
                Inflation increases the cost of living every
                year. Long-term retirement planning must account
                for inflation because future expenses can become
                significantly larger over time.
              </p>

            </div>

            {/* RETURN */}
            <div>

              <h3 className="text-2xl font-semibold text-white mb-3">
                Expected Return
              </h3>

              <p className="leading-8">
                Expected annual return generated by your
                investment portfolio after retirement.
                Conservative return assumptions are generally
                safer for long-term FIRE planning.
              </p>

            </div>

            {/* SAFE WITHDRAWAL */}
            <div>

              <h3 className="text-2xl font-semibold text-white mb-3">
                Safe Withdrawal Rate (SWR)
              </h3>

              <p className="leading-8">
                Safe Withdrawal Rate represents the percentage
                of your retirement corpus you can withdraw
                annually while attempting to preserve your
                portfolio for long-term retirement.
              </p>

            </div>

            {/* 4% RULE */}
            <div className="bg-blue-500/10 rounded-2xl p-6">

              <h3 className="text-2xl font-semibold text-white mb-3">
                Popular FIRE Rule
              </h3>

              <p className="leading-8">
                One commonly used FIRE rule is the 4% Rule,
                which suggests that annual expenses should
                be approximately 4% of the retirement corpus.
              </p>

              <div className="mt-6">

                <p className="text-lg font-medium mb-3 text-white">
                  Example:
                </p>

                <ul className="list-disc ml-8 space-y-3">

                  <li>
                    Annual Expense = ₹12,00,000
                  </li>

                  <li>
                    FIRE Corpus ≈ ₹3 Crore
                  </li>

                </ul>

              </div>

            </div>

            {/* IMPORTANT INSIGHTS */}
            <div>

              <h3 className="text-2xl font-semibold text-white mb-4">
                Important FIRE Insights
              </h3>

              <ul className="list-disc ml-8 space-y-4 leading-8">

                <li>
                  Time and compounding are the biggest drivers of wealth creation.
                </li>

                <li>
                  Lower expenses reduce required FIRE corpus significantly.
                </li>

                <li>
                  Inflation can drastically impact long retirement durations.
                </li>

                <li>
                  Healthcare expenses become increasingly important later in life.
                </li>

                <li>
                  Early retirement requires conservative assumptions and proper risk management.
                </li>

                <li>
                  Market crashes during early retirement years can significantly impact portfolio survival.
                </li>

              </ul>

            </div>

            {/* TYPES OF FIRE */}
            <div>

              <h3 className="text-2xl font-semibold text-white mb-3">
                Different Types of FIRE
              </h3>

              <div className="overflow-x-auto">

                <table className="w-full border-collapse">

                  <thead>

                    <tr className="bg-slate-800 text-white">

                      <th className="border border-slate-700 p-3 text-left">
                        FIRE Type
                      </th>

                      <th className="border border-slate-700 p-3 text-left">
                        Description
                      </th>

                    </tr>

                  </thead>

                  <tbody className="text-slate-300">

                    <tr>
                      <td className="border border-slate-700 p-3">
                        Lean FIRE
                      </td>

                      <td className="border border-slate-700 p-3">
                        Minimalist lifestyle with lower expenses
                      </td>
                    </tr>

                    <tr>
                      <td className="border border-slate-700 p-3">
                        Regular FIRE
                      </td>

                      <td className="border border-slate-700 p-3">
                        Balanced retirement lifestyle
                      </td>
                    </tr>

                    <tr>
                      <td className="border border-slate-700 p-3">
                        Fat FIRE
                      </td>

                      <td className="border border-slate-700 p-3">
                        Premium lifestyle with higher spending
                      </td>
                    </tr>

                    <tr>
                      <td className="border border-slate-700 p-3">
                        Coast FIRE
                      </td>

                      <td className="border border-slate-700 p-3">
                        Investments grow without additional contributions
                      </td>
                    </tr>

                  </tbody>

                </table>

              </div>

            </div>

            {/* COMMON MISTAKES */}
            <div>

              <h3 className="text-2xl font-semibold text-white mb-3">
                Common FIRE Planning Mistakes
              </h3>

              <ul className="list-disc ml-8 space-y-4 leading-8">

                <li>
                  Ignoring inflation
                </li>

                <li>
                  Underestimating healthcare costs
                </li>

                <li>
                  Assuming unrealistic market returns
                </li>

                <li>
                  Retiring without emergency reserves
                </li>

                <li>
                  Not accounting for taxes
                </li>

              </ul>

            </div>

            {/* DISCLAIMER */}
            <div className="bg-yellow-500/10 rounded-2xl p-6">

              <h3 className="text-2xl font-semibold text-white mb-3">
                Disclaimer
              </h3>

              <p className="leading-8">
                FIRE projections are based on estimated returns,
                inflation, and withdrawal assumptions. Actual
                outcomes may vary due to market conditions,
                taxes, inflation changes, lifestyle decisions,
                and unexpected financial events.
              </p>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}