"use client";

import React from "react";
import Image from "next/image";

/**
 * GlobalNetworkCanvas Component
 * Signature centerpiece communicating "GLOBAL INTELLECTUAL PROPERTY FORUM".
 * - Pure 3D holographic Earth globe with mix-blend-screen (ZERO black disc or harsh div circle)
 * - Luminous cyan continents and India-Thailand connection arc floating seamlessly in space
 * - Interactive SVG radar beacons over Bengaluru & Bangkok with traveling photon pulses
 * - Ambient celestial orbital rings and live status caption
 */
export default function GlobalNetworkCanvas({ hoveredCity, onGlobeHover }) {
  const isBangkok = hoveredCity === "bangkok";
  const isBengaluru = hoveredCity === "bengaluru";

  return (
    <div
      aria-label="World Intellectual Property Forum — Global Connection Visualization"
      onMouseEnter={() => onGlobeHover?.(true)}
      onMouseLeave={() => onGlobeHover?.(false)}
      className="relative flex flex-col items-center justify-center select-none"
    >
      {/* Dynamic ambient celestial glow aura behind the hologram */}
      <div
        aria-hidden="true"
        className={`absolute w-80 h-80 sm:w-[420px] sm:h-[420px] md:w-[480px] md:h-[480px] lg:w-[540px] lg:h-[540px] rounded-full blur-3xl pointer-events-none transition-all duration-700 ${
          isBangkok
            ? "bg-gradient-to-tr from-amber-500/25 via-rose-500/20 to-cyan-500/20 scale-105"
            : isBengaluru
            ? "bg-gradient-to-tr from-cyan-400/25 via-blue-600/20 to-indigo-500/20 scale-105"
            : "bg-gradient-to-tr from-cyan-500/20 via-blue-600/18 to-indigo-500/14 opacity-85 animate-orb-glow"
        }`}
      />

      {/* Main Holographic Globe Stage */}
      <div className="relative w-[270px] sm:w-[320px] md:w-[350px] lg:w-[380px] xl:w-[460px] aspect-square flex items-center justify-center">
        {/* Outer Tech Coordinate Ring */}
        <div
          aria-hidden="true"
          className="absolute -inset-2 sm:-inset-3 rounded-full border border-cyan-400/25 border-dashed pointer-events-none animate-spin-slow"
        />

        {/* Counter Orbit Ring with Satellite Node */}
        <div
          aria-hidden="true"
          className="absolute -inset-1 sm:-inset-1.5 rounded-full border border-white/12 pointer-events-none origin-center rotate-[28deg]"
        >
          {/* Traveling Satellite Node */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-cyan-200 shadow-[0_0_12px_rgba(6,182,212,1)]" />
        </div>

        {/* 8K 3D Holographic Earth Sphere — Transparent PNG with ZERO black background around it */}
        <div
          className="relative w-full h-full flex items-center justify-center transition-transform duration-700 ease-out pointer-events-none"
          style={{
            transform: isBangkok
              ? "rotate(-3deg) scale(1.02)"
              : isBengaluru
              ? "rotate(3deg) scale(1.02)"
              : "none",
          }}
        >
          <Image
            src="/images/global-sphere.png"
            alt="3D Holographic Earth Globe — Global Intellectual Property Connection"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 550px"
            className="object-contain object-center pointer-events-none select-none filter drop-shadow-[0_0_35px_rgba(6,182,212,0.45)]"
          />

          {/* Interactive SVG Overlay (Radar Beacons & Live Traveling Photons) */}
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-10"
          >
            <defs>
              <filter id="livePhotonGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="1.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* BENGALURU LIVE BEACON PULSE (Coordinates ~ 48%, 40.5%) */}
            <g>
              <circle
                cx="48"
                cy="40.5"
                r={isBengaluru ? "5.5" : "3.5"}
                fill="none"
                stroke="#38bdf8"
                strokeWidth="0.6"
                className="animate-ping origin-[48px_40.5px]"
                opacity={isBengaluru ? "0.95" : "0.6"}
              />
              <circle
                cx="48"
                cy="40.5"
                r="1.8"
                fill="#ffffff"
                stroke="#0284c7"
                strokeWidth="0.5"
                filter="url(#livePhotonGlow)"
              />
              {/* Bengaluru Typography Marker */}
              <text
                x="32"
                y="36"
                fill="#e0f2fe"
                fontSize="2.4"
                fontWeight="800"
                letterSpacing="0.12em"
                className="font-sans drop-shadow-[0_1px_4px_rgba(0,0,0,1)] select-none"
              >
                BENGALURU
              </text>
            </g>

            {/* BANGKOK LIVE BEACON PULSE (Coordinates ~ 66%, 46.5%) */}
            <g>
              <circle
                cx="66"
                cy="46.5"
                r={isBangkok ? "5.5" : "3.5"}
                fill="none"
                stroke="#f43f5e"
                strokeWidth="0.6"
                className="animate-ping origin-[66px_46.5px]"
                opacity={isBangkok ? "0.95" : "0.6"}
              />
              <circle
                cx="66"
                cy="46.5"
                r="1.8"
                fill="#ffffff"
                stroke="#be123c"
                strokeWidth="0.5"
                filter="url(#livePhotonGlow)"
              />
              {/* Bangkok Typography Marker */}
              <text
                x="69"
                y="45"
                fill="#ffe4e6"
                fontSize="2.4"
                fontWeight="800"
                letterSpacing="0.12em"
                className="font-sans drop-shadow-[0_1px_4px_rgba(0,0,0,1)] select-none"
              >
                BANGKOK
              </text>
            </g>

            {/* Traveling Light Photon along the connecting energy arc */}
            <path
              id="energyArcPath"
              d="M 48,40.5 Q 57,36 66,46.5"
              fill="none"
              stroke="transparent"
            />
            <circle r="0.9" fill="#ffffff" filter="url(#livePhotonGlow)">
              <animateMotion
                path="M 48,40.5 Q 57,36 66,46.5"
                dur="2s"
                repeatCount="indefinite"
              />
            </circle>
            {/* Reverse Echo Photon */}
            <circle r="0.7" fill="#38bdf8">
              <animateMotion
                path="M 66,46.5 Q 57,36 48,40.5"
                dur="2.8s"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
        </div>
      </div>

      {/* Supporting Global Caption */}
      <div className="flex items-center gap-2 mt-4 px-3.5 py-1 rounded-full bg-[#030612]/85 backdrop-blur-md border border-white/12 shadow-lg pointer-events-none">
        <span className="text-[8.5px] sm:text-[9.5px] font-bold tracking-[0.28em] uppercase text-cyan-200/90 flex items-center gap-2">
          <span className="text-[7.5px] text-rose-400">✦</span> TWO SUMMITS · ONE GLOBAL FORUM{" "}
          <span className="text-[7.5px] text-cyan-400">✦</span>
        </span>
      </div>
    </div>
  );
}
