import React from "react";
import Image from "next/image";

const LeadsImage = () => {
  return (
    <section className="xs:pb-32 pb-8 px-4 relative">
      <div className="max-w-[1540px] mx-auto relative">
        {/* Purple Background Blur Effect */}
        <div 
          className="absolute -right-50 top-20 -translate-y-1/2 w-170 h-[400px] bg-bg-vivid/30 rounded-full blur-[100px] pointer-events-none -z-10"
        />
        
        <div className="relative w-full rounded-[48px] bg-white p-2.5 shadow-[0_20px_50px_var(--color-vivid-glow)]">
          <div className="overflow-hidden rounded-[32px] w-full">
            <Image
              width={1540}
              height={950}
              src="/assets/svg/leagsPage.svg"
              alt="Leads Dashboard Preview"
              className="hidden xs:block object-cover object-top w-full"
              priority
            />
            <Image
              width={426}
              height={600}
              src="/assets/svg/leadsPageMobile.svg"
              alt="Leads Dashboard Preview Mobile"
              className="block xs:hidden object-contain w-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadsImage;
