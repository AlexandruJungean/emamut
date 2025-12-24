'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Download, CheckCircle, BookOpen, Shield, Lock, AlertCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button, Input } from '@/components/ui'
import type { Locale } from '@/lib/i18n/config'

const ebookFeatures = [
  'Cum să alegi sistemul de securitate potrivit pentru tine',
  'Comparație detaliată între diferite tipuri de camere',
  'Ghid pentru sisteme de alarmă și control acces',
  'Sfaturi pentru întreținerea echipamentelor',
  'Lista de verificare pentru securitatea casei tale',
  'Cele mai frecvente greșeli și cum să le eviți',
]

const benefits = [
  {
    icon: Shield,
    title: 'Informații de specialitate',
    description: 'Ghid realizat de experți cu peste 15 ani experiență în securitate.',
  },
  {
    icon: BookOpen,
    title: 'Ușor de înțeles',
    description: 'Conținut clar și accesibil, fără jargon tehnic complicat.',
  },
  {
    icon: Lock,
    title: '100% Gratuit',
    description: 'Descarcă gratuit, fără costuri ascunse sau obligații.',
  },
]

export default function EbookPage() {
  const params = useParams()
  const locale = params.locale as Locale
  
  const [formState, setFormState] = useState({
    name: '',
    email: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      // TODO: Implement actual form submission with email sending
      await new Promise(resolve => setTimeout(resolve, 1500))
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-primary)] via-[var(--color-bg-secondary)] to-[var(--color-bg-primary)]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-accent-cyan)] rounded-full blur-[150px] opacity-10" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--color-accent-red)] rounded-full blur-[150px] opacity-10" />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-[var(--color-bg-card)]/80 border border-[var(--color-border)]">
                <Download className="w-4 h-4 text-[var(--color-accent-cyan)]" />
                <span className="text-sm text-[var(--color-text-secondary)]">Ebook gratuit</span>
              </div>
              
              <h1 className="heading-xl mb-6">
                <span className="text-white">Ghidul complet pentru </span>
                <span className="text-gradient">securitatea casei</span>
              </h1>
              
              <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-8">
                Descarcă gratuit ghidul nostru de 30+ pagini cu tot ce trebuie să știi 
                despre sistemele de securitate pentru locuința ta. De la alegerea 
                camerelor până la întreținerea sistemelor.
              </p>

              {/* Features List */}
              <div className="space-y-3 mb-8">
                {ebookFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-[var(--color-accent-cyan)]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-3 h-3 text-[var(--color-accent-cyan)]" />
                    </div>
                    <span className="text-[var(--color-text-secondary)]">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Ebook Image & Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Ebook Cover */}
              <div className="relative mb-8">
                <div className={cn(
                  'relative mx-auto w-64 md:w-80',
                  'rounded-2xl overflow-hidden',
                  'shadow-2xl shadow-black/50',
                  'transform hover:scale-105 transition-transform duration-300'
                )}>
                  <Image
                    src="/images/Ebook.webp"
                    alt="Ebook Emamut - Ghid Securitate"
                    width={320}
                    height={450}
                    className="w-full h-auto"
                  />
                  
                  {/* Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-accent-cyan)] to-[var(--color-accent-red)] rounded-2xl blur-xl opacity-30 -z-10" />
                </div>
              </div>

              {/* Download Form */}
              <div className={cn(
                'p-8 rounded-3xl',
                'bg-[var(--color-bg-card)] border border-[var(--color-border)]'
              )}>
                {status === 'success' ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Mulțumim!
                    </h3>
                    <p className="text-[var(--color-text-secondary)] mb-4">
                      Ebook-ul a fost trimis pe email. Verifică și folderul Spam.
                    </p>
                    <Button
                      variant="primary"
                      onClick={() => setStatus('idle')}
                    >
                      Descarcă din nou
                    </Button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Descarcă gratuit
                    </h3>
                    <p className="text-[var(--color-text-secondary)] mb-6">
                      Completează formularul și primești ebook-ul pe email.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Input
                          type="text"
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          placeholder="Numele tău"
                          required
                        />
                      </div>
                      <div>
                        <Input
                          type="email"
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          placeholder="Adresa de email"
                          required
                        />
                      </div>

                      {status === 'error' && (
                        <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                          <AlertCircle className="w-4 h-4" />
                          <span>A apărut o eroare. Te rugăm să încerci din nou.</span>
                        </div>
                      )}

                      <Button
                        type="submit"
                        variant="primary"
                        className="w-full"
                        disabled={status === 'loading'}
                        leftIcon={<Download className="w-4 h-4" />}
                      >
                        {status === 'loading' ? 'Se trimite...' : 'Descarcă Ebook Gratuit'}
                      </Button>

                      <p className="text-xs text-[var(--color-text-muted)] text-center">
                        Prin descărcare, ești de acord cu{' '}
                        <a href={`/${locale}/politica-confidentialitate`} className="text-[var(--color-accent-cyan)] hover:underline">
                          politica de confidențialitate
                        </a>.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 relative bg-[var(--color-bg-secondary)]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-lg mb-4">
              <span className="text-white">De ce să descarci </span>
              <span className="text-gradient">acest ghid?</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  'p-8 rounded-2xl text-center',
                  'bg-[var(--color-bg-card)] border border-[var(--color-border)]'
                )}
              >
                <div className={cn(
                  'w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center',
                  'bg-[var(--color-accent-cyan)]/10'
                )}>
                  <benefit.icon className="w-8 h-8 text-[var(--color-accent-cyan)]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-[var(--color-text-secondary)]">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

