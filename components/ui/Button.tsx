'use client'

import { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { motion, HTMLMotionProps } from 'framer-motion'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'ref'> {
  variant?: ButtonVariant
  size?: ButtonSize
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  children: React.ReactNode
}

const variants: Record<ButtonVariant, string> = {
  primary: `
    bg-gradient-to-r from-red-600 to-red-700
    text-white font-semibold
    shadow-lg shadow-red-600/20
    hover:shadow-xl hover:shadow-red-600/30
    hover:from-red-500 hover:to-red-600
    active:scale-[0.98]
  `,
  secondary: `
    bg-[var(--color-bg-card)]
    text-white font-medium
    border border-[var(--color-border)]
    hover:border-[var(--color-accent-cyan)]
    hover:text-[var(--color-accent-cyan)]
    hover:shadow-lg hover:shadow-cyan-500/10
  `,
  ghost: `
    bg-transparent
    text-[var(--color-accent-cyan)]
    hover:bg-cyan-500/10
  `,
  outline: `
    bg-transparent
    text-white font-medium
    border border-[var(--color-border)]
    hover:border-[var(--color-accent-cyan)]
    hover:bg-cyan-500/5
  `,
}

const sizes: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-6 py-3 text-base gap-2',
  lg: 'px-8 py-4 text-lg gap-2.5',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: disabled || isLoading ? 1 : 1.02 }}
        whileTap={{ scale: disabled || isLoading ? 1 : 0.98 }}
        className={cn(
          'inline-flex items-center justify-center rounded-xl font-medium',
          'transition-all duration-300 ease-out',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-primary)]',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          variants[variant],
          sizes[size],
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <svg
            className="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        ) : (
          <>
            {leftIcon}
            {children}
            {rightIcon}
          </>
        )}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'

