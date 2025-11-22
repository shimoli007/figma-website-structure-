# Animation Utilities Documentation

Comprehensive animation system built with anime.js for the Cynea AI website. Includes scroll-triggered animations, entrance animations, micro-interactions, and React hooks.

## Table of Contents

- [Installation](#installation)
- [Quick Start](#quick-start)
- [Entrance Animations](#entrance-animations)
- [Scroll Animations](#scroll-animations)
- [Micro-Interactions](#micro-interactions)
- [React Hooks](#react-hooks)
- [Advanced Animations](#advanced-animations)
- [Configuration](#configuration)

## Installation

The library is already installed. Import what you need:

```typescript
import { fadeInUp, animateOnScroll, useScrollAnimation } from '@/utils/animations';
```

## Quick Start

### Using Vanilla JavaScript

```typescript
import { fadeInUp, staggerFadeIn } from '@/utils/animations';

// Animate single element
fadeInUp('.hero-title');

// Stagger animate multiple elements
staggerFadeIn('.feature-card');
```

### Using React Hooks

```tsx
import { useScrollAnimation } from '@/hooks/useAnimations';

function MyComponent() {
  const ref = useScrollAnimation('fadeInUp');

  return <div ref={ref}>This will fade in on scroll!</div>;
}
```

## Entrance Animations

### Available Entrance Animations

- `fadeInUp` - Fade in from bottom
- `fadeInDown` - Fade in from top
- `fadeInLeft` - Fade in from left
- `fadeInRight` - Fade in from right
- `fadeIn` - Simple fade in
- `scaleIn` - Scale up with fade
- `zoomIn` - Zoom in effect
- `slideInUp` - Slide in from bottom
- `staggerFadeIn` - Stagger multiple elements

### Examples

```typescript
import { fadeInUp, scaleIn, ANIMATION_DURATIONS } from '@/utils/animations';

// Basic usage
fadeInUp('.my-element');

// With custom options
fadeInUp('.my-element', {
  duration: ANIMATION_DURATIONS.slow,
  delay: 200,
});

// Stagger animation
staggerFadeIn('.card', {
  delay: anime.stagger(100), // 100ms between each
});
```

## Scroll Animations

### Using Scroll Animation Manager

```typescript
import { animateOnScroll } from '@/utils/animations';

// Animate on scroll into view
animateOnScroll('.feature', 'fadeInUp');

// With custom options
animateOnScroll('.hero', 'scaleIn', {
  intersectionOptions: {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px',
  },
  animationOptions: {
    duration: 800,
    easing: 'easeOutExpo',
  },
});
```

### Using React Hook

```tsx
import { useScrollAnimation } from '@/hooks/useAnimations';

function FeatureCard() {
  const ref = useScrollAnimation('fadeInUp', {
    intersectionOptions: { threshold: 0.1 },
    animationOptions: { duration: 600 },
  });

  return (
    <div ref={ref} className="feature-card">
      Content here
    </div>
  );
}
```

### Stagger Children on Scroll

```tsx
import { useStaggerOnScroll } from '@/hooks/useAnimations';

function FeatureGrid() {
  const ref = useStaggerOnScroll('.feature-item');

  return (
    <div ref={ref} className="feature-grid">
      <div className="feature-item">Item 1</div>
      <div className="feature-item">Item 2</div>
      <div className="feature-item">Item 3</div>
    </div>
  );
}
```

## Micro-Interactions

### Button Interactions

```typescript
import { buttonHover, buttonHoverReset } from '@/utils/animations';

const button = document.querySelector('.my-button');
button.addEventListener('mouseenter', () => buttonHover(button));
button.addEventListener('mouseleave', () => buttonHoverReset(button));
```

### Using React Hook

```tsx
import { useHoverAnimation } from '@/hooks/useAnimations';
import { buttonHover, buttonHoverReset } from '@/utils/animations';

function MyButton() {
  const ref = useHoverAnimation(buttonHover, buttonHoverReset);

  return <button ref={ref}>Hover me!</button>;
}
```

### Other Micro-Interactions

```typescript
import { pulse, shake, bounce, rotate, glow } from '@/utils/animations';

// Pulse animation (loops by default)
pulse('.notification-badge');

// Shake for error states
shake('.error-message');

// Bounce effect
bounce('.success-icon');

// Rotate animation
rotate('.loading-spinner', { rotate: 360, loop: true });

// Glow effect
glow('.cta-button', {
  color: 'rgba(99, 102, 241, 0.5)',
  duration: 1200
});
```

### Ripple Effect

```tsx
import { ripple } from '@/utils/animations';

function RippleButton() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    ripple(e.nativeEvent, e.currentTarget);
  };

  return (
    <button onClick={handleClick} className="relative overflow-hidden">
      Click for ripple effect
    </button>
  );
}
```

## React Hooks

### useScrollAnimation

Animate element when it scrolls into view.

```tsx
const ref = useScrollAnimation('fadeInUp', {
  intersectionOptions: { threshold: 0.1 },
  animationOptions: { duration: 600 },
});

return <div ref={ref}>Content</div>;
```

### useEntranceAnimation

Animate element on mount.

```tsx
const ref = useEntranceAnimation('scaleIn', { duration: 800 });

return <div ref={ref}>Content</div>;
```

### usePulse

Add pulse animation to element.

```tsx
const ref = usePulse({ duration: 1000 });

return <div ref={ref}>Pulsing element</div>;
```

### useGlow

Add glow effect to element.

```tsx
const ref = useGlow({
  color: 'rgba(99, 102, 241, 0.5)',
  duration: 1200
});

return <div ref={ref}>Glowing element</div>;
```

### useParallax

Add parallax scroll effect.

```tsx
const ref = useParallax({ speed: 0.5, direction: 'up' });

return <div ref={ref}>Parallax element</div>;
```

### useCounter

Animated counter.

```tsx
const ref = useCounter(1000, {
  from: 0,
  duration: 2000,
  format: (val) => `$${val.toLocaleString()}`,
  trigger: 'scroll', // or 'mount'
});

return <div ref={ref}>0</div>;
```

### useInView

Track if element is in viewport.

```tsx
const [ref, isInView] = useInView({ threshold: 0.5 });

return (
  <div ref={ref}>
    {isInView ? 'I am visible!' : 'Not visible yet'}
  </div>
);
```

### usePrefersReducedMotion

Respect user's motion preferences.

```tsx
const prefersReducedMotion = usePrefersReducedMotion();

return (
  <div>
    {!prefersReducedMotion && <AnimatedComponent />}
  </div>
);
```

## Advanced Animations

### Timeline Animations

```typescript
import { createTimeline } from '@/utils/animations';

const timeline = createTimeline();

timeline
  .add({
    targets: '.title',
    translateY: [-50, 0],
    opacity: [0, 1],
    duration: 800,
  })
  .add({
    targets: '.subtitle',
    translateY: [-30, 0],
    opacity: [0, 1],
    duration: 600,
  }, '-=400') // Start 400ms before previous animation ends
  .add({
    targets: '.cta-button',
    scale: [0, 1],
    opacity: [0, 1],
    duration: 500,
  });
```

### Using Timeline Hook

```tsx
import { useAnimationTimeline } from '@/hooks/useAnimations';

function HeroSection() {
  useAnimationTimeline((timeline) => {
    timeline
      .add({
        targets: '.hero-title',
        translateY: [-50, 0],
        opacity: [0, 1],
      })
      .add({
        targets: '.hero-subtitle',
        translateY: [-30, 0],
        opacity: [0, 1],
      }, '-=400');
  });

  return (
    <>
      <h1 className="hero-title">Welcome</h1>
      <p className="hero-subtitle">Subtitle</p>
    </>
  );
}
```

### Parallax Scroll

```typescript
import { parallaxScroll } from '@/utils/animations';

// Element moves up as you scroll down
parallaxScroll('.background-image', {
  speed: 0.5,
  direction: 'up',
});
```

### Typewriter Effect

```typescript
import { typewriter } from '@/utils/animations';

typewriter('.typewriter-text', {
  text: 'Welcome to Cynea AI',
  speed: 50, // ms per character
});
```

### Counter Animation

```typescript
import { counterAnimation } from '@/utils/animations';

counterAnimation('.stat-number', {
  from: 0,
  to: 1000,
  duration: 2000,
  format: (val) => `${Math.round(val)}+`,
});
```

### Morph Animation

```typescript
import { morph } from '@/utils/animations';

morph('.morphing-box',
  { width: '100px', height: '100px', borderRadius: '0%' },
  { width: '200px', height: '200px', borderRadius: '50%' },
  { duration: 1000 }
);
```

### Batch Animations

```typescript
import { batchAnimate, fadeInUp, scaleIn, fadeInLeft } from '@/utils/animations';

batchAnimate([
  { target: '.title', animation: fadeInUp },
  { target: '.subtitle', animation: scaleIn, options: { delay: 200 } },
  { target: '.image', animation: fadeInLeft, options: { delay: 400 } },
]);
```

## Configuration

### Animation Durations

```typescript
import { ANIMATION_DURATIONS } from '@/utils/animations';

ANIMATION_DURATIONS.instant  // 150ms
ANIMATION_DURATIONS.fast     // 300ms
ANIMATION_DURATIONS.normal   // 500ms
ANIMATION_DURATIONS.slow     // 800ms
ANIMATION_DURATIONS.slower   // 1200ms
```

### Animation Easings

```typescript
import { ANIMATION_EASINGS } from '@/utils/animations';

ANIMATION_EASINGS.easeOutExpo      // Entrance animations
ANIMATION_EASINGS.easeOutCubic     // Smooth exits
ANIMATION_EASINGS.easeInOutQuad    // Micro-interactions
ANIMATION_EASINGS.spring           // Bouncy effect
ANIMATION_EASINGS.elasticOut       // Elastic effect
```

### Intersection Observer Options

```typescript
import { INTERSECTION_OPTIONS } from '@/utils/animations';

INTERSECTION_OPTIONS.default    // 10% threshold, -100px margin
INTERSECTION_OPTIONS.immediate  // 0% threshold, 0px margin
INTERSECTION_OPTIONS.delayed    // 20% threshold, -200px margin
```

## Best Practices

### 1. Respect Reduced Motion Preference

```tsx
import { usePrefersReducedMotion } from '@/hooks/useAnimations';

function AnimatedComponent() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const ref = useScrollAnimation(
    'fadeInUp',
    prefersReducedMotion ? { animationOptions: { duration: 0 } } : undefined
  );

  return <div ref={ref}>Content</div>;
}
```

### 2. Clean Up Animations

React hooks handle cleanup automatically. For vanilla JS:

```typescript
const animation = fadeInUp('.element');

// Later, pause or reset
animation.pause();
animation.restart();
```

### 3. Performance Tips

- Use `transform` and `opacity` for best performance
- Avoid animating `width`, `height`, `top`, `left`
- Use `will-change` CSS property for complex animations
- Limit number of simultaneous animations
- Use `IntersectionObserver` to animate only visible elements

### 4. Stagger Delays

```typescript
import anime from 'animejs';

staggerFadeIn('.items', {
  delay: anime.stagger(100, { start: 500 }), // Start after 500ms, 100ms between each
});
```

## Examples

### Complete Hero Section

```tsx
import { useScrollAnimation, useStaggerOnScroll } from '@/hooks/useAnimations';

function HeroSection() {
  const titleRef = useScrollAnimation('fadeInUp');
  const subtitleRef = useScrollAnimation('fadeInUp', {
    animationOptions: { delay: 200 },
  });
  const gridRef = useStaggerOnScroll('.feature-card');

  return (
    <section>
      <h1 ref={titleRef}>Welcome to Cynea AI</h1>
      <p ref={subtitleRef}>Transform your business with AI</p>

      <div ref={gridRef} className="grid">
        <div className="feature-card">Feature 1</div>
        <div className="feature-card">Feature 2</div>
        <div className="feature-card">Feature 3</div>
      </div>
    </section>
  );
}
```

### Interactive Button

```tsx
import { useHoverAnimation } from '@/hooks/useAnimations';
import { ripple } from '@/utils/animations';
import anime from 'animejs';

function InteractiveButton() {
  const ref = useHoverAnimation(
    (el) => anime({ targets: el, scale: 1.05, duration: 300 }),
    (el) => anime({ targets: el, scale: 1, duration: 300 })
  );

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    ripple(e.nativeEvent, e.currentTarget, { color: 'rgba(255,255,255,0.5)' });
  };

  return (
    <button ref={ref} onClick={handleClick}>
      Click Me
    </button>
  );
}
```

### Stats Counter

```tsx
import { useCounter } from '@/hooks/useAnimations';

function StatsSection() {
  const users = useCounter(10000, {
    format: (val) => `${Math.round(val).toLocaleString()}+`,
    trigger: 'scroll',
  });

  const revenue = useCounter(5000000, {
    format: (val) => `$${(Math.round(val) / 1000000).toFixed(1)}M`,
    trigger: 'scroll',
  });

  return (
    <div className="stats">
      <div>
        <div ref={users}>0</div>
        <p>Active Users</p>
      </div>
      <div>
        <div ref={revenue}>$0</div>
        <p>Revenue</p>
      </div>
    </div>
  );
}
```

## Troubleshooting

### Animation not triggering

- Check that element exists in DOM
- Verify selector is correct
- Check intersection observer threshold
- Ensure element is visible (not `display: none`)

### Animation stuttering

- Reduce number of simultaneous animations
- Use `will-change` CSS property
- Check for heavy JavaScript running on main thread

### TypeScript errors

- Ensure types are imported: `import type anime from 'animejs'`
- Use proper ref types: `RefObject<HTMLDivElement>`

## Support

For issues or questions, refer to:
- [anime.js documentation](https://animejs.com/documentation/)
- Project README
- Team documentation
