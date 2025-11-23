# Modern Hero Section - Documentation

A visually stunning, fully animated hero section for the Cynea AI website featuring animated gradients, floating particles, geometric shapes, character-by-character text reveals, and smooth scroll indicators.

## 🎨 Visual Features

### 1. **Animated Gradient Background**
- Multi-layer gradient animation
- 400% background size with continuous looping
- Color scheme: Deep navy → Indigo → Purple → Indigo → Navy
- 20-second animation cycle
- Radial overlay gradients for depth

### 2. **Particle Effects**
- 60 floating gradient particles
- 5 colors: Purple (#7c3aed), Blue (#3b82f6), Cyan (#06b6d4), Teal (#14b8a6), Accent Purple (#a855f7)
- Slow, smooth movements
- Random sizes and opacity variations

### 3. **Floating Geometric Shapes**
- 12 animated geometric shapes
- 5 shape types: Circle, Square, Triangle, Hexagon, Pentagon
- Gradient fills with brightness variations
- Smooth rotation and floating animations
- 15% opacity for subtle effect

### 4. **Text Animations**
- **Headline**: Character-by-character reveal (30ms stagger)
- **Subtitle**: Word-by-word reveal (50ms stagger, 1s delay)
- **Badge**: Fade-in from top
- Gradient text effect on headline
- Text shadow glow effect

### 5. **Scroll Indicator**
- Animated mouse icon with wheel
- Bounce animation (2s cycle)
- "Scroll to explore" text
- Smooth scroll on click
- Fade-in animation (2.5s delay)

---

## 📦 Components Included

### HeroSection
Main hero component combining all effects.

### FloatingShapes
Animated geometric shapes background.

### ScrollIndicator
Smooth scroll indicator with animations.

---

## 🚀 Usage

### Basic Implementation

```tsx
import { HeroSection } from '@/components/HeroSection';

function HomePage() {
  return (
    <HeroSection
      title="Your Amazing Title"
      subtitle="Your compelling subtitle text"
      primaryCTA={{ text: 'Get Started', to: '/contact' }}
      secondaryCTA={{ text: 'Learn More', to: '/about' }}
    />
  );
}
```

### With Custom Stats

```tsx
<HeroSection
  title="Empowering SMEs with AI & Blockchain"
  subtitle="Complete infrastructure stack for emerging markets"
  primaryCTA={{ text: 'Get Started', to: '/contact' }}
  secondaryCTA={{ text: 'View Use Cases', to: '/use-cases' }}
  stats={[
    { label: 'Trusted by', value: 'Government Partners' },
    { label: 'Supporting', value: '100+ SMEs' },
    { label: 'Global Reach', value: '50+ Countries' },
  ]}
/>
```

### Individual Components

```tsx
import {
  FloatingShapes,
  ScrollIndicator,
  ParticleBackgroundGradient,
} from '@/components/animations';

// Floating shapes only
<FloatingShapes
  shapeCount={15}
  colors={['#7c3aed', '#3b82f6', '#06b6d4']}
  speed="medium"
  opacity={0.2}
/>

// Scroll indicator only
<ScrollIndicator
  text="Scroll down"
  color="#ffffff"
  size="large"
/>

// Particles only
<ParticleBackgroundGradient
  particleCount={80}
  colors={['#7c3aed', '#3b82f6', '#06b6d4']}
  speed="slow"
/>
```

---

## ⚙️ Props Reference

### HeroSection Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | 'Empowering SMEs...' | Main headline text |
| `subtitle` | string | 'Complete infrastructure...' | Subtitle text |
| `primaryCTA` | `{ text: string, to: string }` | Get Started | Primary button |
| `secondaryCTA` | `{ text: string, to: string }` | View Use Cases | Secondary button |
| `stats` | `Array<{ label: string, value: string }>` | [...] | Stats to display |

### FloatingShapes Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `shapeCount` | number | 12 | Number of shapes |
| `colors` | string[] | [...] | Array of hex colors |
| `speed` | 'slow' \| 'medium' \| 'fast' | 'slow' | Animation speed |
| `opacity` | number | 0.15 | Shape opacity (0-1) |
| `className` | string | '' | Additional CSS classes |

### ScrollIndicator Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | string | 'Scroll to explore' | Label text |
| `color` | string | '#ffffff' | Indicator color |
| `size` | 'small' \| 'medium' \| 'large' | 'medium' | Indicator size |
| `onClick` | function | - | Custom click handler |
| `className` | string | '' | Additional CSS classes |

---

## 🎬 Animation Timeline

The hero section uses a carefully choreographed animation sequence:

1. **0ms** - Gradient background starts animating
2. **0ms** - Particles begin floating
3. **0ms** - Shapes start animating
4. **0ms** - Badge fades in from top
5. **0ms** - Headline reveals character-by-character (30ms stagger)
6. **1000ms** - Subtitle reveals word-by-word (50ms stagger)
7. **1800ms** - CTA buttons scale in
8. **2000ms** - Stats fade in from bottom
9. **2500ms** - Scroll indicator fades in

---

## 🎨 Customization

### Custom Colors

```tsx
// Change particle colors
<ParticleBackgroundGradient
  colors={['#ff6b6b', '#4ecdc4', '#45b7d1']}
  particleCount={100}
/>

// Change shape colors
<FloatingShapes
  colors={['#ff6b6b', '#4ecdc4', '#45b7d1']}
  opacity={0.25}
/>
```

### Custom Gradient Background

Modify the gradient in `HeroSection.tsx`:

```tsx
background: 'linear-gradient(135deg, #your-color1 0%, #your-color2 50%, #your-color3 100%)'
```

### Adjust Animation Speed

```tsx
// Slower particles
<ParticleBackgroundGradient speed="slow" />

// Faster shapes
<FloatingShapes speed="fast" />
```

### Custom Text Animation

Modify stagger delays in the component:

```tsx
// Faster character reveal
<AnimatedTextGradient staggerDelay={20} />

// Slower word reveal
<AnimatedText staggerDelay={100} />
```

---

## 📱 Responsive Behavior

The hero section is fully responsive:

### Desktop (>1024px)
- Full gradient animations
- All particles and shapes visible
- Large headline (clamp: 2.5rem - 6rem)
- Centered layout

### Tablet (768px - 1024px)
- Reduced particle count (auto-optimized)
- Medium headline size
- Maintained animations

### Mobile (<768px)
- Optimized particle count
- Smaller shapes
- Smaller headline (clamp minimum)
- Touch-optimized scroll indicator

---

## 🔧 Performance Optimization

### Built-in Optimizations

1. **Particle Count**: Automatically reduces on smaller screens
2. **Animation Cleanup**: All animations cleaned up on unmount
3. **RAF Usage**: Smooth 60fps animations
4. **Lazy Loading**: Components load only when needed
5. **CSS Transforms**: Hardware-accelerated animations

### Custom Optimizations

```tsx
// Reduce particles for better performance
<ParticleBackgroundGradient particleCount={30} />

// Reduce shapes
<FloatingShapes shapeCount={8} />

// Disable blur for better performance
<FloatingShapes opacity={0.1} /> // No blur needed with low opacity
```

---

## 🎯 Best Practices

### 1. Content Length
- **Title**: Keep under 60 characters for best visual impact
- **Subtitle**: 150-200 characters optimal
- **Stats**: 2-4 stats work best visually

### 2. Color Harmony
- Use colors from your design system
- Maintain contrast for readability
- Test with different screen brightness

### 3. Animation Performance
- Test on mid-range devices
- Monitor frame rate during development
- Reduce particle/shape count if needed

### 4. Accessibility
- Ensure sufficient color contrast
- Provide alternative content for screen readers
- Test keyboard navigation
- Respect `prefers-reduced-motion`

---

## 🐛 Troubleshooting

### Animations Not Playing

**Solution**: Check that anime.js is installed:
```bash
npm install animejs
```

### Poor Performance

**Solution**: Reduce particle and shape counts:
```tsx
<ParticleBackgroundGradient particleCount={30} />
<FloatingShapes shapeCount={8} />
```

### Text Not Animating

**Solution**: Ensure `triggerOnScroll` is set to `false` for immediate animation:
```tsx
<AnimatedTextGradient triggerOnScroll={false} />
```

### Scroll Indicator Not Working

**Solution**: Ensure there's content below the hero section to scroll to, or provide custom `onClick`:
```tsx
<ScrollIndicator onClick={() => {
  document.getElementById('content').scrollIntoView({ behavior: 'smooth' });
}} />
```

---

## 🌟 Advanced Examples

### Custom Hero with All Options

```tsx
<HeroSection
  title="Transform Your Business"
  subtitle="AI-powered solutions for the modern enterprise"
  primaryCTA={{
    text: 'Start Free Trial',
    to: '/signup'
  }}
  secondaryCTA={{
    text: 'Watch Demo',
    to: '/demo'
  }}
  stats={[
    { label: 'Active Users', value: '10K+' },
    { label: 'Success Rate', value: '99.9%' },
    { label: 'Countries', value: '50+' },
  ]}
/>
```

### Minimal Hero (No Stats)

```tsx
<HeroSection
  title="Simple & Powerful"
  subtitle="Everything you need, nothing you don't"
  primaryCTA={{ text: 'Get Started', to: '/start' }}
  secondaryCTA={{ text: 'Learn More', to: '/about' }}
  stats={[]} // No stats
/>
```

### Custom Particle Setup

```tsx
<section style={{ position: 'relative', minHeight: '100vh' }}>
  <ParticleBackgroundGradient
    particleCount={120}
    colors={['#ff6b6b', '#f06595', '#cc5de8', '#845ef7']}
    speed="fast"
    particleSize={4}
  />

  <div style={{ position: 'relative', zIndex: 10 }}>
    <h1>Your Content</h1>
  </div>
</section>
```

---

## 📊 Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | 90+ | ✅ Full |
| Firefox | 88+ | ✅ Full |
| Safari | 14+ | ✅ Full |
| Edge | 90+ | ✅ Full |
| Mobile Safari | 14+ | ✅ Full |
| Chrome Mobile | 90+ | ✅ Full |

**Requirements**:
- CSS transforms
- CSS gradients
- Intersection Observer API
- requestAnimationFrame
- ES6+ support

---

## 🔄 Updates & Changelog

### v1.0.0 (Current)
- Initial release
- Animated gradient background
- Particle effects
- Floating geometric shapes
- Character-by-character text animation
- Scroll indicator
- Full responsive support
- TypeScript support

---

## 💡 Tips & Tricks

1. **Combine with Page Transitions**: Use with route transition animations for seamless navigation

2. **Preload Assets**: Preload gradient images if using custom backgrounds

3. **Test Performance**: Use Chrome DevTools Performance tab to monitor

4. **Color Schemes**: Match particle/shape colors to your brand palette

5. **Content Strategy**: Use powerful, action-oriented copy for maximum impact

6. **A/B Testing**: Test different headlines, CTAs, and animation speeds

7. **Analytics**: Track CTA click rates and scroll depth

---

## 🎓 Learning Resources

- [Anime.js Documentation](https://animejs.com/)
- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [CSS Gradients](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient)
- [React Performance](https://react.dev/learn/render-and-commit)

---

## 📝 License

This component is part of the Cynea AI website project.

---

**Created with** 💜 **by the Cynea AI team**
