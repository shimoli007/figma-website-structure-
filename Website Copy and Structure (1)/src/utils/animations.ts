/**
 * Core Animation Utilities using Anime.js
 * Provides reusable animation functions for the Cynea AI website
 */

import anime, { AnimeInstance, AnimeParams } from 'animejs';

/**
 * Animation Presets - Pre-configured animations for common use cases
 */

export const animationPresets = {
  // Entrance Animations
  fadeIn: (targets: string | HTMLElement | HTMLElement[], delay = 0): AnimeInstance => {
    return anime({
      targets,
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 800,
      delay,
      easing: 'easeOutCubic',
    });
  },

  fadeInUp: (targets: string | HTMLElement | HTMLElement[], delay = 0): AnimeInstance => {
    return anime({
      targets,
      opacity: [0, 1],
      translateY: [40, 0],
      duration: 1000,
      delay,
      easing: 'easeOutExpo',
    });
  },

  fadeInDown: (targets: string | HTMLElement | HTMLElement[], delay = 0): AnimeInstance => {
    return anime({
      targets,
      opacity: [0, 1],
      translateY: [-40, 0],
      duration: 1000,
      delay,
      easing: 'easeOutExpo',
    });
  },

  fadeInLeft: (targets: string | HTMLElement | HTMLElement[], delay = 0): AnimeInstance => {
    return anime({
      targets,
      opacity: [0, 1],
      translateX: [-40, 0],
      duration: 1000,
      delay,
      easing: 'easeOutExpo',
    });
  },

  fadeInRight: (targets: string | HTMLElement | HTMLElement[], delay = 0): AnimeInstance => {
    return anime({
      targets,
      opacity: [0, 1],
      translateX: [40, 0],
      duration: 1000,
      delay,
      easing: 'easeOutExpo',
    });
  },

  scaleIn: (targets: string | HTMLElement | HTMLElement[], delay = 0): AnimeInstance => {
    return anime({
      targets,
      opacity: [0, 1],
      scale: [0.8, 1],
      duration: 800,
      delay,
      easing: 'easeOutElastic(1, .6)',
    });
  },

  slideInLeft: (targets: string | HTMLElement | HTMLElement[], delay = 0): AnimeInstance => {
    return anime({
      targets,
      opacity: [0, 1],
      translateX: ['-100%', 0],
      duration: 1000,
      delay,
      easing: 'easeOutExpo',
    });
  },

  slideInRight: (targets: string | HTMLElement | HTMLElement[], delay = 0): AnimeInstance => {
    return anime({
      targets,
      opacity: [0, 1],
      translateX: ['100%', 0],
      duration: 1000,
      delay,
      easing: 'easeOutExpo',
    });
  },

  // Attention Seekers
  pulse: (targets: string | HTMLElement | HTMLElement[]): AnimeInstance => {
    return anime({
      targets,
      scale: [1, 1.05, 1],
      duration: 1000,
      easing: 'easeInOutQuad',
      loop: true,
    });
  },

  bounce: (targets: string | HTMLElement | HTMLElement[]): AnimeInstance => {
    return anime({
      targets,
      translateY: [
        { value: -10, duration: 300 },
        { value: 0, duration: 300 },
        { value: -5, duration: 200 },
        { value: 0, duration: 200 },
      ],
      easing: 'easeOutQuad',
    });
  },

  shake: (targets: string | HTMLElement | HTMLElement[]): AnimeInstance => {
    return anime({
      targets,
      translateX: [
        { value: -10, duration: 100 },
        { value: 10, duration: 100 },
        { value: -10, duration: 100 },
        { value: 10, duration: 100 },
        { value: 0, duration: 100 },
      ],
      easing: 'easeInOutQuad',
    });
  },

  // Gradient Animations
  gradientShift: (targets: string | HTMLElement | HTMLElement[]): AnimeInstance => {
    return anime({
      targets,
      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      duration: 3000,
      easing: 'linear',
      loop: true,
    });
  },

  // Glow Effect
  glowPulse: (targets: string | HTMLElement | HTMLElement[]): AnimeInstance => {
    return anime({
      targets,
      filter: [
        'drop-shadow(0 0 10px rgba(124, 58, 237, 0.5))',
        'drop-shadow(0 0 20px rgba(124, 58, 237, 0.8))',
        'drop-shadow(0 0 10px rgba(124, 58, 237, 0.5))',
      ],
      duration: 2000,
      easing: 'easeInOutQuad',
      loop: true,
    });
  },

  // Stagger Animations
  staggerFadeIn: (
    targets: string | HTMLElement | HTMLElement[],
    staggerDelay = 100
  ): AnimeInstance => {
    return anime({
      targets,
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 800,
      delay: anime.stagger(staggerDelay),
      easing: 'easeOutCubic',
    });
  },

  staggerSlideIn: (
    targets: string | HTMLElement | HTMLElement[],
    staggerDelay = 100
  ): AnimeInstance => {
    return anime({
      targets,
      opacity: [0, 1],
      translateX: [-40, 0],
      duration: 1000,
      delay: anime.stagger(staggerDelay),
      easing: 'easeOutExpo',
    });
  },

  staggerScaleIn: (
    targets: string | HTMLElement | HTMLElement[],
    staggerDelay = 100
  ): AnimeInstance => {
    return anime({
      targets,
      opacity: [0, 1],
      scale: [0.5, 1],
      duration: 800,
      delay: anime.stagger(staggerDelay),
      easing: 'easeOutElastic(1, .6)',
    });
  },
};

/**
 * Custom Animation Builder
 * Create custom animations with ease
 */
export const createAnimation = (config: AnimeParams): AnimeInstance => {
  return anime(config);
};

/**
 * Timeline Animation Builder
 * Create complex animation sequences
 */
export const createTimeline = (config?: AnimeParams): anime.AnimeTimelineInstance => {
  return anime.timeline(config);
};

/**
 * Easing Functions Export
 */
export const easings = {
  linear: 'linear',
  easeInQuad: 'easeInQuad',
  easeOutQuad: 'easeOutQuad',
  easeInOutQuad: 'easeInOutQuad',
  easeInCubic: 'easeInCubic',
  easeOutCubic: 'easeOutCubic',
  easeInOutCubic: 'easeInOutCubic',
  easeInQuart: 'easeInQuart',
  easeOutQuart: 'easeOutQuart',
  easeInOutQuart: 'easeInOutQuart',
  easeInExpo: 'easeInExpo',
  easeOutExpo: 'easeOutExpo',
  easeInOutExpo: 'easeInOutExpo',
  easeInElastic: 'easeInElastic(1, .6)',
  easeOutElastic: 'easeOutElastic(1, .6)',
  easeInOutElastic: 'easeInOutElastic(1, .6)',
  spring: 'spring(1, 80, 10, 0)',
};

/**
 * Animation Control Utilities
 */
export const animationControls = {
  pause: (animation: AnimeInstance) => animation.pause(),
  play: (animation: AnimeInstance) => animation.play(),
  restart: (animation: AnimeInstance) => animation.restart(),
  reverse: (animation: AnimeInstance) => animation.reverse(),
  seek: (animation: AnimeInstance, time: number) => animation.seek(time),
};

/**
 * Hero Section Animations
 */
export const heroAnimations = {
  titleReveal: (target: string | HTMLElement): AnimeInstance => {
    return anime({
      targets: target,
      opacity: [0, 1],
      translateY: [60, 0],
      scale: [0.9, 1],
      duration: 1200,
      easing: 'easeOutExpo',
    });
  },

  subtitleReveal: (target: string | HTMLElement): AnimeInstance => {
    return anime({
      targets: target,
      opacity: [0, 1],
      translateY: [40, 0],
      duration: 1000,
      delay: 300,
      easing: 'easeOutExpo',
    });
  },

  ctaReveal: (target: string | HTMLElement): AnimeInstance => {
    return anime({
      targets: target,
      opacity: [0, 1],
      translateY: [30, 0],
      scale: [0.95, 1],
      duration: 800,
      delay: 600,
      easing: 'easeOutExpo',
    });
  },

  heroSequence: (
    title: string | HTMLElement,
    subtitle: string | HTMLElement,
    cta: string | HTMLElement
  ): anime.AnimeTimelineInstance => {
    const tl = anime.timeline({
      easing: 'easeOutExpo',
    });

    tl.add({
      targets: title,
      opacity: [0, 1],
      translateY: [60, 0],
      scale: [0.9, 1],
      duration: 1200,
    })
      .add(
        {
          targets: subtitle,
          opacity: [0, 1],
          translateY: [40, 0],
          duration: 1000,
        },
        '-=800'
      )
      .add(
        {
          targets: cta,
          opacity: [0, 1],
          translateY: [30, 0],
          scale: [0.95, 1],
          duration: 800,
        },
        '-=600'
      );

    return tl;
  },
};

/**
 * Card/Component Animations
 */
export const componentAnimations = {
  cardHover: (target: HTMLElement): void => {
    target.addEventListener('mouseenter', () => {
      anime({
        targets: target,
        scale: 1.05,
        translateY: -5,
        duration: 300,
        easing: 'easeOutCubic',
      });
    });

    target.addEventListener('mouseleave', () => {
      anime({
        targets: target,
        scale: 1,
        translateY: 0,
        duration: 300,
        easing: 'easeOutCubic',
      });
    });
  },

  buttonHover: (target: HTMLElement): void => {
    target.addEventListener('mouseenter', () => {
      anime({
        targets: target,
        scale: 1.05,
        duration: 200,
        easing: 'easeOutQuad',
      });
    });

    target.addEventListener('mouseleave', () => {
      anime({
        targets: target,
        scale: 1,
        duration: 200,
        easing: 'easeOutQuad',
      });
    });
  },

  rippleEffect: (target: HTMLElement, x: number, y: number): void => {
    const ripple = document.createElement('span');
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.backgroundColor = 'rgba(124, 58, 237, 0.5)';
    ripple.style.width = '20px';
    ripple.style.height = '20px';
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.style.transform = 'translate(-50%, -50%)';
    ripple.style.pointerEvents = 'none';

    target.style.position = 'relative';
    target.style.overflow = 'hidden';
    target.appendChild(ripple);

    anime({
      targets: ripple,
      scale: [0, 20],
      opacity: [1, 0],
      duration: 600,
      easing: 'easeOutExpo',
      complete: () => ripple.remove(),
    });
  },
};

/**
 * Text Animation Utilities
 */
export const textAnimations = {
  typewriter: (target: HTMLElement, text: string, duration = 2000): AnimeInstance => {
    const chars = text.split('');
    target.textContent = '';

    return anime({
      targets: { value: 0 },
      value: chars.length,
      duration,
      easing: 'linear',
      round: 1,
      update: function (anim) {
        const currentValue = Math.floor((anim.animations[0].currentValue as number) || 0);
        target.textContent = chars.slice(0, currentValue).join('');
      },
    });
  },

  letterReveal: (target: string | HTMLElement): AnimeInstance => {
    const element = typeof target === 'string' ? document.querySelector(target) : target;
    if (!element) return anime({ targets: null });

    const text = element.textContent || '';
    element.innerHTML = text
      .split('')
      .map((char) => `<span class="letter" style="display:inline-block">${char}</span>`)
      .join('');

    return anime({
      targets: `${typeof target === 'string' ? target : ''} .letter`,
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 800,
      delay: anime.stagger(50),
      easing: 'easeOutExpo',
    });
  },

  wordReveal: (target: string | HTMLElement): AnimeInstance => {
    const element = typeof target === 'string' ? document.querySelector(target) : target;
    if (!element) return anime({ targets: null });

    const text = element.textContent || '';
    element.innerHTML = text
      .split(' ')
      .map(
        (word) =>
          `<span class="word" style="display:inline-block;margin-right:0.25em">${word}</span>`
      )
      .join('');

    return anime({
      targets: `${typeof target === 'string' ? target : ''} .word`,
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 600,
      delay: anime.stagger(100),
      easing: 'easeOutExpo',
    });
  },
};

/**
 * Loading Animations
 */
export const loadingAnimations = {
  spinner: (target: string | HTMLElement): AnimeInstance => {
    return anime({
      targets: target,
      rotate: '1turn',
      duration: 1000,
      easing: 'linear',
      loop: true,
    });
  },

  dots: (targets: string | HTMLElement | HTMLElement[]): AnimeInstance => {
    return anime({
      targets,
      translateY: [0, -10, 0],
      opacity: [1, 0.5, 1],
      duration: 1000,
      delay: anime.stagger(200),
      easing: 'easeInOutQuad',
      loop: true,
    });
  },

  progressBar: (target: string | HTMLElement, progress: number): AnimeInstance => {
    return anime({
      targets: target,
      width: `${progress}%`,
      duration: 1000,
      easing: 'easeOutExpo',
    });
  },
};

export default {
  animationPresets,
  createAnimation,
  createTimeline,
  easings,
  animationControls,
  heroAnimations,
  componentAnimations,
  textAnimations,
  loadingAnimations,
};
