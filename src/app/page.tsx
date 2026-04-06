import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col">
      {/* Background Atmosphere */}
      <div className="fixed inset-0 glow-red pointer-events-none z-0 opacity-40" />
      <div className="fixed inset-0 glow-blue pointer-events-none z-0 opacity-30" />

      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center p-6 md:px-12 backdrop-sm">
        <div className="text-2xl font-heading neon-text tracking-wider select-none">
          YOSAI
        </div>
        <div className="space-x-8 hidden md:flex text-[11px] uppercase font-bold tracking-[0.2em]">
          <Link href="#" className="hover:text-crimson transition-colors duration-300">Música</Link>
          <Link href="#" className="hover:text-crimson transition-colors duration-300">Gira</Link>
          <Link href="#" className="hover:text-crimson transition-colors duration-300">Bio</Link>
          <Link href="#" className="hover:text-crimson transition-colors duration-300">Contacto</Link>
        </div>
      </nav>

      {/* Hero Content */}
      <main className="relative z-10 flex flex-col items-center justify-center flex-1 text-center px-4 py-20">
        <div className="flex flex-col items-center">
          <h1 className="text-[clamp(5rem,15vw,10rem)] font-heading mb-2 neon-text tracking-tighter opacity-90 select-none animate-in fade-in zoom-in duration-1000">
            YOSAI
          </h1>
          <h2 className="text-lg md:text-2xl font-bold mb-10 uppercase tracking-[0.6em] text-crimson antialiased">
            EL PRÓXIMO NIVEL
          </h2>
          <p className="max-w-md text-muted-foreground mb-12 text-sm md:text-base leading-relaxed tracking-wide">
            Reguetón • Corridos Tumbados • Música Popular<br />
            <span className="opacity-80">Siente la energía del barrio con el sonido del futuro.</span>
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 w-full max-w-xs md:max-w-none md:justify-center">
            <Button 
              className="btn-crimson py-7 px-12 rounded-full font-bold uppercase tracking-[0.2em] text-xs h-auto border-none"
            >
              ESCUCHAR LO ÚLTIMO
            </Button>
            <Button 
              variant="outline" 
              className="btn-outline-blue py-7 px-12 rounded-full font-bold uppercase tracking-[0.2em] text-xs h-auto bg-transparent"
            >
              FECHAS DE GIRA
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 p-12 text-center text-[10px] text-muted-foreground/40 tracking-[0.4em] uppercase font-medium">
        &copy; 2026 YOSAI MUSIC. Todos los derechos reservados.
      </footer>
    </div>
  );
}
