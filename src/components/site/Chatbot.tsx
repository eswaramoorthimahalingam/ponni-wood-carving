import { Bot, MessageCircle, Send, Sparkles, X } from "lucide-react";
import { FormEvent, useMemo, useRef, useState } from "react";

type Message = {
  role: "assistant" | "user";
  text: string;
};

const quickPrompts = [
  "custom orders",
  "pricing details",
  "contact us",
  "wood types",
  "temple carvings",
];

function getReply(input: string) {
  const text = input.toLowerCase();

  if (text.includes("contact") || text.includes("call") || text.includes("phone")) {
    return "Phone: +91 9842054384\nAddress: 7/601-172D, Murugan Nagar, Kanuvai - Thadagam Road, Coimbatore, Tamil Nadu, India.";
  }

  if (text.includes("pricing") || text.includes("price") || text.includes("quote") || text.includes("cost")) {
    return "pricing depends on design and customization";
  }

  if (text.includes("custom") || text.includes("order")) {
    return "For custom orders, please fill the enquiry form on this page with your design idea, size, preferred wood, and delivery location.";
  }

  if (text.includes("wood") || text.includes("teak") || text.includes("rosewood")) {
    return "We can guide you on premium wood choices such as teak and rosewood based on durability, carving detail, and finish.";
  }

  if (text.includes("temple") || text.includes("carving") || text.includes("mandapam")) {
    return "We create temple doors, pooja mandapams, pillars, idols, and sacred panels with traditional South Indian carving details.";
  }

  return "Tell us about your vision, size, wood preference, and style. We will help guide the next step.";
}

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: "welcome to ponni wood carving ,how can we help bring your vision to life?",
    },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);

  const latestMessages = useMemo(() => messages.slice(-5), [messages]);

  const submitMessage = (value: string) => {
    const trimmed = value.trim();
    if (!trimmed) return;

    setMessages((current) => [
      ...current,
      { role: "user", text: trimmed },
      { role: "assistant", text: getReply(trimmed) },
    ]);
    setInput("");
    if (trimmed.toLowerCase().includes("custom")) {
      window.setTimeout(() => {
        document.getElementById("contact-quick")?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
    window.setTimeout(() => inputRef.current?.focus(), 0);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitMessage(input);
  };

  return (
    <div className="fixed bottom-24 right-4 sm:right-6 z-[60] flex flex-col items-end gap-3">
      <section
        aria-label="AI chatbot"
        aria-hidden={!open}
        className={`relative w-[calc(100vw-1.5rem)] max-w-[360px] overflow-hidden rounded-lg border border-[var(--gold)]/30 bg-[oklch(0.12_0.012_48_/_0.88)] shadow-[0_28px_90px_-24px_oklch(0_0_0_/_0.95),0_0_48px_-20px_oklch(0.78_0.16_82_/_0.75)] backdrop-blur-2xl transition-all duration-300 ease-out ${
          open
            ? "translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-4 scale-95 opacity-0"
        }`}
      >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,_oklch(0.78_0.16_82_/_0.22),_transparent_34%),radial-gradient(circle_at_100%_18%,_oklch(0.55_0.12_45_/_0.22),_transparent_32%)]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent" />

          <header className="relative flex items-center justify-between border-b border-[var(--gold)]/15 px-4 py-3.5">
            <div className="flex items-center gap-3">
              <span className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[var(--gold)]/45 bg-background/70 text-[var(--gold)] shadow-[0_0_28px_-9px_oklch(0.78_0.16_82_/_0.95)]">
                <Bot className="h-5 w-5" />
              </span>
              <div>
                <h2 className="font-display text-xl leading-none text-gold-gradient">Ponni AI</h2>
                <p className="mt-1.5 text-[10px] uppercase tracking-[0.28em] text-[var(--gold-soft)]/70">
                  Luxury Craft Guide
                </p>
              </div>
            </div>
            <button
              type="button"
              aria-label="Close chatbot"
              onClick={() => setOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--gold)]/20 bg-background/35 text-foreground/70 transition-colors hover:border-[var(--gold)]/50 hover:text-[var(--gold)]"
            >
              <X className="h-4 w-4" />
            </button>
          </header>

          <div className="relative max-h-[min(48vh,320px)] space-y-3 overflow-y-auto px-4 py-4">
            {latestMessages.map((message, index) => {
              const isUser = message.role === "user";
              return (
                <div
                  key={`${message.role}-${index}-${message.text}`}
                  className={`flex items-start gap-2 ${isUser ? "justify-end" : "justify-start"}`}
                >
                  {!isUser && (
                    <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--gold)]/25 bg-[var(--gold)]/10 text-[var(--gold)]">
                      <Sparkles className="h-3.5 w-3.5" />
                    </span>
                  )}
                  <p
                    className={`max-w-[80%] whitespace-pre-line rounded-lg px-3.5 py-2.5 text-sm leading-relaxed shadow-[0_10px_30px_-24px_oklch(0_0_0_/_0.8)] ${
                      isUser
                        ? "rounded-tr-sm bg-[linear-gradient(135deg,_var(--gold),_var(--gold-soft))] text-background"
                        : "rounded-tl-sm border border-[var(--gold)]/15 bg-background/60 text-foreground/85"
                    }`}
                  >
                    {message.text}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="relative border-t border-[var(--gold)]/15 bg-background/20 px-4 py-3.5">
            <div className="mb-3 grid grid-cols-2 gap-2">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => submitMessage(prompt)}
                  className="rounded-full border border-[var(--gold)]/25 bg-background/35 px-3 py-2 text-xs capitalize text-foreground/75 transition-colors hover:border-[var(--gold)]/60 hover:bg-[var(--gold)]/10 hover:text-[var(--gold)]"
                >
                  {prompt}
                </button>
              ))}
            </div>
            <form onSubmit={onSubmit} className="flex items-center gap-2">
              <input
                ref={inputRef}
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Type your question..."
                className="min-w-0 flex-1 rounded-full border border-[var(--gold)]/25 bg-background/75 px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-[var(--gold)]/70 focus:bg-background/95"
              />
              <button
                type="submit"
                aria-label="Send message"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-background shadow-[0_10px_30px_-12px_oklch(0.78_0.16_82_/_0.9)] transition-transform hover:scale-105 active:scale-95"
                style={{ background: "var(--gradient-gold)" }}
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
      </section>

      <button
        type="button"
        aria-label={open ? "Close AI chatbot" : "Open AI chatbot"}
        onClick={() => {
          setOpen((current) => !current);
          window.setTimeout(() => inputRef.current?.focus(), 0);
        }}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full border border-[var(--gold)]/45 text-background shadow-[0_0_34px_-10px_oklch(0.78_0.16_82_/_0.9),0_12px_35px_-8px_oklch(0.78_0.16_82_/_0.7)] transition-transform duration-300 hover:scale-110 active:scale-95"
        style={{ background: "var(--gradient-gold)" }}
      >
        <span className="absolute inset-0 rounded-full bg-[var(--gold)]/25 opacity-0 transition-opacity group-hover:opacity-100" />
        <span className="absolute -inset-2 rounded-full border border-[var(--gold)]/20 opacity-70" />
        {open ? <X className="relative h-6 w-6" /> : <MessageCircle className="relative h-6 w-6" />}
      </button>
    </div>
  );
}
