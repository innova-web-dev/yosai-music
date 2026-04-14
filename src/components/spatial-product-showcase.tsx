'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// =========================================
// CONFIGURACIÓN DE DATOS
// =========================================

export type SectionId = 'redes' | 'plataformas';

const SOCIAL_DATA: Record<SectionId, {
  id: string;
  label: string;
  title: string;
  description: string;
  image: string;
  colors: { gradient: string; glow: string };
  items: { label: string; logo: string; link: string; floatDelay: number }[];
}> = {
  plataformas: {
    id: 'plataformas',
    label: 'Plataformas',
    title: 'Escucha mi música',
    description: 'Mi música disponible en las mejores plataformas de streaming.',
    image: '/images/yosai-musica.jpeg',
    colors: {
      gradient: 'from-blue-600 to-indigo-900',
      glow: 'bg-blue-500',
    },
    items: [
      { label: 'Spotify', logo: '/icons/spotify.png', link: '...', floatDelay: 0 },
      { label: 'YouTube', logo: '/icons/youtube.png', link: '...', floatDelay: 1.2 },
      { label: 'Apple Music', logo: '/icons/apple.png', link: '...', floatDelay: 0.6 },
    ],
  },
  redes: {
    id: 'redes',
    label: 'Social Media',
    title: 'Conecta conmigo',
    description: 'Sigue mi día a día, procesos creativos y anuncios oficiales.',
    image: '/images/yosai2.jpeg',
    colors: {
      gradient: 'from-red-600 to-orange-900',
      glow: 'bg-red-500',
    },
    items: [
      { label: 'Instagram', logo: '/icons/instagram.png', link: 'https://www.instagram.com/yosaimusic?igsh=NXBzemU3NDJjb3R5', floatDelay: 0.3 },
      { label: 'Facebook', logo: '/icons/facebook.png', link: 'https://facebook.com/yosaimusic1', floatDelay: 0.9 },
      { label: 'Contacto', logo: '/icons/contacto.png', link: 'mailto:yosaimusic@gmail.com', floatDelay: 1.5 },
    ],
  },
};

// =========================================
// Floating Icon Component
// =========================================

function FloatingIcon({
  item,
  index,
}: {
  item: { label: string; logo: string; link: string; floatDelay: number };
  index: number;
}) {
  return (
    <motion.a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col items-center gap-2 sm:gap-3 cursor-pointer"
      initial={{ opacity: 0, y: 30, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.8 }}
      transition={{
        delay: index * 0.12,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Floating animation wrapper */}
      <motion.div
        className="relative"
        animate={{
          y: [0, -10, 0, 6, 0],
          rotate: [0, 1.5, 0, -1.5, 0],
        }}
        transition={{
          duration: 5 + item.floatDelay,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: item.floatDelay,
        }}
      >
        {/* Glow behind icon */}
        <div className="absolute inset-0 rounded-full bg-white/5 blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Icon */}
        <motion.div
          className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full
                     bg-white/[0.03] backdrop-blur-sm border border-white/[0.06]
                     transition-all duration-500 ease-out
                     group-hover:bg-white/[0.08] group-hover:border-white/[0.15]
                     group-hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]"
          whileHover={{ scale: 1.35 }}
          whileTap={{ scale: 1.2 }}
          transition={{ type: 'spring', stiffness: 400, damping: 15 }}
        >
          <img
            src={item.logo}
            alt={item.label}
            className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 object-contain
                       filter brightness-90 group-hover:brightness-110
                       group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]
                       transition-all duration-500"
          />
        </motion.div>
      </motion.div>

      {/* Label on hover */}
      <span
        className="text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-zinc-600
                   group-hover:text-zinc-300 transition-all duration-300
                   opacity-0 group-hover:opacity-100"
      >
        {item.label}
      </span>
    </motion.a>
  );
}

// =========================================
// COMPONENTE PRINCIPAL
// =========================================

export default function SocialShowcase() {
  const [activeTab, setActiveTab] = useState<SectionId>('plataformas');
  const data = SOCIAL_DATA[activeTab];
  const isRedes = activeTab === 'redes';

  return (
    <section className="relative min-h-screen w-full bg-[#020202] py-16 sm:py-20 md:py-24 flex flex-col items-center justify-center overflow-hidden border-t border-white/5">

      <main className="relative z-10 w-full px-4 sm:px-6 max-w-7xl mx-auto">
        <motion.div
          layout
          className={`flex flex-col items-center justify-center gap-10 sm:gap-12 md:gap-20
${isRedes ? 'md:flex-row-reverse' : 'md:flex-row'}`}
        >
          {/* ── Visual Side: Circular Image ── */}
          <div className="relative shrink-0">
            <div className="relative h-56 w-56 sm:h-72 sm:w-72 md:h-[420px] md:w-[420px] rounded-full overflow-hidden bg-zinc-900/40 border border-white/10 backdrop-blur-xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={data.id}
                  src={data.image}
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>

            {/* Subtle glow ring */}
            <div className={`absolute -inset-4 rounded-full bg-gradient-to-r ${data.colors.gradient} opacity-[0.07] blur-2xl pointer-events-none`} />
          </div>

          {/* ── Content Side: Title + Floating Icons ── */}
          <div className="w-full max-w-md text-white text-center md:text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={data.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] sm:tracking-widest text-zinc-500 mb-2">
                  {data.label}
                </h3>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-anton uppercase mb-3 sm:mb-4 tracking-tighter">
                  {data.title}
                </h2>
                <p className="text-xs sm:text-sm text-zinc-500 mb-8 sm:mb-10 max-w-sm mx-auto md:mx-0">
                  {data.description}
                </p>

                {/* Floating icons — NO container */}
                <div className="flex items-center justify-center md:justify-start gap-6 sm:gap-8 md:gap-10">
                  <AnimatePresence>
                    {data.items.map((item, i) => (
                      <FloatingIcon key={item.label} item={item} index={i} />
                    ))}
                  </AnimatePresence>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </main>

      {/* ── Tab Switcher ── */}
      <div className="mt-14 sm:mt-16 md:mt-20 relative z-50">
        <div className="flex p-1 sm:p-1.5 bg-zinc-900/80 rounded-full border border-white/10 backdrop-blur-3xl shadow-2xl">
          {(['plataformas', 'redes'] as SectionId[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-widest transition-all
${activeTab === tab ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTabSocial"
                  className={`absolute inset-0 rounded-full bg-gradient-to-r ${SOCIAL_DATA[tab].colors.gradient} shadow-[0_0_20px_rgba(0,0,0,0.4)]`}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
