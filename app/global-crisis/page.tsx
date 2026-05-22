"use client";

import {
  AlertTriangle,
  ArrowDownRight,
  BadgeDollarSign,
  Banknote,
  Building2,
  ChevronRight,
  CircleDollarSign,
  Globe2,
  Home,
  Landmark,
  ShieldAlert,
  TrendingDown,
  TrendingUp,
  Wallet,
} from "lucide-react";

export default function GlobalFinancialCrisis2008Page() {
  const timeline = [
    {
      year: "2001 - 2003",
      title: "Cheap Money & Easy Credit",
      description:
        "Interest rates were reduced heavily after the dot-com crash. Loans became cheap and borrowing increased rapidly.",
    },
    {
      year: "2003 - 2006",
      title: "Housing Bubble Expands",
      description:
        "Home prices surged rapidly as banks aggressively issued mortgages, including risky loans to weak borrowers.",
    },
    {
      year: "2006 - 2007",
      title: "Cracks Begin Appearing",
      description:
        "Rising interest rates and loan defaults started weakening the housing market and financial system.",
    },
    {
      year: "2008",
      title: "Global Financial Crisis Explodes",
      description:
        "Major banks collapsed, markets crashed globally, and panic spread throughout the financial system.",
    },
    {
      year: "2009 onwards",
      title: "Government Rescue & Recovery",
      description:
        "Central banks and governments injected massive liquidity and stimulus programs to stabilize economies.",
    },
  ];

  const learnings = [
    {
      title: "Excessive Debt Is Dangerous",
      description:
        "Leverage can boost profits during booms but becomes devastating during downturns.",
    },
    {
      title: "Housing Markets Can Crash",
      description:
        "Many people believed home prices could never fall nationally — history proved otherwise.",
    },
    {
      title: "Complex Financial Products Carry Risks",
      description:
        "Financial innovation without proper risk management can destabilize the entire system.",
    },
    {
      title: "Liquidity Is Critical During Crises",
      description:
        "Cash reserves and emergency funds become extremely valuable during market panic.",
    },
    {
      title: "Fear Spreads Faster Than Logic",
      description:
        "During crises, investor psychology and panic can worsen economic collapses.",
    },
    {
      title: "Markets Eventually Recover",
      description:
        "Even after historic crashes, economies and markets have historically recovered over time.",
    },
  ];

  const impacts = [
    {
      title: "Lehman Brothers Collapse",
      icon: <Building2 className="w-8 h-8 text-red-500" />,
      description:
        "The bankruptcy of Lehman Brothers became the symbolic moment of the crisis and triggered global panic.",
    },
    {
      title: "Housing Market Collapse",
      icon: <Home className="w-8 h-8 text-orange-400" />,
      description:
        "Millions of homeowners lost properties as mortgage defaults surged across the United States.",
    },
    {
      title: "Global Market Crash",
      icon: <TrendingDown className="w-8 h-8 text-red-500" />,
      description:
        "Stock markets worldwide collapsed as fear spread across financial institutions and investors.",
    },
    {
      title: "Worldwide Recession",
      icon: <Globe2 className="w-8 h-8 text-yellow-400" />,
      description:
        "The crisis pushed major economies into deep recessions and caused massive job losses globally.",
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
            The Worst Financial Crisis Since The Great Depression
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight max-w-6xl">
            The Global Financial Crisis
            <span className="text-red-500"> (2008)</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl leading-8 mt-8 max-w-4xl">
            A global economic disaster caused by excessive debt, housing market
            speculation, risky financial products, and one of the biggest
            banking collapses in modern history.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-7">
              <TrendingDown className="w-10 h-10 text-red-500 mb-5" />

              <h3 className="text-4xl font-black">50%+</h3>

              <p className="text-gray-400 mt-3 leading-7">
                Fall in many global stock markets during the crisis.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-7">
              <Banknote className="w-10 h-10 text-yellow-400 mb-5" />

              <h3 className="text-4xl font-black">$10T+</h3>

              <p className="text-gray-400 mt-3 leading-7">
                Estimated global wealth destroyed during the collapse.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-7">
              <Wallet className="w-10 h-10 text-orange-400 mb-5" />

              <h3 className="text-4xl font-black">Millions</h3>

              <p className="text-gray-400 mt-3 leading-7">
                Lost jobs, homes, savings, and businesses worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold">
            What Led To The 2008 Crisis?
          </h2>

          <p className="text-gray-400 text-lg leading-8 mt-6">
            The 2008 Global Financial Crisis did not happen suddenly. It was
            built slowly over many years through excessive borrowing, financial
            greed, weak risk management, and dangerous assumptions about the
            housing market.
          </p>
        </div>

        <div className="space-y-10 mt-16">
          {/* SECTION 1 */}
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-green-400 mb-6">
              1. Cheap Money Flooded The Economy
            </h3>

            <p className="text-gray-300 leading-8 text-lg">
              After the Dot-Com Bubble burst in the early 2000s, the U.S.
              Federal Reserve reduced interest rates aggressively to stimulate
              the economy.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              Loans became cheap. Borrowing exploded across households,
              businesses, and financial institutions.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              Banks aggressively encouraged people to buy homes using mortgages.
            </p>
          </div>

          {/* SECTION 2 */}
          <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-500/5 border border-yellow-500/20 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-yellow-400 mb-6">
              2. The Housing Bubble Began
            </h3>

            <p className="text-gray-300 leading-8 text-lg">
              Since borrowing was easy, millions of people started purchasing
              houses.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              Housing demand exploded and prices kept rising rapidly year after
              year.
            </p>

            <div className="mt-8 bg-black/40 border border-white/10 rounded-2xl p-6">
              <p className="text-yellow-300 text-xl italic font-semibold">
                “People believed housing prices would never fall.”
              </p>
            </div>

            <p className="text-gray-300 leading-8 text-lg mt-6">
              This belief became one of the most dangerous assumptions behind
              the crisis.
            </p>
          </div>

          {/* SECTION 3 */}
          <div className="bg-gradient-to-br from-red-500/10 to-red-500/5 border border-red-500/20 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-red-400 mb-6">
              3. Banks Started Giving Risky Loans
            </h3>

            <p className="text-gray-300 leading-8 text-lg">
              Banks began issuing large numbers of risky mortgages called{" "}
              <span className="text-yellow-400 font-semibold">
                Subprime Loans
              </span>
              .
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              These loans were given to borrowers with weak credit histories and
              poor repayment ability.
            </p>

            <ul className="mt-6 space-y-4 text-gray-300 text-lg">
              <li className="flex gap-3">
                <ArrowDownRight className="w-6 h-6 text-red-400 mt-1" />
                Some borrowers had unstable incomes.
              </li>

              <li className="flex gap-3">
                <ArrowDownRight className="w-6 h-6 text-red-400 mt-1" />
                Many loans required very little initial payment.
              </li>

              <li className="flex gap-3">
                <ArrowDownRight className="w-6 h-6 text-red-400 mt-1" />
                Banks assumed rising home prices would protect them.
              </li>
            </ul>
          </div>

          {/* SECTION 4 */}
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-blue-400 mb-6">
              4. Dangerous Financial Products Spread Risk Everywhere
            </h3>

            <p className="text-gray-300 leading-8 text-lg">
              Banks did not keep these mortgages on their balance sheets.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              Instead, they bundled thousands of mortgages into complex
              financial products called Mortgage-Backed Securities (MBS).
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              These products were sold globally to banks, pension funds,
              insurance companies, and investors.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              Many investors believed these products were safe because rating
              agencies gave them high ratings.
            </p>
          </div>

          {/* SECTION 5 */}
          <div className="bg-gradient-to-br from-orange-500/10 to-orange-500/5 border border-orange-500/20 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-orange-400 mb-6">
              5. The Housing Bubble Started Cracking
            </h3>

            <p className="text-gray-300 leading-8 text-lg">
              Around 2006 and 2007, interest rates started rising.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              Mortgage payments became more expensive and many borrowers could
              no longer repay loans.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              Loan defaults increased rapidly.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              Housing prices stopped rising and eventually started falling.
            </p>
          </div>

          {/* SECTION 6 */}
          <div className="bg-gradient-to-br from-red-500/15 to-red-500/5 border border-red-500/20 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-red-500 mb-6">
              6. Financial Institutions Started Collapsing
            </h3>

            <p className="text-gray-300 leading-8 text-lg">
              Once housing prices fell, the value of mortgage-backed securities
              collapsed as well.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              Banks suddenly realized they were holding massive amounts of toxic
              assets.
            </p>

            <div className="mt-8 bg-black/40 border border-white/10 rounded-2xl p-8">
              <h4 className="text-3xl font-bold text-red-400">
                Lehman Brothers Collapse
              </h4>

              <p className="text-gray-400 mt-5 text-lg leading-8">
                In September 2008, Lehman Brothers filed for bankruptcy, causing
                panic across the global financial system.
              </p>
            </div>

            <p className="text-gray-300 leading-8 text-lg mt-8">
              Investors lost confidence in banks and the financial system
              itself.
            </p>
          </div>

          {/* SECTION 7 */}
          <div className="bg-gradient-to-br from-red-500/10 to-black border border-red-500/20 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-orange-400 mb-6">
              7. Global Panic Spread Everywhere
            </h3>

            <p className="text-gray-300 leading-8 text-lg">
              Stock markets crashed across the world.
            </p>

            <ul className="mt-6 space-y-4 text-gray-300 text-lg">
              <li className="flex gap-3">
                <TrendingDown className="w-6 h-6 text-red-400 mt-1" />
                Banks stopped lending money.
              </li>

              <li className="flex gap-3">
                <TrendingDown className="w-6 h-6 text-red-400 mt-1" />
                Businesses reduced hiring and investments.
              </li>

              <li className="flex gap-3">
                <TrendingDown className="w-6 h-6 text-red-400 mt-1" />
                Millions of people lost jobs and homes.
              </li>

              <li className="flex gap-3">
                <TrendingDown className="w-6 h-6 text-red-400 mt-1" />
                Global economies entered recession.
              </li>
            </ul>

            <p className="text-gray-300 leading-8 text-lg mt-6">
              Fear spread faster than almost anyone expected.
            </p>
          </div>

          {/* SECTION 8 */}
          <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-green-400 mb-6">
              8. Governments Stepped In To Save The System
            </h3>

            <p className="text-gray-300 leading-8 text-lg">
              Governments and central banks launched massive rescue operations
              to prevent complete financial collapse.
            </p>

            <ul className="mt-6 space-y-4 text-gray-300 text-lg">
              <li className="flex gap-3">
                <ChevronRight className="w-6 h-6 text-green-400 mt-1" />
                Banks received emergency bailouts.
              </li>

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
                Governments introduced stimulus packages to support economies.
              </li>
            </ul>

            <p className="text-gray-300 leading-8 text-lg mt-6">
              Recovery eventually began, but the damage lasted for years.
            </p>
          </div>

          {/* SECTION 9 */}
          <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-purple-400 mb-6">
              9. Why The 2008 Crisis Changed Finance Forever
            </h3>

            <p className="text-gray-300 leading-8 text-lg">
              The Global Financial Crisis exposed major weaknesses in banking,
              risk management, regulation, and financial incentives.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              Governments later introduced stricter banking regulations and
              stress-testing systems to reduce future risks.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-5">
              The crisis also permanently changed how investors think about
              leverage, housing bubbles, and financial risk.
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
          Major Consequences Of The Crisis
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
              Key Lessons From The 2008 Crisis
            </h2>

            <p className="text-gray-400 text-lg leading-8 mt-6">
              The 2008 crisis remains one of the most important reminders of how
              excessive leverage and financial greed can destabilize the global
              economy.
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
          “Financial Systems Look Strongest
          <span className="text-red-500"> Right Before They Break.”</span>
        </h2>

        <p className="text-gray-400 text-lg leading-8 mt-10">
          The Global Financial Crisis of 2008 showed the world how dangerous
          unchecked leverage, housing bubbles, and financial complexity can
          become when greed overtakes risk management.
        </p>

        <div className="mt-12 inline-flex items-center gap-3 bg-red-500/10 border border-red-500/20 rounded-full px-6 py-3 text-red-300">
          <ShieldAlert className="w-5 h-5" />
          Stability Often Hides Fragility Beneath The Surface.
        </div>
      </section>
    </div>
  );
}