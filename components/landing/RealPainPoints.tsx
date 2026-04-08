"use client";
import React from "react";
import TestimonialCard from "./TestimonialCard";
import GridBackground from "../ui/GridBackground";

const testimonialData = [
  {
    name: "Marcaus Teo",
    role: "VP Sales",
    company: "Nium",
    content:
      "We've burned through Apollo and ZoomInfo licenses. The UAE Fintech data is a graveyard — wrong emails, outdated titles, companies that pivoted two years ago.",
    avatar: "https://i.pravatar.cc/150?u=marcaus",
  },
  {
    name: "Talan Septimus",
    role: "Sales Director",
    company: "Razorpay",
    content:
      "We've burned through Apollo and ZoomInfo licenses. The UAE Fintech data is a graveyard — wrong emails, outdated titles, companies that pivoted two years ago.",
    avatar: "https://i.pravatar.cc/150?u=talan",
  },
  {
    name: "Jocelyn Kenter",
    role: "Growth Lead",
    company: "Funding Societies",
    content:
      "We've burned through Apollo and ZoomInfo licenses. The UAE Fintech data is a graveyard — wrong emails, outdated titles, companies that pivoted two years ago.",
    avatar: "https://i.pravatar.cc/150?u=jocelyn",
  },
  {
    name: "Zain Septimus",
    role: "Head of BD",
    company: "Sarwa",
    content:
      "We've burned through Apollo and ZoomInfo licenses. The UAE Fintech data is a graveyard — wrong emails, outdated titles, companies that pivoted two years ago.",
    avatar: "https://i.pravatar.cc/150?u=zain",
  },
  {
    name: "Paityn Vaccaro",
    role: "Co-founder",
    company: "Propeller",
    content:
      "We've burned through Apollo and ZoomInfo licenses. The UAE Fintech data is a graveyard — wrong emails, outdated titles, companies that pivoted two years ago.",
    avatar: "https://i.pravatar.cc/150?u=paityn",
  },
  {
    name: "Cristofer Curtis",
    role: "SDR Manager",
    company: "Tabby",
    content:
      "We've burned through Apollo and ZoomInfo licenses. The UAE Fintech data is a graveyard — wrong emails, outdated titles, companies that pivoted two years ago.",
    avatar: "https://i.pravatar.cc/150?u=cristofer",
  },
  {
    name: "Ahmad Zain",
    role: "Director of Sales",
    company: "Noon",
    content:
      "We've burned through Apollo and ZoomInfo licenses. The UAE Fintech data is a graveyard — wrong emails, outdated titles, companies that pivoted two years ago.",
    avatar: "https://i.pravatar.cc/150?u=ahmad",
  },
  {
    name: "Sarah Chen",
    role: "VP Growth",
    company: "Grab",
    content:
      "We've burned through Apollo and ZoomInfo licenses. The UAE Fintech data is a graveyard — wrong emails, outdated titles, companies that pivoted two years ago.",
    avatar: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    name: "Omar Farooq",
    role: "Head of Sales",
    company: "Careem",
    content:
      "We've burned through Apollo and ZoomInfo licenses. The UAE Fintech data is a graveyard — wrong emails, outdated titles, companies that pivoted two years ago.",
    avatar: "https://i.pravatar.cc/150?u=omar",
  },
];

const MarqueeRow = ({
  items,
  duration = 30,
}: {
  items: typeof testimonialData;
  duration?: number;
}) => {
  const [isPaused, setIsPaused] = React.useState(false);

  return (
    <div
      className="flex overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="flex gap-4 pr-4"
        style={{
          width: "fit-content",
          animation: `marqueeLeft ${duration}s linear infinite`,
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {/* We duplicate the items to create a seamless loop */}
        {[...items, ...items].map((testimonial, idx) => (
          <div key={idx} className="w-[350px] shrink-0">
            <TestimonialCard {...testimonial} />
          </div>
        ))}
      </div>
    </div>
  );
};

const RealPainPoints = () => {
  // Split data into 3 rows for more visual interest
  const row1 = testimonialData.slice(0, 3);
  const row2 = testimonialData.slice(3, 6);
  const row3 = testimonialData.slice(6, 9);

  return (
    <div className="px-4 py-6 xs:py-5 w-full overflow-hidden ">
      <section className="relative max-w-[1700px] mx-auto rounded-[40px] h-[898px] flex flex-col lg:flex-row items-center overflow-hidden bg-dashboard-bg py-12 lg:py-0 border border-dashboard-outline/50 shadow-sm ">
      
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-white/60 blur-[100px] rounded-full -translate-x-1/4 -translate-y-1/4 z-0 pointer-events-none" />

        <div className="absolute w-full h-full max-w-[436px] max-h-[430px] top-0 left-5 z-0">
          <GridBackground className="text-black overflow-hidden" />
        </div>

        {/* Left Content */}
        <div className="relative w-full lg:w-[45%] px-8 lg:px-24 pt-10 pb-8 lg:pt-10 lg:pb-32 flex flex-col items-start  z-10 lg:self-start">
          <div className="px-6 py-2 bg-gradient-to-r from-blue-highlight to-bg-light-blue text-blue-deep text-md font-medium rounded-full border-2 border-white shadow-[0_0_15px_var(--color-blue-shadow)] mb-10 ">
            Real Pain Points
          </div>

          <div className="flex flex-col gap-6 max-w-[436px]">
            <h2 className="text-[52px] lg:text-[52px] font-semibold text-text-main leading-[1.1] tracking-tight">
              Existing tools
              <br />
              weren't built
              <br />
              for emerging
              <br />
              markets
            </h2>
            <p className="text-slate-dark text-[16px] leading-relaxed font-medium">
              Hear from sales leaders who've burned through Apollo, ZoomInfo,
              and Cognism trying to sell into MENA and Southeast Asia.
            </p>
          </div>
        </div>

        {/* Right Content - Dark Container with Horizontal Carousel */}
        <div className="relative w-full lg:w-[1044px] pt-12 lg:pt-0 z-10 pl-4 lg:pl-10 flex lg:items-end shrink-0 overflow-hidden lg:h-full">
          <div className="bg-slate-950 w-full min-w-[400px] lg:min-w-[1500px] rounded-l-[40px] p-6 lg:p-10 border-[10px]  border-r-0 border-white shadow-2xl h-[700px] flex flex-col justify-center gap-6 overflow-hidden lg:mb-10">
            <MarqueeRow items={row1} duration={40} />
            <MarqueeRow items={row2} duration={35} />
            <MarqueeRow items={row3} duration={45} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default RealPainPoints;
