"use client";

import React from "react";
import Image from "next/image";

/**
 * CityCard Component
 * Ultra-luxury destination card engineered for high readability and flawless layout.
 * - Dedicated header with summit branding and status badge
 * - Architectural photo window with Ken Burns zoom
 * - Spacious editorial city title
 * - Full-width tactile glass CTA button with guaranteed unclipped arrow & light-sweep shimmer
 */
export default function CityCard({
  city,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  className = "",
}) {
  const isBangkok = city.id === "bangkok";

  return (
    <article
      aria-label={`${city.heroCity} Summit Destination Card`}
      className={`relative w-full max-w-[370px] sm:max-w-[380px] lg:max-w-[380px] xl:max-w-[370px] mx-auto rounded-3xl p-4.5 sm:p-5 flex flex-col gap-3.5 select-none backdrop-blur-2xl border border-white/12 bg-[#040922]/90 shadow-[0_24px_55px_rgba(0,0,0,0.85)] ${className}`}
    >
      {/* =========================================================================
          TOP: Summit Identity, Year Tag & Status Indicator
          ========================================================================= */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between gap-2">
          {/* Logo Brand Lockup */}
          {isBangkok ? (
            <div className="flex items-center gap-2 min-w-0">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-white drop-shadow-sm">
                {city.brand.lead}
                <span className="italic font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400 ml-0.5">
                  {city.brand.accent}
                </span>
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold tracking-wider text-white bg-gradient-to-r from-pink-600 to-indigo-600 shadow-[0_0_10px_rgba(236,72,153,0.4)] border border-pink-400/30">
                {city.edition}
              </span>
            </div>
          ) : (
            <div className="flex items-center gap-1.5 min-w-0">
              <div className="flex items-center">
                <span className="text-lg sm:text-xl font-black tracking-tight text-white drop-shadow-sm">
                  {city.brand.lead}
                </span>
                <span
                  aria-hidden="true"
                  className="inline-flex items-center justify-center w-4 h-4 mx-0.5 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 text-white shadow-[0_0_8px_rgba(6,182,212,0.5)]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-2.5 h-2.5 animate-spin-veryslow"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    <path d="M2 12h20" />
                  </svg>
                </span>
                <span className="text-lg sm:text-xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-red-400 ml-0.5">
                  {city.brand.accent}
                </span>
                <sup className="text-[7px] text-pink-300 font-bold ml-0.5 -top-1.5">
                  {city.brand.trademark}
                </sup>
              </div>
              <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[9.5px] font-bold tracking-wider text-white bg-gradient-to-r from-blue-600 to-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.4)] border border-cyan-400/30">
                {city.edition}
              </span>
            </div>
          )}

          {/* Active Status Badge */}
          <span
            className={`shrink-0 flex items-center gap-1.5 text-[9px] sm:text-[9.5px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full backdrop-blur-sm border ${
              isBangkok
                ? "text-amber-300 bg-amber-500/12 border-amber-500/35"
                : "text-cyan-300 bg-cyan-500/12 border-cyan-500/35"
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                isBangkok ? "bg-amber-400" : "bg-cyan-400"
              } animate-pulse`}
            />
            {city.meta.city}
          </span>
        </div>

        {/* Summit Subtitle & Colorful High-Visibility Dates */}
        <div className="flex items-center justify-between gap-2 pt-0.5">
          <span
            className={`font-black tracking-[0.16em] uppercase text-[11px] sm:text-xs ${
              isBangkok ? "text-amber-100" : "text-cyan-100"
            }`}
          >
            {city.brand.title}
          </span>
          <span
            className={`shrink-0 tracking-wider font-mono text-[11px] font-extrabold px-2.5 py-1 rounded-lg border shadow-sm ${
              isBangkok
                ? "bg-gradient-to-r from-amber-500/25 via-orange-500/20 to-rose-500/25 border-amber-400/60 text-amber-200 shadow-[0_0_12px_rgba(251,146,60,0.35)]"
                : "bg-gradient-to-r from-blue-600/30 via-cyan-500/25 to-teal-500/25 border-cyan-400/60 text-cyan-200 shadow-[0_0_12px_rgba(6,182,212,0.35)]"
            }`}
          >
            {city.meta.dates}
          </span>
        </div>
      </div>

      {/* =========================================================================
          CENTER: Generous Architectural Photographic Window
          ========================================================================= */}
      <div className="group/window relative w-full h-36 sm:h-40 lg:h-40 rounded-2xl overflow-hidden border border-white/15 bg-[#020617] shadow-inner flex items-center justify-center">
        <Image
          src={city.image}
          alt={city.alt}
          fill
          sizes="(max-width: 768px) 100vw, 380px"
          className="object-cover object-center pointer-events-none transition-transform duration-700 group-hover/window:scale-105"
        />

        {/* Subtle bottom atmospheric vignette */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#020514]/40 via-transparent to-transparent pointer-events-none"
        />

        {/* Ambient Color Atmosphere Overlay */}
        <div
          aria-hidden="true"
          className={`absolute inset-0 pointer-events-none mix-blend-screen opacity-40 ${
            isBangkok
              ? "bg-gradient-to-tr from-amber-600/25 via-rose-500/10 to-transparent"
              : "bg-gradient-to-tr from-cyan-600/25 via-blue-600/10 to-transparent"
          }`}
        />

        {/* Recessed glass rim light */}
        <div
          aria-hidden="true"
          className="absolute inset-0 ring-1 ring-inset ring-white/12 rounded-2xl pointer-events-none"
        />
      </div>

      {/* =========================================================================
          BOTTOM: Editorial City Heading & Full-Width Guaranteed-Arrow CTA Button
          ========================================================================= */}
      <div className="flex flex-col gap-2.5 pt-0.5">
        {/* City Heading Row with Country Tag */}
        <div className="flex items-baseline justify-between px-0.5">
          <h3 className="text-2xl sm:text-[1.7rem] font-black uppercase tracking-tight leading-none text-white drop-shadow-md">
            {city.heroCity}
          </h3>
          <span className="text-[10.5px] font-bold tracking-[0.2em] text-white/50 uppercase font-mono">
            {isBangkok ? "THAILAND" : "INDIA"}
          </span>
        </div>

        {/* Full-Width Luxury CTA Button with Unclipped Arrow & Shimmer */}
        <a
          href={city.cta.href}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          aria-label={city.cta.ariaLabel}
          className={`group/btn relative w-full flex items-center justify-between px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl text-xs font-bold tracking-wider uppercase text-white transition-all duration-300 backdrop-blur-md overflow-hidden border shadow-md shrink-0 whitespace-nowrap ${
            isBangkok
              ? "bg-[#0b0e20]/90 hover:bg-amber-600/25 border-white/20 hover:border-amber-400/80 hover:shadow-[0_0_24px_rgba(251,146,60,0.4)]"
              : "bg-[#071026]/90 hover:bg-cyan-600/25 border-white/20 hover:border-cyan-400/80 hover:shadow-[0_0_24px_rgba(6,182,212,0.4)]"
          } hover:-translate-y-0.5 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400`}
        >
          {/* Animated Light-Sweep Shimmer Sheen */}
          <span
            aria-hidden="true"
            className="absolute inset-0 w-full h-full -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none"
          />

          <span className="relative z-10">{city.cta.label}</span>

          {/* Guaranteed Unclipped Circular Arrow Badge */}
          <span className="relative z-10 flex items-center justify-center w-6 h-6 rounded-full bg-white/10 group-hover/btn:bg-white/25 transition-all duration-300 shrink-0 ml-2">
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-300 transform group-hover/btn:translate-x-1 text-sm font-bold leading-none text-cyan-200"
            >
              →
            </span>
          </span>
        </a>
      </div>
    </article>
  );
}
