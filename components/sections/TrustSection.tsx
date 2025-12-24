'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui'
import type { Locale } from '@/lib/i18n/config'
import type { Dictionary } from '@/lib/i18n/getDictionary'

interface TrustSectionProps {
  locale: Locale
  dictionary: Dictionary
}

function AnimatedCounter({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      
      setCount(Math.floor(progress * end))
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [isInView, end, duration])

  return <span ref={ref}>{count}</span>
}

export function TrustSection({ locale, dictionary }: TrustSectionProps) {
  const t = dictionary.home.trust

  const stats = [
    { value: 15, suffix: '+', label: t.stats.years },
    { value: 500, suffix: '+', label: t.stats.clients },
    { value: 1000, suffix: '+', label: t.stats.projects },
  ]

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--color-bg-primary)]" />
      
      {/* Animated Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-accent-red)] rounded-full blur-[300px] opacity-5" />

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-lg mb-6">
              <span className="text-white">{t.title.split(' ').slice(0, -1).join(' ')}</span>{' '}
              <span className="text-gradient-red">{t.title.split(' ').slice(-1)}</span>
            </h2>
            <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-8">
              {t.description}
            </p>
            <Link href={`/${locale}/contact`}>
              <Button variant="primary" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                {t.cta}
              </Button>
            </Link>
          </motion.div>

          {/* Right Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-3 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)]"
              >
                <div className="text-4xl md:text-5xl font-bold text-[var(--color-accent-cyan)] mb-2 font-heading">
                  <AnimatedCounter end={stat.value} />
                  {stat.suffix}
                </div>
                <div className="text-sm text-[var(--color-text-secondary)]">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

