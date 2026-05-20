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

  // =============================
  // UPDATE ASSET
  // =============================

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
          field === "name"
            ? value
            : Number(value),
      };

      setAssets(updated);
    };

  // =============================
  // ADD ASSET
  // =============================

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

  // =============================
  // CALCULATE
  // =============================

  const results =
    calculateRebalancing(
      assets
    );

  // =============================
  // TOTAL PORTFOLIO
  // =============================

  const totalPortfolio =
    assets.reduce(
      (
        sum,
        asset
      ) =>
        sum +
        asset.currentValue,
      0
    );

  // =============================
  // PIE CHART DATA
  // =============================

  const highestAsset =
    [...assets].sort(
      (a, b) =>
        b.currentValue -
        a.currentValue
    )[0];

  const remainingAssets =
    totalPortfolio -
    highestAsset.currentValue;

  return (
    <main className="min-h-screen bg-[#020817] text-white p-6">

      <div className="max-w-7xl mx-auto">

        {/* PAGE TITLE */}

        <h1 className="text-5xl font-bold mb-10">
          Asset Allocation Rebalancer
        </h1>

        {/* INPUT SECTION */}

        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 mb-10 shadow-xl">

          <h2 className="text-3xl font-bold mb-8">
            Portfolio Assets
          </h2>

          <div className="space-y-8">

            {
              assets.map(
                (
                  asset,
                  index
                ) => (

                  <div
                    key={index}
                    className="
                      grid
                      grid-cols-1
                      md:grid-cols-2
                      lg:grid-cols-3
                      gap-6
                    "
                  >

                    {/* ASSET NAME */}

                    <div>

                      <label className="block mb-3 text-slate-300 text-lg">
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
                          bg-slate-800
                          border
                          border-slate-600
                          text-white
                          p-4
                          rounded-2xl
                          outline-none
                        "
                      />

                    </div>

                    {/* CURRENT VALUE */}

                    <div>

                      <label className="block mb-3 text-slate-300 text-lg">
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
                          bg-slate-800
                          border
                          border-slate-600
                          text-white
                          p-4
                          rounded-2xl
                          outline-none
                        "
                      />

                    </div>

                    {/* TARGET ALLOCATION */}

                    <div>

                      <label className="block mb-3 text-slate-300 text-lg">
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
                          bg-slate-800
                          border
                          border-slate-600
                          text-white
                          p-4
                          rounded-2xl
                          outline-none
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
            className="
              mt-8
              bg-blue-600
              hover:bg-blue-700
              transition-all
              px-6
              py-4
              rounded-2xl
              font-semibold
            "
          >
            + Add Asset
          </button>

        </div>

        {/* SUMMARY SECTION */}

        <div className="grid md:grid-cols-2 gap-8 mb-10">

          {/* TOTAL PORTFOLIO */}

          <div className="bg-green-100 text-slate-900 rounded-3xl p-8 shadow-xl">

            <h2 className="text-xl font-semibold mb-4">
              Total Portfolio Value
            </h2>

            <p className="text-4xl font-bold break-words">
              ₹{
                formatIndianCurrency(
                  totalPortfolio
                )
              }
            </p>

          </div>

          {/* TOTAL ASSETS */}

          <div className="bg-blue-100 text-slate-900 rounded-3xl p-8 shadow-xl">

            <h2 className="text-xl font-semibold mb-4">
              Total Asset Classes
            </h2>

            <p className="text-4xl font-bold">
              {assets.length}
            </p>

          </div>

        </div>

        {/* PIE CHART */}

        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 mb-10 shadow-xl">

          <h2 className="text-3xl font-bold mb-8">
            Portfolio Breakdown
          </h2>

          <InvestmentPieChart
            invested={
              highestAsset?.currentValue || 0
            }
            wealth={
              remainingAssets || 0
            }
            investedLabel={
              highestAsset?.name || "Largest Asset"
            }
            wealthLabel="Other Assets"
          />

        </div>

        {/* REBALANCING TABLE */}

        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 mb-10 shadow-xl">

          <h2 className="text-3xl font-bold mb-8">
            Rebalancing Suggestions
          </h2>

          <div className="overflow-x-auto">

            <table className="w-full border-collapse">

              <thead>

                <tr className="bg-slate-800">

                  <th className="p-4 text-left">
                    Asset
                  </th>

                  <th className="p-4 text-left">
                    Current %
                  </th>

                  <th className="p-4 text-left">
                    Ideal Value
                  </th>

                  <th className="p-4 text-left">
                    Action
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
                        className="
                          border-b
                          border-slate-700
                        "
                      >

                        <td className="p-4">
                          {
                            asset.name
                          }
                        </td>

                        <td className="p-4">
                          {
                            asset.currentPercent
                          }%
                        </td>

                        <td className="p-4">
                          ₹{
                            formatIndianCurrency(
                              asset.idealValue
                            )
                          }
                        </td>

                        <td className="p-4">

                          {
                            asset.difference > 0 ? (

                              <span className="text-green-400 font-semibold">

                                Buy ₹
                                {
                                  formatIndianCurrency(
                                    asset.difference
                                  )
                                }

                              </span>

                            ) : (

                              <span className="text-red-400 font-semibold">

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

        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 shadow-xl">

          <h2 className="text-4xl font-bold mb-8">
            Understanding Asset Allocation Rebalancer
          </h2>

          <div className="space-y-8 text-slate-300 leading-8">

            {/* WHAT IS ASSET ALLOCATION */}

            <div>

              <h3 className="text-2xl font-semibold text-white mb-3">
                What is Asset Allocation?
              </h3>

              <p>
                Asset allocation is the process of dividing
                investments across multiple asset classes
                such as equity, debt, gold, real estate,
                and cash to balance risk and returns.
              </p>

            </div>

            {/* WHAT IS REBALANCING */}

            <div>

              <h3 className="text-2xl font-semibold text-white mb-3">
                What is Rebalancing?
              </h3>

              <p>
                Rebalancing means periodically adjusting
                portfolio allocation to maintain the
                original target allocation strategy.
              </p>

            </div>

            {/* WHY IMPORTANT */}

            <div>

              <h3 className="text-2xl font-semibold text-white mb-3">
                Why Rebalancing is Important?
              </h3>

              <ul className="list-disc ml-8 space-y-3">

                <li>
                  Controls portfolio risk
                </li>

                <li>
                  Prevents overexposure to one asset class
                </li>

                <li>
                  Maintains long-term discipline
                </li>

                <li>
                  Encourages buy low and sell high behavior
                </li>

                <li>
                  Reduces emotional investing decisions
                </li>

              </ul>

            </div>

            {/* COMMON ASSET CLASSES */}

            <div className="bg-blue-500/10 p-6 rounded-2xl">

              <h3 className="text-2xl font-semibold text-white mb-3">
                Common Asset Classes
              </h3>

              <ul className="list-disc ml-8 space-y-3">

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

            {/* ALLOCATION STRATEGIES */}

            <div>

              <h3 className="text-2xl font-semibold text-white mb-4">
                Popular Allocation Strategies
              </h3>

              <div className="overflow-x-auto">

                <table className="w-full border-collapse">

                  <thead>

                    <tr className="bg-slate-800">

                      <th className="border border-slate-700 p-4 text-left">
                        Investor Type
                      </th>

                      <th className="border border-slate-700 p-4 text-left">
                        Typical Equity Allocation
                      </th>

                    </tr>

                  </thead>

                  <tbody>

                    <tr>

                      <td className="border border-slate-700 p-4">
                        Conservative
                      </td>

                      <td className="border border-slate-700 p-4">
                        30% - 50%
                      </td>

                    </tr>

                    <tr>

                      <td className="border border-slate-700 p-4">
                        Moderate
                      </td>

                      <td className="border border-slate-700 p-4">
                        50% - 70%
                      </td>

                    </tr>

                    <tr>

                      <td className="border border-slate-700 p-4">
                        Aggressive
                      </td>

                      <td className="border border-slate-700 p-4">
                        70% - 90%
                      </td>

                    </tr>

                  </tbody>

                </table>

              </div>

            </div>

            {/* PRO TIP */}

            <div className="bg-green-500/10 p-6 rounded-2xl">

              <h3 className="text-2xl font-semibold text-white mb-3">
                Pro Tip
              </h3>

              <p>
                Periodic rebalancing helps maintain emotional
                discipline and reduces excessive concentration
                risk during market rallies.
              </p>

            </div>

            {/* DISCLAIMER */}

            <div className="bg-yellow-500/10 p-6 rounded-2xl">

              <h3 className="text-2xl font-semibold text-white mb-3">
                Disclaimer
              </h3>

              <p>
                Asset allocation strategies should always
                align with your financial goals, risk tolerance,
                and investment horizon.
              </p>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}