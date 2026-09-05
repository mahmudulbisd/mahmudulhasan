import { Check, Mail, Phone, CalendarDays } from "lucide-react";
import { BookingButton } from "@/components/booking-button";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { WalleRobot } from "@/components/walle-robot";
import { siteConfig } from "@/lib/site";

const assurances = [
  "No commitment required",
  "Free 30-minute session",
  "Response within 24 hours",
];

export function CtaSection() {
  return (
    <section id="contact" className="py-16 md:py-32 bg-[#0c1220]">
      <div className="max-w-6xl mx-auto px-4">
        <Reveal>
          <div className="bg-gradient-to-br from-[#b85f1e] via-[#8a4a1f] to-[#1f4d4b] rounded-[2.5rem] md:rounded-[3.5rem] p-6 sm:p-8 md:p-12 lg:p-16 relative overflow-hidden shadow-[0_40px_100px_-20px_rgba(232,135,58,0.35)] border border-[rgba(245,236,217,0.1)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_50%)]" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <div className="text-center lg:text-left">
                <div className="relative w-24 h-24 mx-auto lg:mx-0 mb-6">
                  <div className="absolute inset-0 rounded-full bg-[rgba(53,200,194,0.2)] blur-xl animate-pulse-ring" />
                  <WalleRobot className="w-full h-full animate-float-slow drop-shadow-[0_0_20px_rgba(53,200,194,0.5)]" />
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8 leading-tight font-display">
                  Ready to Plant Your Seed of Growth?
                </h2>
                <p className="text-[#f5ecd9]/80 text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto lg:mx-0">
                  No more guesswork. Book a direct strategy call and let&apos;s
                  map out your high-performance growth trajectory.
                </p>
                <div className="flex flex-col items-center justify-center gap-6">
                  <BookingButton className="w-full md:w-auto px-8 py-[14px] h-auto bg-white text-[#7a3d0e] hover:bg-[#f5ecd9] rounded-lg font-semibold text-base shadow-lg hover:scale-105 transition-all">
                    Book Strategy Call Now
                  </BookingButton>
                </div>
                <div className="mt-8 flex flex-col lg:flex-row lg:flex-wrap justify-center lg:justify-start items-center gap-4 lg:gap-x-8 lg:gap-y-2">
                  {assurances.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-white/90 text-sm font-medium"
                    >
                      <Check size={16} className="text-[#35c8c2]" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full bg-[#0a0e1a]/70 backdrop-blur-sm border border-white/10 rounded-[1.5rem] md:rounded-[2rem] p-6 sm:p-8 shadow-2xl min-w-0">
                <div className="text-center mb-6">
                  <h3 className="text-xl md:text-2xl font-black text-[#f5ecd9] uppercase tracking-tight font-display mb-2">
                    Send a Message
                  </h3>
                  <p className="text-sm text-[#9aa3b8]">
                    Tell me about your project — I&apos;ll reply within 24
                    hours.
                  </p>
                </div>
                <ContactForm />
                <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center justify-center gap-2 text-[#9aa3b8] hover:text-[#35c8c2] transition-colors"
                  >
                    <Mail size={16} className="text-[#35c8c2] shrink-0" />
                    <span className="truncate">Email</span>
                  </a>
                  <a
                    href={siteConfig.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 text-[#9aa3b8] hover:text-[#35c8c2] transition-colors"
                  >
                    <Phone size={16} className="text-[#35c8c2] shrink-0" />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href={siteConfig.bookingUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 text-[#9aa3b8] hover:text-[#35c8c2] transition-colors"
                  >
                    <CalendarDays size={16} className="text-[#35c8c2] shrink-0" />
                    <span>Book a Call</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
