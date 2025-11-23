/**
 * Animation Components Showcase
 * Demonstrates all reusable animation components
 */

import React from 'react';
import {
  AnimatedSection,
  AnimatedSectionStaggered,
  ParticleBackground,
  ParticleBackgroundGradient,
  GlowingCard,
  GlowingCardGradient,
  GlowingCardInteractive,
  AnimatedText,
  AnimatedTextGradient,
  AnimatedTextSplit,
  AnimatedCounter,
} from './animations';

export function AnimationShowcase() {
  return (
    <div className="animation-showcase" style={{ position: 'relative' }}>
      {/* Hero Section with Particles and Animated Text */}
      <HeroSection />

      {/* AnimatedSection Demo */}
      <AnimatedSectionDemo />

      {/* GlowingCard Demo */}
      <GlowingCardDemo />

      {/* AnimatedText Demo */}
      <AnimatedTextDemo />

      {/* Counter Demo */}
      <CounterDemo />

      {/* Staggered Section Demo */}
      <StaggeredDemo />
    </div>
  );
}

/**
 * Hero Section with Particle Background
 */
function HeroSection() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'var(--gradient-dark)',
      }}
    >
      {/* Particle Background */}
      <ParticleBackgroundGradient
        particleCount={80}
        colors={['#7c3aed', '#3b82f6', '#06b6d4', '#14b8a6']}
        speed="slow"
      />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '2rem' }}>
        <AnimatedTextGradient
          text="Welcome to Cynea AI"
          as="h1"
          className="display-1"
          animationType="characters"
          staggerDelay={30}
          triggerOnScroll={false}
        />

        <AnimatedText
          text="Transform your business with next-generation AI solutions"
          as="p"
          className="lead"
          animationType="words"
          delay={800}
          triggerOnScroll={false}
        />

        <AnimatedSection animationType="scaleIn" delay={1500}>
          <button
            className="cta-button"
            style={{
              marginTop: '2rem',
              padding: '1rem 2rem',
              background: 'var(--gradient-primary)',
              color: 'white',
              border: 'none',
              borderRadius: 'var(--radius-lg)',
              fontSize: 'var(--font-size-lg)',
              fontWeight: 'var(--font-weight-bold)',
              cursor: 'pointer',
            }}
          >
            Get Started
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
}

/**
 * AnimatedSection Demo
 */
function AnimatedSectionDemo() {
  return (
    <section style={{ padding: '4rem 2rem', background: 'var(--background)' }}>
      <AnimatedSection animationType="fadeInUp">
        <h2 className="display-3" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          Scroll-Triggered Animations
        </h2>
      </AnimatedSection>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <AnimatedSection animationType="fadeInLeft" delay={100}>
          <div style={{ padding: '2rem', background: 'var(--card)', borderRadius: 'var(--radius-lg)' }}>
            <h3>Fade In Left</h3>
            <p>This section animates from the left</p>
          </div>
        </AnimatedSection>

        <AnimatedSection animationType="fadeInUp" delay={200}>
          <div style={{ padding: '2rem', background: 'var(--card)', borderRadius: 'var(--radius-lg)' }}>
            <h3>Fade In Up</h3>
            <p>This section animates from below</p>
          </div>
        </AnimatedSection>

        <AnimatedSection animationType="fadeInRight" delay={300}>
          <div style={{ padding: '2rem', background: 'var(--card)', borderRadius: 'var(--radius-lg)' }}>
            <h3>Fade In Right</h3>
            <p>This section animates from the right</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/**
 * GlowingCard Demo
 */
function GlowingCardDemo() {
  return (
    <section style={{ padding: '4rem 2rem', background: 'var(--card)' }}>
      <AnimatedSection animationType="fadeInUp">
        <h2 className="display-3" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          Glowing Card Effects
        </h2>
      </AnimatedSection>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          maxWidth: '1400px',
          margin: '0 auto',
        }}
      >
        <AnimatedSection animationType="scaleIn" delay={100}>
          <GlowingCard hoverEffect="lift" glowColor="124, 58, 237">
            <h3>Lift Effect</h3>
            <p>Hover to see the card lift up</p>
          </GlowingCard>
        </AnimatedSection>

        <AnimatedSection animationType="scaleIn" delay={200}>
          <GlowingCard hoverEffect="tilt" glowColor="6, 182, 212">
            <h3>Tilt Effect</h3>
            <p>Move your mouse to see 3D tilt</p>
          </GlowingCard>
        </AnimatedSection>

        <AnimatedSection animationType="scaleIn" delay={300}>
          <GlowingCard hoverEffect="glow" glowColor="168, 85, 247" intensity="strong">
            <h3>Glow Effect</h3>
            <p>Hover to see the glow</p>
          </GlowingCard>
        </AnimatedSection>

        <AnimatedSection animationType="scaleIn" delay={400}>
          <GlowingCardGradient
            borderGradient="linear-gradient(135deg, #7c3aed, #3b82f6, #06b6d4)"
            glowIntensity="high"
          >
            <h3>Gradient Border</h3>
            <p>Animated gradient border with glow</p>
          </GlowingCardGradient>
        </AnimatedSection>

        <AnimatedSection animationType="scaleIn" delay={500}>
          <GlowingCardInteractive spotlightColor="rgba(124, 58, 237, 0.4)" spotlightSize={350}>
            <h3>Interactive Spotlight</h3>
            <p>Move your mouse over this card</p>
          </GlowingCardInteractive>
        </AnimatedSection>

        <AnimatedSection animationType="scaleIn" delay={600}>
          <GlowingCard hoverEffect="all" intensity="strong" glassEffect gradient>
            <h3>All Effects</h3>
            <p>Combines multiple effects together</p>
          </GlowingCard>
        </AnimatedSection>
      </div>
    </section>
  );
}

/**
 * AnimatedText Demo
 */
function AnimatedTextDemo() {
  return (
    <section style={{ padding: '4rem 2rem', background: 'var(--background)' }}>
      <AnimatedSection animationType="fadeInUp">
        <h2 className="display-3" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          Animated Text Effects
        </h2>
      </AnimatedSection>

      <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center', space: '3rem' }}>
        <AnimatedText
          text="Character by Character Animation"
          as="h3"
          className="display-4"
          animationType="characters"
          staggerDelay={40}
          triggerOnScroll
        />

        <div style={{ marginTop: '3rem' }}>
          <AnimatedText
            text="Word by Word Reveal Animation"
            as="h3"
            className="display-4"
            animationType="words"
            staggerDelay={100}
            triggerOnScroll
          />
        </div>

        <div style={{ marginTop: '3rem' }}>
          <AnimatedTextGradient
            text="Gradient Text with Animation"
            as="h3"
            className="display-4"
            animationType="characters"
            staggerDelay={30}
          />
        </div>

        <div style={{ marginTop: '3rem' }}>
          <AnimatedTextSplit
            text="Split Text Reveal"
            as="h3"
            className="display-4"
            triggerOnScroll
          />
        </div>
      </div>
    </section>
  );
}

/**
 * Counter Demo
 */
function CounterDemo() {
  return (
    <section style={{ padding: '4rem 2rem', background: 'var(--card)' }}>
      <AnimatedSection animationType="fadeInUp">
        <h2 className="display-3" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          Animated Statistics
        </h2>
      </AnimatedSection>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '3rem',
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <AnimatedSection animationType="scaleIn" delay={100}>
          <div>
            <AnimatedCounter
              end={10000}
              suffix="+"
              className="display-2"
              duration={2500}
            />
            <p style={{ marginTop: '1rem', fontSize: 'var(--font-size-lg)' }}>Happy Customers</p>
          </div>
        </AnimatedSection>

        <AnimatedSection animationType="scaleIn" delay={200}>
          <div>
            <AnimatedCounter
              end={99.9}
              suffix="%"
              decimals={1}
              className="display-2"
              duration={2500}
            />
            <p style={{ marginTop: '1rem', fontSize: 'var(--font-size-lg)' }}>Accuracy</p>
          </div>
        </AnimatedSection>

        <AnimatedSection animationType="scaleIn" delay={300}>
          <div>
            <AnimatedCounter
              end={500}
              suffix="+"
              className="display-2"
              duration={2500}
            />
            <p style={{ marginTop: '1rem', fontSize: 'var(--font-size-lg)' }}>Projects</p>
          </div>
        </AnimatedSection>

        <AnimatedSection animationType="scaleIn" delay={400}>
          <div>
            <AnimatedCounter
              end={24}
              suffix="/7"
              className="display-2"
              duration={2000}
            />
            <p style={{ marginTop: '1rem', fontSize: 'var(--font-size-lg)' }}>Support</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/**
 * Staggered Demo
 */
function StaggeredDemo() {
  return (
    <section
      style={{
        padding: '4rem 2rem',
        background: 'var(--background)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background particles */}
      <ParticleBackground
        particleCount={40}
        particleColor="rgba(124, 58, 237, 0.4)"
        speed="slow"
        blur
      />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <AnimatedSection animationType="fadeInUp">
          <h2 className="display-3" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            Staggered Animations
          </h2>
        </AnimatedSection>

        <AnimatedSectionStaggered
          childSelector=".stagger-item"
          staggerDelay={150}
          animationType="fadeInUp"
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem',
              maxWidth: '1200px',
              margin: '0 auto',
            }}
          >
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="stagger-item"
                style={{
                  padding: '2rem',
                  background: 'var(--card)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border)',
                }}
              >
                <h4>Feature {item}</h4>
                <p>This card animates with a stagger delay</p>
              </div>
            ))}
          </div>
        </AnimatedSectionStaggered>
      </div>
    </section>
  );
}

export default AnimationShowcase;
