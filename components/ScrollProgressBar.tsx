'use client';

import React, { useEffect, useRef } from 'react';

export function ScrollProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);
  const glowHeadRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let targetProgress = 0;
    let currentProgress = 0;
    let rafId: number;

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        targetProgress = Math.min(1, Math.max(0, window.scrollY / totalScroll));
      }
    };

    const updateLoop = () => {
      // Smooth linear interpolation (lerp)
      currentProgress += (targetProgress - currentProgress) * 0.14;

      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${currentProgress})`;
      }

      if (glowHeadRef.current) {
        glowHeadRef.current.style.left = `${currentProgress * 100}%`;
        glowHeadRef.current.style.opacity = currentProgress > 0.005 ? '1' : '0';
      }

      rafId = requestAnimationFrame(updateLoop);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();
    rafId = requestAnimationFrame(updateLoop);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[3px] z-[100] bg-sky-950/20 backdrop-blur-[1px] pointer-events-none overflow-visible"
    >
      {/* GPU Accelerated ScaleX Beam */}
      <div
        ref={barRef}
        className="h-full w-full bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 origin-left will-change-transform shadow-[0_0_12px_rgba(56,189,248,0.75)]"
        style={{ transform: 'scaleX(0)' }}
      />

      {/* Leading Laser Flare Dot */}
      <div
        ref={glowHeadRef}
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 size-2.5 rounded-full bg-cyan-300 shadow-[0_0_14px_4px_rgba(56,189,248,0.95)] opacity-0 transition-opacity duration-300 will-change-transform"
        style={{ left: '0%' }}
      />
    </div>
  );
}

export default ScrollProgressBar;
