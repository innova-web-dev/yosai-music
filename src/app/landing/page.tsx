'use client';

import React from 'react';
import { Music, Headphones, Mic, Radio } from 'lucide-react';
import { MinimalistHero } from '@/components/ui/minimalist-hero';

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
    );
}
