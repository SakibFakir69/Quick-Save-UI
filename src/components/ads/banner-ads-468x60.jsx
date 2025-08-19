"use client"; // Important for Next.js 13 app directory

import { useEffect, useRef } from "react";

export default function AdBanner468x60() {
   const adRef = useRef(null);

  useEffect(() => {
    // Set global ad options
    window.atOptions = {
      key: "9280d5e6ff1b44ad1a4c06975a4bcf03",
      format: "iframe",
      height: 60,
      width: 468,
      params: {},
    };

    // Create script element
    const script = document.createElement("script");
    script.src =
      "//www.highperformanceformat.com/9280d5e6ff1b44ad1a4c06975a4bcf03/invoke.js";
    script.async = true;
    script.type = "text/javascript";

    if (adRef.current) {
      adRef.current.appendChild(script);
    }

    // Cleanup on unmount
    return () => {
      if (adRef.current) adRef.current.innerHTML = "";
    };
  }, []);

  return (
    <div
      ref={adRef}
      className="mx-auto my-4 w-[468px] h-[60px]"
    />
  );
}
