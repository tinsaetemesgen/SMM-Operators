import Navbar from "../../../shared/components/Navbar"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Team from "../components/Team"

const Home = () => {
  return (
    <div>
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <Navbar />
        <Hero />

        <Team />
        <Footer />
      </main>
        
    </div>
  )
}

export default Home
