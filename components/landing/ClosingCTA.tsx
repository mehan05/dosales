import React from 'react';
import Image from 'next/image';

const ClosingCTA = () => {
  return (
    <section className="relative pt-16 pb-20 xs:py-24 overflow-hidden bg-white">
      {/* Background SVG and Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-100 pointer-events-none select-none overflow-hidden">
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
          <div className="flex-1 h-0.5 bg-linear-to-l from-sky-light to-transparent opacity-60" />
          <div className="w-auto h-8 px-3.5 py-1.25 bg-linear-to-r from-[#C5E7F7] to-[#F4F9FB] text-blue-deep text-sm font-medium rounded-[30px] border-[1.5px] border-white shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05)] flex items-center justify-center gap-2.5">
            Upgrade your Leads
          </div>
          <div className="flex-1 h-0.5 bg-linear-to-r from-sky-light to-transparent opacity-60" />
        </div>

        {/* Heading */}
        <h2 className="text-5xl font-bold text-text-main mb-10 max-w-4xl mx-auto leading-[1.1]">
          Start closing in emerging <br className="hidden md:block" /> markets today
        </h2>

        {/* Button */}
        <button className="bg-text-main text-white w-[138px] h-[48px] rounded-xl font-bold text-sm hover:bg-slate-800 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 active:translate-y-0">
          Get Early Access
        </button>
      </div>
    </section>
  );
};

export default ClosingCTA;
