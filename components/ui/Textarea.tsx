'use client'

import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={cn(
            'w-full px-4 py-3 rounded-xl resize-y min-h-[120px]',
            'bg-[var(--color-bg-secondary)]',
            'border border-[var(--color-border)]',
            'text-white placeholder:text-[var(--color-text-muted)]',
            'transition-all duration-200',
            'focus:outline-none focus:border-[var(--color-accent-cyan)]',
            'focus:shadow-[0_0_0_3px_var(--color-accent-cyan-glow)]',
            'hover:border-[var(--color-border-hover)]',
            error && 'border-red-500 focus:border-red-500',
            className
          )}
          {...props}
        />
        {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'

