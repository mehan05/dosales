"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Funnel from "./Funnel";
import { PlatformSectionData } from "@/types/strapi";
import { getStrapiMedia } from "@/lib/strapi";

interface PlatformSectionProps {
  data?: PlatformSectionData;
}

const PlatformSection = ({ data }: PlatformSectionProps) => {
  const [activeStep, setActiveStep] = useState(1);
  const totalSteps = 3;
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

  const startInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveStep((prev) => (prev % totalSteps) + 1);
    }, 5000); // 5 seconds interval for better readability
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

  const currentStepData = data?.funnelAndImage?.[activeStep - 1];

  return (
    <section className="relative pb-20 md:pb-[40px] xs:pt-[120px] bg-linear-to-b from-white via-blue-50/40 to-white overflow-hidden font-sans">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 ">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto relative ">
          {/* Badge */}
          <div className="w-auto h-8 px-3.5 py-1.25 badge-gradient text-blue-deep text-sm font-medium rounded-[30px] border-[1.5px] border-white shadow-[0px_2px_4px_0px_var(--color-shadow-faint)] flex items-center justify-center gap-2.5 mb-[16px]">
            {data?.badgeContent || "Platform"}
          </div>

          {/* Headline */}
          <h2 className="text-[36px] font-semibold text-text-main leading-[1.1] mb-5 tracking-tight">
            {data?.heading || "An Automated Funnel that turns your ICP to Booked Meetings in 3 steps"}
          </h2>

          {/* Subheadline */}
          <p className="text-[16px] text-slate-dark font-medium max-w-md mb-6 leading-relaxed">
            {data?.description || "Define your ICP and DoSales AI handles discovery, outreach, and qualification automatically."}
          </p>

          {/* Button */}
          <button className="bg-primary-blue max-w-[250px] text-white px-5 py-4 rounded-xl font-bold text-sm  group flex items-center gap-2">
            {data?.setupYourSalesEngine?.content || "Setup your Sales Engine"}
          </button>
        </div>
      </div>

      {/* Two-Column Section */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 mt-12 xs:mt-20 items-center">
        {/* Left Column: Funnel */}
        <div className="flex flex-col items-center">
          <Funnel 
            activeStep={activeStep} 
            onStepClick={handleStepClick} 
            steps={data?.funnelAndImage} 
            label={data?.funnelMainContent}
          />
        </div>

        {/* Right Column: Dynamic UI Card */}
        <div className="relative group min-h-50 xs:min-h-0">
          <div className="absolute -inset-4 bg-linear-to-tr from-blue-100/20 to-transparent rounded-[40px] blur-2xl group-hover:bg-blue-100/40 transition-colors" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <Image
                src={getStrapiMedia(currentStepData?.image?.url) || (
                  activeStep === 1 ? "/assets/svg/platformSection/designAndDiscover.svg" :
                  activeStep === 2 ? "/assets/svg/platformSection/enrich.svg" :
                  "/assets/svg/platformSection/searchAndConvert.svg"
                )}
                alt={currentStepData?.label || "Platform Section Image"}
                width={598}
                height={526}
                className="w-full h-auto drop-shadow-xl rounded-[30px]"
                priority={activeStep === 1}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
