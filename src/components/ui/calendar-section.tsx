'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Video, AlertCircle } from 'lucide-react';

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
      className="relative w-full py-24 md:py-32 px-6 md:px-8 bg-[#020202] overflow-hidden border-t border-white/5"
      aria-labelledby="calendar-section-heading"
    >
      {/* Ambient Glows */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-[600px] h-[500px] bg-crimson/8 blur-[180px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-neon-blue/3 blur-[150px] pointer-events-none"
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-14"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-yosai-purple-light mb-4">
            Agenda tu Llamada
          </p>
          <h2
            id="calendar-section-heading"
            className="text-4xl md:text-6xl font-black uppercase leading-none tracking-tighter text-white mb-6"
          >
            Hablemos de{' '}
            <span className="text-yosai-purple-light neon-text">tu evento</span>
          </h2>
          <p className="text-sm md:text-base text-zinc-400 max-w-lg mx-auto leading-relaxed">
            Selecciona un horario que te funcione. En la llamada revisaremos
            fechas, riders, logística y presupuesto para tu evento.
          </p>
        </motion.div>

        {/* Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-10"
        >
          {[
            {
              icon: Clock,
              title: '30 Minutos',
              desc: 'Llamada de negociación rápida y directa.',
            },
            {
              icon: Video,
              title: 'Zoom / Meet',
              desc: 'Link enviado al confirmar la reserva.',
            },
            {
              icon: Calendar,
              title: 'Disponible',
              desc: 'Lun-Vie, 10:00 - 18:00 (CDMX).',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-3 p-4 rounded-2xl border border-white/5 bg-white/[0.01]"
            >
              <div className="w-10 h-10 rounded-xl bg-crimson/10 border border-crimson/20 flex items-center justify-center text-yosai-purple-light shrink-0">
                <item.icon size={18} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-white">
                  {item.title}
                </p>
                <p className="text-[11px] text-zinc-500 mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Calendly Embed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="relative rounded-3xl border border-crimson/20 bg-black/60 backdrop-blur-xl overflow-hidden shadow-[0_0_60px_rgba(130,0,15,0.15)]"
        >
          {/* Skeleton Loader */}
          {isLoading && (
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/80">
              <div className="w-12 h-12 rounded-full border-2 border-crimson/30 border-t-crimson animate-spin mb-6" />
              <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold">
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
        </motion.div>

        {/* Note */}
        <div className="mt-8 flex items-start gap-3 p-4 rounded-2xl border border-neon-blue/10 bg-neon-blue/[0.02]">
          <AlertCircle size={14} className="text-neon-blue mt-0.5 shrink-0" />
          <p className="text-[11px] text-zinc-500 leading-relaxed">
            ¿No encuentras un horario que funcione? Escríbenos directamente a{' '}
            <a
              href="mailto:booking@orionmusic.com"
              className="text-neon-blue hover:underline"
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
