import React from "react";
import Image from "next/image";

/**
 * Loading Component
 * Ultra-luxury cinematic loading surface for World Intellectual Property Forum.
 * Engineered with:
 * - Obsidian cosmic backdrop with deep sapphire celestial spotlight
 * - Concentric counter-rotating holographic tech rings with traveling photon satellites
 * - Central WIPF gold crest emblem with ambient breathing aura
 * - Precision optical laser shimmer progress bar
 * - High-altitude summit coordinate telemetry
 */
export default function Loading() {
  return (
    <div
      aria-label="Loading World Intellectual Property Forum"
      className="fixed inset-0 z-50 flex flex-col items-center justify-between min-h-[100svh] w-full bg-[#02040a] text-white select-none overflow-hidden px-4 py-8"
      style={{
        background:
          "radial-gradient(ellipse 90% 70% at 50% 45%, #05143a 0%, #030820 45%, #01030b 100%)",
      }}
    >
      {/* Background Volumetric Glows */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] sm:w-[600px] h-[420px] sm:h-[600px] rounded-full blur-[90px] pointer-events-none opacity-40 bg-gradient-to-tr from-cyan-500/25 via-blue-600/20 to-indigo-500/15 animate-orb-glow"
      />

      {/* Top Identity Tag */}
      <header className="relative z-10 flex items-center gap-2 opacity-85 tracking-widest text-[10.5px] uppercase font-mono text-cyan-300">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
        <span>WIPF // GLOBAL SUMMIT NETWORK</span>
      </header>

      {/* Central Holographic Stage */}
      <main className="relative z-10 flex flex-col items-center justify-center gap-7 my-auto">
        {/* Orbital Ring Stage */}
        <div className="relative w-44 h-44 sm:w-52 sm:h-52 flex items-center justify-center">
          {/* Outer Dashed Tech Coordinate Ring */}
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-full border border-cyan-400/30 border-dashed animate-spin-slow pointer-events-none"
          />

          {/* Counter Orbit Ring with Satellite Photon */}
          <div
            aria-hidden="true"
            className="absolute inset-3 rounded-full border border-white/15 pointer-events-none origin-center rotate-[35deg] animate-spin-veryslow"
          >
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(6,182,212,1)] animate-ping" />
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,1)]" />
          </div>

          {/* Inner Cyan Glowing Border Ring */}
          <div
            aria-hidden="true"
            className="absolute inset-7 rounded-full border border-cyan-400/40 shadow-[0_0_25px_rgba(6,182,212,0.25)] pointer-events-none"
          />

          {/* Central WIPF Luxury Gold Crest Emblem */}
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 border border-amber-400/50 bg-[#04081c] shadow-[0_0_30px_rgba(251,191,36,0.35)] flex items-center justify-center animate-orb-pulse">
            <Image
              src="/favicon.ico"
              alt="World Intellectual Property Forum"
              width={64}
              height={64}
              priority
              className="rounded-full object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
            />
          </div>
        </div>

        {/* Title & Editorial Status */}
        <div className="flex flex-col items-center text-center gap-2 max-w-sm">
          <h1 className="text-base sm:text-lg font-black uppercase tracking-[0.22em] text-white drop-shadow-md">
            World Intellectual Property Forum
          </h1>

          <div className="flex items-center gap-2 text-xs font-mono font-medium tracking-wider text-cyan-300/80">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            <span>ESTABLISHING SUMMIT TELEMETRY...</span>
          </div>
        </div>

        {/* Optical Laser Loading Progress Bar */}
        <div className="relative w-56 sm:w-64 h-[3px] bg-white/10 rounded-full overflow-hidden shadow-inner">
          <div
            className="absolute top-0 bottom-0 w-1/2 rounded-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_rgba(6,182,212,0.9)] animate-pulse"
            style={{
              animation: "laserSweep 1.6s ease-in-out infinite",
            }}
          />
        </div>
      </main>

      {/* Footer Framing Coordinates */}
      <footer className="relative z-10 w-full max-w-lg flex items-center justify-between px-4 text-[10px] font-mono tracking-widest text-white/40 uppercase">
        <span>13°45&apos;N // BANGKOK</span>
        <span className="hidden sm:inline text-cyan-400/60 font-semibold">• SECURE WIPF PROTOCOL •</span>
        <span>12°58&apos;N // BENGALURU</span>
      </footer>

      {/* Embedded High-Performance Keyframe Style for Laser Sweep */}
      <style>{`
        @keyframes laserSweep {
          0% {
            left: -40%;
          }
          100% {
            left: 100%;
          }
        }
      `}</style>
    </div>
  );
}
