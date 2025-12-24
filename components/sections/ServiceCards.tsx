'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Camera,
  ShieldAlert,
  Wifi,
  Fingerprint,
  Smartphone,
  Flame,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Locale } from '@/lib/i18n/config'
import type { Dictionary } from '@/lib/i18n/getDictionary'

interface ServiceCardsProps {
  locale: Locale
  dictionary: Dictionary
}

const services = [
  {
    key: 'surveillance',
    icon: Camera,
    href: '/servicii/supraveghere-video',
    color: 'cyan',
  },
  {
    key: 'alarm',
    icon: ShieldAlert,
    href: '/servicii/sisteme-antiefractie',
    color: 'red',
  },
  {
    key: 'network',
    icon: Wifi,
    href: '/servicii/retele-date',
    color: 'cyan',
  },
  {
    key: 'access',
    icon: Fingerprint,
    href: '/servicii/control-acces',
    color: 'red',
  },
  {
    key: 'intercom',
    icon: Smartphone,
    href: '/servicii/interfoane',
    color: 'cyan',
  },
  {
    key: 'fire',
    icon: Flame,
    href: '/servicii/detectie-incendiu',
    color: 'red',
  },
]

export function ServiceCards({ locale, dictionary }: ServiceCardsProps) {
  const t = dictionary.home.services

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--color-bg-secondary)]" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--color-accent-cyan)] rounded-full blur-[200px] opacity-5" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--color-accent-red)] rounded-full blur-[200px] opacity-5" />

      <div className="container-custom relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="heading-lg mb-4">{t.title}</h2>
          <p className="text-[var(--color-text-secondary)] text-lg">{t.subtitle}</p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            const serviceT = t[service.key as keyof typeof t] as { title: string; description: string }

            return (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={`/${locale}${service.href}`}
                  className={cn(
                    'group block p-8 rounded-2xl',
                    'bg-[var(--color-bg-card)] border border-[var(--color-border)]',
                    'hover:border-transparent',
                    'transition-all duration-500',
                    'hover:shadow-2xl hover:-translate-y-2',
                    service.color === 'cyan'
                      ? 'hover:shadow-cyan-500/20'
                      : 'hover:shadow-red-500/20'
                  )}
                >
                  {/* Gradient border on hover */}
                  <div
                    className={cn(
                      'absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500',
                      'bg-gradient-to-br p-[1px]',
                      service.color === 'cyan'
                        ? 'from-cyan-500/50 via-transparent to-cyan-500/50'
                        : 'from-red-500/50 via-transparent to-red-500/50'
                    )}
                    style={{ zIndex: -1 }}
                  />

                  {/* Icon */}
                  <div
                    className={cn(
                      'w-14 h-14 rounded-xl flex items-center justify-center mb-6',
                      'transition-all duration-300',
                      service.color === 'cyan'
                        ? 'bg-cyan-500/10 text-[var(--color-accent-cyan)] group-hover:bg-cyan-500/20 group-hover:shadow-lg group-hover:shadow-cyan-500/20'
                        : 'bg-red-500/10 text-[var(--color-accent-red)] group-hover:bg-red-500/20 group-hover:shadow-lg group-hover:shadow-red-500/20'
                    )}
                  >
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[var(--color-accent-cyan)] transition-colors">
                    {serviceT.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed">
                    {serviceT.description}
                  </p>

                  {/* Arrow */}
                  <div
                    className={cn(
                      'mt-6 flex items-center gap-2 text-sm font-medium',
                      'opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0',
                      'transition-all duration-300',
                      service.color === 'cyan'
                        ? 'text-[var(--color-accent-cyan)]'
                        : 'text-[var(--color-accent-red)]'
                    )}
                  >
                    {dictionary.common.cta.learnMore}
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

