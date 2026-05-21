"use client";

import Script from "next/script";

export default function GoogleAnalytics() {

  const GA_MEASUREMENT_ID =
    "G-LZ2CK1X1M6";

  return (
    <>
      {/* GOOGLE TAG */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />

      {/* GOOGLE ANALYTICS */}
      <Script
        id="google-analytics"
        strategy="afterInteractive"
      >

        {`
          window.dataLayer = window.dataLayer || [];

          function gtag(){
            dataLayer.push(arguments);
          }

          gtag('js', new Date());

          gtag(
            'config',
            '${GA_MEASUREMENT_ID}',
            {
              page_path: window.location.pathname,
            }
          );
        `}

      </Script>
    </>
  );
}