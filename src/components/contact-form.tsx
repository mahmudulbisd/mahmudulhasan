"use client";

import { useState, type FormEvent } from "react";
import { Loader2, Send, CheckCircle2, AlertCircle } from "lucide-react";

const services = [
  "GoHighLevel Setup & Automation",
  "Paid Ads (Meta / Google / LinkedIn)",
  "AI Automation",
  "Funnel & Website Design",
  "Something Else",
];

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          service: formData.get("service"),
          message: formData.get("message"),
        }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        throw new Error(data?.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  const inputClasses =
    "w-full bg-white/[0.07] border border-white/10 rounded-xl px-4 py-3 text-[#f5ecd9] placeholder:text-[#9aa3b8]/60 focus:outline-none focus:border-[#35c8c2] focus:ring-2 focus:ring-[#35c8c2]/20 transition-all";

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left"
    >
      <div>
        <label
          htmlFor="name"
          className="block text-[11px] font-bold uppercase tracking-[0.15em] text-[#9aa3b8] mb-2"
        >
          Name *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your full name"
          className={inputClasses}
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-[11px] font-bold uppercase tracking-[0.15em] text-[#9aa3b8] mb-2"
        >
          Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className={inputClasses}
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-[11px] font-bold uppercase tracking-[0.15em] text-[#9aa3b8] mb-2"
        >
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+1 (555) 000-0000"
          className={inputClasses}
        />
      </div>

      <div>
        <label
          htmlFor="service"
          className="block text-[11px] font-bold uppercase tracking-[0.15em] text-[#9aa3b8] mb-2"
        >
          What do you need?
        </label>
        <select
          id="service"
          name="service"
          className={inputClasses + " appearance-none cursor-pointer"}
          defaultValue=""
        >
          <option value="" disabled className="bg-[#0e1524]">
            Select a service
          </option>
          {services.map((s) => (
            <option key={s} value={s} className="bg-[#0e1524]">
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="md:col-span-2">
        <label
          htmlFor="message"
          className="block text-[11px] font-bold uppercase tracking-[0.15em] text-[#9aa3b8] mb-2"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell me about your project or growth goals…"
          className={inputClasses + " resize-none"}
        />
      </div>

      {status === "error" && (
        <div className="md:col-span-2 flex items-center gap-2 text-sm text-red-300 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
          <AlertCircle size={18} className="shrink-0" />
          {error}
        </div>
      )}

      {status === "success" && (
        <div className="md:col-span-2 flex items-center gap-2 text-sm text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 rounded-xl px-4 py-3">
          <CheckCircle2 size={18} className="shrink-0" />
          Message sent! I&apos;ll get back to you within 24 hours.
        </div>
      )}

      <div className="md:col-span-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#e8873a] to-[#b85f1e] hover:from-[#f2a35f] hover:to-[#c96f2a] disabled:opacity-60 disabled:cursor-not-allowed text-white px-8 py-4 rounded-xl font-bold text-base shadow-xl shadow-[rgba(232,135,58,0.2)] hover:scale-[1.02] transition-all"
        >
          {status === "submitting" ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Sending…
            </>
          ) : (
            <>
              <Send size={18} />
              Send Message
            </>
          )}
        </button>
      </div>
    </form>
  );
}
