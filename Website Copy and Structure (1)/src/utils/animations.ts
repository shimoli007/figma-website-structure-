/**
 * Animation Utilities using anime.js
 * Professional, accessible, and performant animations
 */

import { animate, utils } from 'animejs';

// Type definitions
type AnimeParams = Parameters<typeof animate>[0];
type AnimeInstance = ReturnType<typeof animate>;

// Debug logging
console.log('[Animations] Module loaded, anime.js version:', animate ? 'loaded' : 'NOT LOADED');

/**
 * Check if user prefers reduced motion
 */
export const prefersReducedMotion = (): boolean => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Safe animate function that respects user preferences
 */
export const safeAnimate = (params: AnimeParams): AnimeInstance | null => {
  if (prefersReducedMotion()) {
    // If reduced motion is preferred, apply final state immediately
    const targets = params.targets;
    if (targets) {
      const elements = typeof targets === 'string'
        ? document.querySelectorAll(targets)
        : Array.isArray(targets)
        ? targets
        : [targets];

      // Apply final state instantly
      elements.forEach((el: any) => {
        if (el instanceof HTMLElement) {
          if (params.opacity !== undefined) el.style.opacity = String(params.opacity);
          if (params.translateY !== undefined) el.style.transform = `translateY(${params.translateY})`;
          if (params.translateX !== undefined) el.style.transform = `translateX(${params.translateX})`;
          if (params.scale !== undefined) el.style.transform = `scale(${params.scale})`;
        }
      });
    }
    return null;
  }

  return animate(params);
};

/**
 * Page Load Animations
 */

// Fade in from bottom
export const fadeInUp = (
  target: string | HTMLElement | HTMLElement[],
  delay: number = 0,
  duration: number = 800
): AnimeInstance | null => {
  return safeAnimate({
    targets: target,
    opacity: [0, 1],
    translateY: [40, 0],
    easing: 'easeOutCubic',
    duration,
    delay,
  });
};

// Fade in from top
export const fadeInDown = (
  target: string | HTMLElement | HTMLElement[],
  delay: number = 0,
  duration: number = 800
): AnimeInstance | null => {
  return safeAnimate({
    targets: target,
    opacity: [0, 1],
    translateY: [-40, 0],
    easing: 'easeOutCubic',
    duration,
    delay,
  });
};

// Fade in from left
export const fadeInLeft = (
  target: string | HTMLElement | HTMLElement[],
  delay: number = 0,
  duration: number = 800
): AnimeInstance | null => {
  return safeAnimate({
    targets: target,
    opacity: [0, 1],
    translateX: [-60, 0],
    easing: 'easeOutCubic',
    duration,
    delay,
  });
};

// Fade in from right
export const fadeInRight = (
  target: string | HTMLElement | HTMLElement[],
  delay: number = 0,
  duration: number = 800
): AnimeInstance | null => {
  return safeAnimate({
    targets: target,
    opacity: [0, 1],
    translateX: [60, 0],
    easing: 'easeOutCubic',
    duration,
    delay,
  });
};

// Scale in with fade
export const scaleIn = (
  target: string | HTMLElement | HTMLElement[],
  delay: number = 0,
  duration: number = 600
): AnimeInstance | null => {
  return safeAnimate({
    targets: target,
    opacity: [0, 1],
    scale: [0.8, 1],
    easing: 'easeOutElastic(1, .6)',
    duration,
    delay,
  });
};

// Zoom in effect
export const zoomIn = (
  target: string | HTMLElement | HTMLElement[],
  delay: number = 0,
  duration: number = 800
): AnimeInstance | null => {
  return safeAnimate({
    targets: target,
    opacity: [0, 1],
    scale: [0.95, 1],
    easing: 'easeOutCubic',
    duration,
    delay,
  });
};

/**
 * Stagger Animations
 */

// Stagger fade in up
export const staggerFadeInUp = (
  targets: string | HTMLElement[],
  staggerDelay: number = 100,
  duration: number = 800
): AnimeInstance | null => {
  return safeAnimate({
    targets,
    opacity: [0, 1],
    translateY: [40, 0],
    easing: 'easeOutCubic',
    duration,
    delay: utils.stagger(staggerDelay),
  });
};

// Stagger scale in
export const staggerScaleIn = (
  targets: string | HTMLElement[],
  staggerDelay: number = 100,
  duration: number = 600
): AnimeInstance | null => {
  return safeAnimate({
    targets,
    opacity: [0, 1],
    scale: [0.8, 1],
    easing: 'easeOutElastic(1, .6)',
    duration,
    delay: utils.stagger(staggerDelay),
  });
};

/**
 * Scroll Animations with Intersection Observer
 */

export interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  animationType?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn' | 'zoomIn';
  duration?: number;
  delay?: number;
  once?: boolean;
}

export const animateOnScroll = (
  selector: string,
  options: ScrollAnimationOptions = {}
): void => {
  const {
    threshold = 0.2,
    rootMargin = '0px',
    animationType = 'fadeInUp',
    duration = 800,
    delay = 0,
    once = true,
  } = options;

  console.log('[animateOnScroll] Setting up observer for:', selector);

  const elements = document.querySelectorAll(selector);

  if (elements.length === 0) {
    console.log('[animateOnScroll] No elements found for:', selector);
    return;
  }

  console.log('[animateOnScroll] Found', elements.length, 'elements');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          console.log('[animateOnScroll] Element in view, adding in-view class');

          // Add CSS class to trigger animation
          target.classList.add('in-view');

          // Unobserve if once is true
          if (once) {
            observer.unobserve(entry.target);
          }
        }
      });
    },
    { threshold, rootMargin }
  );

  elements.forEach((el) => observer.observe(el));
};

/**
 * Hover Animations
 */

export const addHoverScale = (
  selector: string,
  scale: number = 1.05,
  duration: number = 200
): void => {
  if (prefersReducedMotion()) return;

  const elements = document.querySelectorAll(selector);

  elements.forEach((el) => {
    el.addEventListener('mouseenter', () => {
      animate({
        targets: el,
        scale,
        duration,
        easing: 'easeOutCubic',
      });
    });

    el.addEventListener('mouseleave', () => {
      animate({
        targets: el,
        scale: 1,
        duration,
        easing: 'easeOutCubic',
      });
    });
  });
};

export const addHoverLift = (
  selector: string,
  translateY: number = -8,
  duration: number = 200
): void => {
  if (prefersReducedMotion()) return;

  const elements = document.querySelectorAll(selector);

  elements.forEach((el) => {
    el.addEventListener('mouseenter', () => {
      animate({
        targets: el,
        translateY,
        duration,
        easing: 'easeOutCubic',
      });
    });

    el.addEventListener('mouseleave', () => {
      animate({
        targets: el,
        translateY: 0,
        duration,
        easing: 'easeOutCubic',
      });
    });
  });
};

/**
 * Loading Animations
 */

export const pulse = (
  target: string | HTMLElement,
  duration: number = 1000
): AnimeInstance | null => {
  return safeAnimate({
    targets: target,
    scale: [1, 1.1, 1],
    opacity: [1, 0.8, 1],
    duration,
    easing: 'easeInOutQuad',
    loop: true,
  });
};

export const rotate = (
  target: string | HTMLElement,
  duration: number = 1000
): AnimeInstance | null => {
  return safeAnimate({
    targets: target,
    rotate: '360deg',
    duration,
    easing: 'linear',
    loop: true,
  });
};

/**
 * Number Counter Animation
 */

export const animateCounter = (
  element: HTMLElement,
  endValue: number,
  duration: number = 2000,
  decimals: number = 0
): AnimeInstance | null => {
  const obj = { value: 0 };

  return safeAnimate({
    targets: obj,
    value: endValue,
    duration,
    easing: 'easeOutCubic',
    round: decimals === 0 ? 1 : 0,
    update: () => {
      element.textContent = decimals === 0
        ? Math.round(obj.value).toLocaleString()
        : obj.value.toFixed(decimals);
    },
  });
};

/**
 * Page Transition Animation
 */

export const pageTransitionOut = (
  onComplete?: () => void
): AnimeInstance | null => {
  return safeAnimate({
    targets: '#main-content',
    opacity: [1, 0],
    translateY: [0, -20],
    duration: 300,
    easing: 'easeInCubic',
    complete: onComplete,
  });
};

export const pageTransitionIn = (): AnimeInstance | null => {
  return safeAnimate({
    targets: '#main-content',
    opacity: [0, 1],
    translateY: [20, 0],
    duration: 400,
    easing: 'easeOutCubic',
  });
};

/**
 * Utility: Sequential animations
 */

export const sequence = (animations: Array<() => AnimeInstance | null>): void => {
  if (animations.length === 0) return;

  const [first, ...rest] = animations;
  const instance = first();

  if (instance && rest.length > 0) {
    instance.finished.then(() => sequence(rest));
  }
};

/**
 * Utility: Parallel animations
 */

export const parallel = (animations: Array<() => AnimeInstance | null>): void => {
  animations.forEach((anim) => anim());
};
