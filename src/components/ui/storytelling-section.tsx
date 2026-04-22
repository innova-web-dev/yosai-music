'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { images } from '@/lib/images';

export const StorytellingSection = () => {
  const storyImage = images[9].src; // "StorytellingSection (La Narrativa Íntima)" - Very dark/moody

  return (
    <section className="relative w-full min-h-screen flex items-center py-24 px-8 bg-background overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yosai-purple/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Visual Side */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="relative aspect-square lg:aspect-[4/5] overflow-hidden rounded-2xl group"
        >
          <Image 
            src={storyImage} 
            alt="Yosai Story" 
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
        </motion.div>

        {/* Content Side */}
        <div className="flex flex-col space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] text-yosai-purple-light mb-4">
              De las sombras a la luz
            </h2>
            <h3 className="text-4xl md:text-6xl font-black uppercase leading-none tracking-tighter text-white">
              El significado de <span className="text-yosai-purple-light">Yosai</span>
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-zinc-400 text-sm md:text-base leading-relaxed"
          >
            <p>
              <strong className="text-white">Yosai</strong> no es solo un nombre artístico; es un tributo a la esperanza, la luz y la prosperidad. Inspirado en el legado de su abuela, este nombre representa la resiliencia de un artista que encontró su voz en la adversidad.
            </p>
            <p>
              Durante años, Yosai operó en las sombras, componiendo éxitos masivos y produciendo para grandes nombres de la industria, acumulando reconocimientos que otros solo sueñan. Pero el destino tenía otros planes: era hora de dar la cara.
            </p>
            <p>
              Hoy, fusionando el alma de los corridos tradicionales con la energía del trap y el reggaetón global, Yosai emerge para brillar con luz propia, llevando el sonido del Valle para el mundo entero.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-4"
          >
            <div className="inline-block p-8 border border-white/10 rounded-2xl bg-white/[0.02] backdrop-blur-sm">
              <p className="text-white font-medium italic text-lg">
                &ldquo;Mi música es el puente entre lo que fuimos y lo que estamos destinados a ser.&rdquo;
              </p>
              <p className="text-yosai-purple-light text-xs uppercase tracking-widest mt-4 font-bold">
                — Yosai
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
