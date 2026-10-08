"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

/**
 * RedirectBridge Component
 * High-performance transit bridge for summit destination routing.
 * Ensures that if a user clicks the browser Back button (←) from the external summit site,
 * they are immediately returned to our WIPF home page rather than getting trapped in redirection loops.
 */
export default function RedirectBridge({
  cityId,
  cityName,
  summitTitle,
  edition,
  targetUrl,
  accentColor = "#06b6d4",
  badgeGradient = "from-cyan-500 to-blue-600",
}) {
  const [hasRedirected, setHasRedirected] = useState(false);

  useEffect(() => {
    const storageKey = `wipf_redirect_${cityId}`;

    // If returning from external site via browser Back button, return immediately to home page
    const handlePageShow = (event) => {
      if (event.persisted || sessionStorage.getItem(storageKey)) {
        sessionStorage.removeItem(storageKey);
        window.location.replace("/");
      }
    };

    window.addEventListener("pageshow", handlePageShow);

    // Check if already marked as visited in this tab session
    if (sessionStorage.getItem(storageKey)) {
      sessionStorage.removeItem(storageKey);
      window.location.replace("/");
      return;
    }

    // Set flag and initiate fast redirect
    sessionStorage.setItem(storageKey, Date.now().toString());
    setHasRedirected(true);

    const timer = setTimeout(() => {
      window.location.href = targetUrl;
    }, 180);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, [cityId, targetUrl]);

  return (
    <main className="min-h-[100svh] w-full bg-[#02040a] text-white flex flex-col items-center justify-center p-4 relative overflow-hidden select-none">
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none opacity-30"
        style={{
          background: `radial-gradient(circle, ${accentColor} 0%, rgba(99,102,241,0.2) 50%, transparent 75%)`,
        }}
      />

      {/* Transit Card */}
      <div className="relative z-10 w-full max-w-md rounded-3xl p-6 sm:p-8 backdrop-blur-2xl border border-white/12 bg-[#040922]/90 shadow-[0_24px_55px_rgba(0,0,0,0.85)] flex flex-col items-center text-center gap-5">
        {/* WIPF Crest */}
        <div className="relative w-16 h-16 rounded-full border border-amber-400/40 p-1 flex items-center justify-center bg-black/40 shadow-[0_0_20px_rgba(251,191,36,0.25)]">
          <Image
            src="/favicon.ico"
            alt="World Intellectual Property Forum"
            width={48}
            height={48}
            className="rounded-full object-contain"
            priority
          />
        </div>

        {/* Header */}
        <div className="flex flex-col gap-1 items-center">
          <div className="flex items-center gap-2">
            <span
              className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold tracking-wider text-white bg-gradient-to-r ${badgeGradient} shadow-sm`}
            >
              {edition}
            </span>
            <span className="text-[10px] font-mono tracking-widest text-cyan-300 uppercase">
              {cityName}
            </span>
          </div>
          <h1 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white mt-1">
            {summitTitle}
          </h1>
          <p className="text-xs text-white/60 tracking-wider">
            Connecting to official summit platform...
          </p>
        </div>

        {/* Pulse indicator */}
        <div className="flex items-center gap-1.5 py-1">
          <span
            className="w-2 h-2 rounded-full animate-ping"
            style={{ backgroundColor: accentColor }}
          />
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: accentColor }}
          />
          <span className="text-xs font-mono text-white/50 tracking-wider ml-1">
            Redirecting
          </span>
        </div>

        {/* Navigation Actions */}
        <div className="w-full flex flex-col gap-2.5 pt-2">
          <a
            href={targetUrl}
            className="w-full py-3 px-4 rounded-xl text-xs font-bold tracking-wider uppercase text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all flex items-center justify-center gap-2"
          >
            <span>Proceed to {cityName} Summit</span>
            <span>→</span>
          </a>

          <Link
            href="/"
            replace
            className="w-full py-2.5 px-4 rounded-xl text-xs font-bold tracking-wider uppercase text-cyan-300 hover:text-white bg-transparent hover:bg-white/5 border border-white/10 transition-all flex items-center justify-center gap-2"
          >
            <span>←</span>
            <span>Return to WIPF Forum</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
