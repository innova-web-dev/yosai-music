import type { Metadata } from "next";
import "./globals.css";
import { Anton, Inter } from 'next/font/google';

const anton = Anton({ subsets: ['latin'], weight: '400', variable: '--font-anton' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${anton.variable} ${inter.variable}`}>
      <body className="bg-[#121212] text-white overflow-x-hidden font-sans">
        {children}
      </body>
    </html>
  );
}
