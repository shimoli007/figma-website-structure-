/**
 * ParticleBackground Component
 * Creates an animated particle background with floating elements
 */

import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

export interface ParticleBackgroundProps {
  /** Number of particles to generate */
  particleCount?: number;
  /** Particle colors (can be array for variety) */
  colors?: string | string[];
  /** Particle size range [min, max] in pixels */
  sizeRange?: [number, number];
  /** Animation speed (lower = slower) */
  speed?: 'slow' | 'medium' | 'fast';
  /** Particle opacity */
  opacity?: number;
  /** Enable blur effect on particles */
  blur?: boolean;
  /** Background color */
  backgroundColor?: string;
  /** Z-index for layering */
  zIndex?: number;
  /** Additional CSS class */
  className?: string;
  /** Particle shape */
  shape?: 'circle' | 'square' | 'triangle';
}

interface Particle {
  x: number;
  y: number;
  size: number;
  color: string;
  element: HTMLDivElement;
}

/**
 * ParticleBackground - Animated floating particles background
 *
 * @example
 * ```tsx
 * <ParticleBackground
 *   particleCount={50}
 *   colors={['#6366f1', '#06b6d4', '#a855f7']}
 *   speed="medium"
 * />
 *
 * <ParticleBackground
 *   particleCount={30}
 *   colors="#6366f1"
 *   shape="square"
 *   opacity={0.3}
 * />
 * ```
 */
export const ParticleBackground: React.FC<ParticleBackgroundProps> = ({
  particleCount = 50,
  colors = ['#6366f1', '#06b6d4', '#14b8a6', '#a855f7'],
  sizeRange = [2, 8],
  speed = 'medium',
  opacity = 0.6,
  blur = false,
  backgroundColor = 'transparent',
  zIndex = -1,
  className = '',
  shape = 'circle',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const particles: Particle[] = [];
    const colorArray = Array.isArray(colors) ? colors : [colors];

    // Speed settings
    const speedSettings = {
      slow: { duration: [8000, 15000], distance: 30 },
      medium: { duration: [5000, 10000], distance: 50 },
      fast: { duration: [3000, 6000], distance: 70 },
    };

    const { duration: durationRange, distance } = speedSettings[speed];

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      const size = Math.random() * (sizeRange[1] - sizeRange[0]) + sizeRange[0];
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const color = colorArray[Math.floor(Math.random() * colorArray.length)];

      // Base styles
      particle.style.position = 'absolute';
      particle.style.left = `${x}%`;
      particle.style.top = `${y}%`;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.opacity = opacity.toString();
      particle.style.pointerEvents = 'none';

      // Shape-specific styles
      if (shape === 'circle') {
        particle.style.borderRadius = '50%';
        particle.style.backgroundColor = color;
      } else if (shape === 'square') {
        particle.style.backgroundColor = color;
        particle.style.borderRadius = '2px';
      } else if (shape === 'triangle') {
        particle.style.width = '0';
        particle.style.height = '0';
        particle.style.borderLeft = `${size / 2}px solid transparent`;
        particle.style.borderRight = `${size / 2}px solid transparent`;
        particle.style.borderBottom = `${size}px solid ${color}`;
        particle.style.backgroundColor = 'transparent';
      }

      if (blur) {
        particle.style.filter = 'blur(1px)';
      }

      container.appendChild(particle);

      particles.push({
        x,
        y,
        size,
        color,
        element: particle,
      });
    }

    particlesRef.current = particles;

    // Animate particles
    particles.forEach((particle) => {
      const animateParticle = () => {
        const duration = Math.random() * (durationRange[1] - durationRange[0]) + durationRange[0];
        const angle = Math.random() * Math.PI * 2;
        const moveX = Math.cos(angle) * distance;
        const moveY = Math.sin(angle) * distance;

        anime({
          targets: particle.element,
          translateX: [0, moveX, 0],
          translateY: [0, moveY, 0],
          duration,
          easing: 'easeInOutSine',
          complete: animateParticle,
        });

        // Subtle scale animation
        anime({
          targets: particle.element,
          scale: [1, 1.2, 1],
          duration: duration / 2,
          easing: 'easeInOutQuad',
          loop: true,
        });

        // Rotation for non-circle shapes
        if (shape !== 'circle') {
          anime({
            targets: particle.element,
            rotate: [0, 360],
            duration: duration * 2,
            easing: 'linear',
            loop: true,
          });
        }
      };

      // Start with random delay
      setTimeout(animateParticle, Math.random() * 2000);
    });

    // Cleanup
    return () => {
      particles.forEach((particle) => {
        particle.element.remove();
      });
      particlesRef.current = [];
    };
  }, [particleCount, colors, sizeRange, speed, opacity, blur, shape]);

  return (
    <div
      ref={containerRef}
      className={`particle-background ${className}`}
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        backgroundColor,
        zIndex,
      }}
    />
  );
};

/**
 * GradientParticleBackground - Particles with gradient colors
 */
export interface GradientParticleBackgroundProps extends Omit<ParticleBackgroundProps, 'colors'> {
  /** Gradient start color */
  gradientStart?: string;
  /** Gradient end color */
  gradientEnd?: string;
}

export const GradientParticleBackground: React.FC<GradientParticleBackgroundProps> = ({
  gradientStart = '#6366f1',
  gradientEnd = '#a855f7',
  ...props
}) => {
  // Generate gradient color stops
  const generateGradientColors = (start: string, end: string, steps: number = 5) => {
    // Simple gradient color generation (you can enhance this)
    return [start, end];
  };

  const colors = generateGradientColors(gradientStart, gradientEnd);

  return <ParticleBackground {...props} colors={colors} />;
};

/**
 * InteractiveParticleBackground - Particles that react to mouse movement
 */
export const InteractiveParticleBackground: React.FC<ParticleBackgroundProps> = (props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      const particles = containerRef.current?.querySelectorAll('div');
      if (!particles) return;

      const mouseX = e.clientX;
      const mouseY = e.clientY;

      particles.forEach((particle) => {
        const rect = particle.getBoundingClientRect();
        const particleX = rect.left + rect.width / 2;
        const particleY = rect.top + rect.height / 2;

        const distanceX = mouseX - particleX;
        const distanceY = mouseY - particleY;
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

        const maxDistance = 200;

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          const moveX = (distanceX / distance) * force * 20;
          const moveY = (distanceY / distance) * force * 20;

          anime({
            targets: particle,
            translateX: moveX,
            translateY: moveY,
            duration: 300,
            easing: 'easeOutQuad',
          });
        } else {
          anime({
            targets: particle,
            translateX: 0,
            translateY: 0,
            duration: 500,
            easing: 'easeOutQuad',
          });
        }
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} style={{ position: 'relative', width: '100%', height: '100%' }}>
      <ParticleBackground {...props} />
    </div>
  );
};

ParticleBackground.displayName = 'ParticleBackground';
GradientParticleBackground.displayName = 'GradientParticleBackground';
InteractiveParticleBackground.displayName = 'InteractiveParticleBackground';

export default ParticleBackground;
