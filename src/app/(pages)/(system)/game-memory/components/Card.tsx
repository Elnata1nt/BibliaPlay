import type React from "react"
import Image from "next/image"

interface CardProps {
  imagem: string
  isFlipped: boolean
  onClick: () => void
}

export const Card: React.FC<CardProps> = ({ imagem, isFlipped, onClick }) => {
  return (
    <div
      className={`w-24 h-24 flex items-center justify-center cursor-pointer rounded-lg transition-all duration-300 ${
        isFlipped ? "bg-white" : "bg-blue-500"
      }`}
      onClick={onClick}
    >
      {isFlipped ? (
        <Image src={imagem || "/placeholder.svg"} alt="Símbolo cristão" width={80} height={80} className="rounded-lg" />
      ) : (
        <div className="text-4xl text-white">?</div>
      )}
    </div>
  )
}

