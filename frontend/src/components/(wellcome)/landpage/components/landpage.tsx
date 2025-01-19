import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import { Gamepad2 } from "lucide-react";

export default function HomeComponenet() {
  return (
    <>
      <main className="bg-blue-50">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600">
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Bem-vindo ao <span className="text-yellow-300">BíbliaPlay</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Explore as escrituras de forma divertida e interativa com nossos
              jogos bíblicos online. Aprenda, divirta-se e cresça na fé!
            </p>
            <Button
              asChild
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold px-8 py-3 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              <Link href="/dashboard">Começar a Jogar</Link>
            </Button>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-blue-900 to-transparent opacity-75"></div>

          <div className="absolute bottom-4 left-4 animate-bounce text-white">
            <Gamepad2 size={60} />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
              Por que escolher BíbliaPlay?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl mb-4 text-yellow-500">🎮</div>
                <h3 className="text-xl font-semibold mb-2 text-blue-900">
                  Jogos Divertidos
                </h3>
                <p className="text-gray-600">
                  Desafie-se com uma variedade de jogos bíblicos interativos e
                  envolventes.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl mb-4 text-yellow-500">📚</div>
                <h3 className="text-xl font-semibold mb-2 text-blue-900">
                  Aprendizado Bíblico
                </h3>
                <p className="text-gray-600">
                  Aprenda mais sobre a Bíblia enquanto se diverte com amigos e
                  família.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl mb-4 text-yellow-500">🌟</div>
                <h3 className="text-xl font-semibold mb-2 text-blue-900">
                  Crescimento Espiritual
                </h3>
                <p className="text-gray-600">
                  Fortaleça sua fé e conhecimento bíblico de maneira lúdica e
                  interativa.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Games Section */}
        <section className="bg-blue-100 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
              Jogos em Destaque
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {["Quiz Bíblico", "Caça-Palavras Sagrado", "Jornada de Fé"].map(
                (game, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md overflow-hidden"
                  >
                    <Image
                      src={`/game-${index + 1}.jpg`}
                      alt={game}
                      width={400}
                      height={225}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-semibold mb-2 text-blue-900">
                        {game}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Desafie seus conhecimentos bíblicos e divirta-se com
                        este jogo emocionante!
                      </p>
                      <Button
                        asChild
                        size="sm"
                        className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900"
                      >
                        <Link
                          href={`/${game
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                        >
                          Jogar Agora
                        </Link>
                      </Button>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
              O que nossos jogadores dizem
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Maria S.",
                  text: "BíbliaPlay tornou o estudo bíblico divertido para toda a minha família!",
                },
                {
                  name: "João P.",
                  text: "Os jogos são viciantes e educativos. Aprendi muito sobre a Bíblia.",
                },
                {
                  name: "Ana L.",
                  text: "Recomendo para todos que querem crescer na fé de forma interativa.",
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <p className="text-gray-600 mb-4">{testimonial.text}</p>
                  <p className="font-semibold text-blue-900">
                    {testimonial.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-blue-900 text-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Pronto para começar sua jornada bíblica?
            </h2>
            <p className="text-xl mb-8">
              Junte-se a milhares de jogadores e comece a explorar a Bíblia de
              uma maneira totalmente nova!
            </p>
            <Button
              asChild
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold px-8 py-3 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              <Link href="/cadastro">Criar Conta Gratuita</Link>
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}
