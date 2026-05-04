'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  CalendarBlank,
  Clock,
  VideoCamera,
  WarningCircle,
} from '@phosphor-icons/react';

const springTransition = { type: 'spring' as const, stiffness: 100, damping: 20 };

interface CalendarSectionProps {
  calendlyUrl?: string;
}

export function CalendarSection({
  calendlyUrl = 'https://calendly.com/yosaimusic/booking-call',
}: CalendarSectionProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <section
      id="calendario"
      className="relative w-full py-32 md:py-40 px-6 md:px-8 bg-[#050505] overflow-hidden border-t border-white/[0.04]"
      aria-labelledby="calendar-section-heading"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-80px' }}
          transition={springTransition}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.06] bg-white/[0.02] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-yosai-purple-light" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
              Agenda tu Llamada
            </span>
          </div>
          <h2
            id="calendar-section-heading"
            className="text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.95] tracking-tighter text-white mb-6"
          >
            Hablemos de{' '}
            <span className="text-yosai-purple-light">tu evento</span>
          </h2>
          <p className="text-sm md:text-base text-white/35 max-w-lg mx-auto leading-relaxed">
            Selecciona un horario que te funcione. En la llamada revisaremos
            fechas, riders, logistica y presupuesto.
          </p>
        </motion.div>

        {/* Info Islands */}
        <motion.div
          initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ ...springTransition, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {[
            {
              icon: Clock,
              title: '30 Minutos',
              desc: 'Llamada de negociacion rapida y directa.',
            },
            {
              icon: VideoCamera,
              title: 'Zoom / Meet',
              desc: 'Link enviado al confirmar la reserva.',
            },
            {
              icon: CalendarBlank,
              title: 'Disponible',
              desc: 'Lun–Vie, 10:00 – 18:00 (CDMX).',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-3 px-5 py-4 rounded-2xl border border-white/[0.05] bg-[#0a0a0a]"
            >
              <div className="w-9 h-9 rounded-xl bg-crimson/[0.06] border border-crimson/[0.10] flex items-center justify-center text-yosai-purple-light shrink-0">
                <item.icon size={17} weight="light" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white/70">
                  {item.title}
                </p>
                <p className="text-[11px] text-white/30 mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Calendly Embed — Double-Bezel wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ ...springTransition, delay: 0.2 }}
        >
          <div className="p-[1px] rounded-[1.75rem] bg-white/[0.04]">
            <div className="relative rounded-[calc(1.75rem-1px)] overflow-hidden bg-[#0a0a0a] border border-white/[0.05] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
              {/* Skeleton Loader */}
              {isLoading && (
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#0a0a0a]/90">
                  <div className="w-10 h-10 rounded-full border border-crimson/[0.15] border-t-crimson/50 animate-spin mb-5" />
                  <p className="text-[10px] text-white/25 uppercase tracking-[0.2em] font-medium">
                    Cargando calendario...
                  </p>
                </div>
              )}

              <iframe
                src={calendlyUrl}
                width="100%"
                height="720"
                frameBorder="0"
                title="Agendar llamada con Yosai Music"
                className="w-full bg-transparent"
                onLoad={() => setIsLoading(false)}
                style={{ minHeight: '720px' }}
              />
            </div>
          </div>
        </motion.div>

        {/* Fallback Note */}
        <div className="mt-8 flex items-start gap-3 px-5 py-4 rounded-2xl border border-white/[0.04] bg-[#0a0a0a]">
          <WarningCircle size={14} weight="light" className="text-white/20 mt-0.5 shrink-0" />
          <p className="text-[11px] text-white/25 leading-relaxed">
            No encuentras un horario que funcione? Escribenos directamente a{' '}
            <a
              href="mailto:booking@orionmusic.com"
              className="text-white/45 hover:text-white/70 underline underline-offset-4 transition-colors"
            >
              booking@orionmusic.com
            </a>{' '}
            y encontramos una alternativa.
          </p>
        </div>
      </div>
    </section>
  );
}
