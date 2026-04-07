import React from "react";
import Image from "next/image";

const LeadsImage = () => {
  return (
    <section className="pb-32 px-4">
      <div className="max-w-[1540px] mx-auto">
        <div className="relative overflow-hidden min-h-[950px] w-full">
          <Image
            width={1540}
            height={950}
            src="/assets/svg/leagsPage.svg"
            alt="Leads Dashboard Preview"
            className="object-cover object-top"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default LeadsImage;
