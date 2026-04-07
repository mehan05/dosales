import Image from 'next/image';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-6  mx-auto w-full" >
      <div className="flex items-center gap-2">
        <Image
            src="/assets/svg/logo.svg"
            alt="Logo"
            width={32}
            height={32}
            className='w-8 h-8'
        />
        <span className="text-2xl font-bold text-[#030712]">DoSales</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8">
        <div className="flex items-center gap-1 cursor-pointer text-[#030712] font-medium hover:text-[#0085C9]">
          FEATURES
          <span className="text-[10px]">▼</span>
        </div>
        <a href="#" className="text-[#030712] font-medium hover:text-[#0085C9]">ABOUT</a>
        <a href="#" className="text-[#030712] font-medium hover:text-[#0085C9]">PRICING</a>
      </div>

      <button className="bg-[#030712] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#1f2937] transition-colors">
        Schedule a Demo
      </button>
    </nav>
  );
};

export default Navbar;
