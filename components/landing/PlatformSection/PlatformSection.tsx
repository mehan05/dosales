"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi2";
import Funnel from "./Funnel";

const PlatformSection = () => {
  const [activeStep, setActiveStep] = useState(1);
  const totalSteps = 3;
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

  const startInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveStep((prev) => (prev % totalSteps) + 1);
    }, 2000);
  };

  React.useEffect(() => {
    startInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleStepClick = (step: number) => {
    setActiveStep(step);
    startInterval(); // Reset timer on manual click
  };

  return (
    <section className="relative pt-16 pb-6  xs:pb-16 xs:pt-17 sm:pb-24 bg-linear-to-b from-white via-blue-50/40 to-white overflow-hidden font-sans">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 ">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto relative ">
          {/* Badge */}
          <div className="w-auto h-8 px-3.5 py-1.25 badge-gradient text-blue-deep text-sm font-medium rounded-[30px] border-[1.5px] border-white shadow-[0px_2px_4px_0px_var(--color-shadow-faint)] flex items-center justify-center gap-2.5 mb-10">

            Platform
          </div>

          {/* Headline */}
          <h1 className="text-[36px] font-semibold text-text-main leading-[1.1] mb-8 tracking-tight">
            An Automated Funnel that turns your ICP to Booked Meetings in 3
            steps
          </h1>

          {/* Subheadline */}
          <p className="text-[16px] text-slate-dark font-medium max-w-md mb-8 leading-relaxed">
            Define your ICP and DoSales AI handles discovery, outreach, and
            qualification automatically.
          </p>

          {/* Button */}
          <button className="bg-primary-blue max-w-[250px] text-white px-5 py-4 rounded-xl font-bold text-sm  group flex items-center gap-2">
            Setup your Sales Engine
          </button>
        </div>
      </div>

      {/* Two-Column Section */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 mt-12 xs:mt-20 items-center">
        {/* Left Column: Funnel */}
        <div className="flex flex-col items-center">
          <Funnel activeStep={activeStep} onStepClick={handleStepClick} />
        </div>

        {/* Right Column: Dynamic UI Card */}
        <div className="relative group min-h-50 xs:min-h-125">
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
                  className="w-full h-auto drop-shadow-xl rounded-[30px]"
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
