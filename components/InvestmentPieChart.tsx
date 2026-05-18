"use client";

import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from "recharts";

type Props = {
    invested: number;
    wealth: number;
  
    investedLabel?: string;
    wealthLabel?: string;
  };

  export default function InvestmentPieChart({
    invested,
    wealth,
    investedLabel = "Invested Amount",
    wealthLabel = "Wealth Gained",
  }: Props) {

    const data = [
        {
          name: investedLabel,
          value: invested,
        },
        {
          name: wealthLabel,
          value: wealth,
        },
      ];

    const COLORS = [
        "#3b82f6",
        "#16a34a",
    ];

    return (
        <div className="w-full h-[350px]">

            <ResponsiveContainer>

                <PieChart>

                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        outerRadius={120}
                        dataKey="value"
                        label={({ value }) =>
                            `₹${new Intl.NumberFormat(
                                "en-IN",
                                {
                                    maximumFractionDigits: 0,
                                }
                            ).format(Number(value))}`
                        }
                    >

                        {
                            data.map((_, index) => (
                                <Cell
                                    key={index}
                                    fill={
                                        COLORS[index % COLORS.length]
                                    }
                                />
                            ))
                        }

                    </Pie>

                    <Tooltip
                        formatter={(value) =>
                            `₹${new Intl.NumberFormat(
                                "en-IN",
                                {
                                    maximumFractionDigits: 0,
                                }
                            ).format(Number(value))}`
                        }
                    />

                    <Legend />

                </PieChart>

            </ResponsiveContainer>

        </div>
    );
}