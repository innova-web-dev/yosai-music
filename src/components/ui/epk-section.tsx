'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Download, Mail, Phone, ExternalLink, ShieldAlert } from 'lucide-react';

export const EPKSection = () => {
  const [password, setPassword] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState(false);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    // Contraseña de ejemplo: YOSAI2026
    if (password.toUpperCase() === 'YOSAI2026') {
      setIsUnlocked(true);
      setError(false);
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <section className="relative w-full py-24 px-8 bg-black overflow-hidden border-t border-yosai-purple/20">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-yosai-purple/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
          <div>
            <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] text-yosai-purple-light mb-4">
              Portal para la Industria
            </h2>
            <h3 className="text-4xl md:text-6xl font-black uppercase leading-none tracking-tighter text-white">
              EPK & <span className="text-yosai-purple-light">Orion Music</span>
            </h3>
          </div>
          <div className="flex items-center gap-4 text-zinc-500">
            <ShieldAlert size={16} className="text-yosai-purple-light" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Acceso Restringido</span>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {!isUnlocked ? (
            <motion.div
              key="locked"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-md mx-auto text-center py-20 border border-white/5 bg-white/[0.01] backdrop-blur-md rounded-3xl"
            >
              <div className="w-16 h-16 bg-yosai-purple/10 rounded-full flex items-center justify-center mx-auto mb-8 text-yosai-purple-light">
                <Lock size={24} />
              </div>
              <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-4">Introduce la contraseña</h4>
              <p className="text-zinc-500 text-xs mb-8 px-8">
                Para evitar filtraciones y mantener exclusividad, el EPK descargable está protegido.
              </p>
              
              <form onSubmit={handleUnlock} className="px-8 space-y-4">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="CONTRASEÑA"
                  className={`w-full bg-white/5 border ${error ? 'border-red-500' : 'border-white/10'} rounded-full py-4 px-6 text-center text-xs font-bold tracking-[0.3em] text-white focus:outline-none focus:border-yosai-purple-light transition-all`}
                />
                <button
                  type="submit"
                  className="w-full bg-white text-black hover:bg-yosai-purple-light hover:text-white py-4 rounded-full text-[10px] font-black uppercase tracking-[0.3em] transition-all active:scale-95"
                >
                  Desbloquear EPK
                </button>
                {error && <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest mt-2 animate-shake">Contraseña Incorrecta</p>}
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="unlocked"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {/* EPK Content Card */}
              <div className="md:col-span-2 p-10 rounded-3xl bg-yosai-purple/10 border border-yosai-purple/30 backdrop-blur-xl flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <h4 className="text-white font-black uppercase text-3xl tracking-tighter">Electronic Press Kit</h4>
                    <span className="px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-[8px] font-bold uppercase tracking-widest">Versión 2026.1</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-10">
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2 text-zinc-300 text-[10px] font-bold uppercase tracking-widest"><div className="w-1.5 h-1.5 rounded-full bg-yosai-purple-light" /> Fotos de Prensa (HQ)</li>
                      <li className="flex items-center gap-2 text-zinc-300 text-[10px] font-bold uppercase tracking-widest"><div className="w-1.5 h-1.5 rounded-full bg-yosai-purple-light" /> Biografía Completa</li>
                      <li className="flex items-center gap-2 text-zinc-300 text-[10px] font-bold uppercase tracking-widest"><div className="w-1.5 h-1.5 rounded-full bg-yosai-purple-light" /> Rider Técnico</li>
                    </ul>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2 text-zinc-300 text-[10px] font-bold uppercase tracking-widest"><div className="w-1.5 h-1.5 rounded-full bg-yosai-purple-light" /> Fechas de Gira</li>
                      <li className="flex items-center gap-2 text-zinc-300 text-[10px] font-bold uppercase tracking-widest"><div className="w-1.5 h-1.5 rounded-full bg-yosai-purple-light" /> Logos & Branding</li>
                    </ul>
                  </div>
                </div>
                <button className="flex items-center justify-center gap-3 bg-white text-black hover:bg-yosai-purple-light hover:text-white py-6 rounded-2xl text-xs font-black uppercase tracking-[0.2em] transition-all group">
                  <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
                  Descargar EPK Completo (.ZIP)
                </button>
              </div>

              {/* Contact Card */}
              <div className="p-10 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-md">
                <h4 className="text-white font-black uppercase text-2xl tracking-tighter mb-8">Management & PR</h4>
                <div className="space-y-8">
                  <div className="flex flex-col space-y-2">
                    <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-zinc-500">Booking & Contrataciones</span>
                    <a href="mailto:booking@orionmusic.com" className="text-white hover:text-yosai-purple-light flex items-center gap-2 transition-colors">
                      <Mail size={16} /> <span className="text-sm font-bold">booking@orionmusic.com</span>
                    </a>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-zinc-500">Prensa & Media</span>
                    <a href="tel:+525500000000" className="text-white hover:text-yosai-purple-light flex items-center gap-2 transition-colors">
                      <Phone size={16} /> <span className="text-sm font-bold">+52 (55) 0000 0000</span>
                    </a>
                  </div>
                  <div className="pt-4">
                    <a href="#" className="flex items-center justify-between p-4 bg-white/5 rounded-xl text-zinc-400 hover:text-white transition-colors group">
                      <span className="text-[10px] font-bold uppercase tracking-widest">Orion Music Official</span>
                      <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Legal Note */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-[9px] text-zinc-600 uppercase tracking-widest leading-relaxed max-w-2xl">
            AVISO LEGAL: Todos los fonogramas, composiciones, diseños y materiales visuales contenidos en este portal están protegidos por leyes internacionales de Copyright y son propiedad exclusiva de Orion Music. Queda prohibida su reproducción sin autorización previa.
          </p>
          <p className="text-[9px] text-yosai-purple-light font-black uppercase tracking-widest">
            © 2026 ORION MUSIC GROUP. TODOS LOS DERECHOS RESERVADOS.
          </p>
        </div>
      </div>
    </section>
  );
};
