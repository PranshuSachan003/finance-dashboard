"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

import Image from "next/image";

const calculatorItems = [

  {
    label: "Dashboard",
    href: "/",
  },

  {
    label: "SIP Calculator",
    href: "/sip",
  },

  {
    label: "Lumpsum Calculator",
    href: "/lumpsum",
  },

  {
    label: "FIRE Calculator",
    href: "/fire",
  },

  {
    label: "SWP Calculator",
    href: "/swp",
  },

  {
    label: "Goal Planner",
    href: "/goal-planner",
  },

  {
    label: "Dividend Calculator",
    href: "/dividend",
  },

  {
    label: "Compare SIP Scenarios",
    href: "/compare",
  },

  {
    label: "XIRR Calculator",
    href: "/xirr",
  },

  {
    label: "Asset Allocation",
    href: "/rebalancer",
  },

  {
    label: "Net Worth Tracker",
    href: "/networth",
  },

  {
    label: "Monte Carlo Simulation",
    href: "/montecarlo",
  },

  {
    label: "Stock CAGR Calculator",
    href: "/cagr",
  },

  {
    label: "Tax Calculator",
    href: "/tax",
  },

  {
    label: "Real Estate vs SIP",
    href: "/realestate-vs-sip",
  },

  {
    label: "EMI Calculator",
    href: "/emi",
  },

  {
    label: "Retirement Stress Test",
    href: "/retirement-stress",
  },
];

const educationItems = [

  {
    label: "Wealth Stories",
    href: "/wealth-stories",
  },
];

const footerItems = [

  {
    label: "About",
    href: "/about",
  },

  {
    label: "Privacy Policy",
    href: "/privacy-policy",
  },

  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Sidebar() {

  const pathname = usePathname();

  const renderLink = (
    item: {
      label: string;
      href: string;
    }
  ) => {

    const isActive =
      pathname === item.href;

    return (

      <Link
        key={item.href}
        href={item.href}
        className={`
        block
        px-4
        py-3
        rounded-2xl
        text-sm
        font-medium
        transition-all
        duration-200

        ${
          isActive
            ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
            : "text-slate-300 hover:bg-slate-800 hover:text-white"
        }
        `}
      >

        {item.label}

      </Link>
    );
  };

  return (

    <aside
      className="
      fixed
      top-0
      left-0
      h-screen
      w-72
      bg-slate-950
      border-r
      border-slate-800
      overflow-y-auto
      hidden
      md:flex
      flex-col
      z-50
      "
    >

      {/* BRAND */}
      <div className="px-6 py-6 border-b border-slate-800">

        <div className="flex items-center gap-4">

          <Image
            src="/logo.png"
            alt="Finance Dashboard"
            width={48}
            height={48}
            className="rounded-2xl w-auto h-auto"
          />

          <div>

            <h1 className="text-2xl font-bold text-white">

              Finance

            </h1>

            <p className="text-sm text-slate-400 mt-1">

              Wealth Dashboard

            </p>

          </div>

        </div>

      </div>

      {/* MAIN NAVIGATION */}
      <div className="flex-1 overflow-y-auto">

        {/* CALCULATORS */}
        <div className="px-4 py-6">

          <h2 className="px-3 mb-4 text-xs font-semibold tracking-widest uppercase text-slate-500">

            Financial Calculators

          </h2>

          <nav className="space-y-2">

            {
              calculatorItems.map(renderLink)
            }

          </nav>

        </div>

        {/* EDUCATION */}
        <div className="px-4 pb-8">

          <h2 className="px-3 mb-4 text-xs font-semibold tracking-widest uppercase text-slate-500">

            Learning & Insights

          </h2>

          <nav className="space-y-2">

            {
              educationItems.map(renderLink)
            }

          </nav>

        </div>

      </div>

      {/* FOOTER LINKS */}
      <div className="border-t border-slate-800 px-4 py-5">

        <div className="space-y-2">

          {
            footerItems.map((item) => {

              const isActive =
                pathname === item.href;

              return (

                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                  block
                  px-3
                  py-2
                  rounded-xl
                  text-sm
                  transition-colors

                  ${
                    isActive
                      ? "text-white bg-slate-800"
                      : "text-slate-400 hover:text-white hover:bg-slate-900"
                  }
                  `}
                >

                  {item.label}

                </Link>
              );
            })
          }

        </div>

        {/* SMALL FOOTER TEXT */}
        <div className="mt-6 px-3">

          <p className="text-xs leading-6 text-slate-500">

            Wealth is built slowly through discipline,
            patience, and consistency.

          </p>

        </div>

      </div>

    </aside>
  );
}