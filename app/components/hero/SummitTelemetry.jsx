"use client";

import React from "react";

/**
 * UpperLeftTelemetry Component
 * Positioned in the upper-left open space above Bangkok Card on desktop.
 * Displays authoritative summit scale metrics and hybrid status.
 */
export function UpperLeftTelemetry() {
  const metrics = [
    { value: "150+", label: "Speakers", color: "text-amber-300" },
    { value: "25+", label: "Countries", color: "text-rose-300" },
    { value: "40+", label: "Interactive Sessions", color: "text-amber-200" },
    { value: "350+", label: "Delegates", color: "text-white" },
  ];

  return (
    <aside
      aria-label="WIPF Bangkok 2026 Summit Scale Metrics"
      className="hidden lg:flex flex-col gap-2 p-3 sm:p-3.5 rounded-2xl bg-[#03091e]/85 hover:bg-[#03091e]/95 backdrop-blur-2xl border border-white/12 hover:border-amber-400/30 shadow-[0_16px_40px_rgba(0,0,0,0.7)] transition-all duration-300 select-none max-w-[290px] xl:max-w-[310px]"
    >
      {/* Header Lockup */}
      <div className="flex items-center justify-between pb-1.5 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_#f59e0b]" />
          <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-amber-200 font-mono">
            WIPF Bangkok 2026
          </span>
        </div>
        <span className="text-[8.5px] font-bold tracking-wider px-1.5 py-0.5 rounded bg-amber-500/15 border border-amber-400/30 text-amber-300 uppercase">
          DEC 2026
        </span>
      </div>

      {/* Structured 2x2 Metric Grid */}
      <div className="grid grid-cols-2 gap-1.5">
        {metrics.map((m, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-center min-h-[46px] px-2.5 py-1.5 rounded-xl bg-white/[0.035] hover:bg-white/[0.07] border border-white/10 transition-colors duration-200"
          >
            <span className={`text-xs sm:text-[13px] font-black tracking-tight font-mono ${m.color}`}>
              {m.value}
            </span>
            <span className="text-[9px] font-semibold tracking-wider text-slate-300 uppercase leading-tight mt-0.5">
              {m.label}
            </span>
          </div>
        ))}
      </div>
    </aside>
  );
}

/**
 * LowerRightTelemetry Component
 * Positioned in the lower-right open space below Bengaluru Card on desktop.
 * Displays official WIPF Bengaluru 2027 summit scale metrics.
 */
export function LowerRightTelemetry() {
  const metrics = [
    { value: "180+", label: "Speakers", color: "text-cyan-300" },
    { value: "20+", label: "Countries", color: "text-blue-300" },
    { value: "50+", label: "Interactive Sessions", color: "text-cyan-200" },
    { value: "500+", label: "Delegates", color: "text-white" },
  ];

  return (
    <aside
      aria-label="WIPF Bengaluru 2027 Summit Scale Metrics"
      className="hidden lg:flex flex-col gap-2 p-3 sm:p-3.5 rounded-2xl bg-[#03091e]/85 hover:bg-[#03091e]/95 backdrop-blur-2xl border border-white/12 hover:border-cyan-400/30 shadow-[0_16px_40px_rgba(0,0,0,0.7)] transition-all duration-300 select-none max-w-[290px] xl:max-w-[310px]"
    >
      {/* Header Lockup */}
      <div className="flex items-center justify-between pb-1.5 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#06b6d4]" />
          <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-cyan-200 font-mono">
            WIPF Bengaluru 2027
          </span>
        </div>
        <span className="text-[8.5px] font-bold tracking-wider px-1.5 py-0.5 rounded bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 uppercase">
          JAN 2027
        </span>
      </div>

      {/* Structured 2x2 Metric Grid */}
      <div className="grid grid-cols-2 gap-1.5">
        {metrics.map((m, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-center min-h-[46px] px-2.5 py-1.5 rounded-xl bg-white/[0.035] hover:bg-white/[0.07] border border-white/10 transition-colors duration-200"
          >
            <span className={`text-xs sm:text-[13px] font-black tracking-tight font-mono ${m.color}`}>
              {m.value}
            </span>
            <span className="text-[9px] font-semibold tracking-wider text-slate-300 uppercase leading-tight mt-0.5">
              {m.label}
            </span>
          </div>
        ))}
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
      className="flex xl:hidden items-center justify-center gap-2 sm:gap-3 px-3.5 py-1.5 rounded-full bg-white/[0.05] backdrop-blur-md border border-white/10 text-[9px] sm:text-[10px] font-bold tracking-wider uppercase text-white/85 shadow-sm max-w-full overflow-x-auto select-none"
    >
      <span className="text-amber-300">✦ 330+ SPEAKERS</span>
      <span className="text-white/30">|</span>
      <span className="text-cyan-300">90+ SESSIONS</span>
      <span className="text-white/30">|</span>
      <span className="text-rose-300">45+ COUNTRIES</span>
      <span className="text-white/30">|</span>
      <span className="text-slate-200">850+ DELEGATES</span>
    </div>
  );
}
