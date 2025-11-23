/**
 * AnimatedSection Component
 * Wrapper component that triggers fade-in animations when scrolling into view
 */

import React, { ReactNode } from 'react';
import anime from 'animejs';
import { useScrollAnimation } from '../utils/hooks';
import { ScrollAnimationOptions } from '../utils/scrollAnimations';

export interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animationType?: ScrollAnimationOptions['animationType'];
  delay?: number;
  threshold?: number;
  triggerOnce?: boolean;
  onEnter?: () => void;
  onLeave?: () => void;
  as?: keyof JSX.IntrinsicElements;
}

/**
 * AnimatedSection - Fade in on scroll component
 *
 * @example
 * ```tsx
 * <AnimatedSection animationType="fadeInUp">
 *   <h2>This fades in when scrolled into view</h2>
 * </AnimatedSection>
 *
 * <AnimatedSection
 *   animationType="fadeInLeft"
 *   delay={200}
 *   threshold={0.3}
 * >
 *   <div>Content with custom settings</div>
 * </AnimatedSection>
 * ```
 */
export function AnimatedSection({
  children,
  className = '',
  animationType = 'fadeInUp',
  delay = 0,
  threshold = 0.1,
  triggerOnce = true,
  onEnter,
  onLeave,
  as: Component = 'div',
}: AnimatedSectionProps) {
  const ref = useScrollAnimation({
    animationType,
    animationDelay: delay,
    threshold,
    triggerOnce,
    onEnter,
    onLeave,
  });

  return (
    <Component ref={ref as any} className={className}>
      {children}
    </Component>
  );
}

/**
 * AnimatedSectionStaggered - For staggered child animations
 */
export interface AnimatedSectionStaggeredProps {
  children: ReactNode;
  className?: string;
  childSelector: string;
  staggerDelay?: number;
  animationType?: ScrollAnimationOptions['animationType'];
  threshold?: number;
  as?: keyof JSX.IntrinsicElements;
}

/**
 * AnimatedSectionStaggered - Stagger animations for child elements
 *
 * @example
 * ```tsx
 * <AnimatedSectionStaggered
 *   childSelector=".feature-card"
 *   staggerDelay={150}
 * >
 *   <div className="feature-card">Card 1</div>
 *   <div className="feature-card">Card 2</div>
 *   <div className="feature-card">Card 3</div>
 * </AnimatedSectionStaggered>
 * ```
 */
export function AnimatedSectionStaggered({
  children,
  className = '',
  childSelector,
  staggerDelay = 100,
  animationType = 'fadeInUp',
  threshold = 0.1,
  as: Component = 'div',
}: AnimatedSectionStaggeredProps) {
  const ref = useScrollAnimation({
    animationType: 'custom',
    threshold,
    triggerOnce: true,
    customAnimation: (element) => {
      const children = element.querySelectorAll(childSelector);
      return anime({
        targets: Array.from(children),
        opacity: [0, 1],
        translateY: animationType === 'fadeInUp' ? [40, 0] : [0, 0],
        translateX:
          animationType === 'fadeInLeft'
            ? [-40, 0]
            : animationType === 'fadeInRight'
            ? [40, 0]
            : [0, 0],
        duration: 1000,
        delay: anime.stagger(staggerDelay),
        easing: 'easeOutExpo',
      });
    },
  });

  return (
    <Component ref={ref as any} className={className}>
      {children}
    </Component>
  );
}

export default AnimatedSection;
