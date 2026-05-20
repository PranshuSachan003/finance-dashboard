"use client";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from "recharts";

type Props = {
    data: {
        year: number;
        nominalValue: number;
        realValue: number;
    }[];
};

function formatCurrency(
    value: number
) {

    if (value >= 10000000) {
        return `₹${(
            value / 10000000
        ).toFixed(1)}Cr`;
    }

    if (value >= 100000) {
        return `₹${(
            value / 100000
        ).toFixed(1)}L`;
    }

    return `₹${value}`;
}

export default function CompoundingChart({
    data,
}: Props) {

    return (
        <div className="w-full h-[400px] mt-10">

            <h2 className="text-2xl font-bold mb-4">
                Compounding Growth
            </h2>

            <ResponsiveContainer>

                <LineChart data={data}>

                    <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="#334155"
                    />

                    <XAxis
                        dataKey="year"
                        stroke="#94A3B8"
                        tickFormatter={(value) =>
                            `${value}Y`
                        }
                    />

                    <YAxis
                        stroke="#94A3B8"
                        tickFormatter={
                            formatCurrency
                        }
                    />

                    <Tooltip
                        contentStyle={{
                            backgroundColor:
                                "#0F172A",
                            border:
                                "1px solid #334155",
                            borderRadius:
                                "24px",
                            color: "white",
                            padding:
                                "18px 22px",
                        }}
                        labelStyle={{
                            color: "white",
                            fontWeight: 700,
                            fontSize: 18,
                            marginBottom: 10,
                        }}
                        itemStyle={{
                            fontSize: 16,
                            fontWeight: 600,
                        }}
                        labelFormatter={(label) =>
                            `${label} Yr`
                        }
                        formatter={(value) =>
                            formatCurrency(
                                Number(value)
                            )
                        }
                    />

                    {/* PORTFOLIO VALUE FIRST */}
                    <Line
                        type="monotone"
                        dataKey="nominalValue"
                        stroke="#2563eb"
                        strokeWidth={4}
                        name="Portfolio Value"
                        dot={{
                            r: 5,
                            strokeWidth: 3,
                        }}
                        activeDot={{
                            r: 10,
                        }}
                    />

                    {/* INFLATION ADJUSTED SECOND */}
                    <Line
                        type="monotone"
                        dataKey="realValue"
                        stroke="#ef4444"
                        strokeWidth={4}
                        name="Inflation Adjusted"
                        dot={{
                            r: 5,
                            strokeWidth: 3,
                        }}
                        activeDot={{
                            r: 10,
                        }}
                    />

                </LineChart>

            </ResponsiveContainer>

        </div>
    );
}