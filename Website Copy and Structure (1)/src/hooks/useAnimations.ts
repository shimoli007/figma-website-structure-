/**
 * React Hooks for Animations
 * Simplified animation integration for React components
 */

import { useEffect, useRef } from 'react';
import {
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  zoomIn,
  staggerFadeInUp,
  staggerScaleIn,
  animateOnScroll,
  addHoverScale,
  addHoverLift,
  ScrollAnimationOptions,
} from '../utils/animations';

/**
 * Hook for fade in up animation on mount
 */
export const useFadeInUp = (delay: number = 0, duration: number = 800) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref.current) {
      fadeInUp(ref.current, delay, duration);
    }
  }, [delay, duration]);

  return ref;
};

/**
 * Hook for fade in down animation on mount
 */
export const useFadeInDown = (delay: number = 0, duration: number = 800) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref.current) {
      fadeInDown(ref.current, delay, duration);
    }
  }, [delay, duration]);

  return ref;
};

/**
 * Hook for fade in from left animation on mount
 */
export const useFadeInLeft = (delay: number = 0, duration: number = 800) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref.current) {
      fadeInLeft(ref.current, delay, duration);
    }
  }, [delay, duration]);

  return ref;
};

/**
 * Hook for fade in from right animation on mount
 */
export const useFadeInRight = (delay: number = 0, duration: number = 800) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref.current) {
      fadeInRight(ref.current, delay, duration);
    }
  }, [delay, duration]);

  return ref;
};

/**
 * Hook for scale in animation on mount
 */
export const useScaleIn = (delay: number = 0, duration: number = 600) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref.current) {
      scaleIn(ref.current, delay, duration);
    }
  }, [delay, duration]);

  return ref;
};

/**
 * Hook for zoom in animation on mount
 */
export const useZoomIn = (delay: number = 0, duration: number = 800) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref.current) {
      zoomIn(ref.current, delay, duration);
    }
  }, [delay, duration]);

  return ref;
};

/**
 * Hook for stagger animations on child elements
 */
export const useStaggerAnimation = (
  type: 'fadeInUp' | 'scaleIn' = 'fadeInUp',
  staggerDelay: number = 100,
  duration: number = 800
) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref.current) {
      const children = Array.from(ref.current.children) as HTMLElement[];

      if (type === 'fadeInUp') {
        staggerFadeInUp(children, staggerDelay, duration);
      } else if (type === 'scaleIn') {
        staggerScaleIn(children, staggerDelay, duration);
      }
    }
  }, [type, staggerDelay, duration]);

  return ref;
};

/**
 * Hook for scroll-triggered animations
 */
export const useScrollAnimation = (
  selector: string,
  options: ScrollAnimationOptions = {}
) => {
  useEffect(() => {
    // Delay to ensure DOM is ready
    const timer = setTimeout(() => {
      animateOnScroll(selector, options);
    }, 100);

    return () => clearTimeout(timer);
  }, [selector, options]);
};

/**
 * Hook for hover scale effect
 */
export const useHoverScale = (
  selector: string,
  scale: number = 1.05,
  duration: number = 200
) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      addHoverScale(selector, scale, duration);
    }, 100);

    return () => clearTimeout(timer);
  }, [selector, scale, duration]);
};

/**
 * Hook for hover lift effect
 */
export const useHoverLift = (
  selector: string,
  translateY: number = -8,
  duration: number = 200
) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      addHoverLift(selector, translateY, duration);
    }, 100);

    return () => clearTimeout(timer);
  }, [selector, translateY, duration]);
};

/**
 * Hook for entrance animation sequence
 * Useful for hero sections with multiple elements
 */
export const useEntranceSequence = (enabled: boolean = true) => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!enabled || !containerRef.current) return;

    const elements = {
      title: containerRef.current.querySelector('[data-animate="title"]'),
      subtitle: containerRef.current.querySelector('[data-animate="subtitle"]'),
      description: containerRef.current.querySelector('[data-animate="description"]'),
      cta: containerRef.current.querySelectorAll('[data-animate="cta"]'),
      image: containerRef.current.querySelector('[data-animate="image"]'),
    };

    // Animate in sequence
    if (elements.title) fadeInUp(elements.title as HTMLElement, 0, 800);
    if (elements.subtitle) fadeInUp(elements.subtitle as HTMLElement, 200, 800);
    if (elements.description) fadeInUp(elements.description as HTMLElement, 400, 800);
    if (elements.cta && elements.cta.length > 0) {
      staggerFadeInUp(Array.from(elements.cta) as HTMLElement[], 100, 600);
    }
    if (elements.image) zoomIn(elements.image as HTMLElement, 600, 1000);
  }, [enabled]);

  return containerRef;
};

/**
 * Hook for page load animation
 * Animates entire page content on mount
 */
export const usePageLoad = (delay: number = 100) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      fadeInUp('#main-content', delay, 600);
    }, 0);

    return () => clearTimeout(timer);
  }, [delay]);
};
