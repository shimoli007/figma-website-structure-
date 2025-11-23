/**
 * React Hooks for Animations
 * Easy-to-use hooks for integrating animations in React components
 */

import { useEffect, useRef, RefObject } from 'react';
import { animationPresets } from './animations';
import {
  createScrollObserver,
  ScrollAnimationOptions,
  ScrollAnimationObserver,
} from './scrollAnimations';
import { buttonInteractions, cardInteractions, iconInteractions } from './microInteractions';
import anime, { AnimeInstance } from 'animejs';

/**
 * Hook for entrance animations
 */
export const useEntranceAnimation = (
  animationType: keyof typeof animationPresets = 'fadeIn',
  delay: number = 0
): RefObject<HTMLDivElement> => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current && animationPresets[animationType]) {
      animationPresets[animationType](ref.current, delay);
    }
  }, [animationType, delay]);

  return ref;
};

/**
 * Hook for scroll animations with Intersection Observer
 */
export const useScrollAnimation = (
  options: ScrollAnimationOptions = {}
): RefObject<HTMLDivElement> => {
  const ref = useRef<HTMLDivElement>(null);
  const observerRef = useRef<ScrollAnimationObserver | null>(null);

  useEffect(() => {
    if (ref.current) {
      observerRef.current = createScrollObserver();
      observerRef.current.observe(ref.current, {
        animationType: 'fadeInUp',
        triggerOnce: true,
        ...options,
      });
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [options]);

  return ref;
};

/**
 * Hook for staggered scroll animations on children
 */
export const useStaggeredScrollAnimation = (
  childSelector: string,
  staggerDelay: number = 100,
  options: ScrollAnimationOptions = {}
): RefObject<HTMLDivElement> => {
  const ref = useRef<HTMLDivElement>(null);
  const observerRef = useRef<ScrollAnimationObserver | null>(null);

  useEffect(() => {
    if (ref.current) {
      const children = ref.current.querySelectorAll<HTMLElement>(childSelector);
      observerRef.current = createScrollObserver();

      children.forEach((child, index) => {
        observerRef.current?.observe(child, {
          animationType: 'fadeInUp',
          animationDelay: index * staggerDelay,
          triggerOnce: true,
          ...options,
        });
      });
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [childSelector, staggerDelay, options]);

  return ref;
};

/**
 * Hook for button hover effects
 */
export const useButtonHover = (): RefObject<HTMLButtonElement> => {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (ref.current) {
      buttonInteractions.addHoverEffect(ref.current);
    }
  }, []);

  return ref;
};

/**
 * Hook for button ripple effect
 */
export const useButtonRipple = (): RefObject<HTMLButtonElement> => {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (ref.current) {
      buttonInteractions.addRippleEffect(ref.current);
    }
  }, []);

  return ref;
};

/**
 * Hook for card lift effect
 */
export const useCardLift = (): RefObject<HTMLDivElement> => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      cardInteractions.addLiftEffect(ref.current);
    }
  }, []);

  return ref;
};

/**
 * Hook for card tilt effect
 */
export const useCardTilt = (): RefObject<HTMLDivElement> => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      cardInteractions.addTiltEffect(ref.current);
    }
  }, []);

  return ref;
};

/**
 * Hook for card glow effect
 */
export const useCardGlow = (color: string = '124, 58, 237'): RefObject<HTMLDivElement> => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      cardInteractions.addGlowEffect(ref.current, color);
    }
  }, [color]);

  return ref;
};

/**
 * Hook for icon animations
 */
export const useIconHoverRotate = (): RefObject<HTMLElement> => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref.current) {
      iconInteractions.addHoverRotate(ref.current);
    }
  }, []);

  return ref;
};

/**
 * Hook for counter animations
 */
export const useCounterAnimation = (
  start: number = 0,
  end: number = 100,
  duration: number = 2000,
  suffix: string = ''
): RefObject<HTMLSpanElement> => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (ref.current) {
      const element = ref.current;
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
                  element.textContent = currentValue + suffix;
                },
              });

              observer.disconnect();
            }
          });
        },
        { threshold: 0.5 }
      );

      observer.observe(element);

      return () => observer.disconnect();
    }
  }, [start, end, duration, suffix]);

  return ref;
};

/**
 * Hook for parallax effect
 */
export const useParallax = (speed: number = 0.5): RefObject<HTMLDivElement> => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const scrolled = window.scrollY;
      const rate = scrolled * speed;
      element.style.transform = `translateY(${rate}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);

  return ref;
};

/**
 * Hook for magnetic button effect
 */
export const useMagneticButton = (strength: number = 0.3): RefObject<HTMLButtonElement> => {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (ref.current) {
      buttonInteractions.addMagneticEffect(ref.current, strength);
    }
  }, [strength]);

  return ref;
};

/**
 * Hook for custom animation on mount
 */
export const useAnimationOnMount = (
  animationFn: (element: HTMLElement) => AnimeInstance
): RefObject<HTMLDivElement> => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      animationFn(ref.current);
    }
  }, [animationFn]);

  return ref;
};

/**
 * Hook for scroll progress indicator
 */
export const useScrollProgress = (): RefObject<HTMLDivElement> => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const updateProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;

      element.style.width = `${scrollPercent}%`;
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();

    return () => {
      window.removeEventListener('scroll', updateProgress);
    };
  }, []);

  return ref;
};

/**
 * Hook for visibility-based animations
 */
export const useVisibilityAnimation = (
  onEnter?: () => void,
  onLeave?: () => void,
  threshold: number = 0.1
): RefObject<HTMLDivElement> => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && onEnter) {
            onEnter();
          } else if (!entry.isIntersecting && onLeave) {
            onLeave();
          }
        });
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [onEnter, onLeave, threshold]);

  return ref;
};

/**
 * Hook to trigger animation imperatively
 */
export const useAnimation = (): {
  ref: RefObject<HTMLDivElement>;
  trigger: (animationType: keyof typeof animationPresets, delay?: number) => void;
} => {
  const ref = useRef<HTMLDivElement>(null);

  const trigger = (animationType: keyof typeof animationPresets, delay: number = 0) => {
    if (ref.current && animationPresets[animationType]) {
      animationPresets[animationType](ref.current, delay);
    }
  };

  return { ref, trigger };
};

export default {
  useEntranceAnimation,
  useScrollAnimation,
  useStaggeredScrollAnimation,
  useButtonHover,
  useButtonRipple,
  useCardLift,
  useCardTilt,
  useCardGlow,
  useIconHoverRotate,
  useCounterAnimation,
  useParallax,
  useMagneticButton,
  useAnimationOnMount,
  useScrollProgress,
  useVisibilityAnimation,
  useAnimation,
};
