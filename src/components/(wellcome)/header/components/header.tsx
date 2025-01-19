"use client"

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'

export function Header() {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/dashboard');
  };

  return (
    <header className="bg-blue-900 text-white py-4 px-6 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-yellow-300">
          BíbliaPlay
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/dashboard" className="hover:text-yellow-300 transition-colors">Jogos</Link>
          <Link href="/sobre" className="hover:text-yellow-300 transition-colors">Sobre</Link>
          <Link href="/comunidade" className="hover:text-yellow-300 transition-colors">Comunidade</Link>
        </nav>
        <Button
          asChild
          size="sm"
          className="bg-yellow-400 hover:bg-yellow-500 text-blue-900"
          onClick={handleLogin}
        >
          <span>Jogar</span>
        </Button>
      </div>
    </header>
  );
}
