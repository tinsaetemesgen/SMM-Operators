import Navbar from "../../../shared/components/Navbar";
import Footer from "../../../shared/components/Footer";
import Hero from "../components/Hero";
import About from "../components/About";
import Team from "../components/Team";
import { useScrollToHash } from "../../../shared/hooks/useScrollToHash";

const Home = () => {
  useScrollToHash();

  return (
    <div>

      <main className="flex w-full min-h-screen flex-col items-center bg-gray-100 dark:bg-slate-950">
        <Navbar />
        <Hero />
        <About />
        <Team />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
