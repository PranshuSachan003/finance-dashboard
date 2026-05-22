"use client";

import {
  AlertTriangle,
  ArrowDownRight,
  BadgeDollarSign,
  BarChart3,
  BrainCircuit,
  Building2,
  ChevronRight,
  CircleDollarSign,
  Cpu,
  Globe2,
  Laptop,
  Rocket,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

export default function DotComBubbleCrashPage() {
  const timeline = [
    {
      year: "1993 - 1995",
      title: "The Internet Revolution Begins",
      description:
        "The internet started becoming commercially popular. Investors believed the internet would completely transform the world economy.",
    },
    {
      year: "1995 - 1998",
      title: "Technology Stocks Explode",
      description:
        "Technology and internet companies attracted huge investor attention. Stock prices rose rapidly as excitement around the digital future increased.",
    },
    {
      year: "1998 - 1999",
      title: "Extreme Speculation Era",
      description:
        "Companies with little revenue and no profits received enormous valuations simply for having '.com' in their names.",
    },
    {
      year: "March 2000",
      title: "The Bubble Peaks",
      description:
        "The NASDAQ index reached historic highs as investor optimism reached extreme levels.",
    },
    {
      year: "2000 - 2002",
      title: "The Crash",
      description:
        "Technology stocks collapsed massively as investors realized many companies had weak business models and unrealistic valuations.",
    },
    {
      year: "2003 onwards",
      title: "Recovery & New Tech Giants",
      description:
        "The internet industry survived, but only strong businesses with real fundamentals emerged stronger afterward.",
    },
  ];

  const learnings = [
    {
      title: "Innovation Does Not Guarantee Profits",
      description:
        "A revolutionary industry can still experience massive investment bubbles and crashes.",
    },
    {
      title: "Valuation Always Matters",
      description:
        "Even great companies become dangerous investments when prices become irrationally expensive.",
    },
    {
      title: "Speculation Eventually Ends",
      description:
        "Markets eventually separate real businesses from hype-driven companies.",
    },
    {
      title: "Survivors Become Future Giants",
      description:
        "Companies with strong fundamentals survived the crash and later became some of the world's largest businesses.",
    },
    {
      title: "Fear And Greed Drive Markets",
      description:
        "Investor psychology repeatedly creates boom-and-bust cycles across generations.",
    },
    {
      title: "Long-Term Investing Requires Patience",
      description:
        "Many investors who panicked sold at huge losses, while patient investors benefited over the long run.",
    },
  ];

  const impacts = [
    {
      title: "NASDAQ Collapse",
      icon: <TrendingDown className="w-8 h-8 text-red-500" />,
      description:
        "The NASDAQ index lost nearly 78% of its value from peak to bottom during the crash.",
    },
    {
      title: "Thousands Of Companies Failed",
      icon: <Building2 className="w-8 h-8 text-orange-400" />,
      description:
        "Many internet startups ran out of money and disappeared completely.",
    },
    {
      title: "Massive Wealth Destruction",
      icon: <CircleDollarSign className="w-8 h-8 text-yellow-400" />,
      description:
        "Trillions of dollars in market value were wiped out during the collapse.",
    },
    {
      title: "Rise Of Strong Tech Companies",
      icon: <Rocket className="w-8 h-8 text-green-400" />,
      description:
        "Companies with strong business models survived and later dominated the global economy.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-300 text-sm mb-8">
            <AlertTriangle className="w-4 h-4" />
            The Internet Stock Market Bubble
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight max-w-6xl">
            The Dot-Com
            <span className="text-blue-500"> Bubble Burst</span>
            <span className="text-red-500"> (2000-2002)</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl leading-8 mt-8 max-w-4xl">
            A dramatic period when investors believed the internet would create
            unlimited wealth, leading to one of the biggest speculative bubbles
            in stock market history.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-7">
              <TrendingDown className="w-10 h-10 text-red-500 mb-5" />

              <h3 className="text-4xl font-black">78%</h3>

              <p className="text-gray-400 mt-3 leading-7">
                Approximate fall in the NASDAQ index during the collapse.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-7">
              <Laptop className="w-10 h-10 text-cyan-400 mb-5" />

              <h3 className="text-4xl font-black">Thousands</h3>

              <p className="text-gray-400 mt-3 leading-7">
                Of internet startups were launched during the bubble.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-7">
              <BadgeDollarSign className="w-10 h-10 text-yellow-400 mb-5" />

              <h3 className="text-4xl font-black">Trillions</h3>

              <p className="text-gray-400 mt-3 leading-7">
                In investor wealth disappeared after the crash.
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
            The Dot-Com Bubble happened during one of the most exciting
            technological revolutions in modern history — the rise of the
            internet.
          </p>
        </div>

        <div className="space-y-10 mt-16">
          {/* SECTION 1 */}
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-cyan-400 mb-6">
              1. The Internet Changed Everything
            </h3>

            <p className="text-gray-300 leading-8 text-lg">
              During the 1990s, the internet rapidly entered homes and
              businesses around the world.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              Investors believed the internet would completely transform
              shopping, communication, finance, entertainment, and business.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              Excitement around technology reached extreme levels.
            </p>
          </div>

          {/* SECTION 2 */}
          <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-green-400 mb-6">
              2. Investors Became Obsessed With Internet Stocks
            </h3>

            <p className="text-gray-300 leading-8 text-lg">
              Investors rushed to buy shares of internet companies, often called
              “Dot-Com” companies because many websites ended with “.com”.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              Huge amounts of money flowed into technology startups.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              Companies could raise millions of dollars even if they had little
              revenue and no profits.
            </p>

            <div className="mt-8 bg-black/40 border border-white/10 rounded-2xl p-6">
              <p className="text-green-300 text-xl italic font-semibold">
                “If a company had a website, investors were willing to buy it.”
              </p>
            </div>
          </div>

          {/* SECTION 3 */}
          <div className="bg-gradient-to-br from-red-500/10 to-red-500/5 border border-red-500/20 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-red-400 mb-6">
              3. Valuations Became Completely Irrational
            </h3>

            <p className="text-gray-300 leading-8 text-lg">
              Traditional investing principles started disappearing.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              Investors ignored profits, cash flow, and sustainable business
              models.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              Some companies had almost no revenue, but their stock prices kept
              skyrocketing because investors believed future growth would be
              unlimited.
            </p>

            <ul className="mt-6 space-y-4 text-gray-300 text-lg">
              <li className="flex gap-3">
                <ArrowDownRight className="w-6 h-6 text-red-400 mt-1" />
                Many startups spent huge amounts on advertising.
              </li>

              <li className="flex gap-3">
                <ArrowDownRight className="w-6 h-6 text-red-400 mt-1" />
                Some companies had no path to profitability.
              </li>

              <li className="flex gap-3">
                <ArrowDownRight className="w-6 h-6 text-red-400 mt-1" />
                Investors believed growth mattered more than profits.
              </li>
            </ul>
          </div>

          {/* SECTION 4 */}
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-yellow-400 mb-6">
              4. IPO Mania Exploded
            </h3>

            <p className="text-gray-300 leading-8 text-lg">
              Hundreds of technology startups launched IPOs during the late
              1990s.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              Many stocks doubled or tripled on their very first trading day.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              Investors feared “missing out” on the next internet giant.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              This created a powerful cycle of greed and speculation.
            </p>
          </div>

          {/* SECTION 5 */}
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-blue-400 mb-6">
              5. The NASDAQ Reached Extreme Highs
            </h3>

            <p className="text-gray-300 leading-8 text-lg">
              Technology stocks dominated the NASDAQ index.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              Between 1995 and 2000, the NASDAQ surged massively as investors
              poured money into internet and software companies.
            </p>

            <div className="mt-8 bg-black/40 border border-white/10 rounded-2xl p-6">
              <h4 className="text-3xl font-bold text-blue-400">
                Peak Of The Bubble
              </h4>

              <p className="text-gray-400 mt-5 text-lg leading-8">
                In March 2000, investor optimism reached extreme levels and the
                bubble peaked.
              </p>
            </div>
          </div>

          {/* SECTION 6 */}
          <div className="bg-gradient-to-br from-red-500/15 to-red-500/5 border border-red-500/20 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-red-500 mb-6">
              6. Reality Finally Hit The Market
            </h3>

            <p className="text-gray-300 leading-8 text-lg">
              Investors slowly realized many companies were losing huge amounts
              of money and had unsustainable business models.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              Interest rates were also rising, making speculative investments
              less attractive.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              Confidence started collapsing.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              Once investors started selling, panic spread rapidly across
              technology stocks.
            </p>
          </div>

          {/* SECTION 7 */}
          <div className="bg-gradient-to-br from-red-500/10 to-black border border-red-500/20 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-orange-400 mb-6">
              7. The Crash Was Brutal
            </h3>

            <p className="text-gray-300 leading-8 text-lg">
              Between 2000 and 2002, technology stocks collapsed massively.
            </p>

            <ul className="mt-6 space-y-4 text-gray-300 text-lg">
              <li className="flex gap-3">
                <TrendingDown className="w-6 h-6 text-red-400 mt-1" />
                The NASDAQ lost nearly 78% of its value.
              </li>

              <li className="flex gap-3">
                <TrendingDown className="w-6 h-6 text-red-400 mt-1" />
                Many internet startups went bankrupt.
              </li>

              <li className="flex gap-3">
                <TrendingDown className="w-6 h-6 text-red-400 mt-1" />
                Investors lost trillions of dollars.
              </li>

              <li className="flex gap-3">
                <TrendingDown className="w-6 h-6 text-red-400 mt-1" />
                Technology employees lost jobs across the industry.
              </li>
            </ul>

            <p className="text-gray-300 leading-8 text-lg mt-6">
              Many companies disappeared completely.
            </p>
          </div>

          {/* SECTION 8 */}
          <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-green-400 mb-6">
              8. But The Internet Revolution Was Real
            </h3>

            <p className="text-gray-300 leading-8 text-lg">
              Even though the bubble burst, the internet itself truly changed
              the world.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              Strong companies with real business models survived and eventually
              became technology giants.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-black/40 border border-white/10 rounded-2xl p-6">
                <h4 className="text-2xl font-bold text-green-400">
                  Survivors
                </h4>

                <p className="text-gray-400 mt-4 leading-7">
                  Some companies adapted, improved fundamentals, and later
                  dominated the global economy.
                </p>
              </div>

              <div className="bg-black/40 border border-white/10 rounded-2xl p-6">
                <h4 className="text-2xl font-bold text-blue-400">
                  Failed Startups
                </h4>

                <p className="text-gray-400 mt-4 leading-7">
                  Thousands of weak businesses vanished because they lacked real
                  profitability.
                </p>
              </div>
            </div>
          </div>

          {/* SECTION 9 */}
          <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-purple-400 mb-6">
              9. Why The Dot-Com Bubble Still Matters Today
            </h3>

            <p className="text-gray-300 leading-8 text-lg">
              The Dot-Com Bubble remains one of the greatest examples of how
              technological revolutions can create massive financial bubbles.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              It also reminds investors that revolutionary industries can still
              become dangerously overvalued.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              Similar discussions continue today around AI, emerging technology,
              crypto, and high-growth sectors.
            </p>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Timeline Of The Dot-Com Bubble
          </h2>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="flex gap-5 items-start bg-black/40 border border-white/10 rounded-3xl p-7"
              >
                <div className="w-14 h-14 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                  <ChevronRight className="w-6 h-6 text-blue-400" />
                </div>

                <div>
                  <p className="text-blue-400 font-semibold">{item.year}</p>

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
      <section className="bg-gradient-to-b from-blue-500/10 to-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold">
              Key Lessons From The Dot-Com Bubble
            </h2>

            <p className="text-gray-400 text-lg leading-8 mt-6">
              The Dot-Com Bubble became one of the most important lessons in
              modern investing history.
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
          “A Great Technology Can Still Create A
          <span className="text-blue-500"> Dangerous Bubble.”</span>
        </h2>

        <p className="text-gray-400 text-lg leading-8 mt-10">
          The Dot-Com Bubble proved that innovation alone does not justify
          irrational prices. Markets eventually separate hype from real
          business value.
        </p>

        <div className="mt-12 inline-flex items-center gap-3 bg-blue-500/10 border border-blue-500/20 rounded-full px-6 py-3 text-blue-300">
          <BrainCircuit className="w-5 h-5" />
          Innovation Survives. Speculation Often Doesn't.
        </div>
      </section>
    </div>
  );
}