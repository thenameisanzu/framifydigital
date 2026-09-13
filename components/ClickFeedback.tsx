'use client';

import React, { useEffect, useState, useCallback } from 'react';

interface Ripple {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
}

export function ClickFeedback() {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const addRipple = useCallback((x: number, y: number, isButton: boolean) => {
    const id = Date.now() + Math.random();
    const size = isButton ? 120 : 70;
    const color = isButton
      ? 'rgba(56, 189, 248, 0.45)'
      : 'rgba(56, 189, 248, 0.28)';

    setRipples((prev) => [...prev.slice(-12), { id, x, y, size, color }]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 650);
  }, []);

  useEffect(() => {
    const handlePointerDown = (e: PointerEvent) => {
      // Ignore if user drags or right clicks
      if (e.button !== 0 && e.pointerType === 'mouse') return;

      const target = e.target as HTMLElement | null;
      const isInteractive = Boolean(
        target?.closest('button, a, input, select, textarea, [role="button"], .glass-card')
      );

      addRipple(e.clientX, e.clientY, isInteractive);
    };

    window.addEventListener('pointerdown', handlePointerDown, { passive: true });
    return () => {
      window.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [addRipple]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none"
    >
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="click-fluid-ripple"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
            width: `${ripple.size}px`,
            height: `${ripple.size}px`,
            borderColor: ripple.color,
            boxShadow: `0 0 20px 2px ${ripple.color}`,
          }}
        />
      ))}
    </div>
  );
}

export default ClickFeedback;
