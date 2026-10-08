"use client";

import React from "react";
import Image from "next/image";

/**
 * BackgroundAtmosphere Component
 * Ultra-luxury, unified cinematic summit background.
 * Features:
 * - Continuous deep midnight-sapphire cosmic twilight sky across the entire canvas
 * - Harmonious combined panoramic horizon: Bangkok sunset on left flank, Bengaluru twilight on right flank
 * - Both horizons smoothly dissolve into a deep luminous cosmic spotlight behind the 3D globe (ZERO center seam)
 * - Clean, non-intrusive planetary meridian arcs & constellation nodes (NO cluttered laser lines slicing through skylines)
 * - Grounding horizon vignette for maximum card contrast and editorial elegance
 */
export default function BackgroundAtmosphere({ parallaxOffset = { x: 0, y: 0 } }) {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none z-0"
      style={{
        background:
          "radial-gradient(ellipse 95% 75% at 50% 35%, #05143a 0%, #030a24 45%, #010410 100%)",
      }}
    >
      {/* =========================================================================
          LAYER 1: VOLUMETRIC CELESTIAL SPOTLIGHT (BEHIND HOLOGRAPHIC GLOBE)
          ========================================================================= */}
      {/* Central Ethereal Halo illuminating the 3D Hologram */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[680px] h-[550px] sm:h-[680px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,0.22) 0%, rgba(59,130,246,0.14) 45%, transparent 72%)",
          filter: "blur(65px)",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] sm:w-[920px] h-[750px] sm:h-[920px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.16) 0%, rgba(147,51,234,0.06) 50%, transparent 75%)",
          filter: "blur(110px)",
        }}
      />

      {/* Bangkok Sunset Warmth Aurora (Lower-Left Flank) - Desktop Only */}
      <div
        className="hidden lg:block absolute -bottom-24 -left-24 w-[650px] sm:w-[850px] h-[650px] sm:h-[850px] rounded-full pointer-events-none will-change-transform"
        style={{
          background:
            "radial-gradient(circle, rgba(245,158,11,0.25) 0%, rgba(244,63,94,0.12) 45%, transparent 75%)",
          filter: "blur(90px)",
          transform: `translate3d(${parallaxOffset.x * 0.3}px, ${parallaxOffset.y * 0.3}px, 0)`,
        }}
      />

      {/* Mobile Celestial Sapphire Glow (Maintains uniform 'above blue' cosmic theme across entire mobile height) */}
      <div
        aria-hidden="true"
        className="lg:hidden absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[550px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,0.18) 0%, rgba(37,99,235,0.12) 45%, transparent 75%)",
          filter: "blur(90px)",
        }}
      />

      {/* Bengaluru Sapphire Aurora (Upper-Right Flank) */}
      <div
        className="absolute -top-24 -right-24 w-[650px] sm:w-[850px] h-[650px] sm:h-[850px] rounded-full pointer-events-none will-change-transform"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,0.25) 0%, rgba(37,99,235,0.16) 45%, transparent 75%)",
          filter: "blur(90px)",
          transform: `translate3d(${parallaxOffset.x * -0.3}px, ${parallaxOffset.y * -0.3}px, 0)`,
        }}
      />

      {/* =========================================================================
          LAYER 2: HARMONIOUS PANORAMIC CITY HORIZONS (SEAMLESSLY COMBINED)
          ========================================================================= */}
      {/* Left Flank: Bangkok Wat Arun Sunset Architectural Horizon - Desktop Only */}
      <div
        className="hidden lg:block absolute bottom-0 left-0 w-[50vw] max-w-[760px] h-[68vh] overflow-hidden opacity-38 pointer-events-none"
        style={{
          maskImage:
            "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.55) 45%, transparent 80%), linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.75) 50%, transparent 92%)",
          WebkitMaskImage:
            "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.55) 45%, transparent 80%), linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.75) 50%, transparent 92%)",
        }}
      >
        <Image
          src="/images/bangkok-hero.jpg"
          alt="Bangkok Horizon Background"
          fill
          priority
          sizes="50vw"
          className="object-cover object-bottom filter brightness-100 saturate-125 contrast-105"
        />
        {/* Warm Golden Sunset Atmospheric Glaze */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600/30 via-orange-950/20 to-transparent" />
        {/* Soft Rim Light */}
        <div className="absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-amber-400/20 to-transparent blur-md" />

        {/* Editorial Watermark */}
        <div className="absolute bottom-6 left-6 hidden sm:flex flex-col gap-0.5 opacity-40 font-mono select-none">
          <span className="text-[10px] tracking-[0.25em] text-amber-200 font-semibold uppercase">
            13°45&apos;N 100°31&apos;E
          </span>
          <span className="text-[8.5px] tracking-[0.2em] text-white/70 uppercase">
            BANGKOK // SE ASIA
          </span>
        </div>
      </div>

      {/* Right Flank: Bengaluru Vidhana Soudha Twilight Horizon - Desktop Only */}
      <div
        className="hidden lg:block absolute bottom-0 right-0 w-[50vw] max-w-[760px] h-[68vh] overflow-hidden opacity-38 pointer-events-none"
        style={{
          maskImage:
            "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.55) 45%, transparent 80%), linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.75) 50%, transparent 92%)",
          WebkitMaskImage:
            "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.55) 45%, transparent 80%), linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.75) 50%, transparent 92%)",
        }}
      >
        <Image
          src="/images/bengaluru-hero.jpg"
          alt="Bengaluru Horizon Background"
          fill
          priority
          sizes="50vw"
          className="object-cover object-bottom filter brightness-100 saturate-125 contrast-105"
        />
        {/* Cool Royal Sapphire Atmospheric Glaze */}
        <div className="absolute inset-0 bg-gradient-to-l from-cyan-600/30 via-blue-950/20 to-transparent" />
        {/* Soft Rim Light */}
        <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-cyan-400/20 to-transparent blur-md" />

        {/* Editorial Watermark */}
        <div className="absolute bottom-6 right-6 hidden sm:flex flex-col items-end gap-0.5 opacity-40 font-mono select-none">
          <span className="text-[10px] tracking-[0.25em] text-cyan-200 font-semibold uppercase">
            12°58&apos;N 77°35&apos;E
          </span>
          <span className="text-[8.5px] tracking-[0.2em] text-white/70 uppercase">
            BENGALURU // SOUTH ASIA
          </span>
        </div>
      </div>

      {/* =========================================================================
          LAYER 3: CLEAN CELESTIAL MERIDIAN ARCS & CONSTELLATION NODES (NO EXTRA LASERS)
          ========================================================================= */}
      <svg
        viewBox="0 0 1400 900"
        className="hidden lg:block absolute inset-0 w-full h-full object-cover pointer-events-none opacity-40"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="celestialMeridian" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.08" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.08" />
          </linearGradient>
        </defs>

        {/* Global Planetary Latitude / Meridian Arcs */}
        <g stroke="url(#celestialMeridian)" fill="none">
          <ellipse cx="700" cy="450" rx="660" ry="290" strokeWidth="0.8" strokeDasharray="3 6" />
          <ellipse cx="700" cy="450" rx="540" ry="210" strokeWidth="0.6" />
          <ellipse cx="700" cy="450" rx="420" ry="140" strokeWidth="0.5" strokeDasharray="4 6" />
        </g>

        {/* Subtle Coordinate Crosshairs & Nodes */}
        <g fill="#ffffff">
          <circle cx="280" cy="225" r="1.6" opacity="0.6" />
          <circle cx="1120" cy="225" r="1.6" opacity="0.6" />
          <circle cx="350" cy="450" r="1.4" opacity="0.5" />
          <circle cx="1050" cy="450" r="1.4" opacity="0.5" />
        </g>
      </svg>

      {/* =========================================================================
          LAYER 4: BOTTOM HORIZON GROUNDING VIGNETTE (MAINTAINS CARD CONTRAST)
          ========================================================================= */}
      <div
        className="absolute bottom-0 inset-x-0 h-40 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, #010410 0%, rgba(2,6,22,0.85) 45%, transparent 100%)",
        }}
      />

      {/* =========================================================================
          LAYER 5: MICRO-GRAIN FILM FINISH
          ========================================================================= */}
      <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
    </div>
  );
}
