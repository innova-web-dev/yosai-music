'use client';

import Image from 'next/image';
import { useRef, useMemo } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

interface ImageProps {
	src: string;
	alt?: string;
}

interface ZoomParallaxProps {
	/** Array of images to be displayed in the parallax effect max 7 images */
	images: ImageProps[];
}

const desktopScales = [4, 5, 6, 5, 6, 8, 9];
const mobileScales  = [2.5, 3.5, 4, 3.5, 4, 5, 6];

/**
 * ZoomParallax component with GSAP scroll-driven animations
 * - Supports prefers-reduced-motion accessibility
 * - Prevents CLS with aspect-ratio containers
 * - Provides descriptive alt text for screen readers
 */
export function ZoomParallax({ images }: ZoomParallaxProps) {
	const container = useRef<HTMLDivElement>(null);
	const imagesRefs = useRef<(HTMLDivElement | null)[]>([]);
	const textRef = useRef<HTMLDivElement>(null);

	// Check reduced motion preference once at component creation
	const prefersReducedMotion = useMemo(() => {
		if (typeof window === 'undefined') return false;
		return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	}, []);

	// Check mobile once at component creation
	const isMobile = useMemo(() => {
		if (typeof window === 'undefined') return false;
		return window.innerWidth < 768;
	}, []);

	// GSAP animation with reduced-motion guard
	useGSAP(() => {
		if (prefersReducedMotion || images.length === 0 || !container.current) return;

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: container.current,
				start: 'top top',
				end: 'bottom bottom',
				scrub: 1,
			},
		});

		const currentScales = isMobile ? mobileScales : desktopScales;

		imagesRefs.current.forEach((el, index) => {
			if (el) {
				const scaleValue = currentScales[index % currentScales.length];
				tl.to(el, { scale: scaleValue, ease: 'none', force3D: true }, 0);
			}
		});

		if (textRef.current) {
			tl.fromTo(textRef.current, 
				{ opacity: 0, y: 50, scale: 0.8 },
				{ opacity: 1, y: 0, scale: 1, duration: 0.3, ease: 'power2.out' },
				0.1 // Start slightly after the scroll begins
			);
		}

		return () => tl.kill();
	}, { scope: container });

	// Static fallback for reduced motion - no animation
	if (prefersReducedMotion) {
		return (
			<div className="relative h-[300dvh] w-full" aria-label="Parallax image gallery">
				<div className="sticky top-0 h-dvh w-full overflow-hidden flex items-center justify-center">
					{images.map(({ src, alt }, index) => (
						<div
							key={index}
							className={cn(
								'absolute flex items-center justify-center',
								index === 0 && 'w-[50vw] h-[45vh] md:h-[25vh] md:w-[25vw]',
								index === 1 && '-top-[30vh] -left-[25vw] w-[35vw] h-[30vh] md:-top-[30vh] md:left-[5vw] md:h-[30vh] md:w-[35vw]',
								index === 2 && '-top-[25vh] left-[25vw] w-[35vw] h-[30vh] md:-top-[10vh] md:-left-[25vw] md:h-[45vh] md:w-[20vw]',
								index === 3 && 'top-[10vh] -left-[35vw] w-[30vw] h-[28vh] md:top-0 md:left-[27.5vw] md:h-[25vh] md:w-[25vw]',
								index === 4 && 'top-[15vh] left-[30vw] w-[35vw] h-[32vh] md:top-[27.5vh] md:left-[5vw] md:h-[25vh] md:w-[20vw]',
								index === 5 && 'top-[35vh] -left-[20vw] w-[35vw] h-[30vh] md:top-[27.5vh] md:-left-[22.5vw] md:h-[25vh] md:w-[30vw]',
								index === 6 && 'top-[30vh] left-[25vw] w-[30vw] h-[28vh] md:top-[22.5vh] md:left-[25vw] md:h-[15vh] md:w-[15vw]'
							)}
							style={{ zIndex: 10 + index }}
						>
							<Image
								src={src || '/placeholder.svg'}
								alt={alt || `Gallery image ${index + 1}`}
								fill
								className="object-cover"
								sizes="200vw"
								priority={index < 3}
								quality={200}
							/>
							{index === 0 && (
								<div className="absolute inset-0 z-20 flex items-center justify-end pointer-events-none pr-6 md:pr-12 text-right">
									<span className="text-white text-2xl md:text-3xl font-anton uppercase tracking-tighter drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] max-w-[150px] md:max-w-[250px] leading-tight">
										La vamos a coronar mi apá
									</span>
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		);
	}

	return (
		<div ref={container} className="relative h-[300dvh] w-full" aria-label="Parallax image gallery">
			<div className="sticky top-0 h-dvh w-full overflow-hidden">
				{images.map(({ src, alt }, index) => {
					const descriptiveAlt = alt || `Gallery image ${index + 1}`;

					return (
						<div
							key={index}
							ref={(el) => { imagesRefs.current[index] = el; }}
							className="absolute top-0 flex h-full w-full items-center justify-center"
							style={{ zIndex: 10 + index }}
						>
							<div className={cn(
								'relative bg-zinc-800 shadow-2xl overflow-hidden ring-1 ring-white/10',
								isMobile ? 'aspect-[4/3]' : 'aspect-[16/9]',
								index === 0 ? 'w-[50vw] h-[45vh] md:h-[25vh] md:w-[25vw]' : '',
								index === 1 ? '-top-[30vh] -left-[25vw] w-[35vw] h-[30vh] md:-top-[30vh] md:left-[5vw] md:h-[30vh] md:w-[35vw]' : '',
								index === 2 ? '-top-[25vh] left-[25vw] w-[35vw] h-[30vh] md:-top-[10vh] md:-left-[25vw] md:h-[45vh] md:w-[20vw]' : '',
								index === 3 ? 'top-[10vh] -left-[35vw] w-[30vw] h-[28vh] md:top-0 md:left-[27.5vw] md:h-[25vh] md:w-[25vw]' : '',
								index === 4 ? 'top-[15vh] left-[30vw] w-[35vw] h-[32vh] md:top-[27.5vh] md:left-[5vw] md:h-[25vh] md:w-[20vw]' : '',
								index === 5 ? 'top-[35vh] -left-[20vw] w-[35vw] h-[30vh] md:top-[27.5vh] md:-left-[22.5vw] md:h-[25vh] md:w-[30vw]' : '',
								index === 6 ? 'top-[30vh] left-[25vw] w-[30vw] h-[28vh] md:top-[22.5vh] md:left-[25vw] md:h-[15vh] md:w-[15vw]' : ''
							)}>
								<Image
									src={src || '/placeholder.svg'}
									alt={descriptiveAlt}
									fill
									className="object-cover"
									sizes="200vw"
									priority={index < 3}
									quality={200}
								/>
								{index === 0 && (
									<div 
										ref={textRef}
										className="absolute inset-0 z-20 flex items-center justify-end pointer-events-none pr-6 md:pr-12 text-right opacity-0"
									>
										<span className="text-white text-2xl md:text-3xl font-anton uppercase tracking-tighter drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] max-w-[120px] md:max-w-[200px] leading-tight">
											La vamos a coronar mi apá
										</span>
									</div>
								)}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}