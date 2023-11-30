import Image from 'next/image'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ArQuran from './components/ArQuran'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-[#edecdc] h-screen text-[#1b1b1b] p-5">
        <Hero />
        <div className="p-10 justify-center flex flex-col items-center">
        <h1 className="text-3xl border-2 w-60 border-[#81b29a] font-bold text-center text-[#81b29a] my-10 p-5 rounded-lg">Surahs | السور</h1>
          <ArQuran />
        </div>
      </main>
    </>
  )
}
