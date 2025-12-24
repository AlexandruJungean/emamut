'use client'

import { motion } from 'framer-motion'
import { Shield, CheckCircle, Lock } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-primary)] via-[var(--color-bg-secondary)] to-[var(--color-bg-primary)]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className={cn(
              'w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center',
              'bg-[var(--color-accent-cyan)]/10 border border-[var(--color-accent-cyan)]/30'
            )}>
              <Shield className="w-8 h-8 text-[var(--color-accent-cyan)]" />
            </div>
            
            <h1 className="heading-lg mb-4 text-white">
              Politica de Confidențialitate
            </h1>
            
            <p className="text-[var(--color-text-secondary)]">
              Ultima actualizare: Decembrie 2024
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className={cn(
              'p-8 md:p-12 rounded-3xl',
              'bg-[var(--color-bg-card)] border border-[var(--color-border)]'
            )}>
              <div className="prose prose-invert max-w-none">
                <p className="text-[var(--color-text-secondary)] mb-8">
                  Firma <strong className="text-white">SC EMAMUT S.R.L</strong> respectă și protejează datele dumneavoastră personale, conform prevederilor <strong className="text-white">Regulamentului UE 679/2016 (GDPR)</strong>.
                </p>

                <p className="text-[var(--color-text-secondary)] mb-8">
                  Prin acceptul dumneavoastră, respectiv solicitarea produselor și serviciilor SC EMAMUT S.R.L, vă exprimați expres acordul pentru prelucrarea datelor dumneavoastră personale, în scopul încheierii și derulării contractului de prestări servicii.
                </p>

                <h2 className="text-xl font-semibold text-white mt-8 mb-4">Drepturile dumneavoastră</h2>
                <p className="text-[var(--color-text-secondary)] mb-4">
                  În conformitate cu dispozițiile legii, persoanele înregistrate, în calitate de persoane vizate, au următoarele drepturi:
                </p>
                <div className="space-y-3 mb-8">
                  {[
                    'Dreptul la informare',
                    'Dreptul de acces la date cu caracter personal',
                    'Dreptul de intervenție asupra datelor cu caracter personal',
                    'Dreptul de opoziție',
                    'Dreptul de a nu fi supus unei decizii individuale',
                    'Dreptul de a se adresa justiției',
                  ].map((right, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[var(--color-accent-cyan)] flex-shrink-0" />
                      <span className="text-[var(--color-text-secondary)]">{right}</span>
                    </div>
                  ))}
                </div>

                <h2 className="text-xl font-semibold text-white mt-8 mb-4">Consimțământul</h2>
                <p className="text-[var(--color-text-secondary)] mb-4">
                  Orice informație furnizată de dumneavoastră va fi considerată și va reprezenta consimțământul dumneavoastră expres ca datele dumneavoastră personale să fie folosite de Emamut în conformitate cu scopurile menționate.
                </p>
                <div className={cn(
                  'p-4 rounded-xl mb-8',
                  'bg-[var(--color-accent-red)]/10 border border-[var(--color-accent-red)]/30'
                )}>
                  <p className="text-[var(--color-text-secondary)]">
                    <strong className="text-white">Dacă nu doriți ca datele dumneavoastră să fie colectate, vă rugăm să nu ni le furnizați.</strong>
                  </p>
                </div>
                <p className="text-[var(--color-text-secondary)] mb-8">
                  Dacă doriți ca datele dumneavoastră personale să fie actualizate sau scoase din baza de date, ne puteți notifica oricând la: <a href="mailto:contact@emamut.ro" className="text-[var(--color-accent-cyan)] hover:underline">contact@emamut.ro</a>
                </p>

                <h2 className="text-xl font-semibold text-white mt-8 mb-4">Scopul colectării datelor</h2>
                <p className="text-[var(--color-text-secondary)] mb-4">
                  Atunci când ne furnizați datele cu caracter personal, Emamut le poate utiliza în următoarele scopuri:
                </p>
                <ul className="list-disc list-inside text-[var(--color-text-secondary)] space-y-2 mb-8">
                  <li>Pentru a ne asigura că pagina de web este relevantă pentru nevoile dumneavoastră</li>
                  <li>Transmiterii de oferte, mesaje publicitare și de marketing</li>
                  <li>Informații despre promoții prin telefon, SMS, sau alte mijloace de comunicare</li>
                </ul>

                <h2 className="text-xl font-semibold text-white mt-8 mb-4">Securitatea datelor</h2>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <Lock className="w-5 h-5 text-[var(--color-accent-cyan)] flex-shrink-0" />
                    <span className="text-[var(--color-text-secondary)]">Ne păstrăm datele pe dispozitive criptate, protejate prin autentificare</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Lock className="w-5 h-5 text-[var(--color-accent-cyan)] flex-shrink-0" />
                    <span className="text-[var(--color-text-secondary)]">Transmiterea datelor de la site-ul Emamut se realizează criptat, cu un certificat SSL</span>
                  </div>
                </div>

                <h2 className="text-xl font-semibold text-white mt-8 mb-4">Transmiterea datelor în afara UE</h2>
                <p className="text-[var(--color-text-secondary)] mb-8">
                  <strong className="text-white">Nu transmitem datele în afara Uniunii Europene.</strong>
                </p>

                <h2 className="text-xl font-semibold text-white mt-8 mb-4">Date de contact</h2>
                <div className={cn(
                  'p-6 rounded-xl',
                  'bg-[var(--color-bg-elevated)] border border-[var(--color-border)]'
                )}>
                  <p className="font-semibold text-white mb-1">SC EMAMUT SRL</p>
                  <p className="text-[var(--color-text-secondary)] text-sm">
                    Str. Horea nr. 26, Salonta, jud. Bihor<br />
                    Tel: +40 735 777 296<br />
                    Email: contact@emamut.ro
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

