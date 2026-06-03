import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import heroImg from "@/assets/hero.jpg";
import templeDoor from "@/assets/temple-door.jpg";
import idol from "@/assets/idol.jpg";
import furniture from "@/assets/furniture.jpg";
import panel from "@/assets/panel.jpg";
import pillar from "@/assets/pillar.jpg";
import artisan from "@/assets/artisan.jpg";
import restoration from "@/assets/restoration.jpg";
import processConsultation from "@/assets/process-consultation.jpg";
import processSketch from "@/assets/process-sketch.jpg";
import processWood from "@/assets/process-wood.jpg";
import processCarving from "@/assets/process-carving.jpg";
import processFinishing from "@/assets/process-finishing.jpg";
import processDelivery from "@/assets/process-delivery.jpg";
import { Navbar } from "@/components/site/Navbar";
import {
  Particles,
  Reveal,
  Counter,
  TempleDivider,
  CursorGlow,
  LuxuryLoader,
  WhatsAppFAB,
  Lightbox,
} from "@/components/site/atoms";
import { Chatbot } from "@/components/site/Chatbot";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { MapPin, Phone, PenTool } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Ponni Wood Carving — Handcrafted Heritage in Every Detail" },
      {
        name: "description",
        content:
          "Premium South Indian wood carving since 2001. Temple doors, divine idols, heirloom teak furniture, mandapam pillars and master restoration.",
      },
      { property: "og:title", content: "Ponni Wood Carving" },
      {
        property: "og:description",
        content: "Handcrafted heritage in every detail. 25+ years of master craftsmanship.",
      },
      { property: "og:image", content: heroImg },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Cinzel:wght@500;700&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
});

const specialties = [
  {
    title: "Temple Doors",
    desc: "Sacred entrances carved with mythological grandeur and brass inlay.",
    img: templeDoor,
  },
  {
    title: "Divine Idols",
    desc: "Sandalwood and teak deities sculpted with devotional precision.",
    img: idol,
  },
  {
    title: "Heirloom Furniture",
    desc: "Thrones, swings and consoles built to outlast generations.",
    img: furniture,
  },
  {
    title: "Wall Panels",
    desc: "Floral and mythic reliefs that turn walls into living tapestry.",
    img: panel,
  },
  {
    title: "Mandapam & Pillars",
    desc: "Temple-grade columns honouring Chola and Pallava lineage.",
    img: pillar,
  },
  {
    title: "Wood Restoration",
    desc: "Reviving antique masterpieces with respect and patient hands.",
    img: restoration,
  },
];

const why = [
  {
    k: "01",
    t: "100% Handcrafted",
    d: "Every cut, every curve — shaped by master hands, never machines.",
  },
  {
    k: "02",
    t: "Premium Teak Wood",
    d: "Sourced from heritage groves, seasoned for years before carving.",
  },
  { k: "03", t: "Bespoke Designs", d: "Pieces commissioned to your space, story and lineage." },
  {
    k: "04",
    t: "Temple Tradition",
    d: "Rooted in Tamil sthapathi heritage passed across generations.",
  },
  {
    k: "05",
    t: "Heirloom Finish",
    d: "Hand-polished oils and wax — a glow that deepens with time.",
  },
];

function ParallaxImg({ src }: { src: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const r = ref.current.getBoundingClientRect();
      const offset = (r.top + r.height / 2 - window.innerHeight / 2) * -0.08;
      ref.current.style.transform = `translate3d(0, ${offset}px, 0) scale(1.1)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div ref={ref} className="absolute inset-0 will-change-transform">
        <img src={src} alt="" className="w-full h-full object-cover opacity-25" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
    </div>
  );
}

function Index() {
  const [lightbox, setLightbox] = useState<{ src: string; caption: string } | null>(null);
  return (
    <div id="top" className="relative min-h-screen text-foreground overflow-x-hidden">
      <LuxuryLoader />
      <Navbar />
      <CursorGlow />
      <WhatsAppFAB />
      <Chatbot />
      <Lightbox
        src={lightbox?.src ?? null}
        caption={lightbox?.caption}
        onClose={() => setLightbox(null)}
      />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden vignette">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImg}
            alt="Hand carved temple door"
            className="w-full h-full object-cover slow-zoom"
            width={1920}
            height={1080}
          />
          {/* wood grain texture overlay */}
          <div
            className="absolute inset-0 opacity-[0.18] mix-blend-overlay"
            style={{
              backgroundImage:
                "repeating-linear-gradient(92deg, oklch(0.3 0.05 55 / 0.6) 0px, oklch(0.18 0.03 45 / 0.4) 2px, oklch(0.35 0.07 60 / 0.3) 4px, oklch(0.15 0.02 40 / 0.5) 7px)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/55 to-background" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 40%, transparent 30%, oklch(0.08 0.01 45 / 0.92) 100%)",
            }}
          />
          <div className="light-beams" />
          <div className="fog" />
        </div>
        <Particles count={60} />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs sm:text-sm tracking-[0.3em] uppercase text-[var(--gold-soft)] mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] glow-gold" />
              25+ Years of Heritage Craftsmanship
            </div>
          </Reveal>

          <Reveal delay={150}>
            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.95] mb-6">
              <span className="block underline-gold text-gold-gradient">Ponni</span>
              <span className="block text-foreground/95 italic font-light text-5xl sm:text-6xl md:text-7xl lg:text-8xl mt-2">
                Wood Carving
              </span>
            </h1>
          </Reveal>

          <Reveal delay={300}>
            <p className="font-display italic text-xl sm:text-2xl md:text-3xl text-[var(--sandalwood)]/90 mb-4 max-w-2xl mx-auto">
              Handcrafted Heritage in Every Detail
            </p>
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.5em] text-[var(--gold-soft)] mb-10">
              Crafted Since 2001 · Tamil Nadu, India
            </p>
          </Reveal>

          <Reveal delay={450}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#gallery"
                className="btn-gold cta-pulse rounded-full px-8 py-3.5 text-sm font-medium tracking-wide uppercase"
              >
                Explore Our Work
              </a>
              <a
                href="#contact"
                className="btn-outline-gold rounded-full px-8 py-3.5 text-sm font-medium tracking-wide uppercase"
              >
                Get Custom Quote
              </a>
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--gold-soft)] text-xs tracking-[0.4em] uppercase animate-pulse">
          Scroll
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative py-32 px-6">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative group">
              <div className="absolute -inset-4 bg-[var(--gold)]/10 blur-3xl rounded-full" />
              <div
                className="relative overflow-hidden rounded-sm border border-[var(--gold)]/20"
                style={{ boxShadow: "var(--shadow-cinematic)" }}
              >
                <img
                  src={artisan}
                  alt="Master artisan carving"
                  className="img-zoom w-full h-[600px] object-cover"
                  loading="lazy"
                  width={1280}
                  height={896}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass rounded-sm px-6 py-4 hidden sm:block">
                <div className="font-display text-4xl text-gold-gradient">
                  <Counter to={2001} />
                </div>
                <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  Founded
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div>
              <div className="text-xs uppercase tracking-[0.4em] text-[var(--gold)] mb-4">
                — Our Legacy
              </div>
              <h2 className="font-display text-5xl md:text-6xl mb-6 leading-tight">
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                20++++.
                
                
                
                
                
                
                .
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                0
                
                
                
                 in <span className="italic text-gold-gradient">teak & time</span>
              </h2>
              <TempleDivider />
              <p className="text-muted-foreground leading-relaxed mb-5 text-lg">
                Ponni Wood Carving is a heritage-inspired handcrafted wood carving studio based in
                Coimbatore, Tamil Nadu. Developed by{" "}
                <span className="text-[var(--sandalwood)]">Gunasekaran</span>, the brand carries
                traditional Tamil craftsmanship into modern luxury designs.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                Every creation is carefully handcrafted with artistic precision, premium wood
                quality and timeless cultural elegance — temple doors that hum with mythology,
                mandapam pillars that hold up devotion, and idols that breathe.
              </p>

              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[var(--gold)]/15">
                {[
                  { n: 25, s: "+", l: "Years" },
                  { n: 1200, s: "+", l: "Pieces" },
                  { n: 40, s: "", l: "Artisans" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="font-display text-4xl text-gold-gradient">
                      <Counter to={s.n} suffix={s.s} />
                    </div>
                    <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mt-1">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SPECIALTIES */}
      <section id="specialties" className="relative py-32 px-6">
        <ParallaxImg src={panel} />
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="text-center mb-20">
              <div className="text-xs uppercase tracking-[0.4em] text-[var(--gold)] mb-4">
                — Our Specialties
              </div>
              <h2 className="font-display text-5xl md:text-6xl mb-4">The art we practice</h2>
              <TempleDivider />
              <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
                Six disciplines, one obsession: wood that remembers the hand that carved it.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <article className="group relative overflow-hidden rounded-sm border border-[var(--gold)]/15 hover-lift glass h-[420px]">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="absolute inset-0 w-full h-full object-cover img-zoom opacity-80"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
                  <div className="relative h-full flex flex-col justify-end p-7">
                    <div className="w-10 h-px bg-[var(--gold)] mb-4 transition-all duration-500 group-hover:w-20" />
                    <h3 className="font-display text-3xl mb-2 text-foreground group-hover:text-gold-gradient transition-all">
                      {s.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                  <div className="absolute inset-0 ring-1 ring-inset ring-[var(--gold)]/0 group-hover:ring-[var(--gold)]/40 transition-all duration-500 rounded-sm" />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="relative py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="text-center mb-20">
              <div className="text-xs uppercase tracking-[0.4em] text-[var(--gold)] mb-4">
                — Gallery
              </div>
              <h2 className="font-display text-5xl md:text-6xl mb-4">A museum of grain</h2>
              <TempleDivider />
            </div>
          </Reveal>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
            {[
              { src: templeDoor, c: "Temple Door • Kumbakonam" },
              { src: idol, c: "Devi Idol • Sandalwood" },
              { src: pillar, c: "Mandapam Pillar" },
              { src: furniture, c: "Heirloom Throne" },
              { src: panel, c: "Floral Wall Panel" },
              { src: restoration, c: "Restored Almirah" },
              { src: artisan, c: "The Master's Hand" },
            ].map((g, i) => (
              <Reveal key={i} delay={(i % 3) * 100}>
                <button
                  type="button"
                  onClick={() => setLightbox({ src: g.src, caption: g.c })}
                  className="block w-full text-left"
                >
                  <figure className="group relative mb-6 break-inside-avoid overflow-hidden rounded-sm border border-[var(--gold)]/10 cursor-zoom-in">
                    <img
                      src={g.src}
                      alt={g.c}
                      className="img-zoom w-full h-auto block"
                      loading="lazy"
                    />
                    <figcaption className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                      <div>
                        <div className="text-xs uppercase tracking-[0.3em] text-[var(--gold)] mb-1">
                          — View
                        </div>
                        <div className="font-display text-2xl text-gold-gradient">{g.c}</div>
                      </div>
                    </figcaption>
                  </figure>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section id="why" className="relative py-32 px-6">
        <ParallaxImg src={pillar} />
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="text-center mb-20">
              <div className="text-xs uppercase tracking-[0.4em] text-[var(--gold)] mb-4">
                — Why Choose Us
              </div>
              <h2 className="font-display text-5xl md:text-6xl mb-4">Five vows we keep</h2>
              <TempleDivider />
            </div>
          </Reveal>

          <div className="space-y-px">
            {why.map((w, i) => (
              <Reveal key={w.k} delay={i * 80}>
                <div className="group grid grid-cols-12 gap-6 items-center py-8 border-t border-[var(--gold)]/15 last:border-b transition-all hover:bg-[var(--gold)]/5 px-2">
                  <div className="col-span-2 font-display text-3xl text-[var(--gold)]/60 group-hover:text-gold-gradient transition-colors">
                    {w.k}
                  </div>
                  <h3 className="col-span-10 md:col-span-4 font-display text-2xl md:text-3xl">
                    {w.t}
                  </h3>
                  <p className="col-span-12 md:col-span-6 text-muted-foreground leading-relaxed">
                    {w.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ORDER */}
      <section id="order" className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_oklch(0.85_0.15_82_/_0.10),_transparent_60%)]" />
          <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[70%] h-80 rounded-full bg-[var(--gold)]/10 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="text-center mb-16">
              <div className="text-xs uppercase tracking-[0.4em] text-[var(--gold)] mb-4">
                — Place Your Order
              </div>
              <h2 className="font-display text-5xl md:text-6xl mb-4 text-gold-gradient">Order</h2>
              <TempleDivider />
              <p className="max-w-2xl mx-auto text-[var(--sandalwood)]/90 text-lg md:text-xl italic font-display mt-4">
                Choose your handcrafted masterpiece and send your custom enquiry.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Temple Wood Carving",
              "Pooja Mandapam",
              "Wooden Wall Panels",
              "Custom Name Boards",
              "Traditional Door Carving",
              "Wooden Interior Decor",
              "Teak Wood Furniture",
              "Bespoke Commissions",
            ].map((item, i) => (
              <Reveal key={item} delay={i * 60}>
                <a
                  href="#contact-quick"
                  className="group relative block h-full glass shimmer-border rounded-sm p-7 border border-[var(--gold)]/25 hover-lift overflow-hidden transition-all duration-500 hover:border-[var(--gold)]/70"
                  style={{ boxShadow: "0 0 0 1px transparent" }}
                >
                  <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-[var(--gold)]/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      boxShadow:
                        "inset 0 0 40px -10px color-mix(in oklab, var(--gold) 50%, transparent), 0 0 50px -10px color-mix(in oklab, var(--gold) 40%, transparent)",
                    }}
                  />
                  <div className="relative flex flex-col h-full">
                    <div className="font-display text-3xl text-[var(--gold)]/50 group-hover:text-gold-gradient transition-colors mb-4">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="gold-divider mb-4" />
                    <h3 className="font-display text-xl md:text-2xl leading-snug text-foreground/95 group-hover:text-gold-gradient transition-colors">
                      {item}
                    </h3>
                    <div className="mt-6 text-xs uppercase tracking-[0.3em] text-[var(--gold)]/70 group-hover:text-[var(--gold)] transition-colors inline-flex items-center gap-2">
                      Enquire <span aria-hidden>→</span>
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOM ORDER BANNER */}
      <section id="custom-order" className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_oklch(0.85_0.15_82_/_0.12),_transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,_transparent,_oklch(0_0_0_/_0.6))]" />
        </div>
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="relative glass rounded-sm p-10 md:p-16 text-center overflow-hidden group">
              {/* glowing border */}
              <div
                className="pointer-events-none absolute inset-0 rounded-sm"
                style={{
                  boxShadow:
                    "inset 0 0 0 1px color-mix(in oklab, var(--gold) 35%, transparent), 0 0 80px -10px color-mix(in oklab, var(--gold) 35%, transparent)",
                }}
              />
              <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[var(--gold)]/15 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-[var(--gold)]/10 blur-3xl" />

              <div className="text-xs uppercase tracking-[0.4em] text-[var(--gold)] mb-5">
                — Bespoke Commissions
              </div>
              <h2 className="font-display text-4xl md:text-6xl leading-tight mb-6">
                <span className="text-gold-gradient">Whatever design you imagine,</span>
                <br />
                we craft it with perfection.
              </h2>
              <div className="mx-auto my-6">
                <TempleDivider />
              </div>
              <p className="max-w-2xl mx-auto text-foreground/75 text-lg leading-relaxed mb-10">
                At Ponni Wood Carving, we create fully customized handcrafted wood carvings based on
                your vision, style and tradition.
              </p>

              <a
                href="tel:+919842054384"
                className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass border border-[var(--gold)]/30 text-[var(--gold)] hover:text-[var(--gold-soft)] hover:border-[var(--gold)]/60 transition-all mb-8 group/cta"
              >
                <Phone className="w-4 h-4" />
                <span className="font-display tracking-wider text-lg">+91 98420 54384</span>
              </a>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:+919842054384"
                  className="btn-gold rounded-full px-8 py-3 text-sm font-medium inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" /> Call Now
                </a>
                <a
                  href="#contact"
                  className="rounded-full px-8 py-3 text-sm font-medium inline-flex items-center gap-2 border border-[var(--gold)]/40 text-foreground hover:bg-[var(--gold)]/10 hover:border-[var(--gold)]/70 transition-all"
                >
                  <PenTool className="w-4 h-4" /> Get Custom Design
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ECHOES OF TRADITION */}
      <section id="echoes" className="relative py-32 px-6 overflow-hidden">
        <ParallaxImg src={panel} />
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="text-center mb-20">
              <div className="text-xs uppercase tracking-[0.4em] text-[var(--gold)] mb-4">
                — Heritage & Craft
              </div>
              <h2 className="font-display text-5xl md:text-6xl mb-4 text-gold-gradient">
                Echoes of Tradition
              </h2>
              <TempleDivider />
              <p className="max-w-2xl mx-auto text-[var(--sandalwood)]/90 text-lg md:text-xl italic font-display mt-4">
                Every chisel mark carries a story.
                <br />
                Every carving echoes generations of craftsmanship.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Handcrafted wooden temple designs",
              "Traditional South Indian wood carving",
              "Custom pooja mandapam work",
              "Premium teak wood finishing",
              "Artistic wall panel carvings",
              "Heritage-inspired craftsmanship",
              "Detailed hand chiseling techniques",
              "Custom-made wooden interiors",
            ].map((item, i) => (
              <Reveal key={item} delay={i * 70}>
                <article className="group relative h-full glass rounded-sm p-7 border border-[var(--gold)]/25 hover-lift overflow-hidden">
                  <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-[var(--gold)]/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative flex flex-col h-full">
                    <div className="font-display text-3xl text-[var(--gold)]/50 group-hover:text-gold-gradient transition-colors mb-4">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="gold-divider mb-4" />
                    <h3 className="font-display text-xl md:text-2xl leading-snug text-foreground/95 group-hover:text-gold-gradient transition-colors">
                      {item}
                    </h3>
                  </div>
                  <div className="absolute inset-0 ring-1 ring-inset ring-[var(--gold)]/0 group-hover:ring-[var(--gold)]/50 transition-all duration-500 rounded-sm pointer-events-none" />
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="text-center mt-14">
              <a
                href="#contact-quick"
                className="btn-gold rounded-full px-8 py-3.5 text-sm font-medium tracking-wide uppercase inline-flex items-center gap-2"
              >
                <PenTool className="w-4 h-4" /> Commission Your Piece
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_oklch(0.85_0.15_82_/_0.08),_transparent_60%)]" />
        </div>
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="text-center mb-20">
              <div className="text-xs uppercase tracking-[0.4em] text-[var(--gold)] mb-4">
                — Our Process
              </div>
              <h2 className="font-display text-5xl md:text-6xl mb-4">From sketch to sanctum</h2>
              <TempleDivider />
              <p className="max-w-2xl mx-auto text-muted-foreground text-lg mt-4">
                Six patient steps — every piece moves through the same heritage workflow.
              </p>
            </div>
          </Reveal>

          <div className="relative">
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/40 to-transparent" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4">
              {[
                {
                  t: "Consultation",
                  d: "Listening to your vision, space and story.",
                  img: processConsultation,
                },
                {
                  t: "Design Sketch",
                  d: "Hand-drawn motifs aligned with sthapathi tradition.",
                  img: processSketch,
                },
                {
                  t: "Wood Selection",
                  d: "Aged teak and rosewood chosen for grain and soul.",
                  img: processWood,
                },
                {
                  t: "Hand Carving",
                  d: "Master artisans chisel detail by patient detail.",
                  img: processCarving,
                },
                {
                  t: "Finishing",
                  d: "Hand-polished oils for an heirloom golden glow.",
                  img: processFinishing,
                },
                {
                  t: "Delivery",
                  d: "Reverently packed and installed at your sanctuary.",
                  img: processDelivery,
                },
              ].map((p, i) => (
                <Reveal key={p.t} delay={i * 90}>
                  <div className="relative text-center group">
                    <div className="relative mx-auto w-28 h-28 md:w-32 md:h-32 mb-6">
                      <div className="absolute -inset-2 rounded-full bg-[var(--gold)]/20 blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
                      <div className="relative w-full h-full rounded-full p-[2px] bg-gradient-to-br from-[var(--gold)] via-[var(--gold-soft)]/60 to-[var(--gold)]/30 shadow-[0_0_30px_-6px_rgba(212,175,55,0.45)] group-hover:shadow-[0_0_45px_-4px_rgba(212,175,55,0.75)] transition-all duration-500 group-hover:scale-105">
                        <div className="w-full h-full rounded-full overflow-hidden bg-[var(--matte-black,#0b0b0b)] ring-1 ring-black/40">
                          <img
                            src={p.img}
                            alt={p.t}
                            loading="lazy"
                            width={768}
                            height={768}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                        </div>
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-9 h-9 rounded-full glass border border-[var(--gold)]/60 flex items-center justify-center font-display text-sm text-gold-gradient shadow-lg">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                    </div>
                    <h3 className="font-display text-xl md:text-2xl mb-2 group-hover:text-gold-gradient transition-colors">
                      {p.t}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed px-2">{p.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="relative py-32 px-6 overflow-hidden">
        <ParallaxImg src={artisan} />
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="text-center mb-20">
              <div className="text-xs uppercase tracking-[0.4em] text-[var(--gold)] mb-4">
                — Voices of Patrons
              </div>
              <h2 className="font-display text-5xl md:text-6xl mb-4">Whispers from our homes</h2>
              <TempleDivider />
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                q: "Our temple door feels alive — every visitor pauses and runs their hand across the carving. Ponni gave our home a soul.",
                n: "Lakshmi & Ramanathan",
                c: "Chennai",
              },
              {
                q: "The mandapam pillars they crafted for our family shrine carry the same weight as the temples I grew up with. Truly heirloom work.",
                n: "Dr. Vasanth Kumar",
                c: "Madurai",
              },
              {
                q: "Patient, generous, and wildly skilled. The throne swing they made will stay in our family for three generations, easily.",
                n: "Aishwarya Iyer",
                c: "Bengaluru",
              },
            ].map((t, i) => (
              <Reveal key={t.n} delay={i * 100}>
                <article className="relative h-full glass rounded-sm p-8 border border-[var(--gold)]/20 hover-lift overflow-hidden group">
                  <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-[var(--gold)]/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="font-display text-6xl text-[var(--gold)]/40 leading-none mb-2">
                    "
                  </div>
                  <p className="text-foreground/85 leading-relaxed italic font-display text-lg mb-6">
                    {t.q}
                  </p>
                  <div className="gold-divider mb-4" />
                  <div className="font-display text-lg text-gold-gradient">{t.n}</div>
                  <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mt-1">
                    {t.c}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT QUICK */}
      <section id="contact-quick" className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_oklch(0.85_0.15_82_/_0.10),_transparent_60%)]" />
          <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[80%] h-80 rounded-full bg-[var(--gold)]/10 blur-3xl" />
        </div>
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="text-center mb-12">
              <div className="text-xs uppercase tracking-[0.4em] text-[var(--gold)] mb-5">
                — Contact Us —
              </div>
              <h2 className="font-display text-4xl md:text-6xl leading-tight mb-6">
                <span className="text-gold-gradient">Let's craft your vision</span>
                <br />
                into timeless wood art.
              </h2>
              <div className="mx-auto my-6">
                <TempleDivider />
              </div>
              <p className="max-w-2xl mx-auto text-foreground/75 text-lg leading-relaxed">
                At Ponni Wood Carving, we bring your custom ideas to life with handcrafted
                detailing, traditional artistry, and premium woodwork.
              </p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <EnquiryForm />
          </Reveal>

          <Reveal delay={100}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a
                href="tel:+919842054384"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass border border-[var(--gold)]/30 text-[var(--gold)] hover:border-[var(--gold)]/60 transition-all"
              >
                <Phone className="w-4 h-4" />
                <span className="font-display tracking-wider text-base sm:text-lg">
                  +91 9842054384
                </span>
              </a>
              <div className="inline-flex items-start gap-3 px-6 py-3 rounded-2xl glass border border-[var(--gold)]/20 text-foreground/85 max-w-md">
                <MapPin className="w-4 h-4 text-[var(--gold)] mt-1 shrink-0" />
                <span className="font-display tracking-wider text-sm sm:text-base leading-relaxed text-center sm:text-left">
                  7/601-172D, Murugan Nagar,
                  <br />
                  Kanuvai – Thadagam Road,
                  <br />
                  Coimbatore, Tamil Nadu, India
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-10 mb-14 mx-auto max-w-xl">
              <div className="relative glass rounded-sm p-6 sm:p-8 text-center border border-[var(--gold)]/30 overflow-hidden">
                <div
                  className="pointer-events-none absolute inset-0 rounded-sm"
                  style={{
                    boxShadow:
                      "inset 0 0 0 1px color-mix(in oklab, var(--gold) 30%, transparent), 0 0 60px -15px color-mix(in oklab, var(--gold) 35%, transparent)",
                  }}
                />
                <div className="text-xs uppercase tracking-[0.4em] text-[var(--gold)] mb-3">
                  — Bespoke Commissions —
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-gold-gradient mb-4">
                  Direct Line to the Atelier
                </h3>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href="tel:+919842054384"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-[var(--gold)]/40 text-[var(--gold)] hover:border-[var(--gold)]/70 transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="font-display tracking-wider">Call +91 9842054384</span>
                  </a>
                  <a
                    href="https://wa.me/919842054384"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-[var(--gold)]/40 text-foreground hover:bg-[var(--gold)]/10 hover:border-[var(--gold)]/70 transition-all"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-[var(--gold)]"
                    >
                      <path d="M17.6 6.3A7.85 7.85 0 0 0 12 4a7.94 7.94 0 0 0-6.8 12L4 20l4.2-1.1A7.93 7.93 0 0 0 12 19.9a7.94 7.94 0 0 0 5.6-13.6zM12 18.5a6.55 6.55 0 0 1-3.4-.9l-.2-.1-2.5.7.7-2.4-.2-.3A6.6 6.6 0 1 1 12 18.5z" />
                    </svg>
                    <span className="font-display tracking-wider">WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
              <a
                href="tel:+919842054384"
                className="btn-gold rounded-full px-8 py-3 text-sm font-medium inline-flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <Phone className="w-4 h-4" /> Call Now
              </a>
              <a
                href="https://wa.me/919842054384"
                target="_blank"
                rel="noreferrer"
                className="rounded-full px-8 py-3 text-sm font-medium inline-flex items-center gap-2 border border-[var(--gold)]/40 text-foreground hover:bg-[var(--gold)]/10 hover:border-[var(--gold)]/70 transition-all w-full sm:w-auto justify-center"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-[var(--gold)]"
                >
                  <path d="M17.6 6.3A7.85 7.85 0 0 0 12 4a7.94 7.94 0 0 0-6.8 12L4 20l4.2-1.1A7.93 7.93 0 0 0 12 19.9a7.94 7.94 0 0 0 5.6-13.6zM12 18.5a6.55 6.55 0 0 1-3.4-.9l-.2-.1-2.5.7.7-2.4-.2-.3A6.6 6.6 0 1 1 12 18.5zm3.6-4.9c-.2-.1-1.2-.6-1.4-.6s-.3-.1-.4.1-.5.6-.6.7-.2.2-.4.1a5.5 5.5 0 0 1-1.6-1 6 6 0 0 1-1.1-1.4c-.1-.2 0-.3.1-.4l.3-.4.2-.3a.4.4 0 0 0 0-.4c0-.1-.4-1-.6-1.4s-.3-.3-.4-.3h-.4a.7.7 0 0 0-.5.2 2 2 0 0 0-.6 1.5 3.5 3.5 0 0 0 .7 1.9 8 8 0 0 0 3.1 2.7c1.9.8 1.9.5 2.3.5a1.8 1.8 0 0 0 1.2-.8 1.5 1.5 0 0 0 .1-.8c0-.1-.2-.2-.4-.3z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div
              className="relative group rounded-sm overflow-hidden shimmer-border transition-all duration-500 hover:scale-[1.01]"
              style={{
                boxShadow:
                  "0 0 0 1px color-mix(in oklab, var(--gold) 40%, transparent), 0 30px 80px -20px color-mix(in oklab, var(--gold) 30%, transparent)",
              }}
            >
              <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,_transparent_55%,_oklch(0_0_0_/_0.55))] mix-blend-multiply" />
              <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(180deg,_oklch(0_0_0_/_0.25),_transparent_30%,_transparent_70%,_oklch(0_0_0_/_0.35))]" />
              <iframe
                title="Ponni Wood Carving — 7/601-172D, Murugan Nagar, Kanuvai – Thadagam Road, Coimbatore"
                src="https://www.google.com/maps?q=7%2F601-172D%2C+Murugan+Nagar%2C+Kanuvai+-+Thadagam+Road%2C+Coimbatore%2C+Tamil+Nadu%2C+India&output=embed"
                className="w-full h-[380px] md:h-[460px] border-0 grayscale-[0.4] contrast-110 brightness-90 transition-all duration-500 group-hover:grayscale-0 group-hover:brightness-100"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative py-14 px-6 border-t border-[var(--gold)]/15">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <div className="font-display text-3xl text-gold-gradient">Ponni</div>
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Wood Carving Atelier
            </div>
          </div>
          <div className="text-xs text-muted-foreground tracking-wider text-center md:text-right">
            © {new Date().getFullYear()} Ponni Wood Carving.
            <br />
            Carved with reverence in Coimbatore.
          </div>
        </div>
      </footer>
    </div>
  );
}
