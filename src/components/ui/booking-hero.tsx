'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Sparkles, Users, Music, Globe } from 'lucide-react';
import Image from 'next/image';

interface BookingHeroProps {
  imageSrc: string;
  imageAlt: string;
  onCtaClick: () => void;
}

const stats = [
  { value: '15M+', label: 'Streams Totales', icon: Music },
  { value: '200+', label: 'Shows en Vivo', icon: Sparkles },
  { value: '12', label: 'Países', icon: Globe },
  { value: '500K+', label: 'Oyentes Mensuales', icon: Users },
];

export function BookingHero({ imageSrc, imageAlt, onCtaClick }: BookingHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center bg-black overflow-hidden"
      aria-labelledby="booking-hero-heading"
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ scale: imageScale, opacity: imageOpacity }}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
      </motion.div>

      {/* Crimson Glow */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-crimson/20 blur-[150px] pointer-events-none z-0"
      />
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-[400px] h-[300px] bg-neon-blue/5 blur-[120px] pointer-events-none z-0"
      />

      {/* Content */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <div className="max-w-3xl">
          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="text-[10px] font-bold uppercase tracking-[0.5em] text-yosai-purple-light mb-6"
          >
            Contrataciones
          </motion.p>

          {/* Headline */}
          <motion.h1
            id="booking-hero-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-none tracking-tighter text-white mb-6"
          >
            Reserva a{' '}
            <span className="text-yosai-purple-light neon-text">Yosai</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1], delay: 0.2 }}
            className="text-sm md:text-base leading-relaxed text-zinc-400 max-w-xl mb-10"
          >
            Lleva la energía de los corridos del valle a tu escenario. Shows en
            vivo, eventos privados, festivales y colaboraciones que harán de tu
            evento una experiencia inolvidable.
          </motion.p>

          {/* CTA */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1], delay: 0.3 }}
            onClick={onCtaClick}
            className="group relative inline-flex items-center gap-4 bg-crimson hover:bg-yosai-purple-light text-white px-10 py-5 rounded-full text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 shadow-[0_0_30px_rgba(130,0,15,0.5)] hover:shadow-[0_0_50px_rgba(163,0,21,0.7)] hover:scale-[1.02] active:scale-95"
          >
            Agendar Llamada de Negociación
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </motion.button>
        </div>
      </motion.div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1], delay: 0.5 }}
        className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/10 bg-black/60 backdrop-blur-xl"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-3 md:gap-4 py-5 md:py-6 px-4 md:px-8"
              >
                <div className="w-10 h-10 rounded-full bg-crimson/10 border border-crimson/20 flex items-center justify-center text-yosai-purple-light shrink-0">
                  <stat.icon size={18} />
                </div>
                <div>
                  <p className="text-lg md:text-xl font-black text-white leading-none">
                    {stat.value}
                  </p>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-500 mt-1">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
