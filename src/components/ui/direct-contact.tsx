'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle, Camera, Music2, ExternalLink } from 'lucide-react';

const contactItems = [
  {
    icon: Mail,
    label: 'Booking & Contrataciones',
    value: 'booking@orionmusic.com',
    href: 'mailto:booking@orionmusic.com',
    accent: 'text-yosai-purple-light',
    bg: 'bg-crimson/10 border-crimson/20',
  },
  {
    icon: Phone,
    label: 'Prensa & Media',
    value: '+52 (55) 0000 0000',
    href: 'tel:+525500000000',
    accent: 'text-neon-blue',
    bg: 'bg-neon-blue/10 border-neon-blue/20',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp Directo',
    value: '+52 1 (686) 123-4567',
    href: 'https://wa.me/5216861234567',
    accent: 'text-green-400',
    bg: 'bg-green-400/10 border-green-400/20',
  },
];

const socialLinks = [
  { icon: Camera, label: 'Instagram', href: 'https://instagram.com' },
  { icon: Music2, label: 'Spotify', href: 'https://spotify.com' },
];

export function DirectContact() {
  return (
    <section className="relative w-full py-24 md:py-32 px-6 md:px-8 bg-black overflow-hidden border-t border-white/5">
      {/* Ambient */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-crimson/5 blur-[180px] pointer-events-none"
      />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-yosai-purple-light mb-4">
            Contacto Directo
          </p>
          <h2 className="text-4xl md:text-5xl font-black uppercase leading-none tracking-tighter text-white mb-4">
            ¿Algo <span className="text-yosai-purple-light">urgente</span>?
          </h2>
          <p className="text-sm md:text-base text-zinc-400 max-w-lg mx-auto leading-relaxed mb-14">
            Si prefieres un contacto directo o tienes una consulta urgente,
            estamos disponibles en estos canales.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {contactItems.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.5,
                ease: [0.23, 1, 0.32, 1],
                delay: i * 0.1,
              }}
              className={`group p-6 rounded-2xl border ${item.bg} backdrop-blur-sm hover:scale-[1.02] transition-all duration-300`}
            >
              <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center mx-auto mb-4 ${item.accent}`}>
                <item.icon size={22} />
              </div>
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-2">
                {item.label}
              </p>
              <p className="text-sm font-bold text-white group-hover:underline">
                {item.value}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-6"
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="flex items-center gap-2 px-5 py-3 rounded-full border border-white/5 bg-white/[0.02] text-zinc-400 hover:text-white hover:border-crimson/30 transition-all group"
            >
              <link.icon size={16} className="group-hover:scale-110 transition-transform" />
              <span className="text-[10px] font-bold uppercase tracking-widest">
                {link.label}
              </span>
              <ExternalLink
                size={10}
                className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
              />
            </a>
          ))}
        </motion.div>

        {/* Management Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-[10px] text-zinc-600 uppercase tracking-widest"
        >
          Orion Music Group — Management & Booking
        </motion.p>
      </div>
    </section>
  );
}
