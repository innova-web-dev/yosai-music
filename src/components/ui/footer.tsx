'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Music2, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUpRight,
  Music,
  Play,
  Disc
} from 'lucide-react';

const footerLinks = {
  navigation: [
    { name: 'Inicio', href: '/' },
    { name: 'Música', href: '#musica' },
    { name: 'Historia', href: '#historia' },
    { name: 'Sobre Mí', href: '#sobre-mi' },
  ],
  services: [
    { name: 'Producción Musical', href: '#' },
    { name: 'Composición', href: '#' },
    { name: 'Arreglos', href: '#' },
    { name: 'Mezcla y Master', href: '#' },
  ],
  legal: [
    { name: 'Política de Privacidad', href: '#' },
    { name: 'Términos de Servicio', href: '#' },
    { name: 'Cookies', href: '#' },
  ],
  social: [
    { name: 'Instagram', href: 'https://instagram.com', icon: Disc },
    { name: 'Spotify', href: 'https://spotify.com', icon: Music2 },
    { name: 'YouTube', href: 'https://youtube.com', icon: Play },
    { name: 'Apple Music', href: 'https://music.apple.com', icon: Music },
  ]
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-black border-t border-zinc-800/50 pt-20 pb-10 px-6 overflow-hidden">
      {/* Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-crimson/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-neon-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Section */}
          <div className="flex flex-col gap-6">
            <Link 
              href="/" 
              className="text-3xl font-black tracking-tighter uppercase font-bebas text-white hover:text-crimson transition-colors"
            >
              Yosai Music
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
              Fusionando la esencia mexicana con sonidos globales. De los barrios de México para el mundo entero.
            </p>
            <div className="flex gap-4">
              {footerLinks.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-crimson hover:bg-crimson/10 transition-all group"
                  aria-label={item.name}
                >
                  <item.icon size={18} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Navegación</h3>
            <ul className="flex flex-col gap-4">
              {footerLinks.navigation.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-zinc-400 hover:text-white transition-colors text-sm flex items-center group"
                  >
                    {item.name}
                    <ArrowUpRight size={12} className="ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services/Extra */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Servicios</h3>
            <ul className="flex flex-col gap-4">
              {footerLinks.services.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-zinc-400 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Contacto</h3>
            <ul className="flex flex-col gap-6">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-crimson shrink-0">
                  <Mail size={14} />
                </div>
                <div>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-tighter font-bold">Email</p>
                  <a href="mailto:contact@yosaimusic.com" className="text-sm text-zinc-300 hover:text-white transition-colors">
                    contact@yosaimusic.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-neon-blue shrink-0">
                  <Phone size={14} />
                </div>
                <div>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-tighter font-bold">Teléfono</p>
                  <a href="tel:+525500000000" className="text-sm text-zinc-300 hover:text-white transition-colors">
                    +52 (55) 0000 0000
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 shrink-0">
                  <MapPin size={14} />
                </div>
                <div>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-tighter font-bold">Ubicación</p>
                  <p className="text-sm text-zinc-300">CDMX, México</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-500 text-xs">
            © {currentYear} Yosai Music. Todos los derechos reservados.
          </p>
          <div className="flex gap-8">
            {footerLinks.legal.map((item) => (
              <Link 
                key={item.name}
                href={item.href}
                className="text-zinc-500 hover:text-zinc-300 transition-colors text-xs"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
