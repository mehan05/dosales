'use client';

import React from 'react';
import { HiCheckCircle } from 'react-icons/hi2';
import { TbSelector } from 'react-icons/tb';

const Step2Enrichment = () => {
  const enrichmentLeads = [
    { name: 'Sarah Chen', role: 'VP of Sales', company: 'TechFlow Inc', industry: 'SaaS • 750 emp', email: 's.chen@techflow.io', score: 92, verified: true },
    { name: 'Michael Rodriguez', role: 'Head of Sales', company: 'DataSync Pro', industry: 'Analytics • 350 emp', email: 'm.rodriguez@datasync.com', score: 85, verified: true },
    { name: 'Emily Watson', role: 'Sales Director', company: 'CloudVista', industry: 'Cloud • 1200 emp', email: 'e.watson@cloudvista.io', score: 82, verified: true },
    { name: 'Steve Harris', role: 'CEO', company: 'GenAgent', industry: 'Analytics • 460 emp', email: 'steve@genagent.ai', score: 81, verified: true },
    { name: 'Amanda Lucas', role: 'Founder', company: 'CloudHaura', industry: 'Cloud • 500 emp', email: 'amanda@cloudhaura.com', score: 78, verified: true },
  ];

  return (
    <div className="relative bg-white rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-gray-900">Lead Enrichment Results</h3>
          <span className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            3 Verified
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="pb-3 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                  <div className="flex items-center gap-1 cursor-pointer hover:text-gray-600 transition-colors">
                    NAME <TbSelector className="text-gray-300" />
                  </div>
                </th>
                <th className="pb-3 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                  <div className="flex items-center gap-1 cursor-pointer hover:text-gray-600 transition-colors">
                    COMPANY <TbSelector className="text-gray-300" />
                  </div>
                </th>
                <th className="pb-3 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                  <div className="flex items-center gap-1 cursor-pointer hover:text-gray-600 transition-colors">
                    EMAIL <TbSelector className="text-gray-300" />
                  </div>
                </th>
                <th className="pb-3 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                  <div className="flex items-center gap-1 cursor-pointer hover:text-gray-600 transition-colors">
                    SCORE <TbSelector className="text-gray-300" />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {enrichmentLeads.map((lead, idx) => (
                <tr key={idx} className={`group hover:bg-sky-50 transition-colors ${idx === 0 ? 'bg-sky-50/50 relative' : ''}`}>
                  {idx === 0 && <td className="absolute left-0 top-0 bottom-0 w-1 bg-sky-500 rounded-full" />}
                  <td className="py-4">
                    <h4 className="text-xs font-bold text-slate-800">{lead.name}</h4>
                    <p className="text-[10px] text-gray-500 mt-0.5">{lead.role}</p>
                  </td>
                  <td className="py-4">
                    <h4 className="text-xs font-bold text-slate-800">{lead.company}</h4>
                    <p className="text-[10px] text-gray-400 mt-0.5">{lead.industry}</p>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-gray-500 font-medium truncate max-w-30 italic">{lead.email}</span>
                      {lead.verified && <HiCheckCircle className="text-emerald-500 text-sm shrink-0" />}
                    </div>
                  </td>
                  <td className="py-4">
                    <span className="text-sm font-black text-emerald-500">{lead.score}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Step2Enrichment;
