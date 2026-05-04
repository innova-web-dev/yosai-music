'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  TrendUp,
  Medal,
  Broadcast,
  MapPin,
  Star,
  Lightning,
} from '@phosphor-icons/react';
import { cn } from '@/lib/utils';

const springTransition = { type: 'spring' as const, stiffness: 100, damping: 20 };

const cards = [
  {
    icon: TrendUp,
    value: '15.2M+',
    label: 'Streams Totales',
    detail: 'Spotify, Apple Music, YouTube',
    size: 'md:col-span-3 md:row-span-2',
    accent: true,
  },
  {
    icon: Medal,
    value: 'Top 50',
    label: 'Viral Mexico',
    detail: 'Playlist editorial Spotify',
    size: 'md:col-span-2',
  },
  {
    icon: Broadcast,
    value: '512K+',
    label: 'Oyentes Mensuales',
    detail: 'Audiencia en crecimiento',
    size: 'md:col-span-3',
  },
  {
    icon: Star,
    value: '98.4%',
    label: 'Satisfaccion',
    detail: 'Promotores que repiten',
    size: 'md:col-span-2',
  },
  {
    icon: Lightning,
    value: '247',
    label: 'Shows Realizados',
    detail: 'Festivales, teatros, privados',
    size: 'md:col-span-3',
  },
  {
    icon: MapPin,
    value: '14',
    label: 'Paises Alcanzados',
    detail: 'MX, US, CO, ES, AR y mas',
    size: 'md:col-span-2',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
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

function BentoCard({
  card,
}: {
  card: (typeof cards)[number];
}) {
  return (
    <motion.div variants={itemVariants} className={cn(card.size)}>
      {/* Double-Bezel: Outer Shell */}
      <div
        className={cn(
          'p-[1px] rounded-[1.75rem]',
          card.accent
            ? 'bg-gradient-to-br from-crimson/20 to-transparent'
            : 'bg-white/[0.04]'
        )}
      >
        {/* Inner Core */}
        <div
          className={cn(
            'relative h-full rounded-[calc(1.75rem-1px)] p-6 md:p-8',
            card.accent
              ? 'bg-crimson/[0.04]'
              : 'bg-[#0a0a0a]',
            'border border-white/[0.05]',
            'shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]'
          )}
        >
          <div className="relative z-10">
            <div
              className={cn(
                'w-10 h-10 rounded-xl flex items-center justify-center mb-5',
                card.accent
                  ? 'bg-crimson/[0.12] text-yosai-purple-light'
                  : 'bg-white/[0.03] text-white/40'
              )}
            >
              <card.icon size={22} weight="light" />
            </div>

            <p
              className={cn(
                'text-3xl md:text-4xl font-bold tracking-tight mb-1',
                card.accent ? 'text-yosai-purple-light' : 'text-white'
              )}
            >
              {card.value}
            </p>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/60 mb-2">
              {card.label}
            </p>
            <p className="text-xs text-white/30 leading-relaxed">
              {card.detail}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function WhyBook() {
  return (
    <section className="relative w-full py-32 md:py-40 px-6 md:px-8 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-80px' }}
          transition={springTransition}
          className="mb-16 md:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.06] bg-white/[0.02] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-yosai-purple-light" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
              Por Que Yosai
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.95] tracking-tighter text-white max-w-2xl">
            Un artista que{' '}
            <span className="text-yosai-purple-light">llena escenarios</span>
          </h2>
          <p className="text-sm md:text-base text-white/35 mt-5 max-w-lg leading-relaxed">
            Numeros reales, audiencia comprometida y un show que deja huella.
            Esto es lo que Yosai aporta a tu evento.
          </p>
        </motion.div>

        {/* Asymmetrical Bento (5-column base, no 3-equal-columns) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-5 gap-3"
        >
          {cards.map((card) => (
            <BentoCard key={card.label} card={card} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
