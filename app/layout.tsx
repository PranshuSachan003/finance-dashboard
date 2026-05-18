import "./globals.css";

import Sidebar from "../components/Sidebar";

export const metadata = {
  title: "Finance Calculator Suite",
  description:
    "Investment and retirement calculators",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">

      <body className="bg-[#020817]">

        <div className="flex">

          {/* SIDEBAR */}
          <Sidebar />

          {/* PAGE CONTENT */}
          <main className="ml-72 w-full min-h-screen">

            {children}

          </main>

        </div>

      </body>

    </html>
  );
}