'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { CheckCircle } from 'lucide-react';

// ---- Configuration ----
const MAX_LEARNING_TIME = 45; // Total countdown time (minutes)

// ---- Props ----
interface LearningProgressCircleProps {
  /** Time remaining in minutes (45 → 0) */
  timeRemaining: number;
}

const LearningProgressCircle: React.FC<LearningProgressCircleProps> = ({
  timeRemaining,
}) => {
  // --- SVG constants ---
  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const size = 200;

  // --- Derived state ---
  const isComplete = timeRemaining <= 0;
  const progress = 1 - Math.max(0, timeRemaining / MAX_LEARNING_TIME);
  const strokeDashoffset = circumference * (1 - progress);

  // --- Dynamic stroke color (from light green → dark green) ---
  const getColor = (p: number) => {
    if (isComplete) return 'hsl(142, 76%, 40%)'; // final solid green
    return `color-mix(in hsl, hsl(142, 70%, 85%) ${Math.round(p * 40)}%, hsl(142, 76%, 40%))`;
  };

  return (
    <div
      className={cn(
        'relative  flex items-center justify-center rounded-xl p-4 transition-all duration-500',
        { 'shadow-lg': isComplete }
      )}
      style={{ width: size, height: size }}
    >
      {/* SVG Progress Circle */}
      <svg
        className="transform -rotate-90"
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
      >
        {/* Define radial gradient for dynamic fill depth */}
        <defs>
          <radialGradient id="greenGradient" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="hsl(142, 80%, 60%)" />
            <stop offset="100%" stopColor="hsl(142, 76%, 35%)" />
          </radialGradient>
        </defs>

        {/* Static background outline */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke="hsl(var(--muted))"
          strokeWidth="12"
        />

        {/* Animated progress stroke */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke={isComplete ? 'url(#greenGradient)' : getColor(progress)}
          strokeWidth="12"
          strokeLinecap="round"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset,
            transition:
              'stroke-dashoffset 0.8s ease-in-out, stroke 0.5s ease-in-out',
            filter: isComplete
              ? 'drop-shadow(0 0 10px hsl(142, 70%, 45%))'
              : 'drop-shadow(0 0 4px hsl(142, 50%, 60%))',
          }}
        />
      </svg>

      {/* Inner Content */}
      <div className="absolute inset-0flex flex-col items-center justify-center text-center">
        {isComplete ? (
          // --- Completion Animation ---
          <div className="flex flex-col items-center text-green-600 animate-pulse">
            <CheckCircle className="w-12 h-12 mb-1" />
            <span className="text-xl font-semibold">Completed!</span>
          </div>
        ) : (
          // --- Countdown Display ---
          <>
            <div className="text-6xl font-extrabold tabular-nums">
              {timeRemaining}
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              Mins Remaining
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default LearningProgressCircle;
