import React from "react";

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "default" | "subtle" | "accent" | "dark";
  chamfered?: boolean;
}

export function GlassCard({
  children,
  className = "",
  variant = "default",
  chamfered = false,
  ...props
}: GlassCardProps) {
  const variantStyles = {
    default: "bg-white/80 backdrop-blur-xl border border-white/60 text-slate-900 shadow-[0_8px_32px_rgba(7,83,153,0.08)]",
    subtle: "bg-white/50 backdrop-blur-md border border-white/30 text-slate-800 shadow-sm",
    accent: "bg-[#075399]/90 backdrop-blur-xl border border-[#075399]/30 text-white shadow-[0_12px_40px_rgba(7,83,153,0.25)]",
    dark: "bg-slate-950/70 backdrop-blur-xl border border-white/10 text-white shadow-2xl",
  };

  const cornerRadius = chamfered
    ? "[clip-path:polygon(16px_0%,calc(100%-16px)_0%,100%_16px,100%_calc(100%-16px),calc(100%-16px)_100%,16px_100%,0%_calc(100%-16px),0%_16px)] rounded-none"
    : "rounded-3xl";

  return (
    <div
      className={`relative overflow-hidden transition-all duration-300 ${cornerRadius} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {/* Specular light highlight on top edge */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent"
        aria-hidden="true"
      />
      {children}
    </div>
  );
}
