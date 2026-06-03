import { useEffect, useRef, useState } from "react";

export function Particles({ count = 35 }: { count?: number }) {
  const particles = Array.from({ length: count });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {particles.map((_, i) => {
        const size = Math.random() * 3 + 1;
        const left = Math.random() * 100;
        const duration = Math.random() * 18 + 14;
        const delay = Math.random() * -20;
        return (
          <span
            key={i}
            className="particle"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}%`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}
    </div>
  );
}

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("in"), delay);
          obs.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

export function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const start = performance.now();
          const dur = 1800;
          const tick = (t: number) => {
            const p = Math.min((t - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(eased * to));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          obs.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [to]);
  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

export function CursorGlow() {
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const el = document.createElement("div");
    el.className = "cursor-glow";
    document.body.appendChild(el);
    let raf = 0;
    let tx = 0,
      ty = 0,
      x = 0,
      y = 0;
    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const tick = () => {
      x += (tx - x) * 0.18;
      y += (ty - y) * 0.18;
      el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      raf = Math.abs(tx - x) + Math.abs(ty - y) > 0.5 ? requestAnimationFrame(tick) : 0;
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      el.remove();
    };
  }, []);
  return null;
}

export function LuxuryLoader() {
  const [gone, setGone] = useState(false);
  const [hide, setHide] = useState(false);
  useEffect(() => {
    const t1 = setTimeout(() => setGone(true), 1600);
    const t2 = setTimeout(() => setHide(true), 2400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);
  if (hide) return null;
  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-700 ${gone ? "opacity-0 pointer-events-none" : "opacity-100"}`}
    >
      <div className="text-center">
        <div className="font-display text-5xl sm:text-6xl text-gold-gradient tracking-wide animate-pulse">
          Ponni
        </div>
        <div className="text-[10px] uppercase tracking-[0.5em] text-[var(--gold-soft)] mt-2">
          Wood Carving
        </div>
        <div className="mt-6 mx-auto h-px w-40 overflow-hidden bg-[var(--gold)]/15">
          <div
            className="h-full bg-[var(--gold)]"
            style={{ animation: "loader-bar 1.6s ease-in-out forwards" }}
          />
        </div>
      </div>
    </div>
  );
}

export function WhatsAppFAB({ phone = "919842054384" }: { phone?: string }) {
  return (
    <a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center text-background shadow-[0_10px_30px_-5px_oklch(0.78_0.15_80_/_0.6)] hover:scale-110 transition-transform"
      style={{ background: "var(--gradient-gold)" }}
    >
      <span className="absolute inset-0 rounded-full animate-ping bg-[var(--gold)]/30" />
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" className="relative">
        <path d="M17.6 6.3A7.85 7.85 0 0 0 12 4a7.94 7.94 0 0 0-6.8 12L4 20l4.2-1.1A7.93 7.93 0 0 0 12 19.9a7.94 7.94 0 0 0 5.6-13.6zM12 18.5a6.55 6.55 0 0 1-3.4-.9l-.2-.1-2.5.7.7-2.4-.2-.3A6.6 6.6 0 1 1 12 18.5zm3.6-4.9c-.2-.1-1.2-.6-1.4-.6s-.3-.1-.4.1-.5.6-.6.7-.2.2-.4.1a5.5 5.5 0 0 1-1.6-1 6 6 0 0 1-1.1-1.4c-.1-.2 0-.3.1-.4l.3-.4.2-.3a.4.4 0 0 0 0-.4c0-.1-.4-1-.6-1.4s-.3-.3-.4-.3h-.4a.7.7 0 0 0-.5.2 2 2 0 0 0-.6 1.5 3.5 3.5 0 0 0 .7 1.9 8 8 0 0 0 3.1 2.7c1.9.8 1.9.5 2.3.5a1.8 1.8 0 0 0 1.2-.8 1.5 1.5 0 0 0 .1-.8c0-.1-.2-.2-.4-.3z" />
      </svg>
    </a>
  );
}

export function Lightbox({
  src,
  caption,
  onClose,
}: {
  src: string | null;
  caption?: string;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!src) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [src, onClose]);
  if (!src) return null;
  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center p-4 sm:p-8 bg-background/90 backdrop-blur-md animate-in fade-in"
      onClick={onClose}
    >
      <button
        aria-label="Close"
        className="absolute top-5 right-5 w-11 h-11 rounded-full glass border border-[var(--gold)]/40 text-[var(--gold)] flex items-center justify-center hover:glow-gold"
      >
        ✕
      </button>
      <figure className="relative max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
        <div
          className="relative overflow-hidden rounded-sm border border-[var(--gold)]/30"
          style={{ boxShadow: "var(--shadow-cinematic)" }}
        >
          <img
            src={src}
            alt={caption || ""}
            className="w-full max-h-[80vh] object-contain bg-black"
          />
        </div>
        {caption && (
          <figcaption className="text-center mt-4 font-display text-xl text-gold-gradient">
            {caption}
          </figcaption>
        )}
      </figure>
    </div>
  );
}

export function TempleDivider() {
  return (
    <div className="flex items-center justify-center gap-4 my-8" aria-hidden>
      <div className="h-px w-24 sm:w-40 bg-gradient-to-r from-transparent to-[var(--gold)]" />
      <svg
        width="46"
        height="22"
        viewBox="0 0 46 22"
        className="text-[var(--gold)] drop-shadow-[0_0_8px_oklch(0.85_0.14_82_/_0.6)]"
      >
        <path d="M23 0 L28 8 L46 11 L28 14 L23 22 L18 14 L0 11 L18 8 Z" fill="currentColor" />
      </svg>
      <div className="h-px w-24 sm:w-40 bg-gradient-to-l from-transparent to-[var(--gold)]" />
    </div>
  );
}
