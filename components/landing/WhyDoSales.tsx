import React from 'react';
import Image from 'next/image';

const WhyDoSales = () => {
  return (
    <section className="xs:py-24 py-12 px-4 overflow-hidden xs:mt-12 mt-4">
      {/* Top statistics section */}
      <div className="max-w-6xl mx-auto flex flex-col items-center mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full text-center mb-16 ">
          <div className="flex flex-col gap-2">
            <h3 className="text-4xl lg:text-5xl font-[500] text-heading tracking-tighter ">50 LEADS/MO</h3>
            <p className="text-slate-dark  text-sm tracking-widest">FREE FOREVER</p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-4xl lg:text-5xl font-[500] text-heading tracking-tighter">2 MIN</h3>
            <p className="text-slate-dark  text-sm tracking-widest">SETUP</p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-4xl lg:text-5xl font-[500] text-heading tracking-tighter">NO CARD</h3>
            <p className="text-slate-dark  text-sm tracking-widest">REQUIRED</p>
          </div>
        </div>

        <button className="bg-black text-white px-5 py-4 rounded-xl font-bold text-sm hover:bg-gray-900 transition-all shadow-lg active:scale-95 mb-6">
          REGISTER NOW
        </button>

        <div className="flex items-center gap-2">
          <p className="text-[13px] text-gray-500 font-medium">Loved by 132+ existing users</p>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="var(--color-gold)" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            ))}
          </div>
        </div>
      </div>

      {/* Why DoSales Section */}
      <div className='rounded-tr-[25%] rounded-tl-[25%] bg-linear-to-b from-blue-ghost to-blue-ghost to-30% pt-14'>
        <div className="max-w-7xl mx-auto flex flex-col items-center mb-16 ">
          <div className="px-6 py-2 bg-gradient-to-r from-blue-highlight to-bg-light-blue text-blue-deep text-md font-medium rounded-full border-2 border-white shadow-[0_0_15px_var(--color-blue-shadow)] mb-10 ">
            Why DoSales
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-text-main text-center max-w-4xl tracking-tight leading-tight">
            Existing tools weren't built for your markets
          </h2>
        </div>

        {/* Features Illustration Recreated in JSX */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative w-full rounded-[40px] overflow-hidden border-2 border-primary-blue/30 bg-white/50 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Card 1: Regional Dominance */}
              <div className="flex flex-col p-8 md:p-12 border-b md:border-r border-primary-blue/20">
                <div className="flex-1 flex items-center justify-center mb-10 h-64">
                  <Image 
                    src="/assets/svg/whyDoSales/refionalDominance.svg" 
                    alt="Regional Dominance" 
                    width={400} 
                    height={300}
                    className="w-full h-auto max-w-[420px]"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-heading mb-4 tracking-tight">Regional Dominance</h3>
                  <p className="text-text-main text-[16px] leading-[1.6] max-w-md">
                    Built for MENA & Southeast Asia from day one — not bolted on as an afterthought. 
                    Coverage where Apollo and ZoomInfo have blind spots.
                  </p>
                </div>
              </div>

              {/* Card 2: Vertical Intelligence */}
              <div className="flex flex-col p-8 md:p-12 border-b border-primary-blue/20">
                <div className="flex-1 flex items-center justify-center mb-10 h-64">
                  <Image 
                    src="/assets/svg/whyDoSales/verifyIntelligence.svg" 
                    alt="Vertical Intelligence" 
                    width={400} 
                    height={300}
                    className="w-full h-auto max-w-[420px]"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-heading mb-4 tracking-tight">Vertical Intelligence</h3>
                  <p className="text-text-main text-[16px] leading-[1.6] max-w-md">
                    Deep data models for Fintech, PropTech, Trade Finance, and Supply Chain. 
                    Industry-specific signals that horizontal tools miss entirely.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: AI Autonomy (Refined Size) */}
            <div className="flex flex-col md:flex-row p-6 md:p-10 items-center overflow-hidden">
              <div className="md:w-[60%] flex items-center justify-center mb-8 md:mb-0 h-64 md:h-80">
                <Image 
                  src="/assets/svg/whyDoSales/aiAutonomy.svg" 
                  alt="AI Autonomy" 
                  width={700} 
                  height={400}
                  className="w-full h-auto max-w-[320px] md:max-w-162.5 scale-105 md:scale-110"
                />
              </div>
              <div className="md:w-[40%] md:pl-12">
                <h3 className="text-3xl font-bold text-heading mb-4 tracking-tight">AI Autonomy</h3>
                <p className="text-text-main text-[18px] leading-normal max-w-lg font-medium">
                  Autonomous prospecting that finds, enriches, scores, and engages leads. 
                  Your AI SDR works 24/7 while your team focuses on closing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDoSales;
