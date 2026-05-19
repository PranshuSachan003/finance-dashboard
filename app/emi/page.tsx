"use client";

import { useState } from "react";

import InvestmentPieChart
  from "../../components/InvestmentPieChart";

import {
  formatIndianCurrency,
} from "../../utils/formatCurrency";

export default function EMICalculator() {

  const [
    loanAmount,
    setLoanAmount,
  ] = useState(5000000);

  const [
    interestRate,
    setInterestRate,
  ] = useState(8.5);

  const [
    tenure,
    setTenure,
  ] = useState(20);

  // -------------------
  // EMI CALCULATION
  // -------------------

  const monthlyRate =
    interestRate / 12 / 100;

  const totalMonths =
    tenure * 12;

  const emi =
    (
      loanAmount *
      monthlyRate *
      Math.pow(
        1 + monthlyRate,
        totalMonths
      )
    ) /
    (
      Math.pow(
        1 + monthlyRate,
        totalMonths
      ) - 1
    );

  const totalPayment =
    emi * totalMonths;

  const totalInterest =
    totalPayment -
    loanAmount;

  return (

    <main className="
min-h-screen
bg-gray-100
dark:bg-black
p-8
text-black
dark:text-white
">

      <div className="max-w-5xl mx-auto bg-white dark:bg-gray-900 p-6 rounded-2xl shadow">

        <h1 className="text-4xl font-bold text-black dark:text-white mb-8">
          EMI Calculator
        </h1>

        {/* LOAN AMOUNT */}
        <div className="mb-5">

          <label className="block mb-2 font-medium">
            Loan Amount (₹)
          </label>

          <input
            type="number"
            value={loanAmount}
            onChange={(e) =>
              setLoanAmount(
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

        {/* INTEREST */}
        <div className="mb-5">

          <label className="block mb-2 font-medium">
            Interest Rate (%)
          </label>

          <input
            type="number"
            value={interestRate}
            onChange={(e) =>
              setInterestRate(
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

        {/* TENURE */}
        <div className="mb-8">

          <label className="block mb-2 font-medium">
            Loan Tenure (Years)
          </label>

          <input
            type="number"
            value={tenure}
            onChange={(e) =>
              setTenure(
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

        {/* RESULTS */}
        <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-2xl space-y-6">

          <div>

            <h2 className="text-gray-600 dark:text-gray-300">
              Monthly EMI
            </h2>

            <p className="text-5xl font-bold text-blue-700">
              ₹{
                formatIndianCurrency(
                  emi
                )
              }
            </p>

          </div>

          <div>

            <h2 className="text-gray-600 dark:text-gray-300">
              Total Interest
            </h2>

            <p className="text-3xl font-bold text-red-600">
              ₹{
                formatIndianCurrency(
                  totalInterest
                )
              }
            </p>

          </div>

          <div>

            <h2 className="text-gray-600 dark:text-gray-300">
              Total Payment
            </h2>

            <p className="text-4xl font-bold text-black dark:text-white">
              ₹{
                formatIndianCurrency(
                  totalPayment
                )
              }
            </p>

          </div>

        </div>

        {/* PIE CHART */}
        <div className="mt-10">

          <InvestmentPieChart
            invested={loanAmount}
            wealth={totalInterest}
            investedLabel={"Loan Amount"}
            wealthLabel={"Interest Amount"}
          />

        </div>

        {/* INFO SECTION */}

        <div className="mt-14 card">

          <h2 className="text-4xl font-bold mb-8">
            Understanding EMI Calculator
          </h2>

          <div className="space-y-10">

            <div>

              <h3 className="text-2xl font-semibold mb-3">
                What is EMI?
              </h3>

              <p className="text-gray-700 dark:text-gray-300 leading-8">
                EMI (Equated Monthly Installment) is the fixed
                monthly payment made towards repayment of a loan.
              </p>

            </div>

            <div className="bg-blue-500/10 rounded-2xl p-6">

              <h3 className="text-2xl font-semibold mb-3">
                EMI Formula
              </h3>

              <p className="text-gray-700 dark:text-gray-300 leading-8">
                EMI depends on:
              </p>

              <ul className="list-disc ml-8 mt-4 space-y-3 text-gray-700 dark:text-gray-300">

                <li>
                  Loan amount
                </li>

                <li>
                  Interest rate
                </li>

                <li>
                  Loan tenure
                </li>

              </ul>

            </div>

            <div>

              <h3 className="text-2xl font-semibold mb-3">
                Why EMI Planning Matters?
              </h3>

              <ul className="list-disc ml-8 space-y-4 text-gray-700 dark:text-gray-300">

                <li>
                  Prevents excessive debt burden
                </li>

                <li>
                  Helps manage monthly cash flow
                </li>

                <li>
                  Reduces long-term interest cost
                </li>

                <li>
                  Supports better financial planning
                </li>

              </ul>

            </div>

            <div>

              <h3 className="text-2xl font-semibold mb-3">
                Important EMI Insights
              </h3>

              <ul className="list-disc ml-8 space-y-4 text-gray-700 dark:text-gray-300">

                <li>
                  Longer tenure reduces EMI but increases total interest.
                </li>

                <li>
                  Higher down payment reduces loan burden.
                </li>

                <li>
                  Small interest rate differences can create large cost differences.
                </li>

                <li>
                  Prepayments can significantly reduce interest costs.
                </li>

              </ul>

            </div>

            <div className="bg-green-500/10 rounded-2xl p-6">

              <h3 className="text-2xl font-semibold mb-3">
                Good Financial Practice
              </h3>

              <p className="text-gray-700 dark:text-gray-300 leading-8">
                Ideally, total EMIs should remain within a
                manageable percentage of monthly income to
                maintain financial stability.
              </p>

            </div>

            <div className="bg-yellow-500/10 rounded-2xl p-6">

              <h3 className="text-2xl font-semibold mb-3">
                Disclaimer
              </h3>

              <p className="text-gray-700 dark:text-gray-300 leading-8">
                EMI calculations are estimates and may vary
                depending on lender charges, processing fees,
                floating interest rates, and loan terms.
              </p>

            </div>

          </div>

        </div>
      </div>

    </main>
  );
}