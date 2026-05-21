import Link from "next/link";

export default function Footer() {

  return (

    <footer className="mt-20 border-t border-slate-800 bg-[#020817]">

      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* BRAND */}
          <div>

            <h2 className="text-2xl font-bold text-white mb-4">

              Finance Dashboard

            </h2>

            <p className="text-slate-400 leading-8">

              Helping investors understand compounding,
              retirement planning, financial independence,
              and long-term wealth creation.

            </p>

          </div>

          {/* QUICK LINKS */}
          <div>

            <h3 className="text-xl font-semibold text-white mb-5">

              Quick Links

            </h3>

            <div className="flex flex-col space-y-4">

              <Link
                href="/about"
                className="text-slate-400 hover:text-white transition-colors"
              >

                About

              </Link>

              <Link
                href="/privacy-policy"
                className="text-slate-400 hover:text-white transition-colors"
              >

                Privacy Policy

              </Link>

              <Link
                href="/contact"
                className="text-slate-400 hover:text-white transition-colors"
              >

                Contact

              </Link>

              <Link
                href="/term-condition"
                className="text-slate-400 hover:text-white transition-colors"
              >

                Terms & Conditions

              </Link>

              <Link
                href="/wealth-stories"
                className="text-slate-400 hover:text-white transition-colors"
              >

                Wealth Stories

              </Link>

            </div>

          </div>

          {/* DISCLAIMER */}
          <div>

            <h3 className="text-xl font-semibold text-white mb-5">

              Disclaimer

            </h3>

            <p className="text-slate-400 leading-8">

              This platform is intended for educational and informational
              purposes only and should not be considered financial,
              investment, tax, or legal advice.

              All calculators, projections, and financial tools provided
              on this website are estimates based on assumptions and may
              not reflect actual market conditions or future returns.

              Please consult a qualified financial advisor before making
              investment decisions.

            </p>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-5">

          <p className="text-slate-500 text-sm">

            © 2026 Compound Wealth Labs. All rights reserved.

          </p>

          <p className="text-slate-500 text-sm text-center">

            Wealth is built slowly through discipline,
            patience, and consistency.

          </p>

        </div>

      </div>

    </footer>
  );
}