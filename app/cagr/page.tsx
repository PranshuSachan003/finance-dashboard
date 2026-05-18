"use client";

import { useState } from "react";

import {
  formatIndianCurrency,
} from "../../utils/formatCurrency";

export default function CAGRCalculator() {

  const [
    buyPrice,
    setBuyPrice,
  ] = useState(100);

  const [
    sellPrice,
    setSellPrice,
  ] = useState(250);

  const [
    years,
    setYears,
  ] = useState(5);

  const absoluteReturn =
    (
      (
        sellPrice - buyPrice
      ) / buyPrice
    ) * 100;

  const cagr =
    (
      Math.pow(
        sellPrice / buyPrice,
        1 / years
      ) - 1
    ) * 100;

  const gain =
    sellPrice - buyPrice;

  return (

    <main className="
min-h-screen
bg-gray-100
dark:bg-black
p-8
text-black
dark:text-white
">

      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 p-6 rounded-2xl shadow">

        <h1 className="text-4xl font-bold text-black dark:text-white mb-8">
          Stock CAGR Calculator
        </h1>

        {/* BUY PRICE */}
        <div className="mb-5">

          <label className="block mb-2 font-medium">
            Buy Price (₹)
          </label>

          <input
            type="number"
            value={buyPrice}
            onChange={(e) =>
              setBuyPrice(
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

        {/* SELL PRICE */}
        <div className="mb-5">

          <label className="block mb-2 font-medium">
            Current / Sell Price (₹)
          </label>

          <input
            type="number"
            value={sellPrice}
            onChange={(e) =>
              setSellPrice(
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

        {/* YEARS */}
        <div className="mb-8">

          <label className="block mb-2 font-medium">
            Holding Period (Years)
          </label>

          <input
            type="number"
            value={years}
            onChange={(e) =>
              setYears(
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
        <div className="bg-green-50 dark:bg-green-950 p-6 rounded-2xl space-y-5">

          <div>

            <h2 className="text-gray-600 dark:text-gray-300">
              Absolute Gain
            </h2>

            <p className="text-3xl font-bold">
              ₹{
                formatIndianCurrency(
                  gain
                )
              }
            </p>

          </div>

          <div>

            <h2 className="text-gray-600 dark:text-gray-300">
              Total Return
            </h2>

            <p className="text-3xl font-bold text-blue-700">
              {
                absoluteReturn.toFixed(2)
              }%
            </p>

          </div>

          <div>

            <h2 className="text-gray-600 dark:text-gray-300">
              CAGR
            </h2>

            <p className="text-5xl font-bold text-green-700">
              {
                cagr.toFixed(2)
              }%
            </p>

          </div>

        </div>

        {/* INFO SECTION */}

        <div className="mt-14 card">

          <h2 className="text-4xl font-bold mb-8">
            Understanding Stock CAGR Calculator
          </h2>

          <div className="space-y-10">

            <div>

              <h3 className="text-2xl font-semibold mb-3">
                What is CAGR?
              </h3>

              <p className="text-gray-700 dark:text-gray-300 leading-8">
                CAGR (Compound Annual Growth Rate) measures
                the average annual growth rate of an investment
                over a period of time assuming compounding.
              </p>

            </div>

            <div className="bg-blue-500/10 rounded-2xl p-6">

              <h3 className="text-2xl font-semibold mb-3">
                CAGR Formula
              </h3>

              <div className="text-lg font-medium">
                CAGR = (Final Value / Initial Value)
                ^ (1 / Years) − 1
              </div>

            </div>

            <div>

              <h3 className="text-2xl font-semibold mb-3">
                Why CAGR is Useful?
              </h3>

              <ul className="list-disc ml-8 space-y-4 text-gray-700 dark:text-gray-300">

                <li>
                  Compares investment performance consistently
                </li>

                <li>
                  Measures long-term growth quality
                </li>

                <li>
                  Helps compare stocks and mutual funds
                </li>

                <li>
                  Simplifies multi-year return analysis
                </li>

              </ul>

            </div>

            <div>

              <h3 className="text-2xl font-semibold mb-3">
                Important CAGR Insights
              </h3>

              <ul className="list-disc ml-8 space-y-4 text-gray-700 dark:text-gray-300">

                <li>
                  CAGR smoothens yearly volatility.
                </li>

                <li>
                  High CAGR over long periods is rare and powerful.
                </li>

                <li>
                  Long-term compounding creates exponential wealth.
                </li>

                <li>
                  Consistency matters more than short-term spikes.
                </li>

              </ul>

            </div>

            <div className="bg-green-500/10 rounded-2xl p-6">

              <h3 className="text-2xl font-semibold mb-3">
                Example
              </h3>

              <p className="text-gray-700 dark:text-gray-300 leading-8">
                If ₹1 lakh grows to ₹4 lakhs in 10 years,
                CAGR helps determine the equivalent annual
                compounded return generated during the period.
              </p>

            </div>

            <div className="bg-yellow-500/10 rounded-2xl p-6">

              <h3 className="text-2xl font-semibold mb-3">
                Disclaimer
              </h3>

              <p className="text-gray-700 dark:text-gray-300 leading-8">
                CAGR does not represent future returns and
                cannot capture volatility, drawdowns,
                or investment risk.
              </p>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}