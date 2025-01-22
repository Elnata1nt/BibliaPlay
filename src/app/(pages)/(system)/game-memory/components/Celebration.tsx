import React from "react"
import { Button } from "@/components/ui/button"
import confetti from "canvas-confetti"

interface CelebrationProps {
  movimentos: number
  onRestart: () => void
}

export const Celebration: React.FC<CelebrationProps> = ({ movimentos, onRestart }) => {
  React.useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    })
  }, [])

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
      <div className="bg-white p-4 sm:p-8 rounded-lg text-center max-w-xs sm:max-w-sm">
        <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">Parabéns!</h2>
        <p className="mb-2 sm:mb-4 text-sm sm:text-base">Você completou o jogo em {movimentos} movimentos!</p>
        <Button onClick={onRestart} className="text-sm sm:text-base">
          Jogar Novamente
        </Button>
      </div>
    </div>
  )
}

