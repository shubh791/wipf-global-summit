"use client";

import React from "react";

/**
 * ForumHeader Component
 * Authoritative, luxury header for the World Intellectual Property Forum.
 * Features sophisticated serif display typography, hairline rules, and smooth entrance animation.
 */
export default function ForumHeader() {
  return (
    <header
      role="banner"
      className="relative z-30 flex flex-col items-center justify-center pt-5 sm:pt-6 md:pt-7 px-4 pointer-events-auto select-none"
    >
      <div className="flex flex-col items-center text-center animate-forum-reveal">
        {/* Supporting Eyebrow */}
        <div className="flex items-center gap-2 mb-1 opacity-80">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span className="text-[9px] sm:text-[10px] font-semibold tracking-[0.28em] uppercase text-cyan-200">
            Global Intellectual Property Forum
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
        </div>

        {/* Main Forum Title: Authoritative serif display typography */}
        <h1
          className="text-sm sm:text-[15px] md:text-[17px] lg:text-[18px] font-normal uppercase tracking-[0.16em] sm:tracking-[0.2em] text-slate-100 font-serif drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
          style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
        >
          World Intellectual Property Forum
        </h1>

        {/* WIPF Subtitle flanked by hairline rules */}
        <div className="flex items-center justify-center gap-2.5 sm:gap-3.5 mt-1 sm:mt-1.5">
          {/* Left Hairline Rule */}
          <span
            aria-hidden="true"
            className="w-8 sm:w-12 md:w-16 h-[1px] bg-gradient-to-r from-transparent via-white/35 to-white/60"
          />

          <span
            className="text-[9.5px] sm:text-[10.5px] md:text-[11px] font-semibold tracking-[0.28em] uppercase text-cyan-200/95 pl-[0.28em]"
            aria-label="WIPF acronym"
          >
            W I P F
          </span>

          {/* Right Hairline Rule */}
          <span
            aria-hidden="true"
            className="w-8 sm:w-12 md:w-16 h-[1px] bg-gradient-to-l from-transparent via-white/35 to-white/60"
          />
        </div>
      </div>
    </header>
  );
}
