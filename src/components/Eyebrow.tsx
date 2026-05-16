import { cn } from '../lib/cn'

interface EyebrowProps {
  children: React.ReactNode
  number?: string
  className?: string
}

export function Eyebrow({ children, number, className }: EyebrowProps) {
  return (
    <div className={cn('flex items-center gap-3 mb-6', className)}>
      {number && (
        <span className="font-mono text-xs text-muted tabular-nums">{number}</span>
      )}
      <span className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
        {children}
      </span>
    </div>
  )
}
