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
    <section ref={containerRef} className="xs:pb-4 pb-2 px-4 relative perspective-[1540px]">
      <motion.div 
        style={{ rotateX, scale, opacity }}
        className="max-w-[1540px] mx-auto relative origin-top pt-2 pb-5"
      >
        {/* Purple Background Blur Effect */}
        <div 
          className="absolute -right-50 top-20 -translate-y-1/2 w-170 h-[400px] bg-bg-vivid/30 rounded-full blur-[100px] pointer-events-none -z-10"
        />
        
        <div className="relative w-full rounded-[48px] bg-white p-2.5 shadow-[0_20px_50px_var(--color-vivid-glow)]">
          <div className="overflow-hidden rounded-[32px] w-full">
            <Image
              width={1540}
              height={950}
              src="/assets/svg/leagsPage.svg"
              alt="Leads Dashboard Preview"
              className="hidden xs:block object-cover object-top w-full"
              priority
            />
            <Image
              width={426}
              height={600}
              src="/assets/svg/leadsPageMobile.svg"
              alt="Leads Dashboard Preview Mobile"
              className="block xs:hidden object-contain w-full"
              priority
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default LeadsImage;
