"use client";

import { useState } from "react";

import Link from "next/link";

import { usePathname } from "next/navigation";

import Image from "next/image";

import {
  Menu,
  X,
} from "lucide-react";

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
    label: "Monte Carlo Simulation",
    href: "/montecarlo",
  },

  {
    label: "Stock CAGR Calculator",
    href: "/cagr",
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
    label: "The Wall Street Crash",
    href: "/wall-streat-1929",
  },

  {
    label: "Black Monday",
    href: "/black-monday",
  },

  {
    label: "The Dot-Com Bubble Burst",
    href: "/dotcom",
  },

  {
    label: "The Global Financial Crisis",
    href: "/global-crisis",
  },

  {
    label: "The COVID-19 Crash",
    href: "/covid",
  },

  {
    label: "Harshad Mehta Scam",
    href: "/harshad-mehta-scam",
  },

  {
    label: "Tulip Mania",
    href: "/tulip-mania",
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

  const pathname =
    usePathname();

  const [
    mobileOpen,
    setMobileOpen,
  ] = useState(false);

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
        onClick={() =>
          setMobileOpen(false)
        }
        className={`
        group
        flex
        items-center
        px-4
        py-3
        rounded-2xl
        text-sm
        font-medium
        transition-all
        duration-200

        ${
          isActive
            ? `
              bg-blue-600
              text-white
              shadow-lg
              shadow-blue-500/20
            `
            : `
              text-slate-300
              hover:bg-slate-800
              hover:text-white
            `
        }
        `}
      >

        <span className="truncate">
          {item.label}
        </span>

      </Link>
    );
  };

  return (

    <>

      {/* MOBILE TOP BAR */}
      <div
        className="
        md:hidden
        fixed
        top-0
        left-0
        right-0
        z-50
        h-16
        bg-slate-950/95
        backdrop-blur-xl
        border-b
        border-slate-800
        flex
        items-center
        justify-between
        px-4
        "
      >

        {/* BRAND */}
        <div
          className="
          flex
          items-center
          gap-3
          min-w-0
          "
        >

          <Image
            src="/logo.png"
            alt="Finance Dashboard"
            width={40}
            height={40}
            className="
            rounded-xl
            shrink-0
            "
          />

          <div className="min-w-0">

            <h1
              className="
              text-base
              font-bold
              text-white
              truncate
              "
            >

              Finance Dashboard

            </h1>

            <p
              className="
              text-xs
              text-slate-400
              truncate
              "
            >

              Wealth Planning Tools

            </p>

          </div>

        </div>

        {/* MENU BUTTON */}
        <button
          onClick={() =>
            setMobileOpen(
              !mobileOpen
            )
          }
          className="
          p-2
          rounded-xl
          bg-slate-800
          text-white
          shrink-0
          "
        >

          {
            mobileOpen
              ? (
                <X
                  className="
                  w-6
                  h-6
                  "
                />
              )
              : (
                <Menu
                  className="
                  w-6
                  h-6
                  "
                />
              )
          }

        </button>

      </div>

      {/* MOBILE OVERLAY */}
      {
        mobileOpen && (

          <div
            onClick={() =>
              setMobileOpen(false)
            }
            className="
            md:hidden
            fixed
            inset-0
            bg-black/60
            backdrop-blur-sm
            z-40
            "
          />

        )
      }

      {/* SIDEBAR */}
      <aside
        className={`
        fixed
        top-0
        left-0
        h-screen
        w-[280px]
        bg-slate-950
        border-r
        border-slate-800
        z-50
        flex
        flex-col
        transition-transform
        duration-300

        ${
          mobileOpen
            ? "translate-x-0"
            : "-translate-x-full md:translate-x-0"
        }
        `}
      >

        {/* DESKTOP BRAND */}
        <div
          className="
          hidden
          md:flex
          items-center
          gap-4
          px-6
          py-6
          border-b
          border-slate-800
          "
        >

          <Image
            src="/logo.png"
            alt="Finance Dashboard"
            width={48}
            height={48}
            className="
            rounded-2xl
            "
          />

          <div>

            <h1
              className="
              text-2xl
              font-bold
              text-white
              "
            >

              Finance

            </h1>

            <p
              className="
              text-sm
              text-slate-400
              mt-1
              "
            >

              Wealth Dashboard

            </p>

          </div>

        </div>

        {/* MOBILE TOP SPACING */}
        <div
          className="
          h-16
          md:hidden
          "
        />

        {/* CONTENT */}
        <div
          className="
          flex-1
          overflow-y-auto
          px-4
          py-6
          "
        >

          {/* CALCULATORS */}
          <div className="mb-8">

            <h2
              className="
              px-3
              mb-4
              text-xs
              font-semibold
              tracking-widest
              uppercase
              text-slate-500
              "
            >

              Financial Calculators

            </h2>

            <nav className="space-y-2">

              {
                calculatorItems.map(
                  renderLink
                )
              }

            </nav>

          </div>

          {/* EDUCATION */}
          <div>

            <h2
              className="
              px-3
              mb-4
              text-xs
              font-semibold
              tracking-widest
              uppercase
              text-slate-500
              "
            >

              Learning & Insights

            </h2>

            <nav className="space-y-2">

              {
                educationItems.map(
                  renderLink
                )
              }

            </nav>

          </div>

        </div>

        {/* FOOTER */}
        <div
          className="
          border-t
          border-slate-800
          px-4
          py-5
          "
        >

          <div className="space-y-2">

            {
              footerItems.map(
                (item) => {

                  const isActive =
                    pathname ===
                    item.href;

                  return (

                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() =>
                        setMobileOpen(false)
                      }
                      className={`
                      block
                      px-3
                      py-2
                      rounded-xl
                      text-sm
                      transition-colors

                      ${
                        isActive
                          ? `
                            text-white
                            bg-slate-800
                          `
                          : `
                            text-slate-400
                            hover:text-white
                            hover:bg-slate-900
                          `
                      }
                      `}
                    >

                      {item.label}

                    </Link>
                  );
                }
              )
            }

          </div>

        </div>

      </aside>

    </>
  );
}