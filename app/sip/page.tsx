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

export default function SipPage() {

  // ==========================================
  // STATES
  // ==========================================

  const [
    investmentAmount,
    setInvestmentAmount,
  ] = useState(10000);

  const [
    stepUp,
    setStepUp,
  ] = useState(10);

  const [
    inflation,
    setInflation,
  ] = useState(6);

  const [
    investmentFrequency,
    setInvestmentFrequency,
  ] = useState("monthly");

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

  // ==========================================
  // FREQUENCY MAP
  // ==========================================

  const frequencyMap: Record<
    string,
    {
      periodsPerYear: number;
      label: string;
    }
  > = {

    weekly: {
      periodsPerYear: 52,
      label: "Weekly",
    },

    biMonthly: {
      periodsPerYear: 24,
      label: "Bi-Monthly",
    },

    monthly: {
      periodsPerYear: 12,
      label: "Monthly",
    },

    quarterly: {
      periodsPerYear: 4,
      label: "Quarterly",
    },

    halfYearly: {
      periodsPerYear: 2,
      label: "Half-Yearly",
    },
  };

  // ==========================================
  // TOTAL YEARS
  // ==========================================

  const totalYears =
    returnPhases.reduce(
      (
        sum,
        phase
      ) =>
        sum +
        phase.years,
      0
    );

  // ==========================================
  // PERIODS
  // ==========================================

  const periodsPerYear =
    frequencyMap[
      investmentFrequency
    ].periodsPerYear;

  // ==========================================
  // SIP DATA
  // ==========================================

  const sipData =
    calculateSip(
      investmentAmount,
      stepUp,
      returnPhases,
      periodsPerYear
    );

  // ==========================================
  // CHART DATA
  // ==========================================

  const yearlyData =
    generateSipYearlyData(
      investmentAmount,
      stepUp,
      inflation,
      returnPhases,
      periodsPerYear
    );

  // ==========================================
  // INFLATION ADJUSTED VALUE
  // ==========================================

  const inflationAdjustedValue =
    sipData.totalValue /
    Math.pow(
      1 + inflation / 100,
      totalYears
    );

  return (

    <main className="min-h-screen bg-[#020817] text-white p-6">

      <div className="max-w-7xl mx-auto">

        {/* PAGE TITLE */}

        <h1 className="text-5xl font-bold mb-10">

          SIP Calculator

        </h1>

        {/* INPUT SECTION */}

        <div
          className="
          bg-slate-900
          border
          border-slate-700
          rounded-3xl
          p-8
          mb-10
          shadow-xl
          "
        >

          <h2 className="text-3xl font-bold mb-8">

            Investment Details

          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* INVESTMENT AMOUNT */}

            <div>

              <label className="block mb-3 text-slate-300 text-lg">

                {
                  frequencyMap[
                    investmentFrequency
                  ].label
                }
                {" "}
                Investment Amount (₹)

              </label>

              <input
                type="number"
                value={investmentAmount}
                onChange={(e) =>
                  setInvestmentAmount(
                    Number(
                      e.target.value
                    )
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

            {/* INVESTMENT FREQUENCY */}

            <div>

              <label className="block mb-3 text-slate-300 text-lg">

                Investment Frequency

              </label>

              <select
                value={investmentFrequency}
                onChange={(e) =>
                  setInvestmentFrequency(
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
              >

                <option value="weekly">
                  Weekly
                </option>

                <option value="biMonthly">
                  Bi-Monthly
                </option>

                <option value="monthly">
                  Monthly
                </option>

                <option value="quarterly">
                  Quarterly
                </option>

                <option value="halfYearly">
                  Half-Yearly
                </option>

              </select>

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

            {/* TOTAL YEARS */}

            <div>

              <label className="block mb-3 text-slate-300 text-lg">

                Total Duration

              </label>

              <div
                className="
                bg-slate-800
                border
                border-slate-600
                p-4
                rounded-2xl
                text-xl
                font-semibold
                "
              >

                {totalYears} Years

              </div>

            </div>

          </div>

        </div>

        {/* RETURN PHASES */}

        <div
          className="
          bg-slate-900
          border
          border-slate-700
          rounded-3xl
          p-8
          mb-10
          shadow-xl
          "
        >

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

        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-4
          gap-8
          mb-10
          "
        >

          {/* INVESTED */}

          <div
            className="
            bg-blue-100
            text-slate-900
            rounded-3xl
            p-8
            shadow-xl
            "
          >

            <h2 className="text-xl font-semibold mb-4">

              Total Invested

            </h2>

            <p className="text-4xl font-bold break-words">

              ₹{
                formatIndianCurrency(
                  sipData.totalInvested
                )
              }

            </p>

          </div>

          {/* WEALTH */}

          <div
            className="
            bg-green-100
            text-slate-900
            rounded-3xl
            p-8
            shadow-xl
            "
          >

            <h2 className="text-xl font-semibold mb-4">

              Wealth Gained

            </h2>

            <p
              className="
              text-4xl
              font-bold
              text-green-700
              break-words
              "
            >

              ₹{
                formatIndianCurrency(
                  sipData.wealthGained
                )
              }

            </p>

          </div>

          {/* FUTURE VALUE */}

          <div
            className="
            bg-yellow-100
            text-slate-900
            rounded-3xl
            p-8
            shadow-xl
            "
          >

            <h2 className="text-xl font-semibold mb-4">

              Future Value

            </h2>

            <p className="text-4xl font-bold break-words">

              ₹{
                formatIndianCurrency(
                  sipData.totalValue
                )
              }

            </p>

          </div>

          {/* INFLATION ADJUSTED */}

          <div
            className="
            bg-purple-100
            text-slate-900
            rounded-3xl
            p-8
            shadow-xl
            "
          >

            <h2 className="text-xl font-semibold mb-4">

              Inflation Adjusted Value

            </h2>

            <p
              className="
              text-4xl
              font-bold
              text-purple-700
              break-words
              "
            >

              ₹{
                formatIndianCurrency(
                  inflationAdjustedValue
                )
              }

            </p>

            <p className="text-sm mt-3 text-slate-700">

              (Today's purchasing power)

            </p>

          </div>

        </div>

        {/* PIE CHART */}

        <div
          className="
          bg-slate-900
          border
          border-slate-700
          rounded-3xl
          p-8
          mb-10
          shadow-xl
          "
        >

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

        {/* CHART */}

        <div
          className="
          bg-slate-900
          border
          border-slate-700
          rounded-3xl
          p-8
          mb-10
          shadow-xl
          "
        >

          <h2 className="text-3xl font-bold mb-8">

            Compounding Curve

          </h2>

          <CompoundingCurveChart
            data={yearlyData}
          />

        </div>

      </div>

    </main>
  );
}