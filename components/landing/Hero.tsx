import React from "react";
import LeadsImage from "./LeadsImage";
import Navbar from "./Navbar";
import GridBackground from "../ui/GridBackground";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-bg-pale to-blue-ghost-light to-25% overflow-hidden">
      {/* Top right white shade */}
      <div className="absolute top-[-20%] right-[-10%] w-[60%] h-150 bg-white rounded-full blur-[200px] opacity-60 pointer-events-none z-0" />
      
      <GridBackground className="text-white z-0" />
      <Navbar />

      <section className="relative pt-20 xs:pb-12 pb-4 overflow-hidden z-10">
        {/* Background Grid - already handled by GridBackground above */}

        <div className="container mx-auto px-4 relative z-10 text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-semibold  text-heading mb-6 tracking-tight">
            Stop Chasing Leads!
          </h1>

          {/* Sub-heading */}
          <h2 className="text-3xl md:text-4xl font-medium  text-text-main max-w-4xl mx-auto mb-8 leading-relaxed">
            Turn your Ideal Customer Profile into a <br />
            Qualified pipeline with{" "}
            <span className="text-text-main font-extrabold">Automated Outreach</span>
          </h2>

          {/* Description */}
          <p className="text-slate-dark text-lg max-w-2xl mx-auto mb-10 leading-relaxed ">
            DoSales automates lead discovery, outreach, and lead qualification
            with DoSales AI. Hand over only sales-ready prospects and your sales
            team focuses on Revenue and Closing.
          </p>

          {/* Early Access Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-early-access rounded-full text-sm font-medium text-emerald-800 mb-8">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
            <span className="text-text-main">Early Access Live </span> - Limited Spots available
          </div>

          {/* Lead Capture Form */}
          <div className="flex items-center justify-between max-w-[420px] mx-auto mb-4 bg-white p-1.5 rounded-2xl shadow-lg border border-gray-100">
            <input
              type="email"
              placeholder="praveen@calibraint.com"
              className="flex-1 px-4 py-2.5 outline-none text-slate-input w-full text-sm sm:text-base bg-transparent"
            />
            <button className="bg-primary-blue text-white px-5 py-2.5 rounded-[14px] text-xs sm:text-sm font-bold hover:bg-blue-dark transition-colors whitespace-nowrap shadow-sm">
              REGISTER NOW
            </button>
          </div>
          <p className="text-s text-slate-dark mb-12 italic">Get Free Early Access</p>
          <div className="relative z-10">
            <LeadsImage />
          </div>
        </div>

       
      </section>
    </div>
  );
};

export default Hero;
