'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Image {
	src: string;
	alt?: string;
}

interface ZoomParallaxProps {
	/** Array of images to be displayed in the parallax effect max 7 images */
	images: Image[];
}

const desktopScales = [4, 5, 6, 5, 6, 8, 9];
const mobileScales  = [4, 5, 6, 5, 6, 8, 9]; // Escalas más grandes para asegurar que tape la pantalla en móvil

export function ZoomParallax({ images }: ZoomParallaxProps) {
	const container = useRef<HTMLDivElement>(null);
	const imagesRefs = useRef<(HTMLDivElement | null)[]>([]);

	useGSAP(() => {
		const mm = gsap.matchMedia();

		mm.add({
			isDesktop: "(min-width: 768px)",
			isMobile: "(max-width: 767px)",
			reduceMotion: "(prefers-reduced-motion: reduce)"
		}, (context) => {
			const { isDesktop, reduceMotion } = context.conditions as { isDesktop: boolean, reduceMotion: boolean };

			if (reduceMotion) return;

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: container.current,
					start: 'top top',
					end: 'bottom bottom',
					scrub: true,
				},
			});

			const currentScales = isDesktop ? desktopScales : mobileScales;

			imagesRefs.current.forEach((el, index) => {
				if (el) {
					const scaleValue = currentScales[index % currentScales.length];
					tl.to(el, { scale: scaleValue, ease: 'none' }, 0);
				}
			});
		});

		return () => mm.revert();
	}, { scope: container });

	return (
		<div ref={container} className="relative h-[300dvh] w-full">
			<div className="sticky top-0 h-dvh w-full overflow-hidden bg-zinc-900/50">
				{images.map(({ src, alt }, index) => {
					return (
						<div
							key={index}
							ref={(el) => { imagesRefs.current[index] = el; }}
							className={`absolute top-0 flex h-full w-full items-center justify-center will-change-transform`}
							style={{ zIndex: 10 + index }}
						>
							<div className={`relative bg-zinc-800 shadow-2xl overflow-hidden ring-1 ring-white/10
								${index === 0 ? 'w-[45vw] h-[30vh] md:h-[25vh] md:w-[25vw]' : ''}
								${index === 1 ? '-top-[25vh] -left-[25vw] w-[35vw] h-[18vh] md:-top-[30vh] md:left-[5vw] md:h-[30vh] md:w-[35vw]' : ''}
								${index === 2 ? '-top-[20vh] left-[25vw] w-[30vw] h-[22vh] md:-top-[10vh] md:-left-[25vw] md:h-[45vh] md:w-[20vw]' : ''}
								${index === 3 ? 'top-[10vh] -left-[35vw] w-[28vw] h-[15vh] md:top-0 md:left-[27.5vw] md:h-[25vh] md:w-[25vw]' : ''}
								${index === 4 ? 'top-[15vh] left-[30vw] w-[35vw] h-[18vh] md:top-[27.5vh] md:left-[5vw] md:h-[25vh] md:w-[20vw]' : ''}
								${index === 5 ? 'top-[30vh] -left-[20vw] w-[35vw] h-[16vh] md:top-[27.5vh] md:-left-[22.5vw] md:h-[25vh] md:w-[30vw]' : ''}
								${index === 6 ? 'top-[25vh] left-[25vw] w-[25vw] h-[15vh] md:top-[22.5vh] md:left-[25vw] md:h-[15vh] md:w-[15vw]' : ''}
							`}>
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<img
									src={src || '/placeholder.svg'}
									alt={alt || `Parallax image ${index + 1}`}
									className="h-full w-full object-cover"
								/>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
