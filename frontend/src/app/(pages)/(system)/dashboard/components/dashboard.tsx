"use client"

// import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
// import { Volume2, VolumeX } from "lucide-react"
import { Header } from "@/components/(wellcome)/header/components/header"

const games = [
  { name: "Quiz", path: "/game-quiz", description: "Teste seus conhecimentos" },
  { name: "Jogo da Memória", path: "/memory", description: "Exercite sua mente" },
  { name: "Jogo da Fé", path: "/faith", description: "Fortaleça sua fé" },
  { name: "Decorando", path: "/decorating", description: "Aprenda versículos" },
]

export default function GamesPage() {

//   const [isMuted, setIsMuted] = useState(false)
//   const audioRef = useRef<HTMLAudioElement>(null)

//   useEffect(() => {
//     if (audioRef.current) {
//       audioRef.current.volume = 0.2 // Set initial volume to 20%
//     }
//   }, [])

//   const toggleMute = () => {
//     setIsMuted(!isMuted)
//     if (audioRef.current) {
//       audioRef.current.muted = !isMuted
//     }
//   }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 mt-16 text-center text-white">Selecione um Jogo</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.map((game, index) => (
            <motion.div
              key={game.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link href={game.path}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold">{game.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{game.description}</p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>


      {/* <audio ref={audioRef} loop autoPlay>
        <source src="/background-music.mp3" type="audio/mpeg" />
        Seu navegador não suporta o elemento de áudio.
      </audio>
      <button
        onClick={toggleMute}
        className="fixed bottom-4 right-4 bg-white p-2 rounded-full shadow-lg"
        aria-label={isMuted ? "Ativar som" : "Desativar som"}
      >
        {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
      </button> */}
    </div>
  )
}

