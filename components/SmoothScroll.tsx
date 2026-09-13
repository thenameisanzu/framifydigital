'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

export function SmoothScroll() {
  useEffect(() => {
    // 1. Initialize Lenis Smooth Scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.2,
    });

    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

    // RAF Loop
    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // 2. Smooth anchor link scrolling handler
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (href && href.startsWith('#') && href.length > 1) {
        const element = document.querySelector(href);
        if (element) {
          e.preventDefault();
          lenis.scrollTo(element as HTMLElement, {
            offset: -70,
            duration: 1.1,
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    // 3. Scroll Reveal Observer with IntersectionObserver
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            (entry.target as HTMLElement).dataset.revealed = 'true';
            // Unobserve once revealed for performance
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -20px 0px',
      }
    );

    const observeElements = () => {
      const elements = document.querySelectorAll<HTMLElement>('.reveal');
      elements.forEach((el) => {
        if (el.dataset.revealed === 'true') {
          if (!el.classList.contains('is-revealed')) {
            el.classList.add('is-revealed');
          }
        } else if (!el.classList.contains('is-revealed')) {
          revealObserver.observe(el);
        }
      });
    };

    // Initial observation
    observeElements();

    // Observe DOM mutations for dynamically mounted elements
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['class'] });

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      document.removeEventListener('click', handleAnchorClick);
      revealObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}

export default SmoothScroll;
