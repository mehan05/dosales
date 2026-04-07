import React from 'react';
import Image from 'next/image';

const ClosingCTA = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-white">
      {/* Background SVG and Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-screen h-100 pointer-events-none select-none overflow-hidden">
        <Image 
          src="/assets/svg/upgradeYourLeadsBgImage.png" 
          alt="" 
          fill
          className="w-full h-full object-cover object-bottom [mask-image:linear-gradient(to_top,black,transparent_70%)]"
        />
        {/* Subtle accent glow */}
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-200 h-100 bg-bg-vivid/5 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">

        {/* Badge Area */}
        <div className="flex items-center justify-center gap-6 mb-12 w-full max-w-5xl mx-auto px-4">
          <div className="flex-1 h-0.5 bg-linear-to-l from-[#81D4FA] to-transparent opacity-60" />
          <div className="px-8 py-2 bg-linear-to-r from-[#D7F2FF] to-[#F2FAFF] text-[#006699] text-sm lg:text-md font-medium rounded-full border border-[#C2E8FF] shadow-[0_8px_30px_rgba(186,230,253,0.5)] whitespace-nowrap">
            Upgrade your Leads
          </div>
          <div className="flex-1 h-0.5 bg-linear-to-r from-[#81D4FA] to-transparent opacity-60" />
        </div>

        {/* Heading */}
        <h2 className="text-5xl font-bold text-text-main mb-10 max-w-4xl mx-auto leading-[1.1]">
          Start closing in emerging <br className="hidden md:block" /> markets today
        </h2>

        {/* Button */}
        <button className="bg-text-main text-white px-4 py-4 rounded-xl font-bold text-sm hover:bg-[#1f2937] transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 active:translate-y-0">
          Get Early Access
        </button>
      </div>
    </section>
  );
};

export default ClosingCTA;
