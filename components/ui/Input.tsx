'use client'

import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  icon?: React.ReactNode
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, icon, type = 'text', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            type={type}
            className={cn(
              'w-full px-4 py-3 rounded-xl',
              'bg-[var(--color-bg-secondary)]',
              'border border-[var(--color-border)]',
              'text-white placeholder:text-[var(--color-text-muted)]',
              'transition-all duration-200',
              'focus:outline-none focus:border-[var(--color-accent-cyan)]',
              'focus:shadow-[0_0_0_3px_var(--color-accent-cyan-glow)]',
              'hover:border-[var(--color-border-hover)]',
              icon && 'pl-10',
              error && 'border-red-500 focus:border-red-500 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.2)]',
              className
            )}
            {...props}
          />
        </div>
        {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
      </div>
    )
  }
)

Input.displayName = 'Input'

