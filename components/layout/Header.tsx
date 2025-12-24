'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui'
import { LanguageSwitcher } from './LanguageSwitcher'
import type { Locale } from '@/lib/i18n/config'
import type { Dictionary } from '@/lib/i18n/getDictionary'

interface HeaderProps {
  locale: Locale
  dictionary: Dictionary
}

export function Header({ locale, dictionary }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  const t = dictionary.common.nav

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  const navItems = [
    { href: `/${locale}`, label: t.home },
    { href: `/${locale}/despre-noi`, label: t.about },
    {
      href: `/${locale}/servicii`,
      label: t.services,
      children: [
        { href: `/${locale}/servicii/supraveghere-video`, label: 'Supraveghere Video' },
        { href: `/${locale}/servicii/sisteme-antiefractie`, label: 'Sisteme Antiefracție' },
        { href: `/${locale}/servicii/retele-date`, label: 'Rețele Date' },
        { href: `/${locale}/servicii/control-acces`, label: 'Control Acces' },
        { href: `/${locale}/servicii/interfoane`, label: 'Interfoane' },
        { href: `/${locale}/servicii/detectie-incendiu`, label: 'Detecție Incendiu' },
      ],
    },
    { href: `/${locale}/referinte`, label: t.references },
    { href: `/${locale}/blog`, label: t.blog },
    { href: `/${locale}/ebook`, label: t.ebook },
    { href: `/${locale}/cariera`, label: t.career },
    { href: `/${locale}/contact`, label: t.contact },
  ]

  const isActive = (href: string) => {
    if (href === `/${locale}`) {
      return pathname === href
    }
    return pathname.startsWith(href)
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50',
          'transition-all duration-300',
          isScrolled
            ? 'bg-[var(--color-bg-primary)]/90 backdrop-blur-xl border-b border-[var(--color-border)]'
            : 'bg-transparent'
        )}
      >
        <div className="container-custom">
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href={`/${locale}`} className="relative z-10 flex-shrink-0">
              <div className="bg-white/95 rounded-lg px-3 py-1.5">
                <Image
                  src="/logo.webp"
                  alt="Emamut Security Solutions"
                  width={160}
                  height={50}
                  className="h-10 w-auto"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.href)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      'flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg',
                      'transition-colors duration-200',
                      isActive(item.href)
                        ? 'text-[var(--color-accent-cyan)]'
                        : 'text-[var(--color-text-secondary)] hover:text-white hover:bg-white/5'
                    )}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown
                        className={cn(
                          'w-4 h-4 transition-transform duration-200',
                          activeDropdown === item.href && 'rotate-180'
                        )}
                      />
                    )}
                  </Link>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.children && activeDropdown === item.href && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.15 }}
                        className={cn(
                          'absolute top-full left-0 mt-1 py-2 min-w-[220px]',
                          'bg-[var(--color-bg-card)] border border-[var(--color-border)]',
                          'rounded-xl shadow-xl shadow-black/30',
                          'overflow-hidden'
                        )}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={cn(
                              'block px-4 py-2.5 text-sm',
                              'transition-colors duration-150',
                              isActive(child.href)
                                ? 'bg-[var(--color-accent-cyan)]/10 text-[var(--color-accent-cyan)]'
                                : 'text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-elevated)] hover:text-white'
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-3">
              <LanguageSwitcher currentLocale={locale} />

              <Link href={`/${locale}/contact`} className="hidden md:block">
                <Button variant="primary" size="sm" leftIcon={<Phone className="w-4 h-4" />}>
                  {dictionary.common.cta.requestQuote}
                </Button>
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className={cn(
                'absolute top-0 right-0 bottom-0 w-full max-w-sm',
                'bg-[var(--color-bg-primary)] border-l border-[var(--color-border)]',
                'pt-24 px-6 pb-6 overflow-y-auto'
              )}
            >
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <div key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        'block px-4 py-3 rounded-lg text-base font-medium',
                        'transition-colors duration-200',
                        isActive(item.href)
                          ? 'bg-[var(--color-accent-cyan)]/10 text-[var(--color-accent-cyan)]'
                          : 'text-[var(--color-text-secondary)] hover:bg-white/5 hover:text-white'
                      )}
                    >
                      {item.label}
                    </Link>

                    {item.children && (
                      <div className="ml-4 mt-1 flex flex-col gap-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={cn(
                              'block px-4 py-2 rounded-lg text-sm',
                              'transition-colors duration-200',
                              isActive(child.href)
                                ? 'text-[var(--color-accent-cyan)]'
                                : 'text-[var(--color-text-muted)] hover:text-white'
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-[var(--color-border)]">
                <Link href={`/${locale}/contact`} className="block">
                  <Button variant="primary" className="w-full" leftIcon={<Phone className="w-4 h-4" />}>
                    {dictionary.common.cta.requestQuote}
                  </Button>
                </Link>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

