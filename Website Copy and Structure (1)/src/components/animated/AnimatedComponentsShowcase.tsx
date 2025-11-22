/**
 * Animated Components Showcase
 * Demonstrates all animated components with live examples
 */

import React from 'react';
import {
  AnimatedSection,
  AnimatedSectionGroup,
  AnimatedSectionPresets,
  ParticleBackground,
  GradientParticleBackground,
  InteractiveParticleBackground,
  GlowingCard,
  GlowingCardGrid,
  HoverRevealCard,
  AnimatedText,
  GradientText,
  CountUpText,
  TextScramble,
} from './index';

/**
 * AnimatedSection Examples
 */
export function AnimatedSectionExamples() {
  return (
    <div className="space-y-16 py-16">
      <h2 className="text-4xl font-bold mb-8">AnimatedSection Examples</h2>

      <AnimatedSection animation="fadeInUp">
        <div className="p-8 bg-card rounded-lg border border-border">
          <h3 className="text-2xl font-semibold mb-4">Fade In Up</h3>
          <p>This section fades in from the bottom when scrolled into view.</p>
        </div>
      </AnimatedSection>

      <AnimatedSection animation="fadeInLeft">
        <div className="p-8 bg-card rounded-lg border border-border">
          <h3 className="text-2xl font-semibold mb-4">Fade In Left</h3>
          <p>This section slides in from the left.</p>
        </div>
      </AnimatedSection>

      <AnimatedSection animation="scaleIn">
        <div className="p-8 bg-card rounded-lg border border-border">
          <h3 className="text-2xl font-semibold mb-4">Scale In</h3>
          <p>This section scales up and fades in.</p>
        </div>
      </AnimatedSection>

      <AnimatedSection {...AnimatedSectionPresets.feature}>
        <div className="p-8 bg-card rounded-lg border border-border">
          <h3 className="text-2xl font-semibold mb-4">Using Preset</h3>
          <p>This uses the 'feature' preset configuration.</p>
        </div>
      </AnimatedSection>

      <h3 className="text-3xl font-bold mt-16 mb-8">Stagger Animation</h3>
      <AnimatedSectionGroup staggerDelay={100}>
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="p-6 bg-card rounded-lg border border-border mb-4">
            <h4 className="text-xl font-semibold">Item {i}</h4>
            <p>Items animate one after another</p>
          </div>
        ))}
      </AnimatedSectionGroup>
    </div>
  );
}

/**
 * ParticleBackground Examples
 */
export function ParticleBackgroundExamples() {
  return (
    <div className="space-y-16 py-16">
      <h2 className="text-4xl font-bold mb-8">ParticleBackground Examples</h2>

      <div className="relative h-96 rounded-lg overflow-hidden bg-gradient-to-br from-background to-muted">
        <ParticleBackground
          particleCount={50}
          colors={['#6366f1', '#06b6d4', '#a855f7']}
          speed="medium"
        />
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">Basic Particles</h3>
            <p className="text-muted-foreground">50 floating particles</p>
          </div>
        </div>
      </div>

      <div className="relative h-96 rounded-lg overflow-hidden bg-gradient-to-br from-background to-muted">
        <ParticleBackground
          particleCount={30}
          colors="#06b6d4"
          shape="square"
          speed="fast"
          blur
        />
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">Square Particles</h3>
            <p className="text-muted-foreground">With blur effect</p>
          </div>
        </div>
      </div>

      <div className="relative h-96 rounded-lg overflow-hidden bg-gradient-to-br from-background to-muted">
        <GradientParticleBackground
          gradientStart="#6366f1"
          gradientEnd="#a855f7"
          particleCount={40}
          speed="slow"
        />
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">Gradient Particles</h3>
            <p className="text-muted-foreground">Purple to violet gradient</p>
          </div>
        </div>
      </div>

      <div className="relative h-96 rounded-lg overflow-hidden bg-gradient-to-br from-background to-muted">
        <InteractiveParticleBackground
          particleCount={35}
          colors={['#6366f1', '#06b6d4']}
          speed="medium"
        />
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">Interactive Particles</h3>
            <p className="text-muted-foreground">Move your mouse to interact!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * GlowingCard Examples
 */
export function GlowingCardExamples() {
  const features = [
    {
      id: 1,
      title: 'AI-Powered Analytics',
      description: 'Transform your data into actionable insights',
    },
    {
      id: 2,
      title: 'Real-Time Processing',
      description: 'Process data at lightning speed',
    },
    {
      id: 3,
      title: 'Scalable Infrastructure',
      description: 'Grow without limitations',
    },
  ];

  return (
    <div className="space-y-16 py-16">
      <h2 className="text-4xl font-bold mb-8">GlowingCard Examples</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <GlowingCard glowColor="#6366f1">
          <h3 className="text-2xl font-semibold mb-4">Default Card</h3>
          <p className="text-muted-foreground">
            Hover to see the glow effect and tilt animation.
          </p>
        </GlowingCard>

        <GlowingCard variant="gradient" glowColor="#06b6d4">
          <h3 className="text-2xl font-semibold mb-4">Gradient Card</h3>
          <p className="text-muted-foreground">With gradient background.</p>
        </GlowingCard>

        <GlowingCard variant="glass" glowColor="#a855f7">
          <h3 className="text-2xl font-semibold mb-4">Glass Card</h3>
          <p className="text-muted-foreground">Glass morphism effect.</p>
        </GlowingCard>
      </div>

      <h3 className="text-3xl font-bold mt-16 mb-8">Card Grid with Stagger</h3>
      <GlowingCardGrid
        items={features.map((feature) => ({
          id: feature.id,
          content: (
            <>
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </>
          ),
        }))}
        columns={{ mobile: 1, tablet: 2, desktop: 3 }}
        gap={6}
        cardProps={{
          glowColor: '#6366f1',
          variant: 'default',
        }}
      />

      <h3 className="text-3xl font-bold mt-16 mb-8">Hover Reveal Card</h3>
      <div className="max-w-md">
        <HoverRevealCard
          frontContent={
            <div className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Hover to Reveal</h3>
              <p className="text-muted-foreground">Front content</p>
            </div>
          }
          backContent={
            <div className="p-8 text-center bg-primary/10">
              <h3 className="text-2xl font-bold mb-4">Revealed!</h3>
              <p className="text-muted-foreground">Hidden content shown on hover</p>
            </div>
          }
          flipDirection="horizontal"
          glowColor="#6366f1"
        />
      </div>
    </div>
  );
}

/**
 * AnimatedText Examples
 */
export function AnimatedTextExamples() {
  return (
    <div className="space-y-16 py-16">
      <h2 className="text-4xl font-bold mb-8">AnimatedText Examples</h2>

      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Reveal Animation</h3>
          <AnimatedText
            text="Character by character reveal"
            variant="reveal"
            className="text-3xl font-bold"
          />
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Wave Animation</h3>
          <AnimatedText
            text="Wave effect animation"
            variant="wave"
            className="text-3xl font-bold"
            characterDelay={30}
          />
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Typewriter Effect</h3>
          <AnimatedText
            text="Classic typewriter effect..."
            variant="typewriter"
            className="text-3xl font-bold"
            characterDelay={80}
          />
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Scale Animation</h3>
          <AnimatedText
            text="Scale in effect"
            variant="scale"
            className="text-3xl font-bold"
          />
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Gradient Text</h3>
          <GradientText
            text="Animated gradient text"
            colors={['#6366f1', '#8b5cf6', '#06b6d4', '#14b8a6']}
            speed="medium"
            className="text-4xl font-bold"
          />
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Text Scramble (Hover)</h3>
          <TextScramble
            text="Hover to scramble"
            trigger="hover"
            className="text-3xl font-bold cursor-pointer"
          />
        </div>
      </div>

      <h3 className="text-3xl font-bold mt-16 mb-8">Counter Animations</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center p-8 bg-card rounded-lg border border-border">
          <CountUpText
            value={10000}
            from={0}
            duration={2000}
            format={(val) => Math.round(val).toLocaleString()}
            className="text-5xl font-black text-primary block mb-2"
          />
          <p className="text-muted-foreground">Active Users</p>
        </div>

        <div className="text-center p-8 bg-card rounded-lg border border-border">
          <CountUpText
            value={5000000}
            from={0}
            duration={2000}
            format={(val) => `$${(val / 1000000).toFixed(1)}M`}
            className="text-5xl font-black text-secondary block mb-2"
          />
          <p className="text-muted-foreground">Revenue</p>
        </div>

        <div className="text-center p-8 bg-card rounded-lg border border-border">
          <CountUpText
            value={98.5}
            from={0}
            duration={2000}
            decimals={1}
            format={(val) => `${val.toFixed(1)}%`}
            className="text-5xl font-black text-accent block mb-2"
          />
          <p className="text-muted-foreground">Satisfaction</p>
        </div>
      </div>
    </div>
  );
}

/**
 * Complete Showcase Page
 */
export function AnimatedComponentsShowcase() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-16 text-center">
        <h1 className="text-6xl font-black mb-6">
          <GradientText
            text="Animated Components"
            colors={['#6366f1', '#8b5cf6', '#06b6d4']}
          />
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          A comprehensive collection of reusable animation components built with anime.js.
          Scroll down to see them in action!
        </p>
      </div>

      <AnimatedSectionExamples />
      <ParticleBackgroundExamples />
      <GlowingCardExamples />
      <AnimatedTextExamples />

      <div className="mt-24 text-center">
        <AnimatedSection animation="fadeInUp">
          <h2 className="text-4xl font-bold mb-4">Ready to use them?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Check out the documentation for detailed usage examples
          </p>
          <GlowingCard
            glowColor="#6366f1"
            className="max-w-md mx-auto cursor-pointer"
          >
            <h3 className="text-2xl font-bold mb-2">View Documentation</h3>
            <p className="text-muted-foreground">
              Learn how to use these components in your project
            </p>
          </GlowingCard>
        </AnimatedSection>
      </div>
    </div>
  );
}

export default AnimatedComponentsShowcase;
