'use client';

import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  useCallback,
  CSSProperties,
} from 'react';
import { cn } from '@/lib/utils';

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

interface UseFluidPillProps {
  activeId: string | null | undefined;
  containerRef: React.RefObject<HTMLElement | null>;
  duration?: number;
  easing?: string;
  stretchIntensity?: number; // 0.15 to 0.45
}

export function useFluidPill({
  activeId,
  containerRef,
  duration = 380,
  easing = 'cubic-bezier(0.22, 1, 0.36, 1)',
  stretchIntensity = 0.32,
}: UseFluidPillProps) {
  const pillRef = useRef<HTMLDivElement | null>(null);
  const prevRectRef = useRef<{
    left: number;
    top: number;
    width: number;
    height: number;
  } | null>(null);
  const isFirstRender = useRef(true);
  const animationRef = useRef<Animation | null>(null);

  const updatePillPosition = useCallback(
    (animate = true) => {
      const container = containerRef.current;
      const pill = pillRef.current;
      if (!container || !pill) return;

      if (!activeId) {
        // No active tab: smoothly fade out
        if (prevRectRef.current && animate) {
          if (animationRef.current) animationRef.current.cancel();
          animationRef.current = pill.animate(
            [
              { opacity: '1', transform: pill.style.transform + ' scale(1)' },
              { opacity: '0', transform: pill.style.transform + ' scale(0.85)' },
            ],
            { duration: 220, easing: 'cubic-bezier(0.4, 0, 0.2, 1)', fill: 'forwards' }
          );
        } else {
          pill.style.opacity = '0';
        }
        prevRectRef.current = null;
        return;
      }

      // Find the active element by data-tab-id or href
      const activeElement = container.querySelector<HTMLElement>(
        `[data-tab-id="${activeId}"], [data-nav-id="${activeId}"]`
      );

      if (!activeElement) {
        pill.style.opacity = '0';
        prevRectRef.current = null;
        return;
      }

      const containerRect = container.getBoundingClientRect();
      const targetRect = activeElement.getBoundingClientRect();

      const newRect = {
        left: targetRect.left - containerRect.left,
        top: targetRect.top - containerRect.top,
        width: targetRect.width,
        height: targetRect.height,
      };

      const prevRect = prevRectRef.current;

      // Check if this is initial mount or position is unchanged
      if (isFirstRender.current || !prevRect || !animate) {
        isFirstRender.current = false;
        pill.style.transform = `translate3d(${newRect.left}px, ${newRect.top}px, 0)`;
        pill.style.width = `${newRect.width}px`;
        pill.style.height = `${newRect.height}px`;
        pill.style.opacity = '1';
        prevRectRef.current = newRect;
        return;
      }

      const deltaX = newRect.left - prevRect.left;
      const isMovingRight = deltaX > 0;
      const isMovingLeft = deltaX < 0;
      const distance = Math.abs(deltaX);

      if (animationRef.current) {
        animationRef.current.cancel();
      }

      // If positions are virtually identical, update directly
      if (distance < 1 && Math.abs(newRect.width - prevRect.width) < 1) {
        pill.style.transform = `translate3d(${newRect.left}px, ${newRect.top}px, 0)`;
        pill.style.width = `${newRect.width}px`;
        pill.style.height = `${newRect.height}px`;
        pill.style.opacity = '1';
        prevRectRef.current = newRect;
        return;
      }

      // Calculate fluid stretch physics keyframes
      let keyframes: Keyframe[] = [];

      const startLeft = prevRect.left;
      const startWidth = prevRect.width;
      const endLeft = newRect.left;
      const endWidth = newRect.width;

      if (isMovingRight) {
        // Moving right: Leading edge (right) surges ahead, trailing edge (left) follows with fluid lag
        const leadDist = (endLeft + endWidth) - (startLeft + startWidth);
        const trailDist = endLeft - startLeft;

        // Peak stretch at 36% of duration
        const midLeft1 = startLeft + trailDist * (0.24 - stretchIntensity * 0.1);
        const midRight1 = (startLeft + startWidth) + leadDist * (0.64 + stretchIntensity * 0.15);
        const midWidth1 = Math.max(16, midRight1 - midLeft1);

        // Fluid contraction at 72% of duration
        const midLeft2 = startLeft + trailDist * 0.82;
        const midRight2 = (startLeft + startWidth) + leadDist * 0.94;
        const midWidth2 = Math.max(16, midRight2 - midLeft2);

        keyframes = [
          {
            transform: `translate3d(${startLeft}px, ${prevRect.top}px, 0)`,
            width: `${startWidth}px`,
            height: `${prevRect.height}px`,
            opacity: 1,
            offset: 0,
          },
          {
            transform: `translate3d(${midLeft1}px, ${newRect.top}px, 0)`,
            width: `${midWidth1}px`,
            height: `${newRect.height}px`,
            opacity: 1,
            offset: 0.36,
          },
          {
            transform: `translate3d(${midLeft2}px, ${newRect.top}px, 0)`,
            width: `${midWidth2}px`,
            height: `${newRect.height}px`,
            opacity: 1,
            offset: 0.72,
          },
          {
            transform: `translate3d(${endLeft}px, ${newRect.top}px, 0)`,
            width: `${endWidth}px`,
            height: `${newRect.height}px`,
            opacity: 1,
            offset: 1,
          },
        ];
      } else if (isMovingLeft) {
        // Moving left: Leading edge (left) surges ahead to the left, trailing edge (right) follows with fluid lag
        const leadDist = startLeft - endLeft;
        const trailDist = (startLeft + startWidth) - (endLeft + endWidth);

        // Peak stretch at 36% of duration
        const midLeft1 = startLeft - leadDist * (0.64 + stretchIntensity * 0.15);
        const midRight1 = (startLeft + startWidth) - trailDist * (0.24 - stretchIntensity * 0.1);
        const midWidth1 = Math.max(16, midRight1 - midLeft1);

        // Fluid contraction at 72% of duration
        const midLeft2 = startLeft - leadDist * 0.94;
        const midRight2 = (startLeft + startWidth) - trailDist * 0.82;
        const midWidth2 = Math.max(16, midRight2 - midLeft2);

        keyframes = [
          {
            transform: `translate3d(${startLeft}px, ${prevRect.top}px, 0)`,
            width: `${startWidth}px`,
            height: `${prevRect.height}px`,
            opacity: 1,
            offset: 0,
          },
          {
            transform: `translate3d(${midLeft1}px, ${newRect.top}px, 0)`,
            width: `${midWidth1}px`,
            height: `${newRect.height}px`,
            opacity: 1,
            offset: 0.36,
          },
          {
            transform: `translate3d(${midLeft2}px, ${newRect.top}px, 0)`,
            width: `${midWidth2}px`,
            height: `${newRect.height}px`,
            opacity: 1,
            offset: 0.72,
          },
          {
            transform: `translate3d(${endLeft}px, ${newRect.top}px, 0)`,
            width: `${endWidth}px`,
            height: `${newRect.height}px`,
            opacity: 1,
            offset: 1,
          },
        ];
      } else {
        // Same X position (e.g. width adjustment)
        keyframes = [
          {
            transform: `translate3d(${startLeft}px, ${prevRect.top}px, 0)`,
            width: `${startWidth}px`,
            height: `${prevRect.height}px`,
            opacity: 1,
          },
          {
            transform: `translate3d(${endLeft}px, ${newRect.top}px, 0)`,
            width: `${endWidth}px`,
            height: `${newRect.height}px`,
            opacity: 1,
          },
        ];
      }

      pill.style.opacity = '1';
      const anim = pill.animate(keyframes, {
        duration,
        easing,
        fill: 'forwards',
      });

      animationRef.current = anim;
      anim.onfinish = () => {
        pill.style.transform = `translate3d(${newRect.left}px, ${newRect.top}px, 0)`;
        pill.style.width = `${newRect.width}px`;
        pill.style.height = `${newRect.height}px`;
      };

      prevRectRef.current = newRect;
    },
    [activeId, containerRef, duration, easing, stretchIntensity]
  );

  useIsomorphicLayoutEffect(() => {
    updatePillPosition(true);
  }, [activeId, updatePillPosition]);

  // Handle window resizing seamlessly without animation glitch
  useEffect(() => {
    const handleResize = () => {
      updatePillPosition(false);
    };

    window.addEventListener('resize', handleResize, { passive: true });

    let resizeObserver: ResizeObserver | null = null;
    if (containerRef.current && typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => {
        updatePillPosition(false);
      });
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeObserver) resizeObserver.disconnect();
    };
  }, [containerRef, updatePillPosition]);

  return { pillRef };
}

interface FluidPillIndicatorProps {
  pillRef: React.RefObject<HTMLDivElement | null>;
  className?: string;
  style?: CSSProperties;
}

export function FluidPillIndicator({
  pillRef,
  className,
  style,
}: FluidPillIndicatorProps) {
  return (
    <div
      ref={pillRef}
      aria-hidden="true"
      className={cn(
        'absolute top-0 left-0 pointer-events-none rounded-full will-change-transform z-0',
        'bg-gradient-to-r from-cyan-500 to-blue-600 shadow-md shadow-cyan-500/25',
        'before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-b before:from-white/20 before:to-transparent before:pointer-events-none',
        className
      )}
      style={{
        opacity: 0,
        transform: 'translate3d(0, 0, 0)',
        ...style,
      }}
    />
  );
}
