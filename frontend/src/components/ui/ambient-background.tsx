"use client";

import React, { memo } from "react";

/**
 * Cloud sky background — rendered as an absolutely-positioned 
 * element at the top of the page that scrolls away naturally.
 * Uses a real cloud sky image for authentic look.
 */
export const AmbientBackground = memo(() => {
  return (
    <div
      className="absolute inset-x-0 top-0 h-[100vh] pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
    >
      {/* Cloud sky image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url("/images/cloud-sky-bg.png")',
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Fade to white at bottom */}
      <div
        className="absolute inset-x-0 bottom-0 h-[50%]"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.6) 35%, rgba(255,255,255,0.9) 60%, white 85%)",
        }}
      />
    </div>
  );
});
