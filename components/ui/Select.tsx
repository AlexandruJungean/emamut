'use client'

import { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'

interface SelectOption {
  value: string
  label: string
}

interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'children'> {
  label?: string
  error?: string
  options: SelectOption[]
  placeholder?: string
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, options, placeholder, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            className={cn(
              'w-full px-4 py-3 rounded-xl appearance-none cursor-pointer',
              'bg-[var(--color-bg-secondary)]',
              'border border-[var(--color-border)]',
              'text-white',
              'transition-all duration-200',
              'focus:outline-none focus:border-[var(--color-accent-cyan)]',
              'focus:shadow-[0_0_0_3px_var(--color-accent-cyan-glow)]',
              'hover:border-[var(--color-border-hover)]',
              error && 'border-red-500 focus:border-red-500',
              className
            )}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-text-muted)] pointer-events-none" />
        </div>
        {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
      </div>
    )
  }
)

Select.displayName = 'Select'

