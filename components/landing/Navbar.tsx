import Image from 'next/image';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="relative z-50 flex items-center justify-between px-8 py-6  mx-auto w-full" >
      <div className="flex items-center gap-2">
        <Image
            src="/assets/svg/logo.svg"
            alt="Logo"
            width={32}
            height={32}
            className='w-8 h-8'
        />
        <span className="text-2xl font-bold text-text-main">DoSales</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8">
        <div className="flex items-center gap-1 cursor-pointer text-text-main font-medium hover:text-primary-blue">
          FEATURES
          <span className="text-[10px]">▼</span>
        </div>
        <a href="#" className="text-text-main font-medium hover:text-primary-blue">ABOUT</a>
        <a href="#" className="text-text-main font-medium hover:text-primary-blue">PRICING</a>
      </div>

      <button className="hidden xs:block relative z-50 bg-text-main text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-slate-800 transition-colors">
        Schedule a Demo
      </button>

      <button className="xs:hidden relative z-50 p-1">
        <Image
          src="/assets/svg/hamburgerIcon.svg"
          alt="Menu"
          width={30}
          height={30}
          className="w-8 h-8"
        />
      </button>
    </nav>
  );
};

export default Navbar;
