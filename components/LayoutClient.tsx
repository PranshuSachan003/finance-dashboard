"use client";

import Sidebar from "./Sidebar";
import Footer from "./Footer";
import GoogleAnalytics from "./GoogleAnalytics";

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {

  return (

    <div
      className="
      flex
      w-full
      min-h-screen
      overflow-x-hidden
      "
    >

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <main
        className="
        flex-1
        min-w-0
        min-h-screen
        overflow-x-hidden

        md:ml-72
        "
      >

        {children}

        <Footer />

      </main>

      <GoogleAnalytics />

    </div>
  );
}