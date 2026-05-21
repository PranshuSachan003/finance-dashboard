import "./globals.css";

import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import GoogleAnalytics
from "../components/GoogleAnalytics";

export const metadata = {

  metadataBase: new URL(
    "https://ps-finance-dashboard.vercel.app"
  ),

  title: {
    default: "PS Finance Dashboard",
    template: "%s | PS Finance Dashboard",
  },

  description:
    "Advanced investment, SIP, FIRE, EMI, retirement, and wealth planning calculators for long-term investors.",

  keywords: [
    "SIP Calculator",
    "FIRE Calculator",
    "Retirement Calculator",
    "EMI Calculator",
    "XIRR Calculator",
    "Investment Calculator",
    "Finance Dashboard",
    "Monte Carlo Simulation",
    "Stock CAGR Calculator",
    "Real Estate vs SIP",
  ],

  verification: {
    google: "rYMGDvdPSZiI1Upg1g8FeRahjJJzXY4X_CN6esWfjZM",
  },

  authors: [
    {
      name: "Pranshu Sachan",
    },
  ],

  creator: "Finance Dashboard",

  openGraph: {

    title: "Finance Dashboard",

    description:
      "Advanced finance and retirement planning tools for long-term wealth creation.",

    url:
      "https://ps-finance-dashboard.vercel.app",

    siteName:
      "Finance Dashboard",

    locale: "en_US",

    type: "website",
  },

  twitter: {

    card: "summary_large_image",

    title: "Finance Dashboard",

    description:
      "Investment and retirement calculators for wealth creation.",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (

    <html lang="en">

      <body
        className="bg-[#020817] text-white"
        suppressHydrationWarning
      >

        <div className="flex">

          {/* SIDEBAR */}
          <Sidebar />

          {/* MAIN CONTENT */}
          <main className="w-full min-h-screen md:ml-72">

            {children}

            <Footer />

          </main>

        </div>
        <GoogleAnalytics />
      </body>

    </html>
  );
}