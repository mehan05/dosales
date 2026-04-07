import React from 'react';
import Image from 'next/image';

const WhyDoSales = () => {
  return (
    <section className="  py-24 px-4 overflow-hidden mt-12">
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
      <div className='rounded-tr-[25%] rounded-tl-[25%] bg-linear-to-b from-[#F0F9FF] to-[#F0F9FF] to-30% pt-14'>
        <div className="max-w-7xl mx-auto flex flex-col items-center mb-16 ">
          <div className="px-4 py-1 bg-blue-50 text-primary-blue text-xs font-bold rounded-full border border-blue-100 mb-6 uppercase tracking-wider">
            Why DoSales
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-text-main text-center max-w-4xl tracking-tight leading-tight">
            Existing tools weren't built for your markets
          </h2>
        </div>

        {/* Features Illustration */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative w-full rounded-[40px] overflow-hidden border-2 border-primary-blue/30 bg-slate-50/30">
            <Image 
              src="/assets/svg/whyDoSales.svg" 
              alt="Why DoSales Features" 
              width={1400} 
              height={800}
              className="w-full h-auto block"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDoSales;
