# Animated Components

Reusable, flexible animation components built with anime.js for the Cynea AI website.

## Table of Contents

- [AnimatedSection](#animatedsection)
- [ParticleBackground](#particlebackground)
- [GlowingCard](#glowingcard)
- [AnimatedText](#animatedtext)
- [Installation](#installation)
- [Best Practices](#best-practices)

---

## AnimatedSection

Wrapper component that animates children when scrolled into view.

### Basic Usage

```tsx
import { AnimatedSection } from '@/components/animated';

function MyComponent() {
  return (
    <AnimatedSection animation="fadeInUp">
      <h2>This content animates on scroll</h2>
      <p>Beautiful and smooth</p>
    </AnimatedSection>
  );
}
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `animation` | `'fadeInUp' \| 'fadeInDown' \| 'fadeInLeft' \| 'fadeInRight' \| 'scaleIn' \| 'zoomIn'` | `'fadeInUp'` | Animation type |
| `delay` | `number` | `0` | Delay in milliseconds |
| `duration` | `number` | `800` | Duration in milliseconds |
| `threshold` | `number` | `0.1` | Intersection observer threshold (0-1) |
| `rootMargin` | `string` | `'0px 0px -100px 0px'` | Intersection observer margin |
| `as` | `keyof JSX.IntrinsicElements` | `'div'` | HTML element to render as |
| `className` | `string` | `''` | Additional CSS classes |

### Examples

**Different Animations**
```tsx
<AnimatedSection animation="scaleIn">
  <FeatureCard />
</AnimatedSection>

<AnimatedSection animation="fadeInLeft">
  <SidebarContent />
</AnimatedSection>

<AnimatedSection animation="zoomIn" duration={1000}>
  <HeroImage />
</AnimatedSection>
```

**Custom Timing**
```tsx
<AnimatedSection
  animation="fadeInUp"
  delay={200}
  duration={600}
  threshold={0.3}
>
  <Content />
</AnimatedSection>
```

**Using Presets**
```tsx
import { AnimatedSection, AnimatedSectionPresets } from '@/components/animated';

<AnimatedSection {...AnimatedSectionPresets.hero}>
  <HeroSection />
</AnimatedSection>

<AnimatedSection {...AnimatedSectionPresets.feature}>
  <FeatureSection />
</AnimatedSection>
```

### AnimatedSectionGroup

Stagger animate multiple children.

```tsx
import { AnimatedSectionGroup } from '@/components/animated';

<AnimatedSectionGroup staggerDelay={100}>
  <FeatureCard title="Feature 1" />
  <FeatureCard title="Feature 2" />
  <FeatureCard title="Feature 3" />
  <FeatureCard title="Feature 4" />
</AnimatedSectionGroup>
```

---

## ParticleBackground

Animated floating particle background with multiple variants.

### Basic Usage

```tsx
import { ParticleBackground } from '@/components/animated';

function HeroSection() {
  return (
    <div className="relative">
      <ParticleBackground
        particleCount={50}
        colors={['#6366f1', '#06b6d4', '#a855f7']}
        speed="medium"
      />
      <div className="relative z-10">
        <h1>Content over particles</h1>
      </div>
    </div>
  );
}
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `particleCount` | `number` | `50` | Number of particles |
| `colors` | `string \| string[]` | `['#6366f1', '#06b6d4', '#14b8a6', '#a855f7']` | Particle colors |
| `sizeRange` | `[number, number]` | `[2, 8]` | Min and max size in pixels |
| `speed` | `'slow' \| 'medium' \| 'fast'` | `'medium'` | Animation speed |
| `opacity` | `number` | `0.6` | Particle opacity (0-1) |
| `blur` | `boolean` | `false` | Enable blur effect |
| `backgroundColor` | `string` | `'transparent'` | Background color |
| `zIndex` | `number` | `-1` | Z-index for layering |
| `shape` | `'circle' \| 'square' \| 'triangle'` | `'circle'` | Particle shape |

### Examples

**Basic Particles**
```tsx
<ParticleBackground
  particleCount={30}
  colors="#6366f1"
  speed="slow"
/>
```

**Multiple Colors**
```tsx
<ParticleBackground
  particleCount={60}
  colors={['#6366f1', '#06b6d4', '#a855f7']}
  sizeRange={[4, 12]}
  speed="fast"
  blur
/>
```

**Different Shapes**
```tsx
<ParticleBackground
  particleCount={40}
  shape="square"
  colors={['#06b6d4', '#14b8a6']}
  opacity={0.4}
/>
```

### Gradient Variant

```tsx
import { GradientParticleBackground } from '@/components/animated';

<GradientParticleBackground
  gradientStart="#6366f1"
  gradientEnd="#a855f7"
  particleCount={50}
/>
```

### Interactive Variant

Particles that react to mouse movement.

```tsx
import { InteractiveParticleBackground } from '@/components/animated';

<InteractiveParticleBackground
  particleCount={40}
  colors={['#6366f1', '#06b6d4']}
  speed="medium"
/>
```

---

## GlowingCard

Interactive card with glow effects and hover animations.

### Basic Usage

```tsx
import { GlowingCard } from '@/components/animated';

function FeatureCard() {
  return (
    <GlowingCard glowColor="#6366f1">
      <h3>AI-Powered Analytics</h3>
      <p>Transform your data into insights</p>
    </GlowingCard>
  );
}
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `glowColor` | `string` | `'var(--primary)'` | Glow color |
| `glowIntensity` | `number` | `0.5` | Glow intensity (0-1) |
| `enableTilt` | `boolean` | `true` | Enable tilt effect |
| `tiltIntensity` | `number` | `10` | Tilt angle (degrees) |
| `enableScale` | `boolean` | `true` | Enable scale on hover |
| `scaleFactor` | `number` | `1.02` | Scale factor |
| `enableBorderGlow` | `boolean` | `true` | Enable border glow |
| `variant` | `'default' \| 'gradient' \| 'outline' \| 'glass'` | `'default'` | Card style variant |
| `disableAnimations` | `boolean` | `false` | Disable all animations |

### Examples

**Basic Glowing Card**
```tsx
<GlowingCard glowColor="#06b6d4">
  <h3>Feature Title</h3>
  <p>Description</p>
</GlowingCard>
```

**Custom Intensity & Tilt**
```tsx
<GlowingCard
  glowColor="#a855f7"
  glowIntensity={0.8}
  tiltIntensity={15}
  scaleFactor={1.05}
>
  <Content />
</GlowingCard>
```

**Different Variants**
```tsx
<GlowingCard variant="gradient">
  <p>Gradient card</p>
</GlowingCard>

<GlowingCard variant="glass">
  <p>Glass morphism card</p>
</GlowingCard>

<GlowingCard variant="outline">
  <p>Outline card</p>
</GlowingCard>
```

### GlowingCardGrid

Grid of cards with stagger animation.

```tsx
import { GlowingCardGrid } from '@/components/animated';

<GlowingCardGrid
  items={[
    { id: 1, content: <FeatureCard title="Feature 1" /> },
    { id: 2, content: <FeatureCard title="Feature 2" /> },
    { id: 3, content: <FeatureCard title="Feature 3" /> },
  ]}
  columns={{ mobile: 1, tablet: 2, desktop: 3 }}
  gap={6}
  cardProps={{ glowColor: '#6366f1' }}
/>
```

### HoverRevealCard

Card with flip effect to reveal back content.

```tsx
import { HoverRevealCard } from '@/components/animated';

<HoverRevealCard
  frontContent={
    <div>
      <h3>Hover to reveal</h3>
      <p>Front content</p>
    </div>
  }
  backContent={
    <div>
      <h3>Hidden content</h3>
      <p>Revealed on hover!</p>
    </div>
  }
  flipDirection="horizontal"
/>
```

---

## AnimatedText

Character-by-character text reveal with multiple animation styles.

### Basic Usage

```tsx
import { AnimatedText } from '@/components/animated';

function Hero() {
  return (
    <AnimatedText
      text="Welcome to Cynea AI"
      variant="reveal"
      as="h1"
      className="text-6xl font-bold"
    />
  );
}
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | `string` | **required** | Text to animate |
| `variant` | `'reveal' \| 'fade' \| 'slide' \| 'scale' \| 'rotate' \| 'typewriter' \| 'wave'` | `'reveal'` | Animation style |
| `characterDelay` | `number` | `50` | Delay between characters (ms) |
| `delay` | `number` | `0` | Initial delay (ms) |
| `duration` | `number` | `600` | Animation duration (ms) |
| `trigger` | `'mount' \| 'scroll'` | `'mount'` | When to trigger |
| `as` | `keyof JSX.IntrinsicElements` | `'div'` | HTML element |
| `splitBy` | `'character' \| 'word' \| 'line'` | `'character'` | Split text by |
| `onComplete` | `() => void` | - | Completion callback |

### Examples

**Different Variants**
```tsx
<AnimatedText text="Fade In" variant="fade" />
<AnimatedText text="Slide In" variant="slide" />
<AnimatedText text="Scale In" variant="scale" />
<AnimatedText text="Rotate In" variant="rotate" />
<AnimatedText text="Typewriter" variant="typewriter" />
<AnimatedText text="Wave Effect" variant="wave" />
```

**Scroll Trigger**
```tsx
<AnimatedText
  text="Animates when scrolled into view"
  variant="reveal"
  trigger="scroll"
/>
```

**Split by Words**
```tsx
<AnimatedText
  text="Word by word animation"
  variant="fade"
  splitBy="word"
  characterDelay={100}
/>
```

**Custom Timing**
```tsx
<AnimatedText
  text="Custom timing"
  variant="reveal"
  characterDelay={30}
  delay={500}
  duration={800}
/>
```

### GradientText

Animated gradient text.

```tsx
import { GradientText } from '@/components/animated';

<GradientText
  text="Gradient Animation"
  colors={['#6366f1', '#8b5cf6', '#06b6d4']}
  speed="medium"
  as="h2"
  className="text-4xl font-bold"
/>
```

### CountUpText

Animated number counter.

```tsx
import { CountUpText } from '@/components/animated';

<div className="stat">
  <CountUpText
    value={10000}
    from={0}
    duration={2000}
    format={(val) => `${Math.round(val).toLocaleString()}+`}
    trigger="scroll"
  />
  <p>Active Users</p>
</div>
```

**Multiple Counters**
```tsx
<div className="stats-grid">
  <div>
    <CountUpText value={10000} decimals={0} />
    <p>Users</p>
  </div>
  <div>
    <CountUpText
      value={5000000}
      format={(val) => `$${(val / 1000000).toFixed(1)}M`}
    />
    <p>Revenue</p>
  </div>
  <div>
    <CountUpText
      value={98.5}
      decimals={1}
      format={(val) => `${val}%`}
    />
    <p>Satisfaction</p>
  </div>
</div>
```

### TextScramble

Scramble text effect.

```tsx
import { TextScramble } from '@/components/animated';

<TextScramble
  text="Scramble Effect"
  speed={50}
  trigger="hover"
  className="text-2xl font-bold"
/>
```

---

## Installation

These components are already set up in your project. Import them from:

```tsx
import {
  AnimatedSection,
  ParticleBackground,
  GlowingCard,
  AnimatedText,
  // ... and variants
} from '@/components/animated';
```

## Best Practices

### 1. Performance

- **Limit particle count**: Keep `particleCount` under 100 for better performance
- **Use GPU-accelerated properties**: The components use `transform` and `opacity`
- **Lazy load**: Use `trigger="scroll"` to animate only when visible

### 2. Accessibility

- **Respect reduced motion**:
```tsx
import { usePrefersReducedMotion } from '@/hooks/useAnimations';

function MyComponent() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <GlowingCard disableAnimations={prefersReducedMotion}>
      <Content />
    </GlowingCard>
  );
}
```

- **Maintain readability**: Don't over-animate text
- **Provide fallbacks**: Content should be readable without animations

### 3. Composition

**Combine components for rich effects**:
```tsx
<div className="relative min-h-screen">
  <ParticleBackground
    particleCount={50}
    colors={['#6366f1', '#06b6d4']}
  />

  <AnimatedSection animation="fadeInUp" className="relative z-10">
    <AnimatedText
      text="Welcome to Cynea AI"
      variant="reveal"
      as="h1"
    />

    <GlowingCardGrid
      items={features}
      columns={{ mobile: 1, tablet: 2, desktop: 3 }}
    />
  </AnimatedSection>
</div>
```

### 4. Theming

**Use CSS variables for consistent theming**:
```tsx
<GlowingCard glowColor="var(--primary)">
  <Content />
</GlowingCard>

<ParticleBackground
  colors={[
    'var(--primary)',
    'var(--secondary)',
    'var(--accent)',
  ]}
/>
```

### 5. Responsive Design

**Adjust animations for different screen sizes**:
```tsx
import { useMediaQuery } from '@/hooks';

function ResponsiveAnimations() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <>
      <ParticleBackground
        particleCount={isMobile ? 20 : 50}
        speed={isMobile ? 'slow' : 'medium'}
      />

      <AnimatedText
        text="Hello"
        characterDelay={isMobile ? 30 : 50}
      />
    </>
  );
}
```

## Common Patterns

### Hero Section
```tsx
<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
  <ParticleBackground
    particleCount={60}
    colors={['#6366f1', '#06b6d4', '#a855f7']}
    speed="slow"
  />

  <div className="relative z-10 text-center">
    <AnimatedText
      text="Transform Your Business"
      variant="reveal"
      as="h1"
      className="text-7xl font-black mb-6"
    />

    <AnimatedSection animation="fadeInUp" delay={400}>
      <p className="text-xl">AI-powered solutions for modern enterprises</p>
    </AnimatedSection>
  </div>
</section>
```

### Feature Grid
```tsx
<AnimatedSection animation="fadeInUp">
  <GlowingCardGrid
    items={features.map((feature) => ({
      id: feature.id,
      content: (
        <>
          <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
          <p>{feature.description}</p>
        </>
      ),
    }))}
    columns={{ mobile: 1, tablet: 2, desktop: 3 }}
    cardProps={{
      glowColor: '#6366f1',
      variant: 'glass',
    }}
  />
</AnimatedSection>
```

### Stats Section
```tsx
<AnimatedSectionGroup staggerDelay={150}>
  <div className="stat">
    <CountUpText
      value={10000}
      trigger="scroll"
      format={(val) => `${Math.round(val).toLocaleString()}+`}
      className="text-5xl font-black"
    />
    <p>Active Users</p>
  </div>

  <div className="stat">
    <CountUpText
      value={98}
      trigger="scroll"
      format={(val) => `${Math.round(val)}%`}
      className="text-5xl font-black"
    />
    <p>Satisfaction Rate</p>
  </div>
</AnimatedSectionGroup>
```

## Troubleshooting

### Animations not triggering
- Check that element is visible in viewport
- Adjust `threshold` and `rootMargin` values
- Verify `trigger` prop is set correctly

### Performance issues
- Reduce `particleCount`
- Increase `characterDelay` for text animations
- Use `trigger="scroll"` instead of `trigger="mount"`

### TypeScript errors
- Ensure all required props are provided
- Import types from component files if needed

## Support

For issues or questions:
- Check the main animations documentation
- Review the example components
- Refer to anime.js documentation
