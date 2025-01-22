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
      className={`w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center cursor-pointer rounded-lg transition-all duration-300 ${
        isFlipped ? "bg-white" : "bg-blue-500"
      }`}
      onClick={onClick}
    >
      {isFlipped ? (
        <Image
          src={imagem || "/placeholder.svg"}
          alt="Símbolo cristão"
          width={64}
          height={64}
          className="rounded-lg w-16 h-16 sm:w-20 sm:h-20"
        />
      ) : (
        <div className="text-3xl sm:text-4xl text-white">?</div>
      )}
    </div>
  )
}

