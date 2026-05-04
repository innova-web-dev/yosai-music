'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  SpeakerHifi,
  Plug,
  Wine,
  Car,
  ShieldCheck,
  DownloadSimple,
} from '@phosphor-icons/react';

const springTransition = { type: 'spring' as const, stiffness: 100, damping: 20 };

const riderItems = [
  {
    icon: SpeakerHifi,
    title: 'Audio & Escenario',
    details: [
      'Sistema PA profesional (minimo line array 8+4)',
      'Consola digital de 32+ canales',
      'Monitoreo in-ear estereo (5 mezclas)',
      'Escenario minimo: 8m x 6m',
    ],
  },
  {
    icon: Plug,
    title: 'Backline & Equipo',
    details: [
      'Bateria acustica completa con hardware',
      'Amplificadores de bajo y guitarra (backline estandar)',
      '3 microfonos Shure SM58 / Beta 58',
      'DI boxes para bajo, guitarra acustica y teclado',
    ],
  },
  {
    icon: Wine,
    title: 'Hospitalidad',
    details: [
      'Camerino privado para 6 personas',
      'Agua, bebidas hidratantes y snacks',
      'Toallas limpias',
      'Cena caliente post-show',
    ],
  },
  {
    icon: Car,
    title: 'Logistica',
    details: [
      'Transporte terrestre para 6 + equipo',
      'Vuelos (si aplica) para artista + manager',
      'Hotel 4 estrellas (2 habitaciones)',
      'Estacionamiento seguro',
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
  hidden: { opacity: 0, y: 20, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: springTransition,
  },
};

export function RiderSection() {
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
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.06] bg-white/[0.02] mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-yosai-purple-light" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
                  Rider Tecnico
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.95] tracking-tighter text-white max-w-2xl">
                Requisitos{' '}
                <span className="text-yosai-purple-light">profesionales</span>
              </h2>
              <p className="text-sm md:text-base text-white/35 mt-5 max-w-lg leading-relaxed">
                Todo lo necesario para que el show brille en tu venue. Rider
                completo en el EPK descargable.
              </p>
            </div>

            {/* Button-in-Button */}
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-0 bg-white text-[#050505] hover:bg-white/90 pl-6 pr-2 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-[0.15em] transition-colors duration-500 shrink-0"
            >
              Descargar Rider
              <span className="ml-3 w-8 h-8 rounded-full bg-black/5 group-hover:bg-black/10 flex items-center justify-center transition-colors duration-500">
                <DownloadSimple
                  size={15}
                  weight="bold"
                  className="group-hover:translate-y-0.5 transition-transform duration-500"
                />
              </span>
            </motion.button>
          </div>
        </motion.div>

        {/* 2-column Zig-Zag grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-3"
        >
          {riderItems.map((item) => (
            <motion.div key={item.title} variants={itemVariants}>
              {/* Double-Bezel */}
              <div className="p-[1px] rounded-[1.5rem] bg-white/[0.04] h-full">
                <div className="h-full rounded-[calc(1.5rem-1px)] p-6 md:p-8 bg-[#0a0a0a] border border-white/[0.05] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 rounded-xl bg-crimson/[0.08] border border-crimson/[0.12] flex items-center justify-center text-yosai-purple-light shrink-0">
                      <item.icon size={18} weight="light" />
                    </div>
                    <h3 className="text-sm font-bold uppercase tracking-[0.1em] text-white/80">
                      {item.title}
                    </h3>
                  </div>
                  <ul className="space-y-2.5">
                    {item.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-start gap-2.5 text-xs text-white/35 leading-relaxed"
                      >
                        <span className="w-1 h-1 rounded-full bg-crimson/40 mt-1.5 shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Legal Note */}
        <div className="mt-12 pt-8 border-t border-white/[0.04] flex items-center gap-3">
          <ShieldCheck size={14} weight="light" className="text-white/15 shrink-0" />
          <p className="text-[10px] text-white/20 uppercase tracking-[0.15em] leading-relaxed">
            El rider tecnico completo y actualizado se entrega al confirmar la
            reserva. Sujeto a ajustes segun el tipo de evento y venue.
          </p>
        </div>
      </div>
    </section>
  );
}
