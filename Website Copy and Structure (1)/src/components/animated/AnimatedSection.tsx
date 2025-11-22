/**
 * AnimatedSection Component
 * A wrapper component that animates children when scrolled into view
 */

import React, { forwardRef } from 'react';
import { useScrollAnimation } from '../../hooks/useAnimations';
import { INTERSECTION_OPTIONS } from '../../utils/animations';
import type anime from 'animejs';

export interface AnimatedSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Animation type to use */
  animation?: 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn' | 'zoomIn';
  /** Animation delay in milliseconds */
  delay?: number;
  /** Animation duration in milliseconds */
  duration?: number;
  /** Intersection observer threshold (0-1) */
  threshold?: number;
  /** Root margin for intersection observer */
  rootMargin?: string;
  /** Children to animate */
  children: React.ReactNode;
  /** Additional class name */
  className?: string;
  /** HTML element to render as */
  as?: keyof JSX.IntrinsicElements;
}

/**
 * AnimatedSection - Animate content when it scrolls into view
 *
 * @example
 * ```tsx
 * <AnimatedSection animation="fadeInUp">
 *   <h2>This fades in when scrolled into view</h2>
 * </AnimatedSection>
 *
 * <AnimatedSection animation="scaleIn" delay={200} threshold={0.3}>
 *   <div>Custom timing and threshold</div>
 * </AnimatedSection>
 * ```
 */
export const AnimatedSection = forwardRef<HTMLDivElement, AnimatedSectionProps>(
  (
    {
      animation = 'fadeInUp',
      delay = 0,
      duration = 800,
      threshold = 0.1,
      rootMargin = '0px 0px -100px 0px',
      children,
      className = '',
      as: Component = 'div',
      ...props
    },
    forwardedRef
  ) => {
    const internalRef = useScrollAnimation(animation, {
      intersectionOptions: {
        threshold,
        rootMargin,
      },
      animationOptions: {
        delay,
        duration,
      },
    });

    // Merge refs if forwardedRef is provided
    const ref = forwardedRef || internalRef;

    return (
      <Component ref={ref} className={className} {...props}>
        {children}
      </Component>
    );
  }
);

AnimatedSection.displayName = 'AnimatedSection';

/**
 * AnimatedSectionGroup - Stagger animate multiple children
 */
export interface AnimatedSectionGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Stagger delay between children in milliseconds */
  staggerDelay?: number;
  /** Animation delay in milliseconds */
  delay?: number;
  /** Animation duration in milliseconds */
  duration?: number;
  /** Intersection observer threshold (0-1) */
  threshold?: number;
  /** Root margin for intersection observer */
  rootMargin?: string;
  /** Children to animate */
  children: React.ReactNode;
  /** Additional class name */
  className?: string;
}

/**
 * AnimatedSectionGroup - Stagger animate children when section scrolls into view
 *
 * @example
 * ```tsx
 * <AnimatedSectionGroup staggerDelay={100}>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </AnimatedSectionGroup>
 * ```
 */
export const AnimatedSectionGroup: React.FC<AnimatedSectionGroupProps> = ({
  staggerDelay = 100,
  delay = 0,
  duration = 600,
  threshold = 0.1,
  rootMargin = '0px 0px -100px 0px',
  children,
  className = '',
  ...props
}) => {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!ref.current) return;

    const { scrollAnimationManager } = require('../../utils/animations');
    const anime = require('animejs').default;

    const observerId = scrollAnimationManager.observe(
      ref.current,
      (parent: Element) => {
        const childElements = parent.children;
        anime({
          targets: Array.from(childElements),
          opacity: [0, 1],
          translateY: [20, 0],
          duration,
          delay: anime.stagger(staggerDelay, { start: delay }),
          easing: 'easeOutExpo',
        });
      },
      { threshold, rootMargin }
    );

    return () => {
      if (observerId) {
        scrollAnimationManager.disconnect(observerId);
      }
    };
  }, [staggerDelay, delay, duration, threshold, rootMargin]);

  return (
    <div ref={ref} className={className} {...props}>
      {children}
    </div>
  );
};

AnimatedSectionGroup.displayName = 'AnimatedSectionGroup';

/**
 * Preset configurations for common use cases
 */
export const AnimatedSectionPresets = {
  hero: {
    animation: 'fadeInUp' as const,
    duration: 1000,
    threshold: 0,
    rootMargin: '0px',
  },
  feature: {
    animation: 'scaleIn' as const,
    duration: 600,
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px',
  },
  card: {
    animation: 'fadeInUp' as const,
    duration: 500,
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
  },
  sidebar: {
    animation: 'fadeInLeft' as const,
    duration: 700,
    threshold: 0.3,
  },
  image: {
    animation: 'zoomIn' as const,
    duration: 900,
    threshold: 0.2,
  },
};

export default AnimatedSection;
