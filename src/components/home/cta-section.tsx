import { Check, Mail, Phone, CalendarDays } from "lucide-react";
import { BookingButton } from "@/components/booking-button";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { siteConfig } from "@/lib/site";

const assurances = [
  "No commitment required",
  "Free 30-minute strategy session",
  "Response within 24 hours",
];

export function CtaSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-background-alt">
      <div className="max-w-6xl mx-auto px-4">
        <Reveal>
          <div className="bg-gradient-to-br from-primary-dark via-primary to-cta-end rounded-[2.5rem] md:rounded-[3.5rem] p-6 sm:p-8 md:p-12 lg:p-16 relative overflow-hidden shadow-[0_40px_100px_-20px_rgba(99,102,241,0.4)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%)]" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-8 leading-tight font-display">
                  Ready to Build a Lead System That Runs Itself?
                </h2>
                <p className="text-white/85 text-lg md:text-xl font-normal mb-10 max-w-2xl mx-auto lg:mx-0">
                  Book a free strategy call — I&apos;ll audit your current
                  funnel and follow-up process, then map out exactly where
                  automation and paid media can add revenue.
                </p>
                <div className="flex flex-col items-center justify-center gap-6">
                  <BookingButton
                    variant="light"
                    className="w-full md:w-auto px-8 py-4 rounded-xl font-bold text-base hover:scale-105 transition-all"
                  >
                    Book Strategy Call Now
                  </BookingButton>
                </div>
                <div className="mt-8 flex flex-col lg:flex-row lg:flex-wrap justify-center lg:justify-start items-center gap-4 lg:gap-x-8 lg:gap-y-2">
                  {assurances.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-white/90 text-sm font-medium"
                    >
                      <Check size={16} className="text-white" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full bg-background/70 backdrop-blur-sm border border-white/15 rounded-[1.5rem] md:rounded-[2rem] p-6 sm:p-8 shadow-2xl min-w-0">
                <div className="text-center mb-6">
                  <h3 className="text-xl md:text-2xl font-extrabold text-foreground tracking-tight mb-2 font-display">
                    Send a Message
                  </h3>
                  <p className="text-sm text-muted">
                    Tell me about your project — I&apos;ll reply within 24
                    hours.
                  </p>
                </div>
                <ContactForm />
                <div className="mt-8 pt-6 border-t border-border grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center justify-center gap-2 text-muted hover:text-accent transition-colors min-w-0"
                  >
                    <Mail size={16} className="text-accent shrink-0" />
                    <span className="truncate">Email</span>
                  </a>
                  <a
                    href={siteConfig.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 text-muted hover:text-accent transition-colors"
                  >
                    <Phone size={16} className="text-accent shrink-0" />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href={siteConfig.bookingUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 text-muted hover:text-accent transition-colors"
                  >
                    <CalendarDays size={16} className="text-accent shrink-0" />
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
