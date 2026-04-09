"use client";

import { motion, AnimatePresence } from "framer-motion";
import { twMerge } from "tailwind-merge";
import React, { useState } from "react";

export const Circle = ({ className, children, idx, ...rest }: any) => {
  return (
    <motion.div
      {...rest}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: idx * 0.1, duration: 0.2 }}
      className={twMerge(
        "absolute inset-0 left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 transform rounded-full border border-neutral-200",
        className
      )}
    />
  );
};

export const Radar = ({ className }: { className?: string }) => {
  return (
    <div
      className={twMerge(
        "relative flex h-20 w-20 items-center justify-center rounded-full",
        className
      )}
    >
      <style>{`
        @keyframes radar-spin {
          from { transform: rotate(20deg); }
          to   { transform: rotate(380deg); }
        }
        .animate-radar-spin {
          animation: radar-spin 10s linear infinite;
        }
      `}</style>
      {/* Rotating sweep line */}
      <div
        style={{ transformOrigin: "right center" }}
        className="animate-radar-spin absolute right-1/2 top-1/2 z-40 flex h-1.25 w-100 items-end justify-center overflow-hidden"
      >
   <div className="relative z-40 h-px w-full bg-linear-to-r from-transparent via-sky-500/20 to-transparent scale-y-50" />      </div>
      {/* Radar Background SVG */}
      <img
        src="/assets/svg/radarbg.svg"
        alt="Radar Background"
        className="hidden xs:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-160 h-160 max-w-none pointer-events-none"
        style={{ 
          mixBlendMode: "screen",
          WebkitMaskImage: "radial-gradient(circle at center, black 30%, transparent 80%)",
          maskImage: "radial-gradient(circle at center, black 30%, transparent 80%)"
        }}
      />
      <img
        src="/assets/svg/radarbgMobile.svg"
        alt="Radar Background Mobile"
        className="block xs:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-160 h-160 max-w-none pointer-events-none"
        style={{ 
          mixBlendMode: "screen",
          WebkitMaskImage: "radial-gradient(circle at center, black 30%, transparent 80%)",
          maskImage: "radial-gradient(circle at center, black 30%, transparent 80%)"
        }}
      />
    </div>
  );
};

const SparklingGlow = ({ delay, duration }: { delay: number; duration: number }) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
      <style>{`
        @keyframes sparkle-pulse-css {
          0% { transform: scale(0.5); opacity: 0; }
          2% { transform: scale(1.6); opacity: 0.9; }
          10% { transform: scale(2.8); opacity: 0; }
          100% { transform: scale(2.8); opacity: 0; }
        }
        @keyframes sparkle-bit-css {
          0% { transform: scale(0) translate(0, 0); opacity: 0; }
          1.5% { transform: scale(2.2) translate(0, 0); opacity: 1; }
          10% { transform: scale(0.5) translate(var(--dx), var(--dy)); opacity: 0; }
          100% { transform: scale(0.5) translate(var(--dx), var(--dy)); opacity: 0; }
        }
        .animate-sparkle-pulse {
          animation: sparkle-pulse-css ${duration}s cubic-bezier(0.16, 1, 0.3, 1) infinite;
        }
        .animate-sparkle-bit {
          animation: sparkle-bit-css ${duration}s cubic-bezier(0.16, 1, 0.3, 1) infinite;
        }
      `}</style>
      
      {/* Radial pulse */}
      <div
        className="animate-sparkle-pulse absolute h-24 w-24 rounded-full bg-blue-400/60 blur-2xl mix-blend-plus-lighter"
        style={{ animationDelay: `-${duration - delay}s` }}
      />
      
      {/* Sparkle bits */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
        const dx = Math.cos((angle * Math.PI) / 180) * 55;
        const dy = Math.sin((angle * Math.PI) / 180) * 55;
        return (
          <div
            key={i}
            className="animate-sparkle-bit absolute h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_12px_white,0_0_20px_var(--color-blue-500)] mix-blend-plus-lighter"
            style={{ 
              animationDelay: `-${duration - delay}s`,
              "--dx": `${dx}px`,
              "--dy": `${dy}px`
            } as any}
          />
        );
      })}
    </div>
  );
};

export const IconContainer = ({
  icon,
  text,
  delay,
  noContainer = false,
  showSparkle = false,
  sparkleDelay = 0,
  sparkleDuration = 4,
  popupTitle,
  popupDescription,
  popupAlign = "center",
}: {
  icon?: React.ReactNode;
  text?: string;
  delay?: number;
  noContainer?: boolean;
  showSparkle?: boolean;
  sparkleDelay?: number;
  sparkleDuration?: number;
  popupTitle?: string;
  popupDescription?: string;
  popupAlign?: "left" | "right" | "center";
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onClick={(e) => {
        e.stopPropagation();
        setIsOpen(!isOpen);
      }}
    >
      <AnimatePresence>
        {isOpen && popupTitle && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className={twMerge(
              "absolute bottom-full mb-6 p-5 rounded-[1.25rem] bg-[var(--color-tooltip-bg)] border border-slate-700 shadow-[0_25px_60px_var(--color-shadow-dark)] z-100 pointer-events-none",
              "w-64 xs:w-72", // Slightly wider on larger mobile
              popupAlign === "center" && "left-1/2 -translate-x-1/2",
              popupAlign === "right" && "left-0 translate-x-0",
              popupAlign === "left" && "right-0 translate-x-0"
            )}
          >
            <div className="relative z-10">
              <h4 className="text-white text-[16px] font-bold mb-1.5 tracking-tight">{popupTitle}</h4>
              <p className="text-white/90 text-[14px] leading-relaxed font-medium">{popupDescription}</p>
            </div>
            {/* Small arrow/tail for the popup */}
            <div className={twMerge(
              "absolute -bottom-1.5 w-3 h-3 bg-[var(--color-tooltip-bg)] border-r border-b border-slate-800 rotate-45",
              popupAlign === "center" && "left-1/2 -translate-x-1/2",
              popupAlign === "right" && "left-6",
              popupAlign === "left" && "right-6"
            )}></div>
          </motion.div>
        )}
      </AnimatePresence>

      {showSparkle && (
        <SparkleWrapper delay={sparkleDelay} duration={sparkleDuration} />
      )}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2, delay: delay ?? 0 }}
        className="relative z-50 flex flex-col items-center justify-center space-y-2 cursor-pointer transition-transform duration-200 hover:scale-110"
      >
        <div className={twMerge(
          "flex items-center justify-center",
          noContainer 
            ? "h-[30px] w-[30px] md:h-[40px] md:w-[40px]" 
            : "h-[30px] w-[30px] md:h-[40px] md:w-[40px] rounded-2xl border border-slate-700 bg-slate-800 shadow-inner"
        )}>
          {icon || (
            <svg className="h-6 w-6 xs:h-8 xs:w-8 text-slate-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
            </svg>
          )}
        </div>
        {text != null && text !== "" && (
          <div className="hidden rounded-md px-2 py-1 md:block">
            <div className="text-center text-xs font-bold text-slate-400">
              {text}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

const SparkleWrapper = ({ delay, duration }: { delay: number; duration: number }) => {
  return <SparklingGlow delay={delay} duration={duration} />;
};
