// ============================================================
// Framer-Motion Animation Presets — drvn
// Eine Sprache für die ganze Seite: warm-präzise, kein Bounce.
// ============================================================

import type { Variants } from 'framer-motion';

// Standard-Easing: stark angefederter Out-Curve (Vercel-Style)
export const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

// ── Standard-Viewport für whileInView
export const viewport = { once: true, margin: '-80px' };

// ── Fade Up: das Brot-und-Butter
export const fadeUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easeOut } },
};

// ── Größerer Fade Up für Hero-Elemente
export const fadeUpLarge: Variants = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

// ── Simple Fade In
export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5, ease: easeOut } },
};

// ── Slide-In von links
export const slideInLeft: Variants = {
  initial: { opacity: 0, x: -28 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.55, ease: easeOut } },
};

// ── Slide-In von rechts
export const slideInRight: Variants = {
  initial: { opacity: 0, x: 28 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.55, ease: easeOut } },
};

// ── Scale-Up: für Cards mit Pop
export const scaleUp: Variants = {
  initial: { opacity: 0, scale: 0.96 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: easeOut } },
};

// ── Stagger Container (für Grid-Items, Word-Reveal)
export const stagger: Variants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

// ── Schneller Stagger (für Wort-Reveals in Headlines)
export const staggerFast: Variants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.045 } },
};

// ── Wort-Reveal Item (Pair mit staggerFast)
export const wordReveal: Variants = {
  initial: { opacity: 0, y: 28, filter: 'blur(6px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.65, ease: easeOut } },
};

// ── Hover-Bewegung für Cards
export const cardHover = {
  whileHover: { y: -3 },
  transition: { duration: 0.25, ease: easeOut },
};

// ── Page-Transition (in AnimatePresence)
export const pageTransition: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.35, ease: easeOut } },
  exit: { opacity: 0, transition: { duration: 0.2, ease: easeOut } },
};
