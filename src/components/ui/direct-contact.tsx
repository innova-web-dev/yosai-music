'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  EnvelopeSimple,
  Phone,
  ChatCircleDots,
  Camera,
  SpotifyLogo,
  ArrowSquareOut,
} from '@phosphor-icons/react';
import { cn } from '@/lib/utils';

const springTransition = { type: 'spring' as const, stiffness: 100, damping: 20 };

const contactItems = [
  {
    icon: EnvelopeSimple,
    label: 'Booking & Contrataciones',
    value: 'booking@orionmusic.com',
    href: 'mailto:booking@orionmusic.com',
    accent: true,
  },
  {
    icon: Phone,
    label: 'Prensa & Media',
    value: '+52 (55) 4732 8192',
    href: 'tel:+525547328192',
  },
  {
    icon: ChatCircleDots,
    label: 'WhatsApp Directo',
    value: '+52 1 (686) 293 4801',
    href: 'https://wa.me/5216862934801',
  },
];

const socialLinks = [
  { icon: Camera, label: 'Instagram', href: 'https://instagram.com' },
  { icon: SpotifyLogo, label: 'Spotify', href: 'https://spotify.com' },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: springTransition,
  },
};

export function DirectContact() {
  return (
    <section className="relative w-full py-32 md:py-40 px-6 md:px-8 bg-[#050505] overflow-hidden border-t border-white/[0.04]">
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-80px' }}
          transition={springTransition}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.06] bg-white/[0.02] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-yosai-purple-light" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
              Contacto Directo
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black uppercase leading-[0.95] tracking-tighter text-white mb-4">
            Algo <span className="text-yosai-purple-light">urgente</span>?
          </h2>
          <p className="text-sm md:text-base text-white/35 max-w-md mx-auto leading-relaxed mb-14">
            Si prefieres un contacto directo o tienes una consulta urgente,
            estamos disponibles en estos canales.
          </p>
        </motion.div>

        {/* Contact Islands */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {contactItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={
                item.href.startsWith('http') ? 'noopener noreferrer' : undefined
              }
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="group flex flex-col items-center"
            >
              {/* Double-Bezel */}
              <div
                className={cn(
                  'p-[1px] rounded-[1.5rem]',
                  item.accent
                    ? 'bg-gradient-to-b from-crimson/20 to-transparent'
                    : 'bg-white/[0.04]'
                )}
              >
                <div
                  className={cn(
                    'rounded-[calc(1.5rem-1px)] px-6 py-5',
                    item.accent ? 'bg-crimson/[0.03]' : 'bg-[#0a0a0a]',
                    'border border-white/[0.05]',
                    'shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]'
                  )}
                >
                  <div
                    className={cn(
                      'w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3',
                      item.accent
                        ? 'bg-crimson/[0.10] text-yosai-purple-light'
                        : 'bg-white/[0.03] text-white/30'
                    )}
                  >
                    <item.icon size={20} weight="light" />
                  </div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-white/30 mb-1.5">
                    {item.label}
                  </p>
                  <p className="text-sm font-medium text-white/70 group-hover:text-white/90 transition-colors">
                    {item.value}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 12, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ ...springTransition, delay: 0.3 }}
          className="flex items-center justify-center gap-4"
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="group flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/[0.05] bg-white/[0.01] text-white/35 hover:text-white/70 hover:border-white/[0.10] transition-all duration-500"
            >
              <link.icon size={15} weight="light" className="group-hover:scale-105 transition-transform duration-500" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.12em]">
                {link.label}
              </span>
              <ArrowSquareOut
                size={10}
                weight="light"
                className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500"
              />
            </a>
          ))}
        </motion.div>

        {/* Management Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ...springTransition, delay: 0.4 }}
          className="mt-12 text-[10px] text-white/15 uppercase tracking-[0.2em] font-medium"
        >
          Orion Music Group — Management & Booking
        </motion.p>
      </div>
    </section>
  );
}
