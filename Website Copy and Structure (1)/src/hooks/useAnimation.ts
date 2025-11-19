import { useEffect, useRef } from 'react';
import * as animations from '../utils/animations';

/**
 * Hook for fade in animation on mount
 */
export function useFadeIn(options?: {
  duration?: number;
  delay?: number;
  easing?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref.current) {
      animations.fadeIn(ref.current, options);
    }
  }, []);

  return ref;
}

/**
 * Hook for slide in up animation on mount
 */
export function useSlideInUp(options?: {
  duration?: number;
  delay?: number;
  distance?: number;
  easing?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref.current) {
      animations.slideInUp(ref.current, options);
    }
  }, []);

  return ref;
}

/**
 * Hook for slide in left animation on mount
 */
export function useSlideInLeft(options?: {
  duration?: number;
  delay?: number;
  distance?: number;
  easing?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref.current) {
      animations.slideInLeft(ref.current, options);
    }
  }, []);

  return ref;
}

/**
 * Hook for slide in right animation on mount
 */
export function useSlideInRight(options?: {
  duration?: number;
  delay?: number;
  distance?: number;
  easing?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref.current) {
      animations.slideInRight(ref.current, options);
    }
  }, []);

  return ref;
}

/**
 * Hook for scale in animation on mount
 */
export function useScaleIn(options?: {
  duration?: number;
  delay?: number;
  from?: number;
  easing?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref.current) {
      animations.scaleIn(ref.current, options);
    }
  }, []);

  return ref;
}

/**
 * Hook for stagger fade in animation on mount
 */
export function useStaggerFadeIn(options?: {
  duration?: number;
  delay?: number;
  staggerDelay?: number;
  easing?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref.current) {
      const children = ref.current.children;
      if (children.length > 0) {
        animations.staggerFadeIn(Array.from(children) as HTMLElement[], options);
      }
    }
  }, []);

  return ref;
}

/**
 * Hook for scroll-triggered animation
 */
export function useScrollAnimation(
  animation: {
    opacity?: [number, number];
    translateY?: [number, number];
    scale?: [number, number];
    rotate?: [number, number];
  },
  options?: {
    duration?: number;
    offset?: number;
    easing?: string;
  }
) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    let cleanup: IntersectionObserver | undefined;

    if (ref.current) {
      animations.onScrollAnimate(ref.current, animation, options).then((observer) => {
        cleanup = observer;
      });
    }

    return () => {
      if (cleanup) {
        cleanup.disconnect();
      }
    };
  }, []);

  return ref;
}

/**
 * Hook for parallax scrolling effect
 */
export function useParallax(options?: {
  speed?: number;
  direction?: 'vertical' | 'horizontal';
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    let cleanup: (() => void) | undefined;

    if (ref.current) {
      animations.parallax(ref.current, options).then((cleanupFn) => {
        cleanup = cleanupFn;
      });
    }

    return () => {
      if (cleanup) {
        cleanup();
      }
    };
  }, []);

  return ref;
}

/**
 * Hook for counter animation
 */
export function useCountUp(
  from: number,
  to: number,
  options?: {
    duration?: number;
    decimals?: number;
    suffix?: string;
    prefix?: string;
    startOnView?: boolean;
  }
) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref.current) {
      if (options?.startOnView) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting && ref.current) {
                animations.countUp(ref.current, from, to, options);
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.1 }
        );

        observer.observe(ref.current);

        return () => observer.disconnect();
      } else {
        animations.countUp(ref.current, from, to, options);
      }
    }
  }, [from, to]);

  return ref;
}

/**
 * Hook for reveal text animation
 */
export function useRevealText(options?: {
  duration?: number;
  delay?: number;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && ref.current) {
              animations.revealText(ref.current, options);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(ref.current);

      return () => observer.disconnect();
    }
  }, []);

  return ref;
}
