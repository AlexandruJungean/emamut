'use client'

import { useParams, notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Camera, ShieldAlert, Network, KeyRound, Phone, Flame, ArrowRight, CheckCircle, ArrowLeft } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui'
import type { Locale } from '@/lib/i18n/config'

const servicesData: Record<string, {
  icon: typeof Camera
  title: string
  subtitle: string
  description: string[]
  features: string[]
  applications: string[]
  image: string
}> = {
  'supraveghere-video': {
    icon: Camera,
    title: 'Sisteme Supraveghere Video',
    subtitle: 'Monitorizare profesională pentru locuințe și afaceri',
    description: [
      'Supravegherea video a devenit o necesitate în ziua de azi atât pentru persoane fizice cât și pentru firmele mai mici sau mai mari. Camerele de supraveghere pot monitoriza zonele proprii vizate, pot înregistra diverse imagini ale acestora, le pot recepționa în modul vizionare de la distanță oferind astfel un sentiment de siguranță posesorilor.',
      'Oferim sisteme de supraveghere video complete, de la proiectare până la instalare și întreținere. Folosim echipamente de ultimă generație pentru a asigura imagini clare și înregistrări de calitate.',
    ],
    features: [
      'Camere IP și analog HD/4K',
      'Înregistrare continuă 24/7',
      'Vizualizare de la distanță (smartphone/PC)',
      'Viziune nocturnă IR',
      'Detectare mișcare inteligentă',
      'Stocare cloud sau locală (NVR/DVR)',
      'Camere PTZ (pan-tilt-zoom)',
      'Integrare cu alte sisteme de securitate',
    ],
    applications: [
      'Locuințe și apartamente',
      'Magazine și spații comerciale',
      'Birouri și clădiri de afaceri',
      'Depozite și hale industriale',
      'Instituții publice',
      'Parcări și spații exterioare',
    ],
    image: '/images/hero-1.webp',
  },
  'sisteme-antiefractie': {
    icon: ShieldAlert,
    title: 'Sisteme Antiefracție',
    subtitle: 'Protecție completă împotriva efracțiilor',
    description: [
      'Sistemele antiefracție sunt prima linie de apărare împotriva intruziunilor neautorizate. Oferim soluții complete de alarmare care detectează și semnalează orice tentativă de pătrundere neautorizată.',
      'Instalăm centrale de alarmă moderne, cu sau fără fir, care pot fi controlate de la distanță prin aplicații mobile. Sistemele noastre sunt certificate și respectă toate normele în vigoare.',
    ],
    features: [
      'Centrale de alarmă wireless și hibride',
      'Senzori de mișcare volumetrici',
      'Contacte magnetice uși/ferestre',
      'Senzori de spargere geam',
      'Sirene interior și exterior',
      'Alertare SMS și notificări aplicație',
      'Panou de control touch screen',
      'Posibilitate dispecerizare',
    ],
    applications: [
      'Case și vile',
      'Apartamente',
      'Magazine și retail',
      'Birouri',
      'Spații industriale',
      'Școli și grădinițe',
    ],
    image: '/images/hero-2.webp',
  },
  'retele-date': {
    icon: Network,
    title: 'Rețele Date / Voce / TV / Wi-Fi',
    subtitle: 'Conectivitate completă pentru casa sau afacerea ta',
    description: [
      'Realizăm rețele de date structurate pentru locuințe și companii, asigurând conectivitate rapidă și stabilă. De la cablare Cat5e/Cat6 până la soluții Wi-Fi enterprise.',
      'Oferim servicii complete de instalare și configurare pentru rețele LAN, sisteme de telefonie VoIP, distribuție semnal TV și acoperire Wi-Fi profesională.',
    ],
    features: [
      'Cablare structurată Cat5e/Cat6/Cat6A',
      'Prize de date RJ45',
      'Configurare switch-uri și routere',
      'Rețele Wi-Fi profesionale',
      'Sisteme de distribuție TV',
      'Telefonie VoIP',
      'Rack-uri și patch panel-uri',
      'Testare și certificare cabluri',
    ],
    applications: [
      'Birouri și sedii companii',
      'Magazine și centre comerciale',
      'Hoteluri și pensiuni',
      'Locuințe și apartamente',
      'Școli și instituții',
      'Spații industriale',
    ],
    image: '/images/hero-3.webp',
  },
  'control-acces': {
    icon: KeyRound,
    title: 'Control Acces / Pontaj',
    subtitle: 'Gestionează accesul în mod inteligent',
    description: [
      'Sistemele de control acces permit gestionarea eficientă a accesului persoanelor în diferite zone. De la simple cititoare de carduri până la sisteme biometrice avansate cu recunoaștere facială.',
      'Oferim și soluții de pontaj electronic pentru înregistrarea prezenței angajaților, integrate cu sistemele de control acces existente.',
    ],
    features: [
      'Cititoare carduri RFID/Proximity',
      'Sisteme biometrice (amprentă, față)',
      'Tastaturi cu cod PIN',
      'Încuietori electromagnetice',
      'Pontaj electronic',
      'Software management acces',
      'Rapoarte și statistici',
      'Integrare cu HR și salarizare',
    ],
    applications: [
      'Clădiri de birouri',
      'Fabrici și depozite',
      'Instituții publice',
      'Spitale și clinici',
      'Școli și universități',
      'Centre de date',
    ],
    image: '/images/commercial-building.webp',
  },
  'interfoane': {
    icon: Phone,
    title: 'Interfoane / Videointerfoane',
    subtitle: 'Comunicare și identificare la distanță',
    description: [
      'Sistemele de interfonie audio și video permit identificarea vizitatorilor și comunicarea la distanță înainte de a permite accesul în clădire sau proprietate.',
      'Oferim soluții pentru locuințe individuale, blocuri de apartamente și clădiri de birouri, cu posibilitatea de integrare cu sistemele de control acces.',
    ],
    features: [
      'Interfoane audio și video',
      'Posturi interioare color',
      'Deblocare ușă la distanță',
      'Sisteme multi-apartament',
      'Integrare cu smartphone',
      'Camere cu unghi larg',
      'Viziune nocturnă',
      'Înregistrare vizitatori',
    ],
    applications: [
      'Case și vile',
      'Blocuri de apartamente',
      'Clădiri de birouri',
      'Ansambluri rezidențiale',
      'Porți și garaje',
      'Recepții și holuri',
    ],
    image: '/images/residential-installation.webp',
  },
  'detectie-incendiu': {
    icon: Flame,
    title: 'Sisteme Detecție Incendiu',
    subtitle: 'Protecție împotriva incendiilor',
    description: [
      'Sistemele de detecție incendiu sunt esențiale pentru protejarea vieților și a bunurilor. Instalăm sisteme certificate care detectează fumul, căldura sau flăcările și declanșează alarma în timp util.',
      'Oferim soluții pentru toate tipurile de clădiri, de la locuințe până la spații industriale, respectând toate normativele ISU în vigoare.',
    ],
    features: [
      'Detectoare optice de fum',
      'Detectoare de căldură',
      'Detectoare de monoxid de carbon',
      'Centrale de incendiu adresabile',
      'Butoane de panică/incendiu',
      'Sirene de evacuare',
      'Indicatoare luminoase',
      'Monitorizare și mentenanță',
    ],
    applications: [
      'Blocuri de locuințe',
      'Hoteluri și pensiuni',
      'Magazine și malluri',
      'Restaurante și bucătării',
      'Fabrici și hale',
      'Instituții publice',
    ],
    image: '/images/warehouse.webp',
  },
}

const allServices = Object.entries(servicesData).map(([slug, data]) => ({
  slug,
  title: data.title,
  icon: data.icon,
}))

export default function ServicePage() {
  const params = useParams()
  const locale = params.locale as Locale
  const slug = params.slug as string

  const service = servicesData[slug]
  
  if (!service) {
    notFound()
  }

  const Icon = service.icon
  const otherServices = allServices.filter(s => s.slug !== slug)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg-primary)] via-[var(--color-bg-primary)]/90 to-[var(--color-bg-primary)]/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-primary)] via-transparent to-[var(--color-bg-primary)]/50" />
        </div>
        
        <div className="container-custom relative z-10">
          {/* Breadcrumb */}
          <Link 
            href={`/${locale}/servicii`}
            className="inline-flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-accent-cyan)] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Toate serviciile</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className={cn(
              'w-20 h-20 rounded-2xl mb-6 flex items-center justify-center',
              'bg-gradient-to-br from-[var(--color-accent-cyan)]/20 to-transparent',
              'border border-[var(--color-accent-cyan)]/30'
            )}>
              <Icon className="w-10 h-10 text-[var(--color-accent-cyan)]" />
            </div>
            
            <h1 className="heading-xl mb-4 text-white">
              {service.title}
            </h1>
            
            <p className="text-xl text-[var(--color-text-secondary)] mb-8">
              {service.subtitle}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href={`/${locale}/contact`}>
                <Button variant="primary" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  Cere Ofertă Gratuită
                </Button>
              </Link>
              <a href="tel:+40735777296">
                <Button variant="secondary">
                  +40 735 777 296
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Description */}
      <section className="py-20 relative">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="heading-md mb-6">
                  <span className="text-white">Despre </span>
                  <span className="text-gradient">serviciu</span>
                </h2>
                
                <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed mb-12">
                  {service.description.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                {/* Features */}
                <h3 className="text-xl font-semibold text-white mb-6">Ce include:</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-12">
                  {service.features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-[var(--color-accent-cyan)]/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-[var(--color-accent-cyan)]" />
                      </div>
                      <span className="text-[var(--color-text-secondary)]">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Applications */}
                <h3 className="text-xl font-semibold text-white mb-6">Aplicații:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.applications.map((app, index) => (
                    <motion.div
                      key={app}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className={cn(
                        'flex items-center gap-3 p-4 rounded-xl',
                        'bg-[var(--color-bg-card)] border border-[var(--color-border)]'
                      )}
                    >
                      <div className="w-2 h-2 rounded-full bg-[var(--color-accent-red)]" />
                      <span className="text-[var(--color-text-secondary)]">{app}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="sticky top-24 space-y-6"
              >
                {/* CTA Card */}
                <div className={cn(
                  'p-6 rounded-2xl',
                  'bg-gradient-to-br from-red-600 to-red-700'
                )}>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Interesat de acest serviciu?
                  </h3>
                  <p className="text-white/80 mb-6">
                    Contactează-ne pentru o consultație gratuită și o ofertă personalizată.
                  </p>
                  <Link href={`/${locale}/contact`}>
                    <Button variant="secondary" className="w-full bg-white text-red-600 hover:bg-white/90 border-white">
                      Cere Ofertă
                    </Button>
                  </Link>
                </div>

                {/* Other Services */}
                <div className={cn(
                  'p-6 rounded-2xl',
                  'bg-[var(--color-bg-card)] border border-[var(--color-border)]'
                )}>
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Alte servicii
                  </h3>
                  <div className="space-y-2">
                    {otherServices.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/${locale}/servicii/${s.slug}`}
                        className={cn(
                          'flex items-center gap-3 p-3 rounded-xl',
                          'text-[var(--color-text-secondary)]',
                          'hover:bg-[var(--color-bg-elevated)] hover:text-[var(--color-accent-cyan)]',
                          'transition-colors duration-200'
                        )}
                      >
                        <s.icon className="w-5 h-5" />
                        <span className="text-sm">{s.title}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

