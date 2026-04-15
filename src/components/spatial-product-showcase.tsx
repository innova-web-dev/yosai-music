'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// =========================================
// TYPES & DATA ARCHITECTURE
// =========================================
export type SectionId = 'plataformas' | 'redes';

const SOCIAL_DATA: Record<SectionId, {
  id: string;
  label: string;
  title: string;
  description: string;
  image: string;
  // Optimizamos el glow para usar valores de Tailwind que generen un aura volumétrica
  glowColor: string;
  items: { label: string; logo: string; link: string; floatDelay: number }[];
}> = {
  plataformas: {
    id: 'plataformas',
    label: 'Plataformas',
    title: 'Escucha mi música',
    description: 'Los corridos más duros disponibles en todas las plataformas de streaming de alta fidelidad.',
    image: '/images/yosaiplataforma-sinfondo.webp',
    glowColor: 'bg-blue-600/50', // Azul eléctrico/tecnológico para streaming
    items: [
      { label: 'Spotify', logo: '/icons/spotify.png', link: '#', floatDelay: 0 },
      { label: 'YouTube', logo: '/icons/youtube.png', link: '#', floatDelay: 1.2 },
      { label: 'Apple Music', logo: '/icons/apple.png', link: '#', floatDelay: 0.6 },
    ],
  },
  redes: {
    id: 'redes',
    label: 'Social Media',
    title: 'Conecta conmigo',
    description: 'El día a día, procesos creativos en el estudio y los avisos de los próximos eventos.',
    image: '/images/yosairedes-sinfondo.webp',
    glowColor: 'bg-red-600/50', // Rojo intenso/pasional para la conexión social
    items: [
      { label: 'Instagram', logo: '/icons/instagram_icon.png', link: '#', floatDelay: 0.3 },
      { label: 'Facebook', logo: '/icons/facebook.png', link: '#', floatDelay: 0.9 },
      { label: 'Contacto', logo: '/icons/contacto.png', link: '#', floatDelay: 1.5 },
    ],
  },
};

// =========================================
// FLOATING ICON COMPONENT (Sin contenedores)
// =========================================
function FloatingIcon({ item, index }: { item: any; index: number }) {
  return (
    <motion.a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col items-center justify-center gap-3 cursor-pointer"
      // Entrada en escena fluida
      initial={{ opacity: 0, y: 40, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.8 }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Animación de flotado continuo (Respiración) */}
      <motion.div
        animate={{ y: [0, -12, 0, 8, 0] }}
        transition={{ duration: 6 + item.floatDelay, repeat: Infinity, ease: 'easeInOut', delay: item.floatDelay }}
        // Interacción táctil/hover premium
        whileHover={{ scale: 1.2, rotate: [-2, 2, 0] }}
        whileTap={{ scale: 0.95 }}
      >
        <img
          src={item.logo}
          alt={item.label}
          // Iconos más grandes y con drop-shadow en lugar de estar encerrados
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain 
                     filter drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)] 
                     group-hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]
                     transition-all duration-500 will-change-[filter,transform]"
        />
      </motion.div>

      {/* Etiqueta minimalista */}
      <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500
                       group-hover:text-white transition-colors duration-300">
        {item.label}
      </span>
    </motion.a>
  );
}

// =========================================
// MAIN SHOWCASE COMPONENT
// =========================================
export default function SocialShowcase() {
  const [activeTab, setActiveTab] = useState<SectionId>('plataformas');
  const data = SOCIAL_DATA[activeTab];
  const isRedes = activeTab === 'redes';

  return (
    <section className="relative h-dvh w-full bg-[#050505] flex flex-col items-center justify-between overflow-hidden py-6 md:py-10">

      {/* Ruido de fondo — CSS-based grain */}
      <div className="film-grain" style={{ position: 'absolute', zIndex: 60 }} aria-hidden="true" />

      {/* 2. MAIN CONTENT AREA: flex-1 usa todo el espacio sobrante entre arriba y los tabs */}
      <main className="relative z-10 flex-1 w-full px-6 max-w-7xl mx-auto flex flex-col items-center justify-center min-h-0">

        <motion.div
          layout
          className={`w-full h-full flex flex-col items-center justify-center gap-6 md:gap-12 
          ${isRedes ? 'md:flex-row-reverse' : 'md:flex-row'}`}
        >

          {/* ── VISUAL SIDE: Responsive e Inmersivo ── */}
          {/* Ajustamos el min-h y max-h para darle un espacio de respiro perfecto sin desbordar */}
          <div className="relative flex-1 w-full h-full min-h-[350px] max-h-[45vh] md:max-h-[65vh] flex justify-center items-end md:items-center">

            {/* El Aura / Glow animado que envuelve la imagen */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`glow-${data.id}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                            w-[80%] md:w-[60%] aspect-square rounded-full blur-[80px] md:blur-[120px] 
                            ${data.glowColor} pointer-events-none`}
              />
            </AnimatePresence>

            {/* La imagen WebP recortada */}
            <AnimatePresence mode="wait">
              <motion.img
                key={`img-${data.id}`}
                src={data.image}
                alt={`Yosai ${data.label}`}
                initial={{ opacity: 0, y: 40, filter: 'brightness(0.5)' }}
                animate={{ opacity: 1, y: 0, filter: 'brightness(1)' }}
                exit={{ opacity: 0, y: -40, filter: 'brightness(0.5)' }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                // LA CLAVE ESTÁ AQUÍ ABAJO: h-full w-auto max-h-full
                // Esto garantiza que la imagen se escale basándose en la altura disponible, nunca recortándose.
                className="relative z-10 h-full w-auto max-h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] will-change-[transform,opacity]"
              />
            </AnimatePresence>
          </div>

          {/* ── CONTENT SIDE: Tipografía y Controles ── */}
          <div className="w-full max-w-lg text-center md:text-left relative z-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${data.id}`}
                initial={{ opacity: 0, x: isRedes ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: isRedes ? 30 : -30 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Etiqueta */}
                <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-500 mb-4">
                  {data.label}
                </h3>

                {/* Título: Requiere una fuente condensada/bold como 'Oswald' o 'Anton' */}
                <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase mb-6 tracking-tighter leading-none text-white drop-shadow-lg">
                  {data.title}
                </h2>

                {/* Descripción: Fuente limpia como 'Montserrat' para legibilidad */}
                <p className="text-sm md:text-base text-zinc-400 mb-12 max-w-sm mx-auto md:mx-0 leading-relaxed font-light">
                  {data.description}
                </p>

                {/* Íconos Flotantes sin círculos */}
                <div className="flex items-center justify-center md:justify-start gap-8 md:gap-12">
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

      {/* ── TAB SWITCHER (Glassmorphism avanzado) ── */}
      <div className="mt-24 relative z-50">
        <div className="flex p-1.5 bg-zinc-900/50 rounded-full border border-white/5 backdrop-blur-xl shadow-2xl">
          {(['plataformas', 'redes'] as SectionId[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-colors duration-300
                ${activeTab === tab ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTabPill"
                  className="absolute inset-0 rounded-full bg-white/10 border border-white/20"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
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