"use client";
import React from "react";
import { Radar, IconContainer } from "../ui/radar-effect";


const RADAR_DURATION = 10; // seconds — must match CSS animation duration

const getSparkleDelay = (leftPct: number, bottomPct: number): number => {
  // Origin of the radar is at (50%, 0%) from the bottom of the container.
  const dx = leftPct - 50;   // positive = right of center
  const dy = bottomPct;      // positive = above radar origin
  const angleDeg = (Math.atan2(dx, dy) * 180) / Math.PI; // range: -90 to +90
  return ((angleDeg + 90) / 180) * RADAR_DURATION;
};

const WaterfallSection = () => {
  return (
    <section className="relative w-full bg-dark-navy py-24 px-4 overflow-hidden min-h-200 flex flex-col items-center justify-center">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,var(--color-blue-shadow),transparent_70%)] pointer-events-none"></div>

      <div className="relative w-full max-w-5xl mx-auto">
        <div
          className="relative w-full overflow-hidden"
          style={{
            aspectRatio: "2 / 1",
            WebkitMaskImage:
              "radial-gradient(ellipse at bottom, black 40%, transparent 80%)",
            maskImage:
              "radial-gradient(ellipse at bottom, black 40%, transparent 80%)",
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
              background:
                "conic-gradient(from -1deg at 50% 50%, transparent 0deg, rgba(59, 130, 246, 0.4) 1deg, transparent 1.2deg)",
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
              icon={
                <img
                  src="/assets/svg/radar/status.svg"
                  alt="Status"
                  className="w-full h-full"
                />
              }
              delay={0.1}
              noContainer={true}
              showSparkle={true}
              sparkleDelay={getSparkleDelay(50, 88)}
              sparkleDuration={RADAR_DURATION}
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
              icon={
                <img
                  src="/assets/svg/radar/mail.svg"
                  alt="Mail"
                  className="w-full h-full"
                />
              }
              delay={0.2}
              noContainer={true}
              showSparkle={true}
              sparkleDelay={getSparkleDelay(70.6, 58.9)}
              sparkleDuration={RADAR_DURATION}
              popupTitle="Email Verify"
              popupDescription="Validates email addresses for accuracy and deliverability"
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
              icon={
                <img
                  src="/assets/svg/radar/globe.svg"
                  alt="Globe"
                  className="w-full h-full"
                />
              }
              delay={0.3}
              noContainer={true}
              showSparkle={true}
              sparkleDelay={getSparkleDelay(73.1, 29.9)}
              sparkleDuration={RADAR_DURATION}
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
              icon={
                <img
                  src="/assets/svg/radar/library.svg"
                  alt="Library"
                  className="w-full h-full"
                />
              }
              delay={0.4}
              noContainer={true}
              showSparkle={true}
              sparkleDelay={getSparkleDelay(88, 24.7)}
              sparkleDuration={RADAR_DURATION}
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
              icon={
                <img
                  src="/assets/svg/radar/desktop.svg"
                  alt="Desktop"
                  className="w-full h-full"
                />
              }
              delay={0.5}
              noContainer={true}
              showSparkle={true}
              sparkleDelay={getSparkleDelay(50, 36)}
              sparkleDuration={RADAR_DURATION}
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
              icon={
                <img
                  src="/assets/svg/radar/people.svg"
                  alt="People"
                  className="w-full h-full"
                />
              }
              delay={0.6}
              noContainer={true}
              showSparkle={true}
              sparkleDelay={getSparkleDelay(30.7, 45.9)}
              sparkleDuration={RADAR_DURATION}
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
              icon={
                <img
                  src="/assets/svg/radar/database.svg"
                  alt="Database"
                  className="w-full h-full"
                />
              }
              delay={0.7}
              noContainer={true}
              showSparkle={true}
              sparkleDelay={getSparkleDelay(16.6, 34.1)}
              sparkleDuration={RADAR_DURATION}
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
              icon={
                <img
                  src="/assets/svg/radar/building.svg"
                  alt="Building"
                  className="w-full h-full"
                />
              }
              delay={0.8}
              noContainer={true}
              showSparkle={true}
              sparkleDelay={getSparkleDelay(28.5, 9.1)}
              sparkleDuration={RADAR_DURATION}
            />
          </div>
        </div>

        {/* Center Logo – sits at the arc origin (bottom-center) */}
        <div className="absolute bottom-[-5] left-1/2 -translate-x-1/2 translate-y-1/2 z-100">
          <img
            src="/assets/svg/waterfallSectionLogo.svg"
            alt="DoSales"
            className="w-[80px] h-[80px] md:w-20 md:h-20"
          />
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-6xl mt-20">
        <div className="px-5 py-2 bg-linear-to-r from-[#0D4763] to-[#060C12] max-w-[300px] text-white text-[16px] font-semibold rounded-full border border-[#1E3A4C] mb-10 shadow-2xl tracking-wide">
          Waterfall Enrichment
        </div>
        <h2 className="text-[48px] lg:text-6xl bg-gradient-to-r from-pure-white to-white-muted bg-clip-text text-transparent mb-4 tracking-tight leading-tight">
          Chains 10+ data providers, 85% match rates
        </h2>
        <p className="text-slate-muted text-[16px] lg:text-[16px] leading-relaxed max-w-2xl font-thin">
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
