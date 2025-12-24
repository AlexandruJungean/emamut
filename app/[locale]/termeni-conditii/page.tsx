'use client'

import { motion } from 'framer-motion'
import { FileText, CheckCircle, XCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function TermsPage() {
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
              <FileText className="w-8 h-8 text-[var(--color-accent-cyan)]" />
            </div>
            
            <h1 className="heading-lg mb-4 text-white">
              Termeni și Condiții
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
                  Folosirea, incluzând vizitarea și utilizarea serviciilor de pe site-ul <strong className="text-white">emamut.ro</strong>, implică acceptarea termenilor și condițiilor ce vor fi detaliate în paragrafele următoare.
                </p>

                <h2 className="text-xl font-semibold text-white mt-8 mb-4">Drepturile de autor</h2>
                <p className="text-[var(--color-text-secondary)] mb-4">
                  Conținutul acestui site (texte, imagini, animații, elemente de webdesign și programare) sunt proprietatea <strong className="text-white">SC EMAMUT SRL</strong> și a furnizorilor săi.
                </p>
                <p className="text-[var(--color-text-secondary)] mb-8">
                  Orice tentativă de a copia, de a modifica sau șterge conținutul site-ului fără a avea accesul sau permisiunea administratorilor va fi pedepsită conform legii în vigoare.
                </p>

                <h2 className="text-xl font-semibold text-white mt-8 mb-4">Confidențialitate</h2>
                <p className="text-[var(--color-text-secondary)] mb-4">
                  <strong className="text-white">Emamut.ro</strong> respectă legile în vigoare privind confidențialitatea datelor. Puteți vizita pagina site-ului nostru fără să oferiți nicio informație despre dumneavoastră.
                </p>
                
                <p className="text-[var(--color-text-secondary)] mb-4">SC EMAMUT SRL se angajează:</p>
                <div className="space-y-3 mb-8">
                  {[
                    'Să nu transmită datele personale ale utilizatorilor site-ului către terți',
                    'Să le folosească numai în scopul stabilirii contactului cu clienții săi',
                    'Să informeze clienții asupra aspectelor legate de funcționarea site-ului și a ofertelor acestuia',
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[var(--color-accent-cyan)] flex-shrink-0 mt-0.5" />
                      <span className="text-[var(--color-text-secondary)]">{item}</span>
                    </div>
                  ))}
                </div>

                <h3 className="text-lg font-semibold text-white mt-6 mb-4">Ce NU facem cu datele dumneavoastră:</h3>
                <div className="space-y-3 mb-8">
                  {[
                    'Nu încurajăm SPAM-ul',
                    'Nu furnizăm adresa dumneavoastră de e-mail unor terți (persoane fizice sau juridice)',
                    'Nu vindem, nu oferim, nu facem schimb de adrese e-mail obținute prin intermediul acestui site',
                    'Nu divulgăm adresa dumneavoastră de e-mail altor persoane care accesează paginile acestui site',
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-[var(--color-accent-red)] flex-shrink-0 mt-0.5" />
                      <span className="text-[var(--color-text-secondary)]">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="text-[var(--color-text-secondary)] mb-8">
                  Orice utilizator care a furnizat explicit pe site-ul emamut.ro adresa sa de email poate opta ca aceasta să fie ștearsă din baza de date a emamut.ro.
                </p>

                <h2 className="text-xl font-semibold text-white mt-8 mb-4">Declinarea responsabilității</h2>
                <p className="text-[var(--color-text-secondary)] mb-4">
                  Ne străduim să menținem toate informațiile actualizate. Ne cerem scuze pentru eventualele neplăceri cauzate din apariția unor inexactități.
                </p>
                <ul className="list-disc list-inside text-[var(--color-text-secondary)] space-y-2 mb-8">
                  <li>Fotografiile au caracter informativ și pot conține accesorii neincluse în pachetele standard</li>
                  <li>Ne declinăm răspunderea pentru orice situație care poate apărea din cauza unor erori de software sau defecțiuni tehnice apărute la server</li>
                  <li>Toate promoțiile prezente în site sunt valabile în limita stocului disponibil</li>
                </ul>

                <div className={cn(
                  'p-4 rounded-xl mb-8',
                  'bg-[var(--color-accent-cyan)]/10 border border-[var(--color-accent-cyan)]/30'
                )}>
                  <p className="text-[var(--color-text-secondary)]">
                    <strong className="text-white">Compania SC EMAMUT SRL își asumă dreptul de a face modificări ale acestor prevederi fără o altă notificare.</strong>
                  </p>
                </div>

                <h2 className="text-xl font-semibold text-white mt-8 mb-4">Date de contact</h2>
                <div className={cn(
                  'p-6 rounded-xl',
                  'bg-[var(--color-bg-elevated)] border border-[var(--color-border)]'
                )}>
                  <p className="font-semibold text-white mb-1">SC EMAMUT SRL</p>
                  <p className="text-[var(--color-text-secondary)] text-sm">
                    Str. Horea nr. 26, Salonta, jud. Bihor<br />
                    Tel: +40 735 777 296<br />
                    Email: contact@emamut.ro<br />
                    Website: emamut.ro
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

