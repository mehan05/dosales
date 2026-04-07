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
  HiOutlineDesktopComputer 
} from "react-icons/hi";

const WaterfallSection = () => {
  return (
    <section className="relative w-full bg-[#020617] py-24 px-4 overflow-hidden min-h-200 flex flex-col items-center justify-center">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(0,133,201,0.15),transparent_70%)] pointer-events-none"></div>

      {/* Radar and Icons Container */}
      <div className="relative w-full max-w-5xl h-125 mb-12">
        {/* Radar positioned at the bottom center to create a semi-circle effect */}
        <div className="absolute -bottom-25 left-1/2 -translate-x-1/2 w-full flex justify-center overflow-hidden h-150">
          <Radar className="absolute bottom-0 opacity-40" />
        </div>

        <div className="absolute bottom-[-12%] left-1/2 -translate-x-1/2 z-100 translate-y-1/2">
          <img src="/assets/svg/waterfallSectionLogo.svg" alt="" />
        </div>

        {/* Icons placed in a radial pattern */}
        {/* Left Side */}
        <div className="absolute bottom-[10%] left-[15%]">
          <IconContainer 
            icon={<HiDatabase className="h-6 w-6 text-bg-pale" />} 
            text="Databases" 
            delay={0.2}
          />
        </div>
        <div className="absolute bottom-[30%] left-[25%]">
            <IconContainer 
              icon={<HiUserGroup className="h-6 w-6 text-bg-pale" />} 
              text="People" 
              delay={0.4}
            />
        </div>
        <div className="absolute bottom-[15%] left-[35%]">
            <IconContainer 
              icon={<HiOfficeBuilding className="h-6 w-6 text-bg-pale" />} 
              text="Tech Firms" 
              delay={0.3}
            />
        </div>


        <div className="absolute bottom-[20%] left-[48%] -translate-x-1/2">
            <IconContainer 
              icon={<HiOutlineDesktopComputer className="h-6 w-6 text-bg-pale" />} 
              text="Web Presence" 
              delay={0.5}
            />
        </div>

        {/* Right Side */}
        <div className="absolute bottom-[40%] right-[25%]">
            <IconContainer 
              icon={<HiMail className="h-6 w-6 text-bg-pale" />} 
              text="Mail Ops" 
              delay={0.6}
            />
        </div>
        <div className="absolute bottom-[25%] right-[32%]">
            <IconContainer 
              icon={<HiGlobeAlt className="h-6 w-6 text-bg-pale" />} 
              text="Global Intel" 
              delay={0.7}
            />
        </div>
        <div className="absolute bottom-[12%] right-[18%]">
            <IconContainer 
              icon={<HiLibrary className="h-6 w-6 text-bg-pale" />} 
              text="Financials" 
              delay={0.8}
            />
        </div>

      </div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mt-24">
        <div className="px-6 py-2 bg-[linear-gradient(90deg,rgba(0,133,201,0.2)_0%,rgba(30,64,175,0.2)_100%)] text-bg-pale text-xs font-bold rounded-full border border-blue-500/30 mb-8 uppercase tracking-[0.2em] backdrop-blur-sm">
          Waterfall Enrichment
        </div>
        <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 tracking-tight leading-tight">
          Chains 10+ data providers, <span className="text-primary-blue">85%+</span> match rates
        </h2>
        <p className="text-[#94A3B8] text-lg lg:text-xl leading-relaxed max-w-2xl font-medium">
          We don't rely on a single source. DoSales waterfalls through 10+ data providers to 
          verify emails, phones, and company intel across MENA and Southeast Asia.
        </p>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-blue-500/20 to-transparent"></div>
    </section>
  );
};

export default WaterfallSection;
