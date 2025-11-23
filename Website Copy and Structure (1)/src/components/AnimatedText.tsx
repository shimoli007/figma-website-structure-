/**
 * AnimatedText Component
 * Character-by-character, word-by-word, and line-by-line text reveal animations
 */

import React, { useEffect, useRef, useState } from 'react';
import anime from 'animejs';
import { useScrollAnimation } from '../utils/hooks';

export interface AnimatedTextProps {
  text: string;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  animationType?: 'characters' | 'words' | 'lines' | 'typewriter';
  delay?: number;
  staggerDelay?: number;
  duration?: number;
  triggerOnScroll?: boolean;
  onComplete?: () => void;
}

/**
 * AnimatedText - Character-by-character text reveal
 *
 * @example
 * ```tsx
 * <AnimatedText
 *   text="Welcome to Cynea AI"
 *   animationType="characters"
 *   staggerDelay={50}
 * />
 *
 * <AnimatedText
 *   text="Transform your business"
 *   as="h1"
 *   animationType="words"
 *   triggerOnScroll
 * />
 *
 * <AnimatedText
 *   text="AI-powered solutions for modern enterprises"
 *   animationType="typewriter"
 *   duration={2000}
 * />
 * ```
 */
export function AnimatedText({
  text,
  className = '',
  as: Component = 'div',
  animationType = 'characters',
  delay = 0,
  staggerDelay = 50,
  duration = 1000,
  triggerOnScroll = false,
  onComplete,
}: AnimatedTextProps) {
  const containerRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const scrollRef = useScrollAnimation({
    animationType: 'custom',
    threshold: 0.2,
    triggerOnce: true,
    customAnimation: (element) => {
      if (!hasAnimated && triggerOnScroll) {
        setHasAnimated(true);
        return animateText(element);
      }
      return anime({ targets: null });
    },
  });

  const animateText = (element: HTMLElement) => {
    if (animationType === 'typewriter') {
      return typewriterAnimation(element);
    } else if (animationType === 'characters') {
      return characterAnimation(element);
    } else if (animationType === 'words') {
      return wordAnimation(element);
    } else if (animationType === 'lines') {
      return lineAnimation(element);
    }
    return anime({ targets: null });
  };

  const typewriterAnimation = (element: HTMLElement) => {
    const chars = text.split('');
    element.textContent = '';

    return anime({
      targets: { value: 0 },
      value: chars.length,
      duration,
      delay,
      easing: 'linear',
      round: 1,
      update: function (anim) {
        const currentValue = Math.floor((anim.animations[0].currentValue as number) || 0);
        element.textContent = chars.slice(0, currentValue).join('');
      },
      complete: onComplete,
    });
  };

  const characterAnimation = (element: HTMLElement) => {
    element.innerHTML = text
      .split('')
      .map(
        (char) =>
          `<span class="animated-char" style="display:inline-block; opacity:0;">${
            char === ' ' ? '&nbsp;' : char
          }</span>`
      )
      .join('');

    return anime({
      targets: element.querySelectorAll('.animated-char'),
      opacity: [0, 1],
      translateY: [20, 0],
      rotateZ: [10, 0],
      duration: 600,
      delay: delay + anime.stagger(staggerDelay),
      easing: 'easeOutExpo',
      complete: onComplete,
    });
  };

  const wordAnimation = (element: HTMLElement) => {
    element.innerHTML = text
      .split(' ')
      .map(
        (word) =>
          `<span class="animated-word" style="display:inline-block; opacity:0; margin-right:0.25em;">${word}</span>`
      )
      .join('');

    return anime({
      targets: element.querySelectorAll('.animated-word'),
      opacity: [0, 1],
      translateY: [30, 0],
      scale: [0.8, 1],
      duration: 800,
      delay: delay + anime.stagger(staggerDelay * 2),
      easing: 'easeOutExpo',
      complete: onComplete,
    });
  };

  const lineAnimation = (element: HTMLElement) => {
    const lines = text.split('\n');
    element.innerHTML = lines
      .map(
        (line) =>
          `<div class="animated-line" style="opacity:0; overflow:hidden;"><div style="transform:translateY(100%);">${line}</div></div>`
      )
      .join('');

    return anime({
      targets: element.querySelectorAll('.animated-line'),
      opacity: [0, 1],
      duration: 1,
      delay: delay + anime.stagger(0),
      complete: () => {
        anime({
          targets: element.querySelectorAll('.animated-line > div'),
          translateY: ['100%', '0%'],
          duration: 800,
          delay: anime.stagger(staggerDelay * 3),
          easing: 'easeOutExpo',
          complete: onComplete,
        });
      },
    });
  };

  useEffect(() => {
    if (!triggerOnScroll && containerRef.current && !hasAnimated) {
      setHasAnimated(true);
      animateText(containerRef.current);
    }
  }, [text, animationType, triggerOnScroll]);

  const ref = triggerOnScroll ? scrollRef : containerRef;

  return <Component ref={ref as any} className={`animated-text ${className}`} />;
}

/**
 * AnimatedTextGradient - Animated text with gradient
 */
export interface AnimatedTextGradientProps {
  text: string;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  gradient?: string;
  animationType?: 'characters' | 'words';
  delay?: number;
  staggerDelay?: number;
  triggerOnScroll?: boolean;
}

/**
 * AnimatedTextGradient - Gradient text with character reveal
 *
 * @example
 * ```tsx
 * <AnimatedTextGradient
 *   text="Powered by AI"
 *   gradient="linear-gradient(135deg, #7c3aed, #3b82f6)"
 *   animationType="characters"
 * />
 * ```
 */
export function AnimatedTextGradient({
  text,
  className = '',
  as: Component = 'h1',
  gradient = 'var(--gradient-primary)',
  animationType = 'characters',
  delay = 0,
  staggerDelay = 50,
  triggerOnScroll = true,
}: AnimatedTextGradientProps) {
  const containerRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const scrollRef = useScrollAnimation({
    animationType: 'custom',
    threshold: 0.2,
    triggerOnce: true,
    customAnimation: (element) => {
      if (!hasAnimated) {
        setHasAnimated(true);

        if (animationType === 'characters') {
          element.innerHTML = text
            .split('')
            .map(
              (char) =>
                `<span class="gradient-char" style="display:inline-block; opacity:0;">${
                  char === ' ' ? '&nbsp;' : char
                }</span>`
            )
            .join('');
        } else {
          element.innerHTML = text
            .split(' ')
            .map(
              (word) =>
                `<span class="gradient-word" style="display:inline-block; opacity:0; margin-right:0.25em;">${word}</span>`
            )
            .join('');
        }

        const targets =
          animationType === 'characters'
            ? element.querySelectorAll('.gradient-char')
            : element.querySelectorAll('.gradient-word');

        return anime({
          targets,
          opacity: [0, 1],
          translateY: [30, 0],
          scale: [0.5, 1],
          duration: 800,
          delay: delay + anime.stagger(staggerDelay),
          easing: 'easeOutExpo',
        });
      }
      return anime({ targets: null });
    },
  });

  const ref = triggerOnScroll ? scrollRef : containerRef;

  return (
    <Component
      ref={ref as any}
      className={`animated-text-gradient ${className}`}
      style={{
        background: gradient,
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        color: 'transparent',
      }}
    />
  );
}

/**
 * AnimatedTextSplit - Text split with reveal animation
 */
export interface AnimatedTextSplitProps {
  text: string;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  delay?: number;
  triggerOnScroll?: boolean;
}

/**
 * AnimatedTextSplit - Text split and slide reveal
 *
 * @example
 * ```tsx
 * <AnimatedTextSplit
 *   text="Next Generation AI"
 *   as="h2"
 *   triggerOnScroll
 * />
 * ```
 */
export function AnimatedTextSplit({
  text,
  className = '',
  as: Component = 'div',
  delay = 0,
  triggerOnScroll = true,
}: AnimatedTextSplitProps) {
  const [hasAnimated, setHasAnimated] = useState(false);

  const scrollRef = useScrollAnimation({
    animationType: 'custom',
    threshold: 0.2,
    triggerOnce: true,
    customAnimation: (element) => {
      if (!hasAnimated) {
        setHasAnimated(true);

        element.innerHTML = `
          <div style="position: relative; overflow: hidden; display: inline-block;">
            <div class="split-text-top" style="transform: translateY(0%);">${text}</div>
            <div class="split-text-bottom" style="position: absolute; top: 0; left: 0; transform: translateY(100%);">${text}</div>
          </div>
        `;

        const tl = anime.timeline({
          delay,
        });

        tl.add({
          targets: element.querySelector('.split-text-top'),
          translateY: [0, '-100%'],
          duration: 800,
          easing: 'easeInExpo',
        }).add(
          {
            targets: element.querySelector('.split-text-bottom'),
            translateY: ['100%', 0],
            duration: 800,
            easing: 'easeOutExpo',
          },
          '-=400'
        );

        return tl;
      }
      return anime({ targets: null });
    },
  });

  return <Component ref={scrollRef as any} className={`animated-text-split ${className}`} />;
}

/**
 * AnimatedCounter - Animated number counter
 */
export interface AnimatedCounterProps {
  start?: number;
  end: number;
  duration?: number;
  className?: string;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  triggerOnScroll?: boolean;
}

/**
 * AnimatedCounter - Counting animation for numbers
 *
 * @example
 * ```tsx
 * <AnimatedCounter end={10000} suffix="+" duration={2000} />
 * <AnimatedCounter end={99.9} suffix="%" decimals={1} />
 * <AnimatedCounter start={0} end={1000} prefix="$" />
 * ```
 */
export function AnimatedCounter({
  start = 0,
  end,
  duration = 2000,
  className = '',
  suffix = '',
  prefix = '',
  decimals = 0,
  triggerOnScroll = true,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(start);
  const [hasAnimated, setHasAnimated] = useState(false);

  const scrollRef = useScrollAnimation({
    animationType: 'custom',
    threshold: 0.5,
    triggerOnce: true,
    customAnimation: () => {
      if (!hasAnimated) {
        setHasAnimated(true);

        return anime({
          targets: { value: start },
          value: end,
          duration,
          easing: 'easeOutExpo',
          round: decimals === 0 ? 1 : Math.pow(10, decimals),
          update: function (anim) {
            const currentValue = (anim.animations[0].currentValue as number) || 0;
            setCount(decimals === 0 ? Math.floor(currentValue) : currentValue);
          },
        });
      }
      return anime({ targets: null });
    },
  });

  useEffect(() => {
    if (!triggerOnScroll && !hasAnimated) {
      setHasAnimated(true);
      anime({
        targets: { value: start },
        value: end,
        duration,
        easing: 'easeOutExpo',
        round: decimals === 0 ? 1 : Math.pow(10, decimals),
        update: function (anim) {
          const currentValue = (anim.animations[0].currentValue as number) || 0;
          setCount(decimals === 0 ? Math.floor(currentValue) : currentValue);
        },
      });
    }
  }, [start, end, duration, decimals, triggerOnScroll, hasAnimated]);

  const displayValue = decimals > 0 ? count.toFixed(decimals) : count;

  return (
    <span ref={triggerOnScroll ? (scrollRef as any) : undefined} className={`animated-counter ${className}`}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}

export default AnimatedText;
