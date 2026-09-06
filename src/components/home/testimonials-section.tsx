import { Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/content";
import { Reveal } from "@/components/reveal";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-background-alt border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="flex flex-col items-center text-center mb-12 md:mb-16">
            <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary-hover font-bold text-xs uppercase tracking-widest rounded-full mb-4 border border-primary/30">
              Testimonials
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-4 font-display">
              What Clients <span className="text-gradient">Say</span>
            </h2>
            <p className="text-muted max-w-2xl">
              Service businesses that automated their follow-up and filled
              their calendars.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 120}>
              <div className="relative p-8 rounded-3xl bg-surface/50 border border-border shadow-lg hover:shadow-xl hover:border-accent/40 transition-all duration-300 flex flex-col gap-6 h-full">
                <Quote className="absolute top-8 right-8 w-12 h-12 text-primary/10" />
                <div className="flex gap-1">
                  {[...Array(5)].map((_, s) => (
                    <Star
                      key={s}
                      className="w-5 h-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-[#cbd2e1] italic text-lg flex-1 break-words min-w-0">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4 mt-4 pt-6 border-t border-border">
                  <div className="w-12 h-12 rounded-full bg-primary/15 border-2 border-primary/30 flex items-center justify-center text-primary-hover font-bold text-sm">
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{t.name}</h4>
                    <p className="text-sm text-muted">{t.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
