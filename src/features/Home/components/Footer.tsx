import { AtSign, Copyright, MessageCircle, Share2 } from 'lucide-react';
import Logo from "../../../assets/operators-Logo.png"

const quickLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
];

const socialLinks = [
  { label: "Social updates", href: "#", Icon: Share2 },
  { label: "Community chat", href: "#", Icon: MessageCircle },
  { label: "Email", href: "#", Icon: AtSign },
];

const Footer = () => {
  return (
    <footer
      id="footer"
      className="flex min-h-110 w-full scroll-mt-28 flex-col rounded-t-4xl bg-slate-950 px-4 py-10 text-slate-300 sm:min-h-95 sm:px-6 lg:px-16"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-[1fr_auto_auto] lg:items-start">
        <div>
          <a href="#hero" className="flex shrink-0 items-center" aria-label="SMM Operators home">
            <img src={Logo} alt="SMM Operators logo" className="h-14 w-14 rounded bg-white p-1" />
            <span className="ml-3 text-lg font-semibold text-white">SMM Operators</span>
          </a>
          <p className="mt-4 max-w-md text-sm leading-6 text-slate-400">
            Social media marketing support for teams that need consistent
            planning, publishing, and reporting.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
            Quick links
          </h2>
          <nav className="mt-4 flex flex-col gap-3 text-sm">
            {quickLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-white">
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
            Social
          </h2>
          <div className="mt-4 flex gap-3">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-slate-200 transition hover:border-amber-300 hover:text-amber-300"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-auto flex w-full max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-center gap-2">
          <Copyright className="h-4 w-4" /> {new Date().getFullYear()} SMM Operators. All rights reserved.
        </p>
        <p>
          Built by{" "}
          <a href="#" className="font-medium text-amber-300 hover:text-amber-200">
            Tinsae Temesgen
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
