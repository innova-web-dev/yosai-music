'use client';

import ScrollyCanvas from '@/components/ScrollyCanvas';
//import SocialShowcase from '@/components/spatial-product-showcase';
import { Music, Headphones, Mic, Radio } from 'lucide-react';
import { MinimalistHero } from '@/components/ui/minimalist-hero';
import { useIsMobile } from '@/hooks/use-mobile';
import React from 'react';
import Lenis from '@studio-freight/lenis';
import { ZoomParallax } from '@/components/ui/zoom-parallax';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
//import { SpotifyPlayer } from '@/components/ui/spotify-player';
import { StorytellingSection } from '@/components/ui/storytelling-section';
import { MusicalArsenal } from '@/components/ui/musical-arsenal';
import { CommunityLegacy } from '@/components/ui/community-legacy';
import { Footer } from '@/components/ui/footer';
// import { EPKSection } from '@/components/ui/epk-section';

import { localImages, images as assetImages } from '@/lib/images';

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
      src: assetImages[10].src,
      alt: 'yosai colores',
    },
    {
      src: assetImages[6].src, // "ZoomParallax (La Vida en Movimiento)" - ID 7
      alt: 'yosai movimiento 1',
    },
    {
      src: assetImages[1].src, // "El Legado" - ID 2
      alt: 'yosai legado',
    },
    {
      src: assetImages[7].src, // "ZoomParallax (La Vida en Movimiento) 2" - ID 8
      alt: 'yosai movimiento 2',
    },
    {
      src: assetImages[2].src, // "El Backstage" - ID 3
      alt: 'yosai backstage',
    },
    {
      src: assetImages[8].src, // "ZoomParallax (La Vida en Movimiento) 3" - ID 9
      alt: 'yosai movimiento 3',
    },
    {
      src: assetImages[4].src, // "El Origen" - ID 5
      alt: 'yosai origen',
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
            mainText="Productor y artista fusionando la esencia mexicana con sonidos globales. De componer éxitos en las sombras a brillar con luz propia."
            ctaText="Escucha  A PARÍS ahora"
            ctaLink="https://open.spotify.com/track/6p89q6Z8K95Fm9G1V6P6V2?si=... " // Reemplazar con el link real de PARÍS
            imageSrc={localImages.hero}
            imageAlt="Yosai en su hábitat natural, el estudio de grabación."
            overlayText={{
              part1: 'La nueva era',
              part2: 'del corrido.',
            }}
            socialLinks={socialLinks}
            locationText="Del Valle pal mundo."
          />
        )}

        <StorytellingSection />

        <MusicalArsenal />

        {isMobile ? (
          <div className="relative z-10 w-full">
            <ZoomParallax images={images} title={"ahí nomás a la verga"} />
          </div>
        ): (
          <div className="relative z-10 w-full bg-black">
            <ZoomParallax images={images} title={"ahí nomás a la verga"} />
          </div>
        )}

        

        <CommunityLegacy />

        {/* ── Spotify Player Section ──────────────────────────────── *
        <section
          aria-labelledby="spotify-section-heading"
          className="relative w-full bg-[#050505] py-20 px-6 flex flex-col items-center gap-10 overflow-hidden"
        >
          {/* Subtle Spotify-green ambient glow *
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px]
                               bg-[#1DB954]/6 rounded-full blur-[120px]"
          />

          {/* Section heading 
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

          {/* The player
          <div className="relative z-10 w-full">
            <SpotifyPlayer
              spotifyUri="https://open.spotify.com/artist/1VCihO05p1ghQuXCvUCC3p?si=zN52V_4gS6GLWXOhY_p5mg"
              label="Álbum de Yosai en Spotify"
            />
          </div>
        
        </section>
      */}

        {/* Redes y Plataformas 
        <SocialShowcase />
      */}
      </main>
      <Footer />
    </div>
  );
};
