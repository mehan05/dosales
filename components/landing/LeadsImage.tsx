import React from 'react';
import Image from 'next/image';

const LeadsImage = () => {
  return (
    <section className="bg-white pb-32 px-4 ">
            <Image
              src="/assets/svg/leagsPage.svg"
              alt="Leads Dashboard Preview"
              fill
              className="object-cover object-top"
              priority
            />
    
    </section>
  );
};

export default LeadsImage;
