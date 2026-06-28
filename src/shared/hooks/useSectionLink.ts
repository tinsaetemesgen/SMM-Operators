import { useNavigate, useLocation } from "react-router-dom";

// Returns a function that scrolls to a section on the Home page.
// If we're already on Home, it scrolls directly.
// If we're on another page, it navigates to Home with a hash,
// and useScrollToHash (used in Home.tsx) handles the scroll once we land there.
export const useSectionLink = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (id: string) => {
    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${id}`);
    }
  };

  return goToSection;
};
