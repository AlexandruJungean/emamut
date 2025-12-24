'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Locale } from '@/lib/i18n/config'
import type { Dictionary } from '@/lib/i18n/getDictionary'

interface FAQProps {
  locale: Locale
  dictionary: Dictionary
}

export function FAQ({ locale, dictionary }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const t = dictionary.home.faq

  const faqs = [
    { question: t.q1.question, answer: t.q1.answer },
    { question: t.q2.question, answer: t.q2.answer },
    { question: t.q3.question, answer: t.q3.answer },
    { question: t.q4.question, answer: t.q4.answer },
  ]

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--color-bg-primary)]" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      {/* Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[var(--color-accent-cyan)] rounded-full blur-[200px] opacity-5" />

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

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={cn(
                  'w-full text-left p-6 rounded-xl',
                  'bg-[var(--color-bg-card)] border border-[var(--color-border)]',
                  'hover:border-[var(--color-border-hover)]',
                  'transition-all duration-300',
                  openIndex === index && 'border-[var(--color-accent-red)]'
                )}
              >
                <div className="flex items-center justify-between gap-4">
                  <span
                    className={cn(
                      'text-lg font-medium transition-colors',
                      openIndex === index
                        ? 'text-[var(--color-accent-red)]'
                        : 'text-white'
                    )}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      'w-5 h-5 flex-shrink-0 transition-transform duration-300',
                      openIndex === index
                        ? 'rotate-180 text-[var(--color-accent-red)]'
                        : 'text-[var(--color-text-muted)]'
                    )}
                  />
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 text-[var(--color-text-secondary)] leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

