import Header from '@/components/Header'
import HeroBanner from '@/components/HeroBanner'
import MakingTours from '@/components/MakingTours'
import Navbar from '@/components/Navbar'
import Tours from '@/components/Tours'

export default function Home() {



  return (
    <main className="">
      <Header />
      <Navbar />
      <HeroBanner />
      <Tours />
      <MakingTours />
      <div className='h-screen'></div>
    </main>
  )
}
