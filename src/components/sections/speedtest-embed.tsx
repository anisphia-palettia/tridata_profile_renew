"use client";

import { useEffect, useRef, useState } from "react";

export default function SpeedtestEmbed() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState<number | null>(null);

  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (e.origin !== "https://speedtest.antofisalia.my.id") return;
      const data = e.data;
      // Support common iframe-resizer / custom postMessage formats
      if (typeof data === "number" && data > 100) {
        setHeight(data);
      } else if (typeof data === "object" && data !== null) {
        const h = data.height ?? data.frameHeight ?? data.scrollHeight;
        if (typeof h === "number" && h > 100) setHeight(h);
      }
    };

    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  // Fallback: viewport height minus header (64px) + section padding (16px)
  const fallbackHeight = "calc(100vh - 80px)";

  return (
    <iframe
      ref={iframeRef}
      src="https://speedtest.antofisalia.my.id/"
      title="Speedtest Tridata — Uji Kecepatan Internet"
      className="w-full block"
      style={{
        height: height ? `${height}px` : fallbackHeight,
        minHeight: "700px",
        border: "none",
        display: "block",
      }}
      scrolling="no"
      loading="lazy"
      allow="microphone; camera"
    />
  );
}
