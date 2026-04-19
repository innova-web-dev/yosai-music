'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ExternalLink, Disc } from 'lucide-react';

const RELEASES = [
  { 
    id: 'paris', 
    title: 'PARÍS', 
    type: 'Sencillo', 
    date: 'Abril 2026',
    video: '/images/yosai-animation.mp4',
    spotify: 'https://open.spotify.com/track/6p89q6Z8K95Fm9G1V6P6V2?si=...',
    description: 'El nuevo himno que redefine el corrido moderno con toques de elegancia europea.'
  },
  { 
    id: 'sombras', 
    title: 'De las Sombras', 
    type: 'Sencillo', 
    date: 'Marzo 2026',
    video: '/images/yosaivideo.mp4',
    spotify: '#',
    description: 'Una mirada cruda a los inicios y la resiliencia en la industria musical.'
  },
  { 
    id: 'valle', 
    title: 'Del Valle pal Mundo', 
    type: 'EP', 
    date: 'Enero 2026',
    video: '/images/yosaianimacion2.mp4',
    spotify: '#',
    description: 'El EP debut que puso a Yosai en el mapa global de la música urbana.'
  },
];

export const MusicalArsenal = () => {
  const [activeRelease, setActiveRelease] = useState(RELEASES[0]);

  return (
    <section className="relative w-full py-24 px-8 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] text-yosai-purple-light mb-4">
            Discografía
          </h2>
          <h3 className="text-4xl md:text-6xl font-black uppercase leading-none tracking-tighter text-white">
            Últimos <span className="text-yosai-purple-light">Lanzamientos</span>
          </h3>
          <p className="text-zinc-500 text-sm mt-6 max-w-xl mx-auto">
            Explora la evolución sonora de Yosai. De la tradición a la vanguardia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full">
          {/* Release Selector */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            {RELEASES.map((release) => (
              <button
                key={release.id}
                onClick={() => setActiveRelease(release)}
                className={`flex items-center space-x-4 p-6 rounded-2xl transition-all duration-300 group ${
                  activeRelease.id === release.id 
                    ? 'bg-yosai-purple text-white shadow-[0_0_30px_rgba(109,40,217,0.3)]' 
                    : 'bg-white/[0.03] text-zinc-500 hover:bg-white/[0.05] hover:text-zinc-300'
                }`}
              >
                <div className={`p-3 rounded-full transition-colors ${
                  activeRelease.id === release.id ? 'bg-white/20' : 'bg-white/5'
                }`}>
                  <Disc size={20} className={activeRelease.id === release.id ? 'animate-spin-slow' : ''} />
                </div>
                <div className="text-left flex-1">
                  <div className="flex justify-between items-center">
                    <span className="block text-xs font-bold uppercase tracking-widest">{release.title}</span>
                    <span className="text-[8px] font-bold opacity-40 uppercase tracking-widest">{release.date}</span>
                  </div>
                  <span className="text-[10px] opacity-60 uppercase tracking-tighter">{release.type}</span>
                </div>
              </button>
            ))}

            {/* Release Info Card */}
            <motion.div 
              key={`info-${activeRelease.id}`}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="mt-8 p-8 border border-yosai-purple/20 rounded-2xl bg-yosai-purple/5 backdrop-blur-sm relative overflow-hidden group"
            >
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-3">Sobre el lanzamiento</h4>
              <p className="text-zinc-400 text-xs leading-relaxed mb-6">
                {activeRelease.description}
              </p>
              <a 
                href={activeRelease.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-yosai-purple-light hover:text-white transition-colors text-[10px] font-black uppercase tracking-[0.2em]"
              >
                Escuchar en Spotify <ExternalLink size={12} />
              </a>
            </motion.div>
          </div>

          {/* Video / Visual Side */}
          <div className="lg:col-span-8 relative aspect-video rounded-3xl overflow-hidden bg-zinc-900 shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeRelease.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full"
              >
                <video
                  src={activeRelease.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-yosai-purple rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(109,40,217,0.5)]">
                      <Play size={20} fill="white" className="text-white ml-1" />
                    </div>
                    <div>
                      <p className="text-white font-black uppercase tracking-tighter text-3xl leading-none">
                        {activeRelease.title}
                      </p>
                      <p className="text-yosai-purple-light text-[10px] font-bold uppercase tracking-widest mt-1">
                        Video Oficial / Visualizer
                      </p>
                    </div>
                  </div>
                  
                  <div className="hidden md:block text-right">
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest block mb-1">Disponible en</span>
                    <div className="flex gap-4">
                      <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center" />
                      <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center" />
                      <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
