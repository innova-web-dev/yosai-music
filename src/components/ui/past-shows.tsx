'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quotes, Star } from '@phosphor-icons/react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { images as assetImages } from '@/lib/images';

const springTransition = { type: 'spring' as const, stiffness: 100, damping: 20 };

const testimonials = [
  {
    quote:
      'Yosai transformo nuestro festival. La energia que trajo al escenario fue incomparable y el publico no dejo de corear cada cancion.',
    author: 'Carlos Mendoza',
    role: 'Director — Festival Vive Latino',
  },
  {
    quote:
      'Contratamos a Yosai para nuestro evento corporativo y supero todas las expectativas. Profesional, puntual y un show de clase mundial.',
    author: 'Maria Garcia de la Torre',
    role: 'CEO — Grupo Financiero del Valle',
  },
  {
    quote:
      'El corrido mexicano necesita voces frescas como la de Yosai. Su show en el Teatro Metropolita fue de los mas comentados del ano.',
    author: 'Luis Hernandez',
    role: 'Promotor — OCESA',
  },
];

const galleryImages = [
  { src: assetImages[0].src, alt: 'Yosai en vivo', wide: true },
  { src: assetImages[3].src, alt: 'Yosai detalle' },
  { src: assetImages[11].src, alt: 'Yosai retrato' },
  { src: assetImages[2].src, alt: 'Yosai backstage' },
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

export function PastShows() {
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
              Trayectoria
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.95] tracking-tighter text-white max-w-2xl">
            Quienes ya confiaron en{' '}
            <span className="text-yosai-purple-light">Yosai</span>
          </h2>
        </motion.div>

        {/* Asymmetrical layout: gallery (3/5) + testimonials (2/5) */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-3">
          {/* Gallery — 3 cols */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="lg:col-span-3 grid grid-cols-2 gap-3"
          >
            {galleryImages.map((img, i) => (
              <motion.div
                key={img.alt}
                variants={itemVariants}
                className={cn(
                  'relative overflow-hidden rounded-2xl border border-white/[0.05]',
                  img.wide && i === 0
                    ? 'col-span-2 aspect-[16/7]'
                    : 'aspect-[3/4]'
                )}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-1000 hover:scale-[1.03]"
                  sizes={
                    img.wide && i === 0
                      ? '(max-width: 768px) 100vw, 60vw'
                      : '(max-width: 768px) 50vw, 15vw'
                  }
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 to-transparent" />
              </motion.div>
            ))}
          </motion.div>

          {/* Testimonials — 2 cols */}
          <div className="lg:col-span-2 space-y-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.author}
                initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ ...springTransition, delay: i * 0.08 }}
              >
                {/* Double-Bezel */}
                <div className="p-[1px] rounded-[1.5rem] bg-white/[0.04]">
                  <div className="rounded-[calc(1.5rem-1px)] p-6 bg-[#0a0a0a] border border-white/[0.05] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                    <Quotes size={18} weight="light" className="text-crimson/40 mb-4" />
                    <p className="text-sm text-white/45 leading-relaxed mb-5 italic">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, j) => (
                          <Star
                            key={j}
                            size={10}
                            weight="fill"
                            className="text-yosai-purple-light/60"
                          />
                        ))}
                      </div>
                      <div className="w-px h-3 bg-white/[0.08]" />
                      <div>
                        <p className="text-xs font-semibold text-white/80">
                          {t.author}
                        </p>
                        <p className="text-[10px] text-white/30 uppercase tracking-wider">
                          {t.role}
                        </p>
                      </div>
                    </div>
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

