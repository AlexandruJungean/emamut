'use client'

import { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { motion, HTMLMotionProps } from 'framer-motion'

interface CardProps extends Omit<HTMLMotionProps<'div'>, 'ref'> {
  variant?: 'default' | 'glow' | 'glass'
  hover?: boolean
  children: React.ReactNode
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', hover = true, children, ...props }, ref) => {
    const variants = {
      default: 'bg-[var(--color-bg-card)] border-[var(--color-border)]',
      glow: 'bg-[var(--color-bg-card)] border-[var(--color-border)] hover:border-[var(--color-accent-cyan)] hover:shadow-[var(--shadow-glow-cyan)]',
      glass: 'glass',
    }

    return (
      <motion.div
        ref={ref}
        whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : undefined}
        className={cn(
          'rounded-xl border p-6',
          'transition-all duration-300',
          variants[variant],
          hover && 'hover:bg-[var(--color-bg-card-hover)]',
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

Card.displayName = 'Card'

interface CardHeaderProps {
  className?: string
  children: React.ReactNode
}

export const CardHeader = ({ className, children }: CardHeaderProps) => (
  <div className={cn('mb-4', className)}>{children}</div>
)

interface CardTitleProps {
  className?: string
  children: React.ReactNode
}

export const CardTitle = ({ className, children }: CardTitleProps) => (
  <h3 className={cn('text-xl font-semibold text-white', className)}>{children}</h3>
)

interface CardDescriptionProps {
  className?: string
  children: React.ReactNode
}

export const CardDescription = ({ className, children }: CardDescriptionProps) => (
  <p className={cn('text-[var(--color-text-secondary)] mt-2', className)}>{children}</p>
)

interface CardContentProps {
  className?: string
  children: React.ReactNode
}

export const CardContent = ({ className, children }: CardContentProps) => (
  <div className={cn('', className)}>{children}</div>
)

interface CardFooterProps {
  className?: string
  children: React.ReactNode
}

export const CardFooter = ({ className, children }: CardFooterProps) => (
  <div className={cn('mt-4 pt-4 border-t border-[var(--color-border)]', className)}>
    {children}
  </div>
)

