import { useState } from "react";
import { toast } from "sonner";
import { User, Phone, Mail, MessageSquare, Send } from "lucide-react";

const PHONE_RE = /^[+\d\s()-]{7,20}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function EnquiryForm() {
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim();
    const phone = String(fd.get("phone") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const message = String(fd.get("message") || "").trim();

    if (!name || name.length > 100) return toast.error("Please enter a valid name");
    if (!PHONE_RE.test(phone)) return toast.error("Please enter a valid phone number");
    if (!EMAIL_RE.test(email) || email.length > 255)
      return toast.error("Please enter a valid email");
    if (!message || message.length > 1000) return toast.error("Please share your requirement");

    setSubmitting(true);
    const text = `Hi Ponni Wood Carving,\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\n\n${message}`;
    const url = `https://wa.me/919842054384?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noreferrer");
    toast.success("Enquiry ready — opening WhatsApp");
    (e.currentTarget as HTMLFormElement).reset();
    setSubmitting(false);
  }

  const inputCls =
    "w-full rounded-full bg-black/40 border border-[var(--gold)]/25 px-5 py-3 text-foreground placeholder:text-foreground/40 outline-none transition-all focus:border-[var(--gold)]/70 focus:shadow-[0_0_0_3px_color-mix(in_oklab,var(--gold)_15%,transparent)]";
  const labelCls =
    "text-[11px] uppercase tracking-[0.3em] text-[var(--gold)]/85 mb-2 inline-flex items-center gap-2";

  return (
    <form
      onSubmit={handleSubmit}
      className="relative mx-auto max-w-3xl glass rounded-sm p-6 sm:p-10 mb-12 overflow-hidden"
      style={{
        boxShadow:
          "inset 0 0 0 1px color-mix(in oklab, var(--gold) 35%, transparent), 0 30px 80px -20px color-mix(in oklab, var(--gold) 25%, transparent)",
      }}
    >
      <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[var(--gold)]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[var(--gold)]/10 blur-3xl" />

      <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-5">
        <label className="block">
          <span className={labelCls}>
            <User className="w-3.5 h-3.5" /> Full Name
          </span>
          <input
            name="name"
            type="text"
            required
            maxLength={100}
            placeholder="Your full name"
            className={inputCls}
          />
        </label>
        <label className="block">
          <span className={labelCls}>
            <Phone className="w-3.5 h-3.5" /> Phone Number
          </span>
          <input
            name="phone"
            type="tel"
            required
            maxLength={20}
            placeholder="+91 98765 43210"
            className={inputCls}
          />
        </label>
        <label className="block sm:col-span-2">
          <span className={labelCls}>
            <Mail className="w-3.5 h-3.5" /> Email Address
          </span>
          <input
            name="email"
            type="email"
            required
            maxLength={255}
            placeholder="you@example.com"
            className={inputCls}
          />
        </label>
        <label className="block sm:col-span-2">
          <span className={labelCls}>
            <MessageSquare className="w-3.5 h-3.5" /> Message / Requirement
          </span>
          <textarea
            name="message"
            required
            maxLength={1000}
            rows={5}
            placeholder="Tell us about your vision — temple door, idol, furniture, restoration..."
            className="w-full rounded-2xl bg-black/40 border border-[var(--gold)]/25 px-5 py-4 text-foreground placeholder:text-foreground/40 outline-none transition-all focus:border-[var(--gold)]/70 focus:shadow-[0_0_0_3px_color-mix(in_oklab,var(--gold)_15%,transparent)] resize-none"
          />
        </label>
      </div>

      <div className="relative mt-8 flex justify-center">
        <button
          type="submit"
          disabled={submitting}
          className="btn-gold rounded-full px-10 py-3.5 text-sm font-medium inline-flex items-center gap-2 tracking-wider disabled:opacity-60"
        >
          <Send className="w-4 h-4" /> Send Enquiry
        </button>
      </div>
    </form>
  );
}
