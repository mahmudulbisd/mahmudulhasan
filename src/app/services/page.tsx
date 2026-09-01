import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/services";
import { Reveal } from "@/components/reveal";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Services",
  description:
    "GoHighLevel CRM setup, AI automation, funnel design, Facebook ads, Shopify/WordPress development, and project management services.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#0a0e1a] flex flex-col">
      <main className="flex-1 pt-24">
        <section className="py-20 bg-[#0c1220] border-b border-[rgba(245,236,217,0.08)]">
          <div className="max-w-7xl mx-auto px-6">
            <Reveal>
              <div className="text-center mb-16">
                <div className="inline-block px-4 py-1.5 bg-[rgba(232,135,58,0.1)] text-[#e8873a] font-bold text-xs uppercase tracking-widest rounded-full mb-4 border border-[rgba(232,135,58,0.3)] font-display">
                  Detailed Services
                </div>
                <h1 className="text-4xl md:text-6xl font-black mb-6 text-[#f5ecd9] font-display">
                  Comprehensive{" "}
                  <span className="text-gradient">Solutions</span>
                </h1>
                <p className="text-[#9aa3b8] text-lg md:text-xl max-w-3xl mx-auto">
                  End-to-end services designed to help you scale your
                  operations, automate your workflows, and increase your
                  revenue.
                </p>
              </div>
            </Reveal>

            <div className="space-y-12">
              {services.map((service, i) => (
                <Reveal key={service.slug} delay={i * 80}>
                  <div className="bg-[rgba(21,30,54,0.5)] border border-[rgba(245,236,217,0.08)] rounded-3xl p-8 md:p-12 shadow-sm hover:shadow-md hover:border-[rgba(232,135,58,0.4)] transition-all">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                      <div className="w-16 h-16 bg-[rgba(232,135,58,0.12)] rounded-2xl flex items-center justify-center shrink-0 border border-[rgba(232,135,58,0.3)]">
                        <service.icon className="w-8 h-8 text-[#e8873a]" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#f5ecd9] font-display">
                          {service.title}
                        </h2>
                        <p className="text-[#9aa3b8] text-lg mb-8 leading-relaxed">
                          {service.description}
                        </p>
                        <div>
                          <h3 className="text-sm font-bold uppercase tracking-wider text-[#5f6b8a] mb-4">
                            Key Deliverables
                          </h3>
                          <div className="grid sm:grid-cols-2 gap-3">
                            {service.heroFeatures.slice(0, 4).map((f) => (
                              <div key={f} className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#35c8c2]" />
                                <span className="text-[#cbd2e1] font-medium">
                                  {f}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 md:mt-0 md:ml-8 shrink-0 w-full md:w-auto">
                        <a
                          href={`/services/${service.slug}`}
                          className="inline-flex items-center justify-center w-full md:w-auto h-12 px-8 rounded-full bg-gradient-to-r from-[#e8873a] to-[#b85f1e] text-white font-bold hover:from-[#f2a35f] hover:to-[#c96f2a] transition-colors gap-2"
                        >
                          View Details <ArrowRight size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
