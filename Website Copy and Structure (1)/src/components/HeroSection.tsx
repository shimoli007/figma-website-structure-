/**
 * HeroSection Component
 * Modern, visually stunning hero section with animations
 */

import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import anime from 'animejs';
import { ParticleBackgroundGradient } from './ParticleBackground';
import { FloatingShapes } from './FloatingShapes';
import { AnimatedTextGradient, AnimatedText } from './AnimatedText';
import { ScrollIndicator } from './ScrollIndicator';
import { AnimatedSection } from './AnimatedSection';

export interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  primaryCTA?: {
    text: string;
    to: string;
  };
  secondaryCTA?: {
    text: string;
    to: string;
  };
  stats?: Array<{
    label: string;
    value: string;
  }>;
}

/**
 * HeroSection - Modern hero section with all effects
 *
 * @example
 * ```tsx
 * <HeroSection
 *   title="Welcome to Cynea AI"
 *   subtitle="Transform your business with AI-powered solutions"
 *   primaryCTA={{ text: "Get Started", to: "/contact" }}
 *   secondaryCTA={{ text: "View Use Cases", to: "/use-cases" }}
 * />
 * ```
 */
export function HeroSection({
  title = 'Empowering SMEs with AI & Blockchain',
  subtitle = 'Complete infrastructure stack for emerging market SMEs to compete globally. Train your team, digitize operations, automate workflows, and access digital finance.',
  primaryCTA = { text: 'Get Started', to: '/contact' },
  secondaryCTA = { text: 'View Use Cases', to: '/use-cases' },
  stats = [
    { label: 'Trusted by', value: 'Government Partners' },
    { label: 'Supporting', value: '100+ SMEs' },
  ],
}: HeroSectionProps) {
  const gradientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gradientRef.current) return;

    // Animate the gradient background
    anime({
      targets: gradientRef.current,
      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      duration: 20000,
      easing: 'linear',
      loop: true,
    });
  }, []);

  return (
    <section
      className="hero-section"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'var(--background)',
      }}
    >
      {/* Animated Gradient Background */}
      <div
        ref={gradientRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, #0a0e1a 0%, #1e1b4b 25%, #312e81 50%, #1e1b4b 75%, #0a0e1a 100%)',
          backgroundSize: '400% 400%',
          zIndex: 0,
        }}
      />

      {/* Overlay Gradient for depth */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 30% 50%, rgba(124, 58, 237, 0.15), transparent 50%), radial-gradient(circle at 70% 50%, rgba(59, 130, 246, 0.15), transparent 50%)',
          zIndex: 0,
        }}
      />

      {/* Particle Effects */}
      <ParticleBackgroundGradient
        particleCount={60}
        colors={['#7c3aed', '#3b82f6', '#06b6d4', '#14b8a6', '#a855f7']}
        speed="slow"
        particleSize={3}
      />

      {/* Floating Geometric Shapes */}
      <FloatingShapes
        shapeCount={12}
        colors={['#7c3aed', '#3b82f6', '#06b6d4', '#14b8a6', '#a855f7']}
        speed="slow"
        opacity={0.12}
      />

      {/* Content Container */}
      <div
        className="hero-content"
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '2rem',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            alignItems: 'center',
          }}
        >
          {/* Text Content */}
          <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
            {/* Badge */}
            <AnimatedSection animationType="fadeInDown" delay={0}>
              <div
                style={{
                  display: 'inline-block',
                  background: 'rgba(124, 58, 237, 0.2)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(124, 58, 237, 0.3)',
                  padding: '0.5rem 1.5rem',
                  borderRadius: '9999px',
                  marginBottom: '2rem',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: 'var(--foreground)',
                }}
              >
                AI + Blockchain Infrastructure for Emerging Markets
              </div>
            </AnimatedSection>

            {/* Main Headline - Character by Character Animation */}
            <AnimatedTextGradient
              text={title}
              as="h1"
              className="display-1"
              animationType="characters"
              staggerDelay={30}
              triggerOnScroll={false}
              gradient="linear-gradient(135deg, #ffffff 0%, #e2e8f5 50%, #cbd5e1 100%)"
              style={{
                fontSize: 'clamp(2.5rem, 8vw, 6rem)',
                fontWeight: 900,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                marginBottom: '2rem',
                textShadow: '0 0 40px rgba(124, 58, 237, 0.3)',
              }}
            />

            {/* Subtitle - Word by Word Animation */}
            <AnimatedText
              text={subtitle}
              as="p"
              animationType="words"
              staggerDelay={50}
              delay={1000}
              triggerOnScroll={false}
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                color: 'var(--muted-foreground)',
                lineHeight: 1.6,
                maxWidth: '700px',
                margin: '0 auto 3rem',
              }}
            />

            {/* CTA Buttons */}
            <AnimatedSection animationType="scaleIn" delay={1800}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '1rem',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                  marginBottom: '3rem',
                }}
              >
                <Link
                  to={primaryCTA.to}
                  className="hero-cta-primary"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '1rem 2rem',
                    background: 'var(--gradient-primary)',
                    color: 'white',
                    borderRadius: 'var(--radius-lg)',
                    fontSize: 'var(--font-size-lg)',
                    fontWeight: 'var(--font-weight-bold)',
                    textDecoration: 'none',
                    boxShadow: 'var(--shadow-purple)',
                    transition: 'all 0.3s ease',
                    border: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px -5px rgba(124, 58, 237, 0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-purple)';
                  }}
                >
                  {primaryCTA.text}
                  <ArrowRight size={20} />
                </Link>

                <Link
                  to={secondaryCTA.to}
                  className="hero-cta-secondary"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '1rem 2rem',
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    color: 'white',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: 'var(--radius-lg)',
                    fontSize: 'var(--font-size-lg)',
                    fontWeight: 'var(--font-weight-bold)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {secondaryCTA.text}
                </Link>
              </div>
            </AnimatedSection>

            {/* Stats */}
            {stats && stats.length > 0 && (
              <AnimatedSection animationType="fadeInUp" delay={2000}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '2rem',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                  }}
                >
                  {stats.map((stat, index) => (
                    <React.Fragment key={index}>
                      {index > 0 && (
                        <div
                          style={{
                            width: '1px',
                            height: '3rem',
                            background: 'rgba(255, 255, 255, 0.2)',
                          }}
                        />
                      )}
                      <div style={{ textAlign: 'center' }}>
                        <div
                          style={{
                            fontSize: '0.875rem',
                            color: 'var(--muted-foreground)',
                            marginBottom: '0.25rem',
                          }}
                        >
                          {stat.label}
                        </div>
                        <div
                          style={{
                            fontSize: '1.125rem',
                            fontWeight: 'var(--font-weight-bold)',
                            color: 'var(--foreground)',
                          }}
                        >
                          {stat.value}
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </AnimatedSection>
            )}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '3rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 20,
        }}
      >
        <AnimatedSection animationType="fadeInUp" delay={2500}>
          <ScrollIndicator
            text="Scroll to explore"
            color="var(--foreground)"
            size="medium"
          />
        </AnimatedSection>
      </div>

      {/* Bottom Gradient Fade */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '200px',
          background: 'linear-gradient(to bottom, transparent, var(--background))',
          pointerEvents: 'none',
          zIndex: 5,
        }}
      />
    </section>
  );
}

export default HeroSection;
