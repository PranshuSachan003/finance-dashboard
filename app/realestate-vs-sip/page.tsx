"use client";

import { useState } from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";

import {
  formatIndianCurrency,
} from "../../utils/formatCurrency";

export default function RealEstateVsSipPage() {

  // REAL ESTATE
  const [propertyPrice, setPropertyPrice] =
    useState(5000000);

  const [
    propertyGrowth,
    setPropertyGrowth,
  ] = useState(8);

  const [rentalYield, setRentalYield] =
    useState(2);

  // SIP
  const [monthlySip, setMonthlySip] =
    useState(25000);

  const [sipReturn, setSipReturn] =
    useState(12);

  // INFLATION
  const [inflation, setInflation] =
    useState(6);

  const [years, setYears] =
    useState(20);

  // REAL ESTATE CALCULATION
  const futurePropertyValue =
    propertyPrice *
    Math.pow(
      1 + propertyGrowth / 100,
      years
    );

  const totalRentalIncome =
    propertyPrice *
    (rentalYield / 100) *
    years;

  const realEstateTotal =
    futurePropertyValue +
    totalRentalIncome;

  // ✅ INFLATION ADJUSTED REAL ESTATE
  const inflationAdjustedRealEstate =
    realEstateTotal /
    Math.pow(
      1 + inflation / 100,
      years
    );

  // SIP CALCULATION
  const monthlyRate =
    sipReturn / 12 / 100;

  const totalMonths =
    years * 12;

  const futureSipValue =
    monthlySip *
    (
      (
        Math.pow(
          1 + monthlyRate,
          totalMonths
        ) - 1
      ) / monthlyRate
    ) *
    (1 + monthlyRate);

  // SIP INFLATION ADJUSTED
  const inflationAdjustedSip =
    futureSipValue /
    Math.pow(
      1 + inflation / 100,
      years
    );

  // CHART DATA
  const chartData = [];

  for (
    let year = 1;
    year <= years;
    year++
  ) {

    // PROPERTY VALUE
    const propertyValue =
      propertyPrice *
      Math.pow(
        1 + propertyGrowth / 100,
        year
      );

    // RENTAL INCOME
    const rentalIncome =
      propertyPrice *
      (rentalYield / 100) *
      year;

    // TOTAL REAL ESTATE VALUE
    const realEstateNominal =
      propertyValue +
      rentalIncome;

    // ✅ REAL ESTATE INFLATION ADJUSTED
    const realEstateAdjusted =
      realEstateNominal /
      Math.pow(
        1 + inflation / 100,
        year
      );

    // SIP VALUE
    const sipValue =
      monthlySip *
      (
        (
          Math.pow(
            1 + monthlyRate,
            year * 12
          ) - 1
        ) / monthlyRate
      ) *
      (1 + monthlyRate);

    // SIP INFLATION ADJUSTED
    const adjustedSip =
      sipValue /
      Math.pow(
        1 + inflation / 100,
        year
      );

    chartData.push({
      year,

      RealEstate:
        Math.round(
          realEstateNominal
        ),

      SIP:
        Math.round(
          sipValue
        ),

      InflationAdjusted:
        Math.round(
          adjustedSip
        ),

      // ✅ NEW CHART LINE
      RealEstateInflationAdjusted:
        Math.round(
          realEstateAdjusted
        ),
    });
  }

  return (
    <main className="min-h-screen bg-[#020817] text-white p-6">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold mb-10">
          Real Estate vs SIP
        </h1>

        {/* INPUT SECTION */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">

          {/* REAL ESTATE */}
          <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 shadow-xl">

            <h2 className="text-3xl font-bold mb-6 text-blue-300">
              Real Estate
            </h2>

            <div className="space-y-5">

              <div>

                <label className="block mb-2 text-slate-300">
                  Property Price (₹)
                </label>

                <input
                  type="number"
                  value={propertyPrice}
                  onChange={(e) =>
                    setPropertyPrice(
                      Number(
                        e.target.value
                      )
                    )
                  }
                  className="w-full bg-slate-800 border border-slate-600 text-white p-4 rounded-xl outline-none"
                />

              </div>

              <div>

                <label className="block mb-2 text-slate-300">
                  Annual Growth (%)
                </label>

                <input
                  type="number"
                  value={propertyGrowth}
                  onChange={(e) =>
                    setPropertyGrowth(
                      Number(
                        e.target.value
                      )
                    )
                  }
                  className="w-full bg-slate-800 border border-slate-600 text-white p-4 rounded-xl outline-none"
                />

              </div>

              <div>

                <label className="block mb-2 text-slate-300">
                  Rental Yield (%)
                </label>

                <input
                  type="number"
                  value={rentalYield}
                  onChange={(e) =>
                    setRentalYield(
                      Number(
                        e.target.value
                      )
                    )
                  }
                  className="w-full bg-slate-800 border border-slate-600 text-white p-4 rounded-xl outline-none"
                />

              </div>

            </div>

          </div>

          {/* SIP */}
          <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 shadow-xl">

            <h2 className="text-3xl font-bold mb-6 text-green-300">
              SIP Investment
            </h2>

            <div className="space-y-5">

              <div>

                <label className="block mb-2 text-slate-300">
                  Monthly SIP (₹)
                </label>

                <input
                  type="number"
                  value={monthlySip}
                  onChange={(e) =>
                    setMonthlySip(
                      Number(
                        e.target.value
                      )
                    )
                  }
                  className="w-full bg-slate-800 border border-slate-600 text-white p-4 rounded-xl outline-none"
                />

              </div>

              <div>

                <label className="block mb-2 text-slate-300">
                  Expected Return (%)
                </label>

                <input
                  type="number"
                  value={sipReturn}
                  onChange={(e) =>
                    setSipReturn(
                      Number(
                        e.target.value
                      )
                    )
                  }
                  className="w-full bg-slate-800 border border-slate-600 text-white p-4 rounded-xl outline-none"
                />

              </div>

            </div>

          </div>

        </div>

        {/* YEARS */}
        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 mb-10">
          <div>

            <label className="block mb-2 text-slate-300">
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
              className="w-full bg-slate-800 border border-slate-600 text-white p-4 rounded-xl outline-none"
            />

          </div>
          <label className="block mb-2 text-slate-300">
            Investment Duration (Years)
          </label>

          <input
            type="number"
            value={years}
            onChange={(e) =>
              setYears(
                Number(e.target.value)
              )
            }
            className="w-full bg-slate-800 border border-slate-600 text-white p-4 rounded-xl outline-none"
          />

        </div>

        {/* RESULTS */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">

          {/* REAL ESTATE RESULT */}
          <div className="bg-blue-100 text-slate-900 rounded-3xl p-8 shadow-xl">

            <h2 className="text-4xl font-bold mb-8 text-slate-900">
              Real Estate Result
            </h2>

            <div className="space-y-8">

              <div>

                <p className="text-xl text-slate-700">
                  Future Property Value
                </p>

                <p className="text-5xl font-bold text-blue-700 mt-2 break-words">
                  ₹
                  {
                    formatIndianCurrency(
                      futurePropertyValue
                    )
                  }
                </p>

              </div>

              <div>

                <p className="text-xl text-slate-700">
                  Rental Income
                </p>

                <p className="text-5xl font-bold text-green-700 mt-2 break-words">
                  ₹
                  {
                    formatIndianCurrency(
                      totalRentalIncome
                    )
                  }
                </p>

              </div>

              <div>

                <p className="text-xl text-slate-700">
                  Total Wealth
                </p>

                <p className="text-5xl font-bold text-slate-900 mt-2 break-words">
                  ₹
                  {
                    formatIndianCurrency(
                      realEstateTotal
                    )
                  }
                </p>

              </div>

              {/* ✅ NEW */}
              <div>

                <p className="text-xl text-slate-700">
                  Inflation Adjusted Value
                </p>

                <p className="text-5xl font-bold text-purple-700 mt-2 break-words">
                  ₹
                  {
                    formatIndianCurrency(
                      inflationAdjustedRealEstate
                    )
                  }
                </p>

              </div>

            </div>

          </div>

          {/* SIP RESULT */}
          <div className="bg-green-100 text-slate-900 rounded-3xl p-8 shadow-xl">

            <h2 className="text-4xl font-bold mb-8 text-slate-900">
              SIP Result
            </h2>

            <div className="space-y-8">

              <div>

                <p className="text-xl text-slate-700">
                  Future SIP Corpus
                </p>

                <p className="text-5xl font-bold text-green-700 mt-2 break-words">
                  ₹
                  {
                    formatIndianCurrency(
                      futureSipValue
                    )
                  }
                </p>

              </div>

              <div>

                <p className="text-xl text-slate-700">
                  Inflation Adjusted Corpus
                </p>

                <p className="text-5xl font-bold text-orange-600 mt-2 break-words">
                  ₹
                  {
                    formatIndianCurrency(
                      inflationAdjustedSip
                    )
                  }
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* CHART */}
        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 mb-10">

          <h2 className="text-3xl font-bold mb-6">
            Wealth Growth Comparison
          </h2>

          <div className="h-[500px]">

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <LineChart data={chartData}>

                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#334155"
                />

                <XAxis
                  dataKey="year"
                  stroke="#CBD5E1"
                />

                <YAxis
                  stroke="#CBD5E1"
                  tickFormatter={(value) =>
                    `₹${(
                      value / 100000
                    ).toFixed(0)}L`
                  }
                />

                <Tooltip
                  formatter={(value) =>
                    `₹${formatIndianCurrency(
                      Number(value)
                    )}`
                  }
                />

                <Legend />

                {/* REAL ESTATE */}
                <Line
                  type="monotone"
                  dataKey="RealEstate"
                  name="Real Estate"
                  stroke="#3B82F6"
                  strokeWidth={3}
                />

                {/* SIP */}
                <Line
                  type="monotone"
                  dataKey="SIP"
                  name="SIP"
                  stroke="#22C55E"
                  strokeWidth={3}
                />

                {/* SIP ADJUSTED */}
                <Line
                  type="monotone"
                  dataKey="InflationAdjusted"
                  name="SIP Inflation Adjusted"
                  stroke="#F97316"
                  strokeWidth={3}
                />

                {/* ✅ NEW REAL ESTATE ADJUSTED */}
                <Line
                  type="monotone"
                  dataKey="RealEstateInflationAdjusted"
                  name="Real Estate Inflation Adjusted"
                  stroke="#A855F7"
                  strokeWidth={3}
                />

              </LineChart>

            </ResponsiveContainer>

          </div>

        </div>

        {/* INFO SECTION */}
        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 space-y-6">

          <h2 className="text-3xl font-bold">
            Understanding This Calculator
          </h2>

          <div className="space-y-4 text-slate-300 leading-8 text-lg">

            <p>
              • Real estate returns
              usually come from property
              appreciation + rental income.
            </p>

            <p>
              • SIP investments benefit
              heavily from long-term
              compounding.
            </p>

            <p>
              • Inflation-adjusted corpus
              shows the real purchasing
              power of your future money.
            </p>

            <p>
              • Liquidity, taxes,
              maintenance costs, vacancy
              risks, and loan interest are
              not included here.
            </p>

            <p>
              • Long investment duration
              plays a massive role in SIP
              wealth creation.
            </p>

          </div>

          <div className="bg-yellow-100 text-yellow-900 p-6 rounded-2xl">

            <h3 className="text-2xl font-bold mb-3">
              Disclaimer
            </h3>

            <p className="leading-7">
              This calculator provides
              estimates only and should
              not be considered financial
              advice. Actual returns,
              taxes, inflation, rental
              yield, and market conditions
              may vary significantly.
            </p>

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

            Real Estate vs SIP Investment Calculator

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

                Real Estate vs SIP — Which Investment is Better?

              </h3>

              <p className="leading-9 text-lg">

                Real estate and SIP investing are two of the most
                popular long-term wealth creation strategies in India.

                This Real Estate vs SIP Calculator helps compare
                property appreciation, rental income, SIP returns,
                inflation-adjusted wealth, and long-term compounding
                to understand which investment strategy may generate
                better financial outcomes over time.

              </p>

            </div>

            {/* REAL ESTATE */}

            <div>

              <h3
                className="
        text-2xl
        font-bold
        text-white
        mb-4
        "
              >

                Understanding Real Estate Investing

              </h3>

              <p className="leading-9 text-lg">

                Real estate investments generate returns mainly through
                property price appreciation and rental income.

                Property investments may offer stability, leverage,
                passive rental cash flow, and inflation protection,
                but they also involve maintenance costs, taxes,
                liquidity risks, vacancy risk, and higher capital
                requirements.

              </p>

            </div>

            {/* SIP */}

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

                SIP Investing and Long-Term Compounding

              </h3>

              <p className="leading-9 text-lg">

                SIP (Systematic Investment Plan) investing allows
                investors to build wealth gradually through disciplined
                monthly investments into mutual funds or equities.

                SIP investments benefit significantly from
                long-term compounding, rupee cost averaging,
                flexibility, and liquidity compared to traditional
                property investing.

              </p>

            </div>

            {/* COMPARISON */}

            <div>

              <h3
                className="
        text-2xl
        font-bold
        text-white
        mb-4
        "
              >

                What This Real Estate vs SIP Calculator Analyzes

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
                  Future property appreciation value
                </li>

                <li>
                  Rental income generation
                </li>

                <li>
                  SIP future corpus growth
                </li>

                <li>
                  Inflation-adjusted purchasing power
                </li>

                <li>
                  Long-term compounding impact
                </li>

                <li>
                  Wealth growth comparison over time
                </li>

              </ul>

            </div>

            {/* INFLATION */}

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

                Why Inflation Matters in Investment Planning

              </h3>

              <p className="leading-9 text-lg">

                Inflation reduces the future purchasing power of money.

                Inflation-adjusted investment analysis helps investors
                understand the real value of future wealth rather than
                just nominal returns.

                Both SIP investments and real estate returns should
                always be evaluated after considering inflation impact.

              </p>

            </div>

            {/* REAL ESTATE PROS */}

            <div>

              <h3
                className="
        text-2xl
        font-bold
        text-white
        mb-4
        "
              >

                Advantages of Real Estate Investing

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
                  Potential rental income generation
                </li>

                <li>
                  Tangible physical asset ownership
                </li>

                <li>
                  Long-term appreciation potential
                </li>

                <li>
                  Possible inflation hedge
                </li>

                <li>
                  Ability to use leverage via home loans
                </li>

              </ul>

            </div>

            {/* SIP PROS */}

            <div>

              <h3
                className="
        text-2xl
        font-bold
        text-white
        mb-4
        "
              >

                Advantages of SIP Investing

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
                  Higher liquidity and flexibility
                </li>

                <li>
                  Lower initial capital requirement
                </li>

                <li>
                  Strong long-term compounding potential
                </li>

                <li>
                  Diversified market exposure
                </li>

                <li>
                  Easier passive investing strategy
                </li>

              </ul>

            </div>

            {/* KEY INSIGHT */}

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

                Important Wealth Creation Insight

              </h3>

              <p className="leading-9 text-lg">

                Long investment duration often matters more than trying
                to perfectly time markets or property cycles.

                Consistent SIP investing combined with compounding can
                create substantial long-term wealth even with moderate
                monthly investments.

              </p>

            </div>

            {/* USE CASES */}

            <div>

              <h3
                className="
        text-2xl
        font-bold
        text-white
        mb-5
        "
              >

                Popular Investment Comparison Searches

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
                  "Real Estate vs Mutual Funds",
                  "Property vs SIP Investment",
                  "SIP vs House Investment",
                  "Real Estate ROI Calculator",
                  "SIP Wealth Calculator",
                  "Property Investment Analysis",
                  "Inflation Adjusted Investment Calculator",
                  "Long Term Wealth Comparison",
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

                Investment Disclaimer

              </h3>

              <p className="leading-9 text-lg">

                This calculator provides estimated investment outcomes
                based on assumed growth rates, inflation, rental yields,
                and SIP returns.

                Actual investment performance, taxes, maintenance costs,
                market cycles, liquidity, and economic conditions may
                differ significantly from projected values.

              </p>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}