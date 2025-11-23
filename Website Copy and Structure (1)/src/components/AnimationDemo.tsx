/**
 * Animation Demo Component
 * Demonstrates how to use the animation utilities
 */

import React from 'react';
import {
  useScrollAnimation,
  useStaggeredScrollAnimation,
  useButtonHover,
  useButtonRipple,
  useCardLift,
  useCounterAnimation,
  useParallax,
  useMagneticButton,
} from '../utils/hooks';

export function AnimationDemo() {
  return (
    <div className="animation-demo">
      {/* Hero Section with Scroll Animation */}
      <HeroSection />

      {/* Feature Cards with Staggered Animation */}
      <FeaturesSection />

      {/* Interactive Buttons */}
      <ButtonsSection />

      {/* Statistics Counters */}
      <StatisticsSection />

      {/* Parallax Section */}
      <ParallaxSection />
    </div>
  );
}

/**
 * Hero Section with Scroll Animations
 */
function HeroSection() {
  const titleRef = useScrollAnimation({
    animationType: 'fadeInUp',
    threshold: 0.2,
    triggerOnce: true,
  });

  const subtitleRef = useScrollAnimation({
    animationType: 'fadeInUp',
    animationDelay: 200,
    threshold: 0.2,
    triggerOnce: true,
  });

  const ctaRef = useScrollAnimation({
    animationType: 'scaleIn',
    animationDelay: 400,
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section className="hero">
      <h1 ref={titleRef} className="display-1 text-gradient-primary">
        Welcome to Cynea AI
      </h1>
      <p ref={subtitleRef} className="lead">
        Transform your business with AI-powered solutions
      </p>
      <button ref={ctaRef} className="cta-button">
        Get Started
      </button>
    </section>
  );
}

/**
 * Features Section with Staggered Scroll Animation
 */
function FeaturesSection() {
  const containerRef = useStaggeredScrollAnimation('.feature-card', 150, {
    animationType: 'fadeInUp',
  });

  return (
    <section ref={containerRef} className="features">
      <FeatureCard
        icon="🤖"
        title="AI Analytics"
        description="Advanced insights powered by artificial intelligence"
      />
      <FeatureCard
        icon="⚡"
        title="Smart Automation"
        description="Automate workflows intelligently and efficiently"
      />
      <FeatureCard
        icon="📊"
        title="Predictive Models"
        description="Forecast trends with accurate AI predictions"
      />
      <FeatureCard
        icon="🔒"
        title="Secure & Compliant"
        description="Enterprise-grade security and compliance"
      />
    </section>
  );
}

/**
 * Feature Card with Lift Effect
 */
function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  const ref = useCardLift();

  return (
    <div ref={ref} className="feature-card glass">
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

/**
 * Buttons Section with Various Interactions
 */
function ButtonsSection() {
  const hoverRef = useButtonHover();
  const rippleRef = useButtonRipple();
  const magneticRef = useMagneticButton(0.3);

  return (
    <section className="buttons-demo">
      <h2>Interactive Buttons</h2>
      <div className="button-group">
        <button ref={hoverRef} className="btn-primary">
          Hover Effect
        </button>
        <button ref={rippleRef} className="btn-secondary">
          Ripple Effect
        </button>
        <button ref={magneticRef} className="btn-accent">
          Magnetic Effect
        </button>
      </div>
    </section>
  );
}

/**
 * Statistics Section with Counter Animations
 */
function StatisticsSection() {
  const customersRef = useCounterAnimation(0, 10000, 2000, '+');
  const accuracyRef = useCounterAnimation(0, 99, 2000, '%');
  const uptimeRef = useCounterAnimation(0, 99.9, 2000, '%');
  const projectsRef = useCounterAnimation(0, 500, 2000, '+');

  return (
    <section className="statistics">
      <h2>Our Impact</h2>
      <div className="stats-grid">
        <div className="stat-card">
          <span ref={customersRef} className="stat-number">
            0
          </span>
          <p className="stat-label">Happy Customers</p>
        </div>
        <div className="stat-card">
          <span ref={accuracyRef} className="stat-number">
            0
          </span>
          <p className="stat-label">AI Accuracy</p>
        </div>
        <div className="stat-card">
          <span ref={uptimeRef} className="stat-number">
            0
          </span>
          <p className="stat-label">System Uptime</p>
        </div>
        <div className="stat-card">
          <span ref={projectsRef} className="stat-number">
            0
          </span>
          <p className="stat-label">Projects Completed</p>
        </div>
      </div>
    </section>
  );
}

/**
 * Parallax Section
 */
function ParallaxSection() {
  const parallaxRef = useParallax(0.5);

  return (
    <section className="parallax-container">
      <div ref={parallaxRef} className="parallax-bg bg-gradient-primary"></div>
      <div className="parallax-content">
        <h2 className="display-3">Experience the Future</h2>
        <p>Scroll to see the parallax effect</p>
      </div>
    </section>
  );
}

export default AnimationDemo;
