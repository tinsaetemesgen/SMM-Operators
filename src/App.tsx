import { Routes, Route } from "react-router-dom"
import Home from "./features/Home/pages/Home"
import Contact from "./features/Contact/pages/Contact"
import About from "./features/About/pages/About"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App