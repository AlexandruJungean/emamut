'use client'

import { useState, useRef, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { locales, localeNames, localeCodes, type Locale } from '@/lib/i18n/config'
import { FlagIcon } from '@/components/ui/FlagIcon'

interface LanguageSwitcherProps {
  currentLocale: Locale
}

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const router = useRouter()

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLanguageChange = (locale: Locale) => {
    // Replace the current locale in the path with the new one
    const segments = pathname.split('/')
    segments[1] = locale
    const newPath = segments.join('/')
    
    // Store preference in localStorage (cookies don't work without middleware)
    if (typeof window !== 'undefined') {
      localStorage.setItem('NEXT_LOCALE', locale)
    }
    
    router.push(newPath)
    setIsOpen(false)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'flex items-center gap-2 px-3 py-2 rounded-lg',
          'bg-[var(--color-bg-card)] border border-[var(--color-border)]',
          'hover:border-[var(--color-border-hover)]',
          'transition-all duration-200',
          'text-sm font-medium'
        )}
      >
        <FlagIcon locale={currentLocale} className="w-6 h-4 rounded-sm" />
        <span className="text-[var(--color-text-secondary)] font-semibold">
          {localeCodes[currentLocale]}
        </span>
        <ChevronDown
          className={cn(
            'w-4 h-4 text-[var(--color-text-muted)] transition-transform duration-200',
            isOpen && 'rotate-180'
          )}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className={cn(
              'absolute right-0 mt-2 py-1 min-w-[140px]',
              'bg-[var(--color-bg-card)] border border-[var(--color-border)]',
              'rounded-xl shadow-xl shadow-black/20',
              'overflow-hidden z-50'
            )}
          >
            {locales.map((locale) => (
              <button
                key={locale}
                onClick={() => handleLanguageChange(locale)}
                className={cn(
                  'w-full flex items-center gap-3 px-4 py-2.5',
                  'text-left text-sm',
                  'transition-colors duration-150',
                  locale === currentLocale
                    ? 'bg-[var(--color-accent-cyan)]/10 text-[var(--color-accent-cyan)]'
                    : 'text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-elevated)] hover:text-white'
                )}
              >
                <FlagIcon locale={locale} className="w-6 h-4 rounded-sm" />
                <span>{localeNames[locale]}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
