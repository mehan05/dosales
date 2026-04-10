"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const LeadsImage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Animation values: initially tilted and slightly scaled, then flattens on scroll
  const rotateX = useTransform(scrollYProgress, [0, 0.5], [15, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1.05, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0.6, 1]);

  return (
    <section ref={containerRef} className="  max-xs:pt-6.5  xs:pt-[48px] lg:pt-5 px-4 relative perspective-[1540px]">
      <motion.div 
        style={{ rotateX, scale, opacity }}
        className="max-w-[1540px] mx-auto relative origin-top pt-2 pb-[40px] md:pb-[80px]"
      >
        {/* Purple Background Blur Effect */}
        <div 
          className="absolute  -right-50 top-30 -translate-y-1/2 w-170 h-[400px] bg-bg-vivid/30 rounded-full blur-[100px] pointer-events-none -z-10"
        />
        
        <div className="relative w-full rounded-[48px]  ]">
          <div className="overflow-hidden rounded-[32px] w-full">
            <Image
              width={1300}
              height={900}
              src="/assets/svg/leagsPage.svg"
              alt="Leads Dashboard Preview"
              className="hidden sm:block object-cover object-top mx-auto"
              priority
            />
            <Image
              width={426}
              height={600}
              src="/assets/svg/leadsPageMobile.svg"
              alt="Leads Dashboard Preview Mobile"
              className="block sm:hidden object-contain w-full mx-auto"
              priority
            />
          </div>
        </div>
      </motion.div>

    </section>
  );
};

export default LeadsImage;
