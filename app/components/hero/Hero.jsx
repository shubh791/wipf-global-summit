"use client";

import React, { useState, useEffect, useCallback } from "react";
import ForumHeader from "./ForumHeader";
import BackgroundAtmosphere from "./BackgroundAtmosphere";
import GlobalNetworkCanvas from "./GlobalNetworkCanvas";
import CityCard from "./CityCard";
import {
  UpperLeftTelemetry,
  LowerRightTelemetry,
  MobileTelemetryStrip,
} from "./SummitTelemetry";
import { summitData } from "./heroData";

/**
 * Hero Component
 * Single viewport, luxury editorial launch surface for the World Intellectual Property Forum.
 * Engineered with:
 * - 4-corner balanced composition framing the central 3D Holographic Globe
 * - Upper-Left: Global Participation Telemetry (120+ Nations, 6,000+ Delegates)
 * - Lower-Left: Bangkok AIPx Summit Card with full-width unclipped CTA
 * - Upper-Right: Bengaluru Indo Global Summit Card with full-width unclipped CTA
 * - Lower-Right: Economic Scale Telemetry ($4.2T Ecosystem, 450+ Keynotes)
 * - Active animated laser connection paths linking cards directly to globe beacons
 * - Multi-tier mouse parallax
 */
export default function Hero() {
  const [hoveredCity, setHoveredCity] = useState(null); // 'bangkok' | 'bengaluru' | 'globe' | null
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Monitor prefers-reduced-motion user settings
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const listener = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  // Subtle desktop mouse parallax (max 8–10px)
  const handleMouseMove = useCallback(
    (e) => {
      if (prefersReducedMotion || window.innerWidth < 1024) return;
      const { innerWidth, innerHeight } = window;
      const xPercent = (e.clientX / innerWidth - 0.5) * 16;
      const yPercent = (e.clientY / innerHeight - 0.5) * 12;
      setMouseOffset({ x: xPercent, y: yPercent });
    },
    [prefersReducedMotion]
  );

  const isBangkok = hoveredCity === "bangkok";
  const isBengaluru = hoveredCity === "bengaluru";

  return (
    <section
      aria-label="World Intellectual Property Forum 2026-2027 Global Summits"
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-[100svh] bg-[#02040a] text-white overflow-x-hidden overflow-y-auto lg:overflow-hidden select-none flex flex-col justify-between"
    >
      {/* Layer 1: Atmospheric Background with blended city skylines, nebula auras & fiber streams */}
      <BackgroundAtmosphere parallaxOffset={mouseOffset} />

      {/* Layer 2: Authoritative Top WIPF Identity */}
      <div
        className="w-full shrink-0 relative z-10"
        style={{
          transform: prefersReducedMotion
            ? "none"
            : `translate3d(${mouseOffset.x * 0.15}px, ${mouseOffset.y * 0.15}px, 0)`,
        }}
      >
        <ForumHeader />
      </div>

      {/* =========================================================================
          DESKTOP VIEWPORT (xl: 1280px+): Balanced 4-Corner Spatial Composition
          ========================================================================= */}
      <div className="hidden xl:flex relative z-10 flex-1 w-full max-w-[1520px] mx-auto items-center justify-center px-6 lg:px-8 xl:px-12 py-2">
        {/* =========================================================================
            ACTIVE CONNECTOR LINES: Optical Data Beams Linking Cards to Globe Beacons
            ========================================================================= */}
        <svg
          viewBox="0 0 1000 1000"
          className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-15"
          preserveAspectRatio="none"
        >
          <defs>
            {/* Bangkok Connector Gradient */}
            <linearGradient id="bangkokLaserGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.85" />
              <stop offset="60%" stopColor="#f43f5e" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.95" />
            </linearGradient>

            {/* Bengaluru Connector Gradient */}
            <linearGradient id="bengaluruLaserGrad" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.85" />
              <stop offset="60%" stopColor="#3b82f6" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.95" />
            </linearGradient>

            {/* Connector Beam Glow Filter */}
            <filter id="laserLineGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* 1. BANGKOK CONNECTOR LINE: Sweeps along Southern Orbital Route Directly into Bangkok Beacon */}
          {/* Layer A: Ambient Glow Aura */}
          <path
            d="M 265,580 C 310,700 440,730 520,640 C 550,600 561,530 561,487"
            fill="none"
            stroke="url(#bangkokLaserGrad)"
            strokeWidth="3.5"
            filter="url(#laserLineGlow)"
            className="transition-all duration-500"
            opacity={isBangkok ? "0.45" : "0.22"}
          />
          {/* Layer B: Luminous Optical Core */}
          <path
            d="M 265,580 C 310,700 440,730 520,640 C 550,600 561,530 561,487"
            fill="none"
            stroke="url(#bangkokLaserGrad)"
            strokeWidth={isBangkok ? "2.2" : "1.4"}
            className="transition-all duration-500"
            opacity={isBangkok ? "1" : "0.75"}
          />
          {/* Layer C: Fine Internal Carrier Filament */}
          <path
            d="M 265,580 C 310,700 440,730 520,640 C 550,600 561,530 561,487"
            fill="none"
            stroke="#ffffff"
            strokeWidth="0.6"
            strokeDasharray="4 6"
            opacity={isBangkok ? "0.95" : "0.55"}
          />
          {/* Anchor Node at Bangkok Card */}
          <circle cx="265" cy="580" r="3.5" fill="none" stroke="#f59e0b" strokeWidth="1" opacity="0.8" />
          <circle cx="265" cy="580" r="1.6" fill="#ffffff" filter="url(#laserLineGlow)" />
          {/* Traveling Photon Signal */}
          <circle r="2.8" fill="#ffffff" filter="url(#laserLineGlow)">
            <animateMotion
              path="M 265,580 C 310,700 440,730 520,640 C 550,600 561,530 561,487"
              dur="2.8s"
              repeatCount="indefinite"
            />
          </circle>

          {/* 2. BENGALURU CONNECTOR LINE: Sweeps along Northern Orbital Route Directly into Bengaluru Beacon */}
          {/* Layer A: Ambient Glow Aura */}
          <path
            d="M 735,350 C 690,200 560,170 480,260 C 450,300 492,410 492,464"
            fill="none"
            stroke="url(#bengaluruLaserGrad)"
            strokeWidth="3.5"
            filter="url(#laserLineGlow)"
            className="transition-all duration-500"
            opacity={isBengaluru ? "0.45" : "0.22"}
          />
          {/* Layer B: Luminous Optical Core */}
          <path
            d="M 735,350 C 690,200 560,170 480,260 C 450,300 492,410 492,464"
            fill="none"
            stroke="url(#bengaluruLaserGrad)"
            strokeWidth={isBengaluru ? "2.2" : "1.4"}
            className="transition-all duration-500"
            opacity={isBengaluru ? "1" : "0.75"}
          />
          {/* Layer C: Fine Internal Carrier Filament */}
          <path
            d="M 735,350 C 690,200 560,170 480,260 C 450,300 492,410 492,464"
            fill="none"
            stroke="#ffffff"
            strokeWidth="0.6"
            strokeDasharray="4 6"
            opacity={isBengaluru ? "0.95" : "0.55"}
          />
          {/* Anchor Node at Bengaluru Card */}
          <circle cx="735" cy="350" r="3.5" fill="none" stroke="#06b6d4" strokeWidth="1" opacity="0.8" />
          <circle cx="735" cy="350" r="1.6" fill="#ffffff" filter="url(#laserLineGlow)" />
          {/* Traveling Photon Signal */}
          <circle r="2.8" fill="#ffffff" filter="url(#laserLineGlow)">
            <animateMotion
              path="M 735,350 C 690,200 560,170 480,260 C 450,300 492,410 492,464"
              dur="2.8s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>

        {/* =========================================================================
            UPPER-LEFT OPEN SPACE: Global Participation Telemetry Capsule
            ========================================================================= */}
        <div
          className="absolute left-4 xl:left-8 2xl:left-12 top-20 xl:top-24 z-20 animate-fade-in"
          style={{
            transform: prefersReducedMotion
              ? "none"
              : `translate3d(${mouseOffset.x * 0.25}px, ${mouseOffset.y * 0.25}px, 0)`,
          }}
        >
          <UpperLeftTelemetry />
        </div>

        {/* =========================================================================
            CENTER: 8K 3D Holographic Globe Centerpiece with Guaranteed Spatial Gap
            ========================================================================= */}
        <div
          className="relative z-10 transition-transform duration-700 ease-out"
          style={{
            transform: prefersReducedMotion
              ? "none"
              : `translate3d(${mouseOffset.x * 0.3}px, ${mouseOffset.y * 0.3}px, 0)`,
          }}
        >
          <GlobalNetworkCanvas
            hoveredCity={hoveredCity}
            onGlobeHover={(active) => setHoveredCity(active ? "globe" : null)}
          />
        </div>

        {/* =========================================================================
            LOWER-LEFT: Floating Destination Card — BANGKOK
            ========================================================================= */}
        <div
          className="absolute left-4 xl:left-8 2xl:left-12 bottom-4 xl:bottom-6 z-20 animate-card-reveal-left"
          style={{
            transform: prefersReducedMotion
              ? "none"
              : `translate3d(${mouseOffset.x * 0.5}px, ${mouseOffset.y * 0.5}px, 0)`,
            transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <CityCard
            city={summitData.bangkok}
            isHovered={hoveredCity === "bangkok"}
            onMouseEnter={() => setHoveredCity("bangkok")}
            onMouseLeave={() => setHoveredCity(null)}
          />
        </div>

        {/* =========================================================================
            UPPER-RIGHT: Floating Destination Card — BENGALURU
            ========================================================================= */}
        <div
          className="absolute right-4 xl:right-8 2xl:right-12 top-4 xl:top-6 z-20 animate-card-reveal-right"
          style={{
            transform: prefersReducedMotion
              ? "none"
              : `translate3d(${mouseOffset.x * 0.5}px, ${mouseOffset.y * 0.5}px, 0)`,
            transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <CityCard
            city={summitData.bengaluru}
            isHovered={hoveredCity === "bengaluru"}
            onMouseEnter={() => setHoveredCity("bengaluru")}
            onMouseLeave={() => setHoveredCity(null)}
          />
        </div>

        {/* =========================================================================
            LOWER-RIGHT OPEN SPACE: Economic Scale Telemetry Capsule
            ========================================================================= */}
        <div
          className="absolute right-4 xl:right-8 2xl:left-auto 2xl:right-12 bottom-12 xl:bottom-16 z-20 animate-fade-in"
          style={{
            transform: prefersReducedMotion
              ? "none"
              : `translate3d(${mouseOffset.x * 0.25}px, ${mouseOffset.y * 0.25}px, 0)`,
          }}
        >
          <LowerRightTelemetry />
        </div>
      </div>

      {/* =========================================================================
          RESPONSIVE TABLET & MOBILE VIEWPORT (< 1280px / Tablets & Mobile Phones)
          ========================================================================= */}
      <div className="flex xl:hidden relative z-10 flex-col w-full min-h-[100svh] px-4 sm:px-6 md:px-8 pt-2 pb-12 gap-5 sm:gap-6 items-center justify-start">
        {/* Metric Badges Strip directly beneath header */}
        <div className="w-full max-w-[370px] sm:max-w-[760px] md:max-w-[800px] lg:max-w-[840px] z-20 flex justify-center">
          <MobileTelemetryStrip />
        </div>

        {/* Central Feature: Responsive 3D Globe Visualization */}
        <div className="relative z-10 my-1 sm:my-2 flex justify-center w-full">
          <GlobalNetworkCanvas hoveredCity={null} onGlobeHover={() => {}} />
        </div>

        {/* Dual Destination Cards Container:
            - Mobile (< 640px): 1-column stack, centered with mx-auto
            - Tablet (640px - 1279px): 2-column side-by-side grid, balanced & symmetrical */}
        <div className="w-full max-w-[370px] sm:max-w-[760px] md:max-w-[800px] lg:max-w-[840px] z-20 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8 w-full items-stretch justify-items-center">
            {/* Bangkok Destination Card */}
            <div className="w-full flex justify-center">
              <CityCard
                city={summitData.bangkok}
                isHovered={false}
                onMouseEnter={() => {}}
                onMouseLeave={() => {}}
              />
            </div>

            {/* Bengaluru Destination Card */}
            <div className="w-full flex justify-center">
              <CityCard
                city={summitData.bengaluru}
                isHovered={false}
                onMouseEnter={() => {}}
                onMouseLeave={() => {}}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
