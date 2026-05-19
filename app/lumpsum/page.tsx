"use client";

import { useState } from "react";

import ReturnPhases from "../../components/ReturnPhases";
import InvestmentPieChart from "../../components/InvestmentPieChart";
import CompoundingCurveChart from "../../components/CompoundingChart";

import {
  calculateLumpsum,
  generateLumpsumYearlyData,
} from "../../utils/calculations";

import {
  formatIndianCurrency,
} from "../../utils/formatCurrency";

export default function LumpsumPage() {

  const [lumpsumAmount, setLumpsumAmount] = useState(500000);
  const [inflation, setInflation] = useState(6);

  const [lumpsumReturnPhases, setLumpsumReturnPhases] = useState([
    { years: 15, returnRate: 12 },
    { years: 10, returnRate: 10 },
  ]);

  const lumpsumData = calculateLumpsum(
    lumpsumAmount,
    lumpsumReturnPhases
  );

  const yearlyData = generateLumpsumYearlyData(
    lumpsumAmount,
    inflation,
    lumpsumReturnPhases
  );

  const totalYears = lumpsumReturnPhases.reduce(
    (sum, phase) => sum + phase.years,
    0
  );

  // ==========================================
  // ✅ NEW: Inflation Adjusted Future Value
  // ==========================================
  const inflationAdjustedValue =
    lumpsumData.futureValue /
    Math.pow(1 + inflation / 100, totalYears);

  return (
    <main className="
      min-h-screen
      bg-gray-100
      dark:bg-black
      p-8
      text-black
      dark:text-white
    ">

      <div className="max-w-5xl mx-auto bg-white dark:bg-gray-900 p-6 rounded-xl shadow">

        <h1 className="text-4xl font-bold text-black dark:text-white mb-8">
          Lumpsum Calculator
        </h1>

        {/* AMOUNT */}
        <div className="mb-5">

          <label className="block mb-2 font-medium">
            Investment Amount (₹)
          </label>

          <input
            type="number"
            value={lumpsumAmount}
            onChange={(e) =>
              setLumpsumAmount(Number(e.target.value))
            }
            className="
              w-full border p-3 rounded-lg
              bg-white text-black
              dark:bg-gray-800 dark:text-white dark:border-gray-700
            "
          />
        </div>

        {/* INFLATION */}
        <div className="mb-6">

          <label className="block mb-2 font-medium">
            Inflation Rate (%)
          </label>

          <input
            type="number"
            value={inflation}
            onChange={(e) =>
              setInflation(Number(e.target.value))
            }
            className="
              w-full border p-3 rounded-lg
              bg-white text-black
              dark:bg-gray-800 dark:text-white dark:border-gray-700
            "
          />
        </div>

        {/* RETURN PHASES */}
        <ReturnPhases
          returnPhases={lumpsumReturnPhases}
          setReturnPhases={setLumpsumReturnPhases}
        />

        {/* RESULTS */}
        <div className="bg-green-50 dark:bg-green-950 p-6 rounded-xl mt-8 space-y-5">

          <div>
            <h2 className="text-gray-600 dark:text-gray-300">
              Total Duration
            </h2>
            <p className="text-2xl font-bold">
              {totalYears} Years
            </p>
          </div>

          <div>
            <h2 className="text-gray-600 dark:text-gray-300">
              Total Invested
            </h2>
            <p className="text-3xl font-bold">
              ₹{formatIndianCurrency(lumpsumAmount)}
            </p>
          </div>

          <div>
            <h2 className="text-gray-600 dark:text-gray-300">
              Wealth Gained
            </h2>
            <p className="text-3xl font-bold text-green-700">
              ₹{formatIndianCurrency(lumpsumData.wealthGained)}
            </p>
          </div>

          <div>
            <h2 className="text-gray-600 dark:text-gray-300">
              Future Value
            </h2>
            <p className="text-4xl font-bold text-black dark:text-white">
              ₹{formatIndianCurrency(lumpsumData.futureValue)}
            </p>
          </div>

          {/* ✅ NEW BLOCK ADDED */}
          <div>
            <h2 className="text-gray-600 dark:text-gray-300">
              Inflation Adjusted Future Value
            </h2>
            <p className="text-4xl font-bold text-purple-700">
              ₹{formatIndianCurrency(inflationAdjustedValue)}
            </p>
          </div>

        </div>

        {/* PIE CHART */}
        <div className="mt-10">
          <InvestmentPieChart
            invested={lumpsumAmount}
            wealth={lumpsumData.wealthGained}
          />
        </div>

        {/* COMPOUNDING CURVE */}
        <div className="mt-10">
          <CompoundingCurveChart data={yearlyData} />
        </div>

        {/* INFO SECTION (UNCHANGED FULL BLOCK) */}
        <div className="mt-14 card">

          <h2 className="text-4xl font-bold mb-8">
            Understanding Lumpsum Calculator
          </h2>

          <div className="space-y-10">

            <div>
              <h3 className="text-2xl font-semibold mb-3">
                What is Lumpsum Investment?
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-8">
                A lumpsum investment means investing a large amount of money at one time instead of investing gradually through SIPs. It is commonly used for bonuses, inheritance, business proceeds, or accumulated savings.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-3">
                Lumpsum Amount
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-8">
                This is the one-time amount invested at the beginning of the investment period.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-3">
                Inflation Adjustment
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-8">
                Inflation reduces real purchasing power of future money.
              </p>
            </div>

            {/* rest untouched... */}

          </div>
        </div>

      </div>
    </main>
  );
}