'use client';

import ScrollyCanvas from '@/components/ScrollyCanvas';
import SocialShowcase from '@/components/spatial-product-showcase';
import { Music, Headphones, Mic, Radio } from 'lucide-react';
import { MinimalistHero } from '@/components/ui/minimalist-hero';
import { useIsMobile } from '@/hooks/use-mobile';
import React from 'react';
import Lenis from '@studio-freight/lenis';
import { ZoomParallax } from '@/components/ui/zoom-parallax';

export default function Home() {
  const isMobile = useIsMobile();

  React.useEffect(() => {
    const lenis = new Lenis()
    let rafId: number;

    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
    };
  }, [])

  const images = [
    {
      src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
      alt: 'Modern architecture building',
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
    { label: 'HOME', href: '#' },
    { label: 'PRODUCT', href: '#' },
    { label: 'STORE', href: '#' },
    { label: 'ABOUT US', href: '#' },
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

        <div className="relative z-10 flex flex-col items-center justify-center w-full pt-10 pb-[20vh]">
          <ZoomParallax images={images} />
        </div>

        <div className="h-[20vh]" />

        {/* Redes y Plataformas */}
        <SocialShowcase />
      </main>
    </div>
  );
};
