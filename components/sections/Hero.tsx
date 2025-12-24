'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Shield, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui'
import type { Locale } from '@/lib/i18n/config'
import type { Dictionary } from '@/lib/i18n/getDictionary'

interface HeroProps {
  locale: Locale
  dictionary: Dictionary
}

const heroSlides = [
  {
    image: '/images/hero-1.webp',
    titleKey: 'surveillance',
  },
  {
    image: '/images/hero-2.webp',
    titleKey: 'alarm',
  },
  {
    image: '/images/hero-3.webp',
    titleKey: 'access',
  },
]

export function Hero({ locale, dictionary }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const t = dictionary.home.hero

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={heroSlides[currentSlide].image}
            alt="Security systems"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg-primary)] via-[var(--color-bg-primary)]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-primary)] via-transparent to-[var(--color-bg-primary)]/50" />
        </motion.div>
      </AnimatePresence>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      {/* Animated Glow */}
      <div className="absolute top-1/4 left-1/4 w-74 h-74 bg-[var(--color-accent-cyan)] rounded-full blur-[110px] opacity-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-74 h-74 bg-[var(--color-accent-red)] rounded-full blur-[110px] opacity-10 animate-pulse delay-1000" />

      {/* Content */}
      <div className="container-custom relative z-10 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-[var(--color-bg-card)]/80 border border-[var(--color-border)] backdrop-blur-sm"
          >
            <Shield className="w-4 h-4 text-[var(--color-accent-cyan)]" />
            <span className="text-sm text-[var(--color-text-secondary)]">{t.badge}</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-xl mb-6"
          >
            <span className="text-white">{t.title.split(' ').slice(0, -1).join(' ')}</span>{' '}
            <span className="text-gradient">{t.title.split(' ').slice(-1)}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-[var(--color-text-secondary)] mb-10 max-w-2xl leading-relaxed"
          >
            {t.subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Link href={`/${locale}/contact`}>
              <Button variant="primary" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                {t.cta1}
              </Button>
            </Link>
            <Link href={`/${locale}/servicii`}>
              <Button variant="secondary" size="lg">
                {t.cta2}
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Slide Navigation */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>

          <div className="flex gap-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={cn(
                  'w-2 h-2 rounded-full transition-all duration-300',
                  index === currentSlide
                    ? 'w-8 bg-[var(--color-accent-cyan)]'
                    : 'bg-white/30 hover:bg-white/50'
                )}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 rounded-full bg-[var(--color-accent-cyan)]"
          />
        </div>
      </motion.div>
    </section>
  )
}

