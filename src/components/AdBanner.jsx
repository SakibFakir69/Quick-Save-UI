"use client";

import { useEffect, useRef } from "react";

export default function AdBanner({ adKey, width, height, delay = 0 }) {
  const bannerRef = useRef(null);
  const hasLoaded = useRef(false);

  useEffect(() => {
    const loadAd = () => {
      if (hasLoaded.current || !bannerRef.current) return;
      
      hasLoaded.current = true;
      
      // Clear previous content
      bannerRef.current.innerHTML = '';
      
      // Create the ad container
      const adContainer = document.createElement('div');
      adContainer.id = `ad-container-${adKey}`;
      
      // Create the ad script
      const script = document.createElement('script');
      script.innerHTML = `
        window.atOptions = window.atOptions || {};
        window.atOptions = {
          key: '${adKey}',
          format: 'iframe',
          width: ${width},
          height: ${height},
          params: {}
        };
      `;
      
      // Create the script that loads the ad
      const adScript = document.createElement('script');
      adScript.src = `https://www.highperformanceformat.com/${adKey}/invoke.js`;
      adScript.async = true;
      adScript.onerror = () => {
        // Fallback if ad fails to load
        if (bannerRef.current) {
          bannerRef.current.innerHTML = `
            <div style="width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:#f5f5f5;border:1px dashed #ddd;">
              <div style="text-align:center;">
                <div style="font-size:12px;color:#999;">Ad placeholder</div>
                <div style="font-size:10px;color:#ccc;margin-top:5px;">${width}×${height}</div>
              </div>
            </div>
          `;
        }
      };
      
      // Append everything
      bannerRef.current.appendChild(adContainer);
      document.head.appendChild(script);
      bannerRef.current.appendChild(adScript);
    };

    const timer = setTimeout(loadAd, delay);
    return () => clearTimeout(timer);
  }, [adKey, width, height, delay]);

  return (
    <div 
      ref={bannerRef}
      style={{ 
        width: `${width}px`, 
        minHeight: `${height}px`, 
        margin: "1rem auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        border: "1px dashed #ddd"
      }}
    >
      <span style={{ fontSize: "12px", color: "#999" }}>Loading ad...</span>
    </div>
  );
}