'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface FunnelProps {
  activeStep: number;
  onStepClick: (step: number) => void;
}

const Funnel: React.FC<FunnelProps> = ({ activeStep, onStepClick }) => {
  return (
    <div className="w-full max-w-lg relative perspective-[1000px] flex flex-col items-center gap-2">
      
      {/* Layer 1: Top (Define & Discover) */}
      <div 
        className="relative w-full h-24 mb-1 cursor-pointer group"
        onClick={() => onStepClick(1)}
      >
        <svg viewBox="0 0 500 100" className="w-full h-full drop-shadow-2xl overflow-visible">
          <defs>
            <linearGradient id="activeGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0EA5E9" />
              <stop offset="100%" stopColor="#0284C7" />
            </linearGradient>
            <linearGradient id="inactiveGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F8FAFC" />
              <stop offset="100%" stopColor="#F1F5F9" />
            </linearGradient>
          </defs>
          <motion.path 
            d="M0 0 L500 0 L450 100 L50 100 Z" 
            fill={activeStep === 1 ? "url(#activeGrad1)" : "url(#inactiveGrad1)"} 
            className="transition-colors duration-500"
            animate={{
              scale: activeStep === 1 ? 1.02 : 1,
              translateY: activeStep === 1 ? -4 : 0
            }}
          />
          <text 
            x="50%" y="55%" textAnchor="middle" 
            fill={activeStep === 1 ? "white" : "#475569"} 
            className="text-xl font-bold select-none transition-colors duration-500" 
            dominantBaseline="middle"
          >
            1. Define & Discover
          </text>
        </svg>
      </div>

      {/* Layer 2: Middle (Enrich and Qualify) */}
      <div 
        className="relative w-[85%] h-24 mb-1 cursor-pointer group"
        onClick={() => onStepClick(2)}
      >
        <svg viewBox="0 0 400 100" className="w-full h-full drop-shadow-xl overflow-visible">
          <defs>
            <linearGradient id="activeGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0EA5E9" />
              <stop offset="100%" stopColor="#0284C7" />
            </linearGradient>
            <linearGradient id="inactiveGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F8FAFC" />
              <stop offset="100%" stopColor="#F1F5F9" />
            </linearGradient>
          </defs>
          <motion.path 
            d="M0 0 L400 0 L360 100 L40 100 Z" 
            fill={activeStep === 2 ? "url(#activeGrad2)" : "url(#inactiveGrad2)"} 
            className="transition-colors duration-500"
            animate={{
              scale: activeStep === 2 ? 1.02 : 1,
              translateY: activeStep === 2 ? -4 : 0
            }}
          />
          <text 
            x="50%" y="55%" textAnchor="middle" 
            fill={activeStep === 2 ? "white" : "#475569"} 
            className="text-lg font-bold select-none transition-colors duration-500" 
            dominantBaseline="middle"
          >
            2. Enrich and Qualify
          </text>
        </svg>
      </div>

      {/* Layer 3: Bottom (Research & Convert) */}
      <div 
        className="relative w-[70%] h-24 cursor-pointer group"
        onClick={() => onStepClick(3)}
      >
        <svg viewBox="0 0 300 100" className="w-full h-full drop-shadow-lg overflow-visible">
          <defs>
            <linearGradient id="activeGrad3" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0EA5E9" />
              <stop offset="100%" stopColor="#0284C7" />
            </linearGradient>
            <linearGradient id="inactiveGrad3" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F8FAFC" />
              <stop offset="100%" stopColor="#F1F5F9" />
            </linearGradient>
          </defs>
          <motion.path 
            d="M0 0 L300 0 L270 100 L30 100 Z" 
            fill={activeStep === 3 ? "url(#activeGrad3)" : "url(#inactiveGrad3)"} 
            className="transition-colors duration-500"
            animate={{
              scale: activeStep === 3 ? 1.02 : 1,
              translateY: activeStep === 3 ? -4 : 0
            }}
          />
          <text 
            x="50%" y="55%" textAnchor="middle" 
            fill={activeStep === 3 ? "white" : "#475569"} 
            className="text-base font-bold select-none transition-colors duration-500" 
            dominantBaseline="middle"
          >
            3. Research & Convert
          </text>
        </svg>
      </div>

      <div className="mt-12 text-center">
        <p className="text-sm font-bold text-gray-400 tracking-[0.2em] uppercase">
          DOSALES AI AUTOMATED FUNNEL
        </p>
      </div>
    </div>
  );
};

export default Funnel;
