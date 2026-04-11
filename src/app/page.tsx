'use client';

import ScrollyCanvas from '@/components/ScrollyCanvas';
import SocialShowcase from '@/components/spatial-product-showcase';
import { Music, Headphones, Mic, Radio } from 'lucide-react';
import { MinimalistHero } from '@/components/ui/minimalist-hero';
import { useIsMobile } from '@/hooks/use-mobile';

export default function Home() {
  const isMobile = useIsMobile();

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
    <div className="relative min-h-screen overflow-hidden flex flex-col">
      <main className="w-full selection:bg-white selection:text-black">
        {isMobile ? (
          <ScrollyCanvas />
        ) : (
          <MinimalistHero
            logoText="Orion music col"
            navLinks={navLinks}
            mainText="Soy un artista con la esencia mexicana, con un estilo único que fusiona lo tradicional con lo moderno."
            readMoreLink="#"
            imageSrc="/images/yosai-monocromatico.png"
            imageAlt="A portrait of a person in a black turtleneck, in profile."
            overlayText={{
              part1: 'Los corridos',
              part2: 'del valle.',
            }}
            socialLinks={socialLinks}
            locationText="Del Valle pal mundo."
          />
        )}

        {/* Redes y Plataformas */}
        <SocialShowcase />
      </main>
    </div>
  );
};