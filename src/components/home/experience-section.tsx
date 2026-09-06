import { experience } from "@/lib/content";
import { Reveal } from "@/components/reveal";

export function ExperienceSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-12 md:mb-20">
            <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary-hover font-bold text-xs uppercase tracking-widest rounded-full mb-4 border border-primary/30">
              Experience
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-4 font-display">
              A Track Record of <span className="text-gradient">Building</span> &amp;{" "}
              <span className="text-gradient">Scaling</span>
            </h2>
            <p className="text-muted font-normal max-w-2xl mx-auto">
              From field sales to founding a performance marketing agency
              serving 200+ international clients.
            </p>
          </div>
        </Reveal>

        <div className="relative">
          <div className="hidden md:block absolute left-[100px] top-8 bottom-0 w-[2px] bg-primary/30" />
          <div className="space-y-8">
            {experience.map((item, i) => (
              <Reveal key={item.company} delay={i * 100}>
                <div className="relative flex flex-col md:flex-row items-start gap-3 md:gap-0 group">
                  <div className="w-full md:w-[100px] flex-shrink-0 flex items-center justify-start md:justify-end relative z-10 md:pt-8 md:pr-8">
                    <div className="hidden md:block absolute right-0 top-[40px] translate-x-1/2 w-3 h-3 rounded-full bg-background border-2 border-primary ring-4 ring-background group-hover:bg-primary group-hover:scale-125 transition-all duration-300" />
                    <span className="inline-block px-3 py-1.5 bg-primary/10 text-primary-hover rounded-full text-[11px] font-bold leading-tight shadow-sm relative z-20 border border-primary/30 md:w-full md:text-center">
                      {item.period}
                    </span>
                  </div>
                  <div className="flex-1 w-full min-w-0 md:ml-10">
                    <div className="bg-surface/50 p-5 md:p-7 rounded-2xl border-l-4 border-l-primary/40 border-y border-r border-border shadow-sm group-hover:shadow-lg group-hover:-translate-y-1 group-hover:border-l-primary transition-all duration-300">
                      <h4 className="text-[15px] font-bold text-foreground mb-1 group-hover:text-primary-hover transition-colors">
                        {item.role}
                      </h4>
                      <p className="text-[13px] text-accent mb-3">{item.company}</p>
                      <p className="text-[13px] text-muted leading-[1.6]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
