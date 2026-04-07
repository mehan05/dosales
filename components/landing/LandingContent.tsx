import React from 'react';

const LandingContent = () => {
  return (
    <section className=" rounded-tr-[15%] rounded-tl-[15%] bg-gradient-to-b from-[#F0F9FF] to-[#F0F9FF] to-30% py-24 px-4 overflow-hidden mt-12">
      {/* Top statistics section */}
      <div className="max-w-6xl mx-auto flex flex-col items-center mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full text-center mb-16">
          <div className="flex flex-col gap-2">
            <h3 className="text-4xl lg:text-5xl font-black text-primary-blue tracking-tighter">50 LEADS/MO</h3>
            <p className="text-gray-400 font-bold text-sm tracking-widest">FREE FOREVER</p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-4xl lg:text-5xl font-black text-primary-blue tracking-tighter">2 MIN</h3>
            <p className="text-gray-400 font-bold text-sm tracking-widest">SETUP</p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-4xl lg:text-5xl font-black text-primary-blue tracking-tighter">NO CARD</h3>
            <p className="text-gray-400 font-bold text-sm tracking-widest">REQUIRED</p>
          </div>
        </div>

        <button className="bg-black text-white px-10 py-4 rounded-xl font-bold text-sm hover:bg-gray-900 transition-all shadow-lg active:scale-95 mb-6">
          REGISTER NOW
        </button>

        <div className="flex items-center gap-2">
          <p className="text-[13px] text-gray-500 font-medium">Loved by 132+ existing users</p>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FFD700" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            ))}
          </div>
        </div>
      </div>

      {/* Why DoSales Section */}
      <div className="max-w-7xl mx-auto flex flex-col items-center mb-16 ">
        <div className="px-4 py-1 bg-blue-50 text-primary-blue text-xs font-bold rounded-full border border-blue-100 mb-6 uppercase tracking-wider">
          Why DoSales
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold text-text-main text-center max-w-4xl tracking-tight leading-tight">
          Existing tools weren't built for your markets
        </h2>
      </div>

      {/* Features Box with Blue Border */}
      <div className="  border-red-500 max-w-6xl mx-auto border-2 border-primary-blue/30 rounded-[40px] overflow-hidden bg-slate-50/30">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Regional Dominance */}
          <div className="p-12 border-b md:border-b-0 md:border-r border-primary-blue/10 flex flex-col gap-8">
            <div className="aspect-4/3 w-full bg-white rounded-3xl border border-blue-50/50 shadow-inner flex items-center justify-center text-gray-300 font-medium text-sm italic">
              {/* Image Placeholder */}
              [Regional dominance visual will go here]
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl font-bold text-primary-blue">Regional Dominance</h4>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                Built for MENA & Southeast Asia from day one — not bolted on as an afterthought. Coverage where Apollo and ZoomInfo have blind spots.
              </p>
            </div>
          </div>

          {/* Vertical Intelligence */}
          <div className="p-12 flex flex-col gap-8">
            <div className="aspect-4/3 w-full bg-white rounded-3xl border border-blue-50/50 shadow-inner flex items-center justify-center text-gray-300 font-medium text-sm italic">
              {/* Image Placeholder */}
              [Vertical intelligence visual will go here]
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl font-bold text-primary-blue">Vertical Intelligence</h4>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                Deep data models for Fintech, PropTech, Trade Finance, and Supply Chain. Industry-specific signals that horizontal tools miss entirely.
              </p>
            </div>
          </div>
        </div>

        {/* AI Autonomy - Full Width Bottom Row */}
        <div className="p-12 border-t border-primary-blue/10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="aspect-video bg-white rounded-3xl border border-blue-50/50 shadow-inner flex items-center justify-center text-gray-300 font-medium text-sm italic">
            {/* Image Placeholder */}
            [AI Autonomy visual will go here]
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-2xl font-bold text-primary-blue">AI Autonomy</h4>
            <p className="text-gray-600 leading-relaxed text-[15px]">
              Autonomous prospecting that finds, enriches, scores, and engages leads. Your AI SDR works 24/7 while your team focuses on closing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingContent;