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

      </div>

    </main>
  );
}