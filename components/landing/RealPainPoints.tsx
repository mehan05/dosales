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

const RealPainPoints = () => {
  return (
    <div className="px-4 py-6 xs:py-5 w-full overflow-hidden">
      <section className="relative max-w-[1700px]  mx-auto rounded-[40px] min-h-[800px] flex flex-col lg:flex-row items-center overflow-hidden bg-dashboard-bg py-12 lg:py-0 border border-dashboard-outline/50 shadow-sm">
        <GridBackground className="text-black overflow-hidden" />

        {/* Left Content */}
        <div className="relative w-full lg:w-[45%] px-8 lg:px-24 py-16 lg:py-32 flex flex-col items-start gap-8 z-10">
          <div className="px-6 py-2 bg-gradient-to-r from-[#D6EFFF] to-[#F5FBFF] text-[#006699] text-md font-medium rounded-full border-2 border-white shadow-[0_0_15px_rgba(0,102,153,0.1)] mb-10 ">
            Real Pain Points
          </div>

          <div className="flex flex-col gap-6 max-w-lg">
            <h2 className="text-[44px] lg:text-[64px] font-semibold text-text-main leading-[1.1] tracking-tight">
              Existing tools
              <br />
              weren't built
              <br />
              for emerging
              <br />
              markets
            </h2>
            <p className="text-[#4A5565] text-md leading-relaxed font-medium">
              Hear from sales leaders who've burned through Apollo, ZoomInfo,
              and Cognism trying to sell into MENA and Southeast Asia.
            </p>
          </div>
        </div>

        {/* Right Content - Dark Container */}
        <div className="relative w-full lg:w-[55%] pt-12 lg:pt-0 z-10 pl-4 lg:pl-10 relative flex items-center shrink-0">
          <div className="bg-[#0B0C0E] w-full min-w-[300px] lg:min-w-[1200px] rounded-l-[40px] p-6 lg:p-10 border-4 border-r-0 border-white shadow-2xl h-[700px] flex items-center">
            <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4 w-full h-full max-h-full overflow-hidden">
              {testimonialData.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RealPainPoints;
