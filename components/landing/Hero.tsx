import React from "react";
import LeadsImage from "./LeadsImage";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="grid-bg">
              <Navbar />

      <section className="relative pt-20 pb-12 overflow-hidden ">
        {/* Background Grid */}
        <div className="absolute inset-0  opacity-30 pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#026AA2] mb-6 tracking-tight">
            Stop Chasing Leads!
          </h1>

          {/* Sub-heading */}
          <h2 className="text-3xl md:text-4xl font-[500]  text-[#030712] max-w-4xl mx-auto mb-8 leading-relaxed">
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
            Early Access Live - Limited Spots available
          </div>

          {/* Lead Capture Form */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto mb-4 bg-white p-1.5 rounded-xl shadow-lg border border-gray-100">
            <input
              type="email"
              placeholder="praveen@calibraint.com"
              className="flex-1 px-4 py-3 outline-none text-[#364153] w-full"
            />
            <button className="bg-[#0085C9] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#006ca3] transition-colors whitespace-nowrap">
              REGISTER NOW
            </button>
          </div>
          <p className="text-s text-[#4A5565] mb-12">Get Free Early Access</p>
          <div className="z-[1000px]">
            <LeadsImage />
          </div>
        </div>

        <div 
          className="absolute right-0 top-0  min-w-0 bg-linear-to-br from-[#5176FC] to-[#F0F9FF]"
          style={{ opacity: 0.2 }}
        />
      </section>
    </div>
  );
};

export default Hero;
