'use client';

import React from 'react';
import { Music, Headphones, Mic, Radio } from 'lucide-react';
import { MinimalistHero } from '@/components/ui/minimalist-hero';
import { HeroScrollDemo } from '@/components/ui/hero-scroll-demo';
import SocialShowcase from '@/components/spatial-product-showcase';
import { SpotifyPlayer } from '@/components/ui/spotify-player';

export default function MinimalistHeroDemo() {
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

    return (
        <>
            <MinimalistHero
                logoText="Orion music col"
                navLinks={navLinks}
                mainText="Soy un artista con la esencia mexicana, con un estilo único que fusiona lo tradicional con lo moderno."
                ctaText="Escucha mi música"
                ctaLink="#"
                imageSrc="/images/yosai-monocromatico.png"
                imageAlt="A portrait of a person in a black turtleneck, in profile."
                overlayText={{
                    part1: 'Los corridos',
                    part2: 'del valle.',
                }}
                socialLinks={socialLinks}
                locationText="Del Valle pal mundo."
            />

            {/* Scroll Animation Section */}
            <HeroScrollDemo />

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
                        spotifyUri="https://open.spotify.com/album/2ODvWsOgouMbaA5xf0RkJe"
                        label="Álbum de Yosai en Spotify"
                    />
                </div>
            </section>

            {/* Social & Platforms Showcase */}
            <SocialShowcase />
        </>
    );
}
