import React from 'react';
import { motion } from 'framer-motion';
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
    className="text-sm font-medium tracking-widest text-foreground/60 transition-colors hover:text-foreground"
  >
    {children}
  </a>
);

// Helper component for social media icons
const SocialIcon = ({ href, icon: Icon }: { href: string; icon: LucideIcon }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-foreground/60 transition-colors hover:text-foreground">
    <Icon className="h-5 w-5" />
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
  return (
    <div
      className={cn(
        'relative flex min-h-dvh w-full flex-col items-center justify-between overflow-hidden bg-background-foreground p-8 font-[family-name:var(--font-inter)] md:p-12',
        className
      )}
    >
      {/* Header */}
      <header className="z-30 flex w-full max-w-7xl items-center justify-between">
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
          className="flex flex-col space-y-1.5 md:hidden"
          aria-label="Open menu"
        >
          <span className="block h-0.5 w-6 bg-foreground"></span>
          <span className="block h-0.5 w-6 bg-foreground"></span>
          <span className="block h-0.5 w-5 bg-foreground"></span>
        </motion.button>
      </header>

      {/* Main Content Area */}
      <div className="relative grid w-full max-w-7xl flex-1 grid-cols-1 items-center md:grid-cols-3">
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1, ease: [0.23, 1, 0.32, 1] }}
          className="z-20 order-2 md:order-1 text-center md:text-left"
        >
          <p className="mx-auto max-w-xs text-[13px] leading-relaxed tracking-wide text-foreground/70 md:mx-0">{mainText}</p>
          <a href={readMoreLink} className="mt-5 inline-block text-xs font-semibold tracking-[0.15em] uppercase text-foreground/60 hover:text-foreground transition-colors duration-200 border-b border-foreground/20 hover:border-foreground pb-0.5">
            Read More
          </a>
        </motion.div>

        {/* Center Image with Circle */}
        <div className="relative order-1 md:order-2 flex justify-center items-center h-full">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="absolute z-0 h-[300px] w-[300px] rounded-full bg-yellow-400/90 md:h-[400px] md:w-[400px] lg:h-[600px] lg:w-[600px]"
          ></motion.div>
          <motion.img
            src={imageSrc}
            alt={imageAlt}
            className="relative z-10 h-auto w-80 object-cover md:w-180 scale-150 lg:w-180"
            style={{ filter: `brightness(${imageBrightness}%)` }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = `https://placehold.co/400x600/eab308/ffffff?text=Image+Not+Found`;
            }}
          />
        </div>

        {/* Right Text (Big Overlay) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2, ease: [0.23, 1, 0.32, 1] }}
          className="z-40 order-3 absolute top-[30%] right-6 flex flex-col items-end text-right md:static md:top-auto md:right-auto md:z-20 md:items-center md:justify-start md:text-left"
        >
          <h1 className="font-[family-name:var(--font-anton)] text-[2.5rem] uppercase leading-none tracking-tight text-foreground md:text-[4rem] lg:text-[8rem]">
            {overlayText.part1}
            <br />
            {overlayText.part2}
          </h1>
        </motion.div>
      </div>

      {/* Footer Elements */}
      <footer className="z-30 flex w-full max-w-7xl items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex items-center space-x-4"
        >
          {socialLinks.map((link, index) => (
            <SocialIcon key={index} href={link.href} icon={link.icon} />
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="text-sm font-medium text-foreground/80"
        >
          {locationText}
        </motion.div>
      </footer>
    </div>
  );
};
