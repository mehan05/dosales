'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiSparkles, HiArrowRight, HiOutlineSave, HiChevronDown, HiViewGrid, HiCreditCard } from 'react-icons/hi';
import { RiListCheck } from 'react-icons/ri';

const DiscoverySection = () => {
  const [showLeads, setShowLeads] = useState(false);

  const leads = [
    { name: 'David Kim', title: 'CEO', company: 'Axe Infinity', size: '201-500 Emps', tier: 'HOT', score: 94 },
    { name: 'Priya Nair', title: 'CFO', company: 'Axe Infinity', size: '201-500 Emps', tier: 'HOT', score: 89 },
    { name: 'Marcus Oei', title: 'Director of Engineering', company: 'Revolut Ltd.', size: 'Fintech & Digital Finance', tier: 'HOT', score: 86 },
    { name: 'Zoe Serova', title: 'Head of Technology', company: 'Revolut Ltd.', size: 'Fintech & Digital Finance', tier: 'HOT', score: 74 },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1700px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 items-center gap-16">
        
        {/* Left Side: Card UI */}
        <div className="relative lg:col-span-8">
          <div className="relative rounded-[40px] p-5 bg-dashboard-outline/30 shadow-2xl transition-all border-8 border-white">
            <div className="bg-white rounded-[32px] p-8 border border-blue-50/50 min-h-[500px] flex flex-col">
              
              <AnimatePresence mode="wait">
                {!showLeads ? (
                  <motion.div
                    key="search"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col h-full"
                  >
                    <h2 className="text-2xl font-bold text-slate-800 mb-8">Discovery Search</h2>
                    
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Target Company</label>
                        <input 
                          type="text" 
                          placeholder="e.g. Stripe, Coinbase" 
                          className="w-full bg-slate-50/50 border border-slate-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-blue/20 transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Job Titles</label>
                        <input 
                          type="text" 
                          placeholder="CTO, VP Engineering" 
                          className="w-full bg-slate-50/50 border border-slate-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-blue/20 transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Location</label>
                        <input 
                          type="text" 
                          placeholder="San Francisco, London" 
                          className="w-full bg-slate-50/50 border border-slate-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-blue/20 transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Industry</label>
                        <input 
                          type="text" 
                          placeholder="Fintech, SaaS" 
                          className="w-full bg-slate-50/50 border border-slate-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-blue/20 transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Company Size</label>
                        <input 
                          type="text" 
                          placeholder="50-200" 
                          className="w-full bg-slate-50/50 border border-slate-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-blue/20 transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Max Results</label>
                        <input 
                          type="text" 
                          placeholder="25" 
                          className="w-full bg-slate-50/50 border border-slate-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-blue/20 transition-all"
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-3 mb-10">
                      <div className="w-4 h-4 rounded bg-slate-100 border border-slate-200"></div>
                      <span className="text-xs font-medium text-slate-500 italic">Auto-enrich discovered leads</span>
                    </div>

                    <div className="flex items-center gap-3 mt-auto">
                      <button 
                        onClick={() => setShowLeads(true)}
                        className="bg-[#0085C9] text-white px-6 py-3 rounded-xl font-bold text-xs flex items-center gap-2 hover:bg-[#0071ad] transition-all shadow-lg shadow-blue-500/20 active:scale-95"
                      >
                        <HiSparkles className="text-sm" />
                        RUN DISCOVERY
                      </button>
                      <button className="bg-[#1E293B] text-white px-4 py-3 rounded-xl font-bold text-xs flex items-center gap-2 hover:bg-slate-800 transition-all active:scale-95">
                        0 <HiChevronDown />
                      </button>
                      <button className="bg-white text-slate-600 border border-slate-200 px-6 py-3 rounded-xl font-bold text-xs flex items-center gap-2 hover:bg-slate-50 transition-all active:scale-95">
                        <HiOutlineSave className="text-sm" />
                        SAVE PRESET
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="leads"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col h-full w-full"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h2 className="text-2xl font-bold text-slate-800">Leads</h2>
                        <p className="text-sm text-slate-400 mt-1 italic">0 of 6 leads</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg text-xs font-semibold text-slate-600">
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
                      <table className="w-full">
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
                                <p className="text-sm font-bold text-slate-800">{lead.name}</p>
                                <p className="text-xs text-slate-400">{lead.title}</p>
                              </td>
                              <td className="py-4">
                                <p className="text-sm font-bold text-slate-800">{lead.company}</p>
                                <p className="text-xs text-slate-400">{lead.size}</p>
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
                    
                    <button 
                      onClick={() => setShowLeads(false)}
                      className="mt-6 text-xs font-bold text-slate-400 hover:text-slate-600 transition-colors self-start flex items-center gap-1"
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
        <div className="flex flex-col items-start lg:col-span-4">
          <div className="px-4 py-1 bg-gradient-to-r from-[#C5E7F7] to-[#F4F9FB] to-70% text-xs font-bold rounded-full border border-blue-100 mb-6 uppercase tracking-wider">
            AI Outbound Agent
          </div>
          <h2 className="text-5xl text-6xl font-semibold text-slate-900 mb-4 leading-[1.1] tracking-tight">
            From Ideal Prospects to Booked Meetings <span className='text-md'>—</span> Automatically
          </h2>
          <p className="text-lg text-[#4A5565] font-light leading-relaxed ">
            From ICP targeting to follow-ups, DoSales handles the entire outbound process. So your team spends time closing, not chasing.
          </p>
        </div>

      </div>
    </section>
  );
};

export default DiscoverySection;
