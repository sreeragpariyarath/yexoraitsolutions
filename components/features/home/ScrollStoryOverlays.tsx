"use client";

import { MotionValue, motion, useTransform } from "framer-motion";
import Link from "next/link";
import { GlassCard } from "../../ui/GlassCard";
import { Badge } from "../../ui/Badge";
import { ArrowRight, Sparkles, Box, Globe, ChevronDown } from "lucide-react";

interface ScrollStoryOverlaysProps {
  scrollYProgress: MotionValue<number>;
}

export function ScrollStoryOverlays({ scrollYProgress }: ScrollStoryOverlaysProps) {
  // Milestone 1: Intro & Spatial VR Hero (0% - 22%)
  const opacity1 = useTransform(scrollYProgress, (v) => {
    if (v <= 0.06) return 1;
    if (v >= 0.22) return 0;
    return Math.max(0, Math.min(1, 1 - (v - 0.06) / (0.22 - 0.06)));
  });
  const y1 = useTransform(scrollYProgress, (v) => Math.min(0, -v * 180));
  const pointerEvents1 = useTransform(scrollYProgress, (v) => (v < 0.2 ? "auto" : "none"));
  const display1 = useTransform(scrollYProgress, (v) => (v > 0.24 ? "none" : "flex"));

  // Milestone 2: 3D Visualization & Virtual Reality (28% - 62%)
  const opacity2 = useTransform(scrollYProgress, (v) => {
    if (v < 0.26 || v > 0.64) return 0;
    if (v >= 0.34 && v <= 0.56) return 1;
    if (v < 0.34) return Math.max(0, Math.min(1, (v - 0.26) / (0.34 - 0.26)));
    return Math.max(0, Math.min(1, 1 - (v - 0.56) / (0.64 - 0.56)));
  });
  const y2 = useTransform(scrollYProgress, (v) => {
    if (v < 0.34) return (1 - (v - 0.26) / 0.08) * 30;
    if (v > 0.56) return -((v - 0.56) / 0.08) * 30;
    return 0;
  });
  const pointerEvents2 = useTransform(scrollYProgress, (v) => (v >= 0.28 && v <= 0.62 ? "auto" : "none"));
  const display2 = useTransform(scrollYProgress, (v) => (v < 0.25 || v > 0.65 ? "none" : "flex"));

  // Milestone 3: Enterprise Web Architecture & SaaS (68% - 100%)
  const opacity3 = useTransform(scrollYProgress, (v) => {
    if (v < 0.66) return 0;
    if (v >= 0.76) return 1;
    return Math.max(0, Math.min(1, (v - 0.66) / (0.76 - 0.66)));
  });
  const y3 = useTransform(scrollYProgress, (v) => {
    if (v < 0.76) return (1 - (v - 0.66) / 0.1) * 30;
    return 0;
  });
  const pointerEvents3 = useTransform(scrollYProgress, (v) => (v >= 0.68 ? "auto" : "none"));
  const display3 = useTransform(scrollYProgress, (v) => (v < 0.65 ? "none" : "flex"));

  return (
    <div className="pointer-events-none absolute inset-0 z-20 flex flex-col justify-between p-6 sm:p-10 md:p-14">
      {/* Top Bar Indicator / Floating Subtle Header Anchor */}
      <div className="flex justify-between items-start w-full">
        {/* Empty placeholder for layout balance */}
        <div className="w-10" />
      </div>

      {/* Middle Center Canvas: Interactive Story Milestones */}
      <div className="relative w-full max-w-6xl mx-auto flex items-center justify-center min-h-[420px]">
        {/* Milestone 1: Hero Experience */}
        <motion.div
          style={{ opacity: opacity1, y: y1, pointerEvents: pointerEvents1, display: display1 }}
          className="absolute inset-x-0 flex flex-col items-center text-center max-w-3xl mx-auto"
        >
          <Badge
            variant="glass"
            icon={<Sparkles size={14} className="text-[#075399]" />}
            className="mb-4"
          >
            Spatial Computing & Next-Gen Software
          </Badge>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)] leading-[1.08] mb-6">
            Architecting the <span className="text-[#38bdf8]">Future</span> of Digital Dimensions
          </h1>

          <p className="text-base sm:text-lg text-slate-100/90 max-w-2xl drop-shadow-md mb-8">
            Pioneering immersive Virtual Reality simulations, photorealistic 3D visualization,
            and enterprise-scale cloud web systems.
          </p>

          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-slate-300 uppercase animate-pulse">
            <ChevronDown size={14} />
            <span>Scroll to explore interactive capabilities</span>
            <ChevronDown size={14} />
          </div>
        </motion.div>

        {/* Milestone 2: 3D Visualization & Virtual Reality */}
        <motion.div
          style={{ opacity: opacity2, y: y2, pointerEvents: pointerEvents2, display: display2 }}
          className="absolute inset-x-0 flex justify-start max-w-xl mx-auto md:ml-6"
        >
          <GlassCard variant="default" chamfered className="p-6 sm:p-8 w-full">
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="subtle" icon={<Box size={14} />}>
                Immersive Visualization
              </Badge>
              <span className="text-xs font-mono text-slate-400">01 / CAPABILITY</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 tracking-tight">
              Photorealistic 3D & Spatial Simulation
            </h2>

            <p className="text-sm sm:text-base text-slate-600 mb-6 leading-relaxed">
              From enterprise digital twins to industrial training simulations in VR. We construct
              high-fidelity real-time 3D assets that bridge physical systems with virtual precision.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-200/60">
              <div className="flex flex-col">
                <span className="text-xs font-mono text-slate-500 uppercase">Latency</span>
                <span className="text-lg font-bold text-[#075399]">&lt; 12ms Real-time</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-mono text-slate-500 uppercase">Engine</span>
                <span className="text-lg font-bold text-slate-800">WebGL & Spatial</span>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Milestone 3: Enterprise Web Architecture */}
        <motion.div
          style={{ opacity: opacity3, y: y3, pointerEvents: pointerEvents3, display: display3 }}
          className="absolute inset-x-0 flex justify-end max-w-xl mx-auto md:mr-6"
        >
          <GlassCard variant="default" chamfered className="p-6 sm:p-8 w-full">
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="subtle" icon={<Globe size={14} />}>
                Enterprise Engineering
              </Badge>
              <span className="text-xs font-mono text-slate-400">02 / SOLUTIONS</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 tracking-tight">
              High-Performance Web Platforms & SaaS
            </h2>

            <p className="text-sm sm:text-base text-slate-600 mb-6 leading-relaxed">
              Engineered with modern Next.js architecture, edge-native microservices, and bespoke UI
              craftsmanship tailored for mission-critical enterprise scale.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#075399] hover:bg-[#054179] text-white text-sm font-semibold shadow-md shadow-[#075399]/25 hover:shadow-lg hover:shadow-[#075399]/35 hover:-translate-y-0.5 transition-all"
              >
                <span>Explore Services</span>
                <ArrowRight size={15} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200/80 text-slate-800 text-sm font-medium transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </GlassCard>
        </motion.div>
      </div>

      {/* Bottom spacer for layout balance */}
      <div className="w-full h-8" />
    </div>
  );
}
