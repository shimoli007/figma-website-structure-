/**
 * Animation Utilities with anime.js
 * Provides scroll-triggered animations, entrance animations, and micro-interactions
 */

import anime from 'animejs';

// ============================================
// CONFIGURATION & CONSTANTS
// ============================================

export const ANIMATION_DURATIONS = {
  instant: 150,
  fast: 300,
  normal: 500,
  slow: 800,
  slower: 1200,
} as const;

export const ANIMATION_EASINGS = {
  // Entrance animations
  easeOutExpo: 'easeOutExpo',
  easeOutCubic: 'easeOutCubic',
  easeOutQuad: 'easeOutQuad',
  // Micro-interactions
  easeInOutQuad: 'easeInOutQuad',
  easeInOutCubic: 'easeInOutCubic',
  // Elastic & Spring
  spring: 'spring(1, 80, 10, 0)',
  elasticOut: 'easeOutElastic(1, .5)',
  // Custom
  custom: [0.25, 0.46, 0.45, 0.94],
} as const;

export const INTERSECTION_OPTIONS = {
  default: {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
  },
  immediate: {
    threshold: 0,
    rootMargin: '0px',
  },
  delayed: {
    threshold: 0.2,
    rootMargin: '0px 0px -200px 0px',
  },
} as const;

// ============================================
// ENTRANCE ANIMATIONS
// ============================================

/**
 * Fade in from bottom animation
 */
export const fadeInUp = (
  target: string | HTMLElement,
  options: Partial<anime.AnimeParams> = {}
) => {
  return anime({
    targets: target,
    opacity: [0, 1],
    translateY: [40, 0],
    duration: options.duration || ANIMATION_DURATIONS.normal,
    easing: options.easing || ANIMATION_EASINGS.easeOutExpo,
    ...options,
  });
};

/**
 * Fade in from top animation
 */
export const fadeInDown = (
  target: string | HTMLElement,
  options: Partial<anime.AnimeParams> = {}
) => {
  return anime({
    targets: target,
    opacity: [0, 1],
    translateY: [-40, 0],
    duration: options.duration || ANIMATION_DURATIONS.normal,
    easing: options.easing || ANIMATION_EASINGS.easeOutExpo,
    ...options,
  });
};

/**
 * Fade in from left animation
 */
export const fadeInLeft = (
  target: string | HTMLElement,
  options: Partial<anime.AnimeParams> = {}
) => {
  return anime({
    targets: target,
    opacity: [0, 1],
    translateX: [-40, 0],
    duration: options.duration || ANIMATION_DURATIONS.normal,
    easing: options.easing || ANIMATION_EASINGS.easeOutExpo,
    ...options,
  });
};

/**
 * Fade in from right animation
 */
export const fadeInRight = (
  target: string | HTMLElement,
  options: Partial<anime.AnimeParams> = {}
) => {
  return anime({
    targets: target,
    opacity: [0, 1],
    translateX: [40, 0],
    duration: options.duration || ANIMATION_DURATIONS.normal,
    easing: options.easing || ANIMATION_EASINGS.easeOutExpo,
    ...options,
  });
};

/**
 * Simple fade in animation
 */
export const fadeIn = (
  target: string | HTMLElement,
  options: Partial<anime.AnimeParams> = {}
) => {
  return anime({
    targets: target,
    opacity: [0, 1],
    duration: options.duration || ANIMATION_DURATIONS.normal,
    easing: options.easing || ANIMATION_EASINGS.easeOutCubic,
    ...options,
  });
};

/**
 * Scale in animation with fade
 */
export const scaleIn = (
  target: string | HTMLElement,
  options: Partial<anime.AnimeParams> = {}
) => {
  return anime({
    targets: target,
    opacity: [0, 1],
    scale: [0.8, 1],
    duration: options.duration || ANIMATION_DURATIONS.normal,
    easing: options.easing || ANIMATION_EASINGS.easeOutExpo,
    ...options,
  });
};

/**
 * Zoom in animation
 */
export const zoomIn = (
  target: string | HTMLElement,
  options: Partial<anime.AnimeParams> = {}
) => {
  return anime({
    targets: target,
    opacity: [0, 1],
    scale: [0.5, 1],
    duration: options.duration || ANIMATION_DURATIONS.slow,
    easing: options.easing || ANIMATION_EASINGS.easeOutExpo,
    ...options,
  });
};

/**
 * Slide in from bottom animation
 */
export const slideInUp = (
  target: string | HTMLElement,
  options: Partial<anime.AnimeParams> = {}
) => {
  return anime({
    targets: target,
    translateY: ['100%', '0%'],
    duration: options.duration || ANIMATION_DURATIONS.slow,
    easing: options.easing || ANIMATION_EASINGS.easeOutExpo,
    ...options,
  });
};

/**
 * Stagger animation for multiple elements
 */
export const staggerFadeIn = (
  targets: string | NodeList | HTMLElement[],
  options: Partial<anime.AnimeParams> = {}
) => {
  return anime({
    targets,
    opacity: [0, 1],
    translateY: [20, 0],
    duration: options.duration || ANIMATION_DURATIONS.normal,
    easing: options.easing || ANIMATION_EASINGS.easeOutExpo,
    delay: anime.stagger(100),
    ...options,
  });
};

// ============================================
// MICRO-INTERACTIONS
// ============================================

/**
 * Button hover animation
 */
export const buttonHover = (target: HTMLElement) => {
  return anime({
    targets: target,
    scale: 1.05,
    duration: ANIMATION_DURATIONS.fast,
    easing: ANIMATION_EASINGS.easeOutCubic,
  });
};

/**
 * Button hover reset
 */
export const buttonHoverReset = (target: HTMLElement) => {
  return anime({
    targets: target,
    scale: 1,
    duration: ANIMATION_DURATIONS.fast,
    easing: ANIMATION_EASINGS.easeOutCubic,
  });
};

/**
 * Pulse animation for attention
 */
export const pulse = (
  target: string | HTMLElement,
  options: Partial<anime.AnimeParams> = {}
) => {
  return anime({
    targets: target,
    scale: [1, 1.1, 1],
    duration: options.duration || ANIMATION_DURATIONS.slow,
    easing: ANIMATION_EASINGS.easeInOutQuad,
    loop: options.loop !== undefined ? options.loop : true,
    ...options,
  });
};

/**
 * Shake animation for errors
 */
export const shake = (target: string | HTMLElement) => {
  return anime({
    targets: target,
    translateX: [
      { value: -10, duration: 100 },
      { value: 10, duration: 100 },
      { value: -10, duration: 100 },
      { value: 10, duration: 100 },
      { value: 0, duration: 100 },
    ],
    easing: ANIMATION_EASINGS.easeInOutQuad,
  });
};

/**
 * Bounce animation
 */
export const bounce = (
  target: string | HTMLElement,
  options: Partial<anime.AnimeParams> = {}
) => {
  return anime({
    targets: target,
    translateY: [
      { value: -20, duration: 200 },
      { value: 0, duration: 200 },
      { value: -10, duration: 200 },
      { value: 0, duration: 200 },
    ],
    easing: ANIMATION_EASINGS.easeOutCubic,
    ...options,
  });
};

/**
 * Rotate animation
 */
export const rotate = (
  target: string | HTMLElement,
  options: Partial<anime.AnimeParams> = {}
) => {
  return anime({
    targets: target,
    rotate: options.rotate || 360,
    duration: options.duration || ANIMATION_DURATIONS.normal,
    easing: options.easing || ANIMATION_EASINGS.easeInOutCubic,
    ...options,
  });
};

/**
 * Glow effect animation
 */
export const glow = (
  target: string | HTMLElement,
  options: { color?: string; duration?: number } = {}
) => {
  const element = typeof target === 'string' ? document.querySelector(target) : target;
  if (!element) return null;

  return anime({
    targets: element,
    boxShadow: [
      `0 0 0px ${options.color || 'rgba(99, 102, 241, 0)'}`,
      `0 0 20px ${options.color || 'rgba(99, 102, 241, 0.5)'}`,
      `0 0 0px ${options.color || 'rgba(99, 102, 241, 0)'}`,
    ],
    duration: options.duration || ANIMATION_DURATIONS.slower,
    easing: ANIMATION_EASINGS.easeInOutQuad,
    loop: true,
  });
};

/**
 * Ripple effect (similar to Material Design)
 */
export const ripple = (
  event: MouseEvent,
  target: HTMLElement,
  options: { color?: string; duration?: number } = {}
) => {
  const rect = target.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;

  const rippleElement = document.createElement('span');
  rippleElement.style.cssText = `
    position: absolute;
    width: ${size}px;
    height: ${size}px;
    border-radius: 50%;
    background: ${options.color || 'rgba(255, 255, 255, 0.5)'};
    left: ${x}px;
    top: ${y}px;
    pointer-events: none;
  `;

  target.style.position = 'relative';
  target.style.overflow = 'hidden';
  target.appendChild(rippleElement);

  anime({
    targets: rippleElement,
    scale: [0, 2],
    opacity: [0.5, 0],
    duration: options.duration || ANIMATION_DURATIONS.slow,
    easing: ANIMATION_EASINGS.easeOutCubic,
    complete: () => rippleElement.remove(),
  });
};

// ============================================
// SCROLL-TRIGGERED ANIMATIONS
// ============================================

/**
 * Intersection Observer manager for scroll animations
 */
class ScrollAnimationManager {
  private observers: Map<string, IntersectionObserver> = new Map();
  private animatedElements: Set<Element> = new Set();

  /**
   * Observe an element and trigger animation when it enters viewport
   */
  observe(
    target: string | Element,
    animationFn: (element: Element) => void,
    options: IntersectionObserverInit = INTERSECTION_OPTIONS.default
  ) {
    const elements =
      typeof target === 'string'
        ? document.querySelectorAll(target)
        : [target];

    if (elements.length === 0) return;

    const observerId = `observer-${Date.now()}-${Math.random()}`;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !this.animatedElements.has(entry.target)) {
          animationFn(entry.target);
          this.animatedElements.add(entry.target);
          // Optionally unobserve after animation
          observer.unobserve(entry.target);
        }
      });
    }, options);

    elements.forEach((element) => observer.observe(element));
    this.observers.set(observerId, observer);

    return observerId;
  }

  /**
   * Disconnect a specific observer
   */
  disconnect(observerId: string) {
    const observer = this.observers.get(observerId);
    if (observer) {
      observer.disconnect();
      this.observers.delete(observerId);
    }
  }

  /**
   * Disconnect all observers
   */
  disconnectAll() {
    this.observers.forEach((observer) => observer.disconnect());
    this.observers.clear();
    this.animatedElements.clear();
  }

  /**
   * Reset animation state for an element (allow it to animate again)
   */
  reset(element: Element) {
    this.animatedElements.delete(element);
  }
}

// Export singleton instance
export const scrollAnimationManager = new ScrollAnimationManager();

/**
 * Helper: Animate element on scroll into view
 */
export const animateOnScroll = (
  selector: string,
  animationType: 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn' | 'zoomIn' = 'fadeInUp',
  options?: {
    intersectionOptions?: IntersectionObserverInit;
    animationOptions?: Partial<anime.AnimeParams>;
  }
) => {
  const animationMap = {
    fadeInUp,
    fadeInDown,
    fadeInLeft,
    fadeInRight,
    scaleIn,
    zoomIn,
  };

  const animationFn = animationMap[animationType];

  return scrollAnimationManager.observe(
    selector,
    (element) => animationFn(element, options?.animationOptions),
    options?.intersectionOptions || INTERSECTION_OPTIONS.default
  );
};

/**
 * Helper: Stagger animate children on scroll
 */
export const staggerOnScroll = (
  parentSelector: string,
  childSelector: string,
  options?: {
    intersectionOptions?: IntersectionObserverInit;
    animationOptions?: Partial<anime.AnimeParams>;
  }
) => {
  return scrollAnimationManager.observe(
    parentSelector,
    (parent) => {
      const children = parent.querySelectorAll(childSelector);
      staggerFadeIn(children, options?.animationOptions);
    },
    options?.intersectionOptions || INTERSECTION_OPTIONS.default
  );
};

// ============================================
// ADVANCED ANIMATIONS
// ============================================

/**
 * Parallax scroll effect
 */
export const parallaxScroll = (
  target: string | HTMLElement,
  options: { speed?: number; direction?: 'up' | 'down' } = {}
) => {
  const element = typeof target === 'string' ? document.querySelector(target) : target;
  if (!element) return;

  const speed = options.speed || 0.5;
  const direction = options.direction || 'up';
  const multiplier = direction === 'up' ? -1 : 1;

  const handleScroll = () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * speed * multiplier;
    (element as HTMLElement).style.transform = `translateY(${rate}px)`;
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
};

/**
 * Typewriter effect
 */
export const typewriter = (
  target: string | HTMLElement,
  options: { speed?: number; text?: string } = {}
) => {
  const element = typeof target === 'string' ? document.querySelector(target) : target;
  if (!element) return null;

  const text = options.text || element.textContent || '';
  const speed = options.speed || 50;

  element.textContent = '';

  let index = 0;
  const interval = setInterval(() => {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
    } else {
      clearInterval(interval);
    }
  }, speed);

  return () => clearInterval(interval);
};

/**
 * Morph animation between two states
 */
export const morph = (
  target: string | HTMLElement,
  fromState: Partial<CSSStyleDeclaration>,
  toState: Partial<CSSStyleDeclaration>,
  options: Partial<anime.AnimeParams> = {}
) => {
  const element = typeof target === 'string' ? document.querySelector(target) : target;
  if (!element) return null;

  // Apply from state
  Object.assign((element as HTMLElement).style, fromState);

  // Animate to target state
  return anime({
    targets: element,
    ...toState,
    duration: options.duration || ANIMATION_DURATIONS.normal,
    easing: options.easing || ANIMATION_EASINGS.easeInOutCubic,
    ...options,
  });
};

/**
 * Counter animation
 */
export const counterAnimation = (
  target: string | HTMLElement,
  options: { from?: number; to: number; duration?: number; format?: (value: number) => string } = { to: 100 }
) => {
  const element = typeof target === 'string' ? document.querySelector(target) : target;
  if (!element) return null;

  const obj = { value: options.from || 0 };
  const format = options.format || ((val: number) => Math.round(val).toString());

  return anime({
    targets: obj,
    value: options.to,
    round: 1,
    duration: options.duration || ANIMATION_DURATIONS.slower,
    easing: ANIMATION_EASINGS.easeOutExpo,
    update: () => {
      element.textContent = format(obj.value);
    },
  });
};

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Create a timeline for complex animation sequences
 */
export const createTimeline = (options?: anime.AnimeTimelineInstance) => {
  return anime.timeline(options);
};

/**
 * Batch animate multiple elements with different animations
 */
export const batchAnimate = (
  animations: Array<{
    target: string | HTMLElement;
    animation: (target: string | HTMLElement, options?: any) => any;
    options?: any;
  }>
) => {
  return animations.map((anim) => anim.animation(anim.target, anim.options));
};

/**
 * Wait for animation to complete (returns promise)
 */
export const waitForAnimation = (animation: anime.AnimeInstance): Promise<void> => {
  return new Promise((resolve) => {
    animation.finished.then(() => resolve());
  });
};

export default {
  // Constants
  ANIMATION_DURATIONS,
  ANIMATION_EASINGS,
  INTERSECTION_OPTIONS,

  // Entrance animations
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  fadeIn,
  scaleIn,
  zoomIn,
  slideInUp,
  staggerFadeIn,

  // Micro-interactions
  buttonHover,
  buttonHoverReset,
  pulse,
  shake,
  bounce,
  rotate,
  glow,
  ripple,

  // Scroll animations
  scrollAnimationManager,
  animateOnScroll,
  staggerOnScroll,

  // Advanced
  parallaxScroll,
  typewriter,
  morph,
  counterAnimation,

  // Utilities
  createTimeline,
  batchAnimate,
  waitForAnimation,
};
