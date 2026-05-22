"use client";

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

/* CUSTOM TOOLTIP */

function CustomTooltip({
    active,
    payload,
    label,
}: any) {

    if (
        active &&
        payload &&
        payload.length
    ) {

        const portfolio =
            payload.find(
                (p: any) =>
                    p.dataKey ===
                    "nominalValue"
            );

        const inflation =
            payload.find(
                (p: any) =>
                    p.dataKey ===
                    "realValue"
            );

        return (

            <div
                className="
                bg-[#020817]
                border
                border-slate-700
                rounded-3xl
                p-6
                shadow-2xl
                "
            >

                {/* YEAR */}

                <p
                    className="
                    text-white
                    text-2xl
                    font-bold
                    mb-5
                    "
                >

                    {label} Yr

                </p>

                {/* PORTFOLIO VALUE */}

                <div className="mb-4">

                    <p
                        className="
                        text-blue-500
                        text-xl
                        font-bold
                        "
                    >

                        Portfolio Value :
                        {" "}
                        {
                            formatCurrency(
                                portfolio?.value || 0
                            )
                        }

                    </p>

                </div>

                {/* INFLATION ADJUSTED */}

                <div>

                    <p
                        className="
                        text-red-500
                        text-xl
                        font-bold
                        "
                    >

                        Inflation Adjusted :
                        {" "}
                        {
                            formatCurrency(
                                inflation?.value || 0
                            )
                        }

                    </p>

                </div>

            </div>
        );
    }

    return null;
}

export default function CompoundingChart({
    data,
}: Props) {

    return (

        <div className="w-full h-[500px] mt-10">

            {/* TITLE */}

            <h2 className="text-2xl font-bold mb-4">

                Compounding Growth

            </h2>

            <ResponsiveContainer width="100%" height="100%">

                <LineChart
                    data={data}
                    margin={{
                        top: 20,
                        right: 20,
                        left: 10,
                        bottom: 20,
                    }}
                >

                    {/* GRID */}

                    <CartesianGrid
                        strokeDasharray="4 4"
                        stroke="#334155"
                    />

                    {/* X AXIS */}

                    <XAxis
                        dataKey="year"
                        stroke="#94A3B8"
                        tickFormatter={(value) =>
                            `${value} Yr`
                        }
                        tick={{
                            fontSize: 14,
                        }}
                    />

                    {/* Y AXIS */}

                    <YAxis
                        stroke="#94A3B8"
                        tickFormatter={
                            formatCurrency
                        }
                        tick={{
                            fontSize: 14,
                        }}
                    />

                    {/* TOOLTIP */}

                    <Tooltip
                        content={
                            <CustomTooltip />
                        }
                    />

                    {/* LEGEND */}

                    <Legend
                        wrapperStyle={{
                            paddingTop: "20px",
                            fontSize: "18px",
                        }}
                    />

                    {/* PORTFOLIO VALUE */}

                    <Line
                        type="monotone"
                        dataKey="nominalValue"
                        name="Portfolio Value"
                        stroke="#2563eb"
                        strokeWidth={5}
                        dot={{
                            r: 5,
                            fill: "#ffffff",
                            strokeWidth: 4,
                        }}
                        activeDot={{
                            r: 12,
                            stroke: "#ffffff",
                            strokeWidth: 3,
                        }}
                    />

                    {/* INFLATION ADJUSTED */}

                    <Line
                        type="monotone"
                        dataKey="realValue"
                        name="Inflation Adjusted"
                        stroke="#ef4444"
                        strokeWidth={5}
                        dot={{
                            r: 5,
                            fill: "#ffffff",
                            strokeWidth: 4,
                        }}
                        activeDot={{
                            r: 12,
                            stroke: "#ffffff",
                            strokeWidth: 3,
                        }}
                    />

                </LineChart>

            </ResponsiveContainer>

        </div>
    );
}