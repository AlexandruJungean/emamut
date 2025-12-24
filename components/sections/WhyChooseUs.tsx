'use client'

import { motion } from 'framer-motion'
import { Headphones, Award, Users } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Locale } from '@/lib/i18n/config'
import type { Dictionary } from '@/lib/i18n/getDictionary'

interface WhyChooseUsProps {
  locale: Locale
  dictionary: Dictionary
}

const features = [
  {
    key: 'support',
    icon: Headphones,
    color: 'cyan',
  },
  {
    key: 'quality',
    icon: Award,
    color: 'red',
  },
  {
    key: 'consulting',
    icon: Users,
    color: 'cyan',
  },
]

export function WhyChooseUs({ locale, dictionary }: WhyChooseUsProps) {
  const t = dictionary.home.whyUs

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--color-bg-secondary)]" />

      <div className="container-custom relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="heading-lg">{t.title}</h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const featureT = t[feature.key as keyof typeof t] as { title: string; description: string }

            return (
              <motion.div
                key={feature.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  'relative p-8 rounded-2xl text-center',
                  'bg-[var(--color-bg-card)] border border-[var(--color-border)]',
                  'hover:border-transparent hover:shadow-2xl',
                  'transition-all duration-500 group',
                  feature.color === 'cyan'
                    ? 'hover:shadow-cyan-500/10'
                    : 'hover:shadow-red-500/10'
                )}
              >
                {/* Icon */}
                <div
                  className={cn(
                    'w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6',
                    'transition-all duration-300',
                    feature.color === 'cyan'
                      ? 'bg-cyan-500/10 text-[var(--color-accent-cyan)] group-hover:bg-cyan-500/20'
                      : 'bg-red-500/10 text-[var(--color-accent-red)] group-hover:bg-red-500/20'
                  )}
                >
                  <Icon className="w-8 h-8" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-4">{featureT.title}</h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  {featureT.description}
                </p>

                {/* Decorative Line */}
                <div
                  className={cn(
                    'absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 rounded-full',
                    'group-hover:w-24 transition-all duration-500',
                    feature.color === 'cyan'
                      ? 'bg-[var(--color-accent-cyan)]'
                      : 'bg-[var(--color-accent-red)]'
                  )}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

