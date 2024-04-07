import Footer from "../components/Footer"
import Hero from "../components/Hero"
import InfoSection from "../components/InfoSection"
import Navbar from "../components/Navbar"
import OffersSection from "../components/OffersSection"

export default function Home() {
  return (
    <>
        <Navbar />
        <Hero />
        <div className="max-w-[50vw] my-12 mx-auto">
          <h1 className="text-4xl font-bold tracking-widest uppercase">Offers</h1>
          <div className="uppercase font-bold tracking-wider">
            <OffersSection />
          </div>
        </div>
        <InfoSection />
        <Footer />
    </>
  )
}
