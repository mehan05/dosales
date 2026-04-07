"use client";
import React from "react";
import { Radar, IconContainer } from "../ui/radar-effect";
import {
  HiDatabase,
  HiOfficeBuilding,
  HiUserGroup,
  HiMail,
  HiGlobeAlt,
  HiLibrary,
  HiOutlineStatusOnline,
  HiOutlineDesktopComputer,
} from "react-icons/hi";

const WaterfallSection = () => {
  return (
    <section className="relative w-full bg-[#020617] py-24 px-4 overflow-hidden min-h-200 flex flex-col items-center justify-center">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(0,133,201,0.15),transparent_70%)] pointer-events-none"></div>

      <div className="relative w-full max-w-5xl mx-auto mb-12">
        <div
          className="relative w-full overflow-hidden"
          style={{ 
            aspectRatio: "2 / 1",
            WebkitMaskImage: "radial-gradient(ellipse at bottom, black 40%, transparent 80%)",
            maskImage: "radial-gradient(ellipse at bottom, black 40%, transparent 80%)"
          }}
        >
          {/* Radar Background – full SVG circle clipped to top semicircle */}
          <img
            src="/assets/svg/radarbg.svg"
            alt="Radar Background"
            className="absolute w-full bottom-[-510]  pointer-events-none z-0"
            style={{ height: "200%" }}
          />

          {/*
            Icons – polar coords (r = 0..1 fraction of radius = half width)
            θ=90° top, θ=135° upper-left, θ=45° upper-right, etc.
            left%   = 50 + r*cos(θ_rad)*50
            bottom% = r*sin(θ_rad)*100
          */}

          {/* Antenna  θ=90°  r=0.88  → left=50%   bot=88% */}
          <div
            className="absolute z-10"
            style={{
              left: "50%",
              bottom: "88%",
              transform: "translate(-50%, 50%)",
            }}
          >
            <IconContainer
              icon={<HiOutlineStatusOnline className="h-5 w-5 text-bg-pale" />}
              delay={0.1}
            />
          </div>

          {/* Mail     θ=55°  r=0.72  → left=70.6% bot=58.9% */}
          <div
            className="absolute z-10"
            style={{
              left: "70.6%",
              bottom: "58.9%",
              transform: "translate(-50%, 50%)",
            }}
          >
            <IconContainer
              icon={<HiMail className="h-5 w-5 text-bg-pale" />}
              delay={0.2}
            />
          </div>

          {/* Globe    θ=33°  r=0.55  → left=73.1% bot=29.9% */}
          <div
            className="absolute z-10"
            style={{
              left: "73.1%",
              bottom: "29.9%",
              transform: "translate(-50%, 50%)",
            }}
          >
            <IconContainer
              icon={<HiGlobeAlt className="h-5 w-5 text-bg-pale" />}
              delay={0.3}
            />
          </div>

          {/* Library  θ=18°  r=0.80  → left=88%   bot=24.7% */}
          <div
            className="absolute z-10"
            style={{
              left: "88%",
              bottom: "24.7%",
              transform: "translate(-50%, 50%)",
            }}
          >
            <IconContainer
              icon={<HiLibrary className="h-5 w-5 text-bg-pale" />}
              delay={0.4}
            />
          </div>

          {/* Desktop  θ=90°  r=0.36  → left=50%   bot=36% */}
          <div
            className="absolute z-10"
            style={{
              left: "50%",
              bottom: "36%",
              transform: "translate(-50%, 50%)",
            }}
          >
            <IconContainer
              icon={<HiOutlineDesktopComputer className="h-5 w-5 text-bg-pale" />}
              delay={0.5}
            />
          </div>

          {/* People   θ=130° r=0.60  → left=30.7% bot=45.9% */}
          <div
            className="absolute z-10"
            style={{
              left: "30.7%",
              bottom: "45.9%",
              transform: "translate(-50%, 50%)",
            }}
          >
            <IconContainer
              icon={<HiUserGroup className="h-5 w-5 text-bg-pale" />}
              delay={0.6}
            />
          </div>

          {/* Database θ=153° r=0.75  → left=16.6% bot=34.1% */}
          <div
            className="absolute z-10"
            style={{
              left: "16.6%",
              bottom: "34.1%",
              transform: "translate(-50%, 50%)",
            }}
          >
            <IconContainer
              icon={<HiDatabase className="h-5 w-5 text-bg-pale" />}
              delay={0.7}
            />
          </div>

          {/* Building θ=168° r=0.44  → left=28.5% bot=9.1% */}
          <div
            className="absolute z-10"
            style={{
              left: "28.5%",
              bottom: "9.1%",
              transform: "translate(-50%, 50%)",
            }}
          >
            <IconContainer
              icon={<HiOfficeBuilding className="h-5 w-5 text-bg-pale" />}
              delay={0.8}
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
        <div className="px-6 py-2 bg-[linear-gradient(90deg,rgba(0,133,201,0.2)_0%,rgba(30,64,175,0.2)_100%)] text-bg-pale text-xs font-bold rounded-full border border-blue-500/30 mb-8 uppercase tracking-[0.2em] backdrop-blur-sm">
          Waterfall Enrichment
        </div>
        <h2 className="text-4xl lg:text-6xl bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFFB2] bg-clip-text text-transparent  mb-4 tracking-tight leading-tight">
          Chains 10+ data providers, 85% match rates
        </h2>
        <p className="text-[#94A3B8] text-md lg:text-md leading-relaxed max-w-2xl font-thin">
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
