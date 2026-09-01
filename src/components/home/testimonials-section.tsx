import { Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/content";
import { Reveal } from "@/components/reveal";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-32 bg-[#0a0e1a]">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="flex flex-col items-center text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-[#f5ecd9] uppercase tracking-tight mb-4 font-display">
              Captain&apos;s <span className="text-gradient">Feedback</span>
            </h2>
            <p className="text-[#9aa3b8] max-w-2xl">
              Direct transmissions from our clients aboard the Axiom.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 120}>
              <div className="relative p-8 rounded-3xl bg-[rgba(21,30,54,0.5)] border border-[rgba(245,236,217,0.08)] shadow-lg hover:shadow-xl hover:border-[rgba(53,200,194,0.3)] transition-all duration-300 flex flex-col gap-6 h-full">
                <Quote className="absolute top-8 right-8 w-12 h-12 text-[#e8873a]/10" />
                <div className="flex gap-1">
                  {[...Array(5)].map((_, s) => (
                    <Star
                      key={s}
                      className="w-5 h-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-[#cbd2e1] italic text-lg flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4 mt-4 pt-6 border-t border-[rgba(245,236,217,0.08)]">
                  <div className="w-12 h-12 rounded-full bg-[rgba(232,135,58,0.15)] border-2 border-[rgba(232,135,58,0.3)] flex items-center justify-center text-[#e8873a] font-bold text-sm">
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#f5ecd9]">{t.name}</h4>
                    <p className="text-sm text-[#9aa3b8]">{t.role}</p>
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
