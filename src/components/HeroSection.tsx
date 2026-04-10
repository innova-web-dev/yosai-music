
'use client';

export default function HeroSection() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#5c0000]">
            {/* Tu animación de fondo */}
            <div className="absolute inset-0 z-0">
            </div>

            {/* Texto YOSAI superpuesto */}
            <div className="relative z-10 text-center pointer-events-none">
                <h1 className="text-[15vw] md:text-[12vw] leading-none font-anton tracking-widest text-white mix-blend-difference">
                    YOSAI
                </h1>
                <p className="mt-4 text-xl md:text-2xl tracking-[0.3em] font-light text-neutral-300 uppercase">
                    Artista
                </p>
            </div>
        </section>
    );
}