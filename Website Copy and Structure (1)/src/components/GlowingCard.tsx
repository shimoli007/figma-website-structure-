/**
 * GlowingCard Component
 * Interactive card with glow, lift, and tilt effects on hover
 */

import React, { ReactNode, useRef, useEffect } from 'react';
import { cardInteractions } from '../utils/microInteractions';

export interface GlowingCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  hoverEffect?: 'lift' | 'tilt' | 'scale' | 'glow' | 'all';
  intensity?: 'subtle' | 'medium' | 'strong';
  glassEffect?: boolean;
  gradient?: boolean;
  onClick?: () => void;
}

/**
 * GlowingCard - Interactive card with hover effects
 *
 * @example
 * ```tsx
 * <GlowingCard hoverEffect="lift" glowColor="124, 58, 237">
 *   <h3>Card Title</h3>
 *   <p>Card content</p>
 * </GlowingCard>
 *
 * <GlowingCard
 *   hoverEffect="all"
 *   intensity="strong"
 *   glassEffect
 *   gradient
 * >
 *   <div>Premium card with all effects</div>
 * </GlowingCard>
 * ```
 */
export function GlowingCard({
  children,
  className = '',
  glowColor = '124, 58, 237',
  hoverEffect = 'lift',
  intensity = 'medium',
  glassEffect = false,
  gradient = false,
  onClick,
}: GlowingCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    const card = cardRef.current;

    // Apply hover effects based on type
    if (hoverEffect === 'lift' || hoverEffect === 'all') {
      cardInteractions.addLiftEffect(card);
    }

    if (hoverEffect === 'tilt' || hoverEffect === 'all') {
      cardInteractions.addTiltEffect(card);
    }

    if (hoverEffect === 'glow' || hoverEffect === 'all') {
      cardInteractions.addGlowEffect(card, glowColor);
    }

    if (hoverEffect === 'scale' || hoverEffect === 'all') {
      const scaleValues = {
        subtle: 1.02,
        medium: 1.05,
        strong: 1.08,
      };
      cardInteractions.addScaleEffect(card, scaleValues[intensity]);
    }
  }, [hoverEffect, glowColor, intensity]);

  // Build class names
  const baseClasses = 'glowing-card';
  const glassClass = glassEffect ? 'glass' : '';
  const gradientClass = gradient ? 'bg-gradient-dark' : '';
  const intensityClass = `glow-intensity-${intensity}`;

  return (
    <div
      ref={cardRef}
      className={`${baseClasses} ${glassClass} ${gradientClass} ${intensityClass} ${className}`}
      onClick={onClick}
      style={{
        cursor: onClick ? 'pointer' : 'default',
        borderRadius: 'var(--radius-lg)',
        padding: '1.5rem',
        position: 'relative',
        transformStyle: 'preserve-3d',
        transition: 'all var(--transition-base) var(--ease-in-out)',
      }}
    >
      {children}
    </div>
  );
}

/**
 * GlowingCardGradient - Card with gradient border and glow
 */
export interface GlowingCardGradientProps {
  children: ReactNode;
  className?: string;
  borderGradient?: string;
  glowIntensity?: 'low' | 'medium' | 'high';
  hoverEffect?: boolean;
}

/**
 * GlowingCardGradient - Card with animated gradient border
 *
 * @example
 * ```tsx
 * <GlowingCardGradient
 *   borderGradient="linear-gradient(135deg, #7c3aed, #3b82f6, #06b6d4)"
 *   glowIntensity="high"
 * >
 *   <h3>Gradient Border Card</h3>
 * </GlowingCardGradient>
 * ```
 */
export function GlowingCardGradient({
  children,
  className = '',
  borderGradient = 'linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)',
  glowIntensity = 'medium',
  hoverEffect = true,
}: GlowingCardGradientProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current || !hoverEffect) return;

    const card = cardRef.current;
    cardInteractions.addLiftEffect(card);
  }, [hoverEffect]);

  const glowOpacity = {
    low: 0.3,
    medium: 0.5,
    high: 0.7,
  };

  return (
    <div
      ref={cardRef}
      className={`glowing-card-gradient ${className}`}
      style={{
        position: 'relative',
        padding: '2px',
        borderRadius: 'var(--radius-lg)',
        background: borderGradient,
        transition: 'all var(--transition-base) var(--ease-in-out)',
        boxShadow: `0 0 20px rgba(124, 58, 237, ${glowOpacity[glowIntensity]})`,
      }}
    >
      <div
        style={{
          background: 'var(--card)',
          borderRadius: 'calc(var(--radius-lg) - 2px)',
          padding: '1.5rem',
          height: '100%',
        }}
      >
        {children}
      </div>
    </div>
  );
}

/**
 * GlowingCardInteractive - Card with mouse-following spotlight
 */
export interface GlowingCardInteractiveProps {
  children: ReactNode;
  className?: string;
  spotlightColor?: string;
  spotlightSize?: number;
}

/**
 * GlowingCardInteractive - Card with mouse-following spotlight effect
 *
 * @example
 * ```tsx
 * <GlowingCardInteractive
 *   spotlightColor="rgba(124, 58, 237, 0.3)"
 *   spotlightSize={400}
 * >
 *   <h3>Interactive Spotlight Card</h3>
 * </GlowingCardInteractive>
 * ```
 */
export function GlowingCardInteractive({
  children,
  className = '',
  spotlightColor = 'rgba(124, 58, 237, 0.3)',
  spotlightSize = 300,
}: GlowingCardInteractiveProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current || !spotlightRef.current) return;

    const card = cardRef.current;
    const spotlight = spotlightRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      spotlight.style.background = `radial-gradient(circle ${spotlightSize}px at ${x}px ${y}px, ${spotlightColor}, transparent)`;
    };

    const handleMouseEnter = () => {
      spotlight.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      spotlight.style.opacity = '0';
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [spotlightColor, spotlightSize]);

  return (
    <div
      ref={cardRef}
      className={`glowing-card-interactive ${className}`}
      style={{
        position: 'relative',
        borderRadius: 'var(--radius-lg)',
        padding: '1.5rem',
        overflow: 'hidden',
        background: 'var(--card)',
        border: '1px solid var(--border)',
      }}
    >
      <div
        ref={spotlightRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0,
          transition: 'opacity 0.3s ease',
          pointerEvents: 'none',
        }}
      />
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </div>
  );
}

export default GlowingCard;
