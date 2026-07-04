import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, Moon, Sun, X } from "lucide-react";
import Logo from "../../assets/operators-Logo.png";
import { useSectionLink } from "../hooks/useSectionLink";

const navLinks = [
  { label: "About", kind: "scroll" as const, hash: "about" },
  { label: "Services", kind: "route" as const, to: "/services" },
  { label: "Contact", kind: "route" as const, to: "/contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const goToSection = useSectionLink();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  const handleNavClick = (link: (typeof navLinks)[number]) => {
    if (link.kind === "scroll") goToSection(link.hash);
    setIsMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 z-50 w-full px-4 py-3 md:px-8 lg:px-16">
      <nav className="mx-auto flex max-w-9xl items-center justify-between rounded-lg bg-white/60 dark:bg-gray-900/70 px-4 py-3 shadow-sm ring-1 ring-black/5 backdrop-blur transition-colors">
        <Link to="/" className="flex shrink-0 items-center" aria-label="SMM Operators home">
          <img src={Logo} alt="SMM Operators logo" className="h-12 w-12 md:h-16 md:w-16" />
        </Link>

        <div className="hidden items-center gap-8 md:flex lg:gap-80">
          <ul className="flex items-center gap-6 text-sm font-medium text-gray-900 dark:text-gray-100 lg:gap-8">
            {navLinks.map((link) =>
              link.kind === "scroll" ? (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(link)}
                    className="transition-colors hover:text-gray-700 dark:hover:text-gray-300 text-2xl m-4"
                  >
                    {link.label}
                  </button>
                </li>
              ) : (
                <li key={link.label}>
                  <Link
                    className="transition-colors hover:text-gray-700 dark:hover:text-gray-300 text-2xl m-4"
                    to={link.to}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={toggleDarkMode}
              className="flex h-10 w-10 items-center justify-center rounded-full border-0 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-100 cursor-pointer transition-colors"
              aria-label="Toggle dark mode"
              aria-pressed={isDarkMode}
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <Link
              to="/contact"
              className="rounded-full bg-amber-500 px-5 py-2.5 text-sm font-semibold text-white duration-400 hover:bg-gray-800"
            >
              Let's connect
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggleDarkMode}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-100 transition-colors"
            aria-label="Toggle dark mode"
            aria-pressed={isDarkMode}
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-800"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="mx-auto mt-2 max-w-7xl rounded-lg bg-white/95 dark:bg-gray-900/95 p-4 shadow-sm ring-1 ring-black/5 backdrop-blur md:hidden transition-colors">
          <ul className="flex flex-col gap-2 text-sm font-medium text-gray-700 dark:text-gray-200">
            {navLinks.map((link) =>
              link.kind === "scroll" ? (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(link)}
                    className="block w-full text-left rounded-md px-3 py-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-600"
                  >
                    {link.label}
                  </button>
                </li>
              ) : (
                <li key={link.label}>
                  <Link
                    className="block rounded-md px-3 py-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-600"
                    to={link.to}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>
          <Link
            to="/contact"
            className="mt-3 block rounded-full bg-amber-500 px-5 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-gray-800"
            onClick={() => setIsMenuOpen(false)}
          >
            Let's connect
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;