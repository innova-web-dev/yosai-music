'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  MusicNotes,
  Buildings,
  HandHeart,
  UsersThree,
  Clock,
  Microphone,
} from '@phosphor-icons/react';
import { cn } from '@/lib/utils';

const springTransition = { type: 'spring' as const, stiffness: 100, damping: 20 };

const showTypes = [
  {
    icon: MusicNotes,
    title: 'Festivales',
    description:
      'El formato ideal para grandes audiencias. Set de alta energia con banda completa, visuales sincronizados y produccion de primer nivel.',
    specs: [
      { icon: UsersThree, text: '5,000 – 50,000+ asistentes' },
      { icon: Clock, text: 'Set de 45 – 90 minutos' },
      { icon: Microphone, text: 'Banda completa + visuales' },
    ],
    accent: true,
  },
  {
    icon: Buildings,
    title: 'Clubes & Teatros',
    description:
      'Experiencia intima y cercana. Set adaptado para espacios cerrados con opcion acustica. Perfecta para conectar con el publico.',
    specs: [
      { icon: UsersThree, text: '200 – 3,000 asistentes' },
      { icon: Clock, text: 'Set de 60 – 90 minutos' },
      { icon: Microphone, text: 'Full band o acustico' },
    ],
  },
  {
    icon: HandHeart,
    title: 'Eventos Privados',
    description:
      'Exclusividad para tu evento corporativo, boda de lujo o celebracion privada. Show personalizado con repertorio a la carta.',
    specs: [
      { icon: UsersThree, text: '50 – 2,000 invitados' },
      { icon: Clock, text: 'Set de 30 – 60 minutos' },
      { icon: Microphone, text: 'Repertorio personalizable' },
    ],
  },
  {
    icon: UsersThree,
    title: 'Colaboraciones',
    description:
      'Features, composicion y produccion para otros artistas. Yosai tambien esta disponible para escribir y grabar en tu proyecto.',
    specs: [
      { icon: UsersThree, text: 'Sesiones de estudio' },
      { icon: Clock, text: 'Composicion & produccion' },
      { icon: Microphone, text: 'Features en tracks' },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: springTransition,
  },
};

function ShowCard({ type }: { type: (typeof showTypes)[number] }) {
  return (
    <motion.div variants={itemVariants}>
      {/* Double-Bezel */}
      <div
        className={cn(
          'p-[1px] rounded-[1.75rem] h-full',
          type.accent
            ? 'bg-gradient-to-br from-crimson/15 to-transparent'
            : 'bg-white/[0.04]'
        )}
      >
        <div
          className={cn(
            'relative h-full rounded-[calc(1.75rem-1px)] p-6 md:p-8',
            type.accent ? 'bg-crimson/[0.03]' : 'bg-[#0a0a0a]',
            'border border-white/[0.05]',
            'shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]'
          )}
        >
          {/* Icon */}
          <div
            className={cn(
              'w-11 h-11 rounded-xl flex items-center justify-center mb-5',
              type.accent
                ? 'bg-crimson/[0.12] text-yosai-purple-light'
                : 'bg-white/[0.03] text-white/40'
            )}
          >
            <type.icon size={24} weight="light" />
          </div>

          <h3 className="text-lg md:text-xl font-bold uppercase tracking-tight text-white mb-3">
            {type.title}
          </h3>
          <p className="text-sm text-white/35 leading-relaxed mb-6">
            {type.description}
          </p>

          {/* Specs */}
          <div className="space-y-3">
            {type.specs.map((spec) => (
              <div
                key={spec.text}
                className="flex items-center gap-3 text-xs text-white/30"
              >
                <spec.icon size={14} weight="light" className="text-white/25 shrink-0" />
                <span>{spec.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function ShowTypes() {
  return (
    <section className="relative w-full py-32 md:py-40 px-6 md:px-8 bg-[#050505] overflow-hidden border-t border-white/[0.04]">
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
              Tipos de Show
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.95] tracking-tighter text-white max-w-2xl">
            El formato perfecto para{' '}
            <span className="text-yosai-purple-light">tu evento</span>
          </h2>
          <p className="text-sm md:text-base text-white/35 mt-5 max-w-lg leading-relaxed">
            Cada evento es unico. Estos son los formatos disponibles. No
            encuentras lo que buscas? Hablemos.
          </p>
        </motion.div>

        {/* 2-column Zig-Zag grid (NOT 3-column — per skill directive) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-3"
        >
          {showTypes.map((type) => (
            <ShowCard key={type.title} type={type} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
