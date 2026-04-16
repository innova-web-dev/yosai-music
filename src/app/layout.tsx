import "./globals.css";
import { Anton, Inter } from 'next/font/google';

const anton = Anton({ subsets: ['latin'], weight: '400', variable: '--font-anton' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', weight: ['300', '400', '500', '600'] });

export const metadata = {
  title: 'YOSAI - Artista Musical',
  description: 'Los corridos del valle - Música mexicana moderna',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${anton.variable} ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-[#121212] text-white overflow-x-hidden font-sans">
        {children}
      </body>
    </html>
  );
}
