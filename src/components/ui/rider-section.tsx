'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Download, MonitorSpeaker, Cable, Wine, Car, Shield } from 'lucide-react';

const riderItems = [
  {
    icon: MonitorSpeaker,
    title: 'Audio & Escenario',
    details: [
      'Sistema PA profesional (mínimo line array 8+4)',
      'Consola digital de 32+ canales',
      'Monitoreo in-ear estéreo (5 mezclas)',
      'Escenario mínimo: 8m x 6m',
    ],
  },
  {
    icon: Cable,
    title: 'Backline & Equipo',
    details: [
      'Batería acústica completa con hardware',
      'Amplificadores de bajo y guitarra (backline estándar)',
      '3 micrófonos Shure SM58 / Beta 58',
      'DI boxes para bajo, guitarra acústica y teclado',
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
    title: 'Logística',
    details: [
      'Transporte terrestre para 6 personas + equipo',
      'Vuelos (si aplica) para artista + manager',
      'Hotel 4 estrellas (2 habitaciones)',
      'Estacionamiento seguro para vehículo de carga',
    ],
  },
];

export function RiderSection() {
  return (
    <section className="relative w-full py-24 md:py-32 px-6 md:px-8 bg-black overflow-hidden border-t border-white/5">
      <div
        aria-hidden="true"
        className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-crimson/5 blur-[180px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="mb-16 md:mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-6"
        >
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-yosai-purple-light mb-4">
              Rider Técnico
            </p>
            <h2 className="text-4xl md:text-6xl font-black uppercase leading-none tracking-tighter text-white max-w-2xl">
              Requisitos{' '}
              <span className="text-yosai-purple-light">profesionales</span>
            </h2>
            <p className="text-sm md:text-base text-zinc-400 mt-4 max-w-xl leading-relaxed">
              Todo lo necesario para que el show de Yosai brille en tu venue.
              Rider completo disponible en el EPK descargable.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 bg-white text-black hover:bg-yosai-purple-light hover:text-white px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all shrink-0"
          >
            <Download size={16} />
            Descargar Rider Completo
          </motion.button>
        </motion.div>

        {/* Rider Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {riderItems.map((item) => (
            <div
              key={item.title}
              className="p-6 md:p-8 rounded-3xl border border-white/5 bg-white/[0.01] backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-crimson/10 border border-crimson/20 flex items-center justify-center text-yosai-purple-light shrink-0">
                  <item.icon size={20} />
                </div>
                <h3 className="text-sm font-black uppercase tracking-wider text-white">
                  {item.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {item.details.map((detail) => (
                  <li
                    key={detail}
                    className="flex items-start gap-2 text-xs text-zinc-400 leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-yosai-purple-light mt-1.5 shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Legal Note */}
        <div className="mt-12 pt-8 border-t border-white/5 flex items-center gap-3">
          <Shield size={14} className="text-zinc-600 shrink-0" />
          <p className="text-[10px] text-zinc-600 uppercase tracking-widest leading-relaxed">
            El rider técnico completo y actualizado se entrega al confirmar la
            reserva. Sujeto a ajustes según el tipo de evento y venue.
          </p>
        </div>
      </div>
    </section>
  );
}
