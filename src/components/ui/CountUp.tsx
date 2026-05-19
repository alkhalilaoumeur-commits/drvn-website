import { useEffect, useRef, useState } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'

interface CountUpProps {
  to:       number
  duration?: number
  suffix?:   string
  prefix?:   string
  className?: string
  format?:   (n: number) => string
}

export function CountUp({ to, duration = 1.6, suffix = '', prefix = '', className, format }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  const [display, setDisplay] = useState('0')
  const mv = useMotionValue(0)
  const sp = useSpring(mv, { duration: duration * 1000, bounce: 0 })

  useEffect(() => {
    if (inView) mv.set(to)
  }, [inView, to, mv])

  useEffect(() => {
    const unsub = sp.on('change', (v) => {
      const n = Math.round(v)
      setDisplay(format ? format(n) : String(n))
    })
    return unsub
  }, [sp, format])

  return (
    <span ref={ref} className={className}>
      {prefix}{display}{suffix}
    </span>
  )
}
