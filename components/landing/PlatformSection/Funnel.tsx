"use client";

import React from "react";
import { motion } from "framer-motion";

interface FunnelProps {
  activeStep: number;
  onStepClick: (step: number) => void;
}

// Each step is a self-contained 3D box using:
// - Front face: trapezoid (wider top, narrower bottom angled inward) - from _Path_-1.svg
// - Top face: thin sliver at the top - from _Path_.svg
// Combined into one SVG per step with correct viewBox proportions.

const ACTIVE_FRONT_GRAD = (id: string) => (
  <>
    <linearGradient
      id={`activeFront_${id}`}
      x1="0%"
      y1="0%"
      x2="100%"
      y2="100%"
    >
      <stop offset="0%" stopColor="var(--color-sky-main)" />
      <stop offset="94%" stopColor="var(--color-sky-dark)" />
    </linearGradient>
    <linearGradient id={`activeTop_${id}`} x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="var(--color-sky-accent)" />
      <stop offset="94%" stopColor="var(--color-sky-pale)" />
    </linearGradient>
  </>
);

const INACTIVE_FRONT_GRAD = (id: string) => (
  <>
    <linearGradient
      id={`inactiveFront_${id}`}
      x1="0%"
      y1="0%"
      x2="100%"
      y2="100%"
    >
      <stop offset="0%" stopColor="var(--color-pure-white)" />
      <stop offset="100%" stopColor="var(--color-blue-soft)" />
    </linearGradient>
    <linearGradient id={`inactiveTop_${id}`} x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="var(--color-pure-white)" />
      <stop offset="100%" stopColor="var(--color-blue-soft)" />
    </linearGradient>
  </>
);

interface Step3DBoxProps {
  label: string;
  stepNum: number;
  isActive: boolean;
  onClick: () => void;
  widthClass?: string;
  gradId: string;
  // SVG path proportions: viewBox width
  vbW: number;
  // Front face path (trapezoid): top-full-width, bottom narrowed
  frontPath: string;
  // Top face path (thin top)
  topPath: string;
  fontSize?: number;
}

const Step3DBox: React.FC<Step3DBoxProps> = ({
  label,
  isActive,
  onClick,
  widthClass = "w-full",
  gradId,
  vbW,
  frontPath,
  topPath,
  fontSize = 18,
}) => {
  const frontFill = isActive
    ? `url(#activeFront_${gradId})`
    : `url(#inactiveFront_${gradId})`;
  const topFill = isActive
    ? `url(#activeTop_${gradId})`
    : `url(#inactiveTop_${gradId})`;
  const textFill = isActive ? "white" : "var(--color-text-main)";

  return (
    <motion.div
      className={`relative ${widthClass} cursor-pointer`}
      onClick={onClick}
      animate={{ y: isActive ? -6 : 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Combined 3D SVG: top sliver + front face */}
      {/* viewBox height = 7 (top) + 86 (front) = 93 total */}
      <svg
        viewBox={`0 0 ${vbW} 93`}
        className="w-full h-full overflow-visible"
        style={{
          filter: isActive
            ? "drop-shadow(0 12px 24px var(--color-shadow-heading))"
            : "drop-shadow(0 4px 8px var(--color-shadow-subtle))",
        }}
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {isActive ? ACTIVE_FRONT_GRAD(gradId) : INACTIVE_FRONT_GRAD(gradId)}
        </defs>

        {/* Top face (thin sliver, at y=0) - creates 3D top */}
        <path d={topPath} fill={topFill} />

        {/* Front face (trapezoid, starting at y=7) */}
        <path d={frontPath} fill={frontFill} />

        {/* Label text centered on front face */}
        <text
          x="50%"
          y={7 + 43} // center of front face (7 offset + 86/2)
          textAnchor="middle"
          fill={textFill}
          fontSize={fontSize}
          fontWeight="700"
          fontFamily="var(--font-satoshi), sans-serif"
          dominantBaseline="middle"
          className="select-none"
        >
          {label}
        </text>
      </svg>
    </motion.div>
  );
};

const Funnel: React.FC<FunnelProps> = ({ activeStep, onStepClick }) => {
  // Step 1 - full width: viewBox 515 wide
  // Front path from _Path_-1.svg: M515 0 L483.176 86 H31.8205 L0 0 H515Z
  //   but we offset front by 7 in y: M515 7 L483.176 93 H31.8205 L0 7 H515Z
  // Top path from _Path_.svg: M515 7 L483.176 0 H31.8205 L0 7 H515Z
  //   (top face goes from y=0 to y=7)

  return (
    <div className="w-full max-w-lg relative flex flex-col items-center gap-3">
      {/* Step 1: Define & Discover (widest) */}
      <Step3DBox
        label="1.  Define & Discover"
        stepNum={1}
        isActive={activeStep === 1}
        onClick={() => onStepClick(1)}
        widthClass="w-full"
        gradId="step1"
        vbW={515}
        // Top face: a thin trapezoid that "caps" the front face
        topPath="M515 7 L483.176 0 H31.8205 L0 7 H515Z"
        // Front face offset 7px from top
        frontPath="M515 7 L483.176 93 H31.8205 L0 7 H515Z"
      />

      {/* Step 2: Enrich and Qualify (85% width) */}
      <Step3DBox
        label="2. Enrich and Qualify"
        stepNum={2}
        isActive={activeStep === 2}
        onClick={() => onStepClick(2)}
        widthClass="w-[85%]"
        gradId="step2"
        vbW={515}
        topPath="M515 7 L483.176 0 H31.8205 L0 7 H515Z"
        frontPath="M515 7 L483.176 93 H31.8205 L0 7 H515Z"
        fontSize={18 / 0.85}
      />

      {/* Step 3: Research & Convert (70% width) */}
      <Step3DBox
        label="3. Research & Convert"
        stepNum={3}
        isActive={activeStep === 3}
        onClick={() => onStepClick(3)}
        widthClass="w-[70%]"
        gradId="step3"
        vbW={515}
        topPath="M515 7 L483.176 0 H31.8205 L0 7 H515Z"
        frontPath="M515 7 L483.176 93 H31.8205 L0 7 H515Z"
        fontSize={18 / 0.7}
      />

      <div className="mt-10 text-center">
        <p className="text-sm font-bold text-text-main tracking-[0.2em] uppercase">
          DOSALES AI AUTOMATED FUNNEL
        </p>
      </div>
    </div>
  );
};

export default Funnel;
