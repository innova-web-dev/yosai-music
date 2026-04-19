'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Users, ShieldCheck } from 'lucide-react';

export const CommunityLegacy = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <section className="relative w-full py-24 px-8 bg-background overflow-hidden border-t border-white/5">
      <div className="max-w-3xl mx-auto text-center">
        
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col space-y-8 items-center"
        >
          <div className="flex flex-col items-center">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] text-yosai-purple-light mb-4 flex items-center gap-2">
              <Users size={12} /> Comunidad Yosai
            </h2>
            <h3 className="text-4xl md:text-5xl font-black uppercase leading-none tracking-tighter text-white">
              Únete al <span className="text-yosai-purple-light">Legado</span>
            </h3>
            <p className="text-zinc-500 text-sm mt-6 max-w-md leading-relaxed mx-auto">
              Sé el primero en recibir contenido exclusivo, audios de improvisaciones en vivo y acceso anticipado a la mercancía oficial. Sin logística, solo música.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="relative w-full max-w-md">
            <div className="relative group">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="TU CORREO ELECTRÓNICO"
                className="w-full bg-white/[0.03] border border-white/10 rounded-full py-5 px-8 text-xs font-bold tracking-widest text-white focus:outline-none focus:border-yosai-purple-light transition-all focus:ring-4 focus:ring-yosai-purple/10"
              />
              <button
                type="submit"
                disabled={status !== 'idle'}
                className="absolute right-2 top-2 bottom-2 bg-yosai-purple hover:bg-yosai-purple-light text-white px-8 rounded-full transition-all flex items-center gap-2 disabled:opacity-50 active:scale-95"
              >
                {status === 'loading' ? (
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : status === 'success' ? (
                  <ShieldCheck size={18} />
                ) : (
                  <>
                    <span className="text-[10px] font-black tracking-widest uppercase">Unirse</span>
                    <Send size={14} />
                  </>
                )}
              </button>
            </div>
            {status === 'success' && (
              <motion.p 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }}
                className="text-yosai-purple-light text-[10px] font-bold uppercase tracking-widest mt-4 text-center"
              >
                ¡Bienvenido a la familia! Revisa tu correo.
              </motion.p>
            )}
          </form>
        </motion.div>

      </div>
    </section>
  );
};
