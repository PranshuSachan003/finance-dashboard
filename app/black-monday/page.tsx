"use client";

import {
  AlertTriangle,
  ArrowDownRight,
  Banknote,
  BarChart3,
  Building2,
  ChevronRight,
  CircleDollarSign,
  Cpu,
  Globe2,
  Landmark,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

export default function BlackMonday1987Page() {
  const timeline = [
    {
      year: "1982 - 1986",
      title: "Massive Bull Market",
      description:
        "Stock markets experienced one of the strongest rallies in history. Investors became highly optimistic as markets kept rising rapidly.",
    },
    {
      year: "Early 1987",
      title: "Overvaluation Concerns",
      description:
        "Stock valuations became stretched. Interest rates and inflation concerns started increasing.",
    },
    {
      year: "October 1987",
      title: "Panic Begins",
      description:
        "Investors became nervous about rising rates, global trade tensions, and expensive stock prices.",
    },
    {
      year: "October 19, 1987",
      title: "Black Monday",
      description:
        "The Dow Jones crashed more than 22% in a single day — the biggest one-day percentage decline in U.S. stock market history.",
    },
    {
      year: "1988 onwards",
      title: "Market Recovery",
      description:
        "Despite the shock, the financial system survived and markets eventually recovered over the following years.",
    },
  ];

  const learnings = [
    {
      title: "Panic Can Spread Faster Than Fundamentals",
      description:
        "Markets can crash violently even without a full economic depression when fear spreads rapidly.",
    },
    {
      title: "Technology Can Amplify Crashes",
      description:
        "Automated trading systems accelerated selling pressure during Black Monday.",
    },
    {
      title: "Liquidity Matters During Crises",
      description:
        "When everyone rushes to sell simultaneously, liquidity disappears and prices collapse quickly.",
    },
    {
      title: "Circuit Breakers Are Important",
      description:
        "Modern market protections were heavily improved after the 1987 crash.",
    },
    {
      title: "Long-Term Investors Eventually Recover",
      description:
        "Although the crash was terrifying, markets recovered over time for patient investors.",
    },
    {
      title: "Fear Creates Extreme Volatility",
      description:
        "Human psychology can create irrational market movements in both directions.",
    },
  ];

  const impacts = [
    {
      title: "Historic One-Day Crash",
      icon: <TrendingDown className="w-8 h-8 text-red-500" />,
      description:
        "The Dow Jones Industrial Average fell by over 22% in a single trading session.",
    },
    {
      title: "Global Panic",
      icon: <Globe2 className="w-8 h-8 text-orange-400" />,
      description:
        "Stock markets around the world collapsed as fear spread internationally.",
    },
    {
      title: "Rise Of Market Safeguards",
      icon: <Landmark className="w-8 h-8 text-yellow-400" />,
      description:
        "Regulators introduced circuit breakers and stronger risk controls after the crash.",
    },
    {
      title: "Technology Risks Exposed",
      icon: <Cpu className="w-8 h-8 text-blue-400" />,
      description:
        "Program trading and computerized selling strategies amplified the collapse.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-orange-500/10" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-red-500/20 bg-red-500/10 text-red-300 text-sm mb-8">
            <AlertTriangle className="w-4 h-4" />
            Largest One-Day Market Crash In U.S. History
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight max-w-6xl">
            Black Monday
            <span className="text-red-500"> (1987)</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl leading-8 mt-8 max-w-4xl">
            A terrifying day when global stock markets collapsed in panic,
            billions were wiped out within hours, and investors witnessed one
            of the fastest crashes in financial history.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-7">
              <TrendingDown className="w-10 h-10 text-red-500 mb-5" />

              <h3 className="text-4xl font-black">22.6%</h3>

              <p className="text-gray-400 mt-3 leading-7">
                One-day fall in the Dow Jones on October 19, 1987.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-7">
              <Globe2 className="w-10 h-10 text-orange-400 mb-5" />

              <h3 className="text-4xl font-black">Global</h3>

              <p className="text-gray-400 mt-3 leading-7">
                Panic spread across stock exchanges around the world.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-7">
              <CircleDollarSign className="w-10 h-10 text-yellow-400 mb-5" />

              <h3 className="text-4xl font-black">Billions</h3>

              <p className="text-gray-400 mt-3 leading-7">
                Lost in market value within a single trading session.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold">
            What Was Happening Before Black Monday?
          </h2>

          <p className="text-gray-400 text-lg leading-8 mt-6">
            To understand Black Monday, we need to understand the atmosphere of
            the 1980s — a period of rapid market growth, rising optimism, and
            increasing dependence on technology-driven trading systems.
          </p>
        </div>

        <div className="space-y-10 mt-16">
          {/* Section 1 */}
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-green-400 mb-6">
              1. The Powerful Bull Market
            </h3>

            <p className="text-gray-300 leading-8 text-lg">
              Between 1982 and 1987, stock markets rallied strongly. Economic
              growth improved, inflation had cooled from earlier highs, and
              investor confidence surged.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              The Dow Jones Industrial Average rose massively during these
              years. Investors became increasingly confident that markets would
              continue climbing.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              Optimism slowly turned into overconfidence.
            </p>
          </div>

          {/* Section 2 */}
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-yellow-400 mb-6">
              2. Stocks Became Expensive
            </h3>

            <p className="text-gray-300 leading-8 text-lg">
              By 1987, many investors believed stock prices had become too high
              compared to actual business earnings.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              Valuations were stretched. Meanwhile, concerns about rising
              interest rates and inflation started making investors nervous.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              The market became fragile beneath the surface.
            </p>
          </div>

          {/* Section 3 */}
          <div className="bg-gradient-to-br from-red-500/10 to-red-500/5 border border-red-500/20 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-red-400 mb-6">
              3. The Rise Of Program Trading
            </h3>

            <p className="text-gray-300 leading-8 text-lg">
              One of the unique features of Black Monday was the role of
              computerized trading systems.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              Large institutional investors used automated systems called{" "}
              <span className="text-yellow-400 font-semibold">
                Program Trading
              </span>{" "}
              to manage portfolios.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              Some strategies automatically sold stocks when markets started
              falling to reduce losses.
            </p>

            <div className="mt-8 bg-black/40 border border-white/10 rounded-2xl p-6">
              <p className="text-gray-300 text-lg leading-8">
                The problem:
                <br />
                When prices dropped, computers triggered more selling... which
                caused even more price drops... leading to even more selling.
              </p>
            </div>

            <p className="text-gray-300 leading-8 text-lg mt-6">
              This created a dangerous feedback loop.
            </p>
          </div>

          {/* Section 4 */}
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-orange-400 mb-6">
              4. Rising Fear Before The Crash
            </h3>

            <p className="text-gray-300 leading-8 text-lg">
              Several economic concerns started building in 1987:
            </p>

            <ul className="mt-6 space-y-4 text-gray-300 text-lg">
              <li className="flex gap-3">
                <ArrowDownRight className="w-6 h-6 text-red-400 mt-1" />
                Rising interest rates.
              </li>

              <li className="flex gap-3">
                <ArrowDownRight className="w-6 h-6 text-red-400 mt-1" />
                Concerns about inflation returning.
              </li>

              <li className="flex gap-3">
                <ArrowDownRight className="w-6 h-6 text-red-400 mt-1" />
                Growing U.S. trade deficits.
              </li>

              <li className="flex gap-3">
                <ArrowDownRight className="w-6 h-6 text-red-400 mt-1" />
                Expensive stock market valuations.
              </li>
            </ul>

            <p className="text-gray-300 leading-8 text-lg mt-6">
              Investors slowly became more nervous and volatile.
            </p>
          </div>

          {/* Section 5 */}
          <div className="bg-gradient-to-br from-red-500/15 to-red-500/5 border border-red-500/20 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-red-500 mb-6">
              5. Black Monday Arrives
            </h3>

            <p className="text-gray-300 leading-8 text-lg">
              On October 19, 1987, panic exploded across global markets.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              Selling intensified rapidly. Investors rushed to exit positions.
              Program trading systems accelerated the collapse.
            </p>

            <div className="mt-8 bg-black/40 border border-white/10 rounded-2xl p-8">
              <h4 className="text-3xl font-bold text-red-400">
                The Dow Jones Fell 22.6%
              </h4>

              <p className="text-gray-400 mt-5 text-lg leading-8">
                This remains the largest single-day percentage decline in U.S.
                stock market history.
              </p>
            </div>

            <p className="text-gray-300 leading-8 text-lg mt-8">
              Fear spread globally. Markets in Europe, Asia, and Australia also
              crashed heavily.
            </p>
          </div>

          {/* Section 6 */}
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-yellow-400 mb-6">
              6. Why Was This Crash So Scary?
            </h3>

            <p className="text-gray-300 leading-8 text-lg">
              Unlike many earlier crashes, Black Monday happened extremely
              quickly.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              Investors saw massive losses within hours. Panic spread faster
              because technology amplified the speed of selling.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              Many feared the financial system itself could collapse.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              However, unlike the 1929 crash, the broader economy remained more
              stable and the banking system survived.
            </p>
          </div>

          {/* Section 7 */}
          <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-green-400 mb-6">
              7. Government & Central Bank Response
            </h3>

            <p className="text-gray-300 leading-8 text-lg">
              The U.S. Federal Reserve acted quickly to calm markets.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              The central bank promised liquidity support to financial
              institutions and reassured markets that the system would continue
              functioning.
            </p>

            <ul className="mt-6 space-y-4 text-gray-300 text-lg">
              <li className="flex gap-3">
                <ChevronRight className="w-6 h-6 text-green-400 mt-1" />
                Banks continued receiving liquidity support.
              </li>

              <li className="flex gap-3">
                <ChevronRight className="w-6 h-6 text-green-400 mt-1" />
                Confidence slowly stabilized.
              </li>

              <li className="flex gap-3">
                <ChevronRight className="w-6 h-6 text-green-400 mt-1" />
                Regulators studied trading system weaknesses.
              </li>

              <li className="flex gap-3">
                <ChevronRight className="w-6 h-6 text-green-400 mt-1" />
                Circuit breakers were later introduced in markets.
              </li>
            </ul>
          </div>

          {/* Section 8 */}
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-blue-400 mb-6">
              8. What Happened After Black Monday?
            </h3>

            <p className="text-gray-300 leading-8 text-lg">
              Surprisingly, the global economy did not enter a Great Depression.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              Markets eventually stabilized and recovered over time.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              Black Monday became a major lesson for regulators and investors
              about technology risks, market psychology, and the importance of
              liquidity.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              It also proved that markets can experience violent crashes even
              without a full economic collapse.
            </p>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Timeline Of Black Monday
          </h2>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="flex gap-5 items-start bg-black/40 border border-white/10 rounded-3xl p-7"
              >
                <div className="w-14 h-14 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center flex-shrink-0">
                  <ChevronRight className="w-6 h-6 text-red-400" />
                </div>

                <div>
                  <p className="text-red-400 font-semibold">{item.year}</p>

                  <h3 className="text-2xl font-bold mt-1">{item.title}</h3>

                  <p className="text-gray-400 mt-4 leading-8">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl md:text-5xl font-bold mb-16">
          Major Impacts Of Black Monday
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {impacts.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-8"
            >
              {item.icon}

              <h3 className="text-2xl font-bold mt-5">{item.title}</h3>

              <p className="text-gray-400 mt-4 leading-8">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* LEARNINGS */}
      <section className="bg-gradient-to-b from-red-500/10 to-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold">
              Lessons Investors Learned
            </h2>

            <p className="text-gray-400 text-lg leading-8 mt-6">
              Black Monday remains one of the greatest examples of how fear,
              leverage, technology, and market psychology can combine to create
              extreme volatility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {learnings.map((item, index) => (
              <div
                key={index}
                className="bg-black/40 border border-white/10 rounded-3xl p-8"
              >
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-7 h-7 text-green-400" />

                  <h3 className="text-2xl font-bold">{item.title}</h3>
                </div>

                <p className="text-gray-400 leading-8 mt-5">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL QUOTE */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl md:text-6xl font-black leading-tight">
          “Markets Can Fall Faster Than Most
          <span className="text-red-500"> Investors Imagine.”</span>
        </h2>

        <p className="text-gray-400 text-lg leading-8 mt-10">
          Black Monday showed the world that technology, fear, and liquidity
          crises can create massive financial destruction within hours. Yet it
          also proved that markets eventually recover over time.
        </p>

        <div className="mt-12 inline-flex items-center gap-3 bg-red-500/10 border border-red-500/20 rounded-full px-6 py-3 text-red-300">
          <AlertTriangle className="w-5 h-5" />
          Panic Is Temporary. Discipline Is Long-Term.
        </div>
      </section>
    </div>
  );
}