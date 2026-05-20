"use client";

import { useState } from "react";

import {
  Home,
  Wallet,
  Percent,
  CalendarDays,
  TrendingUp,
  AlertTriangle,
  IndianRupee,
} from "lucide-react";

import InvestmentPieChart
  from "../../components/InvestmentPieChart";

import {
  formatIndianCurrency,
} from "../../utils/formatCurrency";

export default function EMICalculator() {

  const [
    loanAmount,
    setLoanAmount,
  ] = useState(5000000);

  const [
    interestRate,
    setInterestRate,
  ] = useState(8.5);

  const [
    tenure,
    setTenure,
  ] = useState(20);

  // EMI CALCULATION
  const monthlyRate =
    interestRate / 12 / 100;

  const totalMonths =
    tenure * 12;

  const emi =
    (
      loanAmount *
      monthlyRate *
      Math.pow(
        1 + monthlyRate,
        totalMonths
      )
    ) /
    (
      Math.pow(
        1 + monthlyRate,
        totalMonths
      ) - 1
    );

  const totalPayment =
    emi * totalMonths;

  const totalInterest =
    totalPayment -
    loanAmount;

  // INTEREST %
  const interestBurden =
    (
      totalInterest /
      totalPayment
    ) * 100;

  // YEARLY TABLE
  const yearlyData =
    Array.from(
      { length: tenure },
      (_, index) => {

        const year =
          index + 1;

        const paid =
          emi * 12 * year;

        return {
          year,
          paid,
        };
      }
    );

  return (

    <main className="
min-h-screen
bg-gradient-to-b
from-[#020817]
via-[#081225]
to-black
text-white
p-6
">

      <div className="
max-w-7xl
mx-auto
">

        {/* HERO */}
        <div className="
bg-gradient-to-br
from-blue-950
via-slate-900
to-slate-950
border
border-slate-800
rounded-[32px]
p-8
lg:p-12
mb-10
overflow-hidden
relative
">

          <div className="
absolute
top-0
right-0
w-72
h-72
bg-blue-500/10
blur-3xl
rounded-full
" />

          <div className="
relative
z-10
max-w-3xl
">

            <div className="
inline-flex
items-center
gap-2
bg-blue-500/10
text-blue-400
px-4
py-2
rounded-full
mb-5
border
border-blue-500/20
">

              <Home className="w-5 h-5" />

              Smart Loan Planning

            </div>

            <h1 className="
text-5xl
lg:text-6xl
font-bold
leading-tight
mb-6
bg-gradient-to-r
from-white
to-slate-400
bg-clip-text
text-transparent
">

              EMI Calculator

            </h1>

            <p className="
text-slate-400
text-lg
leading-8
max-w-2xl
">

              Calculate your monthly EMI,
              interest payable, and total
              repayment instantly with
              beautiful financial insights.

            </p>

          </div>

        </div>

        {/* MAIN GRID */}
        <div className="
grid
grid-cols-1
lg:grid-cols-5
gap-6
">

          {/* INPUT PANEL */}
          <div className="
lg:col-span-2
bg-slate-900/80
backdrop-blur-xl
border
border-slate-800
rounded-[32px]
p-6
">

            <h2 className="
text-2xl
font-bold
mb-8
">

              Loan Details

            </h2>

            <div className="space-y-8">

              {/* LOAN */}
              <div>

                <label className="
block
mb-3
text-slate-300
font-medium
">

                  Loan Amount

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
                    value={loanAmount}
                    onChange={(e) =>
                      setLoanAmount(
                        Number(
                          e.target.value
                        )
                      )
                    }
                    className="
w-full
pl-12
bg-slate-950/70
border
border-slate-700
rounded-2xl
p-4
outline-none
transition-all
duration-300
focus:border-blue-500
focus:ring-4
focus:ring-blue-500/10
hover:border-slate-500
"
                  />

                </div>

                <input
                  type="range"
                  min="100000"
                  max="50000000"
                  step="100000"
                  value={loanAmount}
                  onChange={(e) =>
                    setLoanAmount(
                      Number(
                        e.target.value
                      )
                    )
                  }
                  className="
w-full
mt-4
accent-blue-500
"
                />

              </div>

              {/* INTEREST */}
              <div>

                <label className="
block
mb-3
text-slate-300
font-medium
">

                  Interest Rate (%)

                </label>

                <div className="relative">

                  <Percent
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
                    value={interestRate}
                    onChange={(e) =>
                      setInterestRate(
                        Number(
                          e.target.value
                        )
                      )
                    }
                    className="
w-full
pl-12
bg-slate-950/70
border
border-slate-700
rounded-2xl
p-4
outline-none
transition-all
duration-300
focus:border-blue-500
focus:ring-4
focus:ring-blue-500/10
hover:border-slate-500
"
                  />

                </div>

                <input
                  type="range"
                  min="1"
                  max="20"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) =>
                    setInterestRate(
                      Number(
                        e.target.value
                      )
                    )
                  }
                  className="
w-full
mt-4
accent-blue-500
"
                />

              </div>

              {/* TENURE */}
              <div>

                <label className="
block
mb-3
text-slate-300
font-medium
">

                  Loan Tenure (Years)

                </label>

                <div className="relative">

                  <CalendarDays
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
                    value={tenure}
                    onChange={(e) =>
                      setTenure(
                        Number(
                          e.target.value
                        )
                      )
                    }
                    className="
w-full
pl-12
bg-slate-950/70
border
border-slate-700
rounded-2xl
p-4
outline-none
transition-all
duration-300
focus:border-blue-500
focus:ring-4
focus:ring-blue-500/10
hover:border-slate-500
"
                  />

                </div>

                <input
                  type="range"
                  min="1"
                  max="35"
                  step="1"
                  value={tenure}
                  onChange={(e) =>
                    setTenure(
                      Number(
                        e.target.value
                      )
                    )
                  }
                  className="
w-full
mt-4
accent-blue-500
"
                />

              </div>

            </div>

          </div>

          {/* RIGHT SECTION */}
          <div className="
lg:col-span-3
space-y-6
">

            {/* RESULT CARDS */}
            <div className="
grid
grid-cols-1
md:grid-cols-2
xl:grid-cols-3
gap-6
">

              {/* EMI */}
              <div className="
bg-slate-900/80
border
border-slate-800
rounded-[32px]
p-6
hover:border-blue-500/30
transition-all
duration-300
">

                <div className="
flex
items-start
justify-between
gap-4
">

                  <div className="flex-1">

                    <p className="
text-slate-400
mb-3
">

                      Monthly EMI

                    </p>

                    <h2 className="
text-2xl
lg:text-3xl
font-bold
text-blue-400
break-words
leading-tight
">

                      ₹{
                        formatIndianCurrency(
                          emi
                        )
                      }

                    </h2>

                  </div>

                  <div className="
bg-blue-500/10
p-4
rounded-2xl
shrink-0
">

                  </div>

                </div>

              </div>

              {/* INTEREST */}
              <div className="
bg-slate-900/80
border
border-slate-800
rounded-[32px]
p-6
hover:border-red-500/30
transition-all
duration-300
">

                <div className="
flex
items-start
justify-between
gap-4
">

                  <div className="flex-1">

                    <p className="
text-slate-400
mb-3
">

                      Total Interest

                    </p>

                    <h2 className="
text-2xl
lg:text-3xl
font-bold
text-red-400
break-words
leading-tight
">

                      ₹{
                        formatIndianCurrency(
                          totalInterest
                        )
                      }

                    </h2>

                  </div>

                  <div className="
bg-red-500/10
p-4
rounded-2xl
shrink-0
">


                  </div>

                </div>

              </div>

              {/* TOTAL PAYMENT */}
              <div className="
bg-gradient-to-br
from-green-900/30
to-slate-900
border
border-green-500/20
rounded-[32px]
p-6
hover:border-green-500/40
transition-all
duration-300
">

                <div className="
flex
items-start
justify-between
gap-4
">

                  <div className="flex-1">

                    <p className="
text-slate-400
mb-3
">

                      Total Payment

                    </p>

                    <h2 className="
text-2xl
lg:text-3xl
font-bold
text-green-400
break-words
leading-tight
">

                      ₹{
                        formatIndianCurrency(
                          totalPayment
                        )
                      }

                    </h2>

                  </div>

                  <div className="
bg-green-500/10
p-4
rounded-2xl
shrink-0
">

                  </div>

                </div>

              </div>

            </div>

            {/* INTEREST BURDEN */}
            <div className="
bg-slate-900/80
border
border-slate-800
rounded-[32px]
p-6
">

              <div className="
flex
justify-between
items-center
mb-5
">

                <div>

                  <h3 className="
text-2xl
font-bold
mb-1
">

                    Interest Burden

                  </h3>

                  <p className="text-slate-400">
                    Percentage of interest in total repayment
                  </p>

                </div>

                <div className="
text-4xl
font-bold
text-red-400
">

                  {
                    interestBurden.toFixed(1)
                  }%

                </div>

              </div>

              <div className="
w-full
bg-slate-800
rounded-full
h-5
overflow-hidden
">

                <div
                  style={{
                    width: `${interestBurden}%`,
                  }}
                  className="
bg-gradient-to-r
from-red-500
to-orange-500
h-full
rounded-full
transition-all
duration-500
"
                />

              </div>

            </div>

            {/* CHART */}
            <div className="
bg-slate-900/80
border
border-slate-800
rounded-[32px]
p-6
">

              <h2 className="
text-2xl
font-bold
mb-8
">

                Principal vs Interest

              </h2>

              <InvestmentPieChart
                invested={loanAmount}
                wealth={totalInterest}
                investedLabel={"Principal"}
                wealthLabel={"Interest"}
              />

              {/* PROGRESS BAR */}
              <div className="mt-8">

                <div className="
flex
justify-between
mb-3
text-sm
">

                  <span className="text-blue-400">
                    Principal
                  </span>

                  <span className="text-red-400">
                    Interest
                  </span>

                </div>

                <div className="
flex
h-5
rounded-full
overflow-hidden
">

                  <div
                    style={{
                      width: `${(
                          loanAmount /
                          totalPayment
                        ) * 100
                        }%`,
                    }}
                    className="
bg-blue-500
"
                  />

                  <div
                    style={{
                      width: `${(
                          totalInterest /
                          totalPayment
                        ) * 100
                        }%`,
                    }}
                    className="
bg-red-500
"
                  />

                </div>

              </div>

            </div>

            {/* TIMELINE */}
            <div className="
bg-slate-900/80
border
border-slate-800
rounded-[32px]
p-6
overflow-x-auto
">

              <h2 className="
text-2xl
font-bold
mb-6
">

                Repayment Timeline

              </h2>

              <table className="
w-full
border-collapse
">

                <thead>

                  <tr className="
bg-slate-800
">

                    <th className="
text-left
p-4
rounded-l-2xl
">

                      Year

                    </th>

                    <th className="
text-left
p-4
rounded-r-2xl
">

                      Total Paid

                    </th>

                  </tr>

                </thead>

                <tbody>

                  {
                    yearlyData.map(
                      (
                        item,
                        index
                      ) => (

                        <tr
                          key={index}
                          className={`
border-b
border-slate-800
${index % 2 === 0
                              ? "bg-slate-900/40"
                              : "bg-slate-950/40"
                            }
`}
                        >

                          <td className="p-4">
                            Year {item.year}
                          </td>

                          <td className="
p-4
font-semibold
text-blue-400
">

                            ₹{
                              formatIndianCurrency(
                                item.paid
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

        </div>

        {/* INFO SECTION */}
        <div className="
mt-14
bg-slate-900/80
border
border-slate-800
rounded-[32px]
p-8
">

          <h2 className="
text-4xl
font-bold
mb-10
">

            Understanding EMI

          </h2>

          <div className="
grid
md:grid-cols-2
gap-6
">

            <div className="
bg-slate-950/60
border
border-slate-800
rounded-3xl
p-6
">

              <IndianRupee
                className="
w-10
h-10
text-blue-400
mb-4
"
              />

              <h3 className="
text-2xl
font-bold
mb-4
">

                What is EMI?

              </h3>

              <p className="
text-slate-300
leading-8
">

                EMI is the fixed monthly
                payment made towards loan
                repayment including both
                principal and interest.

              </p>

            </div>

            <div className="
bg-slate-950/60
border
border-slate-800
rounded-3xl
p-6
">

              <TrendingUp
                className="
w-10
h-10
text-green-400
mb-4
"
              />

              <h3 className="
text-2xl
font-bold
mb-4
">

                Pro Tip

              </h3>

              <p className="
text-slate-300
leading-8
">

                Increasing EMI slightly every
                year can dramatically reduce
                loan tenure and save lakhs
                in interest payments.

              </p>

            </div>

            <div className="
bg-slate-950/60
border
border-slate-800
rounded-3xl
p-6
">

              <AlertTriangle
                className="
w-10
h-10
text-yellow-400
mb-4
"
              />

              <h3 className="
text-2xl
font-bold
mb-4
">

                Important Insights

              </h3>

              <ul className="
space-y-3
text-slate-300
leading-7
">

                <li>
                  • Longer tenure lowers EMI but increases interest
                </li>

                <li>
                  • Small rate changes create huge cost impact
                </li>

                <li>
                  • Prepayments reduce interest significantly
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
font-bold
mb-4
text-yellow-300
">

                Disclaimer

              </h3>

              <p className="
text-slate-300
leading-8
">

                EMI calculations are estimates.
                Actual repayment may vary due
                to floating rates, lender fees,
                and prepayments.

              </p>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}