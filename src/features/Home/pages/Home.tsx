import Navbar from "../../../shared/components/Navbar"
import Hero from "../components/Hero"

const Home = () => {
  return (
    <div>
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <Navbar />
        <Hero />
      </main>
        
    </div>
  )
}

export default Home
