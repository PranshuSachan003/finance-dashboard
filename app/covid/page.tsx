"use client";

import {
  Activity,
  AlertTriangle,
  ArrowDownRight,
  BadgeDollarSign,
  Briefcase,
  Building2,
  ChevronRight,
  CircleDollarSign,
  Globe2,
  HeartPulse,
  Home,
  Laptop,
  Pill,
  Rocket,
  ShieldCheck,
  ShoppingCart,
  Syringe,
  TrendingDown,
  TrendingUp,
  Truck,
  Users,
} from "lucide-react";

export default function CovidCrash2020Page() {
  const timeline = [
    {
      year: "Late 2019",
      title: "Virus Emerges",
      description:
        "A new coronavirus was identified in China, initially appearing as a local health issue.",
    },
    {
      year: "January - February 2020",
      title: "Global Fear Begins",
      description:
        "COVID-19 started spreading internationally, creating uncertainty around global health and economic activity.",
    },
    {
      year: "March 2020",
      title: "Markets Collapse",
      description:
        "Lockdowns, panic selling, and economic shutdown fears triggered one of the fastest stock market crashes in history.",
    },
    {
      year: "March - April 2020",
      title: "Governments & Central Banks Intervene",
      description:
        "Massive stimulus packages and emergency monetary support were introduced worldwide.",
    },
    {
      year: "2020 - 2021",
      title: "Recovery Begins",
      description:
        "Technology stocks, vaccine progress, and stimulus measures helped markets recover rapidly.",
    },
  ];

  const learnings = [
    {
      title: "Black Swan Events Can Arrive Suddenly",
      description:
        "Unexpected global events can rapidly disrupt markets, economies, and daily life.",
    },
    {
      title: "Liquidity & Emergency Funds Matter",
      description:
        "People and businesses with strong cash reserves handled the crisis better.",
    },
    {
      title: "Panic Selling Can Be Costly",
      description:
        "Many investors sold near market bottoms and missed the powerful recovery afterward.",
    },
    {
      title: "Technology Became Essential",
      description:
        "Digital businesses, remote work platforms, and online services became central to the global economy.",
    },
    {
      title: "Diversification Helps During Crises",
      description:
        "Different sectors reacted differently, showing the value of diversified investing.",
    },
    {
      title: "Markets Recover Faster Than Expected",
      description:
        "Despite severe panic, global markets recovered far quicker than many anticipated.",
    },
  ];

  const impacts = [
    {
      title: "Fastest Bear Market In History",
      icon: <TrendingDown className="w-8 h-8 text-red-500" />,
      description:
        "Major stock indexes fell into bear market territory at record speed during March 2020.",
    },
    {
      title: "Global Economic Shutdown",
      icon: <Globe2 className="w-8 h-8 text-orange-400" />,
      description:
        "Countries worldwide imposed lockdowns that disrupted businesses, travel, and supply chains.",
    },
    {
      title: "Massive Job Losses",
      icon: <Briefcase className="w-8 h-8 text-yellow-400" />,
      description:
        "Millions of workers lost jobs or faced salary reductions during the pandemic.",
    },
    {
      title: "Technology Boom",
      icon: <Laptop className="w-8 h-8 text-green-400" />,
      description:
        "Technology and digital companies experienced massive growth during and after the pandemic.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-green-500/10" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-300 text-sm mb-8">
            <AlertTriangle className="w-4 h-4" />
            The Pandemic That Shocked Global Markets
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight max-w-6xl">
            The COVID-19 Crash
            <span className="text-cyan-400"> (2020)</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl leading-8 mt-8 max-w-4xl">
            A historic global market crash triggered by a worldwide pandemic,
            economic shutdowns, fear, and uncertainty — followed by one of the
            fastest recoveries in stock market history.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-7">
              <TrendingDown className="w-10 h-10 text-red-500 mb-5" />

              <h3 className="text-4xl font-black">35%+</h3>

              <p className="text-gray-400 mt-3 leading-7">
                Approximate fall in major global stock indexes during the crash.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-7">
              <ShieldCheck className="w-10 h-10 text-cyan-400 mb-5" />

              <h3 className="text-4xl font-black">Global</h3>

              <p className="text-gray-400 mt-3 leading-7">
                Lockdowns affected economies, travel, businesses, and daily
                life worldwide.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-7">
              <BadgeDollarSign className="w-10 h-10 text-green-400 mb-5" />

              <h3 className="text-4xl font-black">Trillions</h3>

              <p className="text-gray-400 mt-3 leading-7">
                Injected by governments and central banks to stabilize markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold">
            What Happened During The COVID-19 Crash?
          </h2>

          <p className="text-gray-400 text-lg leading-8 mt-6">
            The COVID-19 crash was unlike most financial crises because it did
            not begin inside the financial system itself. Instead, it started
            as a global health emergency that quickly transformed into an
            economic and market crisis.
          </p>
        </div>

        <div className="space-y-10 mt-16">
          {/* SECTION 1 */}
          <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/20 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-cyan-400 mb-6">
              1. A New Virus Appeared
            </h3>

            <p className="text-gray-300 leading-8 text-lg">
              In late 2019, reports emerged of a new coronavirus spreading in
              China.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              Initially, many people believed the outbreak would remain limited
              to certain regions.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              However, within months the virus spread rapidly across the world.
            </p>
          </div>

          {/* SECTION 2 */}
          <div className="bg-gradient-to-br from-red-500/10 to-red-500/5 border border-red-500/20 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-red-400 mb-6">
              2. Fear Spread Across Global Markets
            </h3>

            <p className="text-gray-300 leading-8 text-lg">
              Investors suddenly realized the pandemic could shut down global
              economic activity.
            </p>

            <ul className="mt-6 space-y-4 text-gray-300 text-lg">
              <li className="flex gap-3">
                <ArrowDownRight className="w-6 h-6 text-red-400 mt-1" />
                Travel restrictions increased.
              </li>

              <li className="flex gap-3">
                <ArrowDownRight className="w-6 h-6 text-red-400 mt-1" />
                Businesses started closing temporarily.
              </li>

              <li className="flex gap-3">
                <ArrowDownRight className="w-6 h-6 text-red-400 mt-1" />
                Supply chains became disrupted.
              </li>

              <li className="flex gap-3">
                <ArrowDownRight className="w-6 h-6 text-red-400 mt-1" />
                Consumers reduced spending sharply.
              </li>
            </ul>

            <p className="text-gray-300 leading-8 text-lg mt-6">
              Panic rapidly spread through financial markets.
            </p>
          </div>

          {/* SECTION 3 */}
          <div className="bg-gradient-to-br from-orange-500/10 to-orange-500/5 border border-orange-500/20 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-orange-400 mb-6">
              3. Global Lockdowns Changed Everything
            </h3>

            <p className="text-gray-300 leading-8 text-lg">
              Governments worldwide introduced lockdowns to slow the spread of
              the virus.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              Large parts of the global economy suddenly stopped operating.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-black/40 border border-white/10 rounded-2xl p-6">
                <Truck className="w-8 h-8 text-orange-400 mb-4" />

                <h4 className="text-2xl font-bold">
                  Supply Chain Disruptions
                </h4>

                <p className="text-gray-400 mt-4 leading-7">
                  Manufacturing, shipping, and global trade slowed heavily.
                </p>
              </div>

              <div className="bg-black/40 border border-white/10 rounded-2xl p-6">
                <ShoppingCart className="w-8 h-8 text-cyan-400 mb-4" />

                <h4 className="text-2xl font-bold">
                  Consumer Activity Collapsed
                </h4>

                <p className="text-gray-400 mt-4 leading-7">
                  Restaurants, malls, tourism, and entertainment businesses
                  suffered severe losses.
                </p>
              </div>
            </div>
          </div>

          {/* SECTION 4 */}
          <div className="bg-gradient-to-br from-red-500/15 to-red-500/5 border border-red-500/20 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-red-500 mb-6">
              4. Stock Markets Crashed At Historic Speed
            </h3>

            <p className="text-gray-300 leading-8 text-lg">
              During March 2020, stock markets around the world collapsed
              rapidly.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              Investors feared a deep global recession and uncertainty around
              how long the pandemic would last.
            </p>

            <div className="mt-8 bg-black/40 border border-white/10 rounded-2xl p-8">
              <h4 className="text-3xl font-bold text-red-400">
                Fastest Bear Market In History
              </h4>

              <p className="text-gray-400 mt-5 text-lg leading-8">
                Major stock indexes entered bear market territory faster than
                during most historical crashes.
              </p>
            </div>

            <p className="text-gray-300 leading-8 text-lg mt-8">
              Circuit breakers were triggered multiple times due to extreme
              volatility.
            </p>
          </div>

          {/* SECTION 5 */}
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-blue-400 mb-6">
              5. Entire Industries Were Hit Hard
            </h3>

            <p className="text-gray-300 leading-8 text-lg">
              Some industries suffered massive financial damage during the
              pandemic.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-black/40 border border-white/10 rounded-2xl p-6">
                <Globe2 className="w-8 h-8 text-red-400 mb-4" />

                <h4 className="text-xl font-bold">Travel & Tourism</h4>

                <p className="text-gray-400 mt-4 leading-7">
                  Flights stopped and tourism collapsed globally.
                </p>
              </div>

              <div className="bg-black/40 border border-white/10 rounded-2xl p-6">
                <Building2 className="w-8 h-8 text-orange-400 mb-4" />

                <h4 className="text-xl font-bold">Retail & Hospitality</h4>

                <p className="text-gray-400 mt-4 leading-7">
                  Hotels, restaurants, and malls faced severe shutdowns.
                </p>
              </div>

              <div className="bg-black/40 border border-white/10 rounded-2xl p-6">
                <Home className="w-8 h-8 text-cyan-400 mb-4" />

                <h4 className="text-xl font-bold">Work Culture</h4>

                <p className="text-gray-400 mt-4 leading-7">
                  Remote work became common across many industries.
                </p>
              </div>
            </div>
          </div>

          {/* SECTION 6 */}
          <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-green-400 mb-6">
              6. Governments & Central Banks Responded Aggressively
            </h3>

            <p className="text-gray-300 leading-8 text-lg">
              Governments worldwide introduced enormous financial stimulus
              programs.
            </p>

            <ul className="mt-6 space-y-4 text-gray-300 text-lg">
              <li className="flex gap-3">
                <ChevronRight className="w-6 h-6 text-green-400 mt-1" />
                Interest rates were reduced aggressively.
              </li>

              <li className="flex gap-3">
                <ChevronRight className="w-6 h-6 text-green-400 mt-1" />
                Central banks injected massive liquidity into markets.
              </li>

              <li className="flex gap-3">
                <ChevronRight className="w-6 h-6 text-green-400 mt-1" />
                Governments distributed economic support packages.
              </li>

              <li className="flex gap-3">
                <ChevronRight className="w-6 h-6 text-green-400 mt-1" />
                Businesses and workers received emergency assistance.
              </li>
            </ul>

            <p className="text-gray-300 leading-8 text-lg mt-6">
              These actions helped stabilize financial markets.
            </p>
          </div>

          {/* SECTION 7 */}
          <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-purple-400 mb-6">
              7. Technology Companies Became Major Winners
            </h3>

            <p className="text-gray-300 leading-8 text-lg">
              While many sectors struggled, technology businesses experienced
              massive growth.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-black/40 border border-white/10 rounded-2xl p-6">
                <Laptop className="w-8 h-8 text-cyan-400 mb-4" />

                <h4 className="text-2xl font-bold">Remote Work Boom</h4>

                <p className="text-gray-400 mt-4 leading-7">
                  Video conferencing, cloud computing, and online collaboration
                  platforms grew rapidly.
                </p>
              </div>

              <div className="bg-black/40 border border-white/10 rounded-2xl p-6">
                <Rocket className="w-8 h-8 text-green-400 mb-4" />

                <h4 className="text-2xl font-bold">
                  Digital Transformation
                </h4>

                <p className="text-gray-400 mt-4 leading-7">
                  E-commerce, streaming, and digital services accelerated
                  dramatically.
                </p>
              </div>
            </div>
          </div>

          {/* SECTION 8 */}
          <div className="bg-gradient-to-br from-green-500/10 to-cyan-500/5 border border-green-500/20 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-green-300 mb-6">
              8. Vaccine Development Changed Sentiment
            </h3>

            <p className="text-gray-300 leading-8 text-lg">
              Scientists and pharmaceutical companies rapidly worked on vaccine
              development.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              Positive vaccine news significantly improved investor confidence
              and economic expectations.
            </p>

            <div className="mt-8 bg-black/40 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-4">
                <Syringe className="w-10 h-10 text-green-400" />

                <div>
                  <h4 className="text-2xl font-bold">
                    Recovery Optimism Returned
                  </h4>

                  <p className="text-gray-400 mt-2 leading-7">
                    Markets started recovering strongly as economic reopening
                    expectations increased.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 9 */}
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-yellow-400 mb-6">
              9. One Of The Fastest Recoveries In Market History
            </h3>

            <p className="text-gray-300 leading-8 text-lg">
              Despite the panic in early 2020, global stock markets recovered
              surprisingly quickly.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              Massive stimulus, technology growth, vaccine optimism, and low
              interest rates supported the recovery.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              Many markets reached new all-time highs within the following
              years.
            </p>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Timeline Of The COVID-19 Crash
          </h2>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="flex gap-5 items-start bg-black/40 border border-white/10 rounded-3xl p-7"
              >
                <div className="w-14 h-14 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                  <ChevronRight className="w-6 h-6 text-cyan-400" />
                </div>

                <div>
                  <p className="text-cyan-400 font-semibold">{item.year}</p>

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
          Major Consequences Of The Pandemic Crash
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
      <section className="bg-gradient-to-b from-cyan-500/10 to-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold">
              Key Lessons From The COVID-19 Crash
            </h2>

            <p className="text-gray-400 text-lg leading-8 mt-6">
              The pandemic became a historic reminder that markets can collapse
              quickly during uncertainty — but they can also recover far faster
              than most people expect.
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
          “Markets Can Collapse In Weeks...
          <span className="text-cyan-400"> And Recover Just As Fast.”</span>
        </h2>

        <p className="text-gray-400 text-lg leading-8 mt-10">
          The COVID-19 crash showed the world how fragile global systems can
          become during unexpected crises — while also proving the resilience
          of markets, innovation, and human adaptation.
        </p>

        <div className="mt-12 inline-flex items-center gap-3 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-6 py-3 text-cyan-300">
          <ShieldCheck className="w-5 h-5" />
          Panic Is Temporary. Adaptation Is Powerful.
        </div>
      </section>
    </div>
  );
}