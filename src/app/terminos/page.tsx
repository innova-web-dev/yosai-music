'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Footer } from '@/components/ui/footer';
import { ArrowLeft } from 'lucide-react';

const BEZIER = [0.16, 1, 0.3, 1] as const;

type Section = {
  num: string;
  title: string;
  content: string;
  highlight?: boolean;
};

const sections: Section[] = [
  {
    num: '01',
    title: 'Aceptacion de los Terminos',
    content:
      'Al acceder y utilizar el sitio web de Yosai Music, usted acepta cumplir y estar sujeto a estos Terminos de Servicio. Si no esta de acuerdo con alguno de estos terminos, le solicitamos que interrumpa el uso del Sitio de inmediato. El uso continuado del Sitio constituye la aceptacion plena de los presentes terminos.',
    highlight: true,
  },
  {
    num: '02',
    title: 'Uso del Sitio y Contenido',
    content:
      'El Sitio ofrece acceso a contenido relacionado con el artista Yosai Music, incluyendo musica, imagenes, videos, fechas de presentaciones, mercancia y demas materiales. Usted se compromete a utilizar el Sitio y el Contenido unicamente para fines personales y no comerciales. Queda prohibida la reproduccion, distribucion, modificacion, creacion de obras derivadas o explotacion comercial de cualquier parte del Contenido sin autorizacion previa por escrito de Yosai Music.',
  },
  {
    num: '03',
    title: 'Propiedad Intelectual',
    content:
      'Todo el Contenido del Sitio, incluyendo pero no limitado a composiciones musicales, letras, grabaciones, fotografias, videos, logotipos, marcas, disenos graficos y codigo fuente, es propiedad exclusiva de Yosai Music y/o sus licenciantes, protegido por las leyes de propiedad intelectual mexicanas e internacionales. El uso no autorizado de cualquier elemento del Sitio puede constituir una violacion de derechos de autor, marcas registradas y otras leyes aplicables.',
    highlight: true,
  },
  {
    num: '04',
    title: 'Limitacion de Responsabilidad',
    content:
      'El Sitio y su Contenido se proporcionan tal cual y segun disponibilidad, sin garantias de ningun tipo, ya sean expresas o implicitas. Yosai Music no sera responsable por danos directos, indirectos, incidentales, consecuentes o punitivos derivados del uso o la imposibilidad de uso del Sitio. Esto incluye, sin limitacion, cualquier error u omision en el Contenido, interrupciones del servicio, o perdida de datos.',
  },
  {
    num: '05',
    title: 'Conducta del Usuario',
    content:
      'Al utilizar el Sitio, usted se compromete a no publicar o transmitir contenido ilegal, difamatorio, obsceno u ofensivo; interferir con el funcionamiento del Sitio mediante virus, bots u otros medios maliciosos; intentar obtener acceso no autorizado a sistemas o cuentas de otros usuarios; suplantar la identidad de otra persona o entidad; o violar cualquier ley local, estatal, nacional o internacional aplicable.',
  },
  {
    num: '06',
    title: 'Legislacion Aplicable',
    content:
      'Estos Terminos de Servicio se regiran e interpretaran de conformidad con las leyes de los Estados Unidos Mexicanos. Cualquier disputa que surja en relacion con estos terminos sera sometida a la jurisdiccion exclusiva de los tribunales competentes de la Ciudad de Mexico, renunciando las partes a cualquier otro fuero que pudiera corresponderles.',
    highlight: true,
  },
  {
    num: '07',
    title: 'Modificaciones a los Terminos',
    content:
      'Yosai Music se reserva el derecho de modificar estos Terminos de Servicio en cualquier momento. Las modificaciones entraran en vigor inmediatamente despues de su publicacion en el Sitio. Es responsabilidad del usuario revisar periodicamente estos terminos. El uso continuado del Sitio despues de cualquier modificacion constituye la aceptacion de los nuevos terminos.',
  },
  {
    num: '08',
    title: 'Contacto',
    content:
      'Para cualquier pregunta, aclaracion o notificacion relacionada con estos Terminos de Servicio, puede contactarnos en contact@yosaimusic.com. Nos comprometemos a responder cualquier consulta en un plazo maximo de 15 dias habiles.',
  },
];

function SectionNumber({ num, delay }: { num: string; delay: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, ease: BEZIER, delay }}
      className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/[0.04] border border-white/[0.06] text-[11px] font-medium tracking-widest text-white/25 font-['SF_Pro_Display',system-ui,-apple-system,sans-serif]"
    >
      {num}
    </motion.span>
  );
}

function LegalCard({
  section,
  index,
}: {
  section: Section;
  index: number;
}) {
  const delay = 0.08 * index;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.75, ease: BEZIER, delay }}
    >
      <div
        className={
          section.highlight
            ? 'relative p-[1px] rounded-[2rem] bg-gradient-to-b from-white/[0.08] via-white/[0.04] to-white/[0.02]'
            : 'relative p-[1px] rounded-[2rem] bg-gradient-to-b from-white/[0.04] to-transparent'
        }
      >
        <div
          className={
            section.highlight
              ? 'relative rounded-[calc(2rem-1px)] bg-[#0a0a0a] px-6 py-8 sm:px-10 sm:py-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]'
              : 'relative rounded-[calc(2rem-1px)] bg-[#080808] px-6 py-7 sm:px-10 sm:py-9'
          }
        >
          <div className="flex items-start gap-5">
            <SectionNumber num={section.num} delay={delay + 0.05} />
            <div className="min-w-0 pt-[2px]">
              <motion.h2
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, ease: BEZIER, delay: delay + 0.1 }}
                className="font-anton text-lg sm:text-xl uppercase tracking-tight text-white/90 mb-4"
              >
                {section.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, ease: BEZIER, delay: delay + 0.18 }}
                className="text-[15px] leading-relaxed text-white/40 max-w-[60ch] font-[system-ui,-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif]"
              >
                {section.content}
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function TerminosPage() {
  return (
    <div className="min-h-[100dvh] bg-[#050505] text-white font-[system-ui,-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif]">
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        <svg width="100%" height="100%">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="1.8" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" opacity="0.025" />
        </svg>
      </div>

      <div
        className="fixed pointer-events-none"
        style={{
          zIndex: 0,
          top: '-40%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '900px',
          height: '900px',
          background:
            'radial-gradient(circle at center, rgba(130,0,15,0.06) 0%, rgba(130,0,15,0.02) 35%, transparent 70%)',
          borderRadius: '50%',
        }}
      />

      <main className="relative" style={{ zIndex: 2 }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: BEZIER }}
          >
            <Link
              href="/"
              className="group inline-flex items-center gap-3 px-4 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/[0.1] transition-all duration-500"
              style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/[0.06] group-hover:bg-white/[0.1] transition-all duration-500">
                <ArrowLeft size={11} className="text-white/40 group-hover:text-white/60 transition-colors duration-500" />
              </span>
              <span className="text-xs text-white/35 group-hover:text-white/55 transition-colors duration-500 tracking-wide">
                Volver al inicio
              </span>
            </Link>
          </motion.div>

          <header className="mt-16 sm:mt-24 md:ml-[4vw] lg:ml-[8vw]">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: BEZIER, delay: 0.1 }}
              className="inline-flex items-center px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.05] text-[10px] uppercase tracking-[0.25em] text-white/25 mb-8 font-medium"
            >
              Legal
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: BEZIER, delay: 0.2 }}
              className="font-anton text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tighter text-white leading-[0.9]"
            >
              Terminos
              <br />
              <span className="text-white/25">de Servicio</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: BEZIER, delay: 0.4 }}
              className="flex items-center gap-3 mt-8"
            >
              <div className="w-1 h-1 rounded-full bg-white/20" />
              <span className="text-xs text-white/20 tracking-wider font-[system-ui,-apple-system,sans-serif]">
                Vigente desde Mayo 2026
              </span>
            </motion.div>
          </header>

          <div className="mt-24 sm:mt-32 md:ml-[4vw] lg:ml-[8vw] max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: BEZIER, delay: 0.5 }}
              className="text-[16px] leading-relaxed text-white/30 max-w-[55ch] font-[system-ui,-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif]"
            >
              Bienvenido a Yosai Music. Al acceder a nuestro sitio web, aceptas
              los siguientes terminos y condiciones. Por favor, leelos
              detenidamente antes de utilizar nuestros servicios.
            </motion.p>
          </div>

          <div className="mt-28 sm:mt-36 md:ml-[4vw] lg:ml-[8vw] max-w-2xl space-y-8 sm:space-y-10">
            {sections.map((section, i) => (
              <LegalCard key={section.num} section={section} index={i} />
            ))}
          </div>

          <div className="mt-32 sm:mt-40 md:ml-[4vw] lg:ml-[8vw] max-w-2xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 1, ease: BEZIER }}
            >
              <div className="h-px w-full bg-gradient-to-r from-white/[0.06] via-white/[0.03] to-transparent" />
              <p className="mt-10 text-xs text-white/15 text-center font-[system-ui,-apple-system,sans-serif]">
                Yosai Music &mdash; CDMX, Mexico
              </p>
            </motion.div>
          </div>
        </div>

        <div className="mt-20 sm:mt-32">
          <Footer />
        </div>
      </main>
    </div>
  );
}
