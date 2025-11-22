/**
 * Animation Examples Component
 * Demonstrates various animation utilities and hooks
 * This file serves as a reference implementation
 */

import React from 'react';
import {
  useScrollAnimation,
  useStaggerOnScroll,
  useEntranceAnimation,
  useHoverAnimation,
  usePulse,
  useCounter,
  useParallax,
  usePrefersReducedMotion,
} from '../../hooks/useAnimations';
import { ripple, shake } from '../../utils/animations';
import anime from 'animejs';

/**
 * Example 1: Basic scroll animations
 */
export function ScrollAnimationExample() {
  const titleRef = useScrollAnimation('fadeInUp');
  const subtitleRef = useScrollAnimation('fadeInDown', {
    animationOptions: { delay: 200 },
  });
  const imageRef = useScrollAnimation('scaleIn', {
    animationOptions: { delay: 400 },
  });

  return (
    <section className="py-16">
      <h2 ref={titleRef} className="text-4xl font-bold mb-4">
        Scroll Animation Example
      </h2>
      <p ref={subtitleRef} className="text-xl mb-8">
        These elements animate as you scroll
      </p>
      <div ref={imageRef} className="w-64 h-64 bg-primary rounded-lg" />
    </section>
  );
}

/**
 * Example 2: Stagger animations for lists
 */
export function StaggerAnimationExample() {
  const gridRef = useStaggerOnScroll('.stagger-item', {
    animationOptions: { duration: 600 },
  });

  const features = [
    { title: 'Feature 1', description: 'Description 1' },
    { title: 'Feature 2', description: 'Description 2' },
    { title: 'Feature 3', description: 'Description 3' },
    { title: 'Feature 4', description: 'Description 4' },
  ];

  return (
    <section className="py-16">
      <h2 className="text-4xl font-bold mb-8">Stagger Animation Example</h2>
      <div ref={gridRef} className="grid grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="stagger-item p-6 bg-card rounded-lg border border-border"
          >
            <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/**
 * Example 3: Entrance animation on mount
 */
export function EntranceAnimationExample() {
  const ref = useEntranceAnimation('zoomIn', {
    duration: 1000,
    easing: 'easeOutExpo',
  });

  return (
    <div ref={ref} className="p-8 bg-gradient-primary text-white rounded-lg">
      <h3 className="text-2xl font-bold">
        This component animates on mount!
      </h3>
    </div>
  );
}

/**
 * Example 4: Interactive hover animations
 */
export function HoverAnimationExample() {
  const buttonRef = useHoverAnimation(
    (el) =>
      anime({
        targets: el,
        scale: 1.05,
        translateY: -4,
        duration: 300,
        easing: 'easeOutCubic',
      }),
    (el) =>
      anime({
        targets: el,
        scale: 1,
        translateY: 0,
        duration: 300,
        easing: 'easeOutCubic',
      })
  );

  return (
    <button
      ref={buttonRef}
      className="px-6 py-3 bg-primary text-white rounded-lg font-semibold"
    >
      Hover Me!
    </button>
  );
}

/**
 * Example 5: Ripple effect button
 */
export function RippleButtonExample() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    ripple(e.nativeEvent, e.currentTarget, {
      color: 'rgba(255, 255, 255, 0.5)',
      duration: 600,
    });
  };

  return (
    <button
      onClick={handleClick}
      className="relative overflow-hidden px-6 py-3 bg-secondary text-white rounded-lg font-semibold"
    >
      Click for Ripple Effect
    </button>
  );
}

/**
 * Example 6: Pulse animation
 */
export function PulseAnimationExample() {
  const badgeRef = usePulse({
    duration: 1000,
    loop: true,
  });

  return (
    <div className="relative inline-block">
      <button className="px-6 py-3 bg-accent text-white rounded-lg font-semibold">
        Notifications
      </button>
      <span
        ref={badgeRef}
        className="absolute -top-2 -right-2 w-6 h-6 bg-error rounded-full flex items-center justify-center text-xs text-white"
      >
        3
      </span>
    </div>
  );
}

/**
 * Example 7: Counter animation
 */
export function CounterAnimationExample() {
  const usersRef = useCounter(10000, {
    from: 0,
    duration: 2000,
    format: (val) => Math.round(val).toLocaleString(),
    trigger: 'scroll',
  });

  const revenueRef = useCounter(5000000, {
    from: 0,
    duration: 2000,
    format: (val) => `$${(Math.round(val) / 1000000).toFixed(1)}M`,
    trigger: 'scroll',
  });

  const satisfactionRef = useCounter(98, {
    from: 0,
    duration: 2000,
    format: (val) => `${Math.round(val)}%`,
    trigger: 'scroll',
  });

  return (
    <section className="py-16">
      <h2 className="text-4xl font-bold mb-8 text-center">Our Impact</h2>
      <div className="grid grid-cols-3 gap-8">
        <div className="text-center">
          <div
            ref={usersRef}
            className="text-5xl font-black text-primary mb-2"
          >
            0
          </div>
          <p className="text-muted-foreground">Active Users</p>
        </div>
        <div className="text-center">
          <div
            ref={revenueRef}
            className="text-5xl font-black text-secondary mb-2"
          >
            $0
          </div>
          <p className="text-muted-foreground">Revenue Generated</p>
        </div>
        <div className="text-center">
          <div
            ref={satisfactionRef}
            className="text-5xl font-black text-accent mb-2"
          >
            0%
          </div>
          <p className="text-muted-foreground">Customer Satisfaction</p>
        </div>
      </div>
    </section>
  );
}

/**
 * Example 8: Parallax scroll effect
 */
export function ParallaxExample() {
  const parallaxRef = useParallax({
    speed: 0.3,
    direction: 'up',
  });

  return (
    <div className="relative h-96 overflow-hidden bg-gradient-to-b from-background to-muted">
      <div
        ref={parallaxRef}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="text-center">
          <h2 className="text-6xl font-black text-foreground mb-4">
            Parallax Effect
          </h2>
          <p className="text-xl text-muted-foreground">
            Scroll to see the magic
          </p>
        </div>
      </div>
    </div>
  );
}

/**
 * Example 9: Error shake animation
 */
export function ShakeAnimationExample() {
  const [error, setError] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputRef.current?.value) {
      setError(true);
      if (inputRef.current) {
        shake(inputRef.current);
      }
      setTimeout(() => setError(false), 500);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md">
      <div className="mb-4">
        <label className="block mb-2 font-semibold">Email</label>
        <input
          ref={inputRef}
          type="email"
          className={`w-full px-4 py-2 border rounded-lg ${
            error ? 'border-error' : 'border-border'
          }`}
          placeholder="Enter your email"
        />
        {error && (
          <p className="text-error text-sm mt-1">Email is required</p>
        )}
      </div>
      <button
        type="submit"
        className="px-6 py-2 bg-primary text-white rounded-lg font-semibold"
      >
        Submit
      </button>
    </form>
  );
}

/**
 * Example 10: Respect reduced motion preference
 */
export function ReducedMotionExample() {
  const prefersReducedMotion = usePrefersReducedMotion();

  const ref = useScrollAnimation('fadeInUp', {
    animationOptions: {
      duration: prefersReducedMotion ? 0 : 800,
    },
  });

  return (
    <div ref={ref} className="p-8 bg-card rounded-lg border border-border">
      <h3 className="text-2xl font-bold mb-4">Accessibility First</h3>
      <p className="text-muted-foreground mb-2">
        {prefersReducedMotion
          ? 'Animations are disabled based on your system preferences.'
          : 'Animations are enabled. Change your system settings to see reduced motion.'}
      </p>
      <p className="text-sm text-muted-foreground">
        We respect your accessibility preferences!
      </p>
    </div>
  );
}

/**
 * Complete demo page with all examples
 */
export function AnimationExamplesPage() {
  return (
    <div className="container mx-auto px-4 py-16 space-y-24">
      <div>
        <h1 className="text-6xl font-black mb-4 bg-gradient-hero bg-clip-text text-transparent">
          Animation Examples
        </h1>
        <p className="text-xl text-muted-foreground">
          Demonstrating all animation utilities and hooks
        </p>
      </div>

      <ScrollAnimationExample />
      <StaggerAnimationExample />

      <section className="py-16">
        <h2 className="text-4xl font-bold mb-8">Micro-Interactions</h2>
        <div className="flex flex-wrap gap-6">
          <HoverAnimationExample />
          <RippleButtonExample />
          <PulseAnimationExample />
        </div>
      </section>

      <CounterAnimationExample />
      <ParallaxExample />

      <section className="py-16">
        <h2 className="text-4xl font-bold mb-8">Form Interactions</h2>
        <ShakeAnimationExample />
      </section>

      <ReducedMotionExample />

      <section className="py-16">
        <h2 className="text-4xl font-bold mb-8">Entrance Animation</h2>
        <EntranceAnimationExample />
      </section>
    </div>
  );
}

export default AnimationExamplesPage;
