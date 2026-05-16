import { cn } from '../lib/cn'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
}

export function Container({ children, className = '', as: As = 'div' }: ContainerProps) {
  return (
    <As className={cn('max-w-site mx-auto px-6 md:px-10 lg:px-16', className)}>
      {children}
    </As>
  )
}
