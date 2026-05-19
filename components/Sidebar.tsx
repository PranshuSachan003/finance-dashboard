"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

import { useState } from "react";

import { Menu, X } from "lucide-react";

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

  const [isOpen, setIsOpen] =
    useState(false);

  return (

    <>

      {/* MOBILE TOPBAR */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-slate-950 border-b border-slate-800 flex items-center justify-between px-5 z-50">

        <h1 className="text-xl font-bold text-white">

          Finance App

        </h1>

        <button
          onClick={() =>
            setIsOpen(!isOpen)
          }
          className="text-white"
        >

          {
            isOpen
              ? <X size={28} />
              : <Menu size={28} />
          }

        </button>

      </div>

      {/* MOBILE OVERLAY */}
      {
        isOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/50 z-40"
            onClick={() =>
              setIsOpen(false)
            }
          />
        )
      }

      {/* SIDEBAR */}
      <aside
        className={`
          fixed top-0 left-0 h-screen w-72
          bg-slate-950 border-r border-slate-800
          flex flex-col z-50
          transform transition-transform duration-300

          ${
            isOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }

          lg:translate-x-0
        `}
      >

        {/* HEADER */}
        <div className="p-6 border-b border-slate-800 shrink-0 flex items-center justify-between">

          <div>

            <h1 className="text-3xl font-bold text-white">

              Finance App

            </h1>

            <p className="text-slate-400 mt-2">

              Wealth Planning Suite

            </p>

          </div>

          {/* CLOSE BUTTON MOBILE */}
          <button
            onClick={() =>
              setIsOpen(false)
            }
            className="lg:hidden text-white"
          >

            <X size={24} />

          </button>

        </div>

        {/* MENU */}
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
                    onClick={() =>
                      setIsOpen(false)
                    }
                    className={`
                      block px-5 py-4 rounded-2xl
                      transition-all duration-200 text-lg

                      ${
                        isActive
                          ? "bg-blue-600 text-white"
                          : "text-slate-300 hover:bg-slate-800 hover:text-white"
                      }
                    `}
                  >

                    {item.label}

                  </Link>
                );
              })
            }

          </div>

        </div>

        {/* FOOTER */}
        <div className="p-5 border-t border-slate-800 shrink-0">

          <div className="bg-slate-900 rounded-2xl p-4">

            <p className="text-slate-400 text-sm leading-7">

              Long-term wealth is created through
              discipline, patience, and consistency.

            </p>

          </div>

        </div>

      </aside>

    </>
  );
}