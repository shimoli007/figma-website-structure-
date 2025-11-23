/**
 * FloatingShapes Component
 * Animated geometric shapes that float in the background
 */

import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

export interface FloatingShapesProps {
  shapeCount?: number;
  colors?: string[];
  speed?: 'slow' | 'medium' | 'fast';
  opacity?: number;
  className?: string;
}

/**
 * FloatingShapes - Animated geometric shapes background
 *
 * @example
 * ```tsx
 * <FloatingShapes
 *   shapeCount={15}
 *   colors={['#7c3aed', '#3b82f6', '#06b6d4']}
 *   speed="slow"
 * />
 * ```
 */
export function FloatingShapes({
  shapeCount = 12,
  colors = ['#7c3aed', '#3b82f6', '#06b6d4', '#14b8a6', '#a855f7'],
  speed = 'slow',
  opacity = 0.15,
  className = '',
}: FloatingShapesProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const shapes: HTMLDivElement[] = [];

    const speedConfigs = {
      slow: { duration: [20000, 30000], rotate: 360, distance: 150 },
      medium: { duration: [15000, 25000], rotate: 720, distance: 200 },
      fast: { duration: [10000, 20000], rotate: 1080, distance: 250 },
    };

    const config = speedConfigs[speed];

    // Shape types
    const shapeTypes = ['circle', 'square', 'triangle', 'hexagon', 'pentagon'];

    for (let i = 0; i < shapeCount; i++) {
      const shape = document.createElement('div');
      const shapeType = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = 40 + Math.random() * 120;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const rotation = Math.random() * 360;

      // Base styles
      shape.style.cssText = `
        position: absolute;
        left: ${x}%;
        top: ${y}%;
        width: ${size}px;
        height: ${size}px;
        opacity: ${opacity};
        pointer-events: none;
        transform: rotate(${rotation}deg);
      `;

      // Shape-specific styles
      if (shapeType === 'circle') {
        shape.style.background = `linear-gradient(135deg, ${color}, ${adjustColorBrightness(color, 20)})`;
        shape.style.borderRadius = '50%';
        shape.style.filter = 'blur(1px)';
      } else if (shapeType === 'square') {
        shape.style.background = `linear-gradient(135deg, ${color}, ${adjustColorBrightness(color, 20)})`;
        shape.style.borderRadius = '10px';
        shape.style.backdropFilter = 'blur(5px)';
      } else if (shapeType === 'triangle') {
        shape.style.width = '0';
        shape.style.height = '0';
        shape.style.borderLeft = `${size / 2}px solid transparent`;
        shape.style.borderRight = `${size / 2}px solid transparent`;
        shape.style.borderBottom = `${size}px solid ${color}`;
        shape.style.filter = 'blur(1px)';
      } else if (shapeType === 'hexagon') {
        shape.style.clipPath = 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)';
        shape.style.background = `linear-gradient(135deg, ${color}, ${adjustColorBrightness(color, 20)})`;
      } else if (shapeType === 'pentagon') {
        shape.style.clipPath = 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)';
        shape.style.background = color;
        shape.style.filter = 'blur(2px)';
      }

      container.appendChild(shape);
      shapes.push(shape);

      // Animate shape
      const animateShape = () => {
        anime({
          targets: shape,
          translateX: [
            { value: () => anime.random(-config.distance, config.distance) },
            { value: () => anime.random(-config.distance, config.distance) },
          ],
          translateY: [
            { value: () => anime.random(-config.distance, config.distance) },
            { value: () => anime.random(-config.distance, config.distance) },
          ],
          rotate: [
            { value: `+=${config.rotate}deg` },
          ],
          scale: [
            { value: 0.8 + Math.random() * 0.6 },
            { value: 0.8 + Math.random() * 0.6 },
          ],
          opacity: [
            { value: opacity * 0.5 },
            { value: opacity },
            { value: opacity * 0.5 },
          ],
          duration: anime.random(config.duration[0], config.duration[1]),
          easing: 'easeInOutSine',
          complete: animateShape,
        });
      };

      // Start animation with random delay
      setTimeout(animateShape, Math.random() * 3000);
    }

    // Cleanup
    return () => {
      shapes.forEach((shape) => shape.remove());
    };
  }, [shapeCount, colors, speed, opacity]);

  return (
    <div
      ref={containerRef}
      className={`floating-shapes ${className}`}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    />
  );
}

/**
 * Helper function to adjust color brightness
 */
function adjustColorBrightness(color: string, amount: number): string {
  // Simple brightness adjustment for hex colors
  if (color.startsWith('#')) {
    const hex = color.replace('#', '');
    const r = Math.min(255, parseInt(hex.slice(0, 2), 16) + amount);
    const g = Math.min(255, parseInt(hex.slice(2, 4), 16) + amount);
    const b = Math.min(255, parseInt(hex.slice(4, 6), 16) + amount);
    return `rgb(${r}, ${g}, ${b})`;
  }
  return color;
}

export default FloatingShapes;
