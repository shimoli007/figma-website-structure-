/**
 * Scroll-Triggered Animations with Intersection Observer
 * Provides smooth scroll-based animations for the Cynea AI website
 */

import anime, { AnimeInstance } from 'animejs';

/**
 * Intersection Observer Options
 */
export interface ScrollAnimationOptions {
  threshold?: number | number[];
  rootMargin?: string;
  triggerOnce?: boolean;
  animationDelay?: number;
  animationType?:
    | 'fadeIn'
    | 'fadeInUp'
    | 'fadeInDown'
    | 'fadeInLeft'
    | 'fadeInRight'
    | 'scaleIn'
    | 'slideInLeft'
    | 'slideInRight'
    | 'custom';
  customAnimation?: (element: HTMLElement) => AnimeInstance;
  onEnter?: (element: HTMLElement) => void;
  onLeave?: (element: HTMLElement) => void;
}

/**
 * Animation configurations for different types
 */
const animationConfigs = {
  fadeIn: (element: HTMLElement, delay = 0): AnimeInstance => {
    return anime({
      targets: element,
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 800,
      delay,
      easing: 'easeOutCubic',
    });
  },

  fadeInUp: (element: HTMLElement, delay = 0): AnimeInstance => {
    return anime({
      targets: element,
      opacity: [0, 1],
      translateY: [40, 0],
      duration: 1000,
      delay,
      easing: 'easeOutExpo',
    });
  },

  fadeInDown: (element: HTMLElement, delay = 0): AnimeInstance => {
    return anime({
      targets: element,
      opacity: [0, 1],
      translateY: [-40, 0],
      duration: 1000,
      delay,
      easing: 'easeOutExpo',
    });
  },

  fadeInLeft: (element: HTMLElement, delay = 0): AnimeInstance => {
    return anime({
      targets: element,
      opacity: [0, 1],
      translateX: [-60, 0],
      duration: 1000,
      delay,
      easing: 'easeOutExpo',
    });
  },

  fadeInRight: (element: HTMLElement, delay = 0): AnimeInstance => {
    return anime({
      targets: element,
      opacity: [0, 1],
      translateX: [60, 0],
      duration: 1000,
      delay,
      easing: 'easeOutExpo',
    });
  },

  scaleIn: (element: HTMLElement, delay = 0): AnimeInstance => {
    return anime({
      targets: element,
      opacity: [0, 1],
      scale: [0.8, 1],
      duration: 800,
      delay,
      easing: 'easeOutElastic(1, .6)',
    });
  },

  slideInLeft: (element: HTMLElement, delay = 0): AnimeInstance => {
    return anime({
      targets: element,
      opacity: [0, 1],
      translateX: ['-100%', 0],
      duration: 1000,
      delay,
      easing: 'easeOutExpo',
    });
  },

  slideInRight: (element: HTMLElement, delay = 0): AnimeInstance => {
    return anime({
      targets: element,
      opacity: [0, 1],
      translateX: ['100%', 0],
      duration: 1000,
      delay,
      easing: 'easeOutExpo',
    });
  },
};

/**
 * ScrollAnimationObserver Class
 * Manages scroll-triggered animations using Intersection Observer
 */
export class ScrollAnimationObserver {
  private observer: IntersectionObserver | null = null;
  private elements: Map<HTMLElement, ScrollAnimationOptions> = new Map();
  private triggeredElements: Set<HTMLElement> = new Set();

  constructor(defaultOptions?: IntersectionObserverInit) {
    const options: IntersectionObserverInit = {
      threshold: defaultOptions?.threshold || 0.1,
      rootMargin: defaultOptions?.rootMargin || '0px 0px -100px 0px',
      root: defaultOptions?.root || null,
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const element = entry.target as HTMLElement;
        const animOptions = this.elements.get(element);

        if (!animOptions) return;

        if (entry.isIntersecting) {
          // Element is in view
          if (animOptions.triggerOnce && this.triggeredElements.has(element)) {
            return; // Already triggered, skip
          }

          this.animateElement(element, animOptions);
          this.triggeredElements.add(element);

          if (animOptions.onEnter) {
            animOptions.onEnter(element);
          }
        } else {
          // Element is out of view
          if (animOptions.onLeave) {
            animOptions.onLeave(element);
          }
        }
      });
    }, options);
  }

  /**
   * Animate an element based on the specified animation type
   */
  private animateElement(element: HTMLElement, options: ScrollAnimationOptions): void {
    const delay = options.animationDelay || 0;

    if (options.animationType === 'custom' && options.customAnimation) {
      options.customAnimation(element);
    } else if (options.animationType && animationConfigs[options.animationType]) {
      animationConfigs[options.animationType](element, delay);
    } else {
      // Default animation
      animationConfigs.fadeIn(element, delay);
    }
  }

  /**
   * Observe an element for scroll animations
   */
  observe(element: HTMLElement | string, options: ScrollAnimationOptions = {}): void {
    const targetElement =
      typeof element === 'string' ? document.querySelector<HTMLElement>(element) : element;

    if (!targetElement || !this.observer) return;

    // Set initial state
    targetElement.style.opacity = '0';

    this.elements.set(targetElement, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
      triggerOnce: true,
      animationType: 'fadeIn',
      ...options,
    });

    this.observer.observe(targetElement);
  }

  /**
   * Observe multiple elements with the same options
   */
  observeMultiple(
    elements: HTMLElement[] | NodeListOf<HTMLElement> | string,
    options: ScrollAnimationOptions = {}
  ): void {
    let targetElements: HTMLElement[] = [];

    if (typeof elements === 'string') {
      targetElements = Array.from(document.querySelectorAll<HTMLElement>(elements));
    } else {
      targetElements = Array.from(elements);
    }

    targetElements.forEach((element) => {
      this.observe(element, options);
    });
  }

  /**
   * Stop observing an element
   */
  unobserve(element: HTMLElement | string): void {
    const targetElement =
      typeof element === 'string' ? document.querySelector<HTMLElement>(element) : element;

    if (!targetElement || !this.observer) return;

    this.observer.unobserve(targetElement);
    this.elements.delete(targetElement);
  }

  /**
   * Disconnect the observer and clean up
   */
  disconnect(): void {
    if (this.observer) {
      this.observer.disconnect();
      this.elements.clear();
      this.triggeredElements.clear();
    }
  }

  /**
   * Reset triggered elements (useful for re-triggering animations)
   */
  reset(): void {
    this.triggeredElements.clear();
  }
}

/**
 * Create a scroll animation observer instance
 */
export const createScrollObserver = (
  options?: IntersectionObserverInit
): ScrollAnimationObserver => {
  return new ScrollAnimationObserver(options);
};

/**
 * Utility function to add scroll animations to elements
 */
export const addScrollAnimation = (
  selector: string,
  animationType: ScrollAnimationOptions['animationType'] = 'fadeIn',
  options: Partial<ScrollAnimationOptions> = {}
): ScrollAnimationObserver => {
  const observer = createScrollObserver();
  observer.observeMultiple(selector, {
    animationType,
    ...options,
  });
  return observer;
};

/**
 * Staggered scroll animations
 */
export const addStaggeredScrollAnimation = (
  selector: string,
  animationType: ScrollAnimationOptions['animationType'] = 'fadeInUp',
  staggerDelay = 100
): ScrollAnimationObserver => {
  const observer = createScrollObserver();
  const elements = document.querySelectorAll<HTMLElement>(selector);

  elements.forEach((element, index) => {
    observer.observe(element, {
      animationType,
      animationDelay: index * staggerDelay,
      triggerOnce: true,
    });
  });

  return observer;
};

/**
 * Parallax scroll effect
 */
export const createParallaxEffect = (
  element: HTMLElement | string,
  speed: number = 0.5
): void => {
  const targetElement =
    typeof element === 'string' ? document.querySelector<HTMLElement>(element) : element;

  if (!targetElement) return;

  const handleScroll = () => {
    const rect = targetElement.getBoundingClientRect();
    const scrolled = window.scrollY;
    const rate = scrolled * speed;

    targetElement.style.transform = `translateY(${rate}px)`;
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
};

/**
 * Scroll-triggered counter animation
 */
export const animateCounter = (
  element: HTMLElement | string,
  start: number = 0,
  end: number = 100,
  duration: number = 2000,
  suffix: string = ''
): void => {
  const targetElement =
    typeof element === 'string' ? document.querySelector<HTMLElement>(element) : element;

  if (!targetElement) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          anime({
            targets: { value: start },
            value: end,
            duration,
            easing: 'easeOutExpo',
            round: 1,
            update: function (anim) {
              const currentValue = Math.floor((anim.animations[0].currentValue as number) || 0);
              targetElement.textContent = currentValue + suffix;
            },
          });

          observer.disconnect();
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(targetElement);
};

/**
 * Scroll progress indicator
 */
export const createScrollProgress = (element: HTMLElement | string): void => {
  const targetElement =
    typeof element === 'string' ? document.querySelector<HTMLElement>(element) : element;

  if (!targetElement) return;

  const updateProgress = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;
    const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;

    targetElement.style.width = `${scrollPercent}%`;
  };

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
};

/**
 * Reveal on scroll with direction detection
 */
export const revealOnScroll = (
  selector: string,
  options: {
    revealFromLeft?: boolean;
    revealFromRight?: boolean;
    revealFromTop?: boolean;
    revealFromBottom?: boolean;
  } = {}
): ScrollAnimationObserver => {
  const { revealFromLeft, revealFromRight, revealFromTop, revealFromBottom } = options;

  let animationType: ScrollAnimationOptions['animationType'] = 'fadeIn';

  if (revealFromLeft) animationType = 'fadeInLeft';
  else if (revealFromRight) animationType = 'fadeInRight';
  else if (revealFromTop) animationType = 'fadeInDown';
  else if (revealFromBottom) animationType = 'fadeInUp';

  return addScrollAnimation(selector, animationType, { triggerOnce: true });
};

/**
 * Section reveal animation - reveals entire sections with children
 */
export const revealSection = (sectionSelector: string, childSelector: string): void => {
  const observer = createScrollObserver({
    threshold: 0.2,
  });

  const section = document.querySelector<HTMLElement>(sectionSelector);
  if (!section) return;

  const children = section.querySelectorAll<HTMLElement>(childSelector);

  observer.observe(section, {
    animationType: 'custom',
    triggerOnce: true,
    customAnimation: () => {
      return anime({
        targets: Array.from(children),
        opacity: [0, 1],
        translateY: [40, 0],
        duration: 800,
        delay: anime.stagger(100),
        easing: 'easeOutExpo',
      });
    },
  });
};

export default {
  ScrollAnimationObserver,
  createScrollObserver,
  addScrollAnimation,
  addStaggeredScrollAnimation,
  createParallaxEffect,
  animateCounter,
  createScrollProgress,
  revealOnScroll,
  revealSection,
};
