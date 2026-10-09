"use client";

import React from "react";
import Image from "next/image";

/**
 * ForumHeader Component
 * Authoritative, luxury brand header for the World Intellectual Property Forum.
 * Renders the official "World Forum - INTELLECTUAL PROPERTY" master brandmark
 * with dynamic celestial back-glow aura, luminous drop shadows, and responsive sizing.
 */
export default function ForumHeader() {
  return (
    <header
      role="banner"
      className="relative z-30 flex flex-col items-center justify-center pt-6 sm:pt-7 md:pt-8 xl:pt-9 px-4 pointer-events-auto select-none"
    >
      <div className="relative flex flex-col items-center text-center animate-forum-reveal group">
        {/* Ambient celestial glow aura behind the logo */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -inset-x-20 -inset-y-10 bg-gradient-to-r from-cyan-500/20 via-blue-600/25 to-pink-500/20 rounded-full blur-3xl opacity-75 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none animate-orb-glow"
        />

        {/* Master Forum Logo Lockup */}
        <h1 className="relative z-10 flex items-center justify-center m-0 p-0">
          <span className="sr-only">World Intellectual Property Forum</span>
          <Image
            src="/images/wipf-world-forum-logo.png"
            alt="World Intellectual Property Forum"
            width={874}
            height={296}
            priority
            className="w-[180px] sm:w-[220px] md:w-[260px] lg:w-[290px] xl:w-[320px] h-auto object-contain pointer-events-none transition-all duration-500 filter drop-shadow-[0_0_16px_rgba(6,182,212,0.45)] drop-shadow-[0_0_36px_rgba(59,130,246,0.25)] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] group-hover:drop-shadow-[0_0_24px_rgba(56,189,248,0.7)] group-hover:scale-[1.02]"
          />
        </h1>
      </div>
    </header>
  );
}
