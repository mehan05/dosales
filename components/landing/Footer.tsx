'use client';

import React from 'react';
import Image from 'next/image';
import { FaGithub, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { FooterSectionData } from '@/types/strapi';
import { getStrapiMedia } from '@/lib/strapi';

interface FooterProps {
  data?: any; // Using any for now to facilitate complex nested data
}

const Footer = ({ data }: FooterProps) => {
  const branding = data?.footerBranding;
  const earlyAccess = data?.applyForEarlyAccess;
  const social = data?.socialMedia;
  const footerLinksGroup = data?.footerLink?.footerLinks || [];

  return (
    <footer className="pt-10 pb-20 px-4">
      {/* SVG Gradient Definitions */}
      <svg width="0" height="0" className="absolute" aria-hidden="true" focusable="false">
        <linearGradient id="instagram-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#f09433" offset="0%" />
          <stop stopColor="#e6683c" offset="25%" />
          <stop stopColor="#dc2743" offset="50%" />
          <stop stopColor="#cc2366" offset="75%" />
          <stop stopColor="#bc1888" offset="100%" />
        </linearGradient>
        <linearGradient id="github-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#24292e" offset="0%" />
          <stop stopColor="#444d56" offset="100%" />
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
                  src={getStrapiMedia(branding?.logo?.url) || "/assets/svg/logo.svg"} 
                  alt="DoSales Logo" 
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold text-[20px]">{branding?.content || "DoSales"}</span>
            </div>
            <p className="text-slate-medium text-sm leading-relaxed max-w-full">
              {branding?.description || "AI-powered sales intelligence for emerging markets. Verified B2B data across MENA and Southeast Asia."}
            </p>
          </div>

          {/* Dynamic Links */}
          {footerLinksGroup.map((group: any) => (
            <div key={group.id}>
              <h3 className="text-[20px] font-bold mb-3">{group.linkGroupName || group.title}</h3>
              <ul className="space-y-[8px]">
                {group.link?.map((link: any) => (
                  <li key={link.id}>
                    <a href={link.url || "#"} className="text-slate-medium hover:text-primary-blue transition-colors text-[20px]">
                      {link.content || link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* If no dynamic links, show placeholders */}
          {footerLinksGroup.length === 0 && (
            <>
              <div>
                <h3 className="text-[20px] font-bold mb-3">Product</h3>
                <ul className="space-y-[8px]">
                  <li><a href="#" className="text-slate-medium hover:text-primary-blue transition-colors text-[20px]">Lead Database</a></li>
                  <li><a href="#" className="text-slate-medium hover:text-primary-blue transition-colors text-[20px]">AI Prospecting</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-[20px] font-bold mb-3">Company</h3>
                <ul className="space-y-[8px]">
                  <li><a href="#" className="text-slate-medium hover:text-primary-blue transition-colors text-[20px]">About</a></li>
                  <li><a href="#" className="text-slate-medium hover:text-primary-blue transition-colors text-[20px]">Careers</a></li>
                </ul>
              </div>
            </>
          )}

          {/* CTA & Socials */}
          <div className="space-y-[15px]">
            {/* Early Access Card */}
            <div className="bg-white rounded-[32px] p-4 sm:p-5 flex items-center gap-4 sm:gap-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer group w-full max-w-[380px]">
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
                {earlyAccess?.content || "Apply for early access"}
              </span>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-[24px] px-4 sm:px-8 py-4 sm:py-5 flex flex-wrap gap-2 items-center justify-start w-full max-w-[380px] shadow-sm">
              <span className="text-slate-medium text-base sm:text-[16px] font-medium">{social?.Content || "Follow us on"}</span>
              <div className="flex items-center gap-3">
                {social?.socialMedias?.map((item: any) => {
                  const logoUrl = getStrapiMedia(item.logo?.url);
                  return (
                    <a 
                      key={item.id} 
                      href={item.url || "#"} 
                      className="text-[20px] hover:scale-110 transition-transform duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {logoUrl ? (
                        <div className="relative w-6 h-6">
                          <Image src={logoUrl} alt="Social logo" fill className="object-contain" />
                        </div>
                      ) : (
                        item.url?.includes('x.com') || item.url?.includes('twitter.com') ? <FaXTwitter /> :
                        item.url?.includes('github.com') ? <FaGithub /> :
                        item.url?.includes('instagram.com') ? <FaInstagram /> :
                        <span className="text-xs font-bold uppercase tracking-tighter">LINK</span>
                      )}
                    </a>
                  );
                }) || (
                  <>
                    <a href="#" className="text-[20px] hover:[&>svg]:fill-[url(#x-gradient)] transition-all duration-300 text-xl sm:text-2xl hover:scale-110">
                      <FaXTwitter />
                    </a>
                    <a href="#" className="text-[20px] hover:[&>svg]:fill-[url(#github-gradient)] transition-all duration-300 text-xl sm:text-2xl hover:scale-110">
                      <FaGithub />
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className=" width-full mt-20 pt-12 border-t border-border-footer flex flex-col md:flex-row justify-between items-start xs:items-center max-xs:items-center gap-6">
          <p className="text-muted-slate-blue text-[14px] items-start">
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
