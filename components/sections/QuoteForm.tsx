'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Send, CheckCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button, Input, Select, Textarea } from '@/components/ui'
import type { Locale } from '@/lib/i18n/config'
import type { Dictionary } from '@/lib/i18n/getDictionary'

interface QuoteFormProps {
  locale: Locale
  dictionary: Dictionary
}

export function QuoteForm({ locale, dictionary }: QuoteFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const t = dictionary.home.quote

  const serviceOptions = [
    { value: 'surveillance', label: 'Sistem supraveghere video' },
    { value: 'alarm', label: 'Sistem alarmă' },
    { value: 'access', label: 'Control acces / pontaj' },
    { value: 'network', label: 'Rețele date / voce / TV / Wi-Fi' },
    { value: 'intercom', label: 'Interfoane / videointerfoane' },
    { value: 'fire', label: 'Sisteme detecție incendiu' },
  ]

  const sizeOptions = [
    { value: 'small', label: t.form.sizeSm },
    { value: 'medium', label: t.form.sizeMd },
    { value: 'large', label: t.form.sizeLg },
    { value: 'other', label: t.form.sizeOther },
  ]

  const typeOptions = [
    { value: 'personal', label: t.form.personal },
    { value: 'business', label: t.form.business },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSuccess(true)

    // Reset after 3 seconds
    setTimeout(() => setIsSuccess(false), 3000)
  }

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--color-bg-secondary)]" />

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={cn(
            'relative rounded-3xl overflow-hidden',
            'bg-[var(--color-bg-card)] border border-[var(--color-border)]'
          )}
        >
          <div className="grid lg:grid-cols-2">
            {/* Image Side */}
            <div className="relative hidden lg:block min-h-[600px]">
              <Image
                src="/images/modern-office.webp"
                alt="Security systems"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--color-bg-card)]" />
            </div>

            {/* Form Side */}
            <div className="p-8 lg:p-12">
              <h2 className="heading-md mb-8">{t.title}</h2>

              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                  <p className="text-xl text-white">Cererea a fost trimisă cu succes!</p>
                  <p className="text-[var(--color-text-secondary)] mt-2">
                    Vă vom contacta în cel mai scurt timp.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Row 1 */}
                  <div className="grid sm:grid-cols-3 gap-4">
                    <Select
                      options={typeOptions}
                      placeholder={t.form.type}
                      defaultValue=""
                    />
                    <Select
                      options={serviceOptions}
                      placeholder={t.form.service}
                      defaultValue=""
                    />
                    <Select
                      options={sizeOptions}
                      placeholder={t.form.size}
                      defaultValue=""
                    />
                  </div>

                  {/* Row 2 */}
                  <div className="grid sm:grid-cols-3 gap-4">
                    <Input placeholder={t.form.name} required />
                    <Input type="email" placeholder={t.form.email} required />
                    <Input type="tel" placeholder={t.form.phone} required />
                  </div>

                  {/* Row 3 */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input placeholder={t.form.county} />
                    <Input placeholder={t.form.city} required />
                  </div>

                  {/* Message */}
                  <Textarea placeholder={t.form.message} rows={4} />

                  {/* Submit */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full sm:w-auto"
                    isLoading={isSubmitting}
                    rightIcon={<Send className="w-5 h-5" />}
                  >
                    {t.form.submit}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

