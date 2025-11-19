/**
 * Animation Utilities using Anime.js
 * Provides reusable animation functions for the website
 */

// Import anime.js dynamically
let anime: any;

// Dynamically import anime.js
export async function initAnime() {
  if (!anime) {
    anime = (await import('/libs/anime.esm.js')).default;
  }
  return anime;
}

/**
 * Fade in animation
 */
export async function fadeIn(
  targets: string | HTMLElement | HTMLElement[],
  options: {
    duration?: number;
    delay?: number;
    easing?: string;
  } = {}
) {
  const animeLib = await initAnime();
  return animeLib({
    targets,
    opacity: [0, 1],
    duration: options.duration || 1000,
    delay: options.delay || 0,
    easing: options.easing || 'easeOutQuad',
  });
}

/**
 * Slide in from bottom animation
 */
export async function slideInUp(
  targets: string | HTMLElement | HTMLElement[],
  options: {
    duration?: number;
    delay?: number;
    distance?: number;
    easing?: string;
  } = {}
) {
  const animeLib = await initAnime();
  return animeLib({
    targets,
    translateY: [options.distance || 50, 0],
    opacity: [0, 1],
    duration: options.duration || 800,
    delay: options.delay || 0,
    easing: options.easing || 'easeOutCubic',
  });
}

/**
 * Slide in from left animation
 */
export async function slideInLeft(
  targets: string | HTMLElement | HTMLElement[],
  options: {
    duration?: number;
    delay?: number;
    distance?: number;
    easing?: string;
  } = {}
) {
  const animeLib = await initAnime();
  return animeLib({
    targets,
    translateX: [-options.distance || -50, 0],
    opacity: [0, 1],
    duration: options.duration || 800,
    delay: options.delay || 0,
    easing: options.easing || 'easeOutCubic',
  });
}

/**
 * Slide in from right animation
 */
export async function slideInRight(
  targets: string | HTMLElement | HTMLElement[],
  options: {
    duration?: number;
    delay?: number;
    distance?: number;
    easing?: string;
  } = {}
) {
  const animeLib = await initAnime();
  return animeLib({
    targets,
    translateX: [options.distance || 50, 0],
    opacity: [0, 1],
    duration: options.duration || 800,
    delay: options.delay || 0,
    easing: options.easing || 'easeOutCubic',
  });
}

/**
 * Scale up animation
 */
export async function scaleIn(
  targets: string | HTMLElement | HTMLElement[],
  options: {
    duration?: number;
    delay?: number;
    from?: number;
    easing?: string;
  } = {}
) {
  const animeLib = await initAnime();
  return animeLib({
    targets,
    scale: [options.from || 0.8, 1],
    opacity: [0, 1],
    duration: options.duration || 600,
    delay: options.delay || 0,
    easing: options.easing || 'easeOutBack',
  });
}

/**
 * Stagger animation for multiple elements
 */
export async function staggerFadeIn(
  targets: string | HTMLElement | HTMLElement[],
  options: {
    duration?: number;
    delay?: number;
    staggerDelay?: number;
    easing?: string;
  } = {}
) {
  const animeLib = await initAnime();
  return animeLib({
    targets,
    opacity: [0, 1],
    translateY: [30, 0],
    duration: options.duration || 800,
    delay: animeLib.stagger(options.staggerDelay || 100, {
      start: options.delay || 0,
    }),
    easing: options.easing || 'easeOutQuad',
  });
}

/**
 * Pulse animation (for buttons and interactive elements)
 */
export async function pulse(
  targets: string | HTMLElement | HTMLElement[],
  options: {
    duration?: number;
    scale?: number;
    loop?: boolean;
  } = {}
) {
  const animeLib = await initAnime();
  return animeLib({
    targets,
    scale: [1, options.scale || 1.05, 1],
    duration: options.duration || 1000,
    easing: 'easeInOutQuad',
    loop: options.loop || false,
  });
}

/**
 * Rotate animation
 */
export async function rotate(
  targets: string | HTMLElement | HTMLElement[],
  options: {
    duration?: number;
    degrees?: number;
    easing?: string;
  } = {}
) {
  const animeLib = await initAnime();
  return animeLib({
    targets,
    rotate: [0, options.degrees || 360],
    duration: options.duration || 1000,
    easing: options.easing || 'easeInOutQuad',
  });
}

/**
 * Bounce animation
 */
export async function bounce(
  targets: string | HTMLElement | HTMLElement[],
  options: {
    duration?: number;
    distance?: number;
  } = {}
) {
  const animeLib = await initAnime();
  return animeLib({
    targets,
    translateY: [
      { value: -options.distance || -20, duration: 300 },
      { value: 0, duration: 300 },
      { value: -options.distance! / 2 || -10, duration: 200 },
      { value: 0, duration: 200 },
    ],
    easing: 'easeOutBounce',
  });
}

/**
 * Type writer animation for text
 */
export async function typeWriter(
  element: HTMLElement,
  text: string,
  options: {
    duration?: number;
    delay?: number;
  } = {}
) {
  const animeLib = await initAnime();
  const chars = text.split('');
  element.innerHTML = '';

  chars.forEach((char, i) => {
    const span = document.createElement('span');
    span.textContent = char;
    span.style.opacity = '0';
    element.appendChild(span);
  });

  return animeLib({
    targets: element.querySelectorAll('span'),
    opacity: [0, 1],
    duration: 50,
    delay: animeLib.stagger(options.duration || 50, {
      start: options.delay || 0,
    }),
    easing: 'linear',
  });
}

/**
 * Morph path animation (for SVGs)
 */
export async function morphPath(
  targets: string | HTMLElement | HTMLElement[],
  newPath: string,
  options: {
    duration?: number;
    easing?: string;
  } = {}
) {
  const animeLib = await initAnime();
  return animeLib({
    targets,
    d: newPath,
    duration: options.duration || 1000,
    easing: options.easing || 'easeInOutQuad',
  });
}

/**
 * Scroll-triggered animation
 */
export async function onScrollAnimate(
  targets: string | HTMLElement | HTMLElement[],
  animation: {
    opacity?: [number, number];
    translateY?: [number, number];
    scale?: [number, number];
    rotate?: [number, number];
  },
  options: {
    duration?: number;
    offset?: number;
    easing?: string;
  } = {}
) {
  const animeLib = await initAnime();

  const elements = typeof targets === 'string'
    ? document.querySelectorAll(targets)
    : Array.isArray(targets)
    ? targets
    : [targets];

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animeLib({
            targets: entry.target,
            ...animation,
            duration: options.duration || 800,
            easing: options.easing || 'easeOutQuad',
          });
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: `${options.offset || 0}px`,
    }
  );

  elements.forEach((el) => {
    if (el instanceof HTMLElement) {
      // Set initial state
      if (animation.opacity) el.style.opacity = String(animation.opacity[0]);
      if (animation.translateY) el.style.transform = `translateY(${animation.translateY[0]}px)`;
      if (animation.scale) el.style.transform = `scale(${animation.scale[0]})`;

      observer.observe(el);
    }
  });

  return observer;
}

/**
 * Parallax scrolling effect
 */
export async function parallax(
  targets: string | HTMLElement | HTMLElement[],
  options: {
    speed?: number;
    direction?: 'vertical' | 'horizontal';
  } = {}
) {
  const animeLib = await initAnime();
  const elements = typeof targets === 'string'
    ? document.querySelectorAll(targets)
    : Array.isArray(targets)
    ? targets
    : [targets];

  const handleScroll = () => {
    const scrolled = window.pageYOffset;
    elements.forEach((el) => {
      if (el instanceof HTMLElement) {
        const speed = options.speed || 0.5;
        const yPos = -(scrolled * speed);

        if (options.direction === 'horizontal') {
          el.style.transform = `translateX(${yPos}px)`;
        } else {
          el.style.transform = `translateY(${yPos}px)`;
        }
      }
    });
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}

/**
 * Card flip animation
 */
export async function flipCard(
  targets: string | HTMLElement | HTMLElement[],
  options: {
    duration?: number;
    direction?: 'horizontal' | 'vertical';
  } = {}
) {
  const animeLib = await initAnime();
  const rotateKey = options.direction === 'vertical' ? 'rotateX' : 'rotateY';

  return animeLib({
    targets,
    [rotateKey]: [0, 180],
    duration: options.duration || 600,
    easing: 'easeInOutQuad',
  });
}

/**
 * Number counter animation
 */
export async function countUp(
  element: HTMLElement,
  from: number,
  to: number,
  options: {
    duration?: number;
    decimals?: number;
    suffix?: string;
    prefix?: string;
  } = {}
) {
  const animeLib = await initAnime();
  const obj = { value: from };

  return animeLib({
    targets: obj,
    value: to,
    duration: options.duration || 2000,
    easing: 'easeOutQuad',
    round: options.decimals !== undefined ? Math.pow(10, options.decimals) : 1,
    update: () => {
      const value = options.decimals !== undefined
        ? obj.value.toFixed(options.decimals)
        : Math.round(obj.value);
      element.textContent = `${options.prefix || ''}${value}${options.suffix || ''}`;
    },
  });
}

/**
 * Wave animation
 */
export async function wave(
  targets: string | HTMLElement | HTMLElement[],
  options: {
    duration?: number;
    amplitude?: number;
  } = {}
) {
  const animeLib = await initAnime();
  const elements = typeof targets === 'string'
    ? document.querySelectorAll(targets)
    : Array.isArray(targets)
    ? targets
    : [targets];

  elements.forEach((el, index) => {
    animeLib({
      targets: el,
      translateY: [
        { value: -options.amplitude || -10, duration: 250 },
        { value: 0, duration: 250 },
      ],
      delay: index * 100,
      loop: true,
      easing: 'easeInOutSine',
    });
  });
}

/**
 * Reveal text by characters
 */
export async function revealText(
  element: HTMLElement,
  options: {
    duration?: number;
    delay?: number;
  } = {}
) {
  const animeLib = await initAnime();
  const text = element.textContent || '';
  element.innerHTML = '';

  text.split('').forEach((char) => {
    const span = document.createElement('span');
    span.textContent = char === ' ' ? '\u00A0' : char;
    span.style.opacity = '0';
    span.style.display = 'inline-block';
    element.appendChild(span);
  });

  return animeLib({
    targets: element.querySelectorAll('span'),
    opacity: [0, 1],
    translateY: [20, 0],
    duration: options.duration || 600,
    delay: animeLib.stagger(50, { start: options.delay || 0 }),
    easing: 'easeOutQuad',
  });
}
