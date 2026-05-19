"use client";

import { useState } from "react";

import Papa from "papaparse";

type Cashflow = {
  amount: number;
  date: string;
};

export default function XirrPage() {

  const [cashflows, setCashflows] =
    useState<Cashflow[]>([
      {
        amount: -10000,
        date: "2020-01-01",
      },
      {
        amount: -15000,
        date: "2021-01-01",
      },
      {
        amount: 50000,
        date: "2025-01-01",
      },
    ]);

  const [amount, setAmount] =
    useState(0);

  const [date, setDate] =
    useState("");

  // XNPV
  const xnpv = (
    rate: number,
    cashflows: Cashflow[]
  ) => {

    const firstDate =
      new Date(cashflows[0].date);

    return cashflows.reduce(
      (sum, cashflow) => {

        const days =
          (
            new Date(
              cashflow.date
            ).getTime() -
            firstDate.getTime()
          ) /
          (1000 * 60 * 60 * 24);

        return (
          sum +
          cashflow.amount /
            Math.pow(
              1 + rate,
              days / 365
            )
        );
      },
      0
    );
  };

  // XIRR
  const calculateXIRR = (
    cashflows: Cashflow[]
  ) => {

    let rate = 0.1;

    for (
      let i = 0;
      i < 1000;
      i++
    ) {

      const value =
        xnpv(rate, cashflows);

      const derivative =
        (
          xnpv(
            rate + 0.0001,
            cashflows
          ) - value
        ) / 0.0001;

      const newRate =
        rate - value / derivative;

      if (
        Math.abs(
          newRate - rate
        ) < 0.000001
      ) {
        return newRate * 100;
      }

      rate = newRate;
    }

    return rate * 100;
  };

  const xirr =
    cashflows.length > 1
      ? calculateXIRR(cashflows)
      : 0;

  // MANUAL ADD
  const addCashflow = () => {

    if (!amount || !date) return;

    setCashflows([
      ...cashflows,
      {
        amount,
        date,
      },
    ]);

    setAmount(0);
    setDate("");
  };

  // REMOVE CASHFLOW
  const removeCashflow = (
    index: number
  ) => {

    const updated =
      cashflows.filter(
        (_, i) => i !== index
      );

    setCashflows(updated);
  };

  // CSV UPLOAD
  const handleCsvUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {

    const file =
      event.target.files?.[0];

    if (!file) return;

    Papa.parse(file, {

      header: true,

      complete: (results) => {

        const parsedData =
          results.data.map(
            (row: any) => ({
              amount: Number(
                row.amount
              ),
              date: row.date,
            })
          );

        setCashflows((prev) => [
          ...prev,
          ...parsedData,
        ]);
      },
    });
  };

  return (
    <main className="min-h-screen bg-[#020817] text-white p-6">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold mb-10">
          XIRR Calculator
        </h1>

        {/* CSV UPLOAD */}
        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 mb-8">

          <h2 className="text-3xl font-bold mb-6">
            Upload CSV
          </h2>

          <input
            type="file"
            accept=".csv"
            onChange={handleCsvUpload}
            className="w-full bg-slate-800 border border-slate-600 p-4 rounded-xl"
          />

          <div className="mt-6">

            <p className="text-slate-400 mb-3">
              CSV Format:
            </p>

            <pre className="bg-slate-950 p-4 rounded-xl overflow-full md:w-auto text-sm">
{`amount,date
-10000,2020-01-01
-15000,2021-01-01
50000,2025-01-01`}
            </pre>

          </div>

        </div>

        {/* MANUAL ENTRY */}
        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 mb-8">

          <h2 className="text-3xl font-bold mb-6">
            Manual Cashflow Entry
          </h2>

          <div className="grid md:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

            <div>

              <label className="block mb-2 text-slate-300">
                Amount
              </label>

              <input
                type="number"
                value={amount}
                onChange={(e) =>
                  setAmount(
                    Number(
                      e.target.value
                    )
                  )
                }
                placeholder="Example: -10000"
                className="w-full bg-slate-800 border border-slate-600 p-4 rounded-xl outline-none"
              />

            </div>

            <div>

              <label className="block mb-2 text-slate-300">
                Date
              </label>

              <input
                type="date"
                value={date}
                onChange={(e) =>
                  setDate(
                    e.target.value
                  )
                }
                className="w-full bg-slate-800 border border-slate-600 p-4 rounded-xl outline-none"
              />

            </div>

            <div className="flex items-end">

              <button
                onClick={addCashflow}
                className="w-full bg-blue-600 hover:bg-blue-700 p-4 rounded-xl font-semibold"
              >
                Add Cashflow
              </button>

            </div>

          </div>

        </div>

        {/* CASHFLOW TABLE */}
        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 mb-8 overflow-full md:w-auto">

          <h2 className="text-3xl font-bold mb-6">
            Cashflow Entries
          </h2>

          <table className="w-full border-collapse">

            <thead>

              <tr className="border-b border-slate-700">

                <th className="text-left p-4">
                  Amount
                </th>

                <th className="text-left p-4">
                  Date
                </th>

                <th className="text-left p-4">
                  Action
                </th>

              </tr>

            </thead>

            <tbody>

              {
                cashflows.map(
                  (
                    item,
                    index
                  ) => (

                    <tr
                      key={index}
                      className="border-b border-slate-800"
                    >

                      <td className="p-4">

                        <span
                          className={
                            item.amount < 0
                              ? "text-red-400"
                              : "text-green-400"
                          }
                        >

                          ₹
                          {item.amount.toLocaleString(
                            "en-IN"
                          )}

                        </span>

                      </td>

                      <td className="p-4">

                        {item.date}

                      </td>

                      <td className="p-4">

                        <button
                          onClick={() =>
                            removeCashflow(
                              index
                            )
                          }
                          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
                        >
                          Remove
                        </button>

                      </td>

                    </tr>
                  )
                )
              }

            </tbody>

          </table>

          <button
            onClick={() =>
              setCashflows([])
            }
            className="mt-6 bg-red-700 hover:bg-red-800 px-6 py-3 rounded-xl"
          >

            Clear All Cashflows

          </button>

        </div>

        {/* XIRR RESULT */}
        <div className="bg-green-100 text-slate-900 rounded-3xl p-5 md:p-10 mb-10">

          <h2 className="text-3xl font-bold mb-5">
            Portfolio XIRR
          </h2>

          <p className="text-7xl font-bold text-green-700">

            {
              Number.isFinite(xirr)
                ? xirr.toFixed(2)
                : "0.00"
            }%

          </p>

        </div>

        {/* INFO SECTION */}
        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8">

          <h2 className="text-4xl font-bold mb-8">
            Understanding XIRR
          </h2>

          <div className="space-y-8 text-slate-300 leading-8">

            <div>

              <h3 className="text-2xl font-semibold text-white mb-3">
                What is XIRR?
              </h3>

              <p>
                XIRR (Extended Internal Rate of Return)
                calculates annualized returns for
                investments where cashflows happen
                on different dates.
              </p>

            </div>

            <div>

              <h3 className="text-2xl font-semibold text-white mb-3">
                Why XIRR is Better than CAGR?
              </h3>

              <p>
                CAGR assumes single investment and
                single redemption, while XIRR handles
                multiple SIPs, withdrawals, and irregular
                investments more accurately.
              </p>

            </div>

            <div>

              <h3 className="text-2xl font-semibold text-white mb-3">
                How to Enter Cashflows?
              </h3>

              <ul className="list-disc ml-8 space-y-3">

                <li>
                  Investments should be negative values
                </li>

                <li>
                  Withdrawals/current value should be positive
                </li>

                <li>
                  Final portfolio value is usually entered
                  as positive
                </li>

              </ul>

            </div>

            <div className="bg-blue-500/10 p-6 rounded-2xl">

              <h3 className="text-2xl font-semibold text-white mb-3">
                Example
              </h3>

              <p>
                If you invested ₹10,000 monthly through SIP
                and today your portfolio value is ₹8 lakhs,
                XIRR tells your actual annualized return.
              </p>

            </div>

            <div className="bg-yellow-500/10 p-6 rounded-2xl">

              <h3 className="text-2xl font-semibold text-white mb-3">
                Disclaimer
              </h3>

              <p>
                XIRR calculations are estimates based on
                entered cashflows and dates. Incorrect
                entries may lead to inaccurate results.
              </p>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}