"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Header } from "@/components/(wellcome)/header/components/header"
import confetti from "canvas-confetti"
import { type Question, questions } from "@/app/api/questions"
import { Loader2, RefreshCw, CheckCircle, XCircle } from "lucide-react"

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [remainingQuestions, setRemainingQuestions] = useState<Question[]>([])
  const [progress, setProgress] = useState(0)
  const [answerStatus, setAnswerStatus] = useState<"correct" | "incorrect" | null>(null)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)

  useEffect(() => {
    setRemainingQuestions(shuffleArray(questions))
  }, [])

  useEffect(() => {
    if (remainingQuestions.length > 0 && !currentQuestion) {
      setCurrentQuestion(remainingQuestions[0])
    }
    setProgress(((questions.length - remainingQuestions.length) / questions.length) * 100)
  }, [remainingQuestions, currentQuestion])

  const handleAnswer = (selected: number) => {
    setSelectedAnswer(selected)
    if (currentQuestion && selected === currentQuestion.correctAnswer) {
      setScore(score + 1)
      setAnswerStatus("correct")
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      })
    } else {
      setAnswerStatus("incorrect")
    }

    setTimeout(() => {
      const newRemainingQuestions = remainingQuestions.slice(1)
      setRemainingQuestions(newRemainingQuestions)

      if (newRemainingQuestions.length === 0) {
        setShowScore(true)
      } else {
        setCurrentQuestion(newRemainingQuestions[0])
        setAnswerStatus(null)
        setSelectedAnswer(null)
      }
    }, 2000) // Delay for 2 seconds before moving to the next question
  }

  const restartQuiz = () => {
    setScore(0)
    setShowScore(false)
    setRemainingQuestions(shuffleArray(questions))
    setCurrentQuestion(null)
    setProgress(0)
    setAnswerStatus(null)
    setSelectedAnswer(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-300 to-green-200 flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center p-4">
        <Card className="w-full max-w-3xl bg-white rounded-3xl shadow-xl overflow-hidden">
          <CardContent className="p-8">
            <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Quiz Bíblico Divertido!</h1>
            <AnimatePresence mode="wait">
              {showScore ? (
                <motion.div
                  key="score"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-center"
                >
                  <h2 className="text-3xl font-bold mb-4">Fim do Quiz!</h2>
                  <p className="text-2xl mb-4">Sua pontuação é:</p>
                  <div className="text-6xl font-bold text-blue-600 mb-8">
                    {score} / {questions.length}
                  </div>
                  <Button
                    onClick={restartQuiz}
                    className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 flex items-center"
                  >
                    <RefreshCw className="mr-2 h-5 w-5" />
                    Jogar Novamente
                  </Button>
                </motion.div>
              ) : currentQuestion ? (
                <motion.div
                  key={currentQuestion.id}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  className="space-y-6"
                >
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-medium text-gray-500">
                      Pergunta {questions.length - remainingQuestions.length + 1} de {questions.length}
                    </span>
                    <span className="text-sm font-medium text-blue-600">Pontuação: {score}</span>
                  </div>
                  <Progress value={progress} className="w-full h-2 bg-blue-100" />
                  <h2 className="text-2xl font-semibold mb-6">{currentQuestion.text}</h2>
                  <div className="grid grid-cols-1 gap-4">
                    {currentQuestion.options.map((option, index) => (
                      <Button
                        key={index}
                        onClick={() => handleAnswer(index)}
                        disabled={answerStatus !== null}
                        className={`
                          ${
                            selectedAnswer === index
                              ? answerStatus === "correct"
                                ? "bg-green-500 hover:bg-green-600"
                                : "bg-red-500 hover:bg-red-600"
                              : "bg-blue-500 hover:bg-blue-600"
                          }
                          ${
                            answerStatus !== null && index === currentQuestion.correctAnswer
                              ? "bg-green-500 hover:bg-green-600"
                              : ""
                          }
                          text-white font-semibold py-4 px-6 rounded-2xl text-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg w-full text-left flex items-center justify-between
                        `}
                      >
                        <span className="flex items-center">
                          <span className="bg-blue-400 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
                            {String.fromCharCode(65 + index)}
                          </span>
                          {option}
                        </span>
                        {answerStatus !== null &&
                          (index === currentQuestion.correctAnswer ? (
                            <CheckCircle className="h-6 w-6 text-white" />
                          ) : selectedAnswer === index ? (
                            <XCircle className="h-6 w-6 text-white" />
                          ) : null)}
                      </Button>
                    ))}
                  </div>
                  {answerStatus === "incorrect" && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 p-4 bg-red-100 border border-red-300 rounded-lg"
                    >
                      <p className="text-red-700 font-semibold">
                        Ops! A resposta correta era: {currentQuestion.options[currentQuestion.correctAnswer]}
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center"
                >
                  <Loader2 className="w-8 h-8 animate-spin mx-auto" />
                  <p className="text-xl mt-4">Carregando...</p>
                </motion.div>
              )}
            </AnimatePresence>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

