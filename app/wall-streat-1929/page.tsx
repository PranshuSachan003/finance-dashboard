"use client";

import {
  AlertTriangle,
  ArrowDownRight,
  Banknote,
  Building2,
  ChevronRight,
  CircleDollarSign,
  Landmark,
  TrendingDown,
  TrendingUp,
  Users,
} from "lucide-react";

export default function WallStreetCrash1929Page() {
  const timeline = [
    {
      year: "1920 - 1924",
      title: "The Roaring Twenties Begin",
      description:
        "America entered a period of massive economic growth. Industries expanded rapidly, consumer spending increased, and optimism spread across the country.",
    },
    {
      year: "1925 - 1928",
      title: "Stock Market Mania",
      description:
        "Millions of ordinary people started investing in stocks. Many believed the market would rise forever.",
    },
    {
      year: "1928 - 1929",
      title: "Extreme Speculation",
      description:
        "Investors borrowed huge amounts of money to buy stocks. Stock prices became disconnected from real business fundamentals.",
    },
    {
      year: "October 1929",
      title: "The Crash Begins",
      description:
        "Panic selling started. Investors rushed to sell shares. Massive losses spread across Wall Street.",
    },
    {
      year: "1930 - 1933",
      title: "The Great Depression",
      description:
        "Banks collapsed, unemployment exploded, businesses shut down, and millions of people entered poverty.",
    },
    {
      year: "1933 onwards",
      title: "Slow Recovery",
      description:
        "Government reforms and economic stimulus programs slowly stabilized the economy over the next decade.",
    },
  ];

  const learnings = [
    {
      title: "Greed Creates Bubbles",
      description:
        "When people believe prices can only go up, markets become extremely dangerous.",
    },
    {
      title: "Debt Amplifies Crashes",
      description:
        "Borrowing money to invest can multiply profits, but it can also destroy investors during market collapses.",
    },
    {
      title: "Stock Prices And Reality Eventually Meet",
      description:
        "Businesses cannot justify infinite valuations forever. Fundamentals eventually matter.",
    },
    {
      title: "Diversification Protects Wealth",
      description:
        "Investors concentrated in speculative assets suffered the biggest losses during the crash.",
    },
    {
      title: "Cash Matters During Crises",
      description:
        "Liquidity and emergency savings become extremely valuable during economic disasters.",
    },
    {
      title: "Human Psychology Never Changes",
      description:
        "Fear and greed continue to drive financial markets even today.",
    },
  ];

  const impacts = [
    {
      title: "Massive Unemployment",
      icon: <Users className="w-8 h-8 text-red-500" />,
      description:
        "Unemployment in the United States surged dramatically as businesses shut down and industries collapsed.",
    },
    {
      title: "Bank Failures",
      icon: <Landmark className="w-8 h-8 text-orange-500" />,
      description:
        "Thousands of banks failed because depositors rushed to withdraw their money in panic.",
    },
    {
      title: "Stock Market Collapse",
      icon: <TrendingDown className="w-8 h-8 text-red-500" />,
      description:
        "The stock market lost nearly 90% of its value from peak to bottom over the following years.",
    },
    {
      title: "Global Economic Depression",
      icon: <Building2 className="w-8 h-8 text-yellow-500" />,
      description:
        "The crisis spread globally and triggered one of the worst economic depressions in human history.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-yellow-500/10" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-red-500/20 bg-red-500/10 text-red-300 text-sm mb-8">
            <AlertTriangle className="w-4 h-4" />
            One Of The Worst Financial Disasters In History
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight max-w-6xl">
            The Wall Street Crash
            <span className="text-red-500"> (1929)</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl leading-8 mt-8 max-w-4xl">
            A story of extreme greed, speculative mania, borrowed money,
            economic imbalance, panic selling, and the beginning of the Great
            Depression.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-7">
              <TrendingDown className="w-10 h-10 text-red-500 mb-5" />

              <h3 className="text-4xl font-black">89%</h3>

              <p className="text-gray-400 mt-3 leading-7">
                Fall in the Dow Jones from peak to bottom during the Great
                Depression period.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-7">
              <Users className="w-10 h-10 text-orange-400 mb-5" />

              <h3 className="text-4xl font-black">25%</h3>

              <p className="text-gray-400 mt-3 leading-7">
                U.S. unemployment rate during the worst years of the Depression.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-7">
              <Banknote className="w-10 h-10 text-yellow-400 mb-5" />

              <h3 className="text-4xl font-black">Thousands</h3>

              <p className="text-gray-400 mt-3 leading-7">
                Of banks failed as panic spread across the financial system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold">
            What Was Happening Before The Crash?
          </h2>

          <p className="text-gray-400 text-lg leading-8 mt-6">
            To understand the 1929 crash, we first need to understand the
            atmosphere of the 1920s — a period called{" "}
            <span className="text-yellow-400 font-semibold">
              “The Roaring Twenties.”
            </span>
          </p>
        </div>

        <div className="space-y-10 mt-16">
          {/* Section 1 */}
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-yellow-400 mb-6">
              1. America Was Booming
            </h3>

            <p className="text-gray-300 leading-8 text-lg">
              After World War I, the United States became one of the strongest
              economies in the world. Factories expanded rapidly. New inventions
              such as automobiles, radios, refrigerators, and telephones became
              popular.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              Companies were making huge profits. Consumer spending exploded.
              Banks offered easy credit. People felt rich and optimistic.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              The stock market became the symbol of prosperity.
            </p>
          </div>

          {/* Section 2 */}
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-green-400 mb-6">
              2. Everyone Started Investing
            </h3>

            <p className="text-gray-300 leading-8 text-lg">
              Ordinary citizens, workers, businessmen, teachers, and even
              people with little financial knowledge rushed into the stock
              market.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              Newspapers constantly talked about rising stock prices. Success
              stories spread everywhere. Many believed investing in stocks was
              the fastest path to wealth.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              A dangerous belief started spreading:
            </p>

            <div className="mt-6 bg-green-500/10 border border-green-500/20 rounded-2xl p-6">
              <p className="text-green-300 text-xl font-semibold italic">
                “Stocks only go up.”
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="bg-gradient-to-br from-red-500/10 to-red-500/5 border border-red-500/20 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-red-400 mb-6">
              3. Buying Stocks With Borrowed Money
            </h3>

            <p className="text-gray-300 leading-8 text-lg">
              This was one of the biggest reasons behind the crash.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              Investors started buying stocks using borrowed money through a
              system called{" "}
              <span className="text-yellow-400 font-semibold">
                “Buying on Margin.”
              </span>
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              People could buy stocks by paying only a small percentage upfront
              while borrowing the rest from brokers.
            </p>

            <div className="mt-8 bg-black/40 border border-white/10 rounded-2xl p-6">
              <p className="text-gray-300 text-lg leading-8">
                Example:
                <br />
                A person with only $100 could buy $1,000 worth of stocks by
                borrowing the remaining amount.
              </p>
            </div>

            <p className="text-gray-300 leading-8 text-lg mt-6">
              This worked beautifully while prices kept rising.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              But when stock prices started falling, borrowed money became a
              deadly weapon.
            </p>
          </div>

          {/* Section 4 */}
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-orange-400 mb-6">
              4. Stock Prices Became Irrational
            </h3>

            <p className="text-gray-300 leading-8 text-lg">
              Many companies had weak fundamentals, but their stock prices kept
              rising simply because people kept buying.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              Speculation became extreme. Investors stopped caring about real
              profits and business quality.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              This created a giant speculative bubble.
            </p>
          </div>

          {/* Section 5 */}
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-yellow-400 mb-6">
              5. Economic Weakness Was Hidden
            </h3>

            <p className="text-gray-300 leading-8 text-lg">
              While stock prices were soaring, deeper problems already existed
              in the economy.
            </p>

            <ul className="mt-6 space-y-4 text-gray-300 text-lg">
              <li className="flex gap-3">
                <ArrowDownRight className="w-6 h-6 text-red-400 mt-1" />
                Farmers were struggling financially.
              </li>

              <li className="flex gap-3">
                <ArrowDownRight className="w-6 h-6 text-red-400 mt-1" />
                Wealth inequality was rising sharply.
              </li>

              <li className="flex gap-3">
                <ArrowDownRight className="w-6 h-6 text-red-400 mt-1" />
                Industrial production started slowing.
              </li>

              <li className="flex gap-3">
                <ArrowDownRight className="w-6 h-6 text-red-400 mt-1" />
                Too much debt existed in the system.
              </li>
            </ul>

            <p className="text-gray-300 leading-8 text-lg mt-6">
              But investors ignored these warning signs because greed dominated
              the market.
            </p>
          </div>

          {/* Section 6 */}
          <div className="bg-gradient-to-br from-red-500/15 to-red-500/5 border border-red-500/20 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-red-500 mb-6">
              6. The Crash Finally Arrived
            </h3>

            <p className="text-gray-300 leading-8 text-lg">
              In late October 1929, panic started spreading.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              Investors rushed to sell stocks before prices fell further.
              Selling pressure exploded.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-black/40 border border-white/10 rounded-2xl p-6">
                <h4 className="text-2xl font-bold text-red-400">
                  Black Thursday
                </h4>

                <p className="text-gray-400 mt-4 leading-7">
                  October 24, 1929 — Panic selling intensified heavily.
                </p>
              </div>

              <div className="bg-black/40 border border-white/10 rounded-2xl p-6">
                <h4 className="text-2xl font-bold text-red-400">
                  Black Tuesday
                </h4>

                <p className="text-gray-400 mt-4 leading-7">
                  October 29, 1929 — Massive collapse hit Wall Street.
                </p>
              </div>
            </div>

            <p className="text-gray-300 leading-8 text-lg mt-8">
              Since many investors had borrowed money, falling prices triggered
              margin calls. Investors were forced to sell even more shares,
              accelerating the collapse.
            </p>
          </div>

          {/* Section 7 */}
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-orange-400 mb-6">
              7. What Happened After The Crash?
            </h3>

            <p className="text-gray-300 leading-8 text-lg">
              The crash destroyed confidence in the economy.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              Businesses reduced production. Workers lost jobs. Banks failed.
              People lost life savings.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              Since people stopped spending money, the economy entered a
              downward spiral.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              This eventually became known as{" "}
              <span className="text-red-400 font-semibold">
                The Great Depression
              </span>
              .
            </p>
          </div>

          {/* Section 8 */}
          <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-green-400 mb-6">
              8. Government Response & Recovery
            </h3>

            <p className="text-gray-300 leading-8 text-lg">
              In the early years, the government response was slow and
              ineffective.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              Later, President Franklin D. Roosevelt introduced major reforms
              under programs called the{" "}
              <span className="text-yellow-400 font-semibold">
                “New Deal.”
              </span>
            </p>

            <ul className="mt-6 space-y-4 text-gray-300 text-lg">
              <li className="flex gap-3">
                <ChevronRight className="w-6 h-6 text-green-400 mt-1" />
                Banking reforms were introduced.
              </li>

              <li className="flex gap-3">
                <ChevronRight className="w-6 h-6 text-green-400 mt-1" />
                Public infrastructure projects created jobs.
              </li>

              <li className="flex gap-3">
                <ChevronRight className="w-6 h-6 text-green-400 mt-1" />
                Financial regulations became stricter.
              </li>

              <li className="flex gap-3">
                <ChevronRight className="w-6 h-6 text-green-400 mt-1" />
                Deposit protections improved banking confidence.
              </li>
            </ul>

            <p className="text-gray-300 leading-8 text-lg mt-6">
              Recovery took many years and was eventually accelerated by World
              War II industrial production.
            </p>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Timeline Of The Crisis
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
          Major Consequences Of The Crash
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
              Lessons Investors Still Learn Today
            </h2>

            <p className="text-gray-400 text-lg leading-8 mt-6">
              Even after nearly a century, the lessons from the 1929 crash are
              still incredibly relevant in modern markets.
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

      {/* QUOTE */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl md:text-6xl font-black leading-tight">
          “Markets Are Driven By
          <span className="text-red-500"> Fear And Greed</span>
          — And Human Nature Never Changes.”
        </h2>

        <p className="text-gray-400 text-lg leading-8 mt-10">
          The Wall Street Crash of 1929 was not caused by one single event. It
          was the result of speculation, excessive optimism, leverage, economic
          weakness, and panic. Its lessons continue to guide investors even
          today.
        </p>

        <div className="mt-12 inline-flex items-center gap-3 bg-red-500/10 border border-red-500/20 rounded-full px-6 py-3 text-red-300">
          <AlertTriangle className="w-5 h-5" />
          History Often Repeats Through Human Behavior.
        </div>
      </section>
    </div>
  );
}