'use client';

import React from 'react';
import { HiEnvelope, HiPaperAirplane, HiChatBubbleLeftEllipsis, HiBell, HiCursorArrowRays } from 'react-icons/hi2';

const Step3Outreach = () => {
  return (
    <div className="relative bg-white rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
      <div className="p-6">
        {/* Profile Card */}
        <div className="bg-white border border-gray-100 rounded-2xl p-4 mb-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 font-bold text-sm">
                SC
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-800">Sarah Chen</h4>
                <p className="text-[10px] text-gray-500">VP of Sales at TechFlow Inc</p>
              </div>
            </div>
            <span className="bg-sky-50 text-sky-600 px-2 py-1 rounded-md text-[10px] font-bold flex items-center gap-1">
              <HiCursorArrowRays className="text-[10px]" />
              High Intent
            </span>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <button className="bg-sky-600 hover:bg-sky-700 text-white py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-2 transition-all">
              <HiEnvelope /> Send Email
            </button>
            <button className="bg-white border border-gray-100 text-slate-700 py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-2 hover:bg-gray-50 transition-all">
              <HiPaperAirplane className="rotate-45" /> Add to Campaign
            </button>
          </div>
        </div>

        {/* Message Preview */}
        <div className="bg-gray-50/50 rounded-2xl p-4 mb-6 border border-gray-100">
          <div className="flex items-center gap-2 mb-3 text-[10px] font-black text-gray-400 uppercase tracking-widest">
            <HiChatBubbleLeftEllipsis className="text-sm" /> MESSAGE PREVIEW
          </div>
          <p className="text-[11px] font-bold text-slate-700 mb-1">Subject: Helping TechFlow boost sales efficiency</p>
          <p className="text-[11px] text-gray-500 leading-relaxed italic">
            Hi Sarah, I noticed TechFlow is scaling rapidly...
          </p>
        </div>

        {/* Outreach Activity */}
        <div className="border border-gray-100 rounded-2xl overflow-hidden">
          <div className="bg-gray-50/50 px-4 py-2 border-b border-gray-100">
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">OUTREACH ACTIVITY</span>
          </div>
          <div className="p-4 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500">
                  <HiChatBubbleLeftEllipsis />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold text-slate-800">Email Replied</h4>
                  <p className="text-[10px] text-gray-400">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded text-[10px] font-bold">Success</span>
                <button className="bg-sky-600 text-white px-3 py-1 rounded text-[10px] font-bold flex items-center gap-1 shadow-sm">
                  <HiBell className="text-[10px]" /> Book Meeting
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between opacity-70">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center text-sky-500">
                  <HiEnvelope />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold text-slate-800">Email Opened</h4>
                  <p className="text-[10px] text-gray-400">5 hours ago • Opened 3 times</p>
                </div>
              </div>
              <span className="bg-sky-50 text-sky-600 px-2 py-0.5 rounded text-[10px] font-bold">Engaged</span>
            </div>

            <div className="flex items-center justify-between opacity-50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-500">
                  <HiPaperAirplane className="rotate-45" />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold text-slate-800">Email Sent</h4>
                  <p className="text-[10px] text-gray-400">Yesterday at 9:30 AM</p>
                </div>
              </div>
              <span className="bg-gray-50 text-gray-500 px-2 py-0.5 rounded text-[10px] font-bold">Delivered</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3Outreach;
