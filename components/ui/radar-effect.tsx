"use client";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import React from "react";

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
   <div className="relative z-40 h-px w-full bg-linear-to-r from-transparent via-sky-500/50 to-transparent scale-y-50" />      </div>
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
            className="animate-sparkle-bit absolute h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_12px_white,0_0_20px_rgba(59,130,246,1)] mix-blend-plus-lighter"
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
}: {
  icon?: React.ReactNode;
  text?: string;
  delay?: number;
  noContainer?: boolean;
  showSparkle?: boolean;
  sparkleDelay?: number;
  sparkleDuration?: number;
}) => {
  return (
    <div className="relative">
      {showSparkle && (
        <SparkleWrapper delay={sparkleDelay} duration={sparkleDuration} />
      )}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2, delay: delay ?? 0 }}
        className="relative z-50 flex flex-col items-center justify-center space-y-2"
      >
        <div className={twMerge(
          "flex items-center justify-center",
          noContainer 
            ? "h-8 w-8 xs:h-12 xs:w-12" 
            : "h-10 w-10 xs:h-12 xs:w-12 rounded-2xl border border-slate-700 bg-slate-800 shadow-inner"
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
