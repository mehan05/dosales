import React from "react";
import Image from "next/image";

const WhyDoSales = () => {
  return (
    <section className="relative xs:pt-4 overflow-hidden xs:mt-0 mt-0 flex flex-col min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-t from-bg-pale to-blue-ghost to-50% -z-10" />
      {/* Top edge white blur for section blending - subtilized to prevent dimming content */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-linear-to-b from-white/60 via-white/20 to-transparent pointer-events-none z-0" />
      {/* Top statistics section */}
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center mb-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full text-center mb-16 ">
          <div className="flex flex-col gap-2">
            <h3 className="text-[32px] font-[500] text-heading tracking-tighter ">
              50 LEADS/MO
            </h3>
            <p className="text-slate-dark  text-[16px] ">FREE FOREVER</p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-[32px] font-[500] text-heading ">2 MIN</h3>
            <p className="text-slate-dark  text-[16px] ">SETUP</p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-[32px] font-[500] text-heading ">NO CARD</h3>
            <p className="text-slate-dark  text-[16px] ">REQUIRED</p>
          </div>
        </div>

        <button className="bg-black text-white w-35 h-13 rounded-[10px] flex items-center justify-center gap-2.5 p-4 font-bold text-sm hover:bg-gray-900 transition-all shadow-lg active:scale-95 mb-6">
          REGISTER NOW
        </button>

        <div className="flex items-center gap-2">
          <p className="text-[14px] text-gray-500 font-medium leading-none">
            Loved by 132+ existing users
          </p>
          <div className="flex items-center gap-0.5">
            <svg width="0" height="0" className="absolute">
              <defs>
                <linearGradient
                  id="star-gradient"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="white" />
                  <stop offset="100%" stopColor="var(--color-gold)" />
                </linearGradient>
              </defs>
            </svg>
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="url(#star-gradient)"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0"
              >
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            ))}
          </div>
        </div>
      </div>

      <div
        className="bg-linear-to-b flex-1 pb-32 from-blue-ghost to-blue-ghost to-30% md:pt-7 w-full"
        style={{ borderRadius: "50% 50% 0 0 / 80px 80px 0 0" }}
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-col mt-15 items-center mb-16">
          <div className="w-auto h-8 px-3.5 py-1.25 badge-gradient text-blue-deep text-sm font-medium rounded-[30px] border-[1.5px] border-white shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05)] flex items-center justify-center gap-2.5 mb-5">
            {" "}
            Why DoSales
          </div>
          <h2 className="text-[36px] lg:text-[48px] font-bold text-text-main text-center max-w-4xl tracking-tight leading-tight">
            Built exclusively for your market{" "}
          </h2>
        </div>

        {/* Features Illustration Recreated in JSX */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative w-full rounded-[40px] overflow-hidden  bg-blue-ghost backdrop-blur-sm">
            {/* Card Accent Borders & Dividers handled within sections */}

            <div className="grid grid-cols-1 md:grid-cols-2 relative h-full">
              {/* Vertical divider Segment for Top Row */}
              <div
                className="absolute top-4 bottom-4 left-1/2 w-px -translate-x-1/2 hidden md:block z-10"
                style={{
                  background:
                    "linear-gradient(to bottom, var(--color-connector-blue), var(--color-connector-pale))",
                  opacity: 0.8,
                }}
              />
              {/* Top side horizontal divider */}
              <div
                className="absolute w-1/2 left-1/2 -translate-x-1/2 top-0 h-px z-10"
                style={{
                  background:
                    "linear-gradient(to right, var(--color-connector-blue), var(--color-connector-pale))",
                  opacity: 0.86,
                }}
              />

              {/* Card 1: Regional Dominance */}
              <div className="flex flex-col p-8 md:p-12 relative">
                {/* Left side stroke line */}
                <div
                  className="absolute top-50 left-0 w-px z-10 h-[300px]"
                  style={{
                    background:
                      "linear-gradient(to bottom, var(--color-connector-blue), var(--color-connector-pale))",
                    opacity: 1,
                  }}
                />

                <div className="flex-1 flex items-center justify-center mb-10 h-64">
                  <Image
                    src="/assets/svg/whyDoSales/refionalDominance.svg"
                    alt="Regional Dominance"
                    width={400}
                    height={300}
                    className="w-full h-auto max-w-[420px]"
                  />
                </div>
                <div>
                  <h3 className="text-[20px] font-bold text-heading mb-4 tracking-tight">
                    Regional Dominance
                  </h3>
                  <p className="text-text-main text-[16px] leading-[1.6] max-w-md">
                    Built for MENA & Southeast Asia from day one — not bolted on
                    as an afterthought. Coverage where Apollo and ZoomInfo have
                    blind spots.
                  </p>
                </div>
              </div>

              {/* Card 2: Vertical Intelligence */}
              <div className="flex flex-col p-8 md:p-12 relative">
                {/* Right side stroke line */}
                <div
                  className="absolute inset-y-0 right-0 w-px z-10"
                  style={{
                    background:
                      "linear-gradient(to bottom, var(--color-connector-blue), var(--color-connector-pale))",
                    opacity: 1,
                  }}
                />
                <div className="flex-1 flex items-center justify-center mb-10 h-64">
                  <Image
                    src="/assets/svg/whyDoSales/verifyIntelligence.svg"
                    alt="Vertical Intelligence"
                    width={400}
                    height={300}
                    className="w-full h-auto max-w-[420px]"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-heading mb-4 tracking-tight">
                    Vertical Intelligence
                  </h3>
                  <p className="text-text-main text-[16px] leading-[1.6] max-w-md">
                    Deep data models for Fintech, PropTech, Trade Finance, and
                    Supply Chain. Industry-specific signals that horizontal
                    tools miss entirely.
                  </p>
                </div>
              </div>
            </div>

            {/* Middle horizontal divider - Separates top row from AI Autonomy */}
            <div
              className="relative  left-30 h-px w-full z-10"
              style={{
                background:
                  "linear-gradient(to right, var(--color-connector-blue), var(--color-connector-pale))",
                opacity: 0.5,
              }}
            />

            {/* Card 3: AI Autonomy (Refined Size) */}
            <div className="flex flex-col md:flex-row p-6 md:p-10 items-center relative overflow-hidden">
              {/* Vertical divider Segment for Bottom Section */}

              {/* Right side stroke line */}
              <div
                className="absolute inset-y-0 right-0 w-px z-10"
                style={{
                  background:
                    "linear-gradient(to bottom, var(--color-connector-blue), var(--color-connector-pale))",
                  opacity: 1,
                }}
              />
              <div className="md:w-[50%] flex items-center justify-center mb-8 md:mb-0 h-64 md:h-80">
                <Image
                  src="/assets/svg/whyDoSales/aiAutonomy.svg"
                  alt="AI Autonomy"
                  width={700}
                  height={400}
                  className="w-full h-auto max-w-[320px] md:max-w-162.5 scale-105 md:scale-110"
                />
              </div>
              {/* Bottom side horizontal divider */}
              <div
                className="absolute w-1/2 left-1/2 -translate-x-1/2 bottom-0 h-px z-10"
                style={{
                  background:
                    "linear-gradient(to right, var(--color-connector-blue), var(--color-connector-pale))",
                  opacity: 0.86,
                }}
              />
              <div className="md:w-[40%] md:pl-12">
                <h3 className="text-3xl font-bold text-heading mb-4 tracking-tight">
                  AI Autonomy
                </h3>
                <p className="text-text-main text-[18px] leading-normal max-w-lg font-medium">
                  Autonomous prospecting that finds, enriches, scores, and
                  engages leads. Your AI SDR works 24/7 while your team focuses
                  on closing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDoSales;
