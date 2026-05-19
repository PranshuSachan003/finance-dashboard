"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

const menuItems = [

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
    label: "Compare Sip Scenarios",
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
    label: "Monte Carlo",
    href: "/montecarlo",
  },

  {
    label: "Stock CAGR",
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

  {
    label: "Wealth Stories & Lessons",
    href: "/wealth-stories",
  },

];

export default function Sidebar() {

  const pathname = usePathname();

  return (

    <aside className="fixed left-0 top-0 h-screen w-72 bg-slate-950 border-r border-slate-800 flex flex-col">

      {/* HEADER */}
      <div className="p-6 border-b border-slate-800 shrink-0">

        <h1 className="text-3xl font-bold text-white">

          Finance App

        </h1>

        <p className="text-slate-400 mt-2">

          Wealth Planning Suite

        </p>

      </div>

      {/* SCROLLABLE MENU */}
      <div className="flex-1 overflow-y-auto p-4">

        <div className="space-y-2">

          {
            menuItems.map((item) => {

              const isActive =
                pathname === item.href;

              return (

                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-5 py-4 rounded-2xl transition-all duration-200 text-lg
                  
                  ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`}
                >

                  {item.label}

                </Link>
              );
            })
          }

        </div>

      </div>

    </aside>
  );
}