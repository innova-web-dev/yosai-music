'use client';

import React from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useIsMobile } from '@/hooks/use-mobile';
import { BookingHero } from '@/components/ui/booking-hero';
import { WhyBook } from '@/components/ui/why-book';
import { ShowTypes } from '@/components/ui/show-types';
import { PastShows } from '@/components/ui/past-shows';
import { RiderSection } from '@/components/ui/rider-section';
import { CalendarSection } from '@/components/ui/calendar-section';
import { DirectContact } from '@/components/ui/direct-contact';
import { Footer } from '@/components/ui/footer';
import { localImages } from '@/lib/images';

gsap.registerPlugin(ScrollTrigger);

export default function ReservarPage() {
  const isMobile = useIsMobile();
  const lenisRef = React.useRef<Lenis | null>(null);
  const calendarRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const lenis = new Lenis();
    lenisRef.current = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
      lenisRef.current = null;
    };
  }, []);

  const scrollToCalendar = () => {
    const el = calendarRef.current;
    if (el && lenisRef.current) {
      lenisRef.current.scrollTo(el);
    } else if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (isMobile === null) return null;

  return (
    <div className="relative min-h-screen flex flex-col bg-[#050505]">
      <div className="film-grain" aria-hidden="true" />

      <main className="relative w-full selection:bg-crimson selection:text-white">
        <BookingHero
          imageSrc={localImages.hero}
          imageAlt="Yosai — Reserva para tu evento"
          onCtaClick={scrollToCalendar}
        />

        <WhyBook />

        <ShowTypes />

        <PastShows />

        <RiderSection />

        <div ref={calendarRef}>
          <CalendarSection />
        </div>

        <DirectContact />
      </main>

      <Footer />
    </div>
  );
}
