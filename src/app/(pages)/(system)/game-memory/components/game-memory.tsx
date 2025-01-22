"use client"

import React, { useState, useEffect } from "react"
import { Card } from "./Card"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/(wellcome)/header/components/header"
import { Celebration } from "./Celebration"

// Imagens relacionadas ao cristianismo
const imagens = [
  "/jesus.jpeg?height=100&width=100&text=Cruz",
  "/daviegolias.jpeg?height=100&width=100&text=Bíblia",
  "/davieleao.jpeg?height=100&width=100&text=Igreja",
  "/ovelha.jpeg?height=100&width=100&text=Peixe",
  "/apostolojoao.jpeg?height=100&width=100&text=Pomba",
  "/adaoeeva.jpeg?height=100&width=100&text=Cálice",
  "/arcadenoe.jpeg?height=100&width=100&text=Âncora",
  "/abel&caim.jpeg?height=100&width=100&text=Cordeiro",
]

const todasCartas = [...imagens, ...imagens]

export default function JogoMemoriaCristao() {
  const [cartas, setCartas] = useState<string[]>([])
  const [cartasViradas, setCartasViradas] = useState<number[]>([])
  const [cartasCombinadas, setCartasCombinadas] = useState<number[]>([])
  const [movimentos, setMovimentos] = useState(0)
  const [jogoIniciado, setJogoIniciado] = useState(false)
  const [jogoCompleto, setJogoCompleto] = useState(false)

  const embaralharCartas = () => {
    const cartasEmbaralhadas = todasCartas.sort(() => Math.random() - 0.5)
    setCartas(cartasEmbaralhadas)
    setCartasViradas([])
    setCartasCombinadas([])
    setMovimentos(0)
    setJogoIniciado(false)
    setJogoCompleto(false)

    // Mostrar todas as cartas por 5 segundos
    setTimeout(() => {
      setJogoIniciado(true)
    }, 5000)
  }

  useEffect(() => {
    embaralharCartas()
  }, [])

  const handleCartaClick = (index: number) => {
    if (!jogoIniciado || cartasViradas.length === 2 || cartasCombinadas.includes(index)) return

    setCartasViradas([...cartasViradas, index])
    setMovimentos(movimentos + 1)

    if (cartasViradas.length === 1) {
      if (cartas[cartasViradas[0]] === cartas[index]) {
        const novasCombinadas = [...cartasCombinadas, cartasViradas[0], index]
        setCartasCombinadas(novasCombinadas)
        if (novasCombinadas.length === cartas.length) {
          setJogoCompleto(true)
        }
      }
      setTimeout(() => setCartasViradas([]), 1000)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-300 to-green-200 flex flex-col">
      <Header />
      <main className="flex flex-col items-center justify-center flex-grow p-4">
        <h1 className="text-3xl font-bold mb-4 text-blue-600">Jogo da Memória Cristão</h1>
        <div className="grid grid-cols-4 gap-4 mb-4">
          {cartas.map((imagem, index) => (
            <Card
              key={index}
              imagem={imagem}
              isFlipped={!jogoIniciado || cartasViradas.includes(index) || cartasCombinadas.includes(index)}
              onClick={() => handleCartaClick(index)}
            />
          ))}
        </div>
        <p className="text-xl mb-4">Movimentos: {movimentos}</p>
        <Button onClick={embaralharCartas}>Novo Jogo</Button>
        {!jogoIniciado && (
          <p className="mt-4 text-lg text-blue-600">Memorize as posições! O jogo começará em breve...</p>
        )}
        {jogoCompleto && <Celebration movimentos={movimentos} onRestart={embaralharCartas} />}
      </main>
    </div>
  )
}

