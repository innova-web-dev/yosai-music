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
            logoText="mnmlst."
            navLinks={navLinks}
            mainText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultrices, justo vel tempus."
            readMoreLink="#"
            imageSrc="/images/yosai-monocromatico.png"
            imageAlt="A portrait of a person in a black turtleneck, in profile."
            overlayText={{
                part1: 'less is',
                part2: 'more.',
            }}
            socialLinks={socialLinks}
            locationText="Arlington Heights, IL"
        />
    );
}
