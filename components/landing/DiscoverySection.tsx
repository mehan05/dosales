"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  HiSparkles,
  HiArrowRight,
  HiOutlineSave,
  HiChevronDown,
  HiViewGrid,
  HiCreditCard,
} from "react-icons/hi";
import { DiscoveryData } from "@/types/strapi";

interface DiscoverySectionProps {
  data?: DiscoveryData;
}

const DiscoverySearchCard = ({
  onRunDiscovery,
  isMobile = false,
  values = {},
  isAutoClicking = false,
}: {
  onRunDiscovery?: () => void;
  isMobile?: boolean;
  values?: Record<string, string>;
  isAutoClicking?: boolean;
}) => (
  <div className="flex flex-col h-full">
    <h3 className="text-2xl font-bold text-slate-800 mb-8">Discovery Search</h3>

    <div className="grid grid-cols-2 gap-x-6 gap-y-4 xs:gap-6 mb-8">
      {[
        {
          id: "target_company",
          label: "Target Company",
          placeholder: "e.g. Stripe, Coinbase",
        },
        {
          id: "job_titles",
          label: "Job Titles",
          placeholder: "CTO, VP Engineering",
        },
        {
          id: "location",
          label: "Location",
          placeholder: "San Francisco, London",
        },
        { id: "industry", label: "Industry", placeholder: "Fintech, SaaS" },
        { id: "company_size", label: "Company Size", placeholder: "50-200" },
        { id: "max_results", label: "Max Results", placeholder: "25" },
      ].map((field) => (
        <div key={field.id} className="space-y-2.5">
          <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-0.5">
            {field.label}
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder={field.placeholder}
              value={values[field.id] || ""}
              readOnly
              className="w-full bg-white border border-slate-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-blue/20 transition-all placeholder:text-slate-300"
            />
            {values[field.id] && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-0.5 h-4 bg-primary-blue/40 animate-pulse"
              />
            )}
          </div>
        </div>
      ))}
    </div>

    <div className="flex items-center gap-3 mb-10">
      <div className="w-4 h-4 rounded bg-slate-100 border border-slate-200"></div>
      <span className="text-xs font-medium text-slate-500 italic">
        Auto-enrich discovered leads
      </span>
    </div>

    <div className="flex flex-wrap items-center gap-3 mt-auto">
      <motion.button
        onClick={onRunDiscovery}
        animate={
          isAutoClicking
            ? {
                scale: [1, 0.95, 1],
                backgroundColor: [
                  "var(--color-blue-accent)",
                  "var(--color-blue-accent-dark)",
                  "var(--color-blue-accent)",
                ],
              }
            : {}
        }
        transition={{ duration: 0.4 }}
        className="bg-primary-blue text-white px-6 py-3 rounded-xl font-bold text-[10px] xs:text-xs flex items-center gap-2 hover:bg-blue-deeper transition-all shadow-lg shadow-blue-500/20 active:scale-95 whitespace-nowrap"
      >
        <HiSparkles className="text-sm" />
        RUN DISCOVERY
      </motion.button>
      <button className="bg-slate-900 text-white px-4 py-3 rounded-xl font-bold text-[10px] xs:text-xs flex items-center gap-2 hover:bg-slate-800 transition-all active:scale-95">
        0 <HiChevronDown />
      </button>
      <button className="bg-white text-slate-600 border border-slate-200 px-6 py-3 rounded-xl font-bold text-[10px] xs:text-xs flex items-center gap-2 hover:bg-slate-50 transition-all active:scale-95 whitespace-nowrap">
        <HiOutlineSave className="text-sm" />
        SAVE PRESET
      </button>
    </div>
  </div>
);

const LeadsCard = ({
  onBack,
  isMobile = false,
}: {
  onBack?: () => void;
  isMobile?: boolean;
}) => {
  const leads = [
    {
      name: "David Kim",
      title: "CEO",
      company: "Axe Infinity",
      size: "201-500 Emps",
      tier: "HOT",
      score: 94,
    },
    {
      name: "Priya Nair",
      title: "CFO",
      company: "Axe Infinity",
      size: "201-500 Emps",
      tier: "HOT",
      score: 89,
    },
    {
      name: "Marcus Oei",
      title: "Director of Engineering",
      company: "Revolut Ltd.",
      size: "Fintech & Digital Finance",
      tier: "HOT",
      score: 86,
    },
    {
      name: "Priya Nair",
      title: "CFO",
      company: "Axe Infinity",
      size: "201-500 Emps",
      tier: "HOT",
      score: 89,
    },
    {
      name: "Zoe Serova",
      title: "Head of Technology",
      company: "Revolut Ltd.",
      size: "Fintech & Digital Finance",
      tier: "HOT",
      score: 74,
    },
  ];

  return (
    <div className="flex flex-col h-full w-full ">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-2xl font-bold text-slate-800">Leads</h3>
          <p className="text-sm text-slate-400 mt-1 italic">0 of 6 leads</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg text-[10px] xs:text-xs font-semibold text-slate-600 whitespace-nowrap">
            Shown <span className="text-slate-900">25</span> <HiChevronDown />
          </div>
          <div className="flex bg-slate-50 border border-slate-100 rounded-lg p-1">
            <button className="p-1.5 bg-primary-blue text-white rounded-md shadow-sm">
              <HiCreditCard className="text-sm" />
            </button>
            <button className="p-1.5 text-slate-400">
              <HiViewGrid className="text-sm" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-x-auto border border-slate-100 rounded-3xl overflow-hidden shadow-sm">
        <table className="w-full min-w-[500px] xs:min-w-0">
          <thead className="bg-slate-50/50">
            <tr className="border-b border-slate-100">
              <th className="text-left py-4 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                Name / Title
              </th>
              <th className="text-left py-4 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                Company
              </th>
              <th className="text-left py-4 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">
                Tier
              </th>
              <th className="text-left py-4 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">
                Score
              </th>
              <th className="py-4 px-4"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {leads.map((lead, idx) => (
              <tr
                key={idx}
                className="group hover:bg-slate-50/50 transition-colors"
              >
                <td className="py-4 px-4">
                  <p className="text-sm font-bold text-slate-800 whitespace-nowrap">
                    {lead.name}
                  </p>
                  <p className="text-[10px] text-slate-400">{lead.title}</p>
                </td>
                <td className="py-4 px-4">
                  <p className="text-sm font-bold text-slate-800 whitespace-nowrap">
                    {lead.company}
                  </p>
                  <p className="text-[10px] text-slate-400">{lead.size}</p>
                </td>
                <td className="py-4 px-4 text-center">
                  <span className="inline-block px-3 py-1 bg-blue-50 text-primary-blue rounded-full text-[10px] font-black tracking-wider uppercase">
                    {lead.tier}
                  </span>
                </td>
                <td className="py-4 px-4 text-center">
                  <span className="text-sm font-black text-emerald-500">
                    {lead.score}
                  </span>
                </td>
                <td className="py-4 px-4 text-right">
                  <HiArrowRight className="inline-block text-slate-300 group-hover:text-slate-400 transition-colors cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {!isMobile && (
        <button
          onClick={onBack}
          className="mt-6 text-xs font-bold text-slate-400 hover:text-slate-600 transition-colors self-start flex items-center gap-1"
        >
          ← Back to search
        </button>
      )}
    </div>
  );
};

const DiscoverySection = ({ data }: DiscoverySectionProps) => {
  const [showLeads, setShowLeads] = useState(false);
  const [fieldValues, setFieldValues] = useState<Record<string, string>>({});
  const [isAutoClicking, setIsAutoClicking] = useState(false);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.5, once: true });

  useEffect(() => {
    let isMounted = true;

    const runAutomation = async () => {
      while (isMounted && isInView) {
        // Step 1: Reset to initial state
        setShowLeads(false);
        setFieldValues({});
        setIsAutoClicking(false);

        const typeText = async (id: string, text: string) => {
          for (let i = 0; i <= text.length; i++) {
            if (!isMounted) return;
            setFieldValues((prev) => ({ ...prev, [id]: text.slice(0, i) }));
            await new Promise((r) => setTimeout(r, 30 + Math.random() * 20));
          }
        };

        if (!isMounted) break;
        await new Promise((r) => setTimeout(r, 1000)); // Initial pause

        // Step 2: Typing animation
        await Promise.all([
          typeText("target_company", "Stripe, Coinbase"),
          typeText("job_titles", "CTO, VP Engineering"),
          typeText("location", "San Francisco, London"),
          typeText("industry", "Fintech, SaaS"),
          typeText("company_size", "50-200"),
          typeText("max_results", "25"),
        ]);

        if (!isMounted) break;
        await new Promise((r) => setTimeout(r, 800)); // Wait before clicking

        // Step 3: Trigger Discovery
        setIsAutoClicking(true);
        await new Promise((r) => setTimeout(r, 600));
        if (!isMounted) break;
        setShowLeads(true);
        setIsAutoClicking(false);

        // Step 4: Show results for a period before restarting
        await new Promise((r) => setTimeout(r, 5000));
      }
    };

    if (isInView) {
      runAutomation();
    }

    return () => {
      isMounted = false;
    };
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      className=" pt-[80px]  md:pt-12 md:pt-34 pb-0 bg-white overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto px-4 xs:px-10.5 grid grid-cols-1 lg:grid-cols-12 items-start gap-12 lg:gap-16">
        {/* right Side: Card UI */}
        <div className="relative lg:col-span-8 w-full order-2 lg:order-1 p-[6px] rounded-[30px] xs:rounded-[36px] bg-linear-to-b from-dashboard-outline to-dashboard-bg">
          <div className="relative rounded-[32px] xs:rounded-[40px]   bg-grey-white transition-all w-full h-full">
            <div className="bg-grey-white rounded-[28px] xs:rounded-[32px] p-6 xs:p-8 min-h-[520px] flex flex-col w-full overflow-hidden shadow-sm">
              <AnimatePresence mode="wait" initial={false}>
                {!showLeads ? (
                  <motion.div
                    key="search"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="w-full flex flex-col h-full"
                  >
                    <DiscoverySearchCard
                      onRunDiscovery={() => setShowLeads(true)}
                      isMobile={true}
                      values={fieldValues}
                      isAutoClicking={isAutoClicking}
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key="leads"
                    initial={{ opacity: 0, x: "100%" }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: "100%" }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="w-full flex flex-col h-full"
                  >
                    <LeadsCard
                      onBack={() => setShowLeads(false)}
                      isMobile={true}
                    />

                    {/* Explicit Back for Mobile results if needed */}
                    <button
                      onClick={() => setShowLeads(false)}
                      className="mt-6 text-xs font-bold text-slate-400 hover:text-slate-600 transition-colors self-start flex items-center gap-1 xs:hidden"
                    >
                      ← Back to search
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
        {/* left Side: Content */}
        <div className="flex flex-col items-start lg:col-span-4 max-w-2xl lg:max-w-none order-1 lg:order-2 pr-[30px]">
          <div className="w-auto h-8 px-3.5 badge-gradient text-blue-deep text-sm font-medium rounded-[30px] border-[1.5px] border-white shadow-[0px_2px_4px_0px_var(--color-shadow-faint)] flex items-center justify-center gap-2.5 mb-1">
            {data?.badgeContent || "AI Outbound Agent"}
          </div>
          <h2 className="lg:text-[52px] text-[36px] lg:leading-[1.5] font-semibold text-slate-900 mb-4 xs:mb-6 tracking-tight">
            {data?.heading || "From Ideal Prospects to Booked Meetings - Automatically"}
          </h2>
          <p className="text-base font-[500] xs:text-[16px]  text-slate-dark  ">
            {data?.description || "From ICP targeting to follow-ups, DoSales handles the entire outbound process. So your team spends time closing, not chasing."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default DiscoverySection;

