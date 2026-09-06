import { Search, DraftingCompass, Workflow, TrendingUp } from "lucide-react";
import { Reveal } from "@/components/reveal";

const steps = [
  {
    step: "01",
    icon: Search,
    title: "Audit & Discovery",
    desc: "We review your offer, current funnels, ad accounts, and follow-up process to find the leaks and map the fastest path to more booked calls.",
  },
  {
    step: "02",
    icon: DraftingCompass,
    title: "Strategy & Architecture",
    desc: "Campaign structure, funnel design, and CRM pipeline logic are planned first — so every lead has a clear next step from click to close.",
  },
  {
    step: "03",
    icon: Workflow,
    title: "Build, Track & Automate",
    desc: "Funnels, ads, and GoHighLevel workflows get built with pixel and server-side tracking wired in — no more guessing which channel performs.",
  },
  {
    step: "04",
    icon: TrendingUp,
    title: "Launch, Optimize & Scale",
    desc: "We launch, monitor the numbers, kill what underperforms, and scale what works — then hand over a system your team can run.",
  },
];

export function Process() {
  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 md:w-96 md:h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <Reveal>
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary-hover font-bold text-xs uppercase tracking-widest rounded-full mb-4 border border-primary/30">
              How I Work
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-4 font-display">
              A Proven <span className="text-gradient">Process</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Strategy first, then systems — a repeatable framework that turns
              marketing spend into measurable revenue.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <Reveal key={s.step} delay={i * 100}>
              <div className="relative p-7 rounded-3xl bg-surface/50 border border-border hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300 h-full group">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary-hover border border-primary/30 group-hover:scale-110 transition-transform">
                    <s.icon size={22} />
                  </div>
                  <span className="text-5xl font-extrabold text-primary/15 font-display tracking-tight">
                    {s.step}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2 font-display tracking-tight break-words">
                  {s.title}
                </h4>
                <p className="text-muted text-sm leading-relaxed break-words">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
