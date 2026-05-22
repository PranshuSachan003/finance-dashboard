"use client";

import {
  AlertTriangle,
  ArrowDownRight,
  BadgeDollarSign,
  BarChart3,
  Building2,
  ChevronRight,
  CircleDollarSign,
  Coins,
  Crown,
  Flower2,
  Gem,
  Landmark,
  ScrollText,
  ShieldAlert,
  TrendingDown,
  TrendingUp,
  Wallet,
} from "lucide-react";

export default function TulipManiaPage() {
  const timeline = [
    {
      year: "1500s",
      title: "Tulips Arrive In Europe",
      description:
        "Tulips were introduced to Europe from the Ottoman Empire and quickly became symbols of beauty and wealth.",
    },
    {
      year: "Early 1600s",
      title: "Dutch Fascination Grows",
      description:
        "Tulips became luxury status symbols among wealthy Dutch citizens.",
    },
    {
      year: "1634 - 1636",
      title: "Speculation Explodes",
      description:
        "Tulip prices surged dramatically as traders and citizens rushed into speculation.",
    },
    {
      year: "1636",
      title: "Futures-Like Trading Begins",
      description:
        "People started trading contracts for tulips rather than actual bulbs.",
    },
    {
      year: "February 1637",
      title: "Market Collapse",
      description:
        "Buyers suddenly disappeared, prices crashed, and panic spread rapidly.",
    },
    {
      year: "Aftermath",
      title: "Economic & Psychological Impact",
      description:
        "The collapse damaged confidence and became history’s most famous speculative bubble.",
    },
  ];

  const learnings = [
    {
      title: "Speculative Bubbles Are Timeless",
      description:
        "Human greed and fear have existed in markets for centuries.",
    },
    {
      title: "Prices Can Disconnect From Reality",
      description:
        "Assets can rise far beyond their intrinsic value during euphoria.",
    },
    {
      title: "Crowd Psychology Is Powerful",
      description:
        "People often buy simply because others are making money.",
    },
    {
      title: "Liquidity Drives Mania",
      description:
        "Easy trading and rising participation can accelerate bubbles rapidly.",
    },
    {
      title: "Markets Can Collapse Suddenly",
      description:
        "Speculative confidence can disappear almost overnight.",
    },
    {
      title: "History Repeats In Different Forms",
      description:
        "Tulip Mania resembles many modern bubbles including crypto and meme stocks.",
    },
  ];

  const impacts = [
    {
      title: "Historic Financial Bubble",
      icon: <TrendingUp className="w-8 h-8 text-pink-400" />,
      description:
        "Tulip Mania became the world’s most famous speculative bubble story.",
    },
    {
      title: "Extreme Price Volatility",
      icon: <TrendingDown className="w-8 h-8 text-red-500" />,
      description:
        "Tulip bulb prices experienced massive rises and violent collapses.",
    },
    {
      title: "Rise Of Speculative Trading",
      icon: <ScrollText className="w-8 h-8 text-yellow-400" />,
      description:
        "The period introduced early forms of derivatives and contract trading.",
    },
    {
      title: "Psychology Became Central",
      icon: <ShieldAlert className="w-8 h-8 text-cyan-400" />,
      description:
        "Tulip Mania showed how emotions can dominate financial markets.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-purple-500/10" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-pink-500/20 bg-pink-500/10 text-pink-300 text-sm mb-8">
            <AlertTriangle className="w-4 h-4" />
            The World's First Famous Financial Bubble
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight max-w-6xl">
            Tulip Mania
            <span className="text-pink-400"> (1637)</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl leading-8 mt-8 max-w-4xl">
            A bizarre period in Dutch history where tulip bulbs became some of
            the most expensive assets in the world — before collapsing
            spectacularly and becoming a timeless lesson about speculation,
            greed, and financial bubbles.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-7">
              <Flower2 className="w-10 h-10 text-pink-400 mb-5" />

              <h3 className="text-4xl font-black">Tulip Fever</h3>

              <p className="text-gray-400 mt-3 leading-7">
                Rare tulip bulbs became symbols of wealth and social status.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-7">
              <BadgeDollarSign className="w-10 h-10 text-yellow-400 mb-5" />

              <h3 className="text-4xl font-black">Extreme Prices</h3>

              <p className="text-gray-400 mt-3 leading-7">
                Some tulip bulbs reportedly became worth more than houses.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-7">
              <TrendingDown className="w-10 h-10 text-red-400 mb-5" />

              <h3 className="text-4xl font-black">Rapid Crash</h3>

              <p className="text-gray-400 mt-3 leading-7">
                The speculative bubble collapsed suddenly in 1637.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold">
            What Was Tulip Mania?
          </h2>

          <p className="text-gray-400 text-lg leading-8 mt-6">
            Tulip Mania was one of the earliest recorded speculative bubbles in
            financial history. During the 1630s in the Netherlands, tulip bulbs
            became objects of extreme speculation, with prices rising to
            astonishing levels before collapsing dramatically.
          </p>
        </div>

        <div className="space-y-10 mt-16">
          {/* SECTION 1 */}
          <div className="bg-gradient-to-br from-pink-500/10 to-pink-500/5 border border-pink-500/20 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-pink-400 mb-6">
              1. Tulips Became Luxury Symbols
            </h3>

            <p className="text-gray-300 leading-8 text-lg">
              Tulips were introduced to Europe from the Ottoman Empire during
              the 1500s.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              Their unusual colors and patterns fascinated wealthy Europeans,
              especially in the Netherlands.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              Owning rare tulips became a sign of prestige and wealth.
            </p>
          </div>

          {/* SECTION 2 */}
          <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-500/5 border border-yellow-500/20 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-yellow-400 mb-6">
              2. Rare Bulbs Became Extremely Valuable
            </h3>

            <p className="text-gray-300 leading-8 text-lg">
              Some tulips were extremely rare due to unique color patterns
              caused by plant viruses.
            </p>

            <div className="mt-8 bg-black/40 border border-white/10 rounded-2xl p-8">
              <h4 className="text-3xl font-bold text-yellow-400">
                Rare Tulips Became Status Assets
              </h4>

              <p className="text-gray-400 mt-5 text-lg leading-8">
                Wealthy merchants and elites competed aggressively to own the
                rarest tulips.
              </p>
            </div>

            <p className="text-gray-300 leading-8 text-lg mt-8">
              Demand increased rapidly as prices kept rising.
            </p>
          </div>

          {/* SECTION 3 */}
          <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-green-400 mb-6">
              3. Speculation Took Over The Market
            </h3>

            <p className="text-gray-300 leading-8 text-lg">
              Eventually, people stopped buying tulips for beauty and started
              buying them purely to resell at higher prices.
            </p>

            <ul className="mt-6 space-y-4 text-gray-300 text-lg">
              <li className="flex gap-3">
                <ArrowDownRight className="w-6 h-6 text-green-400 mt-1" />
                Ordinary citizens entered the market.
              </li>

              <li className="flex gap-3">
                <ArrowDownRight className="w-6 h-6 text-green-400 mt-1" />
                Traders borrowed money to speculate.
              </li>

              <li className="flex gap-3">
                <ArrowDownRight className="w-6 h-6 text-green-400 mt-1" />
                Prices rose simply because buyers expected future increases.
              </li>
            </ul>
          </div>

          {/* SECTION 4 */}
          <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-purple-400 mb-6">
              4. Contracts & Futures Trading Emerged
            </h3>

            <p className="text-gray-300 leading-8 text-lg">
              Traders eventually began buying and selling contracts rather than
              physical tulip bulbs.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              These agreements allowed speculation on future prices, similar to
              modern futures markets.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-black/40 border border-white/10 rounded-2xl p-6">
                <ScrollText className="w-8 h-8 text-purple-400 mb-4" />

                <h4 className="text-2xl font-bold">
                  Paper Speculation Increased
                </h4>

                <p className="text-gray-400 mt-4 leading-7">
                  Trading contracts made speculation faster and more dangerous.
                </p>
              </div>

              <div className="bg-black/40 border border-white/10 rounded-2xl p-6">
                <Coins className="w-8 h-8 text-yellow-400 mb-4" />

                <h4 className="text-2xl font-bold">
                  Prices Detached From Reality
                </h4>

                <p className="text-gray-400 mt-4 leading-7">
                  Tulip values became disconnected from their actual usefulness.
                </p>
              </div>
            </div>
          </div>

          {/* SECTION 5 */}
          <div className="bg-gradient-to-br from-red-500/10 to-red-500/5 border border-red-500/20 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-red-400 mb-6">
              5. Prices Became Completely Irrational
            </h3>

            <p className="text-gray-300 leading-8 text-lg">
              During the peak of Tulip Mania, some bulbs reportedly sold for the
              price of luxury homes.
            </p>

            <div className="mt-8 bg-black/40 border border-white/10 rounded-2xl p-8">
              <h4 className="text-3xl font-bold text-red-400">
                Euphoria Dominated Logic
              </h4>

              <p className="text-gray-400 mt-5 text-lg leading-8">
                Buyers believed prices would continue rising forever.
              </p>
            </div>

            <p className="text-gray-300 leading-8 text-lg mt-8">
              Fear of missing out drove even more speculation.
            </p>
          </div>

          {/* SECTION 6 */}
          <div className="bg-gradient-to-br from-red-500/15 to-black border border-red-500/20 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-red-500 mb-6">
              6. The Bubble Suddenly Collapsed
            </h3>

            <p className="text-gray-300 leading-8 text-lg">
              In February 1637, buyers unexpectedly stopped appearing at tulip
              auctions.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              Panic spread rapidly once traders realized prices might not keep
              rising.
            </p>

            <ul className="mt-6 space-y-4 text-gray-300 text-lg">
              <li className="flex gap-3">
                <TrendingDown className="w-6 h-6 text-red-400 mt-1" />
                Prices collapsed rapidly.
              </li>

              <li className="flex gap-3">
                <TrendingDown className="w-6 h-6 text-red-400 mt-1" />
                Contracts became nearly worthless.
              </li>

              <li className="flex gap-3">
                <TrendingDown className="w-6 h-6 text-red-400 mt-1" />
                Many speculators suffered large losses.
              </li>
            </ul>
          </div>

          {/* SECTION 7 */}
          <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/20 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-cyan-400 mb-6">
              7. Why Tulip Mania Became Legendary
            </h3>

            <p className="text-gray-300 leading-8 text-lg">
              Tulip Mania became one of the most famous examples of speculative
              bubbles because it perfectly demonstrated how human emotions can
              overpower rational thinking.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              Even centuries later, investors still compare modern bubbles to
              Tulip Mania.
            </p>
          </div>

          {/* SECTION 8 */}
          <div className="bg-gradient-to-br from-orange-500/10 to-orange-500/5 border border-orange-500/20 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-orange-400 mb-6">
              8. Similarities To Modern Bubbles
            </h3>

            <p className="text-gray-300 leading-8 text-lg">
              Tulip Mania shares similarities with many modern speculative
              periods.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-black/40 border border-white/10 rounded-2xl p-6">
                <CircleDollarSign className="w-8 h-8 text-orange-400 mb-4" />

                <h4 className="text-xl font-bold">Crypto Bubbles</h4>

                <p className="text-gray-400 mt-4 leading-7">
                  Rapid price rises driven by speculation and hype.
                </p>
              </div>

              <div className="bg-black/40 border border-white/10 rounded-2xl p-6">
                <BarChart3 className="w-8 h-8 text-green-400 mb-4" />

                <h4 className="text-xl font-bold">Dot-Com Bubble</h4>

                <p className="text-gray-400 mt-4 leading-7">
                  Investors ignored valuations during technology euphoria.
                </p>
              </div>

              <div className="bg-black/40 border border-white/10 rounded-2xl p-6">
                <Wallet className="w-8 h-8 text-red-400 mb-4" />

                <h4 className="text-xl font-bold">Meme Stocks</h4>

                <p className="text-gray-400 mt-4 leading-7">
                  Crowd psychology and FOMO dominated market behavior.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Timeline Of Tulip Mania
          </h2>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="flex gap-5 items-start bg-black/40 border border-white/10 rounded-3xl p-7"
              >
                <div className="w-14 h-14 rounded-full bg-pink-500/20 border border-pink-500/30 flex items-center justify-center flex-shrink-0">
                  <ChevronRight className="w-6 h-6 text-pink-400" />
                </div>

                <div>
                  <p className="text-pink-400 font-semibold">{item.year}</p>

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
          Major Consequences Of Tulip Mania
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
      <section className="bg-gradient-to-b from-pink-500/10 to-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold">
              Key Lessons From Tulip Mania
            </h2>

            <p className="text-gray-400 text-lg leading-8 mt-6">
              Tulip Mania remains one of the most important financial stories in
              history because it revealed timeless truths about speculation,
              crowd psychology, and human behavior.
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
          “People Don’t Change...
          <span className="text-pink-400">
            {" "}
            Only The Assets Do.”
          </span>
        </h2>

        <p className="text-gray-400 text-lg leading-8 mt-10">
          Tulip Mania proved centuries ago that when greed, speculation, and
          fear of missing out combine together, markets can become irrational —
          and eventually collapse under their own excesses.
        </p>

        <div className="mt-12 inline-flex items-center gap-3 bg-pink-500/10 border border-pink-500/20 rounded-full px-6 py-3 text-pink-300">
          <Flower2 className="w-5 h-5" />
          The First Bubble. But Not The Last.
        </div>
      </section>
    </div>
  );
}