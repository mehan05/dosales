import React from "react";
import LeadsImage from "./LeadsImage";
import GridBackground from "../ui/GridBackground";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-bg-pale to-blue-ghost-light to-25% overflow-hidden">
      {/* Top right white shade */}
      <div className="absolute top-[-20%] right-[-10%] w-[60%] h-120 bg-white rounded-full blur-[200px] opacity-60 pointer-events-none z-0" />
      
      <GridBackground className="text-white z-0" />

      <section className="relative pt-20 xs:pb-0 pb-4  overflow-hidden z-10">
        {/* Background Grid - already handled by GridBackground above */}

        <div className="container mx-auto px-4 relative z-10 text-center  lg:leading-relaxed">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-4xl font-semibold text-heading mb-4 tracking-tight mt-[50px]">
            Stop Chasing Leads!
          </h1>

          {/* Sub-heading */}
          <h2 className="text-[39px] md:text-4xl font-medium text-text-main max-w-4xl mx-auto mb-6 leading-[1.5] md:leading-relaxed">
            Turn your Ideal Customer Profile into a <br className="hidden md:block" />
            Qualified pipeline with{" "}
            <span className="text-text-main font-[600]">Automated Outreach</span>
          </h2>

          {/* Description */}
          <p className="text-slate-dark text-[16px] max-w-2xl mx-auto mb-6 leading-relaxed ">
            DoSales automates lead discovery, outreach, and lead qualification
            with DoSales AI. Hand over only sales-ready prospects and your sales
            team focuses on Revenue and Closing.
          </p>

          {/* Early Access Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-early-access rounded-full text-sm font-medium text-emerald-800 mb-3.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[16px] text-text-main">Early Access Live </span> - Limited Spots available
          </div>

          {/* Lead Capture Form */}
          <div className="flex items-center justify-between max-w-[420px] mx-auto mb-3.5 bg-white p-1.5 rounded-2xl shadow-lg border border-gray-100 relative z-20">
            <input
              type="email"
              placeholder="praveen@calibraint.com"
              className="flex-1 px-4 py-2.5 outline-none text-slate-input w-full text-sm sm:text-base bg-transparent"
            />
            <button className="bg-primary-blue text-white px-5 py-2.5 rounded-[10px] text-xs sm:text-sm font-bold hover:bg-blue-dark transition-colors whitespace-nowrap shadow-sm">
              REGISTER NOW
            </button>
          </div>
          <p className="text-[16px] text-slate-dark italic">Get Free Early Access</p>
          <div className="relative z-10 ">
            <LeadsImage />
          </div>
        </div>

       
      </section>
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-white via-white/20 to-transparent pointer-events-none z-0" />
    </div>
  );
};

export default Hero;
