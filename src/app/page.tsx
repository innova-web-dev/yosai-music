'use client';

import ScrollyCanvas from '@/components/ScrollyCanvas';
import SocialShowcase from '@/components/spatial-product-showcase';
import { Music, Headphones, Mic, Radio } from 'lucide-react';
import { MinimalistHero } from '@/components/ui/minimalist-hero';
import { useIsMobile } from '@/hooks/use-mobile';
import React from 'react';
import Lenis from '@studio-freight/lenis';
import { ZoomParallax } from '@/components/ui/zoom-parallax';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SpotifyPlayer } from '@/components/ui/spotify-player';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const isMobile = useIsMobile();

  React.useEffect(() => {
    const lenis = new Lenis()

    // Sincronizar Lenis con ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, [])

  const images = [
    {
      src: '/images/yosai1.jpeg',
      alt: 'yosai colores',
    },
    {
      src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
      alt: 'Urban cityscape at sunset',
    },
    {
      src: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=800&h=800&fit=crop&crop=entropy&auto=format&q=80',
      alt: 'Abstract geometric pattern',
    },
    {
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
      alt: 'Mountain landscape',
    },
    {
      src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=800&fit=crop&crop=entropy&auto=format&q=80',
      alt: 'Minimalist design elements',
    },
    {
      src: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
      alt: 'Ocean waves and beach',
    },
    {
      src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
      alt: 'Forest trees and sunlight',
    },
  ];

  const navLinks = [
    { label: 'INICIO', href: '#' },
    { label: 'MÚSICA', href: '#' },
    { label: 'HISTORIA', href: '#' },
    { label: 'SOBRE MÍ', href: '#' },
  ];

  const socialLinks = [
    { icon: Music, href: '#' },
    { icon: Headphones, href: '#' },
    { icon: Mic, href: '#' },
    { icon: Radio, href: '#' },
  ];

  // Evitar desajustes de hidratación devolviendo null hasta que se determine si es móvil o no
  if (isMobile === null) return null;

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* ── CINEMATIC FILM GRAIN: Full-page overlay ── */}
      <div className="film-grain" aria-hidden="true" />

      <main className="relative w-full selection:bg-white selection:text-black">
        {isMobile ? (
          <ScrollyCanvas />
        ) : (
          <MinimalistHero
            logoText="Orion music col"
            navLinks={navLinks}
            mainText="Soy un artista con la esencia mexicana, con un estilo único que fusiona lo tradicional con lo moderno."
            readMoreLink="#"
            imageSrc="https://res.cloudinary.com/dlw6fupap/image/upload/f_auto,q_auto/copy_62BEDAAE-1E45-4BFA-89D1-CB3E6A7E2305-ezgif.com-png-to-webp-converter_hcdxsd"
            imageAlt="A portrait of a person in a black turtleneck, in profile."
            overlayText={{
              part1: 'Los corridos',
              part2: 'del valle.',
            }}
            socialLinks={socialLinks}
            locationText="Del Valle pal mundo."
          />
        )}

        <div className="relative z-10 flex flex-col items-center justify-center w-full">
          <ZoomParallax images={images} />
        </div>

        {/* ── Spotify Player Section ──────────────────────────────── */}
        <section
          aria-labelledby="spotify-section-heading"
          className="relative w-full bg-[#050505] py-20 px-6 flex flex-col items-center gap-10 overflow-hidden"
        >
          {/* Subtle Spotify-green ambient glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px]
                               bg-[#1DB954]/6 rounded-full blur-[120px]"
          />

          {/* Section heading */}
          <div className="relative z-10 text-center max-w-lg">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#1DB954]/70 mb-3">
              Streaming
            </p>
            <h2
              id="spotify-section-heading"
              className="text-4xl sm:text-5xl font-black uppercase leading-none tracking-tighter text-white mb-4"
            >
              Escucha mi álbum
            </h2>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Los corridos más duros — ahora disponibles en todas las plataformas.
            </p>
          </div>

          {/* The player */}
          <div className="relative z-10 w-full">
            <SpotifyPlayer
              spotifyUri="https://open.spotify.com/artist/1VCihO05p1ghQuXCvUCC3p?si=zN52V_4gS6GLWXOhY_p5mg"
              label="Álbum de Yosai en Spotify"
            />
          </div>
        </section>


        {/* Redes y Plataformas */}
        <SocialShowcase />
      </main>
    </div>
  );
};
