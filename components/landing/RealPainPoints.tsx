import React from 'react';
import TestimonialCard from './TestimonialCard';

const testimonialData = [
  {
    name: "Marcaus Teo",
    role: "VP Sales",
    company: "Nium",
    content: "We've burned through Apollo and ZoomInfo licenses. The UAE Fintech data is a graveyard — wrong emails, outdated titles, companies that pivoted two years ago.",
    avatar: "https://i.pravatar.cc/150?u=marcaus"
  },
  {
    name: "Talan Septimus",
    role: "Sales Director",
    company: "Razorpay",
    content: "We've burned through Apollo and ZoomInfo licenses. The UAE Fintech data is a graveyard — wrong emails, outdated titles, companies that pivoted two years ago.",
    avatar: "https://i.pravatar.cc/150?u=talan"
  },
  {
    name: "Jocelyn Kenter",
    role: "Growth Lead",
    company: "Funding Societies",
    content: "We've burned through Apollo and ZoomInfo licenses. The UAE Fintech data is a graveyard — wrong emails, outdated titles, companies that pivoted two years ago.",
    avatar: "https://i.pravatar.cc/150?u=jocelyn"
  },
  {
    name: "Zain Septimus",
    role: "Head of BD",
    company: "Sarwa",
    content: "We've burned through Apollo and ZoomInfo licenses. The UAE Fintech data is a graveyard — wrong emails, outdated titles, companies that pivoted two years ago.",
    avatar: "https://i.pravatar.cc/150?u=zain"
  },
  {
    name: "Paityn Vaccaro",
    role: "Co-founder",
    company: "Propeller",
    content: "We've burned through Apollo and ZoomInfo licenses. The UAE Fintech data is a graveyard — wrong emails, outdated titles, companies that pivoted two years ago.",
    avatar: "https://i.pravatar.cc/150?u=paityn"
  },
  {
    name: "Cristofer Curtis",
    role: "SDR Manager",
    company: "Tabby",
    content: "We've burned through Apollo and ZoomInfo licenses. The UAE Fintech data is a graveyard — wrong emails, outdated titles, companies that pivoted two years ago.",
    avatar: "https://i.pravatar.cc/150?u=cristofer"
  }
];

const RealPainPoints = () => {
  return (
    <section className="relative min-h-[800px] flex flex-col lg:flex-row items-center overflow-hidden bg-linear-to-br from-dashboard-bg to-white py-12 lg:py-0">
      {/* Grid Background Layer */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      
      {/* Left Content */}
      <div className="w-full lg:w-1/2 px-8 lg:px-24 py-16 lg:py-32 flex flex-col items-start gap-8 z-10">
        <div className="px-4 py-1.5 bg-white/50 backdrop-blur-sm border border-bg-pale rounded-full">
          <span className="text-primary-blue text-sm font-bold tracking-tight">Real Pain Points</span>
        </div>
        
        <div className="flex flex-col gap-6 max-w-lg">
          <h2 className="text-5xl lg:text-7xl font-bold text-text-main leading-[0.95] tracking-tight">
            Existing tools weren't built for emerging markets
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed font-medium">
            Hear from sales leaders who've burned through Apollo, ZoomInfo, and Cognism trying to sell into MENA and Southeast Asia.
          </p>
        </div>
      </div>

      {/* Right Content - Dark Container */}
      <div className="w-full lg:w-1/2 px-4 lg:px-12 py-12 lg:py-24 z-10">
        <div className="bg-[#0B0C0E] w-full rounded-[40px] p-4 lg:p-8 border-4 border-white inline-block shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {testimonialData.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                {...testimonial}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealPainPoints;
