# Anime.js Integration Documentation

This website has been completely redesigned with anime.js animations while keeping all original content intact.

## What's New

### 1. Anime.js Library Integration
- **Location**: `/public/libs/anime.esm.js`
- **Source**: Cloned from https://github.com/juliangarnier/anime.git
- **Version**: Latest (v4.x)

### 2. Animation Utilities Module
- **Location**: `/src/utils/animations.ts`
- **Features**:
  - Fade in animations
  - Slide animations (up, left, right)
  - Scale animations
  - Stagger animations for multiple elements
  - Scroll-triggered animations
  - Parallax effects
  - Counter animations
  - Text reveal animations
  - And many more...

### 3. React Animation Hooks
- **Location**: `/src/hooks/useAnimation.ts`
- **Available Hooks**:
  - `useFadeIn()` - Fade in animation on mount
  - `useSlideInUp()` - Slide in from bottom
  - `useSlideInLeft()` - Slide in from left
  - `useSlideInRight()` - Slide in from right
  - `useScaleIn()` - Scale up animation
  - `useStaggerFadeIn()` - Stagger animation for children
  - `useScrollAnimation()` - Scroll-triggered animations
  - `useParallax()` - Parallax scrolling effects
  - `useCountUp()` - Number counter animations
  - `useRevealText()` - Text reveal animations

### 4. CSS Animation Keyframes
- **Location**: `/src/styles/globals.css`
- **Classes Added**:
  - `.animate-fadeIn`
  - `.animate-slideInUp`
  - `.animate-slideInLeft`
  - `.animate-slideInRight`
  - `.animate-scaleIn`

## Implementation Examples

### Hero Section Animations
```typescript
const heroTextRef = useSlideInLeft({ duration: 1000, distance: 80 });
const heroCardRef = useSlideInRight({ duration: 1000, distance: 80, delay: 200 });
```

### Scroll-Triggered Animations
```typescript
const infrastructureRef = useScrollAnimation(
  { opacity: [0, 1], translateY: [50, 0] },
  { duration: 800 }
);
```

### Stagger Animations for Cards
```typescript
const infrastructureCardsRef = useStaggerFadeIn({
  staggerDelay: 150,
  delay: 300
});
```

## Modified Components

### 1. Home Page (`/src/pages/Home.tsx`)
- **Hero Section**: Slide in animations from left (text) and right (card)
- **Infrastructure Stack**: Scroll-triggered fade in for heading + stagger animation for cards
- **Differentiators**: Scroll-triggered animations for text and image
- **Social Proof**: Scroll-triggered fade in
- **CTA Sections**: Stagger animations for cards
- **Final CTA**: Scroll-triggered fade in
- **Interactive Effects**: Enhanced hover animations on all cards and buttons

### 2. Header Component (`/src/components/Header.tsx`)
- **Header Bar**: Slide in from top on page load
- **Dropdown Menus**: Fade in animations with smooth transitions
- **Menu Items**: Slide animations on hover
- **CTA Button**: Scale effect on hover

### 3. Global Styles (`/src/styles/globals.css`)
- Added comprehensive CSS animation keyframes
- Smooth transitions for all interactive elements
- Responsive animation handling
- Accessibility-friendly (respects prefers-reduced-motion)

## Features Added

### ✨ Smooth Page Load Animations
- Hero content slides in gracefully
- Staggered animations prevent visual overwhelm
- Professional entrance effects

### 📜 Scroll-Triggered Animations
- Content animates as you scroll down
- Intersection Observer API for performance
- Configurable thresholds and offsets

### 🎯 Interactive Hover Effects
- Cards lift up on hover
- Buttons scale smoothly
- Dropdown menus fade in elegantly
- Menu items slide on hover

### 🎨 Modern Design Enhancements
- Smooth transitions throughout
- Enhanced shadow effects
- Transform animations
- Professional micro-interactions

## Performance Considerations

1. **Lazy Loading**: Anime.js is loaded dynamically via ES modules
2. **Intersection Observer**: Used for scroll animations to ensure performance
3. **CSS Transforms**: Hardware-accelerated animations
4. **Reduced Motion**: Respects user preferences for accessibility

## Usage Guide

### Basic Animation Hook
```typescript
import { useSlideInUp } from '../hooks/useAnimation';

function MyComponent() {
  const ref = useSlideInUp({ duration: 800, distance: 30 });

  return (
    <div ref={ref as any}>
      Animated content here
    </div>
  );
}
```

### Custom Animation
```typescript
import * as animations from '../utils/animations';

// In your component
useEffect(() => {
  animations.fadeIn('.my-element', {
    duration: 1000,
    delay: 200
  });
}, []);
```

### Scroll Animation
```typescript
import { useScrollAnimation } from '../hooks/useAnimation';

function MyComponent() {
  const ref = useScrollAnimation(
    {
      opacity: [0, 1],
      translateY: [50, 0]
    },
    { duration: 800 }
  );

  return (
    <section ref={ref as any}>
      Content appears on scroll
    </section>
  );
}
```

## Testing the Animations

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

4. **Preview Production Build**:
   ```bash
   npm run preview
   ```

## Content Preservation

**IMPORTANT**: All original website content has been preserved:
- ✅ Text content unchanged
- ✅ Images and media intact
- ✅ Links and navigation preserved
- ✅ Component structure maintained
- ✅ Styling and colors kept
- ✅ Functionality unchanged

Only **animation layers** and **enhanced interactions** have been added.

## Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Full support

## Accessibility

- Respects `prefers-reduced-motion` media query
- Focus indicators maintained
- Keyboard navigation unaffected
- Screen reader compatibility preserved

## Future Enhancements

Potential additions:
- Page transition animations
- Loading state animations
- Form validation animations
- Success/error message animations
- Modal entrance/exit animations
- Toast notification animations

## Credits

- **Anime.js**: Created by Julian Garnier (https://animejs.com)
- **Integration**: Custom hooks and utilities for React
- **Design**: Enhanced with modern animation principles

---

**Last Updated**: November 19, 2025
**Anime.js Version**: v4.x
**React Version**: 18.3.1
