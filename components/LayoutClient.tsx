"use client";

import {
  useState,
  useEffect,
} from "react";

import Sidebar
from "./Sidebar";

import Footer
from "./Footer";

import GoogleAnalytics
from "./GoogleAnalytics";

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {

  const [
    sidebarWidth,
    setSidebarWidth,
  ] = useState(320);

  const [
    isDragging,
    setIsDragging,
  ] = useState(false);

  useEffect(() => {

    const handleMouseMove = (
      e: MouseEvent
    ) => {

      if (!isDragging) return;

      const newWidth =
        Math.min(
          Math.max(e.clientX, 240),
          500
        );

      setSidebarWidth(newWidth);
    };

    const handleMouseUp = () => {

      setIsDragging(false);

      document.body.style.cursor =
        "default";
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    window.addEventListener(
      "mouseup",
      handleMouseUp
    );

    return () => {

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      window.removeEventListener(
        "mouseup",
        handleMouseUp
      );
    };

  }, [isDragging]);

  return (

    <div className="flex">

      {/* SIDEBAR */}
      <Sidebar
        sidebarWidth={sidebarWidth}
      />

      {/* DRAG HANDLE */}
      <div
        onMouseDown={() =>
          setIsDragging(true)
        }
        className="
        hidden
        md:block
        fixed
        top-0
        z-[60]
        h-screen
        w-1.5
        cursor-col-resize
        bg-slate-800
        hover:bg-blue-500
        transition-colors
        "
        style={{
          left: `${sidebarWidth}px`,
        }}
      />

      {/* MAIN */}
      <main
        className="
        flex-1
        min-h-screen
        transition-all
        duration-75
        "
        style={{
          marginLeft: `${sidebarWidth}px`,
        }}
      >

        {children}

        <Footer />

      </main>

      <GoogleAnalytics />

    </div>
  );
}