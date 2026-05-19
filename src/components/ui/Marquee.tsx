import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface MarqueeProps {
  items: ReactNode[]
  speed?: number
  direction?: 'left' | 'right'
  className?: string
}

export function Marquee({ items, speed = 40, direction = 'left', className = '' }: MarqueeProps) {
  const loop = [...items, ...items]

  return (
    <div className={`overflow-hidden relative ${className}`}>
      <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-bg to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-bg to-transparent pointer-events-none" />

      <motion.div
        className="flex gap-8 whitespace-nowrap py-3"
        animate={{ x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'] }}
        transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
      >
        {loop.map((item, i) => (
          <div key={i} className="flex items-center gap-2.5 flex-shrink-0">
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  )
}
