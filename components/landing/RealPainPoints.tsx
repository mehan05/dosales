"use client";
import React from "react";
import TestimonialCard from "./TestimonialCard";
import GridBackground from "../ui/GridBackground";
import { RealPainPointData } from "@/types/strapi";

interface RealPainPointsProps {
  data?: RealPainPointData;
}

const MarqueeRow = ({
  items,
  duration = 30,
  direction = "marqueeRight",
  className = "",
}: {
  items: any[];
  duration?: number;
  direction?: "marqueeLeft" | "marqueeRight";
  className?: string;
}) => {
  const [isPaused, setIsPaused] = React.useState(false);

  if (!items || items.length === 0) return null;

  return (
    <div
      className={`flex overflow-hidden ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="flex gap-4 pr-4 h-full "
        style={{
          width: "fit-content",
          animation: `${direction} ${duration}s linear infinite`,
          animationPlayState: isPaused ? "paused" : "running",
          display: "inherit",
        }}
      >
        {/* We repeat the items multiple times to ensure enough width for a seamless loop on large screens */}
        {(() => {
          const repetitions = Math.max(2, Math.ceil(12 / items.length)); // Ensure at least 12 items total for seamlessness
          const loopedItems = Array(repetitions * 2).fill(items).flat();
          return loopedItems.map((testimonial, idx) => (
            <div key={idx} className="w-[312px] lg:w-[350px] min-w-[312px] min-h-[186px] shrink-0 h-full " >
              <TestimonialCard 
                role={testimonial.role}
                feedback={testimonial.feedback}
                profile={testimonial.profile?.url}
              />
            </div>
          ));
        })()}
      </div>
    </div>
  );
};

const RealPainPoints = ({ data }: RealPainPointsProps) => {
  const rawTestimonials = data?.testimonalCards || [];
  
  // Ensure we have at least 3 items to fill all three rows
  let testimonials = [...rawTestimonials];
  if (testimonials.length > 0) {
    while (testimonials.length < 3) {
      testimonials = [...testimonials, ...rawTestimonials];
    }
  }

  // Split data into 3 rows for more visual interest
  const itemsPerRow = Math.ceil(testimonials.length / 3);
  const row1 = testimonials.slice(0, itemsPerRow);
  const row2 = testimonials.slice(itemsPerRow, itemsPerRow * 2);
  const row3 = testimonials.slice(itemsPerRow * 2);

  return (
    <div className="pt-[80px] md:pt-[132px] pb-6 lg:px-8 xs:pb-5 w-full overflow-hidden  ">
      <section className="relative w-auto ml-5 mr-2.5 md:mx-auto rounded-[40px] h-auto lg:h-[898px]   flex flex-col lg:flex-row items-center overflow-hidden bg-dashboard-bg py-12 lg:py-0 border border-dashboard-outline/50 shadow-sm ">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-white/60 blur-[100px] rounded-full -translate-x-1/4 -translate-y-1/4 z-0 pointer-events-none"/>

        <div className="absolute w-full h-full max-w-[436px] max-h-[430px] top-0 left-5 z-0">
          <GridBackground className="text-black overflow-hidden" />
        </div>

        {/* Left Content */}
        <div className="relative w-full lg:w-[45%] px-12 lg:px-[64px] pb-8 lg:pt-[64px] lg:pb-32 flex flex-col items-start  z-10 lg:self-start">
          <div className="  w-auto h-8 px-3.5 py-1.25 badge-gradient text-blue-deep text-sm font-medium rounded-[30px] border-[1.5px] border-white shadow-[0px_2px_4px_0px_var(--color-shadow-faint)] flex items-center justify-center gap-2.5 mb-10">
            {data?.badgeContent || "Real Pain Points"}
          </div>

          <div className="flex flex-col gap-6 max-w-[436px]">
            <h2 className="text-[38px] lg:text-[52px] font-semibold text-text-main leading-[1.1] tracking-tight">
              {data?.heading ? (
                <span dangerouslySetInnerHTML={{ __html: data.heading.replace(/\n/g, '<br />') }} />
              ) : (
                <>Existing tools<br />weren't built<br />for emerging<br />markets</>
              )}
            </h2>
            <p className="text-slate-dark text-[16px] leading-relaxed font-medium">
              {data?.content || "Hear from sales leaders who've burned through Apollo, ZoomInfo, and Cognism trying to sell into MENA and Southeast Asia."}
            </p>
          </div>
        </div>

        {/* Right Content - Dark Container with Horizontal Carousel */}
        <div className=" relative w-full lg:w-[1044px] z-10 px-4  lg:px-0 lg:pl-10 flex lg:items-end shrink-0 overflow-hidden lg:h-full ">
             <div 
               className=" w-full min-w-[300px] lg:min-w-[1200px] rounded-l-[50px] p-2 pt-5 pb-5 border-[16px] border-r-0 border-transparent h-[680px] flex flex-col justify-center gap-2 overflow-hidden mb-20px lg:mb-[40px] ring-2 ring-white"
               style={{ 
                 background: ` linear-gradient(var(--color-slate-950), var(--color-slate-950)) padding-box, linear-gradient(to bottom, #C5E6F6, #F1FAFF) border-box`,
               }}
             >
            {row1.length > 0 && <MarqueeRow items={row1} duration={50} className="flex-1 " />}
            {row2.length > 0 && <MarqueeRow items={row2} duration={40} className="flex-1" />}
            {row3.length > 0 && <MarqueeRow items={row3} duration={60} className="flex-1" />}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RealPainPoints;
