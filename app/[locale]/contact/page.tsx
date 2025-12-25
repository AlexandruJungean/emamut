'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle, Facebook } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button, Input, Textarea } from '@/components/ui'
import type { Locale } from '@/lib/i18n/config'

const contactInfo = [
  {
    icon: Phone,
    title: 'Telefon',
    value: '+40 735 777 296',
    link: 'tel:+40735777296',
    description: 'Luni - Vineri: 08:00 - 18:00',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'contact@emamut.ro',
    link: 'mailto:contact@emamut.ro',
    description: 'Răspundem în max. 24h',
  },
  {
    icon: MapPin,
    title: 'Adresă',
    value: 'Str. Horea nr. 26, Salonta',
    link: 'https://maps.google.com/?q=Str.+Horea+26,+Salonta,+Romania',
    description: 'Județul Bihor, România',
  },
  {
    icon: Clock,
    title: 'Program',
    value: 'Luni - Vineri',
    link: null,
    description: '08:00 - 18:00',
  },
]

export default function ContactPage() {
  const params = useParams()
  const locale = params.locale as Locale
  
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      // TODO: Implement actual form submission with reCAPTCHA
      await new Promise(resolve => setTimeout(resolve, 1500))
      setStatus('success')
      setFormState({ name: '', email: '', phone: '', message: '' })
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
        
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[var(--color-accent-cyan)] rounded-full blur-[150px] opacity-10" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="heading-xl mb-6">
              <span className="text-white">Contactează-</span>
              <span className="text-gradient">ne</span>
            </h1>
            
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              Suntem aici pentru a te ajuta. Contactează-ne pentru o consultație 
              gratuită sau o ofertă personalizată pentru nevoile tale de securitate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-10 relative">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item.link ? (
                  <a
                    href={item.link}
                    target={item.link.startsWith('http') ? '_blank' : undefined}
                    rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={cn(
                      'block p-6 rounded-2xl h-full',
                      'bg-[var(--color-bg-card)] border border-[var(--color-border)]',
                      'hover:border-[var(--color-accent-cyan)]/50 transition-all duration-300',
                      'group'
                    )}
                  >
                    <div className={cn(
                      'w-12 h-12 rounded-xl mb-4 flex items-center justify-center',
                      'bg-[var(--color-accent-cyan)]/10 group-hover:bg-[var(--color-accent-cyan)]/20',
                      'transition-colors duration-300'
                    )}>
                      <item.icon className="w-6 h-6 text-[var(--color-accent-cyan)]" />
                    </div>
                    <h3 className="text-sm text-[var(--color-text-muted)] mb-1">{item.title}</h3>
                    <p className="text-lg font-semibold text-white mb-1">{item.value}</p>
                    <p className="text-sm text-[var(--color-text-secondary)]">{item.description}</p>
                  </a>
                ) : (
                  <div className={cn(
                    'p-6 rounded-2xl h-full',
                    'bg-[var(--color-bg-card)] border border-[var(--color-border)]'
                  )}>
                    <div className={cn(
                      'w-12 h-12 rounded-xl mb-4 flex items-center justify-center',
                      'bg-[var(--color-accent-cyan)]/10'
                    )}>
                      <item.icon className="w-6 h-6 text-[var(--color-accent-cyan)]" />
                    </div>
                    <h3 className="text-sm text-[var(--color-text-muted)] mb-1">{item.title}</h3>
                    <p className="text-lg font-semibold text-white mb-1">{item.value}</p>
                    <p className="text-sm text-[var(--color-text-secondary)]">{item.description}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 relative">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className={cn(
                'p-8 md:p-10 rounded-3xl',
                'bg-[var(--color-bg-card)] border border-[var(--color-border)]'
              )}>
                <h2 className="heading-md mb-2">Trimite-ne un mesaj</h2>
                <p className="text-[var(--color-text-secondary)] mb-8">
                  Completează formularul și te vom contacta în cel mai scurt timp.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Nume complet *
                    </label>
                    <Input
                      type="text"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Numele tău"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="email@exemplu.ro"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Telefon
                      </label>
                      <Input
                        type="tel"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="+40 XXX XXX XXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Mesaj *
                    </label>
                    <Textarea
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Descrie pe scurt ce servicii te interesează..."
                      rows={5}
                      required
                    />
                  </div>

                  {status === 'success' && (
                    <div className="flex items-center gap-2 p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400">
                      <CheckCircle className="w-5 h-5" />
                      <span>Mesajul a fost trimis cu succes!</span>
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="flex items-center gap-2 p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400">
                      <AlertCircle className="w-5 h-5" />
                      <span>A apărut o eroare. Te rugăm să încerci din nou.</span>
                    </div>
                  )}

                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full"
                    disabled={status === 'loading'}
                    leftIcon={<Send className="w-4 h-4" />}
                  >
                    {status === 'loading' ? 'Se trimite...' : 'Trimite mesajul'}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Map & Social */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Map */}
              <div className={cn(
                'rounded-3xl overflow-hidden h-[400px]',
                'border border-[var(--color-border)]'
              )}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2714!2d21.6651048!3d46.8007805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47466d8da2e81e31%3A0xae2552090cbc3ceb!2sEmamut!5e0!3m2!1sen!2sro!4v1703505600000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Locație Emamut"
                />
              </div>

              {/* Social & Info */}
              <div className={cn(
                'p-6 rounded-2xl',
                'bg-[var(--color-bg-card)] border border-[var(--color-border)]'
              )}>
                <h3 className="text-lg font-semibold text-white mb-4">Urmărește-ne</h3>
                <div className="flex gap-3">
                  <a
                    href="https://www.facebook.com/EmamutSRL"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      'flex items-center gap-3 px-4 py-3 rounded-xl',
                      'bg-[var(--color-bg-elevated)] border border-[var(--color-border)]',
                      'hover:border-[var(--color-accent-cyan)] hover:text-[var(--color-accent-cyan)]',
                      'transition-colors duration-200'
                    )}
                  >
                    <Facebook className="w-5 h-5" />
                    <span>Facebook</span>
                  </a>
                </div>
              </div>

              {/* Quick Contact */}
              <div className={cn(
                'p-6 rounded-2xl',
                'bg-gradient-to-r from-red-600 to-red-700'
              )}>
                <h3 className="text-lg font-semibold text-white mb-2">Ai nevoie de ajutor urgent?</h3>
                <p className="text-white/80 mb-4">Sună-ne direct pentru asistență imediată.</p>
                <a href="tel:+40735777296">
                  <Button variant="secondary" className="bg-white text-red-600 hover:bg-white/90 border-white">
                    <Phone className="w-4 h-4 mr-2" />
                    +40 735 777 296
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

