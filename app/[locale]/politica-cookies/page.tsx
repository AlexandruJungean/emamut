'use client'

import { motion } from 'framer-motion'
import { Cookie } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function CookiePolicyPage() {
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
              <Cookie className="w-8 h-8 text-[var(--color-accent-cyan)]" />
            </div>
            
            <h1 className="heading-lg mb-4 text-white">
              Politica de utilizare Cookie-uri
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
                  Aceasta politica se refera la cookie-urile si paginile web operate de:
                </p>
                
                <div className={cn(
                  'p-6 rounded-xl mb-8',
                  'bg-[var(--color-bg-elevated)] border border-[var(--color-border)]'
                )}>
                  <p className="font-semibold text-white mb-1">SC EMAMUT SRL</p>
                  <p className="text-[var(--color-text-secondary)] text-sm">
                    Str. Horea nr. 26, Salonta, jud. Bihor<br />
                    Tel: +40 735 777 296<br />
                    Email: contact@emamut.ro
                  </p>
                </div>

                <h2 className="text-xl font-semibold text-white mt-8 mb-4">Ce sunt Cookie-urile?</h2>
                <p className="text-[var(--color-text-secondary)] mb-6">
                  Cookie-ul este un fisier de mici dimensiuni, format din litere si numere, care va fi stocat pe computerul, terminalul mobil sau alte echipamente ale unui utilizator de pe care se acceseaza internetul. Cookie-ul este instalat prin solicitarea emisa de catre un web-server unui browser (ex: Internet Explorer, Chrome) si este complet "pasiv" (nu contine programe software, virusi sau spyware si nu poate accesa informatiile de pe hard driverul utilizatorului).
                </p>

                <h2 className="text-xl font-semibold text-white mt-8 mb-4">La ce sunt folosite Cookie-urile?</h2>
                <p className="text-[var(--color-text-secondary)] mb-4">
                  Aceste fisiere fac posibila recunoasterea terminalului utilizatorului si prezentarea continutului intr-un mod relevant, adaptat preferintelor utilizatorului. Cookie-urile asigura utilizatorilor o experienta placuta de navigare si sustin eforturile noastre pentru a oferi servicii comfortabile utilizatorilor:
                </p>
                <ul className="list-disc list-inside text-[var(--color-text-secondary)] space-y-2 mb-6">
                  <li>Preferintele in materie de confidentialitate online</li>
                  <li>Cosul de cumparaturi sau publicitate relevanta</li>
                </ul>

                <h2 className="text-xl font-semibold text-white mt-8 mb-4">Ce Cookie-uri folosim?</h2>
                <p className="text-[var(--color-text-secondary)] mb-4">
                  Folosim doua tipuri de Cookie-uri: <strong className="text-white">per sesiune</strong> si <strong className="text-white">fixe</strong>.
                </p>
                <ul className="list-disc list-inside text-[var(--color-text-secondary)] space-y-2 mb-6">
                  <li><strong className="text-white">Cookie-uri per sesiune</strong> - sunt fisiere temporare ce raman in terminalul utilizatorului pana la terminarea sesiunii sau inchiderea aplicatiei (browser-ului web)</li>
                  <li><strong className="text-white">Cookie-uri fixe</strong> - raman pe terminalul utilizatorului pe o perioada in parametrii Cookie-ului sau pana sunt sterse manual de utilizator</li>
                </ul>

                <h2 className="text-xl font-semibold text-white mt-8 mb-4">Cum sunt folosite cookie-urile de catre acest site?</h2>
                <p className="text-[var(--color-text-secondary)] mb-4">O vizita pe acest site poate plasa cookie-uri in scopuri de:</p>
                <ul className="list-disc list-inside text-[var(--color-text-secondary)] space-y-2 mb-6">
                  <li>Cookie-uri de performanta a site-ului</li>
                  <li>Cookie-uri de analiza a vizitatorilor</li>
                  <li>Cookie-uri pentru geotargetting</li>
                  <li>Cookie-uri de inregistrare</li>
                  <li>Cookie-uri pentru publicitate</li>
                </ul>

                <h2 className="text-xl font-semibold text-white mt-8 mb-4">Contin Cookie-urile date personale?</h2>
                <p className="text-[var(--color-text-secondary)] mb-6">
                  Cookie-urile in sine nu solicita informatii cu caracter personal pentru a putea fi utilizate si, in cele mai multe cazuri, nu identifica personal utilizatorii de internet. Datele personale colectate prin utilizarea Cookie-urilor pot fi colectate doar pentru a facilita anumite functionalitati pentru utilizator.
                </p>

                <h2 className="text-xl font-semibold text-white mt-8 mb-4">Stergerea Cookie-urilor</h2>
                <p className="text-[var(--color-text-secondary)] mb-4">
                  In general, o aplicatie folosita pentru accesarea paginilor web permite salvarea Cookie-urilor pe terminal in mod implicit. Aceste setari pot fi schimbate in asa fel incat administrarea automata a Cookie-urilor sa fie blocata de browser-ul web sau utilizatorul sa fie informat de fiecare data cand Cookie-uri sunt trimise catre terminalul sau.
                </p>
                <p className="text-[var(--color-accent-red)] mb-6">
                  <strong>Limitarea folosirii Cookie-urilor poate afecta anumite functionalitati ale paginii web.</strong>
                </p>

                <h2 className="text-xl font-semibold text-white mt-8 mb-4">Securitate si probleme legate de confidentialitate</h2>
                <p className="text-[var(--color-text-secondary)] mb-6">
                  <strong className="text-white">Cookie-urile NU sunt virusi!</strong> Ele folosesc formate tip plain text. Nu sunt alcatuite din bucati de cod asa ca nu pot fi executate nici nu pot auto-rula. In consecinta, nu se pot duplica sau replica pe alte retele pentru a se rula sau replica din nou.
                </p>

                <h2 className="text-xl font-semibold text-white mt-8 mb-4">Setari cookie pentru browsere</h2>
                <p className="text-[var(--color-text-secondary)] mb-4">
                  Toate browserele moderne ofera posibilitatea de a schimba setarile cookie-urilor:
                </p>
                <ul className="list-disc list-inside text-[var(--color-text-secondary)] space-y-2 mb-6">
                  <li><a href="https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent-cyan)] hover:underline">Cookie settings in Internet Explorer</a></li>
                  <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent-cyan)] hover:underline">Cookie settings in Firefox</a></li>
                  <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent-cyan)] hover:underline">Cookie settings in Chrome</a></li>
                  <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent-cyan)] hover:underline">Cookie settings in Safari</a></li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

