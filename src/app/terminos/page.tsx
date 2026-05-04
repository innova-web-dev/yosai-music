'use client';

import { Footer } from '@/components/ui/footer';
import { ArrowLeft, FileText, Shield, Users, AlertTriangle, Scale, RefreshCw, Mail } from 'lucide-react';
import Link from 'next/link';

const sections = [
  {
    icon: FileText,
    title: '1. Aceptación de los Términos',
    content:
      'Al acceder y utilizar el sitio web de Yosai Music (en adelante, "el Sitio"), usted acepta cumplir y estar sujeto a estos Términos de Servicio. Si no está de acuerdo con alguno de estos términos, le solicitamos que interrumpa el uso del Sitio de inmediato. El uso continuado del Sitio constituye la aceptación plena de los presentes términos.',
  },
  {
    icon: Users,
    title: '2. Uso del Sitio y Contenido',
    content:
      'El Sitio ofrece acceso a contenido relacionado con el artista Yosai Music, incluyendo música, imágenes, videos, fechas de presentaciones, mercancía y demás materiales (en adelante, "el Contenido"). Usted se compromete a utilizar el Sitio y el Contenido únicamente para fines personales y no comerciales. Queda prohibida la reproducción, distribución, modificación, creación de obras derivadas o explotación comercial de cualquier parte del Contenido sin autorización previa por escrito de Yosai Music.',
  },
  {
    icon: Shield,
    title: '3. Propiedad Intelectual',
    content:
      'Todo el Contenido del Sitio — incluyendo pero no limitado a composiciones musicales, letras, grabaciones, fotografías, videos, logotipos, marcas, diseños gráficos y código fuente — es propiedad exclusiva de Yosai Music y/o sus licenciantes, protegido por las leyes de propiedad intelectual mexicanas e internacionales. El uso no autorizado de cualquier elemento del Sitio puede constituir una violación de derechos de autor, marcas registradas y otras leyes aplicables.',
  },
  {
    icon: AlertTriangle,
    title: '4. Limitación de Responsabilidad',
    content:
      'El Sitio y su Contenido se proporcionan "tal cual" y "según disponibilidad", sin garantías de ningún tipo, ya sean expresas o implícitas. Yosai Music no será responsable por daños directos, indirectos, incidentales, consecuentes o punitivos derivados del uso o la imposibilidad de uso del Sitio. Esto incluye, sin limitación, cualquier error u omisión en el Contenido, interrupciones del servicio, o pérdida de datos.',
  },
  {
    icon: Users,
    title: '5. Conducta del Usuario',
    content:
      'Al utilizar el Sitio, usted se compromete a no realizar las siguientes acciones: (a) publicar o transmitir contenido ilegal, difamatorio, obsceno u ofensivo; (b) interferir con el funcionamiento del Sitio mediante virus, bots u otros medios maliciosos; (c) intentar obtener acceso no autorizado a sistemas o cuentas de otros usuarios; (d) suplantar la identidad de otra persona o entidad; (e) violar cualquier ley local, estatal, nacional o internacional aplicable.',
  },
  {
    icon: Scale,
    title: '6. Legislación Aplicable',
    content:
      'Estos Términos de Servicio se regirán e interpretarán de conformidad con las leyes de los Estados Unidos Mexicanos. Cualquier disputa que surja en relación con estos términos será sometida a la jurisdicción exclusiva de los tribunales competentes de la Ciudad de México, renunciando las partes a cualquier otro fuero que pudiera corresponderles.',
  },
  {
    icon: RefreshCw,
    title: '7. Modificaciones a los Términos',
    content:
      'Yosai Music se reserva el derecho de modificar estos Términos de Servicio en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en el Sitio. Es responsabilidad del usuario revisar periódicamente estos términos. El uso continuado del Sitio después de cualquier modificación constituye la aceptación de los nuevos términos.',
  },
  {
    icon: Mail,
    title: '8. Contacto',
    content:
      'Para cualquier pregunta, aclaración o notificación relacionada con estos Términos de Servicio, puede contactarnos a través de los siguientes medios:',
  },
];

export default function TerminosPage() {
  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]">
        <svg width="100%" height="100%">
          <filter id="noise-filter">
            <feTurbulence type="fractalNoise" baseFrequency="1.8" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise-filter)" />
        </svg>
      </div>

      <main className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Volver al inicio
        </Link>

        <header className="mb-16">
          <div className="w-12 h-12 rounded-xl bg-[#82000F]/20 border border-[#82000F]/30 flex items-center justify-center mb-6">
            <FileText size={22} className="text-[#82000F]" />
          </div>
          <h1 className="font-anton text-4xl sm:text-5xl uppercase tracking-tight mb-4">
            Términos de Servicio
          </h1>
          <p className="text-zinc-500 text-sm">
            Última actualización: Mayo 2026
          </p>
          <div className="mt-6 h-px w-full bg-gradient-to-r from-[#82000F]/40 via-zinc-800 to-transparent" />
        </header>

        <section className="space-y-12">
          <p className="text-zinc-300 leading-relaxed text-[15px]">
            Bienvenido a Yosai Music. Al acceder a nuestro sitio web, aceptas los siguientes términos
            y condiciones. Por favor, léelos detenidamente antes de utilizar nuestros servicios.
          </p>

          {sections.map((section) => (
            <div key={section.title} className="group">
              <div className="flex items-start gap-4 mb-3">
                <div className="w-8 h-8 rounded-lg bg-[#82000F]/10 border border-[#82000F]/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#82000F]/20 transition-colors">
                  <section.icon size={14} className="text-[#82000F]/70" />
                </div>
                <h2 className="font-anton text-xl uppercase tracking-tight">{section.title}</h2>
              </div>
              <div className="pl-12">
                {section.title === '8. Contacto' ? (
                  <div className="text-zinc-400 leading-relaxed text-[15px]">
                    <p className="mb-4">{section.content}</p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center gap-2">
                        <Mail size={14} className="text-zinc-600" />
                        <span className="text-zinc-300">contact@yosaimusic.com</span>
                      </li>
                    </ul>
                    <p className="text-zinc-500 text-sm">
                      Nos comprometemos a responder cualquier consulta en un plazo máximo de 15 días hábiles.
                    </p>
                  </div>
                ) : (
                  <p className="text-zinc-400 leading-relaxed text-[15px]">{section.content}</p>
                )}
              </div>
            </div>
          ))}
        </section>

        <footer className="mt-20 pt-8 border-t border-zinc-900">
          <p className="text-zinc-600 text-xs text-center">
            © {new Date().getFullYear()} Yosai Music. Todos los derechos reservados.
          </p>
        </footer>
      </main>

      <Footer />
    </div>
  );
}
