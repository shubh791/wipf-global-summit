"use client";

import React from "react";

/**
 * UpperLeftTelemetry Component
 * Positioned in the upper-left open space above Bangkok Card on desktop.
 * Displays authoritative summit scale metrics and hybrid status.
 */
export function UpperLeftTelemetry() {
  return (
    <aside
      aria-label="Summit Global Delegate Scale"
      className="hidden lg:flex flex-col gap-1.5 p-3.5 sm:p-4 rounded-2xl bg-[#03091e]/75 hover:bg-[#03091e]/90 backdrop-blur-2xl border border-white/12 hover:border-white/22 shadow-[0_16px_40px_rgba(0,0,0,0.65)] transition-all duration-300 select-none max-w-[290px] xl:max-w-[310px]"
    >
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
        <span className="text-[10.5px] font-bold tracking-[0.18em] uppercase text-amber-200/90 font-mono">
          GLOBAL PARTICIPATION
        </span>
      </div>

      <div className="text-xs sm:text-[13px] font-extrabold tracking-wide text-white leading-tight">
        120+ Nations Represented
        <span className="block text-[11px] font-medium text-white/70 tracking-normal mt-0.5">
          6,000+ Global IP & Legal Delegates
        </span>
      </div>

      <div className="flex items-center gap-1.5 pt-1 border-t border-white/10 text-[9.5px] font-semibold tracking-wider uppercase text-cyan-300">
        <span className="w-1 h-1 rounded-full bg-cyan-400" />
        <span>Hybrid Accreditation Open</span>
      </div>
    </aside>
  );
}

/**
 * LowerRightTelemetry Component
 * Positioned in the lower-right open space below Bengaluru Card on desktop.
 * Displays global innovation valuation and intellectual property taxonomy.
 */
export function LowerRightTelemetry() {
  return (
    <aside
      aria-label="Global Innovation Ecosystem Metrics"
      className="hidden lg:flex flex-col gap-1.5 p-3.5 sm:p-4 rounded-2xl bg-[#03091e]/75 hover:bg-[#03091e]/90 backdrop-blur-2xl border border-white/12 hover:border-white/22 shadow-[0_16px_40px_rgba(0,0,0,0.65)] transition-all duration-300 select-none max-w-[290px] xl:max-w-[310px]"
    >
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
        <span className="text-[10.5px] font-bold tracking-[0.18em] uppercase text-cyan-200/90 font-mono">
          ECONOMIC SCALE
        </span>
      </div>

      <div className="text-xs sm:text-[13px] font-extrabold tracking-wide text-white leading-tight">
        $4.2T Innovation Ecosystem
        <span className="block text-[11px] font-medium text-white/70 tracking-normal mt-0.5">
          450+ International Keynote Speakers
        </span>
      </div>

      <div className="flex items-center gap-1.5 pt-1 border-t border-white/10 text-[9.5px] font-semibold tracking-wider uppercase text-slate-300 font-mono">
        <span>PATENTS · AI POLICY · TRADEMARKS</span>
      </div>
    </aside>
  );
}

/**
 * MobileTelemetryStrip Component
 * Sleek horizontal badge strip rendered cleanly beneath the header on mobile (< 1024px).
 */
export function MobileTelemetryStrip() {
  return (
    <div
      aria-label="Global Summit Metrics Strip"
      className="flex xl:hidden items-center justify-center gap-2 sm:gap-3 px-3.5 py-1.5 rounded-full bg-white/[0.05] backdrop-blur-md border border-white/10 text-[9.5px] sm:text-[10px] font-bold tracking-wider uppercase text-white/85 shadow-sm max-w-full overflow-x-auto select-none"
    >
      <span className="text-amber-300">✦ 120+ NATIONS</span>
      <span className="text-white/30">|</span>
      <span className="text-cyan-300">6,000+ DELEGATES</span>
      <span className="text-white/30">|</span>
      <span className="text-slate-200">$4.2T IMPACT</span>
    </div>
  );
}
