import React from "react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "404: Sector Not Found | World Intellectual Property Forum",
  description:
    "The requested summit page or sector does not exist in the World Intellectual Property Forum directory.",
};

/**
 * NotFound Component
 * Ultra-luxury cinematic 404 page for World Intellectual Property Forum.
 * Engineered with:
 * - Holographic cosmic backdrop with cyan/sapphire celestial nebula
 * - Massive iridescent 404 typography with tech radar coordinates
 * - Tactile glass CTA button returning visitors seamlessly to the main launchpad
 * - Direct quick-jump portals to both active global summits (Bangkok & Bengaluru)
 */
export default function NotFound() {
  return (
    <div
      aria-label="404 — Page Not Found"
      className="relative min-h-[100svh] w-full bg-[#02040a] text-white flex flex-col justify-between items-center select-none overflow-hidden px-4 py-8 sm:py-10"
      style={{
        background:
          "radial-gradient(ellipse 95% 75% at 50% 35%, #05143a 0%, #030a24 45%, #010410 100%)",
      }}
    >
      {/* Dynamic Ambient Celestial Glow Auras */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[550px] sm:h-[750px] rounded-full blur-[100px] pointer-events-none opacity-40 bg-gradient-to-tr from-cyan-500/25 via-blue-600/20 to-indigo-500/15"
      />

      {/* Top Brand Identity Lockup */}
      <header className="relative z-10 flex items-center gap-3 py-2">
        <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-amber-400/40 p-0.5 bg-black/40 flex items-center justify-center shadow-[0_0_15px_rgba(251,191,36,0.25)]">
          <Image
            src="/favicon.ico"
            alt="World Intellectual Property Forum"
            width={32}
            height={32}
            className="rounded-full object-contain"
            priority
          />
        </div>
        <div className="flex flex-col">
          <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-white">
            World Intellectual Property Forum
          </span>
          <span className="text-[10px] font-mono tracking-widest text-cyan-300/80 uppercase">
            STATUS 404 // ORBITAL SECTOR LOST
          </span>
        </div>
      </header>

      {/* Central 404 Holographic Visual Stage */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center max-w-xl mx-auto my-auto gap-6 sm:gap-7">
        {/* Giant Iridescent 404 Display */}
        <div className="relative flex items-center justify-center">
          <div
            aria-hidden="true"
            className="absolute -inset-4 sm:-inset-6 rounded-full border border-cyan-400/20 border-dashed animate-spin-slow pointer-events-none"
          />
          <h1 className="text-8xl sm:text-[11rem] font-black tracking-tighter leading-none select-none text-transparent bg-clip-text bg-gradient-to-b from-white via-cyan-100 to-cyan-500/20 drop-shadow-[0_0_40px_rgba(6,182,212,0.35)] font-mono">
            404
          </h1>
        </div>

        {/* Editorial Notice */}
        <div className="flex flex-col items-center gap-2 px-2">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-rose-500/30 bg-rose-500/10 text-rose-300 text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse" />
            <span>TRAJECTORY OUT OF BOUNDS</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mt-1">
            Orbital Sector Not Found
          </h2>

          <p className="text-xs sm:text-sm text-white/65 max-w-md leading-relaxed">
            The requested summit frequency or sector does not exist within the World Intellectual Property Forum directory.
          </p>
        </div>

        {/* Primary Tactile Glass Return CTA */}
        <Link
          href="/"
          className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl text-xs sm:text-sm font-bold tracking-wider uppercase text-white bg-gradient-to-r from-cyan-600/30 via-blue-600/30 to-indigo-600/30 hover:from-cyan-500/40 hover:to-blue-500/40 border border-cyan-400/50 hover:border-cyan-300 shadow-[0_0_25px_rgba(6,182,212,0.3)] hover:shadow-[0_0_35px_rgba(6,182,212,0.5)] transition-all duration-300 backdrop-blur-md overflow-hidden active:scale-95"
        >
          {/* Animated Light-Sweep Shimmer */}
          <span
            aria-hidden="true"
            className="absolute inset-0 w-full h-full -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none"
          />

          <span className="relative z-10 flex items-center gap-2.5">
            <span className="text-base font-bold text-cyan-200 transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
            <span>Return to WIPF Launchpad</span>
          </span>
        </Link>

        {/* Secondary Direct Summit Quick-Links */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <a
            href="https://aipxglobal.com/"
            className="w-full sm:w-auto flex items-center justify-between gap-3 px-4 py-2.5 rounded-xl border border-white/12 bg-[#040922]/80 hover:bg-amber-600/20 hover:border-amber-400/60 transition-all text-[11px] font-bold text-white tracking-wider uppercase backdrop-blur-sm shadow-sm"
          >
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>Bangkok 2026 Summit</span>
            </span>
            <span className="text-amber-300 font-mono text-xs">→</span>
          </a>

          <a
            href="https://www.igisummit.com/"
            className="w-full sm:w-auto flex items-center justify-between gap-3 px-4 py-2.5 rounded-xl border border-white/12 bg-[#040922]/80 hover:bg-cyan-600/20 hover:border-cyan-400/60 transition-all text-[11px] font-bold text-white tracking-wider uppercase backdrop-blur-sm shadow-sm"
          >
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>Bengaluru 2027 Summit</span>
            </span>
            <span className="text-cyan-300 font-mono text-xs">→</span>
          </a>
        </div>
      </main>

      {/* Bottom Coordinates Footer */}
      <footer className="relative z-10 w-full max-w-xl flex items-center justify-between px-4 text-[10px] font-mono tracking-widest text-white/40 uppercase">
        <span>13°45&apos;N 100°31&apos;E</span>
        <span className="text-cyan-400/60 font-semibold">• WIPF PORTAL DIRECTORY •</span>
        <span>12°58&apos;N 77°35&apos;E</span>
      </footer>
    </div>
  );
}
