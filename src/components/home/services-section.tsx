import { ArrowRight } from "lucide-react";
import { services } from "@/lib/services";
import { Reveal } from "@/components/reveal";
import { SpotlightCard } from "@/components/spotlight-card";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="py-16 md:py-24 bg-[#0a0e1a] border-t border-[rgba(245,236,217,0.08)]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-12 md:mb-20">
            <div className="inline-block px-4 py-1.5 bg-[rgba(232,135,58,0.1)] text-[#e8873a] font-bold text-xs uppercase tracking-widest rounded-full mb-4 border border-[rgba(232,135,58,0.3)] font-display">
              Services
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-[#f5ecd9] font-display">
              Mission Modules for <span className="text-gradient">Growth</span>
            </h2>
            <p className="text-[#9aa3b8] text-lg max-w-2xl mx-auto">
              Everything you need to launch, grow, and scale your service
              business — powered by data, automated like a well-oiled rover.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 80}>
              <SpotlightCard className="p-8 bg-[rgba(21,30,54,0.55)] border border-[rgba(245,236,217,0.1)] rounded-2xl hover:shadow-xl hover:shadow-[rgba(232,135,58,0.08)] hover:-translate-y-1 hover:border-[rgba(232,135,58,0.5)] transition-all duration-300 flex flex-col h-full group">
                <div className="w-12 h-12 bg-[rgba(232,135,58,0.12)] rounded-xl flex items-center justify-center mb-6 shrink-0 border border-[rgba(232,135,58,0.3)] group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 text-[#e8873a]" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-[#f5ecd9] font-display break-words">
                  {service.title}
                </h3>
                <p className="text-[#9aa3b8] text-sm leading-relaxed mb-8 flex-grow min-w-0">
                  {service.description}
                </p>
                <a
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-[#35c8c2] text-sm font-bold hover:text-[#4fd9d3] transition-colors mt-auto group"
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
          <div className="mt-16 text-center">
            <a
              href="/services"
              className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-gradient-to-r from-[#e8873a] to-[#b85f1e] text-white font-bold hover:from-[#f2a35f] hover:to-[#c96f2a] transition-colors gap-2"
            >
              View All Services <ArrowRight size={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
