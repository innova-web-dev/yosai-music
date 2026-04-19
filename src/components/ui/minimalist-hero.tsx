import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

// Define the props interface for type safety and reusability
interface MinimalistHeroProps {
  logoText: string;
  navLinks: { label: string; href: string }[];
  mainText: string;
  readMoreLink: string;
  imageSrc: string;
  imageAlt: string;
  /** Brightness as a percentage. 100 = normal, >100 = brighter, <100 = darker. Range: 0–200. */
  imageBrightness?: number;
  overlayText: {
    part1: string;
    part2: string;
  };
  socialLinks: { icon: LucideIcon; href: string }[];
  locationText: string;
  className?: string;
}

// Helper component for navigation links
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-sm font-medium tracking-widest text-foreground/70 transition-all duration-200 hover:text-foreground active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background-foreground rounded-md px-2 py-1"
  >
    {children}
  </a>
);

// Helper component for social media icons with proper touch target
const SocialIcon = ({ href, icon: Icon }: { href: string; icon: LucideIcon }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    aria-label="Visit social profile"
    className="text-foreground/70 transition-all duration-200 hover:text-foreground active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:rounded-md p-2 -m-2"
  >
    <Icon className="h-5 w-5" aria-hidden="true" />
  </a>
);

// The main reusable Hero Section component
export const MinimalistHero = ({
  logoText,
  navLinks,
  mainText,
  readMoreLink,
  imageSrc,
  imageAlt,
  imageBrightness = 150,
  overlayText,
  socialLinks,
  locationText,
  className,
}: MinimalistHeroProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative flex min-h-dvh w-full flex-col items-center overflow-hidden bg-background pt-8 px-8 pb-0 font-[family-name:var(--font-inter)] md:pt-12 md:px-12 md:pb-0',
        className
      )}
    >
      {/* Header */}
      <header className="z-30 flex w-full max-w-7xl items-center justify-between shrink-0">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="font-[family-name:var(--font-anton)] text-2xl tracking-tight uppercase"
        >
          {logoText}
        </motion.div>
        <nav className="hidden items-center space-x-10 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.label} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </nav>
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center items-center space-y-1.5 md:hidden min-h-11 min-w-11 p-2 -m-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
          aria-label="Open navigation menu"
          aria-expanded="false"
          aria-controls="main-navigation"
        >
          <span className="block h-0.5 w-6 bg-foreground rounded-full" aria-hidden="true"></span>
          <span className="block h-0.5 w-6 bg-foreground rounded-full" aria-hidden="true"></span>
          <span className="block h-0.5 w-5 bg-foreground rounded-full" aria-hidden="true"></span>
        </motion.button>
      </header>

      {/* Main Content Area */}
      <div className="relative grid w-full max-w-7xl flex-1 grid-cols-1 items-center md:grid-cols-3 h-full z-10">
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1, ease: [0.23, 1, 0.32, 1] }}
          className="z-20 order-2 md:order-1 text-center md:text-left md:pb-24"
        >
          <p className="mx-auto max-w-xs text-[13px] leading-relaxed tracking-wide text-foreground/80 md:mx-0">{mainText}</p>
          <a 
            href={readMoreLink} 
            className="mt-5 inline-block text-xs font-semibold tracking-[0.15em] uppercase text-foreground/80 hover:text-foreground transition-all duration-200 active:scale-95 border-b border-foreground/30 hover:border-foreground pb-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:rounded-sm"
            aria-label="Listen to my music"
          >
            Escucha mi música
          </a>
        </motion.div>

        {/* Center Image with Circle */}
        <div className="relative order-1 md:order-2 flex justify-center items-end h-full min-h-[50vh] md:min-h-0">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="absolute z-0 h-[300px] w-[300px] rounded-full bg-yellow-400/90 md:h-[400px] md:w-[400px] lg:h-[600px] lg:w-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          ></motion.div>
          
          <div className="relative z-10 w-full flex justify-center items-end h-[90vh]">
            <motion.img
              src={imageSrc}
              alt={imageAlt}
              className="h-full w-auto object-contain max-w-none md:max-w-20xl"
              style={{ 
                filter: `brightness(${imageBrightness}%)`,
                y,
                opacity,
                scale
              }}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = `https://placehold.co/400x600/eab308/ffffff?text=Image+Not+Found`;
              }}
            />
            {/* Gradient Overlay to blend with background */}
            <div 
              className="absolute left-1/2 -translate-x-1/2 bottom-0 bg-gradient-to-t from-background via-background/90 via-background/40 to-transparent pointer-events-none h-[40%] w-[200vw] z-20"
            />
          </div>
        </div>

        {/* Right Text (Big Overlay) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2, ease: [0.23, 1, 0.32, 1] }}
          className="z-40 order-3 absolute top-[35%] right-0 flex flex-col items-end text-right md:static md:top-auto md:right-auto md:z-20 md:items-center md:justify-start md:text-left md:pb-24"
        >
          <h1 className="font-[family-name:var(--font-anton)] text-[2.5rem] uppercase leading-none tracking-tight text-foreground md:text-[4rem] lg:text-[7.5rem]">
            {overlayText.part1}
            <br />
            {overlayText.part2}
          </h1>
        </motion.div>
      </div>

      {/* Footer Elements */}
      <footer className="absolute bottom-8 md:bottom-12 left-8 md:left-12 right-8 md:right-12 z-50 flex items-center justify-between pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex items-center space-x-4 pointer-events-auto"
        >
          {socialLinks.map((link, index) => (
            <SocialIcon key={index} href={link.href} icon={link.icon} />
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="text-sm font-medium text-foreground/80 pointer-events-auto"
        >
          {locationText}
        </motion.div>
      </footer>
    </div>
  );
};
