import { Routes, Route } from "react-router-dom"
import Home from "./features/Home/pages/Home"
import Contact from "./features/Contact/pages/Contact"
import About from "./features/About/pages/About"
import Services from "./features/Services/pages/Services"

import { useState, useEffect } from 'react'
import LoadingScreen from "./shared/components/LoadingScreen"

const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Show loading screen for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  )
}

export default App
