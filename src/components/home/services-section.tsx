import { ArrowRight } from "lucide-react";
import { services } from "@/lib/services";
import { Reveal } from "@/components/reveal";
import { SpotlightCard } from "@/components/spotlight-card";

export function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary-hover font-bold text-xs uppercase tracking-widest rounded-full mb-4 border border-primary/30">
              Services
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-5 text-foreground font-display tracking-tight">
              Systems Built to <span className="text-gradient">Generate Pipeline</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              From CRM setup to full-funnel campaigns — every service is
              engineered to capture, follow up, and convert more leads.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 80}>
              <SpotlightCard className="p-8 bg-surface/50 border border-border rounded-2xl hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 hover:border-primary/50 transition-all duration-300 flex flex-col h-full group">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 shrink-0 border border-primary/30 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 text-primary-hover" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-foreground font-display tracking-tight break-words">
                  {service.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-8 flex-grow min-w-0">
                  {service.description}
                </p>
                <a
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-accent text-sm font-semibold hover:text-accent-hover transition-colors mt-auto group"
                >
                  Learn More{" "}
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </a>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-14 text-center">
            <a
              href="/services"
              className="inline-flex items-center justify-center h-12 px-8 rounded-xl bg-gradient-to-r from-primary to-primary-dark text-white font-semibold hover:from-primary-hover hover:to-primary transition-colors gap-2"
            >
              View All Services <ArrowRight size={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
