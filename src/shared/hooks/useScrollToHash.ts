import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scrolls to the element matching the URL hash (e.g. "#about")
// whenever the page loads or the hash changes.
export const useScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      // small delay lets the page render before we scroll
      setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
    }
  }, [location]);
};
