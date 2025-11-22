/**
 * AnimatedText Component
 * Character-by-character text reveal with multiple animation styles
 */

import React, { useEffect, useRef, useState } from 'react';
import anime from 'animejs';
import { scrollAnimationManager } from '../../utils/animations';

export interface AnimatedTextProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Text to animate */
  text: string;
  /** Animation variant */
  variant?: 'reveal' | 'fade' | 'slide' | 'scale' | 'rotate' | 'typewriter' | 'wave';
  /** Delay between characters (ms) */
  characterDelay?: number;
  /** Initial delay before animation starts (ms) */
  delay?: number;
  /** Duration for each character animation (ms) */
  duration?: number;
  /** Trigger animation on scroll or mount */
  trigger?: 'mount' | 'scroll';
  /** Animation easing */
  easing?: string;
  /** HTML element to render as */
  as?: keyof JSX.IntrinsicElements;
  /** Additional className */
  className?: string;
  /** Callback when animation completes */
  onComplete?: () => void;
  /** Split by */
  splitBy?: 'character' | 'word' | 'line';
  /** Preserve spaces */
  preserveSpaces?: boolean;
}

/**
 * AnimatedText - Character-by-character text reveal animation
 *
 * @example
 * ```tsx
 * <AnimatedText text="Welcome to Cynea" variant="reveal" />
 *
 * <AnimatedText
 *   text="Transform your business with AI"
 *   variant="wave"
 *   characterDelay={50}
 *   trigger="scroll"
 * />
 *
 * <AnimatedText
 *   text="Innovation at scale"
 *   variant="typewriter"
 *   as="h1"
 *   className="text-4xl font-bold"
 * />
 * ```
 */
export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  variant = 'reveal',
  characterDelay = 50,
  delay = 0,
  duration = 600,
  trigger = 'mount',
  easing = 'easeOutExpo',
  as: Component = 'div',
  className = '',
  onComplete,
  splitBy = 'character',
  preserveSpaces = true,
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const splitText = (text: string, type: typeof splitBy) => {
    if (type === 'word') {
      return text.split(' ').map((word) => word + ' ');
    } else if (type === 'line') {
      return text.split('\n');
    } else {
      // character
      return text.split('');
    }
  };

  const runAnimation = () => {
    if (!containerRef.current || hasAnimated) return;

    const elements = containerRef.current.querySelectorAll('.animated-char');
    if (elements.length === 0) return;

    setHasAnimated(true);

    // Animation variants
    const animations: Record<typeof variant, any> = {
      reveal: {
        opacity: [0, 1],
        translateY: [20, 0],
        duration,
        delay: anime.stagger(characterDelay, { start: delay }),
        easing,
      },
      fade: {
        opacity: [0, 1],
        duration,
        delay: anime.stagger(characterDelay, { start: delay }),
        easing,
      },
      slide: {
        opacity: [0, 1],
        translateX: [-20, 0],
        duration,
        delay: anime.stagger(characterDelay, { start: delay }),
        easing,
      },
      scale: {
        opacity: [0, 1],
        scale: [0, 1],
        duration,
        delay: anime.stagger(characterDelay, { start: delay }),
        easing,
      },
      rotate: {
        opacity: [0, 1],
        rotateZ: [-90, 0],
        duration,
        delay: anime.stagger(characterDelay, { start: delay }),
        easing,
      },
      typewriter: {
        opacity: [0, 1],
        duration: 0,
        delay: anime.stagger(characterDelay, { start: delay }),
        easing: 'linear',
      },
      wave: {
        translateY: [
          { value: -20, duration: duration / 2 },
          { value: 0, duration: duration / 2 },
        ],
        duration,
        delay: anime.stagger(characterDelay, { start: delay }),
        easing,
      },
    };

    anime({
      targets: Array.from(elements),
      ...animations[variant],
      complete: onComplete,
    });
  };

  useEffect(() => {
    if (trigger === 'mount') {
      runAnimation();
    } else if (trigger === 'scroll' && containerRef.current) {
      const observerId = scrollAnimationManager.observe(
        containerRef.current,
        runAnimation,
        { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
      );

      return () => {
        if (observerId) {
          scrollAnimationManager.disconnect(observerId);
        }
      };
    }
  }, [trigger]);

  const characters = splitText(text, splitBy);

  return (
    <Component ref={containerRef} className={className} {...props}>
      {characters.map((char, index) => (
        <span
          key={index}
          className="animated-char inline-block"
          style={{
            opacity: trigger === 'mount' || trigger === 'scroll' ? 0 : 1,
            whiteSpace: preserveSpaces && char === ' ' ? 'pre' : 'normal',
          }}
        >
          {char === ' ' && preserveSpaces ? '\u00A0' : char}
        </span>
      ))}
    </Component>
  );
};

/**
 * GradientText - Text with animated gradient
 */
export interface GradientTextProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Text content */
  text: string;
  /** Gradient colors */
  colors?: string[];
  /** Animation speed */
  speed?: 'slow' | 'medium' | 'fast';
  /** HTML element to render as */
  as?: keyof JSX.IntrinsicElements;
  /** Additional className */
  className?: string;
}

export const GradientText: React.FC<GradientTextProps> = ({
  text,
  colors = ['#6366f1', '#8b5cf6', '#06b6d4', '#14b8a6'],
  speed = 'medium',
  as: Component = 'span',
  className = '',
  ...props
}) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const speeds = {
      slow: 8000,
      medium: 5000,
      fast: 3000,
    };

    const gradient = colors.join(', ');

    anime({
      targets: textRef.current,
      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      duration: speeds[speed],
      easing: 'linear',
      loop: true,
    });
  }, [colors, speed]);

  return (
    <Component
      ref={textRef}
      className={`animated-gradient-text ${className}`}
      style={{
        background: `linear-gradient(90deg, ${colors.join(', ')})`,
        backgroundSize: '200% auto',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
      {...props}
    >
      {text}
    </Component>
  );
};

/**
 * CountUpText - Animated number counter
 */
export interface CountUpTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Target number */
  value: number;
  /** Starting number */
  from?: number;
  /** Duration in milliseconds */
  duration?: number;
  /** Number format function */
  format?: (value: number) => string;
  /** Trigger animation */
  trigger?: 'mount' | 'scroll';
  /** Decimal places */
  decimals?: number;
  /** Additional className */
  className?: string;
  /** Callback when animation completes */
  onComplete?: () => void;
}

export const CountUpText: React.FC<CountUpTextProps> = ({
  value,
  from = 0,
  duration = 2000,
  format,
  trigger = 'scroll',
  decimals = 0,
  className = '',
  onComplete,
  ...props
}) => {
  const [displayValue, setDisplayValue] = useState(from);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const defaultFormat = (val: number) => {
    return val.toFixed(decimals);
  };

  const formatFunction = format || defaultFormat;

  const runAnimation = () => {
    if (hasAnimated) return;
    setHasAnimated(true);

    const obj = { value: from };

    anime({
      targets: obj,
      value,
      round: decimals === 0 ? 1 : Math.pow(10, decimals),
      duration,
      easing: 'easeOutExpo',
      update: () => {
        setDisplayValue(obj.value);
      },
      complete: onComplete,
    });
  };

  useEffect(() => {
    if (trigger === 'mount') {
      runAnimation();
    } else if (trigger === 'scroll' && elementRef.current) {
      const observerId = scrollAnimationManager.observe(
        elementRef.current,
        runAnimation,
        { threshold: 0.5 }
      );

      return () => {
        if (observerId) {
          scrollAnimationManager.disconnect(observerId);
        }
      };
    }
  }, [trigger, value]);

  return (
    <span ref={elementRef} className={className} {...props}>
      {formatFunction(displayValue)}
    </span>
  );
};

/**
 * TextScramble - Scramble text effect
 */
export interface TextScrambleProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Text to display */
  text: string;
  /** Characters to use for scrambling */
  scrambleChars?: string;
  /** Animation speed */
  speed?: number;
  /** Trigger animation */
  trigger?: 'mount' | 'hover' | 'scroll';
  /** Additional className */
  className?: string;
}

export const TextScramble: React.FC<TextScrambleProps> = ({
  text,
  scrambleChars = '!<>-_\\/[]{}—=+*^?#________',
  speed = 50,
  trigger = 'mount',
  className = '',
  ...props
}) => {
  const [displayText, setDisplayText] = useState(text);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [isScrambling, setIsScrambling] = useState(false);

  const scramble = () => {
    if (isScrambling) return;
    setIsScrambling(true);

    let frame = 0;
    const frameLength = text.length;

    const update = () => {
      let output = '';

      for (let i = 0; i < text.length; i++) {
        if (i < frame) {
          output += text[i];
        } else {
          output += scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
        }
      }

      setDisplayText(output);
      frame++;

      if (frame <= frameLength) {
        setTimeout(update, speed);
      } else {
        setIsScrambling(false);
      }
    };

    update();
  };

  useEffect(() => {
    if (trigger === 'mount') {
      scramble();
    } else if (trigger === 'scroll' && elementRef.current) {
      const observerId = scrollAnimationManager.observe(elementRef.current, scramble, {
        threshold: 0.5,
      });

      return () => {
        if (observerId) {
          scrollAnimationManager.disconnect(observerId);
        }
      };
    }
  }, [trigger, text]);

  const handleMouseEnter = () => {
    if (trigger === 'hover') {
      scramble();
    }
  };

  return (
    <span
      ref={elementRef}
      className={className}
      onMouseEnter={handleMouseEnter}
      {...props}
    >
      {displayText}
    </span>
  );
};

AnimatedText.displayName = 'AnimatedText';
GradientText.displayName = 'GradientText';
CountUpText.displayName = 'CountUpText';
TextScramble.displayName = 'TextScramble';

export default AnimatedText;
