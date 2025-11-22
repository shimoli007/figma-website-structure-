/**
 * React Hooks for Animations
 * Provides easy-to-use hooks for integrating animations into React components
 */

import React, { useEffect, useRef, RefObject, useState } from 'react';
import {
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  zoomIn,
  staggerFadeIn,
  scrollAnimationManager,
  pulse,
  glow,
  parallaxScroll,
  counterAnimation,
  INTERSECTION_OPTIONS,
} from '../utils/animations';
import type anime from 'animejs';

// ============================================
// SCROLL ANIMATION HOOKS
// ============================================

/**
 * Hook to animate element on scroll into view
 */
export const useScrollAnimation = (
  animationType: 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn' | 'zoomIn' = 'fadeInUp',
  options?: {
    intersectionOptions?: IntersectionObserverInit;
    animationOptions?: Partial<anime.AnimeParams>;
  }
): RefObject<HTMLDivElement> => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const animationMap = {
      fadeInUp,
      fadeInDown,
      fadeInLeft,
      fadeInRight,
      scaleIn,
      zoomIn,
    };

    const animationFn = animationMap[animationType];

    const observerId = scrollAnimationManager.observe(
      ref.current,
      (element) => animationFn(element, options?.animationOptions),
      options?.intersectionOptions || INTERSECTION_OPTIONS.default
    );

    return () => {
      if (observerId) {
        scrollAnimationManager.disconnect(observerId);
      }
    };
  }, [animationType, options]);

  return ref;
};

/**
 * Hook to stagger animate children on scroll
 */
export const useStaggerOnScroll = (
  childSelector: string,
  options?: {
    intersectionOptions?: IntersectionObserverInit;
    animationOptions?: Partial<anime.AnimeParams>;
  }
): RefObject<HTMLDivElement> => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observerId = scrollAnimationManager.observe(
      ref.current,
      (parent) => {
        const children = parent.querySelectorAll(childSelector);
        staggerFadeIn(children, options?.animationOptions);
      },
      options?.intersectionOptions || INTERSECTION_OPTIONS.default
    );

    return () => {
      if (observerId) {
        scrollAnimationManager.disconnect(observerId);
      }
    };
  }, [childSelector, options]);

  return ref;
};

/**
 * Hook for entrance animation on mount
 */
export const useEntranceAnimation = (
  animationType: 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn' | 'zoomIn' = 'fadeInUp',
  options?: Partial<anime.AnimeParams>
): RefObject<HTMLDivElement> => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const animationMap = {
      fadeInUp,
      fadeInDown,
      fadeInLeft,
      fadeInRight,
      scaleIn,
      zoomIn,
    };

    const animationFn = animationMap[animationType];
    animationFn(ref.current, options);
  }, [animationType, options]);

  return ref;
};

// ============================================
// INTERACTION HOOKS
// ============================================

/**
 * Hook for hover animations
 */
export const useHoverAnimation = (
  hoverAnimation: (element: HTMLElement) => void,
  resetAnimation: (element: HTMLElement) => void
): RefObject<HTMLDivElement> => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseEnter = () => hoverAnimation(element);
    const handleMouseLeave = () => resetAnimation(element);

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hoverAnimation, resetAnimation]);

  return ref;
};

/**
 * Hook for pulse animation
 */
export const usePulse = (
  options?: Partial<anime.AnimeParams>
): RefObject<HTMLDivElement> => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const animation = pulse(ref.current, options);

    return () => {
      if (animation) {
        animation.pause();
      }
    };
  }, [options]);

  return ref;
};

/**
 * Hook for glow effect
 */
export const useGlow = (
  options?: { color?: string; duration?: number }
): RefObject<HTMLDivElement> => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const animation = glow(ref.current, options);

    return () => {
      if (animation) {
        animation.pause();
      }
    };
  }, [options]);

  return ref;
};

// ============================================
// ADVANCED HOOKS
// ============================================

/**
 * Hook for parallax scroll effect
 */
export const useParallax = (
  options?: { speed?: number; direction?: 'up' | 'down' }
): RefObject<HTMLDivElement> => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const cleanup = parallaxScroll(ref.current, options);

    return cleanup;
  }, [options]);

  return ref;
};

/**
 * Hook for counter animation
 */
export const useCounter = (
  targetValue: number,
  options?: {
    from?: number;
    duration?: number;
    format?: (value: number) => string;
    trigger?: 'mount' | 'scroll';
  }
): RefObject<HTMLDivElement> => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    if (options?.trigger === 'scroll') {
      const observerId = scrollAnimationManager.observe(
        ref.current,
        (element) => {
          counterAnimation(element, {
            from: options?.from,
            to: targetValue,
            duration: options?.duration,
            format: options?.format,
          });
        },
        INTERSECTION_OPTIONS.default
      );

      return () => {
        if (observerId) {
          scrollAnimationManager.disconnect(observerId);
        }
      };
    } else {
      // Trigger on mount
      counterAnimation(ref.current, {
        from: options?.from,
        to: targetValue,
        duration: options?.duration,
        format: options?.format,
      });
    }
  }, [targetValue, options]);

  return ref;
};

/**
 * Hook to create animation timeline
 */
export const useAnimationTimeline = (
  createAnimations: (timeline: anime.AnimeTimelineInstance) => void,
  dependencies: any[] = []
) => {
  useEffect(() => {
    const anime = require('animejs').default;
    const timeline = anime.timeline({
      easing: 'easeOutExpo',
    });

    createAnimations(timeline);

    return () => {
      timeline.pause();
    };
  }, dependencies);
};

// ============================================
// UTILITY HOOKS
// ============================================

/**
 * Hook to check if element is in viewport
 */
export const useInView = (
  options?: IntersectionObserverInit
): [RefObject<HTMLDivElement>, boolean] => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      options || INTERSECTION_OPTIONS.default
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return [ref, isInView];
};

/**
 * Hook for reduced motion preference
 */
export const usePrefersReducedMotion = (): boolean => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return prefersReducedMotion;
};

// ============================================
// EXPORTS
// ============================================

export default {
  useScrollAnimation,
  useStaggerOnScroll,
  useEntranceAnimation,
  useHoverAnimation,
  usePulse,
  useGlow,
  useParallax,
  useCounter,
  useAnimationTimeline,
  useInView,
  usePrefersReducedMotion,
};
