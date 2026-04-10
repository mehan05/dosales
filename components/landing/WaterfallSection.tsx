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
    <section id="waterfall-section" className="relative w-full bg-dark-navy py-16 md:py-34 px-4 overflow-hidden min-h-[500px] md:min-h-200 flex flex-col items-center justify-center ">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,var(--color-blue-shadow),transparent_70%)] pointer-events-none"></div>

      <div className="relative w-full max-w-5xl mx-auto">
        {/* Background & Radar Layer - Needs overflow-hidden for the sweep line clipping */}
        <div className="absolute inset-0 overflow-hidden z-0" style={{ aspectRatio: "2 / 1" }}>
          {/* Masked Background Layer */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              WebkitMaskImage: "radial-gradient(ellipse at bottom, black 40%, transparent 80%)",
              maskImage: "radial-gradient(ellipse at bottom, black 40%, transparent 80%)",
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
              className="animate-radar-rotate absolute top-full left-1/2 w-[200%] aspect-square z-20"
              style={{
                background:
                  "conic-gradient(from -1deg at 50% 50%, transparent 0deg, var(--color-radar-sweep) 1deg, transparent 1.2deg)",
              }}
            />

            {/* Radar Background – full SVG circle clipped to top semicircle */}
            <img
              src="/assets/svg/radarbg.svg"
              alt="Radar Background"
              className="hidden xs:block absolute w-full top-0 left-0 z-0"
              style={{ height: "200%" }}
            />
            <img
              src="/assets/svg/radarbgMobile.svg"
              alt="Radar Background Mobile"
              className="block xs:hidden absolute w-full top-0 left-0 z-0"
              style={{ height: "200%" }}
            />
          </div>
        </div>

        {/* Interactive Layer - Needs overflow-visible for popups/tooltips */}
        <div className="relative w-full overflow-visible z-10" style={{ aspectRatio: "2 / 1" }}>
          {/* Vertical Guide & Intersection Dots */}
          <div className="absolute left-1/2 bottom-0 w-px h-full border-l border-dashed border-blue-500/20 pointer-events-none z-5" style={{ transform: "translateX(-50%)" }}></div>
          {[22, 45, 68, 91].map((bottomPct) => (
            <div
              key={bottomPct}
              className="absolute left-1/2 w-1.5 h-1.5 rounded-full border border-blue-500/30 bg-dark-navy/80 pointer-events-none z-10"
              style={{
                bottom: `${bottomPct}%`,
                transform: "translate(-50%, 50%)",
              }}
            />
          ))}

          {/* Signal (Antenna) - Arc 4 */}
          <div
            className="absolute z-10"
            style={{
              left: "44%",
              bottom: "92%",
              transform: "translate(-50%, 50%)",
            }}
          >
            <IconContainer
              icon={
                <img
                  src="/assets/svg/radar/network.svg"
                  alt="Signal"
                  className="w-full h-full"
                />
              }
              delay={0.1}
              noContainer={true}
              showSparkle={true}
              sparkleDelay={getSparkleDelay(44, 92)}
              sparkleDuration={RADAR_DURATION}
            />
          </div>

          {/* Mail (Envelope) - Arc 4 */}
          <div
            className="absolute z-10 "
            style={{
              left: "77%",
              bottom: "60%",
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
              sparkleDelay={getSparkleDelay(77, 70)}
              sparkleDuration={RADAR_DURATION}
              popupTitle="Email Verify"
              popupDescription="Validates email addresses for accuracy and deliverability"
              popupAlign="left"
            />
          </div>

          {/* Building (Office) - Arc 2 */}
          <div
            className="absolute z-10 "
            style={{
              left: "32%",
              bottom: "22%",
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
              delay={0.3}
              noContainer={true}
              showSparkle={true}
              sparkleDelay={getSparkleDelay(32, 22)}
              sparkleDuration={RADAR_DURATION}
              popupAlign="right"
            />
          </div>

          {/* Bank (Library) - Arc 3 */}
          <div
            className="absolute z-10 "
            style={{
              left: "81%",
              bottom: "32%",
              transform: "translate(-50%, 50%)",
            }}
          >
            <IconContainer
              icon={
                <img
                  src="/assets/svg/radar/house.svg"
                  alt="Bank"
                  className="w-full h-full"
                />
              }
              delay={0.4}
              noContainer={true}
              showSparkle={true}
              sparkleDelay={getSparkleDelay(81, 32)}
              sparkleDuration={RADAR_DURATION}
              popupAlign="left"
            />
          </div>

          {/* Monitor (Shield) - Arc 2 */}
          <div
            className="absolute z-10"
            style={{
              left: "49%",
              bottom: "40%",
              transform: "translate(-50%, 50%)",
            }}
          >
            <IconContainer
              icon={
                <img
                  src="/assets/svg/radar/display.svg"
                  alt="Monitor"
                  className="w-full h-full"
                />
              }
              delay={0.5}
              noContainer={true}
              showSparkle={true}
              sparkleDelay={getSparkleDelay(49, 40)}
              sparkleDuration={RADAR_DURATION}
            />
          </div>

          {/* People (Group) - Arc 3 */}
          <div
            className="absolute z-10"
            style={{
              left: "26%",
              bottom: "54%",
              transform: "translate(-50%, 50%)",
              
            }}
          >
            <IconContainer
              icon={
                <img
                  src="/assets/svg/radar/people.svg"
                  alt="People"
                  className="w-full h-full "
                />
              }
              delay={0.6}
              noContainer={true}
              showSparkle={true}
              sparkleDelay={getSparkleDelay(26, 54)}
              sparkleDuration={RADAR_DURATION}
              popupAlign="right"
            />
          </div>

          {/* Database (Cylinder) - Arc 4 */}
          <div
            className="absolute z-10 "
            style={{
              left: "12%",
              bottom: "34%",
              transform: "translate(-50%, 50%)",
            }}
          >
            <IconContainer
              icon={
                <img
                  src="/assets/svg/radar/database.svg"
                  alt="Database"
                  className="w-full h-full "
                />
              }
              delay={0.7}
              noContainer={true}
              showSparkle={true}
              sparkleDelay={getSparkleDelay(12, 34)}
              sparkleDuration={RADAR_DURATION}
              popupAlign="right"
            />
          </div>

          {/* Globe (World) - Arc 2 */}
          <div
            className="absolute z-10 "
            style={{
              left: "67%",
              bottom: "42%",
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
              delay={0.8}
              noContainer={true}
              showSparkle={true}
              sparkleDelay={getSparkleDelay(67, 42)}
              sparkleDuration={RADAR_DURATION}
              popupAlign="left"
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

      <div className="relative z-10 flex flex-col items-center text-center max-w-6xl mt-16 md:mt-[50px]">
        <div className="px-3 py-1 bg-linear-to-r from-banner-from to-banner-to max-w-[300px] text-white text-[16px] font-semibold rounded-full border border-banner-border mb-[16px]  shadow-2xl tracking-wide">
          Waterfall Enrichment
        </div>
        <h2 className="text-[32px] md:text-[48px] font-bold bg-gradient-to-r from-pure-white to-white-muted bg-clip-text text-transparent tracking-tight leading-[1.1] mb-6 max-w-[280px] md:max-w-none">
          Chains 10+ data providers, 85%+ match rates
        </h2>
        <p className="text-slate-muted text-[15px] md:text-[16px] leading-[1.6] max-w-2xl font-light opacity-80">
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
