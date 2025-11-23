/**
 * Micro-Interactions Utilities
 * Small, delightful animations for enhanced user experience
 */

import anime from 'animejs';

/**
 * Button Interactions
 */
export const buttonInteractions = {
  /**
   * Add hover effect to button
   */
  addHoverEffect: (button: HTMLElement): void => {
    button.addEventListener('mouseenter', () => {
      anime({
        targets: button,
        scale: 1.05,
        duration: 200,
        easing: 'easeOutQuad',
      });
    });

    button.addEventListener('mouseleave', () => {
      anime({
        targets: button,
        scale: 1,
        duration: 200,
        easing: 'easeOutQuad',
      });
    });
  },

  /**
   * Add click ripple effect
   */
  addRippleEffect: (button: HTMLElement): void => {
    button.style.position = 'relative';
    button.style.overflow = 'hidden';

    button.addEventListener('click', (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        width: 20px;
        height: 20px;
        left: ${x}px;
        top: ${y}px;
        transform: translate(-50%, -50%);
        pointer-events: none;
      `;

      button.appendChild(ripple);

      anime({
        targets: ripple,
        scale: [0, 15],
        opacity: [1, 0],
        duration: 600,
        easing: 'easeOutExpo',
        complete: () => ripple.remove(),
      });
    });
  },

  /**
   * Add pulse effect on hover
   */
  addPulseEffect: (button: HTMLElement): void => {
    let pulseAnimation: anime.AnimeInstance | null = null;

    button.addEventListener('mouseenter', () => {
      pulseAnimation = anime({
        targets: button,
        scale: [1, 1.05, 1],
        duration: 1000,
        easing: 'easeInOutQuad',
        loop: true,
      });
    });

    button.addEventListener('mouseleave', () => {
      if (pulseAnimation) {
        pulseAnimation.pause();
        anime({
          targets: button,
          scale: 1,
          duration: 200,
          easing: 'easeOutQuad',
        });
      }
    });
  },

  /**
   * Add magnetic effect (button follows cursor)
   */
  addMagneticEffect: (button: HTMLElement, strength: number = 0.3): void => {
    button.addEventListener('mousemove', (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      anime({
        targets: button,
        translateX: x * strength,
        translateY: y * strength,
        duration: 300,
        easing: 'easeOutCubic',
      });
    });

    button.addEventListener('mouseleave', () => {
      anime({
        targets: button,
        translateX: 0,
        translateY: 0,
        duration: 500,
        easing: 'easeOutElastic(1, .6)',
      });
    });
  },

  /**
   * Add shake effect on error
   */
  shake: (button: HTMLElement): void => {
    anime({
      targets: button,
      translateX: [
        { value: -10, duration: 100 },
        { value: 10, duration: 100 },
        { value: -10, duration: 100 },
        { value: 10, duration: 100 },
        { value: 0, duration: 100 },
      ],
      easing: 'easeInOutQuad',
    });
  },
};

/**
 * Card Interactions
 */
export const cardInteractions = {
  /**
   * Add hover lift effect
   */
  addLiftEffect: (card: HTMLElement): void => {
    card.addEventListener('mouseenter', () => {
      anime({
        targets: card,
        translateY: -10,
        boxShadow: [
          '0 4px 8px rgba(0,0,0,0.1)',
          '0 12px 24px rgba(124, 58, 237, 0.2)',
        ],
        duration: 300,
        easing: 'easeOutCubic',
      });
    });

    card.addEventListener('mouseleave', () => {
      anime({
        targets: card,
        translateY: 0,
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        duration: 300,
        easing: 'easeOutCubic',
      });
    });
  },

  /**
   * Add tilt effect on hover
   */
  addTiltEffect: (card: HTMLElement): void => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;

      anime({
        targets: card,
        rotateX,
        rotateY,
        duration: 300,
        easing: 'easeOutCubic',
      });
    });

    card.addEventListener('mouseleave', () => {
      anime({
        targets: card,
        rotateX: 0,
        rotateY: 0,
        duration: 500,
        easing: 'easeOutElastic(1, .6)',
      });
    });
  },

  /**
   * Add glow effect on hover
   */
  addGlowEffect: (card: HTMLElement, color: string = '124, 58, 237'): void => {
    card.addEventListener('mouseenter', () => {
      anime({
        targets: card,
        boxShadow: [
          `0 4px 8px rgba(0,0,0,0.1)`,
          `0 0 30px rgba(${color}, 0.5), 0 0 60px rgba(${color}, 0.3)`,
        ],
        duration: 300,
        easing: 'easeOutCubic',
      });
    });

    card.addEventListener('mouseleave', () => {
      anime({
        targets: card,
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        duration: 300,
        easing: 'easeOutCubic',
      });
    });
  },

  /**
   * Add scale effect on hover
   */
  addScaleEffect: (card: HTMLElement, scale: number = 1.03): void => {
    card.addEventListener('mouseenter', () => {
      anime({
        targets: card,
        scale,
        duration: 300,
        easing: 'easeOutCubic',
      });
    });

    card.addEventListener('mouseleave', () => {
      anime({
        targets: card,
        scale: 1,
        duration: 300,
        easing: 'easeOutCubic',
      });
    });
  },
};

/**
 * Input Interactions
 */
export const inputInteractions = {
  /**
   * Add focus animation
   */
  addFocusEffect: (input: HTMLElement): void => {
    input.addEventListener('focus', () => {
      anime({
        targets: input,
        scale: 1.02,
        borderColor: '#7c3aed',
        duration: 200,
        easing: 'easeOutQuad',
      });
    });

    input.addEventListener('blur', () => {
      anime({
        targets: input,
        scale: 1,
        duration: 200,
        easing: 'easeOutQuad',
      });
    });
  },

  /**
   * Add shake effect for validation errors
   */
  shakeOnError: (input: HTMLElement): void => {
    anime({
      targets: input,
      translateX: [
        { value: -10, duration: 100 },
        { value: 10, duration: 100 },
        { value: -10, duration: 100 },
        { value: 0, duration: 100 },
      ],
      borderColor: ['#ef4444', '#ef4444'],
      easing: 'easeInOutQuad',
    });
  },

  /**
   * Add success animation
   */
  successAnimation: (input: HTMLElement): void => {
    anime({
      targets: input,
      borderColor: ['#10b981', '#10b981'],
      scale: [1, 1.02, 1],
      duration: 600,
      easing: 'easeOutElastic(1, .6)',
    });
  },

  /**
   * Label float animation
   */
  floatingLabel: (input: HTMLInputElement, label: HTMLElement): void => {
    const checkValue = () => {
      if (input.value || document.activeElement === input) {
        anime({
          targets: label,
          translateY: -25,
          scale: 0.85,
          color: '#7c3aed',
          duration: 200,
          easing: 'easeOutQuad',
        });
      } else {
        anime({
          targets: label,
          translateY: 0,
          scale: 1,
          color: '#64748b',
          duration: 200,
          easing: 'easeOutQuad',
        });
      }
    };

    input.addEventListener('focus', checkValue);
    input.addEventListener('blur', checkValue);
    input.addEventListener('input', checkValue);
  },
};

/**
 * Icon Interactions
 */
export const iconInteractions = {
  /**
   * Add bounce effect
   */
  bounce: (icon: HTMLElement): void => {
    anime({
      targets: icon,
      translateY: [0, -10, 0],
      duration: 600,
      easing: 'easeOutElastic(1, .6)',
    });
  },

  /**
   * Add spin effect
   */
  spin: (icon: HTMLElement, duration: number = 600): void => {
    anime({
      targets: icon,
      rotate: '1turn',
      duration,
      easing: 'easeOutExpo',
    });
  },

  /**
   * Add heartbeat effect
   */
  heartbeat: (icon: HTMLElement): void => {
    anime({
      targets: icon,
      scale: [1, 1.2, 1, 1.1, 1],
      duration: 1000,
      easing: 'easeInOutQuad',
    });
  },

  /**
   * Add wiggle effect
   */
  wiggle: (icon: HTMLElement): void => {
    anime({
      targets: icon,
      rotate: [0, -10, 10, -10, 10, 0],
      duration: 800,
      easing: 'easeInOutQuad',
    });
  },

  /**
   * Add hover rotate effect
   */
  addHoverRotate: (icon: HTMLElement): void => {
    icon.addEventListener('mouseenter', () => {
      anime({
        targets: icon,
        rotate: '360deg',
        duration: 600,
        easing: 'easeOutExpo',
      });
    });
  },
};

/**
 * Loading Indicators
 */
export const loadingIndicators = {
  /**
   * Spinning loader
   */
  spinner: (element: HTMLElement): anime.AnimeInstance => {
    return anime({
      targets: element,
      rotate: '1turn',
      duration: 1000,
      easing: 'linear',
      loop: true,
    });
  },

  /**
   * Pulsing dots
   */
  pulsingDots: (dots: HTMLElement[]): anime.AnimeInstance => {
    return anime({
      targets: dots,
      scale: [1, 1.5, 1],
      opacity: [1, 0.5, 1],
      duration: 1000,
      delay: anime.stagger(200),
      easing: 'easeInOutQuad',
      loop: true,
    });
  },

  /**
   * Wave animation
   */
  wave: (elements: HTMLElement[]): anime.AnimeInstance => {
    return anime({
      targets: elements,
      translateY: [0, -15, 0],
      duration: 1000,
      delay: anime.stagger(100),
      easing: 'easeInOutSine',
      loop: true,
    });
  },

  /**
   * Progress bar
   */
  progressBar: (bar: HTMLElement, progress: number): void => {
    anime({
      targets: bar,
      width: `${progress}%`,
      duration: 1000,
      easing: 'easeOutExpo',
    });
  },

  /**
   * Skeleton loading shimmer
   */
  shimmer: (element: HTMLElement): anime.AnimeInstance => {
    return anime({
      targets: element,
      backgroundPosition: ['-200% 0', '200% 0'],
      duration: 2000,
      easing: 'linear',
      loop: true,
    });
  },
};

/**
 * Navigation Interactions
 */
export const navigationInteractions = {
  /**
   * Hamburger menu animation
   */
  toggleHamburger: (lines: HTMLElement[], isOpen: boolean): void => {
    if (isOpen) {
      // Close animation
      anime({
        targets: lines[0],
        rotate: 45,
        translateY: 8,
        duration: 300,
        easing: 'easeOutCubic',
      });

      anime({
        targets: lines[1],
        opacity: 0,
        duration: 200,
        easing: 'easeOutCubic',
      });

      anime({
        targets: lines[2],
        rotate: -45,
        translateY: -8,
        duration: 300,
        easing: 'easeOutCubic',
      });
    } else {
      // Open animation
      anime({
        targets: lines[0],
        rotate: 0,
        translateY: 0,
        duration: 300,
        easing: 'easeOutCubic',
      });

      anime({
        targets: lines[1],
        opacity: 1,
        duration: 200,
        delay: 100,
        easing: 'easeOutCubic',
      });

      anime({
        targets: lines[2],
        rotate: 0,
        translateY: 0,
        duration: 300,
        easing: 'easeOutCubic',
      });
    }
  },

  /**
   * Menu slide in/out
   */
  slideMenu: (menu: HTMLElement, isOpen: boolean): void => {
    anime({
      targets: menu,
      translateX: isOpen ? ['-100%', 0] : [0, '-100%'],
      duration: 400,
      easing: 'easeOutExpo',
    });
  },

  /**
   * Dropdown animation
   */
  dropdownToggle: (dropdown: HTMLElement, isOpen: boolean): void => {
    if (isOpen) {
      dropdown.style.display = 'block';
      anime({
        targets: dropdown,
        opacity: [0, 1],
        translateY: [-10, 0],
        duration: 200,
        easing: 'easeOutCubic',
      });
    } else {
      anime({
        targets: dropdown,
        opacity: [1, 0],
        translateY: [0, -10],
        duration: 200,
        easing: 'easeOutCubic',
        complete: () => {
          dropdown.style.display = 'none';
        },
      });
    }
  },

  /**
   * Nav underline animation
   */
  underlineAnimation: (underline: HTMLElement, target: HTMLElement): void => {
    const targetRect = target.getBoundingClientRect();
    const parentRect = target.parentElement?.getBoundingClientRect();

    if (!parentRect) return;

    anime({
      targets: underline,
      left: targetRect.left - parentRect.left,
      width: targetRect.width,
      duration: 300,
      easing: 'easeOutCubic',
    });
  },
};

/**
 * Notification Interactions
 */
export const notificationInteractions = {
  /**
   * Toast slide in
   */
  toastSlideIn: (toast: HTMLElement, position: 'top' | 'bottom' = 'top'): void => {
    const direction = position === 'top' ? -100 : 100;

    anime({
      targets: toast,
      opacity: [0, 1],
      translateY: [direction, 0],
      duration: 400,
      easing: 'easeOutExpo',
    });
  },

  /**
   * Toast slide out
   */
  toastSlideOut: (toast: HTMLElement, position: 'top' | 'bottom' = 'top'): void => {
    const direction = position === 'top' ? -100 : 100;

    anime({
      targets: toast,
      opacity: [1, 0],
      translateY: [0, direction],
      duration: 300,
      easing: 'easeInExpo',
      complete: () => toast.remove(),
    });
  },

  /**
   * Badge pulse
   */
  badgePulse: (badge: HTMLElement): anime.AnimeInstance => {
    return anime({
      targets: badge,
      scale: [1, 1.2, 1],
      duration: 1000,
      easing: 'easeInOutQuad',
      loop: true,
    });
  },
};

/**
 * Scroll Interactions
 */
export const scrollInteractions = {
  /**
   * Smooth scroll to element
   */
  smoothScrollTo: (target: HTMLElement | string, offset: number = 0): void => {
    const element =
      typeof target === 'string' ? document.querySelector<HTMLElement>(target) : target;

    if (!element) return;

    const targetPosition = element.getBoundingClientRect().top + window.scrollY - offset;

    anime({
      targets: { scrollY: window.scrollY },
      scrollY: targetPosition,
      duration: 800,
      easing: 'easeInOutCubic',
      update: function (anim) {
        window.scrollTo(0, (anim.animations[0].currentValue as number) || 0);
      },
    });
  },

  /**
   * Scroll to top button fade in/out
   */
  scrollTopButton: (button: HTMLElement, threshold: number = 300): void => {
    const handleScroll = () => {
      if (window.scrollY > threshold) {
        button.style.display = 'block';
        anime({
          targets: button,
          opacity: [0, 1],
          scale: [0.8, 1],
          duration: 300,
          easing: 'easeOutCubic',
        });
      } else {
        anime({
          targets: button,
          opacity: [1, 0],
          scale: [1, 0.8],
          duration: 300,
          easing: 'easeOutCubic',
          complete: () => {
            button.style.display = 'none';
          },
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
  },
};

/**
 * Initialize all micro-interactions for common elements
 */
export const initializeMicroInteractions = (): void => {
  // Initialize button interactions
  document.querySelectorAll<HTMLElement>('[data-hover="scale"]').forEach((button) => {
    buttonInteractions.addHoverEffect(button);
  });

  document.querySelectorAll<HTMLElement>('[data-ripple="true"]').forEach((button) => {
    buttonInteractions.addRippleEffect(button);
  });

  // Initialize card interactions
  document.querySelectorAll<HTMLElement>('[data-card="lift"]').forEach((card) => {
    cardInteractions.addLiftEffect(card);
  });

  document.querySelectorAll<HTMLElement>('[data-card="tilt"]').forEach((card) => {
    cardInteractions.addTiltEffect(card);
  });

  // Initialize icon interactions
  document.querySelectorAll<HTMLElement>('[data-icon="hover-rotate"]').forEach((icon) => {
    iconInteractions.addHoverRotate(icon);
  });
};

export default {
  buttonInteractions,
  cardInteractions,
  inputInteractions,
  iconInteractions,
  loadingIndicators,
  navigationInteractions,
  notificationInteractions,
  scrollInteractions,
  initializeMicroInteractions,
};
