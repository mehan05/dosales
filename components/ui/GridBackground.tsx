import React from "react";

interface GridBackgroundProps {
  className?: string;
}

const GridBackground: React.FC<GridBackgroundProps> = ({ className = "" }) => {
  return (
    <div className={`absolute inset-0  pointer-events-none ${className}`}>
      <svg width="100%" height="100%" className="opacity-30">
        <defs>
          <pattern
            id="grid-pattern"
            width="64"
            height="64"
            patternUnits="userSpaceOnUse"
          >
            {/* 
              x="2" y="2" width="60" height="60" creates a 4px gap (2px on each side) in a 64px cell
              rx="12" creates slightly more curved corners for the larger box
            */}
            <rect
              x="2"
              y="2"
              width="60"
              height="60"
              rx="12"
              fill="currentColor"
              stroke="none"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      </svg>
    </div>
  );
};

export default GridBackground;
