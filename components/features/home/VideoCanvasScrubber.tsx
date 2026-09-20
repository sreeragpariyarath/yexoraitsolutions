"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { MotionValue } from "framer-motion";

interface VideoCanvasScrubberProps {
  videoSrc: string;
  scrollYProgress: MotionValue<number>;
  onProgressUpdate?: (progress: number, currentTime: number, duration: number) => void;
  className?: string;
}

export function VideoCanvasScrubber({
  videoSrc,
  scrollYProgress,
  onProgressUpdate,
  className = "",
}: VideoCanvasScrubberProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isLoaded, setIsLoaded] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);

  // High-performance scrubbing state refs
  const durationRef = useRef<number>(0);
  const targetTimeRef = useRef<number>(0);
  const isSeekingRef = useRef<boolean>(false);
  const pendingSeekTimeRef = useRef<number | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  // Render a video frame onto the canvas with cover sizing
  const drawFrame = useCallback(() => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (!canvas || !video || video.readyState < 2) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const displayWidth = canvas.clientWidth;
    const displayHeight = canvas.clientHeight;

    const targetWidth = Math.round(displayWidth * dpr);
    const targetHeight = Math.round(displayHeight * dpr);

    if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
      canvas.width = targetWidth;
      canvas.height = targetHeight;
    }

    const videoAspect = video.videoWidth / (video.videoHeight || 1);
    const canvasAspect = targetWidth / (targetHeight || 1);

    let drawW = targetWidth;
    let drawH = targetHeight;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasAspect > videoAspect) {
      drawH = targetWidth / videoAspect;
      offsetY = (targetHeight - drawH) / 2;
    } else {
      drawW = targetHeight * videoAspect;
      offsetX = (targetWidth - drawW) / 2;
    }

    ctx.drawImage(video, offsetX, offsetY, drawW, drawH);
  }, []);

  // Handle seeking with queue throttling
  const performSeek = useCallback((time: number) => {
    const video = videoRef.current;
    if (!video || !durationRef.current) return;

    const clampedTime = Math.max(0, Math.min(durationRef.current, time));

    if (isSeekingRef.current) {
      pendingSeekTimeRef.current = clampedTime;
      return;
    }

    if (Math.abs(video.currentTime - clampedTime) > 0.02) {
      isSeekingRef.current = true;
      try {
        if ("fastSeek" in video && typeof (video as { fastSeek?: (t: number) => void }).fastSeek === "function") {
          (video as { fastSeek: (t: number) => void }).fastSeek(clampedTime);
        } else {
          video.currentTime = clampedTime;
        }
      } catch {
        video.currentTime = clampedTime;
      }
    }
  }, []);

  // Video metadata and event listeners
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      durationRef.current = video.duration;
      setIsLoaded(true);
      performSeek(0);
      drawFrame();
    };

    const handleSeeked = () => {
      isSeekingRef.current = false;
      drawFrame();

      // Check if a more recent seek request was queued while decoding
      if (pendingSeekTimeRef.current !== null) {
        const nextTime = pendingSeekTimeRef.current;
        pendingSeekTimeRef.current = null;
        performSeek(nextTime);
      }
    };

    const handleError = () => {
      setLoadError("Unable to load video. Please ensure video source is accessible.");
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("seeked", handleSeeked);
    video.addEventListener("error", handleError);

    if (video.readyState >= 1) {
      handleLoadedMetadata();
    }

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("seeked", handleSeeked);
      video.removeEventListener("error", handleError);
    };
  }, [videoSrc, performSeek, drawFrame]);

  // Subscribe to Framer Motion scroll updates and run 60fps render loop
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (progress) => {
      if (durationRef.current > 0) {
        targetTimeRef.current = progress * durationRef.current;
        if (onProgressUpdate) {
          onProgressUpdate(progress, targetTimeRef.current, durationRef.current);
        }
      }
    });

    let currentInterpolatedTime = 0;

    const renderLoop = () => {
      if (durationRef.current > 0) {
        const target = targetTimeRef.current;
        // Smooth LERP (linear interpolation) to eliminate micro-stutters
        const delta = target - currentInterpolatedTime;
        if (Math.abs(delta) > 0.005) {
          currentInterpolatedTime += delta * 0.25;
          performSeek(currentInterpolatedTime);
        }
      }

      animationFrameRef.current = requestAnimationFrame(renderLoop);
    };

    animationFrameRef.current = requestAnimationFrame(renderLoop);

    return () => {
      unsubscribe();
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [scrollYProgress, performSeek, onProgressUpdate]);

  // Handle window resizing
  useEffect(() => {
    const handleResize = () => {
      drawFrame();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [drawFrame]);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Hidden high-performance video decoder element */}
      <video
        ref={videoRef}
        src={videoSrc}
        muted
        playsInline
        preload="auto"
        className="hidden"
        tabIndex={-1}
        aria-hidden="true"
      />

      {/* GPU-accelerated Canvas render surface */}
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover block will-change-transform"
      />

      {/* Loading Skeleton */}
      {!isLoaded && !loadError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/60 backdrop-blur-md text-white transition-opacity duration-300">
          <div className="w-10 h-10 border-2 border-white/20 border-t-[#075399] rounded-full animate-spin mb-3" />
          <span className="text-xs uppercase tracking-widest font-mono text-slate-300">
            Initializing Interactive 3D Video...
          </span>
        </div>
      )}

      {/* Error Fallback */}
      {loadError && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-950/80 text-white p-6 text-center">
          <p className="text-sm text-red-300 font-mono">{loadError}</p>
        </div>
      )}
    </div>
  );
}
