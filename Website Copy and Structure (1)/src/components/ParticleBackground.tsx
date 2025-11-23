/**
 * ParticleBackground Component
 * Animated floating particles background effect
 */

import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

export interface ParticleBackgroundProps {
  particleCount?: number;
  particleColor?: string;
  particleSize?: number;
  speed?: 'slow' | 'medium' | 'fast';
  className?: string;
  opacity?: number;
  blur?: boolean;
}

/**
 * ParticleBackground - Floating particles animation
 *
 * @example
 * ```tsx
 * <ParticleBackground
 *   particleCount={50}
 *   particleColor="#7c3aed"
 *   speed="slow"
 * />
 *
 * <ParticleBackground
 *   particleCount={100}
 *   particleColor="rgba(6, 182, 212, 0.6)"
 *   particleSize={3}
 *   speed="medium"
 *   blur
 * />
 * ```
 */
export function ParticleBackground({
  particleCount = 50,
  particleColor = '#7c3aed',
  particleSize = 2,
  speed = 'slow',
  className = '',
  opacity = 0.6,
  blur = false,
}: ParticleBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const particles: HTMLDivElement[] = [];

    // Speed configurations
    const speedConfigs = {
      slow: { duration: [15000, 25000], distance: 100 },
      medium: { duration: [10000, 20000], distance: 150 },
      fast: { duration: [5000, 15000], distance: 200 },
    };

    const config = speedConfigs[speed];

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';

      // Random position
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const size = particleSize + Math.random() * particleSize;

      particle.style.cssText = `
        position: absolute;
        left: ${x}%;
        top: ${y}%;
        width: ${size}px;
        height: ${size}px;
        background: ${particleColor};
        border-radius: 50%;
        opacity: ${opacity};
        pointer-events: none;
        ${blur ? 'filter: blur(1px);' : ''}
      `;

      container.appendChild(particle);
      particles.push(particle);

      // Animate particle
      const animateParticle = () => {
        anime({
          targets: particle,
          translateX: [
            { value: () => anime.random(-config.distance, config.distance) },
            { value: () => anime.random(-config.distance, config.distance) },
          ],
          translateY: [
            { value: () => anime.random(-config.distance, config.distance) },
            { value: () => anime.random(-config.distance, config.distance) },
          ],
          scale: [
            { value: 1 + Math.random() * 0.5 },
            { value: 1 + Math.random() * 0.5 },
          ],
          opacity: [
            { value: opacity * 0.3 },
            { value: opacity },
            { value: opacity * 0.3 },
          ],
          duration: anime.random(config.duration[0], config.duration[1]),
          easing: 'easeInOutSine',
          complete: animateParticle,
        });
      };

      // Start animation with random delay
      setTimeout(animateParticle, Math.random() * 2000);
    }

    // Cleanup
    return () => {
      particles.forEach((particle) => particle.remove());
    };
  }, [particleCount, particleColor, particleSize, speed, opacity, blur]);

  return (
    <div
      ref={containerRef}
      className={`particle-background ${className}`}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}

/**
 * ParticleBackgroundGradient - Particles with gradient colors
 */
export interface ParticleBackgroundGradientProps {
  particleCount?: number;
  colors?: string[];
  particleSize?: number;
  speed?: 'slow' | 'medium' | 'fast';
  className?: string;
}

/**
 * ParticleBackgroundGradient - Multi-colored floating particles
 *
 * @example
 * ```tsx
 * <ParticleBackgroundGradient
 *   colors={['#7c3aed', '#3b82f6', '#06b6d4']}
 *   particleCount={60}
 *   speed="medium"
 * />
 * ```
 */
export function ParticleBackgroundGradient({
  particleCount = 50,
  colors = ['#7c3aed', '#3b82f6', '#06b6d4', '#14b8a6'],
  particleSize = 2,
  speed = 'slow',
  className = '',
}: ParticleBackgroundGradientProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const particles: HTMLDivElement[] = [];

    const speedConfigs = {
      slow: { duration: [15000, 25000], distance: 100 },
      medium: { duration: [10000, 20000], distance: 150 },
      fast: { duration: [5000, 15000], distance: 200 },
    };

    const config = speedConfigs[speed];

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      const color = colors[Math.floor(Math.random() * colors.length)];
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const size = particleSize + Math.random() * particleSize * 2;
      const opacity = 0.4 + Math.random() * 0.4;

      particle.style.cssText = `
        position: absolute;
        left: ${x}%;
        top: ${y}%;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        border-radius: 50%;
        opacity: ${opacity};
        pointer-events: none;
        filter: blur(1px);
        box-shadow: 0 0 ${size * 2}px ${color};
      `;

      container.appendChild(particle);
      particles.push(particle);

      const animateParticle = () => {
        anime({
          targets: particle,
          translateX: [
            { value: () => anime.random(-config.distance, config.distance) },
            { value: () => anime.random(-config.distance, config.distance) },
          ],
          translateY: [
            { value: () => anime.random(-config.distance, config.distance) },
            { value: () => anime.random(-config.distance, config.distance) },
          ],
          scale: [{ value: 0.8 + Math.random() * 0.6 }, { value: 0.8 + Math.random() * 0.6 }],
          duration: anime.random(config.duration[0], config.duration[1]),
          easing: 'easeInOutSine',
          complete: animateParticle,
        });
      };

      setTimeout(animateParticle, Math.random() * 2000);
    }

    return () => {
      particles.forEach((particle) => particle.remove());
    };
  }, [particleCount, colors, particleSize, speed]);

  return (
    <div
      ref={containerRef}
      className={`particle-background-gradient ${className}`}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}

export default ParticleBackground;
