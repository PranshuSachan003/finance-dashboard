"use client";

import { useState } from "react";

import {
  calculateSwp,
} from "../../utils/calculations";

import {
  formatIndianCurrency,
} from "../../utils/formatCurrency";

import InvestmentPieChart
  from "../../components/InvestmentPieChart";

import CompoundingChart
  from "../../components/CompoundingChart";

export default function SwpCalculator() {

  const [
    initialCorpus,
    setInitialCorpus,
  ] = useState(50000000);

  const [
    monthlyWithdrawal,
    setMonthlyWithdrawal,
  ] = useState(100000);

  const [
    expectedReturn,
    setExpectedReturn,
  ] = useState(10);

  const [
    inflation,
    setInflation,
  ] = useState(6);

  const [years, setYears] =
    useState(30);

  const swpData =
    calculateSwp(
      initialCorpus,
      monthlyWithdrawal,
      expectedReturn,
      inflation,
      years
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

      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 p-6 rounded-xl shadow">

        <h1 className="text-3xl font-bold mb-6">
          SWP Calculator
        </h1>

        {/* CORPUS */}
        <div className="mb-4">
          <label className="block mb-2">
            Initial Corpus
          </label>

          <input
            type="number"
            value={initialCorpus}
            onChange={(e) =>
              setInitialCorpus(
                Number(e.target.value)
              )
            }
            className="w-full border p-3 rounded"
          />
        </div>

        {/* WITHDRAWAL */}
        <div className="mb-4">
          <label className="block mb-2">
            Monthly Withdrawal
          </label>

          <input
            type="number"
            value={monthlyWithdrawal}
            onChange={(e) =>
              setMonthlyWithdrawal(
                Number(e.target.value)
              )
            }
            className="w-full border p-3 rounded"
          />
        </div>

        {/* RETURN */}
        <div className="mb-4">
          <label className="block mb-2">
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
            className="w-full border p-3 rounded"
          />
        </div>

        {/* INFLATION */}
        <div className="mb-4">
          <label className="block mb-2">
            Inflation (%)
          </label>

          <input
            type="number"
            value={inflation}
            onChange={(e) =>
              setInflation(
                Number(e.target.value)
              )
            }
            className="w-full border p-3 rounded"
          />
        </div>

        {/* YEARS */}
        <div className="mb-6">
          <label className="block mb-2">
            Duration (Years)
          </label>

          <input
            type="number"
            value={years}
            onChange={(e) =>
              setYears(
                Number(e.target.value)
              )
            }
            className="w-full border p-3 rounded"
          />
        </div>

        {/* RESULTS */}
        <div className="bg-green-50 dark:bg-green-950 p-6 rounded-xl mt-8 space-y-5">

          <div>
            <h2 className="text-gray-600 dark:text-gray-300">
              Corpus Left
            </h2>

            <p className="text-3xl font-bold">
              ₹{
                formatIndianCurrency(
                  swpData.corpusLeft
                )
              }
            </p>
          </div>

          <div>
            <h2 className="text-gray-600 dark:text-gray-300">
              Survival Duration
            </h2>

            <p className="text-2xl font-bold">
              {
                swpData.survivedYears
              } Years
            </p>
          </div>

          <div>
            <h2 className="text-gray-600 dark:text-gray-300">
              Status
            </h2>

            <p
              className={`text-2xl font-bold ${swpData.depleted
                  ? "text-red-600"
                  : "text-green-700"
                }`}
            >
              {
                swpData.depleted
                  ? "Corpus Depleted"
                  : "Corpus Survived"
              }
            </p>
          </div>

          {/* PIE CHART */}
          <InvestmentPieChart
            invested={
              initialCorpus
            }
            wealth={
              swpData.corpusLeft
            }
            investedLabel="Initial Corpus"
            wealthLabel="Remaining Corpus"
          />

          {/* COMPOUNDING CURVE */}
          <CompoundingChart
            data={
              swpData.yearlyData.map(
                (item) => ({
                  year:
                    item.year,

                  nominalValue:
                    item.corpus,

                  realValue:
                    item.corpus /
                    Math.pow(
                      1 + inflation / 100,
                      item.year
                    ),
                })
              )
            }
          />

        </div>

        {/* INFO SECTION */}

        <div className="mt-14 card">

          <h2 className="text-4xl font-bold mb-8">
            Understanding SWP Calculator
          </h2>

          <div className="space-y-10">

            <div>

              <h3 className="text-2xl font-semibold mb-3">
                What is SWP?
              </h3>

              <p className="text-gray-700 dark:text-gray-300 leading-8">
                SWP (Systematic Withdrawal Plan) allows investors
                to withdraw a fixed amount regularly from their
                investments while the remaining corpus continues
                to grow.
              </p>

            </div>

            <div>

              <h3 className="text-2xl font-semibold mb-3">
                Why SWP is Useful?
              </h3>

              <ul className="list-disc ml-8 space-y-4 text-gray-700 dark:text-gray-300">

                <li>
                  Creates passive income after retirement
                </li>

                <li>
                  Helps manage monthly cash flow
                </li>

                <li>
                  Remaining investment continues compounding
                </li>

                <li>
                  More tax efficient in some cases than FD interest
                </li>

              </ul>

            </div>

            <div>

              <h3 className="text-2xl font-semibold mb-3">
                Important SWP Insights
              </h3>

              <ul className="list-disc ml-8 space-y-4 text-gray-700 dark:text-gray-300">

                <li>
                  Higher withdrawals may exhaust corpus faster.
                </li>

                <li>
                  Inflation-adjusted withdrawals are important for long retirements.
                </li>

                <li>
                  Portfolio return should ideally exceed withdrawal rate.
                </li>

                <li>
                  Market crashes can impact SWP sustainability.
                </li>

              </ul>

            </div>

            <div className="bg-blue-500/10 rounded-2xl p-6">

              <h3 className="text-2xl font-semibold mb-3">
                Common SWP Use Cases
              </h3>

              <ul className="list-disc ml-8 space-y-3 text-gray-700 dark:text-gray-300">

                <li>
                  Retirement income
                </li>

                <li>
                  Monthly passive cash flow
                </li>

                <li>
                  Parents' income planning
                </li>

                <li>
                  Temporary salary replacement
                </li>

              </ul>

            </div>

            <div className="bg-yellow-500/10 rounded-2xl p-6">

              <h3 className="text-2xl font-semibold mb-3">
                Disclaimer
              </h3>

              <p className="text-gray-700 dark:text-gray-300 leading-8">
                SWP projections are estimates based on assumed
                returns and withdrawals. Actual portfolio survival
                depends on market returns, taxes, inflation,
                and withdrawal discipline.
              </p>

            </div>

          </div>

        </div>
      </div>

    </main>
  );
}