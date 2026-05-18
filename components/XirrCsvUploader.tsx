"use client";

import Papa from "papaparse";

type Props = {
  setCashflows: any;
};

export default function XirrCsvUploader({
  setCashflows,
}: Props) {

  const handleFileUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {

    const file =
      event.target.files?.[0];

    if (!file) return;

    Papa.parse(file, {
      header: true,

      complete: (results) => {

        const parsed =
          results.data.map(
            (row: any) => ({
              amount: Number(
                row.amount
              ),
              date: row.date,
            })
          );

        setCashflows(parsed);
      },
    });
  };

  return (
    <div className="mb-6">

      <label className="block mb-3 text-lg font-semibold">

        Upload CSV File

      </label>

      <input
        type="file"
        accept=".csv"
        onChange={handleFileUpload}
        className="w-full bg-slate-800 border border-slate-600 p-3 rounded-xl"
      />

      <p className="text-sm text-slate-400 mt-3">
        CSV format:
        amount,date
      </p>

      <p className="text-sm text-slate-400">
        Example:
      </p>

      <pre className="bg-slate-900 p-3 rounded mt-2 text-sm overflow-auto">
{`amount,date
-10000,2020-01-01
-15000,2021-01-01
50000,2025-01-01`}
      </pre>

    </div>
  );
}