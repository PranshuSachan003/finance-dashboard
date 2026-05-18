"use client";

import { useState } from "react";

import {
  formatIndianCurrency,
} from "../../utils/formatCurrency";

import InvestmentPieChart
  from "../../components/InvestmentPieChart";

export default function NetWorthTracker() {

  // ASSETS
  const [
    stocks,
    setStocks,
  ] = useState(500000);

  const [
    mutualFunds,
    setMutualFunds,
  ] = useState(800000);

  const [
    epf,
    setEpf,
  ] = useState(300000);

  const [
    cash,
    setCash,
  ] = useState(100000);

  const [
    gold,
    setGold,
  ] = useState(200000);

  const [
    realEstate,
    setRealEstate,
  ] = useState(3000000);

  const [
    crypto,
    setCrypto,
  ] = useState(50000);

  // LIABILITIES
  const [
    homeLoan,
    setHomeLoan,
  ] = useState(1000000);

  const [
    personalLoan,
    setPersonalLoan,
  ] = useState(0);

  const [
    creditCardDebt,
    setCreditCardDebt,
  ] = useState(0);

  // CALCULATIONS
  const totalAssets =
    stocks +
    mutualFunds +
    epf +
    cash +
    gold +
    realEstate +
    crypto;

  const totalLiabilities =
    homeLoan +
    personalLoan +
    creditCardDebt;

  const netWorth =
    totalAssets -
    totalLiabilities;

  return (
    <main className="
min-h-screen
bg-gray-100
dark:bg-black
p-8
text-black
dark:text-white
">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-black dark:text-white mb-8">
          Net Worth Tracker
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* ASSETS */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow">

            <h2 className="text-2xl font-bold mb-6 text-green-700">
              Assets
            </h2>

            <div className="space-y-5">

              {/* STOCKS */}
              <div>
                <label className="block mb-2 font-medium">
                  Stocks (₹)
                </label>

                <input
                  type="number"
                  value={stocks}
                  onChange={(e) =>
                    setStocks(
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

              {/* MF */}
              <div>
                <label className="block mb-2 font-medium">
                  Mutual Funds (₹)
                </label>

                <input
                  type="number"
                  value={mutualFunds}
                  onChange={(e) =>
                    setMutualFunds(
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

              {/* EPF */}
              <div>
                <label className="block mb-2 font-medium">
                  EPF / PPF (₹)
                </label>

                <input
                  type="number"
                  value={epf}
                  onChange={(e) =>
                    setEpf(
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

              {/* CASH */}
              <div>
                <label className="block mb-2 font-medium">
                  Cash / Savings (₹)
                </label>

                <input
                  type="number"
                  value={cash}
                  onChange={(e) =>
                    setCash(
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

              {/* GOLD */}
              <div>
                <label className="block mb-2 font-medium">
                  Gold (₹)
                </label>

                <input
                  type="number"
                  value={gold}
                  onChange={(e) =>
                    setGold(
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

              {/* RE */}
              <div>
                <label className="block mb-2 font-medium">
                  Real Estate (₹)
                </label>

                <input
                  type="number"
                  value={realEstate}
                  onChange={(e) =>
                    setRealEstate(
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

              {/* CRYPTO */}
              <div>
                <label className="block mb-2 font-medium">
                  Crypto (₹)
                </label>

                <input
                  type="number"
                  value={crypto}
                  onChange={(e) =>
                    setCrypto(
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

            </div>

          </div>

          {/* LIABILITIES */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow">

            <h2 className="text-2xl font-bold mb-6 text-red-700">
              Liabilities
            </h2>

            <div className="space-y-5">

              {/* HOME LOAN */}
              <div>
                <label className="block mb-2 font-medium">
                  Home Loan (₹)
                </label>

                <input
                  type="number"
                  value={homeLoan}
                  onChange={(e) =>
                    setHomeLoan(
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

              {/* PERSONAL LOAN */}
              <div>
                <label className="block mb-2 font-medium">
                  Personal Loan (₹)
                </label>

                <input
                  type="number"
                  value={personalLoan}
                  onChange={(e) =>
                    setPersonalLoan(
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

              {/* CC */}
              <div>
                <label className="block mb-2 font-medium">
                  Credit Card Debt (₹)
                </label>

                <input
                  type="number"
                  value={creditCardDebt}
                  onChange={(e) =>
                    setCreditCardDebt(
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

            </div>

            {/* SUMMARY */}
            <div className="bg-green-50 dark:bg-green-950 p-6 rounded-xl mt-8 space-y-5">

              <div>
                <h3 className="text-gray-600 dark:text-gray-300">
                  Total Assets
                </h3>

                <p className="text-2xl font-bold text-green-700">
                  ₹{
                    formatIndianCurrency(
                      totalAssets
                    )
                  }
                </p>
              </div>

              <div>
                <h3 className="text-gray-600 dark:text-gray-300">
                  Total Liabilities
                </h3>

                <p className="text-2xl font-bold text-red-700">
                  ₹{
                    formatIndianCurrency(
                      totalLiabilities
                    )
                  }
                </p>
              </div>

              <div>
                <h3 className="text-gray-600 dark:text-gray-300">
                  Net Worth
                </h3>

                <p className="text-4xl font-bold text-black dark:text-white text-blue-700">
                  ₹{
                    formatIndianCurrency(
                      netWorth
                    )
                  }
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* PIE CHART */}
        <div className="mt-10 bg-white dark:bg-gray-900 p-6 rounded-xl shadow">

          <h2 className="text-2xl font-bold mb-6">
            Assets vs Liabilities
          </h2>

          <InvestmentPieChart
            invested={totalAssets}
            wealth={totalLiabilities}
            investedLabel="Assets"
            wealthLabel="Liabilities"
          />

        </div>
        {/* INFO SECTION */}

        <div className="mt-14 card">

          <h2 className="text-4xl font-bold mb-8">
            Understanding Net Worth Tracker
          </h2>

          <div className="space-y-10">

            <div>

              <h3 className="text-2xl font-semibold mb-3">
                What is Net Worth?
              </h3>

              <p className="text-gray-700 dark:text-gray-300 leading-8">
                Net worth represents the difference between
                your total assets and total liabilities.
                It is one of the most important indicators
                of long-term financial health.
              </p>

            </div>

            <div className="bg-blue-500/10 rounded-2xl p-6">

              <h3 className="text-2xl font-semibold mb-3">
                Net Worth Formula
              </h3>

              <div className="text-lg font-medium">
                Net Worth = Total Assets − Total Liabilities
              </div>

            </div>

            <div>

              <h3 className="text-2xl font-semibold mb-3">
                Assets Include
              </h3>

              <ul className="list-disc ml-8 space-y-4 text-gray-700 dark:text-gray-300">

                <li>
                  Mutual funds
                </li>

                <li>
                  Stocks
                </li>

                <li>
                  Bank balance
                </li>

                <li>
                  Real estate
                </li>

                <li>
                  Gold investments
                </li>

                <li>
                  EPF / PPF / NPS
                </li>

              </ul>

            </div>

            <div>

              <h3 className="text-2xl font-semibold mb-3">
                Liabilities Include
              </h3>

              <ul className="list-disc ml-8 space-y-4 text-gray-700 dark:text-gray-300">

                <li>
                  Home loan
                </li>

                <li>
                  Car loan
                </li>

                <li>
                  Credit card dues
                </li>

                <li>
                  Personal loans
                </li>

              </ul>

            </div>

            <div>

              <h3 className="text-2xl font-semibold mb-3">
                Why Track Net Worth?
              </h3>

              <ul className="list-disc ml-8 space-y-4 text-gray-700 dark:text-gray-300">

                <li>
                  Measures long-term wealth creation
                </li>

                <li>
                  Helps track financial progress
                </li>

                <li>
                  Improves financial discipline
                </li>

                <li>
                  Helps reduce excessive debt
                </li>

                <li>
                  Supports retirement planning
                </li>

              </ul>

            </div>

            <div className="bg-green-500/10 rounded-2xl p-6">

              <h3 className="text-2xl font-semibold mb-3">
                Important Tip
              </h3>

              <p className="text-gray-700 dark:text-gray-300 leading-8">
                Increasing savings rate and reducing bad debt
                are often more impactful initially than chasing
                higher investment returns.
              </p>

            </div>

            <div className="bg-yellow-500/10 rounded-2xl p-6">

              <h3 className="text-2xl font-semibold mb-3">
                Disclaimer
              </h3>

              <p className="text-gray-700 dark:text-gray-300 leading-8">
                Net worth calculations are estimates based on
                entered asset and liability values. Actual
                market values may fluctuate over time.
              </p>

            </div>

          </div>

        </div>
      </div>

    </main>
  );
}