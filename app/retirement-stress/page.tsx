"use client";

import { useState } from "react";

import {
    calculateRetirementStress,
} from "../../utils/retirementStress";

import {
    formatIndianCurrency,
} from "../../utils/formatCurrency";

export default function RetirementStressPage() {

    const [corpus, setCorpus] =
        useState(50000000);

    const [monthlyExpense, setMonthlyExpense] =
        useState(100000);

    const [returnRate, setReturnRate] =
        useState(10);

    const [inflation, setInflation] =
        useState(6);

    const [years, setYears] =
        useState(35);

    const [
        healthcareExpense,
        setHealthcareExpense,
    ] = useState(20000);

    const [
        healthcareInflation,
        setHealthcareInflation,
    ] = useState(10);

    const [
        cashBucketYears,
        setCashBucketYears,
    ] = useState(3);

    const [
        debtBucketYears,
        setDebtBucketYears,
    ] = useState(7);

    const result =
        calculateRetirementStress(
            corpus,
            monthlyExpense,
            healthcareExpense,
            returnRate,
            inflation,
            healthcareInflation,
            years,
            cashBucketYears,
            debtBucketYears
        );

    return (

        <main className="min-h-screen bg-[#020817] text-white p-5 md:p-10">

            <div className="max-w-7xl mx-auto">

                {/* PAGE HEADER */}
                <div className="mb-12">

                    <h1 className="text-3xl md:text-5xl font-bold mb-5">

                        Retirement Withdrawal Stress Test

                    </h1>

                    <p className="text-slate-400 text-lg leading-8 max-w-4xl">

                        Analyze whether your retirement corpus
                        can survive long-term withdrawals while
                        accounting for inflation, healthcare costs,
                        and bucket strategy allocation.

                    </p>

                </div>

                {/* INPUT SECTION */}
                <div className="bg-slate-900 border border-slate-700 rounded-3xl p-6 md:p-10 mb-10">

                    <h2 className="text-2xl md:text-3xl font-bold mb-10">

                        Retirement Inputs

                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-7">

                        {/* RETIREMENT CORPUS */}
                        <div>

                            <label className="block text-sm font-semibold text-slate-300 mb-3">

                                Retirement Corpus (₹)

                            </label>

                            <input
                                type="number"
                                value={corpus}
                                onChange={(e) =>
                                    setCorpus(
                                        Number(e.target.value)
                                    )
                                }
                                className="
                w-full
                bg-slate-950
                border border-slate-700
                rounded-2xl
                px-5
                py-4
                text-white
                text-lg
                outline-none
                focus:ring-2
                focus:ring-blue-500
                focus:border-blue-500
                transition-all
                "
                            />

                        </div>

                        {/* MONTHLY EXPENSE */}
                        <div>

                            <label className="block text-sm font-semibold text-slate-300 mb-3">

                                Monthly Expense (₹)

                            </label>

                            <input
                                type="number"
                                value={monthlyExpense}
                                onChange={(e) =>
                                    setMonthlyExpense(
                                        Number(e.target.value)
                                    )
                                }
                                className="
                w-full
                bg-slate-950
                border border-slate-700
                rounded-2xl
                px-5
                py-4
                text-white
                text-lg
                outline-none
                focus:ring-2
                focus:ring-blue-500
                focus:border-blue-500
                transition-all
                "
                            />

                        </div>

                        {/* RETURN RATE */}
                        <div>

                            <label className="block text-sm font-semibold text-slate-300 mb-3">

                                Expected Return (%)

                            </label>

                            <input
                                type="number"
                                value={returnRate}
                                onChange={(e) =>
                                    setReturnRate(
                                        Number(e.target.value)
                                    )
                                }
                                className="
                w-full
                bg-slate-950
                border border-slate-700
                rounded-2xl
                px-5
                py-4
                text-white
                text-lg
                outline-none
                focus:ring-2
                focus:ring-blue-500
                focus:border-blue-500
                transition-all
                "
                            />

                        </div>

                        {/* INFLATION */}
                        <div>

                            <label className="block text-sm font-semibold text-slate-300 mb-3">

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
                                className="
                w-full
                bg-slate-950
                border border-slate-700
                rounded-2xl
                px-5
                py-4
                text-white
                text-lg
                outline-none
                focus:ring-2
                focus:ring-blue-500
                focus:border-blue-500
                transition-all
                "
                            />

                        </div>

                        {/* YEARS */}
                        <div>

                            <label className="block text-sm font-semibold text-slate-300 mb-3">

                                Retirement Years

                            </label>

                            <input
                                type="number"
                                value={years}
                                onChange={(e) =>
                                    setYears(
                                        Number(e.target.value)
                                    )
                                }
                                className="
                w-full
                bg-slate-950
                border border-slate-700
                rounded-2xl
                px-5
                py-4
                text-white
                text-lg
                outline-none
                focus:ring-2
                focus:ring-blue-500
                focus:border-blue-500
                transition-all
                "
                            />

                        </div>

                        {/* HEALTHCARE */}
                        <div>

                            <label className="block text-sm font-semibold text-slate-300 mb-3">

                                Monthly Healthcare Expense (₹)

                            </label>

                            <input
                                type="number"
                                value={healthcareExpense}
                                onChange={(e) =>
                                    setHealthcareExpense(
                                        Number(e.target.value)
                                    )
                                }
                                className="
                w-full
                bg-slate-950
                border border-slate-700
                rounded-2xl
                px-5
                py-4
                text-white
                text-lg
                outline-none
                focus:ring-2
                focus:ring-blue-500
                focus:border-blue-500
                transition-all
                "
                            />

                        </div>

                        {/* HEALTHCARE INFLATION */}
                        <div>

                            <label className="block text-sm font-semibold text-slate-300 mb-3">

                                Healthcare Inflation (%)

                            </label>

                            <input
                                type="number"
                                value={healthcareInflation}
                                onChange={(e) =>
                                    setHealthcareInflation(
                                        Number(e.target.value)
                                    )
                                }
                                className="
                w-full
                bg-slate-950
                border border-slate-700
                rounded-2xl
                px-5
                py-4
                text-white
                text-lg
                outline-none
                focus:ring-2
                focus:ring-blue-500
                focus:border-blue-500
                transition-all
                "
                            />

                        </div>

                        {/* CASH BUCKET */}
                        <div>

                            <label className="block text-sm font-semibold text-slate-300 mb-3">

                                Cash Bucket Years

                            </label>

                            <input
                                type="number"
                                value={cashBucketYears}
                                onChange={(e) =>
                                    setCashBucketYears(
                                        Number(e.target.value)
                                    )
                                }
                                className="
                w-full
                bg-slate-950
                border border-slate-700
                rounded-2xl
                px-5
                py-4
                text-white
                text-lg
                outline-none
                focus:ring-2
                focus:ring-blue-500
                focus:border-blue-500
                transition-all
                "
                            />

                        </div>

                        {/* DEBT BUCKET */}
                        <div>

                            <label className="block text-sm font-semibold text-slate-300 mb-3">

                                Debt Bucket Years

                            </label>

                            <input
                                type="number"
                                value={debtBucketYears}
                                onChange={(e) =>
                                    setDebtBucketYears(
                                        Number(e.target.value)
                                    )
                                }
                                className="
                w-full
                bg-slate-950
                border border-slate-700
                rounded-2xl
                px-5
                py-4
                text-white
                text-lg
                outline-none
                focus:ring-2
                focus:ring-blue-500
                focus:border-blue-500
                transition-all
                "
                            />

                        </div>

                    </div>

                </div>

                {/* RESULT SECTION */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">

                    {/* STATUS */}
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-3xl p-6">

                        <h2 className="text-lg text-slate-300 mb-3">

                            Retirement Status

                        </h2>

                        <p className="text-3xl font-bold">

                            {
                                result.survived
                                    ? "✅ Survives"
                                    : "❌ Exhausted"
                            }

                        </p>

                    </div>

                    {/* REMAINING CORPUS */}
                    <div className="bg-green-500/10 border border-green-500/20 rounded-3xl p-6">

                        <h2 className="text-lg text-slate-300 mb-3">

                            Remaining Corpus

                        </h2>

                        <p className="text-3xl font-bold text-green-400">

                            ₹{
                                formatIndianCurrency(
                                    result.remainingCorpus
                                )
                            }

                        </p>

                    </div>

                    {/* EXHAUSTION YEAR */}
                    <div className="bg-red-500/10 border border-red-500/20 rounded-3xl p-6">

                        <h2 className="text-lg text-slate-300 mb-3">

                            Exhaustion Year

                        </h2>

                        <p className="text-3xl font-bold text-red-400">

                            {
                                result.exhaustedYear
                                ?? "Safe"
                            }

                        </p>

                    </div>

                </div>

                {/* INFORMATION SECTION */}
                {/* INFO SECTION */}

                <div className="mt-14 card">

                    <h2 className="text-4xl font-bold mb-8">
                        Understanding Retirement Stress Test
                    </h2>

                    <div className="space-y-8">

                        {/* PURPOSE */}

                        <div>

                            <h3 className="text-2xl font-semibold mb-4">
                                What does this calculator do?
                            </h3>

                            <p className="text-slate-300 leading-8 text-lg">
                                This calculator checks whether your retirement
                                corpus can survive throughout retirement after
                                accounting for inflation, healthcare costs,
                                and yearly withdrawals.
                            </p>

                        </div>

                        {/* CORPUS */}

                        <div>

                            <h3 className="text-2xl font-semibold mb-3">
                                Retirement Corpus
                            </h3>

                            <p className="text-white-700 dark:text-gray-300 leading-8">
                                Total money available at retirement including
                                investments, savings, EPF, mutual funds,
                                stocks, etc.
                            </p>

                        </div>

                        {/* MONTHLY EXPENSE */}

                        <div>

                            <h3 className="text-2xl font-semibold mb-3">
                                Monthly Expense
                            </h3>

                            <p className="text-white-700 dark:text-gray-300 leading-8">
                                Your regular living expenses after retirement
                                such as food, utilities, travel, insurance,
                                maintenance, and lifestyle spending.
                            </p>

                        </div>

                        {/* HEALTHCARE */}

                        <div>

                            <h3 className="text-2xl font-semibold mb-3">
                                Monthly Healthcare Expense
                            </h3>

                            <p className="text-white-700 dark:text-gray-300 leading-8">
                                Expected healthcare and medical expenses during
                                retirement. Healthcare inflation is usually
                                much higher than normal inflation.
                            </p>

                        </div>

                        {/* RETURN */}

                        <div>

                            <h3 className="text-2xl font-semibold mb-3">
                                Expected Return
                            </h3>

                            <p className="text-white-700 dark:text-gray-300 leading-8">
                                Estimated annual return generated by your
                                retirement portfolio after retirement.
                            </p>

                        </div>

                        {/* INFLATION */}

                        <div>

                            <h3 className="text-2xl font-semibold mb-3">
                                Inflation
                            </h3>

                            <p className="text-white-700 dark:text-gray-300 leading-8">
                                Inflation increases your living expenses every
                                year. Long retirement periods are heavily
                                impacted by inflation.
                            </p>

                        </div>

                        {/* HEALTHCARE INFLATION */}

                        <div>

                            <h3 className="text-2xl font-semibold mb-3">
                                Healthcare Inflation
                            </h3>

                            <p className="text-white-700 dark:text-gray-300 leading-8">
                                Medical costs usually rise faster than normal
                                inflation. In India healthcare inflation can
                                often be between 10% to 15%.
                            </p>

                        </div>

                        {/* BUCKET STRATEGY */}

                        <div>

                            <h3 className="text-2xl font-semibold mb-3">
                                Bucket Strategy
                            </h3>

                            <p className="text-white-700 dark:text-gray-300 leading-8">
                                Bucket strategy divides retirement corpus into
                                multiple buckets:
                            </p>

                            <ul className="list-disc ml-8 mt-4 space-y-3 text-white-700 dark:text-gray-300">

                                <li>
                                    Cash Bucket → short-term expenses
                                </li>

                                <li>
                                    Debt Bucket → medium-term stability
                                </li>

                                <li>
                                    Equity Bucket → long-term growth
                                </li>

                            </ul>

                        </div>

                        {/* CASH BUCKET */}

                        <div>

                            <h3 className="text-2xl font-semibold mb-3">
                                Cash Bucket Years
                            </h3>

                            <p className="text-white-700 dark:text-gray-300 leading-8">
                                Number of years of expenses kept in cash or
                                liquid funds for stability and emergency usage.
                            </p>

                        </div>

                        {/* DEBT BUCKET */}

                        <div>

                            <h3 className="text-2xl font-semibold mb-3">
                                Debt Bucket Years
                            </h3>

                            <p className="text-white-700 dark:text-gray-300 leading-8">
                                Number of years of expenses allocated to debt
                                instruments such as bonds or fixed-income
                                investments.
                            </p>

                        </div>

                        {/* FINAL NOTE */}

                        <div className="bg-blue-500/10 rounded-2xl p-6">

                            <h3 className="text-2xl font-semibold mb-3">
                                Important Note
                            </h3>

                            <p className="text-white-700 dark:text-gray-300 leading-8">
                                This calculator provides an estimation based on
                                assumed returns and inflation. Actual market
                                returns, taxes, healthcare expenses, and life
                                events may differ significantly.
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </main>
    );
}