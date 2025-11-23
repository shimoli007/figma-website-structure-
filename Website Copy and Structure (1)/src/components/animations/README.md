# Reusable Animation Components

Production-ready, flexible animation components for the Cynea AI website.

## Components Overview

### 1. AnimatedSection
Wrapper component that triggers animations when scrolling into view.

### 2. ParticleBackground
Floating particle effects for backgrounds.

### 3. GlowingCard
Interactive cards with hover effects and glows.

### 4. AnimatedText
Character-by-character, word-by-word text reveal animations.

---

## AnimatedSection

Fade in animations triggered on scroll using Intersection Observer.

### Basic Usage

```tsx
import { AnimatedSection } from '@/components/animations';

// Simple fade in
<AnimatedSection>
  <h2>This fades in when scrolled into view</h2>
</AnimatedSection>

// Custom animation type
<AnimatedSection animationType="fadeInLeft" delay={200}>
  <div>Slides in from left</div>
</AnimatedSection>

// With callbacks
<AnimatedSection
  animationType="fadeInUp"
  onEnter={() => console.log('Element entered viewport')}
  onLeave={() => console.log('Element left viewport')}
>
  <div>Content with callbacks</div>
</AnimatedSection>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | ReactNode | - | Content to animate |
| `className` | string | '' | Additional CSS classes |
| `animationType` | Animation type | 'fadeInUp' | Type of animation |
| `delay` | number | 0 | Delay in ms |
| `threshold` | number | 0.1 | Intersection threshold |
| `triggerOnce` | boolean | true | Trigger only once |
| `onEnter` | function | - | Callback when entering viewport |
| `onLeave` | function | - | Callback when leaving viewport |
| `as` | element type | 'div' | HTML element to render |

### Animation Types

- `fadeIn` - Fade in with slight upward motion
- `fadeInUp` - Fade in from bottom
- `fadeInDown` - Fade in from top
- `fadeInLeft` - Fade in from left
- `fadeInRight` - Fade in from right
- `scaleIn` - Scale up with elastic effect
- `slideInLeft` - Slide in from left
- `slideInRight` - Slide in from right

### AnimatedSectionStaggered

Stagger animations for child elements.

```tsx
<AnimatedSectionStaggered
  childSelector=".feature-card"
  staggerDelay={150}
  animationType="fadeInUp"
>
  <div className="feature-card">Card 1</div>
  <div className="feature-card">Card 2</div>
  <div className="feature-card">Card 3</div>
</AnimatedSectionStaggered>
```

---

## ParticleBackground

Floating particle effects for immersive backgrounds.

### Basic Usage

```tsx
import { ParticleBackground, ParticleBackgroundGradient } from '@/components/animations';

// Simple particles
<ParticleBackground
  particleCount={50}
  particleColor="#7c3aed"
  speed="slow"
/>

// Gradient particles
<ParticleBackgroundGradient
  particleCount={80}
  colors={['#7c3aed', '#3b82f6', '#06b6d4']}
  speed="medium"
/>
```

### ParticleBackground Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `particleCount` | number | 50 | Number of particles |
| `particleColor` | string | '#7c3aed' | Particle color |
| `particleSize` | number | 2 | Base particle size |
| `speed` | 'slow' \| 'medium' \| 'fast' | 'slow' | Animation speed |
| `opacity` | number | 0.6 | Particle opacity |
| `blur` | boolean | false | Apply blur effect |

### ParticleBackgroundGradient Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `particleCount` | number | 50 | Number of particles |
| `colors` | string[] | [...] | Array of colors |
| `particleSize` | number | 2 | Base particle size |
| `speed` | 'slow' \| 'medium' \| 'fast' | 'slow' | Animation speed |

### Usage in Sections

```tsx
<section style={{ position: 'relative', minHeight: '100vh' }}>
  <ParticleBackground particleCount={60} speed="slow" />
  <div style={{ position: 'relative', zIndex: 1 }}>
    <h1>Content on top of particles</h1>
  </div>
</section>
```

---

## GlowingCard

Interactive cards with hover effects, glows, and 3D transforms.

### Basic Usage

```tsx
import {
  GlowingCard,
  GlowingCardGradient,
  GlowingCardInteractive
} from '@/components/animations';

// Lift effect
<GlowingCard hoverEffect="lift" glowColor="124, 58, 237">
  <h3>Card Title</h3>
  <p>Card content</p>
</GlowingCard>

// 3D tilt effect
<GlowingCard hoverEffect="tilt" intensity="strong">
  <div>Move mouse for 3D effect</div>
</GlowingCard>

// All effects combined
<GlowingCard
  hoverEffect="all"
  intensity="strong"
  glassEffect
  gradient
>
  <div>Premium card</div>
</GlowingCard>
```

### GlowingCard Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | ReactNode | - | Card content |
| `className` | string | '' | Additional CSS classes |
| `glowColor` | string | '124, 58, 237' | RGB glow color |
| `hoverEffect` | Effect type | 'lift' | Hover effect type |
| `intensity` | Intensity | 'medium' | Effect intensity |
| `glassEffect` | boolean | false | Glass morphism |
| `gradient` | boolean | false | Gradient background |
| `onClick` | function | - | Click handler |

### Hover Effect Types

- `lift` - Card lifts up on hover
- `tilt` - 3D tilt following mouse
- `scale` - Scale up on hover
- `glow` - Glow effect on hover
- `all` - Combines all effects

### GlowingCardGradient

Card with animated gradient border.

```tsx
<GlowingCardGradient
  borderGradient="linear-gradient(135deg, #7c3aed, #3b82f6)"
  glowIntensity="high"
>
  <h3>Gradient Border Card</h3>
</GlowingCardGradient>
```

### GlowingCardInteractive

Card with mouse-following spotlight effect.

```tsx
<GlowingCardInteractive
  spotlightColor="rgba(124, 58, 237, 0.3)"
  spotlightSize={400}
>
  <h3>Interactive Spotlight</h3>
  <p>Move your mouse over this card</p>
</GlowingCardInteractive>
```

---

## AnimatedText

Text reveal animations with various effects.

### Basic Usage

```tsx
import {
  AnimatedText,
  AnimatedTextGradient,
  AnimatedTextSplit,
  AnimatedCounter
} from '@/components/animations';

// Character animation
<AnimatedText
  text="Welcome to Cynea AI"
  animationType="characters"
  staggerDelay={50}
/>

// Word animation
<AnimatedText
  text="Transform your business"
  as="h1"
  animationType="words"
  triggerOnScroll
/>

// Typewriter effect
<AnimatedText
  text="AI-powered solutions..."
  animationType="typewriter"
  duration={2000}
/>
```

### AnimatedText Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | string | - | Text to animate |
| `className` | string | '' | Additional CSS classes |
| `as` | element type | 'div' | HTML element |
| `animationType` | Animation type | 'characters' | Animation style |
| `delay` | number | 0 | Delay in ms |
| `staggerDelay` | number | 50 | Delay between items |
| `duration` | number | 1000 | Animation duration |
| `triggerOnScroll` | boolean | false | Trigger on scroll |
| `onComplete` | function | - | Completion callback |

### Animation Types

- `characters` - Character by character
- `words` - Word by word
- `lines` - Line by line
- `typewriter` - Typing effect

### AnimatedTextGradient

Text with gradient and reveal animation.

```tsx
<AnimatedTextGradient
  text="Powered by AI"
  gradient="linear-gradient(135deg, #7c3aed, #3b82f6)"
  animationType="characters"
  as="h1"
  className="display-1"
/>
```

### AnimatedTextSplit

Text split reveal effect.

```tsx
<AnimatedTextSplit
  text="Next Generation AI"
  as="h2"
  triggerOnScroll
/>
```

### AnimatedCounter

Animated number counter.

```tsx
// Basic counter
<AnimatedCounter end={10000} suffix="+" />

// Decimal counter
<AnimatedCounter end={99.9} suffix="%" decimals={1} />

// With prefix
<AnimatedCounter start={0} end={1000} prefix="$" duration={2500} />
```

#### AnimatedCounter Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `start` | number | 0 | Starting value |
| `end` | number | - | Ending value |
| `duration` | number | 2000 | Animation duration |
| `suffix` | string | '' | Text after number |
| `prefix` | string | '' | Text before number |
| `decimals` | number | 0 | Decimal places |
| `triggerOnScroll` | boolean | true | Trigger on scroll |

---

## Complete Examples

### Hero Section

```tsx
<section style={{ position: 'relative', minHeight: '100vh' }}>
  <ParticleBackgroundGradient
    particleCount={80}
    colors={['#7c3aed', '#3b82f6', '#06b6d4']}
    speed="slow"
  />

  <div style={{ position: 'relative', zIndex: 1 }}>
    <AnimatedTextGradient
      text="Welcome to Cynea AI"
      as="h1"
      className="display-1"
      animationType="characters"
    />

    <AnimatedText
      text="Transform your business with AI"
      as="p"
      className="lead"
      animationType="words"
      delay={800}
    />

    <AnimatedSection animationType="scaleIn" delay={1500}>
      <button>Get Started</button>
    </AnimatedSection>
  </div>
</section>
```

### Feature Cards

```tsx
<AnimatedSectionStaggered
  childSelector=".feature-card"
  staggerDelay={150}
>
  <GlowingCard hoverEffect="lift" className="feature-card">
    <h3>AI Analytics</h3>
    <p>Advanced insights</p>
  </GlowingCard>

  <GlowingCard hoverEffect="tilt" className="feature-card">
    <h3>Automation</h3>
    <p>Smart workflows</p>
  </GlowingCard>

  <GlowingCard hoverEffect="glow" className="feature-card">
    <h3>Predictions</h3>
    <p>Accurate forecasts</p>
  </GlowingCard>
</AnimatedSectionStaggered>
```

### Statistics Section

```tsx
<AnimatedSection animationType="fadeInUp">
  <h2>Our Impact</h2>
</AnimatedSection>

<div className="stats-grid">
  <AnimatedSection animationType="scaleIn" delay={100}>
    <AnimatedCounter end={10000} suffix="+" />
    <p>Customers</p>
  </AnimatedSection>

  <AnimatedSection animationType="scaleIn" delay={200}>
    <AnimatedCounter end={99.9} suffix="%" decimals={1} />
    <p>Accuracy</p>
  </AnimatedSection>

  <AnimatedSection animationType="scaleIn" delay={300}>
    <AnimatedCounter end={500} suffix="+" />
    <p>Projects</p>
  </AnimatedSection>
</div>
```

---

## Performance Tips

1. **Use `triggerOnce`**: Set to `true` for scroll animations to prevent re-triggering
2. **Limit particle count**: Keep under 100 for mobile devices
3. **Stagger delays**: Use 100-200ms for optimal effect
4. **Threshold values**: Use 0.1-0.3 for early triggering
5. **Combine effects**: Use `hoverEffect="all"` sparingly

## Browser Support

All components work in modern browsers supporting:
- Intersection Observer API
- CSS transforms
- requestAnimationFrame
- ES6+

Graceful degradation for older browsers.

## TypeScript Support

All components are fully typed with TypeScript interfaces exported.

```tsx
import type {
  AnimatedSectionProps,
  GlowingCardProps,
  AnimatedTextProps
} from '@/components/animations';
```
