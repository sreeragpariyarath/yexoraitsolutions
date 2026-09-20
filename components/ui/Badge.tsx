import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "primary" | "glass" | "outline" | "subtle";
  icon?: React.ReactNode;
}

export function Badge({
  children,
  className = "",
  variant = "glass",
  icon,
  ...props
}: BadgeProps) {
  const variantStyles = {
    glass:
      "bg-white/80 backdrop-blur-md border border-white/60 text-slate-800 shadow-[0_2px_10px_rgba(7,83,153,0.06)]",
    primary:
      "bg-[#075399] text-white border border-[#075399] shadow-sm shadow-[#075399]/20",
    outline:
      "bg-transparent border border-[#075399]/30 text-[#075399]",
    subtle:
      "bg-[#075399]/10 text-[#075399] border border-[#075399]/15",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      {children}
    </span>
  );
}
