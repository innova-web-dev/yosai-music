'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, UsersThree, Globe, Sparkle } from '@phosphor-icons/react';
import Image from 'next/image';

interface BookingHeroProps {
  imageSrc: string;
  imageAlt: string;
  onCtaClick: () => void;
}

const stats = [
  { value: '15.2M+', label: 'Streams Totales', icon: Sparkle },
  { value: '247', label: 'Shows en Vivo', icon: Sparkle },
  { value: '14', label: 'Paises', icon: Globe },
  { value: '512K+', label: 'Oyentes', icon: UsersThree },
];

const springTransition = { type: 'spring' as const, stiffness: 100, damping: 20 };

function StatIsland({
  stat,
  index,
}: {
  stat: (typeof stats)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ ...springTransition, delay: 0.6 + index * 0.08 }}
      className="flex items-center gap-3 px-5 py-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm"
    >
      <div className="w-8 h-8 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-white/70">
        <stat.icon size={18} weight="light" />
      </div>
      <div>
        <p className="text-sm font-semibold text-white leading-none tracking-tight">
          {stat.value}
        </p>
        <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-white/35 mt-0.5">
          {stat.label}
        </p>
      </div>
    </motion.div>
  );
}

export function BookingHero({ imageSrc, imageAlt, onCtaClick }: BookingHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.2]);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[100dvh] flex items-center bg-[#050505] overflow-hidden"
      aria-labelledby="booking-hero-heading"
    >
      {/* Image — right side on desktop, full-bleed behind on mobile */}
      <motion.div
        className="absolute inset-0 md:left-[45%] md:w-[55%] z-0"
        style={{ scale: imageScale, opacity: imageOpacity }}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-center"
          priority
          sizes="(max-width: 768px) 100vw, 55vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/85 to-[#050505]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/20" />
      </motion.div>

      {/* Subtle ambient mesh — ethereal glass vibe */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 right-1/3 w-[600px] h-[400px] bg-crimson/[0.03] rounded-full blur-[180px] pointer-events-none z-0"
      />

      {/* Content — left aligned */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-lg">
          {/* Eyebrow Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={springTransition}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.06] bg-white/[0.02] mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-yosai-purple-light" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
              Contrataciones
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            id="booking-hero-heading"
            initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ ...springTransition, delay: 0.08 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tighter text-white mb-6"
          >
            Reserva a{' '}
            <span className="text-yosai-purple-light">Yosai</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ ...springTransition, delay: 0.16 }}
            className="text-sm md:text-base leading-relaxed text-white/40 max-w-md mb-10"
          >
            El sonido del valle en tu escenario. Shows en vivo, eventos privados
            y colaboraciones que transforman cualquier venue en una experiencia
            inolvidable.
          </motion.p>

          {/* Button-in-Button CTA */}
          <motion.button
            initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ ...springTransition, delay: 0.24 }}
            onClick={onCtaClick}
            className="group relative inline-flex items-center gap-0 bg-white text-[#050505] hover:bg-white/90 pl-7 pr-2 py-2.5 rounded-full text-xs font-bold uppercase tracking-[0.15em] transition-colors duration-500 active:scale-[0.97]"
          >
            Agendar Llamada
            <span className="ml-4 w-9 h-9 rounded-full bg-black/5 group-hover:bg-black/10 flex items-center justify-center transition-colors duration-500">
              <ArrowDown
                size={16}
                weight="bold"
                className="group-hover:translate-y-0.5 transition-transform duration-500"
              />
            </span>
          </motion.button>
        </div>

        {/* Stats — floating islands at bottom */}
        <div className="mt-16 md:mt-24 flex flex-wrap gap-3">
          {stats.map((stat, i) => (
            <StatIsland key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
