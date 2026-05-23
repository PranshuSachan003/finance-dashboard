import "./globals.css";

import LayoutClient from "../components/LayoutClient";

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (

    <html lang="en">

      <body
        suppressHydrationWarning
        className="
        bg-[#020817]
        text-white
        overflow-x-hidden
        "
      >

        <LayoutClient>

          {children}

        </LayoutClient>

      </body>

    </html>
  );
}