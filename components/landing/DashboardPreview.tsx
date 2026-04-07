import React from 'react';

const DashboardPreview = () => {
  const leads = [
    { name: 'David Kim', title: 'CEO', company: 'Axe Infinity', emps: '201-500 Emps', tier: 'HOT', score: 96, status: 'NEW', added: 'Mar 18', updated: 'Mar 26' },
    { name: 'Priya Nair', title: 'CFO', company: 'Axe Infinity', emps: '201-500 Emps', tier: 'HOT', score: 94, status: 'ENRICHING', added: 'Mar 19', updated: 'Mar 28' },
    { name: 'Marcus Oei', title: 'Director of Engineering', company: 'Revolut Ltd.', emps: 'Fintech & Digital Finance', tier: 'HOT', score: 92, status: 'NEW', added: 'Mar 18', updated: 'Mar 26' },
    { name: 'Zoe Serova', title: 'Head of Technology', company: 'Revolut Ltd.', emps: 'Fintech & Digital Finance', tier: 'HOT', score: 88, status: 'NEW', added: 'Mar 19', updated: 'Mar 28' },
    { name: 'James Park', title: 'VP Product', company: 'Stripe Inc.', emps: 'Fintech & Digital Finance', tier: 'HOT', score: 83, status: 'CONTACTED', added: 'Mar 18', updated: 'Mar 26' },
    { name: 'Sarah Chen', title: 'CTO', company: 'Stripe Inc.', emps: 'Fintech & Digital Finance', tier: 'HOT', score: 74, status: 'ENRICHING', added: 'Mar 19', updated: 'Mar 28' },
    { name: 'Sarah Chen', title: 'CTO', company: 'Stripe Inc.', emps: 'Fintech & Digital Finance', tier: 'HOT', score: 74, status: 'ENRICHING', added: 'Mar 19', updated: 'Mar 28' },
    { name: 'Sarah Chen', title: 'CTO', company: 'Stripe Inc.', emps: 'Fintech & Digital Finance', tier: 'HOT', score: 74, status: 'ENRICHING', added: 'Mar 19', updated: 'Mar 28' },
  ];

  return (
    <section className="bg-white pb-32 px-4 ">
      <div className="max-w-[1500px] mx-auto pointer-events-none select-none">
        <div className="relative rounded-[40px]  p-5 bg-dashboard-outline shadow-2xl transition-all border-8 border-white">
          <div className="flex bg-white rounded-4xl overflow-hidden min-h-[850px] border border-blue-50" >
            {/* Sidebar Mockup */}
            <aside className="w-72 bg-white border-r border-blue-50/50 p-8 hidden md:flex flex-col gap-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg shadow-sm bg-[linear-gradient(135deg,#5176FC_0%,#9333EA_100%)]"></div>
                <span className="font-extrabold text-lg tracking-tight">DoSales</span>
              </div>
              
              <div className="flex flex-col gap-2 text-[14px]">
                <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 cursor-pointer text-gray-400">
                  <div className="w-5 h-5 rounded bg-gray-100 italic"></div>
                  Dashboard
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-blue-50/50 text-primary-blue font-bold cursor-pointer">
                  <div className="w-5 h-5 rounded bg-primary-blue"></div>
                  Leads
                </div>
                {[
                  'Prospecting', 'Companies', 'Opportunities', 'Sequences', 
                  'Analytics', 'Alerts', 'API Usage'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 cursor-pointer text-gray-400">
                    <div className="w-5 h-5 rounded bg-gray-100 opacity-50"></div>
                    {item}
                  </div>
                ))}
              </div>

              <div className=" flex flex-col gap-2 text-[13px] border-2 border-red-500">
                <p className="text-[10px] font-bold text-gray-300 uppercase px-3">Account</p>
                {['Billing', 'CP Profiles', 'Teams', 'Settings', 'Integrations', 'Extension'].map((item) => (
                  <div key={item} className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-50 cursor-pointer text-gray-400">
                     <div className="w-4 h-4 rounded bg-gray-100 opacity-30"></div>
                     {item}
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-8 border-t border-gray-50 flex flex-col gap-4">
                <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 cursor-pointer text-gray-400 text-[13px]">
                   <div className="w-5 h-5 rounded bg-gray-100"></div>
                   Help & Docs
                </div>
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-bg-vivid flex items-center justify-center text-white font-bold text-sm shadow-sm">SH</div>
                  <div className="flex flex-col">
                    <span className="text-[13px] font-bold text-text-main">Steve Harrington</span>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content Mockup */}
            <main className="flex-1 p-12 bg-white relative overflow-hidden">
              {/* Right side gradient overlay */}
              <div className="absolute top-0 right-0 w-[40%] h-full bg-[linear-gradient(to_left,rgba(240,249,255,1)_0%,rgba(162,223,251,0.05)_100%)] pointer-events-none"></div>
              
              <div className="relative z-10">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-12 gap-6">
                <div className="flex items-center gap-6">
                    <h3 className="text-2xl font-bold flex items-center gap-3 text-text-main">
                        <span className="text-blue-500">👥</span> Leads
                    </h3>
                    <div className="relative group text-text-main">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500">🔍</div>
                        <input 
                          type="text" 
                          placeholder="Search leads" 
                          className="pl-12 pr-6 py-3 border border-gray-100 rounded-2xl text-sm bg-slate-50/50 w-80 outline-none focus:border-blue-200 focus:bg-white transition-all shadow-sm" 
                        />
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <button className="px-6 py-3 border border-gray-200 rounded-2xl text-sm font-bold bg-white text-gray-600 hover:bg-slate-50 shadow-sm flex items-center gap-2">
                      <span className="text-gray-300">⚡</span> Filters
                    </button>
                    <button className="px-6 py-3 border border-gray-200 rounded-2xl text-sm font-bold bg-white text-gray-600 hover:bg-slate-50 shadow-sm">
                      Export CSV
                    </button>
                    <button className="px-6 py-3 bg-primary-blue text-white rounded-2xl text-sm font-bold hover:shadow-lg hover:shadow-blue-500/20 active:scale-95 transition-all">
                      Discover Leads
                    </button>
                </div>
              </div>

              <div className="flex items-center justify-between mb-6 px-2">
                <span className="text-sm font-bold text-gray-400 px-6 uppercase tracking-wider">0 of {leads.length} leads</span>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    Shown <span className="px-3 py-1 bg-slate-50 border rounded-lg text-text-main font-bold">25 <span className="text-[10px]">▼</span></span>
                  </div>
                  <div className="flex gap-1 p-1 bg-slate-100 rounded-xl">
                    <div className="px-3 py-1 bg-white rounded-lg shadow-sm text-blue-500">▦</div>
                    <div className="px-3 py-1 text-gray-300">☰</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-gray-50 text-[12px] text-gray-400 font-bold uppercase tracking-widest bg-slate-50/30">
                        <th className="px-8 py-5">Name / Title <span className="ml-1 text-[10px] opacity-30 italic">⇅</span></th>
                        <th className="px-8 py-5">Company <span className="ml-1 text-[10px] opacity-30 italic">⇅</span></th>
                        <th className="px-8 py-5 text-center">Tier <span className="ml-1 text-[10px] opacity-30 italic">⇅</span></th>
                        <th className="px-8 py-5 text-center">Score <span className="ml-1 text-[10px] opacity-30 italic">⇅</span></th>
                        <th className="px-8 py-5 text-center">Status <span className="ml-1 text-[10px] opacity-30 italic">⇅</span></th>
                        <th className="px-8 py-5">Added <span className="ml-1 text-[10px] opacity-30 italic">⇅</span></th>
                        <th className="px-8 py-5">Updated <span className="ml-1 text-[10px] opacity-30 italic">⇅</span></th>
                        <th className="px-4"></th>
                      </tr>
                    </thead>
                    <tbody className="text-[14px]">
                      {leads.map((lead, idx) => (
                        <tr key={idx} className="border-b border-gray-50 transition-all hover:bg-slate-50/80 group">
                          <td className="px-8 py-6">
                            <div className="flex flex-col gap-0.5">
                              <span className="font-bold text-text-main leading-none">{lead.name}</span>
                              <span className="text-[12px] text-gray-400 font-medium uppercase">{lead.title}</span>
                            </div>
                          </td>
                          <td className="px-8 py-6">
                            <div className="flex flex-col gap-0.5">
                              <span className="font-bold text-text-main leading-none">{lead.company}</span>
                              <span className="text-[12px] text-gray-400 font-medium">{lead.emps}</span>
                            </div>
                          </td>
                          <td className="px-8 py-6">
                            <div className="flex justify-center">
                              <span className="px-2 py-0.5 bg-blue-50 text-blue-500 text-[10px] font-black rounded italic tracking-tighter shadow-sm border border-blue-100/50">
                                {lead.tier}
                              </span>
                            </div>
                          </td>
                          <td className="px-8 py-6">
                            <div className="flex justify-center">
                              <span className={`text-[15px] font-black ${lead.score > 90 ? 'text-green-500' : 'text-gray-300'}`}>
                                {lead.score}
                              </span>
                            </div>
                          </td>
                          <td className="px-8 py-6">
                            <div className="flex justify-center">
                              <span className={`px-3 py-1.5 rounded-lg text-[9px] font-black tracking-widest uppercase shadow-sm ${
                                lead.status === 'NEW' ? 'bg-slate-100 text-gray-500' : 
                                lead.status === 'ENRICHING' ? 'bg-purple-50 text-purple-600 border border-purple-100' : 
                                'bg-emerald-50 text-emerald-600 border border-emerald-100'
                              }`}>
                                {lead.status}
                              </span>
                            </div>
                          </td>
                          <td className="px-8 py-6 text-gray-400 font-bold text-[13px]">{lead.added}</td>
                          <td className="px-8 py-6 text-gray-400 font-bold text-[13px]">{lead.updated}</td>
                          <td className="px-4">
                            <span className="text-gray-200 group-hover:text-blue-500 transition-colors text-xl font-light">›</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
