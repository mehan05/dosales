'use client';

import React from 'react';
import Image from 'next/image';
import { FaLinkedin, FaInstagram, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="py-20 px-6">
      {/* SVG Gradient Definitions */}
      <svg width="0" height="0" className="absolute" aria-hidden="true" focusable="false">
        <linearGradient id="instagram-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#f09433" offset="0%" />
          <stop stopColor="#e6683c" offset="25%" />
          <stop stopColor="#dc2743" offset="50%" />
          <stop stopColor="#cc2366" offset="75%" />
          <stop stopColor="#bc1888" offset="100%" />
        </linearGradient>
        <linearGradient id="linkedin-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#0077b5" offset="0%" />
          <stop stopColor="#00a0dc" offset="100%" />
        </linearGradient>
        <linearGradient id="x-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#000000" offset="0%" />
          <stop stopColor="#666666" offset="100%" />
        </linearGradient>
      </svg>

      <div className="max-w-425 mx-auto bg-bg-footer rounded-[48px] p-6 sm:p-12 md:p-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Logo & Description */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="relative w-8 h-8">
                <Image 
                  src="/assets/svg/logo.svg" 
                  alt="DoSales Logo" 
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold text-[20px]">DoSales</span>
            </div>
            <p className="text-slate-medium text-sm leading-relaxed max-w-60">
              AI-powered sales intelligence for emerging markets. Verified B2B data across MENA and Southeast Asia.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-[20px] font-bold mb-6">Product</h3>
            <ul className="space-y-[8px]">
              <li><a href="#" className="text-slate-medium hover:text-primary-blue transition-colors text-[20px]">Lead Database</a></li>
              <li><a href="#" className="text-slate-medium hover:text-primary-blue transition-colors text-[20px]">AI Prospecting</a></li>
              <li><a href="#" className="text-slate-medium hover:text-primary-blue transition-colors text-[20px]">Data Enrichment</a></li>
              <li><a href="#" className="text-slate-medium hover:text-primary-blue transition-colors text-[20px]">CRM Sync</a></li>
              <li><a href="#" className="text-slate-medium hover:text-primary-blue transition-colors text-[20px]">Market Intelligence</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-[20px] font-bold mb-6">Company</h3>
            <ul className="space-y-[8px]">
              <li><a href="#" className="text-slate-medium hover:text-primary-blue transition-colors text-[20px]">About</a></li>
              <li><a href="#" className="text-slate-medium hover:text-primary-blue transition-colors text-[20px]">Careers</a></li>
              <li><a href="#" className="text-slate-medium hover:text-primary-blue transition-colors text-[20px]">Contact</a></li>
              <li><a href="#" className="text-slate-medium hover:text-primary-blue transition-colors text-[20px]">Partners</a></li>
            </ul>
          </div>

          {/* CTA & Socials */}
          <div className="space-y-[8px]">
            {/* Early Access Card */}
            <div className="bg-white rounded-[32px] p-4 sm:p-5 flex items-center gap-4 sm:gap-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer group w-full lg:w-[380px]">
              <div className="w-[64px] h-[64px] sm:w-[84px] sm:h-[84px] bg-text-main rounded-[24px] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <div className="relative w-8 h-8 sm:w-12 sm:h-12 invert brightness-0">
                  <Image 
                    src="/assets/doSalesLogo.svg" 
                    alt="Logo" 
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <span className=" sm:text-[20px] font-bold text-[23.81px] leading-[1.1]">
                Apply for early<br/>access
              </span>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-[24px] px-4 sm:px-8 py-4 sm:py-5 flex gap-2 items-center justify-between w-full lg:w-[380px] shadow-sm">
              <span className="text-slate-medium text-base sm:text-[16px] font-medium">Follow us on</span>
              <div className="flex items-center gap-3 sm:gap-6">
                <a href="#" className="text-[20px] hover:[&>svg]:fill-[url(#linkedin-gradient)] transition-all duration-300 text-xl sm:text-2xl hover:scale-110">
                  <FaLinkedin />
                </a>
                <a href="#" className="text-[20px] hover:[&>svg]:fill-[url(#instagram-gradient)] transition-all duration-300 text-xl sm:text-2xl hover:scale-110">
                  <FaInstagram />
                </a>
                <a href="#" className="text-[20px] hover:[&>svg]:fill-[url(#x-gradient)] transition-all duration-300 text-xl sm:text-2xl hover:scale-110">
                  <FaXTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-12 border-t border-border-footer flex flex-col xs:flex-row justify-between items-start xs:items-center gap-6">
          <p className="text-muted-slate-blue text-[14px]">
            © 2026 — Copyright. All Rights reserved
          </p>
          <div className="grid grid-cols-2 xs:flex xs:flex-wrap items-center gap-x-6 gap-y-4 xs:gap-8 w-full xs:w-auto">
            <a href="#" className="text-slate-medium hover:text-primary-blue transition-colors text-[16px] font-medium">Privacy policy</a>
            <a href="#" className="text-slate-medium hover:text-primary-blue transition-colors text-[16px] font-medium text-right xs:text-left">Terms of service</a>
            <a href="#" className="text-slate-medium hover:text-primary-blue transition-colors text-[16px] font-medium">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
