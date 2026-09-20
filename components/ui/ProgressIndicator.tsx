import React from "react";

export interface ProgressIndicatorProps {
  progress: number; // 0 to 1
  className?: string;
  showPercentage?: boolean;
  orientation?: "horizontal" | "vertical";
}

export function ProgressIndicator({
  progress,
  className = "",
  showPercentage = false,
  orientation = "horizontal",
}: ProgressIndicatorProps) {
  const clamped = Math.min(1, Math.max(0, progress));
  const percentage = Math.round(clamped * 100);

  if (orientation === "vertical") {
    return (
      <div className={`flex flex-col items-center gap-2 ${className}`}>
        <div className="relative w-1.5 h-32 bg-slate-200/60 dark:bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
          <div
            className="absolute top-0 w-full bg-gradient-to-b from-[#075399] to-[#0ea5e9] rounded-full transition-all duration-75"
            style={{ height: `${clamped * 100}%` }}
          />
        </div>
        {showPercentage && (
          <span className="text-[10px] font-mono font-medium text-slate-500 tabular-nums">
            {percentage}%
          </span>
        )}
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative h-1.5 flex-1 bg-slate-200/60 dark:bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
        <div
          className="h-full bg-gradient-to-r from-[#075399] to-[#0ea5e9] rounded-full transition-all duration-75"
          style={{ width: `${clamped * 100}%` }}
        />
      </div>
      {showPercentage && (
        <span className="text-xs font-mono font-medium text-slate-600 dark:text-slate-300 tabular-nums min-w-[3ch]">
          {percentage}%
        </span>
      )}
    </div>
  );
}
