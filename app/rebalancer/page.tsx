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

        {/* SEO CONTENT SECTION */}

        <div
          className="
  mt-14
  bg-slate-900
  border
  border-slate-800
  rounded-3xl
  p-8
  lg:p-12
  shadow-xl
  "
        >

          <h2
            className="
    text-4xl
    font-black
    mb-10
    "
          >

            Asset Allocation Rebalancer Calculator

          </h2>

          <div className="space-y-10 text-slate-300">

            {/* INTRO */}

            <div>

              <h3
                className="
        text-2xl
        font-bold
        text-white
        mb-4
        "
              >

                What is Asset Allocation Rebalancing?

              </h3>

              <p className="leading-9 text-lg">

                Asset allocation rebalancing is the process of adjusting
                your investment portfolio back to its original target
                allocation after market movements change portfolio weights.

                This Asset Allocation Rebalancer Calculator helps investors
                analyze portfolio allocation, identify overweight and
                underweight assets, and calculate how much to buy or sell
                for proper portfolio rebalancing.

              </p>

            </div>

            {/* WHY IMPORTANT */}

            <div
              className="
      bg-blue-500/10
      border
      border-blue-500/20
      rounded-3xl
      p-8
      "
            >

              <h3
                className="
        text-2xl
        font-bold
        text-white
        mb-4
        "
              >

                Why Portfolio Rebalancing Matters

              </h3>

              <p className="leading-9 text-lg">

                Over time, market performance causes some assets to grow
                faster than others, changing your intended investment mix.

                Rebalancing helps maintain risk control, diversification,
                investment discipline, and long-term portfolio stability.

              </p>

            </div>

            {/* BENEFITS */}

            <div>

              <h3
                className="
        text-2xl
        font-bold
        text-white
        mb-5
        "
              >

                Benefits of Portfolio Rebalancing

              </h3>

              <ul
                className="
        list-disc
        ml-8
        space-y-4
        leading-8
        "
              >

                <li>
                  Maintains target asset allocation
                </li>

                <li>
                  Reduces concentration risk
                </li>

                <li>
                  Improves portfolio diversification
                </li>

                <li>
                  Encourages disciplined investing
                </li>

                <li>
                  Helps investors buy low and sell high
                </li>

                <li>
                  Controls excessive portfolio volatility
                </li>

              </ul>

            </div>

            {/* COMMON ASSETS */}

            <div>

              <h3
                className="
        text-2xl
        font-bold
        text-white
        mb-5
        "
              >

                Common Asset Classes in Portfolio Allocation

              </h3>

              <div
                className="
        grid
        grid-cols-1
        md:grid-cols-2
        gap-5
        "
              >

                {[
                  "Equity / Stocks",
                  "Debt / Bonds",
                  "Gold",
                  "Real Estate",
                  "Cash & Liquid Funds",
                  "International Equity",
                ].map((item) => (

                  <div
                    key={item}
                    className="
            bg-slate-800
            border
            border-slate-700
            rounded-2xl
            p-5
            "
                  >

                    {item}

                  </div>

                ))}

              </div>

            </div>

            {/* ALLOCATION */}

            <div
              className="
      bg-purple-500/10
      border
      border-purple-500/20
      rounded-3xl
      p-8
      "
            >

              <h3
                className="
        text-2xl
        font-bold
        text-white
        mb-4
        "
              >

                Popular Asset Allocation Strategies

              </h3>

              <p className="leading-9 text-lg">

                Different investors require different portfolio allocations
                depending on age, risk tolerance, financial goals, and
                investment horizon.

                Younger investors often prefer higher equity allocation,
                while conservative investors may allocate more toward debt
                and stable income-generating assets.

              </p>

            </div>

            {/* HOW THIS CALCULATOR WORKS */}

            <div>

              <h3
                className="
        text-2xl
        font-bold
        text-white
        mb-5
        "
              >

                What This Rebalancing Calculator Analyzes

              </h3>

              <ul
                className="
        list-disc
        ml-8
        space-y-4
        leading-8
        "
              >

                <li>
                  Current portfolio allocation percentages
                </li>

                <li>
                  Ideal portfolio allocation values
                </li>

                <li>
                  Buy or sell recommendations
                </li>

                <li>
                  Portfolio diversification analysis
                </li>

                <li>
                  Total portfolio value tracking
                </li>

                <li>
                  Asset concentration identification
                </li>

              </ul>

            </div>

            {/* REBALANCING FREQUENCY */}

            <div
              className="
      bg-green-500/10
      border
      border-green-500/20
      rounded-3xl
      p-8
      "
            >

              <h3
                className="
        text-2xl
        font-bold
        text-white
        mb-4
        "
              >

                How Often Should You Rebalance?

              </h3>

              <p className="leading-9 text-lg">

                Many investors rebalance portfolios quarterly,
                semi-annually, or annually.

                Some investors rebalance whenever allocation drifts
                beyond a predefined threshold such as 5% or 10%
                from the target allocation.

              </p>

            </div>

            {/* RISK */}

            <div>

              <h3
                className="
        text-2xl
        font-bold
        text-white
        mb-4
        "
              >

                Risk Management Through Diversification

              </h3>

              <p className="leading-9 text-lg">

                Diversification across multiple asset classes helps
                reduce portfolio volatility and dependence on a
                single investment category.

                Proper asset allocation is one of the most important
                factors in long-term investment success.

              </p>

            </div>

            {/* KEYWORDS */}

            <div>

              <h3
                className="
        text-2xl
        font-bold
        text-white
        mb-5
        "
              >

                Popular Portfolio Management Searches

              </h3>

              <div
                className="
        grid
        grid-cols-1
        md:grid-cols-2
        gap-4
        "
              >

                {[
                  "Asset Allocation Calculator",
                  "Portfolio Rebalancing Calculator",
                  "Investment Allocation Tool",
                  "Mutual Fund Allocation Calculator",
                  "Stock Portfolio Rebalancer",
                  "Diversification Calculator",
                  "Retirement Portfolio Allocation",
                  "Investment Risk Management",
                ].map((item) => (

                  <div
                    key={item}
                    className="
            bg-slate-800
            border
            border-slate-700
            rounded-2xl
            p-4
            "
                  >

                    {item}

                  </div>

                ))}

              </div>

            </div>

            {/* PRO TIP */}

            <div
              className="
      bg-cyan-500/10
      border
      border-cyan-500/20
      rounded-3xl
      p-8
      "
            >

              <h3
                className="
        text-2xl
        font-bold
        text-white
        mb-4
        "
              >

                Pro Tip

              </h3>

              <p className="leading-9 text-lg">

                Portfolio rebalancing works best when combined with
                disciplined long-term investing, periodic SIP investing,
                and proper diversification across asset classes.

              </p>

            </div>

            {/* DISCLAIMER */}

            <div
              className="
      bg-yellow-500/10
      border
      border-yellow-500/20
      rounded-3xl
      p-8
      "
            >

              <h3
                className="
        text-2xl
        font-bold
        text-white
        mb-4
        "
              >

                Disclaimer

              </h3>

              <p className="leading-9 text-lg">

                This portfolio rebalancing calculator provides
                estimated allocation analysis only and should not
                be considered personalized financial advice.

                Investors should consider taxes, transaction costs,
                risk tolerance, liquidity, and financial goals before
                making portfolio allocation decisions.

              </p>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}