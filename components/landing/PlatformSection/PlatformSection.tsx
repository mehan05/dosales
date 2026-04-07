"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi2";
import Funnel from "./Funnel";

const PlatformSection = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="relative py-32 bg-linear-to-b from-white to-blue-50/40 overflow-hidden font-sans">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto relative">
          {/* Badge */}
          <div className="px-6 py-2 bg-gradient-to-r from-[#D6EFFF] to-[#F5FBFF] text-[#006699] text-md font-medium rounded-full border-2 border-white shadow-[0_0_15px_rgba(0,102,153,0.1)] mb-10 ">
            Platform
          </div>

          {/* Headline */}
          <h1 className="text-4xl font-semibold text-[#030712] leading-[1.1] mb-8 tracking-tight">
            An Automated Funnel that turns your ICP to Booked Meetings in 3
            steps
          </h1>

          {/* Subheadline */}
          <p className="text-md text-[#4A5565] font-medium max-w-2xl mb-12 leading-relaxed">
            Define your ICP and DoSales AI handles discovery, outreach, and
            qualification automatically.
          </p>

          {/* Button */}
          <button className="bg-[#0085C9] max-w-[250px] text-white px-5 py-4 rounded-xl font-bold text-sm shadow-xl shadow-blue-600/20 transition-all active:scale-95 group flex items-center gap-2">
            Setup your Sales Engine
          
          </button>
        </div>
      </div>

      {/* Two-Column Section */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 mt-32 items-center">
        {/* Left Column: Funnel */}
        <div className="flex flex-col items-center">
          <Funnel activeStep={activeStep} onStepClick={setActiveStep} />
        </div>

        {/* Right Column: Dynamic UI Card */}
        <div className="relative group min-h-125">
          <div className="absolute -inset-4 bg-linear-to-tr from-blue-100/20 to-transparent rounded-[40px] blur-2xl group-hover:bg-blue-100/40 transition-colors" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {activeStep === 1 && (
                <Image
                  src="/assets/svg/platformSection/designAndDiscover.svg"
                  alt="Define & Discover"
                  width={598}
                  height={526}
                  className="w-full h-auto drop-shadow-xl"
                  priority
                />
              )}
              {activeStep === 2 && (
                <Image
                  src="/assets/svg/platformSection/enrich.svg"
                  alt="Enrich and Qualify"
                  width={598}
                  height={526}
                  className="w-full h-auto drop-shadow-xl"
                />
              )}
              {activeStep === 3 && (
                <Image
                  src="/assets/svg/platformSection/searchAndConvert.svg"
                  alt="Research & Convert"
                  width={598}
                  height={526}
                  className="w-full h-auto drop-shadow-xl"
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
