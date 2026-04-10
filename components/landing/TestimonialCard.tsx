import React from 'react';
import Image from 'next/image';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, company, content, avatar }) => {
  return (
    <div className="bg-slate-darkest-card p-3 rounded-2xl flex flex-col gap-3 border border-white/5 hover:border-white/10 transition-colors h-full">
      <p className="text-slate-text-muted text-[15px] leading-relaxed font-medium">
        {content}
      </p>
      
      <div className="flex items-center gap-3 mt-auto">
        <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 transition-all duration-300">
          <Image
            src={avatar}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col">
          <h4 className="text-white font-bold text-sm tracking-tight">{name}</h4>
          <p className="text-slate-gray text-[12px] font-medium">
            {role}, {company}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
