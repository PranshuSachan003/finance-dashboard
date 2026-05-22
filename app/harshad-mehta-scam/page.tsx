"use client";

import {
  AlertTriangle,
  ArrowDownRight,
  BadgeDollarSign,
  Banknote,
  BarChart3,
  Building2,
  ChevronRight,
  CircleDollarSign,
  Landmark,
  Scale,
  ShieldAlert,
  TrendingDown,
  TrendingUp,
  Wallet,
} from "lucide-react";

export default function HarshadMehtaScamPage() {
  const timeline = [
    {
      year: "Late 1980s",
      title: "Rise Of Harshad Mehta",
      description:
        "Harshad Mehta became a rapidly growing stockbroker known for aggressive trading and market influence.",
    },
    {
      year: "1990 - 1991",
      title: "Bull Run Begins",
      description:
        "Massive buying activity pushed Indian stock markets sharply higher, especially selected stocks.",
    },
    {
      year: "1991",
      title: "Banking System Loopholes Exploited",
      description:
        "Large sums of money were illegally diverted from banks into the stock market using fake banking transactions.",
    },
    {
      year: "April 1992",
      title: "Scam Exposed",
      description:
        "Journalist Sucheta Dalal exposed irregularities involving Harshad Mehta and the banking system.",
    },
    {
      year: "1992",
      title: "Market Collapse",
      description:
        "The stock market crashed after investors realized prices had been artificially inflated.",
    },
    {
      year: "Aftermath",
      title: "Regulatory Reforms",
      description:
        "India introduced major financial reforms and strengthened SEBI regulations after the scam.",
    },
  ];

  const learnings = [
    {
      title: "Liquidity Can Artificially Inflate Markets",
      description:
        "Huge inflows of money can push stock prices far beyond their actual business value.",
    },
    {
      title: "Leverage & Manipulation Are Dangerous",
      description:
        "Borrowed money and market manipulation can create unsustainable bubbles.",
    },
    {
      title: "Regulation Matters",
      description:
        "Weak systems and loopholes eventually create opportunities for fraud.",
    },
    {
      title: "Greed Makes Investors Ignore Risk",
      description:
        "During strong bull markets, many investors stop questioning valuations and risks.",
    },
    {
      title: "Market Euphoria Eventually Ends",
      description:
        "Artificial rallies eventually collapse once confidence disappears.",
    },
    {
      title: "Financial Transparency Is Critical",
      description:
        "Strong auditing, settlement systems, and banking oversight are essential for healthy markets.",
    },
  ];

  const impacts = [
    {
      title: "Massive Stock Market Crash",
      icon: <TrendingDown className="w-8 h-8 text-red-500" />,
      description:
        "Indian stock markets crashed heavily after the scam became public.",
    },
    {
      title: "Banking System Shock",
      icon: <Landmark className="w-8 h-8 text-yellow-400" />,
      description:
        "The scam exposed serious weaknesses inside India's banking system.",
    },
    {
      title: "Rise Of SEBI Regulations",
      icon: <ShieldAlert className="w-8 h-8 text-green-400" />,
      description:
        "India strengthened market regulation and oversight after the scandal.",
    },
    {
      title: "Investor Wealth Destroyed",
      icon: <Wallet className="w-8 h-8 text-orange-400" />,
      description:
        "Many retail investors suffered severe losses after the market collapse.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-red-500/10" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-orange-500/20 bg-orange-500/10 text-orange-300 text-sm mb-8">
            <AlertTriangle className="w-4 h-4" />
            India's Biggest Stock Market Scam
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight max-w-6xl">
            The Harshad Mehta Scam
            <span className="text-orange-400"> (1992)</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl leading-8 mt-8 max-w-4xl">
            A historic financial scandal that shook India’s banking system,
            created one of the biggest stock market bubbles in Indian history,
            and permanently changed Indian financial regulation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-7">
              <TrendingUp className="w-10 h-10 text-green-400 mb-5" />

              <h3 className="text-4xl font-black">Massive Rally</h3>

              <p className="text-gray-400 mt-3 leading-7">
                Certain Indian stocks skyrocketed during the manipulated bull
                market.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-7">
              <Banknote className="w-10 h-10 text-yellow-400 mb-5" />

              <h3 className="text-4xl font-black">₹4000 Cr+</h3>

              <p className="text-gray-400 mt-3 leading-7">
                Estimated scale of the securities scam during that period.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-7">
              <Scale className="w-10 h-10 text-red-400 mb-5" />

              <h3 className="text-4xl font-black">Historic</h3>

              <p className="text-gray-400 mt-3 leading-7">
                The scam transformed India’s financial regulations permanently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold">
            What Was The Harshad Mehta Scam?
          </h2>

          <p className="text-gray-400 text-lg leading-8 mt-6">
            The Harshad Mehta Scam was one of the most famous financial scams in
            Indian history. It involved manipulation of the stock market using
            loopholes in the banking system, creating an artificial bull run
            before eventually collapsing dramatically.
          </p>
        </div>

        <div className="space-y-10 mt-16">
          {/* SECTION 1 */}
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-orange-400 mb-6">
              1. The Rise Of Harshad Mehta
            </h3>

            <p className="text-gray-300 leading-8 text-lg">
              Harshad Mehta started as a stockbroker and gradually became one of
              the most influential figures in the Indian stock market.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              He became famous for aggressive trading strategies and his ability
              to push stock prices sharply higher.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              During the early 1990s, many investors viewed him as a market
              genius.
            </p>
          </div>

          {/* SECTION 2 */}
          <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-green-400 mb-6">
              2. India Was Entering A Bull Market
            </h3>

            <p className="text-gray-300 leading-8 text-lg">
              India’s economy was opening up during the early 1990s.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              Investor optimism increased rapidly as economic reforms and market
              participation grew.
            </p>

            <div className="mt-8 bg-black/40 border border-white/10 rounded-2xl p-6">
              <p className="text-green-300 text-xl italic font-semibold">
                “Many people believed Indian markets would continue rising
                endlessly.”
              </p>
            </div>

            <p className="text-gray-300 leading-8 text-lg mt-6">
              This optimism created the perfect environment for speculation.
            </p>
          </div>

          {/* SECTION 3 */}
          <div className="bg-gradient-to-br from-red-500/10 to-red-500/5 border border-red-500/20 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-red-400 mb-6">
              3. The Banking System Had Major Loopholes
            </h3>

            <p className="text-gray-300 leading-8 text-lg">
              At the time, Indian banking systems and settlement mechanisms were
              far less advanced than today.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              Harshad Mehta exploited weaknesses involving banking receipts and
              inter-bank transactions.
            </p>

            <ul className="mt-6 space-y-4 text-gray-300 text-lg">
              <li className="flex gap-3">
                <ArrowDownRight className="w-6 h-6 text-red-400 mt-1" />
                Fake banking receipts were used.
              </li>

              <li className="flex gap-3">
                <ArrowDownRight className="w-6 h-6 text-red-400 mt-1" />
                Bank funds were diverted into the stock market.
              </li>

              <li className="flex gap-3">
                <ArrowDownRight className="w-6 h-6 text-red-400 mt-1" />
                Huge liquidity artificially pushed stock prices higher.
              </li>
            </ul>
          </div>

          {/* SECTION 4 */}
          <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-500/5 border border-yellow-500/20 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-yellow-400 mb-6">
              4. Certain Stocks Rose Explosively
            </h3>

            <p className="text-gray-300 leading-8 text-lg">
              Massive buying pressure caused selected stocks to rise sharply.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              ACC became one of the most famous examples during the scam.
            </p>

            <div className="mt-8 bg-black/40 border border-white/10 rounded-2xl p-8">
              <h4 className="text-3xl font-bold text-yellow-400">
                The ACC Story
              </h4>

              <p className="text-gray-400 mt-5 text-lg leading-8">
                ACC shares reportedly surged from around ₹200 to nearly ₹9000
                during the speculative rally.
              </p>
            </div>

            <p className="text-gray-300 leading-8 text-lg mt-8">
              Investors rushed into the market fearing they would miss the
              rally.
            </p>
          </div>

          {/* SECTION 5 */}
          <div className="bg-gradient-to-br from-orange-500/10 to-orange-500/5 border border-orange-500/20 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-orange-400 mb-6">
              5. Media & Public Fascination Grew Rapidly
            </h3>

            <p className="text-gray-300 leading-8 text-lg">
              Harshad Mehta became extremely famous during the bull market.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              He was portrayed as a financial superstar who understood the stock
              market better than everyone else.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              Retail investors increasingly entered the market hoping for quick
              profits.
            </p>
          </div>

          {/* SECTION 6 */}
          <div className="bg-gradient-to-br from-red-500/15 to-red-500/5 border border-red-500/20 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-red-500 mb-6">
              6. The Scam Was Finally Exposed
            </h3>

            <p className="text-gray-300 leading-8 text-lg">
              Journalist Sucheta Dalal exposed irregularities involving Harshad
              Mehta and banking transactions in 1992.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              Investigations revealed that huge amounts of bank money had been
              improperly routed into the stock market.
            </p>

            <div className="mt-8 bg-black/40 border border-white/10 rounded-2xl p-8">
              <h4 className="text-3xl font-bold text-red-400">
                Confidence Collapsed
              </h4>

              <p className="text-gray-400 mt-5 text-lg leading-8">
                Once the market realized the rally was artificially supported,
                panic selling began rapidly.
              </p>
            </div>
          </div>

          {/* SECTION 7 */}
          <div className="bg-gradient-to-br from-red-500/10 to-black border border-red-500/20 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-orange-400 mb-6">
              7. The Market Crashed Heavily
            </h3>

            <p className="text-gray-300 leading-8 text-lg">
              The artificial liquidity disappeared and stock prices collapsed.
            </p>

            <ul className="mt-6 space-y-4 text-gray-300 text-lg">
              <li className="flex gap-3">
                <TrendingDown className="w-6 h-6 text-red-400 mt-1" />
                Investors suffered massive losses.
              </li>

              <li className="flex gap-3">
                <TrendingDown className="w-6 h-6 text-red-400 mt-1" />
                Market confidence was severely damaged.
              </li>

              <li className="flex gap-3">
                <TrendingDown className="w-6 h-6 text-red-400 mt-1" />
                Banks faced scrutiny for weak controls.
              </li>

              <li className="flex gap-3">
                <TrendingDown className="w-6 h-6 text-red-400 mt-1" />
                Retail investors were hit particularly hard.
              </li>
            </ul>
          </div>

          {/* SECTION 8 */}
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-blue-400 mb-6">
              8. India’s Financial System Changed Forever
            </h3>

            <p className="text-gray-300 leading-8 text-lg">
              The scam exposed major weaknesses in Indian banking and market
              infrastructure.
            </p>

            <ul className="mt-6 space-y-4 text-gray-300 text-lg">
              <li className="flex gap-3">
                <ChevronRight className="w-6 h-6 text-blue-400 mt-1" />
                SEBI gained stronger regulatory powers.
              </li>

              <li className="flex gap-3">
                <ChevronRight className="w-6 h-6 text-blue-400 mt-1" />
                Banking oversight improved significantly.
              </li>

              <li className="flex gap-3">
                <ChevronRight className="w-6 h-6 text-blue-400 mt-1" />
                Electronic settlement systems gradually evolved.
              </li>

              <li className="flex gap-3">
                <ChevronRight className="w-6 h-6 text-blue-400 mt-1" />
                Market transparency increased over time.
              </li>
            </ul>
          </div>

          {/* SECTION 9 */}
          <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-purple-400 mb-6">
              9. Why This Story Still Matters Today
            </h3>

            <p className="text-gray-300 leading-8 text-lg">
              The Harshad Mehta Scam remains one of the most important stories
              in Indian financial history because it demonstrated how liquidity,
              leverage, and investor psychology can combine to create enormous
              bubbles.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              It also transformed India’s market regulation and financial
              infrastructure permanently.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              Even today, investors often compare aggressive market rallies to
              the speculation seen during the Harshad Mehta era.
            </p>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Timeline Of The Scam
          </h2>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="flex gap-5 items-start bg-black/40 border border-white/10 rounded-3xl p-7"
              >
                <div className="w-14 h-14 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center flex-shrink-0">
                  <ChevronRight className="w-6 h-6 text-orange-400" />
                </div>

                <div>
                  <p className="text-orange-400 font-semibold">{item.year}</p>

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
          Major Consequences Of The Scam
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
      <section className="bg-gradient-to-b from-orange-500/10 to-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold">
              Key Lessons From The Harshad Mehta Scam
            </h2>

            <p className="text-gray-400 text-lg leading-8 mt-6">
              The scam became one of the most powerful reminders in Indian
              financial history about the dangers of unchecked speculation and
              weak financial systems.
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
          “Bull Markets Built On
          <span className="text-orange-400"> Manipulation Never Last.”</span>
        </h2>

        <p className="text-gray-400 text-lg leading-8 mt-10">
          The Harshad Mehta Scam showed India how unchecked liquidity, weak
          oversight, and market euphoria can create massive bubbles — and how
          quickly confidence disappears once reality emerges.
        </p>

        <div className="mt-12 inline-flex items-center gap-3 bg-orange-500/10 border border-orange-500/20 rounded-full px-6 py-3 text-orange-300">
          <BarChart3 className="w-5 h-5" />
          Liquidity Can Create Bubbles Faster Than Fundamentals.
        </div>
      </section>
    </div>
  );
}