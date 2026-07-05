import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./features/Home/pages/Home";
import Contact from "./features/Contact/pages/Contact";
import About from "./features/About/pages/About";
import Services from "./features/Services/pages/Services";

import { useEffect, useState } from "react";
import LoadingScreen from "./shared/components/LoadingScreen";

const App = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Schedule updates so we don't synchronously set state on effect entry.
    const startTimer = window.setTimeout(() => setLoading(true), 0);
    const stopTimer = window.setTimeout(() => setLoading(false), 800);

    return () => {
      window.clearTimeout(startTimer);
      window.clearTimeout(stopTimer);
    };
  }, [location.pathname]);

  return (
    <div>
      {loading && <LoadingScreen />}
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  );
};

export default App;
