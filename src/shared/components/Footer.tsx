import { Copyright, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../../assets/operators-Logo.png";
import BackToTop from "./BackToTop";
import { useSectionLink } from "../hooks/useSectionLink";

type IconProps = {
  className?: string;
};

function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

function TelegramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="m4.2 11.3 15.6-6.5c.9-.4 1.9.4 1.7 1.3l-2.8 12.9c-.2 1-1.4 1.4-2.2.8l-4.3-3.2-3.3 3.1c-.8.8-2.1.3-2.2-.9l-.5-4.7-2.1-.7c-1.1-.4-1.1-1.9.1-2.4Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="m9.4 14.1 8.8-7.1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M14.5 8.4H16V5.5h-1.7c-2.4 0-3.9 1.5-3.9 4.1v1.9H8.1v3h2.3V19h3v-4.5h2.4l.5-3h-2.9v-1.5c0-.9.4-1.6 1.1-1.6Z"
        fill="currentColor"
      />
    </svg>
  );
}

function TikTokIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M16.2 4.2c.8 1.7 2.2 2.8 3.8 3v2.9c-1.6-.1-3.1-.7-4.4-1.7v5.7a5.9 5.9 0 1 1-5.9-5.9c.3 0 .7 0 1 .1v3a2.9 2.9 0 1 0 2.8 2.9V2h2.7c0 .8 0 1.6.2 2.2Z" />
    </svg>
  );
}

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/operators.online?igsh=NWIzaDBoNzBlcXl4", Icon: InstagramIcon },
  { label: "Telegram", href: "https://t.me/SMM9D", Icon: TelegramIcon },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61589973457423", Icon: FacebookIcon },
  { label: "TikTok", href: "https://www.tiktok.com/@operators.contact?_r=1&_t=ZS-971HAl3foY9", Icon: TikTokIcon },
];

const Footer = () => {
  const goToSection = useSectionLink();

  return (
    <footer
      id="footer"
      className="flex min-h-110 w-full scroll-mt-28 flex-col rounded-t-4xl bg-slate-100 px-4 py-10 text-slate-600 transition-colors dark:bg-slate-900 dark:text-slate-300 sm:min-h-95 sm:px-6 lg:px-16"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-[1fr_auto_auto] lg:items-start">
        <div>
          <Link to="/" className="flex shrink-0 items-center" aria-label="SMM Operators home">
            <img src={Logo} alt="SMM Operators logo" className="h-14 w-14 rounded bg-white p-1" />
            <span className="ml-3 text-lg font-semibold text-slate-900 dark:text-white">SMM Operators</span>
          </Link>
          <p className="mt-4 max-w-md text-sm leading-6 text-slate-500 dark:text-slate-400">
            Social media marketing support for teams that need consistent
            planning, publishing, and reporting.
          </p>
          <div className="mt-5 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            <a
              href="mailto:smmoperators.contact@gmail.com"
              className="flex items-center gap-2 transition hover:text-slate-900 dark:hover:text-white"
            >
              <Mail className="h-4 w-4 text-amber-600 dark:text-amber-300" />
              <span>smmoperators.contact@gmail.com</span>
            </a>

            <a
              href="tel:+251911123456"
              className="flex items-center gap-2 transition hover:text-slate-900 dark:hover:text-white"
            >
              <Phone className="h-4 w-4 text-amber-600 dark:text-amber-300" />
              <span>+251911123456</span>
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-900 dark:text-white">
            Quick links
          </h2>
          <nav className="mt-4 flex flex-col gap-3 text-sm">
            <button type="button" onClick={() => goToSection("hero")} className="text-left transition hover:text-slate-900 dark:hover:text-white">
              Home
            </button>
            <button type="button" onClick={() => goToSection("about")} className="text-left transition hover:text-slate-900 dark:hover:text-white">
              About
            </button>
            <button type="button" onClick={() => goToSection("team")} className="text-left transition hover:text-slate-900 dark:hover:text-white">
              Team
            </button>
            <Link to="/services" className="transition hover:text-slate-900 dark:hover:text-white">
              Services
            </Link>
            <Link to="/contact" className="transition hover:text-slate-900 dark:hover:text-white">
              Contact
            </Link>
          </nav>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-900 dark:text-white">
            Social
          </h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-900/10 bg-slate-900/5 text-slate-600 transition hover:border-amber-500 hover:bg-slate-900/10 hover:text-amber-600 dark:border-white/15 dark:bg-white/5 dark:text-slate-200 dark:hover:border-amber-300 dark:hover:bg-white/10 dark:hover:text-amber-300"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 flex w-full items-center justify-center">
        <BackToTop />
      </div>

      <div className="mx-auto mt-auto flex w-full max-w-7xl flex-col gap-3 border-t border-slate-900/10 pt-6 text-sm text-slate-500 dark:border-white/10 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-center gap-2 sm:text-1xl">
          <Copyright className="h-4 w-4" /> {new Date().getFullYear()} SMM Operators. All rights reserved.
        </p>
        <p className="sm:text-1xl">
          Built by{" "}
          <a href="https://tinsaetemesgen.netlify.app/" target="" className="font-medium text-amber-600 hover:text-amber-700 dark:text-amber-300 dark:hover:text-amber-200">
            Tinsae Temesgen
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;