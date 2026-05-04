'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Music, Building2, Users, HeartHandshake, Clock, Mic } from 'lucide-react';

const showTypes = [
  {
    icon: Music,
    title: 'Festivales',
    description:
      'El formato ideal para grandes audiencias. Set de alta energía con banda completa, visuales sincronizados y producción de primer nivel.',
    specs: [
      { icon: Users, text: '5,000 - 50,000+ asistentes' },
      { icon: Clock, text: 'Set de 45 - 90 minutos' },
      { icon: Mic, text: 'Banda completa + visuales' },
    ],
  },
  {
    icon: Building2,
    title: 'Clubes & Teatros',
    description:
      'Una experiencia íntima y cercana. Set adaptado para espacios cerrados con opción acústica, perfecta para conectar con el público.',
    specs: [
      { icon: Users, text: '200 - 3,000 asistentes' },
      { icon: Clock, text: 'Set de 60 - 90 minutos' },
      { icon: Mic, text: 'Formato full band o acústico' },
    ],
  },
  {
    icon: HeartHandshake,
    title: 'Eventos Privados',
    description:
      'Exclusividad para tu evento corporativo, boda de lujo o celebración privada. Show personalizado con repertorio a la carta.',
    specs: [
      { icon: Users, text: '50 - 2,000 invitados' },
      { icon: Clock, text: 'Set de 30 - 60 minutos' },
      { icon: Mic, text: 'Repertorio personalizable' },
    ],
  },
  {
    icon: Users,
    title: 'Colaboraciones',
    description:
      'Features, composición y producción para otros artistas. Yosai también está disponible para escribir y grabar en tu proyecto.',
    specs: [
      { icon: Users, text: 'Sesiones de estudio' },
      { icon: Clock, text: 'Composición & producción' },
      { icon: Mic, text: 'Features en tracks' },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] as const },
  },
};

export function ShowTypes() {
  return (
    <section className="relative w-full py-24 md:py-32 px-6 md:px-8 bg-black overflow-hidden border-t border-white/5">
      {/* Ambient Glow */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-[500px] h-[400px] bg-neon-blue/3 blur-[150px] pointer-events-none"
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
            Tipos de Show
          </p>
          <h2 className="text-4xl md:text-6xl font-black uppercase leading-none tracking-tighter text-white max-w-2xl">
            El formato perfecto para{' '}
            <span className="text-yosai-purple-light">tu evento</span>
          </h2>
          <p className="text-sm md:text-base text-zinc-400 mt-4 max-w-xl leading-relaxed">
            Cada evento es único. Estos son los formatos disponibles. ¿No
            encuentras lo que buscas? Hablemos.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {showTypes.map((type) => (
            <motion.div
              key={type.title}
              variants={cardVariants}
              className="group relative p-8 md:p-10 rounded-3xl border border-white/5 bg-white/[0.01] backdrop-blur-sm hover:border-crimson/20 transition-colors duration-500"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-crimson/10 border border-crimson/20 flex items-center justify-center text-yosai-purple-light mb-6 group-hover:bg-crimson/20 transition-colors">
                <type.icon size={26} />
              </div>

              <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter text-white mb-3">
                {type.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                {type.description}
              </p>

              {/* Specs */}
              <div className="space-y-3">
                {type.specs.map((spec) => (
                  <div
                    key={spec.text}
                    className="flex items-center gap-3 text-xs text-zinc-500"
                  >
                    <spec.icon size={14} className="text-yosai-purple-light shrink-0" />
                    <span>{spec.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
