"use client";

import { useMemo, useState } from "react";

import {
  Wallet,
  TrendingUp,
  ShieldCheck,
  AlertTriangle,
  PiggyBank,
} from "lucide-react";

import {
  formatIndianCurrency,
} from "../../utils/formatCurrency";

import InvestmentPieChart
  from "../../components/InvestmentPieChart";

import CompoundingChart
  from "../../components/CompoundingChart";

export default function SwpCalculator() {

  const [
    initialCorpus,
    setInitialCorpus,
  ] = useState(50000000);

  const [
    monthlyWithdrawal,
    setMonthlyWithdrawal,
  ] = useState(100000);

  const [
    expectedReturn,
    setExpectedReturn,
  ] = useState(10);

  const [
    inflation,
    setInflation,
  ] = useState(6);

  const [
    years,
    setYears,
  ] = useState(30);

  // -------------------------
  // SWP CALCULATION
  // -------------------------

  const swpData = useMemo(() => {

    let corpus =
      initialCorpus;

    const monthlyRate =
      expectedReturn /
      12 /
      100;

    const yearlyData = [];

    let totalMonths =
      0;

    let depleted =
      false;

    for (
      let month = 1;
      month <= years * 12;
      month++
    ) {

      // MONTHLY GROWTH
      corpus =
        corpus *
        (1 + monthlyRate);

      // WITHDRAWAL
      corpus =
        corpus -
        monthlyWithdrawal;

      // STOP IF CORPUS FINISHED
      if (corpus <= 0) {

        corpus = 0;

        totalMonths =
          month;

        depleted =
          true;

        break;
      }

      // STORE YEARLY DATA
      if (month % 12 === 0) {

        yearlyData.push({
          year:
            month / 12,

          corpus:
            Math.round(
              corpus
            ),
        });
      }

      totalMonths =
        month;
    }

    return {
      corpusLeft:
        Math.round(
          corpus
        ),

      survivedMonths:
        totalMonths,

      survivedYears:
        (
          totalMonths / 12
        ).toFixed(1),

      depleted,

      yearlyData,
    };

  }, [
    initialCorpus,
    monthlyWithdrawal,
    expectedReturn,
    years,
  ]);

  // -------------------------
  // INFLATION ADJUSTED
  // -------------------------

  const inflationAdjustedCorpus =
    swpData.corpusLeft /
    Math.pow(
      1 + inflation / 100,
      years
    );

  return (

    <main className="
min-h-screen
bg-[#020817]
text-white
p-6
">

      <div className="
max-w-7xl
mx-auto
">

        {/* HERO */}
        <div className="
relative
overflow-hidden
rounded-[32px]
border
border-slate-800
bg-gradient-to-br
from-slate-950
via-blue-950
to-slate-950
p-8
mb-10
">

          <div className="
absolute
top-0
right-0
w-96
h-96
bg-blue-500/10
blur-3xl
rounded-full
" />

          <div className="
relative
z-10
flex
flex-col
lg:flex-row
lg:items-center
lg:justify-between
gap-10
">

            <div>

              <div className="
inline-flex
items-center
gap-2
bg-blue-500/10
border
border-blue-500/20
text-blue-300
px-4
py-2
rounded-full
mb-5
">

                <PiggyBank
                  className="
w-5
h-5
"
                />

                Retirement Income Planner

              </div>

              <h1 className="
text-5xl
lg:text-6xl
font-bold
leading-tight
mb-5
">

                SWP Calculator

              </h1>

              <p className="
text-slate-300
text-lg
leading-8
max-w-3xl
">

                Estimate how long your investment corpus
                can survive while generating regular
                monthly income through SWP withdrawals.

              </p>

            </div>

            {/* QUICK SUMMARY */}
            <div className="
w-full
lg:w-[380px]
bg-slate-900/80
backdrop-blur-xl
border
border-slate-700
rounded-3xl
p-6
shrink-0
">

              <p className="
text-slate-400
mb-2
">

                Remaining Corpus

              </p>

              <h2 className="
text-4xl
font-bold
text-blue-400
break-words
mb-6
">

                ₹{
                  formatIndianCurrency(
                    swpData.corpusLeft
                  )
                }

              </h2>

              <div className="
space-y-4
">

                <div className="
flex
justify-between
text-sm
">

                  <span className="text-slate-400">
                    Monthly Withdrawal
                  </span>

                  <span>
                    ₹{
                      formatIndianCurrency(
                        monthlyWithdrawal
                      )
                    }
                  </span>

                </div>

                <div className="
flex
justify-between
text-sm
">

                  <span className="text-slate-400">
                    Survival
                  </span>

                  <span className="text-green-400">
                    {
                      swpData.survivedMonths
                    } Months
                  </span>

                </div>

                <div className="
flex
justify-between
text-sm
">

                  <span className="text-slate-400">
                    Status
                  </span>

                  <span
                    className={
                      swpData.depleted
                        ? "text-red-400"
                        : "text-green-400"
                    }
                  >
                    {
                      swpData.depleted
                        ? "Corpus Depleted"
                        : "Corpus Survived"
                    }
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* INPUTS */}
        <div className="
bg-slate-900
border
border-slate-800
rounded-3xl
p-8
mb-10
">

          <h2 className="
text-3xl
font-bold
mb-8
">

            SWP Details

          </h2>

          <div className="
grid
md:grid-cols-2
xl:grid-cols-3
gap-6
">

            {/* CORPUS */}
            <div>

              <label className="
block
mb-3
text-slate-300
">

                Initial Corpus (₹)

              </label>

              <div className="relative">

                <Wallet
                  className="
absolute
left-4
top-4
w-5
h-5
text-slate-500
"
                />

                <input
                  type="number"
                  value={initialCorpus}
                  onChange={(e) =>
                    setInitialCorpus(
                      Number(
                        e.target.value
                      )
                    )
                  }
                  className="
w-full
pl-12
bg-slate-800
border
border-slate-700
rounded-2xl
p-4
outline-none
focus:border-blue-500
"
                />

              </div>

            </div>

            {/* WITHDRAWAL */}
            <div>

              <label className="
block
mb-3
text-slate-300
">

                Monthly Withdrawal (₹)

              </label>

              <div className="relative">

                <TrendingUp
                  className="
absolute
left-4
top-4
w-5
h-5
text-slate-500
"
                />

                <input
                  type="number"
                  value={monthlyWithdrawal}
                  onChange={(e) =>
                    setMonthlyWithdrawal(
                      Number(
                        e.target.value
                      )
                    )
                  }
                  className="
w-full
pl-12
bg-slate-800
border
border-slate-700
rounded-2xl
p-4
outline-none
focus:border-blue-500
"
                />

              </div>

            </div>

            {/* RETURN */}
            <div>

              <label className="
block
mb-3
text-slate-300
">

                Expected Return (%)

              </label>

              <input
                type="number"
                value={expectedReturn}
                onChange={(e) =>
                  setExpectedReturn(
                    Number(
                      e.target.value
                    )
                  )
                }
                className="
w-full
bg-slate-800
border
border-slate-700
rounded-2xl
p-4
outline-none
focus:border-blue-500
"
              />

            </div>

            {/* INFLATION */}
            <div>

              <label className="
block
mb-3
text-slate-300
">

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
border-slate-700
rounded-2xl
p-4
outline-none
focus:border-blue-500
"
              />

            </div>

            {/* YEARS */}
            <div>

              <label className="
block
mb-3
text-slate-300
">

                Duration (Years)

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
bg-slate-800
border
border-slate-700
rounded-2xl
p-4
outline-none
focus:border-blue-500
"
              />

            </div>

          </div>

        </div>

        {/* RESULT CARDS */}
        <div className="
grid
grid-cols-1
md:grid-cols-2
xl:grid-cols-4
gap-6
mb-10
">

          {/* CORPUS LEFT */}
          <div className="
bg-slate-900
border
border-slate-800
rounded-3xl
p-6
">

            <div className="
flex
items-start
justify-between
gap-4
mb-5
">

              <div>

                <p className="
text-slate-400
mb-2
">

                  Corpus Left

                </p>

                <h2 className="
text-3xl
font-bold
text-blue-400
break-words
leading-tight
">

                  ₹{
                    formatIndianCurrency(
                      swpData.corpusLeft
                    )
                  }

                </h2>

              </div>

              <div className="
shrink-0
bg-blue-500/10
p-4
rounded-2xl
">


              </div>

            </div>

          </div>

          {/* INFLATION */}
          <div className="
bg-slate-900
border
border-slate-800
rounded-3xl
p-6
">

            <div className="
flex
items-start
justify-between
gap-4
mb-5
">

              <div>

                <p className="
text-slate-400
mb-2
">

                  Inflation Adjusted

                </p>

                <h2 className="
text-3xl
font-bold
text-purple-400
break-words
leading-tight
">

                  ₹{
                    formatIndianCurrency(
                      inflationAdjustedCorpus
                    )
                  }

                </h2>

              </div>

              <div className="
shrink-0
bg-purple-500/10
p-4
rounded-2xl
">


              </div>

            </div>

          </div>

          {/* SURVIVAL */}
          <div className="
bg-slate-900
border
border-slate-800
rounded-3xl
p-6
">

            <div className="
flex
items-start
justify-between
gap-4
mb-5
">

              <div>

                <p className="
text-slate-400
mb-2
">

                  Survival Duration

                </p>

                <h2 className="
text-3xl
font-bold
text-green-400
break-words
leading-tight
">

                  {
                    swpData.survivedMonths
                  } Months

                </h2>

              </div>

              <div className="
shrink-0
bg-green-500/10
p-4
rounded-2xl
">

              </div>

            </div>

          </div>

          {/* STATUS */}
          <div className="
bg-slate-900
border
border-slate-800
rounded-3xl
p-6
">

            <div className="
flex
items-start
justify-between
gap-4
mb-5
">

              <div>

                <p className="
text-slate-400
mb-2
">

                  Status

                </p>

                <h2
                  className={`text-3xl font-bold leading-tight ${swpData.depleted
                    ? "text-red-400"
                    : "text-green-400"
                    }`}
                >

                  {
                    swpData.depleted
                      ? "Depleted"
                      : "Healthy"
                  }

                </h2>

              </div>

              <div className="
shrink-0
bg-red-500/10
p-4
rounded-2xl
">


              </div>

            </div>

          </div>

        </div>

        {/* CHARTS */}
        <div className="
grid
lg:grid-cols-2
gap-6
mb-10
">

          {/* PIE CHART */}
          <div className="
bg-slate-900
border
border-slate-800
rounded-3xl
p-6
">

            <h2 className="
text-2xl
font-bold
mb-8
">

              Corpus Breakdown

            </h2>

            <InvestmentPieChart
              invested={
                initialCorpus
              }
              wealth={
                swpData.corpusLeft
              }
              investedLabel="Initial Corpus"
              wealthLabel="Remaining Corpus"
            />

          </div>

          {/* CURVE */}
          <div className="
bg-slate-900
border
border-slate-800
rounded-3xl
p-6
">

            <h2 className="
text-2xl
font-bold
mb-8
">

              Corpus Survival Curve

            </h2>

            <CompoundingChart
              data={
                swpData.yearlyData.map(
                  (item) => ({
                    year:
                      item.year,

                    nominalValue:
                      item.corpus,

                    realValue:
                      item.corpus /
                      Math.pow(
                        1 + inflation / 100,
                        item.year
                      ),
                  })
                )
              }
            />

          </div>

        </div>

        {/* INFO SECTION */}
        <div className="
bg-slate-900
border
border-slate-800
rounded-3xl
p-8
">

          <h2 className="
text-4xl
font-bold
mb-10
">

            Understanding SWP

          </h2>

          <div className="
grid
lg:grid-cols-2
gap-8
">

            <div className="
bg-blue-500/10
border
border-blue-500/20
rounded-3xl
p-6
">

              <h3 className="
text-2xl
font-semibold
mb-4
">

                What is SWP?

              </h3>

              <p className="
text-slate-300
leading-8
">

                SWP (Systematic Withdrawal Plan)
                allows investors to withdraw
                fixed monthly income while
                remaining investments continue
                compounding over time.

              </p>

            </div>

            <div className="
bg-green-500/10
border
border-green-500/20
rounded-3xl
p-6
">

              <h3 className="
text-2xl
font-semibold
mb-4
">

                Why SWP is Powerful

              </h3>

              <ul className="
list-disc
ml-6
space-y-3
text-slate-300
leading-7
">

                <li>
                  Creates retirement cash flow
                </li>

                <li>
                  Remaining corpus still compounds
                </li>

                <li>
                  Better withdrawal discipline
                </li>

                <li>
                  Useful for passive income
                </li>

              </ul>

            </div>

            <div className="
bg-orange-500/10
border
border-orange-500/20
rounded-3xl
p-6
">

              <h3 className="
text-2xl
font-semibold
mb-4
">

                Important Insights

              </h3>

              <ul className="
list-disc
ml-6
space-y-3
text-slate-300
leading-7
">

                <li>
                  Higher withdrawals reduce survival
                </li>

                <li>
                  Inflation reduces purchasing power
                </li>

                <li>
                  Returns should exceed withdrawals
                </li>

                <li>
                  Market crashes affect sustainability
                </li>

              </ul>

            </div>

            <div className="
bg-yellow-500/10
border
border-yellow-500/20
rounded-3xl
p-6
">

              <h3 className="
text-2xl
font-semibold
mb-4
">

                Disclaimer

              </h3>

              <p className="
text-slate-300
leading-8
">

                This calculator provides estimated
                projections only. Actual SWP survival
                depends on market returns, taxes,
                inflation, and withdrawal behavior.

              </p>

            </div>

          </div>

        </div>

        {/* SEO CONTENT SECTION */}

        <div className="
mt-12
bg-slate-900
border
border-slate-800
rounded-3xl
p-8
">

          <h2 className="
text-4xl
font-bold
mb-8
">
            SWP Calculator Guide
          </h2>

          <div className="
space-y-10
text-slate-300
leading-8
">

            {/* WHAT IS SWP */}

            <div>

              <h3 className="
text-2xl
font-semibold
text-white
mb-4
">
                What is a Systematic Withdrawal Plan (SWP)?
              </h3>

              <p>
                A Systematic Withdrawal Plan (SWP) allows investors
                to withdraw a fixed amount of money regularly from
                mutual funds or investment portfolios while the
                remaining corpus continues growing through compounding.
              </p>

              <p className="mt-4">
                SWP is commonly used for retirement income,
                passive income generation, financial independence,
                and maintaining monthly cash flow without selling
                the entire investment portfolio at once.
              </p>

            </div>

            {/* WHY SWP */}

            <div>

              <h3 className="
text-2xl
font-semibold
text-white
mb-4
">
                Why Investors Use SWP
              </h3>

              <ul className="
list-disc
ml-8
space-y-3
">

                <li>
                  Creates predictable monthly income
                </li>

                <li>
                  Helps maintain retirement lifestyle
                </li>

                <li>
                  Remaining corpus continues compounding
                </li>

                <li>
                  Better tax efficiency compared to fixed deposits
                </li>

                <li>
                  Useful for early retirement and FIRE planning
                </li>

                <li>
                  Reduces emotional investing decisions
                </li>

              </ul>

            </div>

            {/* SAFE WITHDRAWAL */}

            <div>

              <h3 className="
text-2xl
font-semibold
text-white
mb-4
">
                What is a Safe Withdrawal Rate?
              </h3>

              <p>
                A safe withdrawal rate refers to the percentage
                of portfolio value that can be withdrawn annually
                without exhausting the investment corpus too early.
              </p>

              <p className="mt-4">
                Many long-term retirement studies suggest that
                withdrawal rates between 3% to 4% annually are
                relatively sustainable for diversified portfolios,
                though actual results depend on market returns,
                inflation, taxes, and investment allocation.
              </p>

            </div>

            {/* INFLATION */}

            <div>

              <h3 className="
text-2xl
font-semibold
text-white
mb-4
">
                Impact of Inflation on SWP
              </h3>

              <p>
                Inflation continuously reduces purchasing power
                over time. Even if your investment corpus survives,
                rising expenses may reduce your real standard of living.
              </p>

              <p className="mt-4">
                This is why inflation-adjusted calculations are
                critical while planning retirement income and
                long-term withdrawals.
              </p>

            </div>

            {/* SWP VS FD */}

            <div>

              <h3 className="
text-2xl
font-semibold
text-white
mb-4
">
                SWP vs Fixed Deposit (FD)
              </h3>

              <div className="
overflow-x-auto
">

                <table className="
w-full
border
border-slate-700
rounded-2xl
overflow-hidden
">

                  <thead className="bg-slate-800">

                    <tr>

                      <th className="p-4 text-left">
                        Feature
                      </th>

                      <th className="p-4 text-left">
                        SWP
                      </th>

                      <th className="p-4 text-left">
                        Fixed Deposit
                      </th>

                    </tr>

                  </thead>

                  <tbody>

                    <tr className="border-t border-slate-700">

                      <td className="p-4">
                        Growth Potential
                      </td>

                      <td className="p-4">
                        Higher
                      </td>

                      <td className="p-4">
                        Limited
                      </td>

                    </tr>

                    <tr className="border-t border-slate-700">

                      <td className="p-4">
                        Inflation Protection
                      </td>

                      <td className="p-4">
                        Better
                      </td>

                      <td className="p-4">
                        Weak
                      </td>

                    </tr>

                    <tr className="border-t border-slate-700">

                      <td className="p-4">
                        Market Risk
                      </td>

                      <td className="p-4">
                        Moderate
                      </td>

                      <td className="p-4">
                        Low
                      </td>

                    </tr>

                    <tr className="border-t border-slate-700">

                      <td className="p-4">
                        Long-Term Wealth
                      </td>

                      <td className="p-4">
                        Strong
                      </td>

                      <td className="p-4">
                        Limited
                      </td>

                    </tr>

                  </tbody>

                </table>

              </div>

            </div>

            {/* FAQ */}

            <div>

              <h3 className="
text-2xl
font-semibold
text-white
mb-6
">
                Frequently Asked Questions
              </h3>

              <div className="space-y-6">

                <div className="
bg-slate-800/60
rounded-2xl
p-6
">

                  <h4 className="
text-xl
font-semibold
mb-3
text-white
">
                    Is SWP good for retirement?
                  </h4>

                  <p>
                    Yes, SWP is widely used for retirement
                    income because it provides regular cash flow
                    while allowing the remaining investment corpus
                    to continue compounding.
                  </p>

                </div>

                <div className="
bg-slate-800/60
rounded-2xl
p-6
">

                  <h4 className="
text-xl
font-semibold
mb-3
text-white
">
                    Can SWP beat inflation?
                  </h4>

                  <p>
                    SWP invested in equity-oriented mutual funds
                    has better chances of beating inflation over
                    long periods compared to traditional fixed-income products.
                  </p>

                </div>

                <div className="
bg-slate-800/60
rounded-2xl
p-6
">

                  <h4 className="
text-xl
font-semibold
mb-3
text-white
">
                    What happens if market crashes during SWP?
                  </h4>

                  <p>
                    Market crashes can reduce portfolio value
                    significantly. Maintaining proper asset allocation,
                    emergency cash buffers, and reasonable withdrawal
                    rates helps improve portfolio survival.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>
      </div>

    </main>
  );
}