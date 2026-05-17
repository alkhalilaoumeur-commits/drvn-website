import { useRef, useState, useEffect } from 'react'
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion'

interface ContainerScrollProps {
  titleComponent: React.ReactNode
  children: React.ReactNode
}

export function ContainerScroll({ titleComponent, children }: ContainerScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const rotate = useTransform(scrollYProgress, [0, 1], [18, 0])
  const scale  = useTransform(scrollYProgress, [0, 1], isMobile ? [0.7, 0.95] : [1.04, 1])
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -60])

  return (
    <div
      ref={containerRef}
      className="h-[55rem] md:h-[72rem] flex items-center justify-center relative p-4 md:p-16"
    >
      <div className="py-8 md:py-32 w-full relative" style={{ perspective: '1000px' }}>
        {/* Title slides up as you scroll */}
        <motion.div
          style={{ translateY }}
          className="max-w-5xl mx-auto text-center mb-8 md:mb-12"
        >
          {titleComponent}
        </motion.div>

        {/* Card rotates from 3D perspective to flat */}
        <motion.div
          style={{
            rotateX: rotate,
            scale,
            boxShadow: '0 0 #0000001a, 0 9px 20px #00000012, 0 37px 37px #0000000e, 0 84px 50px #00000008, 0 149px 60px #00000003',
          }}
          className="max-w-5xl -mt-8 mx-auto w-full border border-border rounded-2xl overflow-hidden"
        >
          {children}
        </motion.div>
      </div>
    </div>
  )
}

interface CardProps {
  rotate: MotionValue<number>
  scale: MotionValue<number>
  translate: MotionValue<number>
  children: React.ReactNode
}

export function Card({ rotate, scale, children }: Omit<CardProps, 'translate'>) {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow: '0 0 #0000001a, 0 9px 20px #00000012, 0 37px 37px #0000000e',
      }}
      className="max-w-5xl -mt-8 mx-auto w-full border border-border rounded-2xl overflow-hidden"
    >
      {children}
    </motion.div>
  )
}
