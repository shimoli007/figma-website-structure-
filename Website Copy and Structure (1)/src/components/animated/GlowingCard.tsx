/**
 * GlowingCard Component
 * A card component with animated glow effects on hover and interactive tilt
 */

import React, { useRef, useState, useEffect } from 'react';
import anime from 'animejs';

export interface GlowingCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Children content */
  children: React.ReactNode;
  /** Glow color (uses CSS variable by default) */
  glowColor?: string;
  /** Glow intensity (0-1) */
  glowIntensity?: number;
  /** Enable tilt effect on hover */
  enableTilt?: boolean;
  /** Tilt intensity (0-30 recommended) */
  tiltIntensity?: number;
  /** Enable scale on hover */
  enableScale?: boolean;
  /** Scale factor on hover (1.0 - 1.1 recommended) */
  scaleFactor?: number;
  /** Enable border glow */
  enableBorderGlow?: boolean;
  /** Card variant */
  variant?: 'default' | 'gradient' | 'outline' | 'glass';
  /** Additional className */
  className?: string;
  /** Disable all animations */
  disableAnimations?: boolean;
}

/**
 * GlowingCard - Interactive card with glow and hover effects
 *
 * @example
 * ```tsx
 * <GlowingCard glowColor="#6366f1">
 *   <h3>Feature Title</h3>
 *   <p>Description</p>
 * </GlowingCard>
 *
 * <GlowingCard
 *   variant="gradient"
 *   enableTilt
 *   tiltIntensity={15}
 * >
 *   <p>Gradient card with tilt</p>
 * </GlowingCard>
 * ```
 */
export const GlowingCard = React.forwardRef<HTMLDivElement, GlowingCardProps>(
  (
    {
      children,
      glowColor = 'var(--primary)',
      glowIntensity = 0.5,
      enableTilt = true,
      tiltIntensity = 10,
      enableScale = true,
      scaleFactor = 1.02,
      enableBorderGlow = true,
      variant = 'default',
      className = '',
      disableAnimations = false,
      ...props
    },
    ref
  ) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    // Merge refs
    useEffect(() => {
      if (ref) {
        if (typeof ref === 'function') {
          ref(cardRef.current);
        } else {
          ref.current = cardRef.current;
        }
      }
    }, [ref]);

    // Mouse move handler for tilt effect
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (disableAnimations || !enableTilt || !cardRef.current) return;

      const card = cardRef.current;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -tiltIntensity;
      const rotateY = ((x - centerX) / centerX) * tiltIntensity;

      anime({
        targets: card,
        rotateX,
        rotateY,
        duration: 300,
        easing: 'easeOutQuad',
      });

      // Update glow position
      if (glowRef.current) {
        glowRef.current.style.background = `radial-gradient(circle at ${x}px ${y}px, ${glowColor}${Math.floor(
          glowIntensity * 255
        ).toString(16)}, transparent 50%)`;
      }
    };

    const handleMouseEnter = () => {
      setIsHovered(true);

      if (disableAnimations || !cardRef.current) return;

      // Scale animation
      if (enableScale) {
        anime({
          targets: cardRef.current,
          scale: scaleFactor,
          duration: 300,
          easing: 'easeOutQuad',
        });
      }

      // Glow animation
      if (glowRef.current) {
        anime({
          targets: glowRef.current,
          opacity: [0, glowIntensity],
          duration: 400,
          easing: 'easeOutQuad',
        });
      }
    };

    const handleMouseLeave = () => {
      setIsHovered(false);

      if (disableAnimations || !cardRef.current) return;

      // Reset transformations
      anime({
        targets: cardRef.current,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        duration: 500,
        easing: 'easeOutQuad',
      });

      // Hide glow
      if (glowRef.current) {
        anime({
          targets: glowRef.current,
          opacity: 0,
          duration: 300,
          easing: 'easeOutQuad',
        });
      }
    };

    // Variant styles
    const variantStyles: Record<typeof variant, string> = {
      default: 'bg-card border border-border',
      gradient: 'bg-gradient-to-br from-card to-card/50 border border-border/50',
      outline: 'bg-transparent border-2 border-border',
      glass: 'bg-card/30 backdrop-blur-lg border border-border/30',
    };

    return (
      <div
        ref={cardRef}
        className={`
          glowing-card
          relative
          rounded-lg
          p-6
          transition-all
          duration-300
          ${variantStyles[variant]}
          ${enableTilt ? 'transform-gpu' : ''}
          ${className}
        `}
        style={{
          transformStyle: 'preserve-3d',
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {/* Glow overlay */}
        <div
          ref={glowRef}
          className="absolute inset-0 rounded-lg pointer-events-none opacity-0"
          style={{
            background: `radial-gradient(circle at center, ${glowColor}${Math.floor(
              glowIntensity * 255
            ).toString(16)}, transparent 50%)`,
            mixBlendMode: 'screen',
          }}
        />

        {/* Border glow */}
        {enableBorderGlow && (
          <div
            className={`absolute inset-0 rounded-lg pointer-events-none transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              boxShadow: `0 0 20px ${glowColor}${Math.floor(glowIntensity * 100).toString(
                16
              )}, 0 0 40px ${glowColor}${Math.floor(glowIntensity * 50).toString(16)}`,
            }}
          />
        )}

        {/* Content */}
        <div className="relative z-10">{children}</div>
      </div>
    );
  }
);

GlowingCard.displayName = 'GlowingCard';

/**
 * GlowingCardGrid - Grid of glowing cards with stagger effect
 */
export interface GlowingCardGridProps {
  /** Card items */
  items: Array<{
    id: string | number;
    content: React.ReactNode;
  }>;
  /** Grid columns (responsive) */
  columns?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
  /** Gap between cards */
  gap?: number;
  /** Shared card props */
  cardProps?: Partial<GlowingCardProps>;
  /** Container className */
  className?: string;
}

export const GlowingCardGrid: React.FC<GlowingCardGridProps> = ({
  items,
  columns = { mobile: 1, tablet: 2, desktop: 3 },
  gap = 6,
  cardProps = {},
  className = '',
}) => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    const cards = gridRef.current.querySelectorAll('.glowing-card');

    anime({
      targets: Array.from(cards),
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 600,
      delay: anime.stagger(100),
      easing: 'easeOutExpo',
    });
  }, [items]);

  return (
    <div
      ref={gridRef}
      className={`
        grid
        grid-cols-${columns.mobile}
        md:grid-cols-${columns.tablet}
        lg:grid-cols-${columns.desktop}
        gap-${gap}
        ${className}
      `}
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns.mobile}, 1fr)`,
        gap: `${gap * 0.25}rem`,
      }}
    >
      {items.map((item) => (
        <GlowingCard key={item.id} {...cardProps}>
          {item.content}
        </GlowingCard>
      ))}
    </div>
  );
};

/**
 * HoverRevealCard - Card that reveals content on hover
 */
export interface HoverRevealCardProps extends Omit<GlowingCardProps, 'children'> {
  /** Front content (always visible) */
  frontContent: React.ReactNode;
  /** Back content (revealed on hover) */
  backContent: React.ReactNode;
  /** Flip direction */
  flipDirection?: 'horizontal' | 'vertical';
}

export const HoverRevealCard: React.FC<HoverRevealCardProps> = ({
  frontContent,
  backContent,
  flipDirection = 'horizontal',
  ...cardProps
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const frontRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!frontRef.current || !backRef.current) return;

    const rotateAxis = flipDirection === 'horizontal' ? 'rotateY' : 'rotateX';

    anime({
      targets: frontRef.current,
      [rotateAxis]: isFlipped ? 180 : 0,
      opacity: isFlipped ? 0 : 1,
      duration: 600,
      easing: 'easeInOutQuad',
    });

    anime({
      targets: backRef.current,
      [rotateAxis]: isFlipped ? 0 : -180,
      opacity: isFlipped ? 1 : 0,
      duration: 600,
      easing: 'easeInOutQuad',
    });
  }, [isFlipped, flipDirection]);

  return (
    <GlowingCard
      {...cardProps}
      enableTilt={false}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      style={{ perspective: '1000px' }}
    >
      <div className="relative">
        <div
          ref={frontRef}
          className="absolute inset-0"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {frontContent}
        </div>
        <div
          ref={backRef}
          className="absolute inset-0"
          style={{ backfaceVisibility: 'hidden', opacity: 0 }}
        >
          {backContent}
        </div>
        {/* Spacer to maintain height */}
        <div className="opacity-0 pointer-events-none">{frontContent}</div>
      </div>
    </GlowingCard>
  );
};

GlowingCardGrid.displayName = 'GlowingCardGrid';
HoverRevealCard.displayName = 'HoverRevealCard';

export default GlowingCard;
