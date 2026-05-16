import type { Variants } from 'framer-motion'

export const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

export const viewport = { once: true, margin: '-80px' }

export const fadeUp: Variants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
}

export const stagger: Variants = {
  animate: { transition: { staggerChildren: 0.06 } },
}

export const wordFadeUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
}

export const pageFade: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.25, ease } },
  exit:    { opacity: 0, transition: { duration: 0.2 } },
}
