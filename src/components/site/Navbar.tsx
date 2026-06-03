import { useEffect, useState } from "react";

const links = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#specialties", label: "Craftsmanship" },
  { href: "#gallery", label: "Gallery" },
  { href: "#echoes", label: "Heritage" },
  { href: "#order", label: "Custom Orders" },
  { href: "#contact-quick", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className={`mx-auto max-w-7xl px-6 transition-all duration-500`}>
        <div
          className={`flex items-center justify-between rounded-full px-5 py-3 ${scrolled ? "glass" : ""}`}
        >
          <a href="#top" className="flex items-center gap-2">
            <span className="font-display text-2xl text-gold-gradient tracking-wider">Ponni</span>
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold-soft)] hidden sm:inline">
              Wood Carving
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-foreground/80 hover:text-[var(--gold)] transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--gold)] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>
          <a
            href="#contact-quick"
            className="hidden md:inline-flex btn-gold rounded-full px-5 py-2 text-sm font-medium"
          >
            Enquire
          </a>
          <button
            className="md:hidden text-[var(--gold)] p-2"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
        {open && (
          <div className="md:hidden mt-2 glass rounded-2xl p-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-foreground/85 hover:text-[var(--gold)] py-1"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact-quick"
              onClick={() => setOpen(false)}
              className="btn-gold rounded-full px-5 py-2 text-sm font-medium text-center mt-2"
            >
              Enquire
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
