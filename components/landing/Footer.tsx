'use client';

import React from 'react';
import Image from 'next/image';
import { FaLinkedin, FaInstagram, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="py-20 px-6">
      <div className="max-w-425 mx-auto bg-[#F2F9FD] rounded-[48px] p-12 md:p-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Logo & Description */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="relative w-8 h-8">
                <Image 
                  src="/assets/doSalesLogo.svg" 
                  alt="DoSales Logo" 
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold text-text-main">DoSales</span>
            </div>
            <p className="text-[#667085] text-sm leading-relaxed max-w-60">
              AI-powered sales intelligence for emerging markets. Verified B2B data across MENA and Southeast Asia.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-text-main font-bold mb-6">Product</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-[#667085] hover:text-primary-blue transition-colors text-lg">Lead Database</a></li>
              <li><a href="#" className="text-[#667085] hover:text-primary-blue transition-colors text-lg">AI Prospecting</a></li>
              <li><a href="#" className="text-[#667085] hover:text-primary-blue transition-colors text-lg">Data Enrichment</a></li>
              <li><a href="#" className="text-[#667085] hover:text-primary-blue transition-colors text-lg">CRM Sync</a></li>
              <li><a href="#" className="text-[#667085] hover:text-primary-blue transition-colors text-lg">Market Intelligence</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-text-main font-bold mb-6">Company</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-[#667085] hover:text-primary-blue transition-colors text-lg">About</a></li>
              <li><a href="#" className="text-[#667085] hover:text-primary-blue transition-colors text-lg">Careers</a></li>
              <li><a href="#" className="text-[#667085] hover:text-primary-blue transition-colors text-lg">Contact</a></li>
              <li><a href="#" className="text-[#667085] hover:text-primary-blue transition-colors text-lg">Partners</a></li>
            </ul>
          </div>

          {/* CTA & Socials */}
          <div className="space-y-10">
            {/* Early Access Card */}
            <div className="bg-white rounded-[32px] p-5 flex items-center gap-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer group w-full lg:w-[380px]">
              <div className="w-[84px] h-[84px] bg-text-main rounded-[24px] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <div className="relative w-12 h-12 invert brightness-0">
                  <Image 
                    src="/assets/doSalesLogo.svg" 
                    alt="Logo" 
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <span className="text-[26px] font-bold text-text-main leading-[1.1]">
                Apply for early<br/>access
              </span>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-[24px] px-8 py-5 flex items-center justify-between w-full lg:w-[380px] shadow-sm">
              <span className="text-[#667085] text-lg font-medium whitespace-nowrap">Follow us on</span>
              <div className="flex items-center gap-6">
                <a href="#" className="text-text-main hover:text-primary-blue transition-colors text-2xl">
                  <FaLinkedin />
                </a>
                <a href="#" className="text-text-main hover:text-primary-blue transition-colors text-2xl">
                  <FaInstagram />
                </a>
                <a href="#" className="text-text-main hover:text-primary-blue transition-colors text-2xl">
                  <FaXTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-12 border-t border-[#DDEEF9] flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#98A2B3] text-sm">
            © 2026 — Copyright. All Rights reserved
          </p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-[#667085] hover:text-primary-blue transition-colors text-sm font-medium">Privacy policy</a>
            <a href="#" className="text-[#667085] hover:text-primary-blue transition-colors text-sm font-medium">Terms of service</a>
            <a href="#" className="text-[#667085] hover:text-primary-blue transition-colors text-sm font-medium">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
