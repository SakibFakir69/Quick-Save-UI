

"use client";

import { useEffect, useRef } from "react";


export default function AdBanner({ adKey, width, height, delay = 0 }) {
  const adRef = useRef(null);

  useEffect(() => {
    const loadAd = () => {
      window.atOptions = {
        key: adKey,
        format: "iframe",
        height,
        width,
        params: {},
      };

      const script = document.createElement("script");
      script.src = `//www.highperformanceformat.com/${adKey}/invoke.js`;
      script.async = true;
      script.type = "text/javascript";

      if (adRef.current) {
        adRef.current.appendChild(script);
      }
    };

    if (delay > 0) {
      const timer = setTimeout(loadAd, delay);
      return () => clearTimeout(timer);
    } else {
      loadAd();
    }

    return () => {
      if (adRef.current) adRef.current.innerHTML = "";
    };
  }, [adKey, width, height, delay]);

  return <div ref={adRef} className="mx-auto my-4" style={{ width, height }} />;
}
