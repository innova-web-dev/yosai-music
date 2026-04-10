import ScrollyCanvas from '@/components/ScrollyCanvas';
import SocialShowcase from '@/components/spatial-product-showcase';

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col">

      <main className="w-full selection:bg-white selection:text-black">
        {/* 1. Scroll con GSAP (Canvas Sequence + Parallax Texts y Título Hero integrado) */}
        <ScrollyCanvas />

        {/* Redes y Plataformas */}
        <SocialShowcase />

      </main>

    </div>
  );
};