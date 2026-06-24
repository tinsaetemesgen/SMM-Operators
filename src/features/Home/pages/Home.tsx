import Navbar from "../../../shared/components/Navbar"
import About from "../components/About"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Team from "../components/Team"

const Home = () => {
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center bg-gray-100">
        <Navbar />
        <Hero />
        <About />
        <Team />
        <Footer />
      </main>
        
    </div>
  )
}

export default Home
