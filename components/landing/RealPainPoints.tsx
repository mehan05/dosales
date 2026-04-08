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
  direction = "marqueeRight",
}: {
  items: typeof testimonialData;
  duration?: number;
  direction?: "marqueeLeft" | "marqueeRight";
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
          animation: `${direction} ${duration}s linear infinite`,
          animationPlayState: isPaused ? "paused" : "running",
          display: "inherit",
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
    <div className="py-6 lg:px-8 xs:py-5 w-full overflow-hidden ">
      <section className="  relative w-full mx-auto rounded-[40px] h-auto lg:h-[898px] flex flex-col lg:flex-row items-center overflow-hidden bg-dashboard-bg py-12 lg:py-0 border border-dashboard-outline/50 shadow-sm ">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-white/60 blur-[100px] rounded-full -translate-x-1/4 -translate-y-1/4 z-0 pointer-events-none" />

        <div className="absolute w-full h-full max-w-[436px] max-h-[430px] top-0 left-5 z-0">
          <GridBackground className="text-black overflow-hidden" />
        </div>

        {/* Left Content */}
        <div className="relative w-full lg:w-[45%] px-12 lg:px-24 pb-8 lg:pt-10 lg:pb-32 flex flex-col items-start  z-10 lg:self-start">
          <div className="w-auto h-8 px-3.5 py-1.25 bg-linear-to-r from-[#C5E7F7] to-[#F4F9FB] text-blue-deep text-sm font-medium rounded-[30px] border-[1.5px] border-white shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05)] flex items-center justify-center gap-2.5 mb-10">
            Real Pain Points
          </div>

          <div className="flex flex-col gap-6 max-w-[436px]">
            <h2 className="text-[38px] lg:text-[52px] font-semibold text-text-main leading-[1.1] tracking-tight">
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
        <div className="relative w-full lg:w-[1044px] pt-12  mb-10 lg:pt-0 z-10 px-4 lg:px-0 lg:pl-10 flex lg:items-end shrink-0 overflow-hidden lg:h-full">

             <div className="bg-slate-950 w-full min-w-[300px] lg:min-w-[1200px] rounded-l-[40px] p-4 lg:p-10 border-4 border-r-0 border-white shadow-2xl h-[700px] flex flex-col justify-center gap-6 overflow-hidden">
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
