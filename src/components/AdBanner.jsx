"use client";
import React, { useEffect, useRef } from "react";

export default function AdBanner({ adKey, width, height }) {
  const iframeRef = useRef(null);

  useEffect(() => {
    if (!iframeRef.current) return;

    const doc = iframeRef.current.contentWindow.document;
    doc.open();
    doc.write(`
      <html><body style="margin:0;padding:0;">
        <script type="text/javascript">
          atOptions = {
            key : '${adKey}',
            format : 'iframe',
            width : ${width},
            height : ${height},
            params : {}
          };
        </script>
        <script type="text/javascript" src="//www.highperformanceformat.com/${adKey}/invoke.js"></script>
      </body></html>
    `);
    doc.close();
  }, [adKey, width, height]);

  return <iframe ref={iframeRef} width={width} height={height} style={{ border: "none" }} />;
}
