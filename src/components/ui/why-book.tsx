'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Award, Radio, MapPin, Star, Zap } from 'lucide-react';

const cards = [
  {
    icon: TrendingUp,
    value: '15M+',
    label: 'Streams Totales',
    detail: 'En Spotify, Apple Music y YouTube',
    span: 'md:col-span-2 md:row-span-2',
    highlight: true,
  },
  {
    icon: Award,
    value: 'Top 50',
    label: 'Viral México',
    detail: 'Playlist editorial de Spotify',
  },
  {
    icon: Radio,
    value: '500K+',
    label: 'Oyentes Mensuales',
    detail: 'Audiencia fiel y en crecimiento',
  },
  {
    icon: MapPin,
    value: '12',
    label: 'Países Alcanzados',
    detail: 'México, USA, Colombia, España y más',
  },
  {
    icon: Star,
    value: '98%',
    label: 'Satisfacción',
    detail: 'Promotores que repiten contrato',
    span: 'md:col-span-2',
  },
  {
    icon: Zap,
    value: '200+',
    label: 'Shows Realizados',
    detail: 'Festivales, teatros y eventos privados',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] as const },
  },
};

export function WhyBook() {
  return (
    <section className="relative w-full py-24 md:py-32 px-6 md:px-8 bg-black overflow-hidden">
      {/* Ambient Glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-crimson/5 blur-[180px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="mb-16 md:mb-20"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-yosai-purple-light mb-4">
            ¿Por Qué Yosai?
          </p>
          <h2 className="text-4xl md:text-6xl font-black uppercase leading-none tracking-tighter text-white max-w-2xl">
            Un artista que{' '}
            <span className="text-yosai-purple-light">llena escenarios</span>
          </h2>
          <p className="text-sm md:text-base text-zinc-400 mt-4 max-w-xl leading-relaxed">
            Números reales, audiencia comprometida y un show que deja huella.
            Esto es lo que Yosai aporta a tu evento.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4"
        >
          {cards.map((card) => (
            <motion.div
              key={card.label}
              variants={cardVariants}
              className={`relative group ${
                card.span || ''
              } p-6 md:p-8 rounded-3xl border ${
                card.highlight
                  ? 'border-crimson/30 bg-crimson/5 backdrop-blur-sm'
                  : 'border-white/5 bg-white/[0.02] backdrop-blur-sm'
              } hover:border-white/10 transition-colors duration-500`}
            >
              {card.highlight && (
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-crimson/10 to-transparent pointer-events-none" />
              )}

              <div className="relative z-10">
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${
                    card.highlight
                      ? 'bg-crimson/20 text-yosai-purple-light'
                      : 'bg-white/5 text-zinc-400 group-hover:text-white transition-colors'
                  }`}
                >
                  <card.icon size={22} />
                </div>

                <p
                  className={`text-3xl md:text-4xl font-black tracking-tighter mb-1 ${
                    card.highlight ? 'text-yosai-purple-light neon-text' : 'text-white'
                  }`}
                >
                  {card.value}
                </p>
                <p className="text-sm font-bold uppercase tracking-widest text-white mb-2">
                  {card.label}
                </p>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  {card.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
