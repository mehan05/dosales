'use client';

import React from 'react';
import { HiMagnifyingGlass, HiChevronDown, HiArrowRight } from 'react-icons/hi2';
import { RiBriefcase4Line } from 'react-icons/ri';
import { MdOutlineLocationOn, MdDomain } from 'react-icons/md';

const Step1Search = () => {
  const leads = [
    { name: 'Sarah Chen', role: 'VP of Sales', company: 'TechFlow Inc', employees: '500-1000 employees' },
    { name: 'Michael Rodriguez', role: 'Head of Sales', company: 'DataSync Pro', employees: '200-500 employees' },
    { name: 'Emily Watson', role: 'Sales Director', company: 'CloudVista', employees: '1000+ employees' },
    { name: 'Amanda Lucas', role: 'Founder', company: 'Markus Lucas', employees: '3000+ employees' },
    { name: 'Natasha Wheeler', role: 'VP of Sales', company: 'Wheels Inc', employees: '6000+ employees' },
  ];

  return (
    <div className="relative bg-white rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
      <div className="p-8">
        {/* Search Bar */}
        <div className="relative mb-6">
          <HiMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
          <input 
            type="text" 
            placeholder="VP of Sales" 
            className="w-full bg-gray-50/50 border border-gray-100 rounded-xl pl-12 pr-4 py-4 text-gray-900 font-medium placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/10 transition-all text-sm"
            readOnly
          />
        </div>

        {/* Filters Row */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          <button className="flex items-center justify-between px-4 py-3 bg-white border border-gray-100 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-2 overflow-hidden">
              <MdOutlineLocationOn className="shrink-0 text-gray-400" />
              <span className="truncate">San Francisco</span>
            </div>
            <HiChevronDown className="shrink-0" />
          </button>
          <button className="flex items-center justify-between px-4 py-3 bg-white border-2 border-blue-500/20 rounded-xl text-sm font-bold text-blue-600 shadow-sm shadow-blue-500/5 transition-all">
            <div className="flex items-center gap-2 overflow-hidden">
              <RiBriefcase4Line className="shrink-0" />
              <span className="truncate">Sales</span>
            </div>
            <HiChevronDown className="shrink-0" />
          </button>
          <button className="flex items-center justify-between px-4 py-3 bg-white border border-gray-100 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-2 overflow-hidden">
              <MdDomain className="shrink-0 text-gray-400" />
              <span className="truncate">SaaS</span>
            </div>
            <HiChevronDown className="shrink-0" />
          </button>
        </div>

        {/* List Header */}
        <div className="flex justify-between items-center mb-4 px-2">
          <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">2,847 LEADS FOUND</span>
          <button className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1">
            View All <HiArrowRight />
          </button>
        </div>

        {/* Lead List */}
        <div className="space-y-1">
          {leads.map((lead, idx) => (
            <div key={idx} className="flex justify-between items-center py-4 border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors px-2 rounded-lg group/row">
              <div>
                <h4 className="text-sm font-bold text-slate-800">{lead.name}</h4>
                <p className="text-xs text-gray-500 mt-0.5">{lead.role}</p>
              </div>
              <div className="text-right">
                <h4 className="text-sm font-bold text-slate-800">{lead.company}</h4>
                <p className="text-[10px] text-gray-400 mt-0.5 font-medium">{lead.employees}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Step1Search;
