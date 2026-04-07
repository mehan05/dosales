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
        <div className="flex items-center justify-center gap-4 mb-8">
          <div>
            
          <Image 
            src="/assets/svg/platformSectionLine.svg" 
            alt="Line decoration" 
            width={500} 
            height={5} 
            className="w-12 md:w-24 h-0.5 object-contain scale-x-125" 
          />
          </div>
          <div className="px-5 py-1 bg-gradient-to-r from-[#D7F2FF] to-[#F2FAFF] text-[#006699] text-md font-medium rounded-full border border-[#C2E8FF] mb-10 ">
            Upgrade your Leads
          </div>
          <div>
          <Image 
            src="/assets/svg/platformSectionLine.svg" 
            alt="Line decoration" 
            width={96} 
            height={2} 
            className="w-12 md:w-24 h-0.5 object-contain rotate-180 scale-x-125 "  
          />

          </div>
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
