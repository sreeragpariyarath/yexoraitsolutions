"use client";

import { GlassCard } from "../../ui/GlassCard";
import { ProgressIndicator } from "../../ui/ProgressIndicator";
import { Compass } from "lucide-react";

interface VideoControlsProps {
  progress: number;
  currentTime: number;
  duration: number;
  className?: string;
}

function formatTime(seconds: number): string {
  if (isNaN(seconds) || seconds < 0) return "00:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
}

export function VideoControls({
  progress,
  currentTime,
  duration,
  className = "",
}: VideoControlsProps) {
  return (
    <div
      className={`pointer-events-auto absolute bottom-6 inset-x-0 z-30 flex justify-center px-4 ${className}`}
    >
      <GlassCard
        variant="default"
        className="flex items-center gap-4 px-5 py-2.5 rounded-full max-w-md w-full shadow-2xl border-white/40"
      >
        <div className="flex items-center gap-2 text-slate-700">
          <Compass size={16} className="text-[#075399] animate-spin-slow" />
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-800">
            Interactive Tour
          </span>
        </div>

        <div className="flex-1">
          <ProgressIndicator progress={progress} />
        </div>

        <div className="text-[11px] font-mono font-medium text-slate-600 tabular-nums">
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>
      </GlassCard>
    </div>
  );
}
