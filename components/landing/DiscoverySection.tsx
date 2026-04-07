'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiSparkles, HiArrowRight, HiOutlineSave, HiChevronDown, HiViewGrid, HiCreditCard } from 'react-icons/hi';

const DiscoverySearchCard = ({ onRunDiscovery, isMobile = false }: { onRunDiscovery?: () => void, isMobile?: boolean }) => (
  <div className="flex flex-col h-full">
    <h2 className="text-2xl font-bold text-slate-800 mb-8">Discovery Search</h2>
    
    <div className="grid grid-cols-2 gap-x-6 gap-y-4 xs:gap-6 mb-8">
      {[
        { label: 'Target Company', placeholder: 'e.g. Stripe, Coinbase' },
        { label: 'Job Titles', placeholder: 'CTO, VP Engineering' },
        { label: 'Location', placeholder: 'San Francisco, London' },
        { label: 'Industry', placeholder: 'Fintech, SaaS' },
        { label: 'Company Size', placeholder: '50-200' },
        { label: 'Max Results', placeholder: '25' },
      ].map((field, idx) => (
        <div key={idx} className="space-y-2">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{field.label}</label>
          <input 
            type="text" 
            placeholder={field.placeholder} 
            className="w-full bg-slate-50/50 border border-slate-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-blue/20 transition-all placeholder:text-slate-300"
          />
        </div>
      ))}
    </div>

    <div className="flex items-center gap-3 mb-10">
      <div className="w-4 h-4 rounded bg-slate-100 border border-slate-200"></div>
      <span className="text-xs font-medium text-slate-500 italic">Auto-enrich discovered leads</span>
    </div>

    <div className="flex flex-wrap items-center gap-3 mt-auto">
      <button 
        onClick={onRunDiscovery}
        className="bg-[#0085C9] text-white px-6 py-3 rounded-xl font-bold text-[10px] xs:text-xs flex items-center gap-2 hover:bg-[#0071ad] transition-all shadow-lg shadow-blue-500/20 active:scale-95 whitespace-nowrap"
      >
        <HiSparkles className="text-sm" />
        RUN DISCOVERY
      </button>
      <button className="bg-[#1E293B] text-white px-4 py-3 rounded-xl font-bold text-[10px] xs:text-xs flex items-center gap-2 hover:bg-slate-800 transition-all active:scale-95">
        0 <HiChevronDown />
      </button>
      <button className="bg-white text-slate-600 border border-slate-200 px-6 py-3 rounded-xl font-bold text-[10px] xs:text-xs flex items-center gap-2 hover:bg-slate-50 transition-all active:scale-95 whitespace-nowrap">
        <HiOutlineSave className="text-sm" />
        SAVE PRESET
      </button>
    </div>
  </div>
);

const LeadsCard = ({ onBack, isMobile = false }: { onBack?: () => void, isMobile?: boolean }) => {
  const leads = [
    { name: 'David Kim', title: 'CEO', company: 'Axe Infinity', size: '201-500 Emps', tier: 'HOT', score: 94 },
    { name: 'Priya Nair', title: 'CFO', company: 'Axe Infinity', size: '201-500 Emps', tier: 'HOT', score: 89 },
    { name: 'Marcus Oei', title: 'Director of Engineering', company: 'Revolut Ltd.', size: 'Fintech & Digital Finance', tier: 'HOT', score: 86 },
    { name: 'Zoe Serova', title: 'Head of Technology', company: 'Revolut Ltd.', size: 'Fintech & Digital Finance', tier: 'HOT', score: 74 },
  ];

  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Leads</h2>
          <p className="text-sm text-slate-400 mt-1 italic">0 of 6 leads</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg text-[10px] xs:text-xs font-semibold text-slate-600 whitespace-nowrap">
            Shown <span className="text-slate-900">25</span> <HiChevronDown />
          </div>
          <div className="flex bg-slate-50 border border-slate-100 rounded-lg p-1">
            <button className="p-1.5 bg-[#0085C9] text-white rounded-md shadow-sm">
              <HiCreditCard className="text-sm" />
            </button>
            <button className="p-1.5 text-slate-400">
              <HiViewGrid className="text-sm" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-x-auto">
        <table className="w-full min-w-[500px] xs:min-w-0">
          <thead>
            <tr className="border-b border-slate-100">
              <th className="text-left py-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Name / Title</th>
              <th className="text-left py-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Company</th>
              <th className="text-left py-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">Tier</th>
              <th className="text-left py-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">Score</th>
              <th className="py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {leads.map((lead, idx) => (
              <tr key={idx} className="group hover:bg-slate-50/50 transition-colors">
                <td className="py-4">
                  <p className="text-sm font-bold text-slate-800 whitespace-nowrap">{lead.name}</p>
                  <p className="text-[10px] text-slate-400">{lead.title}</p>
                </td>
                <td className="py-4">
                  <p className="text-sm font-bold text-slate-800 whitespace-nowrap">{lead.company}</p>
                  <p className="text-[10px] text-slate-400">{lead.size}</p>
                </td>
                <td className="py-4 text-center">
                  <span className="inline-block px-3 py-1 bg-blue-50 text-[#0085C9] rounded-full text-[10px] font-black tracking-wider uppercase">
                    {lead.tier}
                  </span>
                </td>
                <td className="py-4 text-center">
                  <span className="text-sm font-black text-emerald-500">{lead.score}</span>
                </td>
                <td className="py-4 text-right">
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

const DiscoverySection = () => {
  const [showLeads, setShowLeads] = useState(false);

  return (
    <section className="py-12 xs:py-24 bg-white overflow-hidden">
      <div className="max-w-[1700px] mx-auto px-4 xs:px-6 grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-16">
        
        {/* Left Side: Card UI */}
        <div className="relative lg:col-span-8 w-full">
          <div className="relative rounded-[32px] xs:rounded-[40px] p-1.5 xs:p-5 bg-dashboard-outline/30 shadow-2xl transition-all border-4 xs:border-8 border-white w-full">
            <div className="bg-white rounded-[28px] xs:rounded-[32px] p-6 xs:p-8 border border-blue-50/50 min-h-[460px] xs:min-h-[500px] flex flex-col w-full overflow-hidden">
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
                    <DiscoverySearchCard onRunDiscovery={() => setShowLeads(true)} isMobile={true} />
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
                    <LeadsCard onBack={() => setShowLeads(false)} isMobile={true} />
                    
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

        {/* Right Side: Content */}
        <div className="flex flex-col items-start lg:col-span-4 max-w-2xl lg:max-w-none">
          <div className="px-5 py-2 xs:px-6 xs:py-2 bg-gradient-to-r from-[#D6EFFF] to-[#F5FBFF] text-[#006699] text-sm xs:text-md font-medium rounded-full border-2 border-white shadow-[0_0_15px_rgba(0,102,153,0.1)] mb-8 xs:mb-10 whitespace-nowrap">
            AI Outbound Agent
          </div>
          <h2 className="text-3xl xs:text-5xl lg:text-6xl font-semibold text-slate-900 mb-4 xs:mb-6 leading-[1.1] tracking-tight">
            From Ideal Prospects to Booked Meetings <span className='text-md'>—</span> Automatically
          </h2>
          <p className="text-base xs:text-lg text-[#4A5565] font-light leading-relaxed">
            From ICP targeting to follow-ups, DoSales handles the entire outbound process. So your team spends time closing, not chasing.
          </p>
        </div>

      </div>
    </section>
  );
};

export default DiscoverySection;
