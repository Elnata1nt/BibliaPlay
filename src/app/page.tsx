import { Header } from '@/components/(wellcome)/header/components/header'
import { Footer } from '@/components/(wellcome)/footer/components/footer'
import HomeComponenet from '@/components/(wellcome)/landpage/components/landpage'


export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-blue-50">
        <HomeComponenet />
      </main>
      <Footer />
    </>
  )
}

