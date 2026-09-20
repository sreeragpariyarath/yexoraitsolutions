"use client";

import { useRef, useState, useCallback } from "react";
import { useScroll } from "framer-motion";
import { VideoCanvasScrubber } from "./VideoCanvasScrubber";
import { ScrollStoryOverlays } from "./ScrollStoryOverlays";
import { VideoControls } from "./VideoControls";

interface ScrollVideoSectionProps {
  videoSrc: string;
}

export function ScrollVideoSection({ videoSrc }: ScrollVideoSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Synchronize scroll tracking through the 320vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [hudState, setHudState] = useState({
    progress: 0,
    currentTime: 0,
    duration: 0,
  });

  const handleProgressUpdate = useCallback(
    (progress: number, currentTime: number, duration: number) => {
      setHudState({ progress, currentTime, duration });
    },
    []
  );

  return (
    <section
      ref={containerRef}
      className="relative h-[320vh] w-full bg-slate-950"
      aria-label="Interactive VR and 3D Showcase"
    >
      {/* Sticky Full-Viewport Stage */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* GPU-Accelerated Canvas Scrub Engine */}
        <div className="relative w-full h-full">
          <VideoCanvasScrubber
            videoSrc={videoSrc}
            scrollYProgress={scrollYProgress}
            onProgressUpdate={handleProgressUpdate}
            className="w-full h-full"
          />

          {/* Cinematic Vignette & Ambient Light Overlays */}
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/40"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-radial-[circle_at_center,_transparent_50%,_rgba(0,0,0,0.6)_100%]"
            aria-hidden="true"
          />
        </div>

        {/* Story Milestones & Liquid Glass Overlays */}
        <ScrollStoryOverlays scrollYProgress={scrollYProgress} />

        {/* Bottom Interactive HUD / Progress Bar */}
        <VideoControls
          progress={hudState.progress}
          currentTime={hudState.currentTime}
          duration={hudState.duration}
        />
      </div>
    </section>
  );
}
