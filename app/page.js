import Header from '@/components/Header'
import HeroBanner from '@/components/HeroBanner'
import Navbar from '@/components/Navbar'
import Tours from '@/components/Tours'

export default function Home() {



  return (
    <main className="h-[200vh]">
      <Header />
      <Navbar />
      <HeroBanner />
      <Tours />
    </main>
  )
}
