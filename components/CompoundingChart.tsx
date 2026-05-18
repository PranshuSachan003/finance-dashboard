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

                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="year" />

                    <YAxis
                        tickFormatter={
                            formatCurrency
                        }
                    />

                    <Tooltip
                        formatter={(value) =>
                            formatCurrency(
                                Number(value)
                            )
                        }
                    />

                    <Line
                        type="monotone"
                        dataKey="nominalValue"
                        stroke="#2563eb"
                        strokeWidth={3}
                        name="Portfolio Value"
                    />

                    <Line
                        type="monotone"
                        dataKey="realValue"
                        stroke="#dc2626"
                        strokeWidth={3}
                        name="Inflation Adjusted"
                    />

                </LineChart>

            </ResponsiveContainer>

        </div>
    );
}