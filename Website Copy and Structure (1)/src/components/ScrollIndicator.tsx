/**
 * ScrollIndicator Component
 * Smooth animated scroll indicator for hero sections
 */

import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

export interface ScrollIndicatorProps {
  className?: string;
  color?: string;
  size?: 'small' | 'medium' | 'large';
  text?: string;
  onClick?: () => void;
}

/**
 * ScrollIndicator - Animated scroll down indicator
 *
 * @example
 * ```tsx
 * <ScrollIndicator
 *   text="Scroll to explore"
 *   color="#ffffff"
 *   size="medium"
 * />
 * ```
 */
export function ScrollIndicator({
  className = '',
  color = '#ffffff',
  size = 'medium',
  text = 'Scroll to explore',
  onClick,
}: ScrollIndicatorProps) {
  const mouseRef = useRef<HTMLDivElement>(null);
  const wheelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mouseRef.current || !wheelRef.current) return;

    // Animate the mouse wheel
    const animateWheel = () => {
      anime({
        targets: wheelRef.current,
        translateY: [0, 8, 0],
        opacity: [1, 0.3, 1],
        duration: 2000,
        easing: 'easeInOutSine',
        loop: true,
      });
    };

    // Bounce animation for the entire indicator
    const animateContainer = () => {
      anime({
        targets: mouseRef.current,
        translateY: [0, 10, 0],
        duration: 2000,
        easing: 'easeInOutSine',
        loop: true,
      });
    };

    animateWheel();
    animateContainer();
  }, []);

  const sizes = {
    small: { mouse: 20, wheel: 6, height: 30 },
    medium: { mouse: 24, wheel: 8, height: 40 },
    large: { mouse: 30, wheel: 10, height: 50 },
  };

  const sizeConfig = sizes[size];

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Default: scroll to next section
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div
      className={`scroll-indicator ${className}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
        cursor: 'pointer',
        opacity: 0.8,
        transition: 'opacity 0.3s ease',
      }}
      onClick={handleClick}
      onMouseEnter={(e) => {
        e.currentTarget.style.opacity = '1';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.opacity = '0.8';
      }}
    >
      {text && (
        <div
          style={{
            fontSize: '0.875rem',
            fontWeight: 500,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color,
          }}
        >
          {text}
        </div>
      )}

      <div
        ref={mouseRef}
        style={{
          width: `${sizeConfig.mouse}px`,
          height: `${sizeConfig.height}px`,
          border: `2px solid ${color}`,
          borderRadius: `${sizeConfig.mouse}px`,
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '8px',
        }}
      >
        <div
          ref={wheelRef}
          style={{
            width: `${sizeConfig.wheel}px`,
            height: `${sizeConfig.wheel}px`,
            background: color,
            borderRadius: '50%',
          }}
        />
      </div>

      <svg
        width="12"
        height="8"
        viewBox="0 0 12 8"
        fill="none"
        style={{ marginTop: '-0.5rem' }}
      >
        <path
          d="M1 1L6 6L11 1"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

/**
 * ScrollIndicatorMinimal - Minimal arrow-only version
 */
export interface ScrollIndicatorMinimalProps {
  className?: string;
  color?: string;
  onClick?: () => void;
}

/**
 * ScrollIndicatorMinimal - Minimal animated arrow
 *
 * @example
 * ```tsx
 * <ScrollIndicatorMinimal color="#ffffff" />
 * ```
 */
export function ScrollIndicatorMinimal({
  className = '',
  color = '#ffffff',
  onClick,
}: ScrollIndicatorMinimalProps) {
  const arrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!arrowRef.current) return;

    anime({
      targets: arrowRef.current,
      translateY: [0, 15, 0],
      opacity: [1, 0.3, 1],
      duration: 2000,
      easing: 'easeInOutSine',
      loop: true,
    });
  }, []);

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div
      ref={arrowRef}
      className={`scroll-indicator-minimal ${className}`}
      onClick={handleClick}
      style={{
        cursor: 'pointer',
        opacity: 0.8,
        transition: 'opacity 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.opacity = '1';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.opacity = '0.8';
      }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 5V19M12 19L5 12M12 19L19 12"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default ScrollIndicator;
