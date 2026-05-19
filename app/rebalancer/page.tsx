"use client";

import { useState } from "react";

import {
  calculateRebalancing,
} from "../../utils/calculations";

import {
  formatIndianCurrency,
} from "../../utils/formatCurrency";

import InvestmentPieChart
  from "../../components/InvestmentPieChart";

export default function Rebalancer() {

  const [
    assets,
    setAssets,
  ] = useState([
    {
      name: "Equity",
      currentValue: 1000000,
      targetPercent: 60,
    },

    {
      name: "Debt",
      currentValue: 500000,
      targetPercent: 30,
    },

    {
      name: "Gold",
      currentValue: 200000,
      targetPercent: 10,
    },
  ]);

  // UPDATE ASSET
  const updateAsset =
    (
      index: number,
      field: string,
      value: string
    ) => {

      const updated =
        [...assets];

      updated[index] = {
        ...updated[index],

        [field]:
          field ===
            "name"
            ? value
            : Number(value),
      };

      setAssets(
        updated
      );
    };

  // ADD ASSET
  const addAsset =
    () => {

      setAssets([
        ...assets,

        {
          name: "",
          currentValue: 0,
          targetPercent: 0,
        },
      ]);
    };

  // CALCULATE
  const results =
    calculateRebalancing(
      assets
    );

  // TOTAL
  const totalPortfolio =
    assets.reduce(
      (sum, asset) =>
        sum +
        asset.currentValue,
      0
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

      <div className="max-w-6xl mx-auto bg-white dark:bg-gray-900 p-6 rounded-xl shadow">

        <h1 className="text-4xl font-bold text-black dark:text-white mb-8">
          Asset Allocation Rebalancer
        </h1>

        {/* ASSET INPUTS */}
        <div className="space-y-6">

          {
            assets.map(
              (
                asset,
                index
              ) => (

                <div
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                >

                  {/* NAME */}
                  <div>

                    <label className="block mb-2 font-medium">
                      Asset Name
                    </label>

                    <input
                      type="text"
                      value={
                        asset.name
                      }
                      onChange={(e) =>
                        updateAsset(
                          index,
                          "name",
                          e.target.value
                        )
                      }
                      placeholder="Equity / Debt / Gold"
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

                  {/* CURRENT VALUE */}
                  <div>

                    <label className="block mb-2 font-medium">
                      Current Value (₹)
                    </label>

                    <input
                      type="number"
                      value={
                        asset.currentValue
                      }
                      onChange={(e) =>
                        updateAsset(
                          index,
                          "currentValue",
                          e.target.value
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

                  {/* TARGET */}
                  <div>

                    <label className="block mb-2 font-medium">
                      Target Allocation (%)
                    </label>

                    <input
                      type="number"
                      value={
                        asset.targetPercent
                      }
                      onChange={(e) =>
                        updateAsset(
                          index,
                          "targetPercent",
                          e.target.value
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
              )
            )
          }

        </div>

        {/* ADD BUTTON */}
        <button
          onClick={addAsset}
          className="mt-6 bg-blue-600 text-white px-5 py-3 rounded-lg"
        >
          + Add Asset
        </button>

        {/* SUMMARY */}
        <div className="mt-10 bg-green-50 dark:bg-green-950 p-6 rounded-xl">

          <div className="mb-6">

            <h2 className="text-gray-600 dark:text-gray-300">
              Total Portfolio Value
            </h2>

            <p className="text-4xl font-bold text-black dark:text-white">
              ₹{
                formatIndianCurrency(
                  totalPortfolio
                )
              }
            </p>

          </div>

          {/* TABLE */}
          <div className="overflow-full md:w-auto">

            <table className="w-full border-collapse">

              <thead>

                <tr className="bg-gray-200">

                  <th className="p-3 text-left">
                    Asset
                  </th>

                  <th className="p-3 text-left">
                    Current %
                  </th>

                  <th className="p-3 text-left">
                    Ideal Value
                  </th>

                  <th className="p-3 text-left">
                    Rebalance Action
                  </th>

                </tr>

              </thead>

              <tbody>

                {
                  results.map(
                    (
                      asset,
                      index
                    ) => (

                      <tr
                        key={index}
                        className="border-b"
                      >

                        <td className="p-3">
                          {
                            asset.name
                          }
                        </td>

                        <td className="p-3">
                          {
                            asset.currentPercent
                          }%
                        </td>

                        <td className="p-3">
                          ₹{
                            formatIndianCurrency(
                              asset.idealValue
                            )
                          }
                        </td>

                        <td className="p-3">

                          {
                            asset.difference >
                              0 ? (
                              <span className="text-green-700 font-semibold">

                                Buy ₹
                                {
                                  formatIndianCurrency(
                                    asset.difference
                                  )
                                }

                              </span>
                            ) : (
                              <span className="text-red-700 font-semibold">

                                Sell ₹
                                {
                                  formatIndianCurrency(
                                    Math.abs(
                                      asset.difference
                                    )
                                  )
                                }

                              </span>
                            )
                          }

                        </td>

                      </tr>
                    )
                  )
                }

              </tbody>

            </table>

          </div>

        </div>
        {/* INFO SECTION */}

        <div className="mt-14 card">

          <h2 className="text-4xl font-bold mb-8">
            Understanding Asset Allocation Rebalancer
          </h2>

          <div className="space-y-10">

            <div>

              <h3 className="text-2xl font-semibold mb-3">
                What is Asset Allocation?
              </h3>

              <p className="text-gray-700 dark:text-gray-300 leading-8">
                Asset allocation is the process of dividing
                investments across different asset classes
                such as equity, debt, gold, and cash to
                balance risk and returns.
              </p>

            </div>

            <div>

              <h3 className="text-2xl font-semibold mb-3">
                What is Rebalancing?
              </h3>

              <p className="text-gray-700 dark:text-gray-300 leading-8">
                Rebalancing means adjusting portfolio allocation
                periodically to maintain the desired investment mix.
              </p>

            </div>

            <div>

              <h3 className="text-2xl font-semibold mb-3">
                Why Rebalancing is Important?
              </h3>

              <ul className="list-disc ml-8 space-y-4 text-gray-700 dark:text-gray-300">

                <li>
                  Controls portfolio risk
                </li>

                <li>
                  Prevents overexposure to one asset class
                </li>

                <li>
                  Helps maintain long-term discipline
                </li>

                <li>
                  Encourages buy low and sell high behavior
                </li>

              </ul>

            </div>

            <div className="bg-blue-500/10 rounded-2xl p-6">

              <h3 className="text-2xl font-semibold mb-3">
                Common Asset Classes
              </h3>

              <ul className="list-disc ml-8 space-y-3 text-gray-700 dark:text-gray-300">

                <li>
                  Equity
                </li>

                <li>
                  Debt
                </li>

                <li>
                  Gold
                </li>

                <li>
                  Real Estate
                </li>

                <li>
                  Cash / Liquid Funds
                </li>

              </ul>

            </div>

            <div>

              <h3 className="text-2xl font-semibold mb-3">
                Popular Allocation Strategies
              </h3>

              <div className="overflow-x-auto">

                <table className="w-full border-collapse">

                  <thead>

                    <tr className="bg-gray-200 dark:bg-gray-800">

                      <th className="border p-3 text-left">
                        Investor Type
                      </th>

                      <th className="border p-3 text-left">
                        Typical Equity Allocation
                      </th>

                    </tr>

                  </thead>

                  <tbody>

                    <tr>
                      <td className="border p-3">
                        Conservative
                      </td>

                      <td className="border p-3">
                        30% - 50%
                      </td>
                    </tr>

                    <tr>
                      <td className="border p-3">
                        Moderate
                      </td>

                      <td className="border p-3">
                        50% - 70%
                      </td>
                    </tr>

                    <tr>
                      <td className="border p-3">
                        Aggressive
                      </td>

                      <td className="border p-3">
                        70% - 90%
                      </td>
                    </tr>

                  </tbody>

                </table>

              </div>

            </div>

            <div className="bg-green-500/10 rounded-2xl p-6">

              <h3 className="text-2xl font-semibold mb-3">
                Pro Tip
              </h3>

              <p className="text-gray-700 dark:text-gray-300 leading-8">
                Periodic rebalancing helps maintain emotional
                discipline and reduces excessive concentration
                risk during market rallies.
              </p>

            </div>

            <div className="bg-yellow-500/10 rounded-2xl p-6">

              <h3 className="text-2xl font-semibold mb-3">
                Disclaimer
              </h3>

              <p className="text-gray-700 dark:text-gray-300 leading-8">
                Asset allocation strategies should be aligned
                with individual risk tolerance, financial goals,
                and investment horizon.
              </p>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}