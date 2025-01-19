// src/app/layout.tsx (lado do servidor)

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AudioControls from "@/components/(system)/AudioControls";

// Configuração das fontes
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Exportação do Metadata
export const metadata: Metadata = {
  title: "Biblia Play",
  description: "Aprendendo a palavra de Deus",
  icons: {
    icon: "/favicon.ico",
  },
  authors: [
    {
      name: "Elnata Correa",
      url: "https://biblia-play.vercel.app/",
    },
  ],
  openGraph: {
    title: "Biblia Play",
    description: "Desenvolvendo sua solução",
    images: [
      {
        url: "https://biblia-play.vercel.app/home-biblia-play.png",
        alt: "Biblia Play",
      },
    ],
    authors: "Elnata",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <AudioControls />
      </body>
    </html>
  );
}
