"use client";

import { useState } from "react";

import {
  formatIndianCurrency,
} from "../../utils/formatCurrency";

export default function TaxCalculator() {

  const [
    annualIncome,
    setAnnualIncome,
  ] = useState(1200000);

  const [
    deduction80C,
    setDeduction80C,
  ] = useState(150000);

  const [
    otherDeductions,
    setOtherDeductions,
  ] = useState(50000);

  // ------------------------
  // OLD REGIME
  // ------------------------

  const oldTaxableIncome =
    Math.max(
      annualIncome -
      deduction80C -
      otherDeductions,
      0
    );

  const calculateOldTax =
    (income: number) => {

      let tax = 0;

      if (income > 1000000) {
        tax +=
          (income - 1000000) * 0.3;
        income = 1000000;
      }

      if (income > 500000) {
        tax +=
          (income - 500000) * 0.2;
        income = 500000;
      }

      if (income > 250000) {
        tax +=
          (income - 250000) * 0.05;
      }

      return tax;
    };

  const oldTax =
    calculateOldTax(
      oldTaxableIncome
    );

  // ------------------------
  // NEW REGIME
  // ------------------------

  const calculateNewTax =
    (income: number) => {

      let tax = 0;

      const slabs = [
        [400000, 0],
        [800000, 0.05],
        [1200000, 0.10],
        [1600000, 0.15],
        [2000000, 0.20],
        [2400000, 0.25],
      ];

      let previousLimit = 0;

      for (const [
        limit,
        rate,
      ] of slabs) {

        if (income > limit) {

          tax +=
            (limit -
              previousLimit) *
            rate;

          previousLimit = limit;

        } else {

          tax +=
            (income -
              previousLimit) *
            rate;

          return tax;
        }
      }

      if (income > 2400000) {

        tax +=
          (income - 2400000) *
          0.30;
      }

      return tax;
    };

  const newTax =
    calculateNewTax(
      annualIncome
    );

  // ------------------------
  // BEST REGIME
  // ------------------------

  const betterRegime =
    oldTax < newTax
      ? "Old Regime"
      : "New Regime";

  const savings =
    Math.abs(
      oldTax - newTax
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

      <div className="max-w-5xl mx-auto bg-white dark:bg-gray-900 p-6 rounded-2xl shadow">

        <h1 className="text-4xl font-bold text-black dark:text-white mb-8">
          Income Tax Calculator
        </h1>

        {/* INCOME */}
        <div className="mb-5">

          <label className="block mb-2 font-medium">
            Annual Income (₹)
          </label>

          <input
            type="number"
            value={annualIncome}
            onChange={(e) =>
              setAnnualIncome(
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

        {/* 80C */}
        <div className="mb-5">

          <label className="block mb-2 font-medium">
            80C Deduction (₹)
          </label>

          <input
            type="number"
            value={deduction80C}
            onChange={(e) =>
              setDeduction80C(
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

        {/* OTHER */}
        <div className="mb-8">

          <label className="block mb-2 font-medium">
            Other Deductions (₹)
          </label>

          <input
            type="number"
            value={otherDeductions}
            onChange={(e) =>
              setOtherDeductions(
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

        {/* RESULT GRID */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* OLD */}
          <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-2xl">

            <h2 className="text-2xl font-bold mb-5">
              Old Regime
            </h2>

            <div className="space-y-4">

              <div>
                <p className="text-gray-600 dark:text-gray-300">
                  Taxable Income
                </p>

                <p className="text-2xl font-bold">
                  ₹{
                    formatIndianCurrency(
                      oldTaxableIncome
                    )
                  }
                </p>
              </div>

              <div>
                <p className="text-gray-600 dark:text-gray-300">
                  Estimated Tax
                </p>

                <p className="text-3xl font-bold text-red-600">
                  ₹{
                    formatIndianCurrency(
                      oldTax
                    )
                  }
                </p>
              </div>

            </div>

          </div>

          {/* NEW */}
          <div className="bg-green-50 dark:bg-green-950 p-6 rounded-2xl">

            <h2 className="text-2xl font-bold mb-5">
              New Regime
            </h2>

            <div className="space-y-4">

              <div>
                <p className="text-gray-600 dark:text-gray-300">
                  Taxable Income
                </p>

                <p className="text-2xl font-bold">
                  ₹{
                    formatIndianCurrency(
                      annualIncome
                    )
                  }
                </p>
              </div>

              <div>
                <p className="text-gray-600 dark:text-gray-300">
                  Estimated Tax
                </p>

                <p className="text-3xl font-bold text-red-600">
                  ₹{
                    formatIndianCurrency(
                      newTax
                    )
                  }
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* WINNER */}
        <div className="mt-8 bg-yellow-50 dark:bg-yellow-950 p-6 rounded-2xl">

          <h2 className="text-2xl font-bold mb-4">
            Better Option
          </h2>

          <p className="text-3xl font-bold text-green-700">
            {betterRegime}
          </p>

          <p className="mt-3 text-lg">

            You can save approximately

            <span className="font-bold">
              {" "}
              ₹{
                formatIndianCurrency(
                  savings
                )
              }
            </span>

          </p>

        </div>

        {/* INFO SECTION */}

        <div className="mt-14 card">

          <h2 className="text-4xl font-bold mb-8">
            Understanding Tax Calculator
          </h2>

          <div className="space-y-10">

            <div>

              <h3 className="text-2xl font-semibold mb-3">
                What is Income Tax?
              </h3>

              <p className="text-gray-700 dark:text-gray-300 leading-8">
                Income tax is the tax charged by the government
                on income earned through salary, business,
                investments, rent, and other sources.
              </p>

            </div>

            <div>

              <h3 className="text-2xl font-semibold mb-3">
                Why Tax Planning Matters?
              </h3>

              <ul className="list-disc ml-8 space-y-4 text-gray-700 dark:text-gray-300">

                <li>
                  Helps reduce tax liability legally
                </li>

                <li>
                  Improves long-term wealth creation
                </li>

                <li>
                  Increases post-tax investment returns
                </li>

                <li>
                  Supports retirement and financial planning
                </li>

              </ul>

            </div>

            <div className="bg-blue-500/10 rounded-2xl p-6">

              <h3 className="text-2xl font-semibold mb-3">
                Old vs New Tax Regime
              </h3>

              <p className="text-gray-700 dark:text-gray-300 leading-8">
                The old tax regime allows deductions and exemptions,
                while the new regime offers lower tax rates with
                fewer deductions.
              </p>

            </div>

            <div>

              <h3 className="text-2xl font-semibold mb-3">
                Popular Tax Saving Options
              </h3>

              <ul className="list-disc ml-8 space-y-4 text-gray-700 dark:text-gray-300">

                <li>
                  ELSS Mutual Funds
                </li>

                <li>
                  PPF
                </li>

                <li>
                  EPF
                </li>

                <li>
                  NPS
                </li>

                <li>
                  Health Insurance
                </li>

                <li>
                  Home Loan Benefits
                </li>

              </ul>

            </div>

            <div className="bg-green-500/10 rounded-2xl p-6">

              <h3 className="text-2xl font-semibold mb-3">
                Important Tip
              </h3>

              <p className="text-gray-700 dark:text-gray-300 leading-8">
                Tax planning should align with long-term financial
                goals instead of focusing only on short-term tax savings.
              </p>

            </div>

            <div className="bg-yellow-500/10 rounded-2xl p-6">

              <h3 className="text-2xl font-semibold mb-3">
                Disclaimer
              </h3>

              <p className="text-gray-700 dark:text-gray-300 leading-8">
                Tax laws change periodically. This calculator
                provides estimated values and should not be
                considered professional tax advice.
              </p>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}