
"use client"; // Important for Next.js 13 app directory

import { useEffect, useRef } from "react";

export default function AdBanner300x250() {
  const adRef = useRef(null);

  useEffect(() => {
    // Set global ad options
    window.atOptions = {
      key: "82b2719f640e5503f44c17db03880669",
      format: "iframe",
      height: 250,
      width: 300,
      params: {},
    };

    // Create script element
    const script = document.createElement("script");
    script.src =
      "//www.highperformanceformat.com/82b2719f640e5503f44c17db03880669/invoke.js";
    script.async = true;
    script.type = "text/javascript";

    if (adRef.current) {
      adRef.current.appendChild(script);
    }

    return () => {
      if (adRef.current) adRef.current.innerHTML = "";
    };
  }, []);

  return <div ref={adRef} className="mx-auto my-4 w-[300px] h-[250px]" />;
}
