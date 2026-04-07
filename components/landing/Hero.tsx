import React from "react";
import LeadsImage from "./LeadsImage";
import Navbar from "./Navbar";
import GridBackground from "../ui/GridBackground";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-[#A2DFFB] to-[#f4f9fe] to-25% overflow-hidden">
      {/* Top right white shade */}
      <div className="absolute top-[-20%] right-[-10%] w-[60%] h-150 bg-white rounded-full blur-[200px] opacity-60 pointer-events-none z-0" />
      
      <GridBackground className="text-white z-0" />
      <Navbar />

      <section className="relative pt-20 xs:pb-12 pb-4 overflow-hidden z-10">
        {/* Background Grid - already handled by GridBackground above */}

        <div className="container mx-auto px-4 relative z-10 text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-semibold  text-[#026AA2] mb-6 tracking-tight">
            Stop Chasing Leads!
          </h1>

          {/* Sub-heading */}
          <h2 className="text-3xl md:text-4xl font-medium  text-[#030712] max-w-4xl mx-auto mb-8 leading-relaxed">
            Turn your Ideal Customer Profile into a <br />
            Qualified pipeline with{" "}
            <span className="text-[#030712] font-extrabold">Automated Outreach</span>
          </h2>

          {/* Description */}
          <p className="text-[#4A5565] text-lg max-w-2xl mx-auto mb-10 leading-relaxed ">
            DoSales automates lead discovery, outreach, and lead qualification
            with DoSales AI. Hand over only sales-ready prospects and your sales
            team focuses on Revenue and Closing.
          </p>

          {/* Early Access Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#DFFEEA] rounded-full text-sm font-medium text-emerald-800 mb-8">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
            <span className="text-[#030712]">Early Access Live </span> - Limited Spots available
          </div>

          {/* Lead Capture Form */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto mb-4 bg-white p-1.5 rounded-xl shadow-lg border border-gray-100">
            <input
              type="email"
              placeholder="praveen@calibraint.com"
              className="flex-1 px-4 py-3 outline-none text-[#364153] w-full"
            />
            <button className="bg-[#0085C9] text-white px-4 py-3 rounded-xl text-sm hover:bg-[#006ca3] transition-colors whitespace-nowrap">
              REGISTER NOW
            </button>
          </div>
          <p className="text-s text-[#4A5565] mb-12">Get Free Early Access</p>
          <div className="relative z-10">
            <LeadsImage />
          </div>
        </div>

       
      </section>
    </div>
  );
};

export default Hero;
