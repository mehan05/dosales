"use client";
import React from "react";
import { Radar, IconContainer } from "../ui/radar-effect";

const WaterfallSection = () => {
  return (
    <section className="relative w-full bg-dark-navy py-24 px-4 overflow-hidden min-h-200 flex flex-col items-center justify-center">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,var(--color-blue-shadow),transparent_70%)] pointer-events-none"></div>

      <div className="relative w-full max-w-5xl mx-auto mb-12">
        <div
          className="relative w-full overflow-hidden"
          style={{ 
            aspectRatio: "2 / 1",
            WebkitMaskImage: "radial-gradient(ellipse at bottom, black 40%, transparent 80%)",
            maskImage: "radial-gradient(ellipse at bottom, black 40%, transparent 80%)"
          }}
        >
          <style>{`
            @keyframes rotate-radar {
              from { transform: translate(-50%, -50%) rotate(-90deg); }
              to { transform: translate(-50%, -50%) rotate(90deg); }
            }
            .animate-radar-rotate {
              animation: rotate-radar 10s linear infinite;
            }
          `}</style>
          
          {/* Radar Sweep Line (180-degree semicircle sweep) */}
          <div 
            className="animate-radar-rotate absolute top-full left-1/2 w-[200%] aspect-square pointer-events-none z-20"
            style={{
              background: "conic-gradient(from -30deg at 50% 50%, transparent 0deg, rgba(59, 130, 246, 0.1) 10deg, rgba(59, 130, 246, 0.6) 25deg, rgba(59, 130, 246, 1) 30deg, transparent 30.1deg)",
              mixBlendMode: "plus-lighter"
            }}
          />

          {/* Radar Background – full SVG circle clipped to top semicircle */}
          <img
            src="/assets/svg/radarbg.svg"
            alt="Radar Background"
            className="hidden xs:block absolute w-full top-0 left-0 pointer-events-none z-0"
            style={{ height: "200%" }}
          />
          <img
            src="/assets/svg/radarbgMobile.svg"
            alt="Radar Background Mobile"
            className="block xs:hidden absolute w-full top-0 left-0 pointer-events-none z-0"
            style={{ height: "200%" }}
          />

          {/*
            Icons – perfectly synchronized with 180-degree clockwise sweep (10s period)
            Range: Left (-90°) to Right (+90°). Total = 180°.
            Exact Delays (CSS clockwise from Left):
            Building (-67.1°)  = ( (-67.1 - (-90)) / 180 ) * 10 = 1.272s
            Database (-45.6°)  = ( (-45.6 + 90) / 180 ) * 10 = 2.467s
            People (-22.8°)    = ( (-22.8 + 90) / 180 ) * 10 = 3.733s
            Antenna (0°)       = ( (0 + 90) / 180 ) * 10 = 5.0s
            Mail (+19.3°)      = ( (19.3 + 90) / 180 ) * 10 = 6.072s
            Globe (+37.7°)     = ( (37.7 + 90) / 180 ) * 10 = 7.094s
            Library (+57.0°)   = ( (57.0 + 90) / 180 ) * 10 = 8.167s
          */}

          {/* Antenna */}
          <div
            className="absolute z-10"
            style={{
              left: "50%",
              bottom: "88%",
              transform: "translate(-50%, 50%)",
            }}
          >
            <IconContainer
              icon={<img src="/assets/svg/radar/status.svg" alt="Status" className="w-full h-full" />}
              delay={0.1}
              noContainer={true}
              showSparkle={true}
              sparkleDelay={5.0}
              sparkleDuration={10}
            />
          </div>

          {/* Mail */}
          <div
            className="absolute z-10"
            style={{
              left: "70.6%",
              bottom: "58.9%",
              transform: "translate(-50%, 50%)",
            }}
          >
            <IconContainer
              icon={<img src="/assets/svg/radar/mail.svg" alt="Mail" className="w-full h-full" />}
              delay={0.2}
              noContainer={true}
              showSparkle={true}
              sparkleDelay={6.072}
              sparkleDuration={10}
            />
          </div>

          {/* Globe */}
          <div
            className="absolute z-10"
            style={{
              left: "73.1%",
              bottom: "29.9%",
              transform: "translate(-50%, 50%)",
            }}
          >
            <IconContainer
              icon={<img src="/assets/svg/radar/globe.svg" alt="Globe" className="w-full h-full" />}
              delay={0.3}
              noContainer={true}
              showSparkle={true}
              sparkleDelay={7.094}
              sparkleDuration={10}
            />
          </div>

          {/* Library */}
          <div
            className="absolute z-10"
            style={{
              left: "88%",
              bottom: "24.7%",
              transform: "translate(-50%, 50%)",
            }}
          >
            <IconContainer
              icon={<img src="/assets/svg/radar/library.svg" alt="Library" className="w-full h-full" />}
              delay={0.4}
              noContainer={true}
              showSparkle={true}
              sparkleDelay={8.167}
              sparkleDuration={10}
            />
          </div>

          {/* Desktop */}
          <div
            className="absolute z-10"
            style={{
              left: "50%",
              bottom: "36%",
              transform: "translate(-50%, 50%)",
            }}
          >
            <IconContainer
              icon={<img src="/assets/svg/radar/desktop.svg" alt="Desktop" className="w-full h-full" />}
              delay={0.5}
              noContainer={true}
              showSparkle={true}
              sparkleDelay={5.0}
              sparkleDuration={10}
            />
          </div>

          {/* People */}
          <div
            className="absolute z-10"
            style={{
              left: "30.7%",
              bottom: "45.9%",
              transform: "translate(-50%, 50%)",
            }}
          >
            <IconContainer
              icon={<img src="/assets/svg/radar/people.svg" alt="People" className="w-full h-full" />}
              delay={0.6}
              noContainer={true}
              showSparkle={true}
              sparkleDelay={3.733}
              sparkleDuration={10}
            />
          </div>

          {/* Database */}
          <div
            className="absolute z-10"
            style={{
              left: "16.6%",
              bottom: "34.1%",
              transform: "translate(-50%, 50%)",
            }}
          >
            <IconContainer
              icon={<img src="/assets/svg/radar/database.svg" alt="Database" className="w-full h-full" />}
              delay={0.7}
              noContainer={true}
              showSparkle={true}
              sparkleDelay={2.467}
              sparkleDuration={10}
            />
          </div>

          {/* Building */}
          <div
            className="absolute z-10"
            style={{
              left: "28.5%",
              bottom: "9.1%",
              transform: "translate(-50%, 50%)",
            }}
          >
            <IconContainer
              icon={<img src="/assets/svg/radar/building.svg" alt="Building" className="w-full h-full" />}
              delay={0.8}
              noContainer={true}
              showSparkle={true}
              sparkleDelay={1.272}
              sparkleDuration={10}
            />
          </div>
        </div>

        {/* Center Logo – sits at the arc origin (bottom-center) */}
        <div className="absolute bottom-[-5] left-1/2 -translate-x-1/2 translate-y-1/2 z-100">
          <img
            src="/assets/svg/waterfallSectionLogo.svg"
            alt="DoSales"
            className="w-16 h-16 md:w-20 md:h-20"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mt-24">
        <div className="px-6 py-2 bg-[linear-gradient(90deg,var(--color-blue-translucent)_0%,var(--color-indigo-translucent)_100%)] text-bg-pale text-xs font-bold rounded-full border border-blue-500/30 mb-8 uppercase tracking-[0.2em] backdrop-blur-sm">
          Waterfall Enrichment
        </div>
        <h2 className="text-4xl lg:text-6xl bg-gradient-to-r from-pure-white to-white-muted bg-clip-text text-transparent  mb-4 tracking-tight leading-tight">
          Chains 10+ data providers, 85% match rates
        </h2>
        <p className="text-slate-muted text-md lg:text-md leading-relaxed max-w-2xl font-thin">
          We don't rely on a single source. DoSales waterfalls through 10+ data
          providers to verify emails, phones, and company intel across MENA and
          Southeast Asia.
        </p>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-blue-500/20 to-transparent"></div>
    </section>
  );
};

export default WaterfallSection;
