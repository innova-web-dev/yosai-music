'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import Image from 'next/image';
import { images as assetImages } from '@/lib/images';

const testimonials = [
  {
    quote:
      'Yosai transformó nuestro festival. La energía que trajo al escenario fue incomparable y el público no dejó de corear cada canción.',
    author: 'Carlos Mendoza',
    role: 'Director — Festival Vive Latino',
  },
  {
    quote:
      'Contratamos a Yosai para nuestro evento corporativo y superó todas las expectativas. Profesional, puntual y un show de clase mundial.',
    author: 'María García',
    role: 'CEO — Grupo Financiero del Valle',
  },
  {
    quote:
      'El corrido mexicano necesita voces frescas como la de Yosai. Su show en el Teatro Metropólitan fue de los más comentados del año.',
    author: 'Luis Hernández',
    role: 'Promotor — OCESA',
  },
];

const galleryImages = [
  { src: assetImages[0].src, alt: 'Yosai en vivo' },   // ID 1 - yosai elegante
  { src: assetImages[3].src, alt: 'Yosai detalle' },    // ID 4 - El Detalle
  { src: assetImages[11].src, alt: 'Yosai portrait' },   // ID 12 - MinimalistHero
  { src: assetImages[2].src, alt: 'Yosai backstage' },   // ID 3 - El Backstage
];

export function PastShows() {
  return (
    <section className="relative w-full py-24 md:py-32 px-6 md:px-8 bg-[#020202] overflow-hidden border-t border-white/5">
      {/* Ambient */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-crimson/5 blur-[150px] pointer-events-none"
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
            Trayectoria
          </p>
          <h2 className="text-4xl md:text-6xl font-black uppercase leading-none tracking-tighter text-white max-w-2xl">
            Quienes ya confiaron en{' '}
            <span className="text-yosai-purple-light">Yosai</span>
          </h2>
        </motion.div>

        {/* Gallery + Testimonials Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Gallery Column (2 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-2 grid grid-cols-2 gap-3"
          >
            {galleryImages.map((img, i) => (
              <div
                key={img.alt}
                className={`relative overflow-hidden rounded-2xl border border-white/5 ${
                  i === 0 ? 'col-span-2 aspect-[16/7]' : 'aspect-[3/4]'
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes={i === 0 ? '(max-width: 768px) 100vw, 40vw' : '(max-width: 768px) 50vw, 20vw'}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            ))}
          </motion.div>

          {/* Testimonials Column (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.author}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.6,
                  ease: [0.23, 1, 0.32, 1],
                  delay: i * 0.1,
                }}
                className="p-6 md:p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-crimson/10 transition-colors duration-500"
              >
                <Quote size={20} className="text-yosai-purple-light mb-4 opacity-40" />
                <p className="text-sm md:text-base text-zinc-300 leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        size={12}
                        className="text-yosai-purple-light fill-yosai-purple-light"
                      />
                    ))}
                  </div>
                  <div className="h-4 w-px bg-white/10" />
                  <div>
                    <p className="text-xs font-bold text-white">{t.author}</p>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-wider">
                      {t.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
