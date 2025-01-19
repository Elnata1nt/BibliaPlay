"use client"; // Esta linha torna o arquivo um componente cliente

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useEffect, useRef, useState } from "react";
import { VolumeX, Volume2 } from "react-feather";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false); // Controle de reprodução
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.2; // Define o volume inicial como 20%
      audioRef.current.muted = isMuted; // Sincroniza o estado inicial de mutado
    }
  }, [isMuted]);

  const toggleMute = () => {
    setIsMuted((prevState) => !prevState);
  };

  const playAudio = () => {
    if (audioRef.current && !isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <audio ref={audioRef} loop autoPlay muted={isMuted}>
          <source src="/background-music.mp3" type="audio/mpeg" />
          Seu navegador não suporta o elemento de áudio.
        </audio>
        {/* Botão para tocar o áudio manualmente */}
        <button
          onClick={playAudio}
          className="fixed bottom-4 right-4 bg-white p-2 rounded-full shadow-lg"
          aria-label="Tocar som"
        >
          Tocar Áudio
        </button>
        <button
          onClick={toggleMute}
          className="fixed bottom-16 right-4 bg-white p-2 rounded-full shadow-lg"
          aria-label={isMuted ? "Ativar som" : "Desativar som"}
        >
          {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
        </button>
      </body>
    </html>
  );
}
