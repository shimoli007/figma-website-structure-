# Animation Utilities Documentation

Comprehensive animation system for the Cynea AI website using Anime.js.

## Table of Contents

- [Installation](#installation)
- [Core Animations](#core-animations)
- [Scroll Animations](#scroll-animations)
- [Micro Interactions](#micro-interactions)
- [React Hooks](#react-hooks)
- [Usage Examples](#usage-examples)

## Installation

The animation utilities are already set up. Simply import what you need:

```typescript
import { animationPresets, createAnimation } from '@/utils/animations';
import { createScrollObserver, addScrollAnimation } from '@/utils/scrollAnimations';
import { buttonInteractions, cardInteractions } from '@/utils/microInteractions';
import { useScrollAnimation, useCardLift } from '@/utils/hooks';
```

## Core Animations

### Entrance Animations

```typescript
import { animationPresets } from '@/utils/animations';

// Fade in with upward motion
animationPresets.fadeInUp('.hero-title', 0);

// Scale in with elastic easing
animationPresets.scaleIn('.feature-card', 200);

// Slide in from left
animationPresets.slideInLeft('.sidebar', 0);

// Staggered animation
animationPresets.staggerFadeIn('.feature-list > li', 100);
```

### Available Entrance Animations

- `fadeIn` - Fade in with slight upward motion
- `fadeInUp` - Fade in from bottom
- `fadeInDown` - Fade in from top
- `fadeInLeft` - Fade in from left
- `fadeInRight` - Fade in from right
- `scaleIn` - Scale up with elastic effect
- `slideInLeft` - Slide in from left side
- `slideInRight` - Slide in from right side

### Hero Section Animations

```typescript
import { heroAnimations } from '@/utils/animations';

// Animate individual elements
heroAnimations.titleReveal('.hero-title');
heroAnimations.subtitleReveal('.hero-subtitle');
heroAnimations.ctaReveal('.hero-cta');

// Or use the complete sequence
heroAnimations.heroSequence('.hero-title', '.hero-subtitle', '.hero-cta');
```

### Text Animations

```typescript
import { textAnimations } from '@/utils/animations';

// Typewriter effect
textAnimations.typewriter(element, 'Welcome to Cynea AI', 2000);

// Letter reveal animation
textAnimations.letterReveal('.animated-heading');

// Word reveal animation
textAnimations.wordReveal('.animated-paragraph');
```

## Scroll Animations

### Basic Scroll Animation

```typescript
import { addScrollAnimation } from '@/utils/scrollAnimations';

// Add fade-in-up animation to all cards
addScrollAnimation('.card', 'fadeInUp', {
  threshold: 0.2,
  triggerOnce: true,
});

// Custom animation
const observer = createScrollObserver();
observer.observe('.custom-element', {
  animationType: 'custom',
  customAnimation: (element) => {
    return anime({
      targets: element,
      opacity: [0, 1],
      scale: [0.5, 1],
      rotate: ['-10deg', '0deg'],
      duration: 1000,
      easing: 'easeOutExpo',
    });
  },
});
```

### Staggered Scroll Animations

```typescript
import { addStaggeredScrollAnimation } from '@/utils/scrollAnimations';

// Stagger animation for list items
addStaggeredScrollAnimation('.features-list .feature-item', 'fadeInUp', 100);
```

### Counter Animation

```typescript
import { animateCounter } from '@/utils/scrollAnimations';

// Animate number counting
animateCounter('.stat-number', 0, 1000, 2000, '+');
animateCounter('.percentage', 0, 95, 2000, '%');
```

### Parallax Effect

```typescript
import { createParallaxEffect } from '@/utils/scrollAnimations';

// Add parallax to background element
createParallaxEffect('.parallax-bg', 0.5);
```

### Scroll Progress Indicator

```typescript
import { createScrollProgress } from '@/utils/scrollAnimations';

// Create scroll progress bar
createScrollProgress('.progress-bar');
```

### Section Reveal

```typescript
import { revealSection } from '@/utils/scrollAnimations';

// Reveal section with staggered children
revealSection('.features-section', '.feature-card');
```

## Micro Interactions

### Button Interactions

```typescript
import { buttonInteractions } from '@/utils/microInteractions';

const button = document.querySelector('.my-button');

// Add hover scale effect
buttonInteractions.addHoverEffect(button);

// Add ripple effect on click
buttonInteractions.addRippleEffect(button);

// Add pulse effect
buttonInteractions.addPulseEffect(button);

// Add magnetic effect
buttonInteractions.addMagneticEffect(button, 0.3);

// Shake on error
buttonInteractions.shake(button);
```

### Card Interactions

```typescript
import { cardInteractions } from '@/utils/microInteractions';

const card = document.querySelector('.card');

// Add lift effect on hover
cardInteractions.addLiftEffect(card);

// Add 3D tilt effect
cardInteractions.addTiltEffect(card);

// Add glow effect
cardInteractions.addGlowEffect(card, '124, 58, 237');

// Add scale effect
cardInteractions.addScaleEffect(card, 1.05);
```

### Input Interactions

```typescript
import { inputInteractions } from '@/utils/microInteractions';

const input = document.querySelector('input');
const label = document.querySelector('label');

// Add focus effect
inputInteractions.addFocusEffect(input);

// Shake on validation error
inputInteractions.shakeOnError(input);

// Success animation
inputInteractions.successAnimation(input);

// Floating label
inputInteractions.floatingLabel(input, label);
```

### Icon Interactions

```typescript
import { iconInteractions } from '@/utils/microInteractions';

const icon = document.querySelector('.icon');

// Bounce animation
iconInteractions.bounce(icon);

// Spin animation
iconInteractions.spin(icon, 600);

// Heartbeat effect
iconInteractions.heartbeat(icon);

// Wiggle effect
iconInteractions.wiggle(icon);

// Hover rotate
iconInteractions.addHoverRotate(icon);
```

### Navigation Interactions

```typescript
import { navigationInteractions } from '@/utils/microInteractions';

const menuLines = [line1, line2, line3];
const menu = document.querySelector('.menu');

// Toggle hamburger menu
navigationInteractions.toggleHamburger(menuLines, isOpen);

// Slide menu
navigationInteractions.slideMenu(menu, isOpen);

// Dropdown toggle
navigationInteractions.dropdownToggle(dropdown, isOpen);

// Nav underline animation
navigationInteractions.underlineAnimation(underline, activeLink);
```

### Loading Indicators

```typescript
import { loadingIndicators } from '@/utils/microInteractions';

// Spinning loader
loadingIndicators.spinner('.loader');

// Pulsing dots
loadingIndicators.pulsingDots([dot1, dot2, dot3]);

// Wave animation
loadingIndicators.wave([bar1, bar2, bar3, bar4]);

// Progress bar
loadingIndicators.progressBar(progressBar, 75);

// Skeleton shimmer
loadingIndicators.shimmer('.skeleton');
```

### Auto-Initialize Micro Interactions

```typescript
import { initializeMicroInteractions } from '@/utils/microInteractions';

// Call once on page load to initialize all data-attribute interactions
initializeMicroInteractions();
```

Then use data attributes in your HTML:

```html
<button data-hover="scale" data-ripple="true">Click Me</button>
<div data-card="lift">Card Content</div>
<div data-card="tilt">3D Card</div>
<span data-icon="hover-rotate">🔄</span>
```

## React Hooks

### useScrollAnimation

Trigger animations when element enters viewport:

```tsx
import { useScrollAnimation } from '@/utils/hooks';

function FeatureCard() {
  const ref = useScrollAnimation({
    animationType: 'fadeInUp',
    threshold: 0.2,
    triggerOnce: true,
  });

  return <div ref={ref}>Content</div>;
}
```

### useStaggeredScrollAnimation

Stagger animations for child elements:

```tsx
import { useStaggeredScrollAnimation } from '@/utils/hooks';

function FeaturesList() {
  const ref = useStaggeredScrollAnimation('.feature-item', 100, {
    animationType: 'fadeInUp',
  });

  return (
    <div ref={ref}>
      <div className="feature-item">Feature 1</div>
      <div className="feature-item">Feature 2</div>
      <div className="feature-item">Feature 3</div>
    </div>
  );
}
```

### useCardLift

Add lift effect to cards:

```tsx
import { useCardLift } from '@/utils/hooks';

function Card() {
  const ref = useCardLift();

  return <div ref={ref} className="card">Card Content</div>;
}
```

### useButtonHover

Add hover effect to buttons:

```tsx
import { useButtonHover } from '@/utils/hooks';

function AnimatedButton() {
  const ref = useButtonHover();

  return <button ref={ref}>Hover Me</button>;
}
```

### useButtonRipple

Add ripple effect to buttons:

```tsx
import { useButtonRipple } from '@/utils/hooks';

function RippleButton() {
  const ref = useButtonRipple();

  return <button ref={ref}>Click Me</button>;
}
```

### useCounterAnimation

Animate numbers:

```tsx
import { useCounterAnimation } from '@/utils/hooks';

function StatCounter() {
  const ref = useCounterAnimation(0, 1000, 2000, '+');

  return <span ref={ref}>0</span>;
}
```

### useParallax

Add parallax scroll effect:

```tsx
import { useParallax } from '@/utils/hooks';

function ParallaxSection() {
  const ref = useParallax(0.5);

  return <div ref={ref} className="parallax-bg">Background</div>;
}
```

### useAnimation

Trigger animations imperatively:

```tsx
import { useAnimation } from '@/utils/hooks';

function AnimatedComponent() {
  const { ref, trigger } = useAnimation();

  return (
    <>
      <div ref={ref}>Content</div>
      <button onClick={() => trigger('bounce')}>Bounce</button>
    </>
  );
}
```

### useMagneticButton

Create magnetic button effect:

```tsx
import { useMagneticButton } from '@/utils/hooks';

function MagneticButton() {
  const ref = useMagneticButton(0.3);

  return <button ref={ref}>Magnetic Button</button>;
}
```

### useScrollProgress

Track scroll progress:

```tsx
import { useScrollProgress } from '@/utils/hooks';

function ScrollProgressBar() {
  const ref = useScrollProgress();

  return (
    <div className="progress-container">
      <div ref={ref} className="progress-bar" />
    </div>
  );
}
```

## Usage Examples

### Hero Section with Animations

```tsx
import { useEffect } from 'react';
import { heroAnimations } from '@/utils/animations';

function Hero() {
  useEffect(() => {
    heroAnimations.heroSequence('.hero-title', '.hero-subtitle', '.hero-cta');
  }, []);

  return (
    <section className="hero">
      <h1 className="hero-title display-1 text-gradient-primary">
        Welcome to Cynea AI
      </h1>
      <p className="hero-subtitle lead">
        Transform your business with AI-powered solutions
      </p>
      <button className="hero-cta">Get Started</button>
    </section>
  );
}
```

### Feature Cards with Scroll Animations

```tsx
import { useStaggeredScrollAnimation } from '@/utils/hooks';

function Features() {
  const ref = useStaggeredScrollAnimation('.feature-card', 150);

  return (
    <section ref={ref} className="features">
      <div className="feature-card">
        <h3>AI Analytics</h3>
        <p>Advanced insights powered by AI</p>
      </div>
      <div className="feature-card">
        <h3>Smart Automation</h3>
        <p>Automate workflows intelligently</p>
      </div>
      <div className="feature-card">
        <h3>Predictive Models</h3>
        <p>Forecast trends accurately</p>
      </div>
    </section>
  );
}
```

### Interactive Button

```tsx
import { useButtonRipple, useButtonHover } from '@/utils/hooks';

function CTAButton() {
  const hoverRef = useButtonHover();
  const rippleRef = useButtonRipple();

  // Combine multiple refs
  const setRefs = (element: HTMLButtonElement | null) => {
    hoverRef.current = element;
    rippleRef.current = element;
  };

  return (
    <button ref={setRefs} className="cta-button">
      Start Free Trial
    </button>
  );
}
```

### Statistics Counter

```tsx
import { useCounterAnimation } from '@/utils/hooks';

function Statistics() {
  const customers = useCounterAnimation(0, 10000, 2000, '+');
  const accuracy = useCounterAnimation(0, 99, 2000, '%');
  const uptime = useCounterAnimation(0, 99.9, 2000, '%');

  return (
    <div className="stats">
      <div className="stat">
        <span ref={customers} className="stat-number">0</span>
        <p>Happy Customers</p>
      </div>
      <div className="stat">
        <span ref={accuracy} className="stat-number">0</span>
        <p>Accuracy</p>
      </div>
      <div className="stat">
        <span ref={uptime} className="stat-number">0</span>
        <p>Uptime</p>
      </div>
    </div>
  );
}
```

### Animated Card Grid

```tsx
import { useCardLift } from '@/utils/hooks';

function PricingCard({ title, price, features }: PricingCardProps) {
  const ref = useCardLift();

  return (
    <div ref={ref} className="pricing-card glass">
      <h3>{title}</h3>
      <p className="price">{price}</p>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button>Choose Plan</button>
    </div>
  );
}
```

## Best Practices

1. **Performance**: Use `triggerOnce: true` for scroll animations to prevent re-triggering
2. **Accessibility**: Respect `prefers-reduced-motion` (handled by CSS)
3. **Cleanup**: React hooks automatically handle cleanup
4. **Delays**: Use delays strategically for staggered effects
5. **Easing**: Choose appropriate easing functions for natural motion
6. **Duration**: Keep animations between 200ms-800ms for micro-interactions

## Animation Timing Guidelines

- **Micro-interactions**: 150-300ms
- **Entrance animations**: 600-1000ms
- **Page transitions**: 400-600ms
- **Loading indicators**: 800-1500ms (looping)
- **Attention seekers**: 800-1200ms

## Browser Support

Animations work in all modern browsers that support:
- Intersection Observer API
- CSS transforms
- requestAnimationFrame

For older browsers, animations gracefully degrade.

## Troubleshooting

### Animations not triggering
- Ensure elements have initial opacity/transform set
- Check that Intersection Observer is supported
- Verify element is in viewport

### Performance issues
- Reduce number of simultaneous animations
- Use `will-change` CSS property
- Consider using CSS animations for simple effects

### React hooks not working
- Ensure refs are properly attached
- Check that hooks are used inside components
- Verify anime.js is installed

## Additional Resources

- [Anime.js Documentation](https://animejs.com/documentation/)
- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [Web Animations Best Practices](https://web.dev/animations/)
