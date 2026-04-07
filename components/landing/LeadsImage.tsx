import React from 'react';
import Image from 'next/image';

const LeadsImage = () => {
  return (
    <section className="bg-white pb-32 px-4 ">
      <div className="max-w-[1500px] mx-auto pointer-events-none select-none">
          <div className="relative bg-white  overflow-hidden min-h-[950px]  border border-blue-50">
            <Image
              src="/assets/svg/leagsPage.svg"
              alt="Leads Dashboard Preview"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
      </div>
    </section>
  );
};

export default LeadsImage;
