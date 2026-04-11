'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';


gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 240; // Total de frames reales
const currentFrame = (index: number) => {
    // Aseguramos que el index + 1 sea de dos dígitos, ej: frame_01.webp
    const frameNumber = (index + 1).toString().padStart(2, '0');
    return `/images/sequence/frame_${frameNumber}.webp`; // Ruta correcta
};

export default function ScrollyCanvas() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);

    // 1. Pre-carga de imágenes
    useEffect(() => {
        const loadedImages: HTMLImageElement[] = new Array(FRAME_COUNT);
        let loadedCount = 0;

        const handleImageLoadOrError = () => {
            loadedCount++;
            if (loadedCount === FRAME_COUNT) {
                setImages(loadedImages);
                renderFrame(0, loadedImages); // Dibuja el primer frame al terminar
            }
        };

        for (let i = 0; i < FRAME_COUNT; i++) {
            const img = new Image();
            img.onload = handleImageLoadOrError;
            img.onerror = () => {
                console.error(`Error loading frame: ${currentFrame(i)}`);
                handleImageLoadOrError(); // Continuar aunque falle
            };
            img.src = currentFrame(i);
            loadedImages[i] = img;
        }
    }, []);

    // Lógica de escalado CORREGIDA (object-fit: contain proporcional y centrado)
    const renderFrame = (index: number, imgs: HTMLImageElement[]) => {
        if (!canvasRef.current || !imgs[index]) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const img = imgs[index];
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Math.min ensures the image fits proportionally within the viewport
        const scale = Math.min(canvas.width / img.width, canvas.height / img.height);
        const x = (canvas.width / 2) - (img.width / 2) * scale;
        const y = (canvas.height / 2) - (img.height / 2) * scale;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    // 2. Animación con GSAP
    useGSAP(() => {
        if (images.length === 0) return;

        // Objeto proxy para que GSAP anime sus propiedades
        const frameData = { frame: 0 };

        // --- Timeline 1: Canvas, progreso ligado a TODA la página ---
        gsap.to(frameData, {
            frame: FRAME_COUNT - 1,
            snap: "frame", // Asegura que aterrice en números enteros
            ease: "none",  // Lineal para sincronización perfecta
            scrollTrigger: {
                trigger: document.documentElement, // El trigger es el documento entero
                start: "top top", // Empieza al tope de la página
                // Usar "max" asegura que GSAP calcule el final absoluto de la página
                // incluyendo la sección de Obras Destacadas que está más abajo.
                end: "max",
                scrub: 0.5, // Suavizado
            },
            onUpdate: () => renderFrame(frameData.frame, images)
        });

        // --- Timeline 2: Textos, clavados a su contenedor (como estaba antes) ---
        const tlText = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "+=400%", // Duración de los textos
                scrub: 0.5,
                pin: true, // Fija el contenedor
            }
        });

        // Fade out del titulo hero yosai al iniciar
        tlText.to(".hero-text", { opacity: 0, y: -100, duration: 0.1 }, 0);

        // Animación de los textos Parallax sobrepuestos (fade in/out y subida en Y)
        tlText.to(".text-1", { opacity: 1, y: 0, duration: 0.2 }, 0)
            .to(".text-1", { opacity: 0, y: -50, duration: 0.2 }, 0.2)

            .to(".text-2", { opacity: 1, y: 0, duration: 0.2 }, 0.4)
            .to(".text-2", { opacity: 0, y: -50, duration: 0.2 }, 0.6)

            .to(".text-3", { opacity: 1, y: 0, duration: 0.2 }, 0.8);

    }, { scope: containerRef, dependencies: [images] });

    // Responsividad
    useEffect(() => {
        const handleResize = () => renderFrame(0, images);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [images]);

    return (
        <>
            <div className="fixed inset-0 -z-50 bg-[#020202] overflow-hidden" />

            <canvas
                ref={canvasRef}
                className="fixed inset-0 -z-40 w-full h-full pointer-events-none"
            />

            {/* Contenedor escroleable que se pineara para animar los textos  */}
            <section ref={containerRef} className="relative h-screen w-full bg-transparent overflow-hidden">

                {/* Texto Hero YOSAI superpuesto */}
                <div className="hero-text absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none opacity-100">
                    <h1 className="text-[18vw] sm:text-[15vw] md:text-[12vw] leading-none font-anton tracking-widest text-white mix-blend-difference drop-shadow-xl">
                        YOSAI
                    </h1>
                    <p className="mt-2 sm:mt-4 text-sm sm:text-xl md:text-2xl tracking-[0.2em] sm:tracking-[0.3em] font-light text-neutral-300 uppercase">
                        Artista
                    </p>
                </div>

                {/* Overlay de Textos (Controlados por la timeline de GSAP tlText) */}
                <div className="absolute inset-0 z-30 pointer-events-none flex items-center px-4 sm:px-8 md:px-24">

                    <div className="text-1 opacity-0 translate-y-12 w-full text-center">
                        <h2 className="text-2xl sm:text-4xl md:text-7xl font-bold font-anton uppercase text-white drop-shadow-2xl">
                            Haciendo el cambio
                        </h2>
                    </div>

                    <div className="text-2 opacity-0 translate-y-12 w-full text-left max-w-3xl">
                        <h2 className="text-xl sm:text-3xl md:text-6xl font-light text-white drop-shadow-2xl">
                            En la <br />
                            <span className="font-anton font-normal uppercase text-neutral-400">industria musical.</span>
                        </h2>
                    </div>

                    <div className="text-3 opacity-0 translate-y-12 w-full text-right flex flex-col items-end">
                        <h2 className="text-xl sm:text-3xl md:text-6xl font-light max-w-2xl text-white drop-shadow-2xl">
                            Escucha mi musica <br />
                            <span className="italic font-serif">en todas las plataformas.</span>
                        </h2>
                    </div>

                </div>
            </section>
        </>
    );
}