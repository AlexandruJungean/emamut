'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

interface WhatsAppButtonProps {
  phoneNumber?: string
  message?: string
}

export function WhatsAppButton({
  phoneNumber = '40735777296',
  message = 'Bună ziua, doresc să aflu mai multe despre serviciile dumneavoastră.',
}: WhatsAppButtonProps) {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.3, type: 'spring' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        'fixed bottom-6 right-6 z-50',
        'flex items-center justify-center',
        'w-14 h-14 rounded-full',
        'bg-[#25D366] text-white',
        'shadow-lg shadow-[#25D366]/30',
        'hover:shadow-xl hover:shadow-[#25D366]/40',
        'transition-shadow duration-300'
      )}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      
      {/* Pulse Animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
    </motion.a>
  )
}

