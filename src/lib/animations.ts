import { type Variants, type Transition } from 'framer-motion';

/**
 * Shared transition defaults for the X10THINK design system.
 * All animations should feel slow, smooth, and intentional.
 */

export const defaultTransition: Transition = {
  duration: 1,
  ease: [0.25, 0.1, 0.25, 1], // cubic-bezier for smooth, natural motion
};

export const slowTransition: Transition = {
  duration: 1.2,
  ease: [0.25, 0.1, 0.25, 1],
};

export const fastTransition: Transition = {
  duration: 0.8,
  ease: [0.25, 0.1, 0.25, 1],
};

export const pageTransition: Transition = {
  duration: 0.4,
  ease: [0.25, 0.1, 0.25, 1],
};

/**
 * Fade Up - Elements fade in and slide up
 * opacity: 0 → 1
 * translateY: 30px → 0
 */
export const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

/**
 * Fade In - Simple opacity transition
 */
export const fadeInVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: defaultTransition,
  },
};

/**
 * Reveal - Clip path reveal animation
 */
export const revealVariants: Variants = {
  hidden: {
    clipPath: 'inset(0 100% 0 0)',
  },
  visible: {
    clipPath: 'inset(0 0% 0 0)',
    transition: {
      duration: 1.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

/**
 * Image Zoom - Subtle scale on image load
 * scale: 1.05 → 1
 */
export const imageZoomVariants: Variants = {
  hidden: {
    scale: 1.05,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

/**
 * Parallax - Very subtle parallax movement (max 5%)
 */
export const parallaxVariants: Variants = {
  hidden: {
    y: 0,
  },
  visible: {
    y: 0,
    transition: defaultTransition,
  },
};

/**
 * Stagger - Container for staggered children
 */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

/**
 * Text Reveal - Characters animate in sequence
 */
export const textRevealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

/**
 * Scale Hover - Subtle scale on hover (1.01)
 */
export const scaleHoverVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.01, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

/**
 * Magnetic Button - Attracts cursor on hover
 */
export const magneticVariants = {
  rest: { x: 0, y: 0 },
  hover: (distance: { x: number; y: number }) => ({
    x: distance.x * 0.3,
    y: distance.y * 0.3,
    transition: { duration: 0.4, ease: 'easeOut' },
  }),
};

/**
 * Page transition variants
 */
export const pageTransitionVariants: Variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: pageTransition,
  },
  exit: {
    opacity: 0,
    transition: pageTransition,
  },
};

/**
 * Loading screen variants
 */
export const loadingVariants: Variants = {
  initial: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const loadingLogoVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};