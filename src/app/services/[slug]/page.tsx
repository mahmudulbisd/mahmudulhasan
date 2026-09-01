import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ChevronRight, Check, ChevronDown } from "lucide-react";
import { services } from "@/lib/services";
import { BookingButton } from "@/components/booking-button";
import { Reveal } from "@/components/reveal";
import { WalleRobot } from "@/components/walle-robot";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-[#0a0e1a] flex flex-col">
      <main className="flex-1 pt-24">
        {/* Breadcrumb */}
        <div className="bg-[#0c1220] py-4 border-b border-[rgba(245,236,217,0.08)]">
          <div className="max-w-7xl mx-auto px-6 flex items-center text-sm text-[#9aa3b8]">
            <a href="/" className="hover:text-[#35c8c2] transition-colors">
              Home
            </a>
            <ChevronRight className="w-4 h-4 mx-2" />
            <a
              href="/services"
              className="hover:text-[#35c8c2] transition-colors"
            >
              Services
            </a>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-[#f5ecd9] font-medium">{service.title}</span>
          </div>
        </div>

        {/* Hero */}
        <section className="py-16 md:py-24 bg-[#0c1220]">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div>
                <div className="w-16 h-16 bg-[rgba(232,135,58,0.12)] rounded-2xl flex items-center justify-center mb-8 border border-[rgba(232,135,58,0.3)]">
                  <Icon className="w-8 h-8 text-[#e8873a]" />
                </div>
                <div className="inline-block px-4 py-1.5 bg-[rgba(53,200,194,0.08)] text-[#35c8c2] font-bold text-xs uppercase tracking-widest rounded-full mb-6 border border-[rgba(53,200,194,0.3)] font-display">
                  {service.category}
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-[#f5ecd9] leading-tight font-display">
                  {service.title}
                </h1>
                <p className="text-[#9aa3b8] text-lg md:text-xl mb-10 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <BookingButton className="rounded-full px-8 h-14 text-base font-bold shadow-xl shadow-[rgba(232,135,58,0.2)] hover:scale-105 transition-transform w-full sm:w-auto">
                    Get a Free Quote
                  </BookingButton>
                  <a
                    href="#scope"
                    className="rounded-full px-8 h-14 text-base font-bold w-full sm:w-auto bg-transparent border-[1.5px] border-[#35c8c2] text-[#35c8c2] hover:bg-[rgba(53,200,194,0.08)] flex items-center justify-center gap-2"
                  >
                    See What&apos;s Included <ChevronDown size={18} />
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="bg-[rgba(21,30,54,0.55)] border border-[rgba(245,236,217,0.1)] rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[rgba(232,135,58,0.1)] rounded-bl-full" />
                <div className="flex justify-between items-start mb-8 pb-8 border-b border-[rgba(245,236,217,0.1)]">
                  <div>
                    <p className="text-sm font-bold text-[#5f6b8a] uppercase tracking-wider mb-2">
                      Starting From
                    </p>
                    <div className="text-5xl font-black text-[#f5ecd9] font-display">
                      {service.startingPrice}
                    </div>
                    <p className="text-sm text-[#9aa3b8] mt-2">
                      custom quote based on scope
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-[#5f6b8a] uppercase tracking-wider mb-2">
                      Delivery
                    </p>
                    <div className="text-3xl font-black text-[#35c8c2] font-display">
                      {service.deliveryTime}
                    </div>
                    <p className="text-sm text-[#9aa3b8] mt-2">working days</p>
                  </div>
                </div>
                <div className="space-y-4 mb-10">
                  {service.heroFeatures.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-[#35c8c2] shrink-0" />
                      <span className="text-[#cbd2e1] font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                <BookingButton className="w-full rounded-2xl h-14 text-base font-bold text-white">
                  Request Custom Quote
                </BookingButton>
                <p className="text-center text-xs text-[#9aa3b8] mt-4">
                  Fixed price · Full ownership · No hidden fees
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Full scope */}
        <section id="scope" className="py-24 bg-[#0a0e1a]">
          <div className="max-w-7xl mx-auto px-6">
            <Reveal>
              <div className="text-center mb-16">
                <div className="inline-block px-4 py-1.5 bg-[rgba(232,135,58,0.1)] text-[#e8873a] font-bold text-xs uppercase tracking-widest rounded-full mb-4 border border-[rgba(232,135,58,0.3)] font-display">
                  Full Scope
                </div>
                <h2 className="text-3xl md:text-5xl font-black mb-6 text-[#f5ecd9] font-display">
                  Everything Included
                </h2>
                <p className="text-[#9aa3b8] text-lg max-w-2xl mx-auto">
                  No line items. No surprises. One price covers everything
                  below.
                </p>
              </div>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-8">
              {service.fullScope.map((scope, i) => (
                <Reveal key={scope.title} delay={i * 80}>
                  <div className="bg-[#0c1220] border border-[rgba(245,236,217,0.08)] rounded-3xl p-8 h-full hover:shadow-lg hover:border-[rgba(232,135,58,0.4)] transition-all">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-[rgba(53,200,194,0.1)] rounded-xl flex items-center justify-center shadow-sm border border-[rgba(53,200,194,0.3)]">
                        <Check className="w-6 h-6 text-[#35c8c2]" />
                      </div>
                      <h3 className="text-xl font-bold text-[#f5ecd9] font-display">
                        {scope.title}
                      </h3>
                    </div>
                    <div className="space-y-3">
                      {scope.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-[#5f6b8a] shrink-0" />
                          <span className="text-[#9aa3b8]">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-24 bg-[#0c1220] border-y border-[rgba(245,236,217,0.08)]">
          <div className="max-w-7xl mx-auto px-6">
            <Reveal>
              <div className="text-center mb-16">
                <div className="inline-block px-4 py-1.5 bg-[rgba(232,135,58,0.1)] text-[#e8873a] font-bold text-xs uppercase tracking-widest rounded-full mb-4 border border-[rgba(232,135,58,0.3)] font-display">
                  How It Works
                </div>
                <h2 className="text-3xl md:text-5xl font-black mb-6 text-[#f5ecd9] font-display">
                  Our Process
                </h2>
                <p className="text-[#9aa3b8] text-lg max-w-2xl mx-auto">
                  Transparent, structured, and deadline-driven from kickoff to
                  handover.
                </p>
              </div>
            </Reveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.process.map((step, i) => (
                <Reveal key={step.step} delay={i * 80}>
                  <div className="bg-[rgba(21,30,54,0.5)] border border-[rgba(245,236,217,0.08)] rounded-2xl p-8 relative overflow-hidden h-full">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[rgba(232,135,58,0.08)] rounded-bl-full" />
                    <div className="w-12 h-12 bg-gradient-to-br from-[#e8873a] to-[#b85f1e] text-white rounded-xl flex items-center justify-center font-black text-xl mb-6 shadow-md shadow-[rgba(232,135,58,0.25)] font-display">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-[#f5ecd9] mb-3 font-display">
                      {step.title}
                    </h3>
                    <p className="text-[#9aa3b8] leading-relaxed">{step.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-[#0a0e1a]">
          <div className="max-w-3xl mx-auto px-6">
            <Reveal>
              <div className="text-center mb-16">
                <div className="inline-block px-4 py-1.5 bg-[rgba(232,135,58,0.1)] text-[#e8873a] font-bold text-xs uppercase tracking-widest rounded-full mb-4 border border-[rgba(232,135,58,0.3)] font-display">
                  FAQ
                </div>
                <h2 className="text-3xl md:text-4xl font-black mb-6 text-[#f5ecd9] font-display">
                  Common Questions
                </h2>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="space-y-4">
                {service.faqs.map((faq, i) => (
                  <details
                    key={i}
                    className="group bg-[rgba(21,30,54,0.5)] border border-[rgba(245,236,217,0.08)] rounded-2xl overflow-hidden"
                  >
                    <summary className="flex items-center justify-between py-6 px-6 text-lg font-bold text-[#f5ecd9] cursor-pointer hover:text-[#35c8c2] transition-colors list-none">
                      {faq.q}
                      <ChevronDown className="w-5 h-5 shrink-0 transition-transform group-open:rotate-180 text-[#e8873a]" />
                    </summary>
                    <p className="text-[#9aa3b8] text-base leading-relaxed px-6 pb-6">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gradient-to-r from-[#b85f1e] to-[#1f4d4b]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <Reveal>
              <div className="inline-block px-4 py-1.5 bg-white/20 text-white font-bold text-xs uppercase tracking-widest rounded-full mb-8 backdrop-blur-sm font-display">
                Free • No Commitment
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-white font-display">
                Ready to get started?
              </h2>
              <p className="text-[#f5ecd9]/85 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                Book a free strategy call to discuss your project requirements
                and receive a custom quote.
              </p>
              <BookingButton className="rounded-full px-10 h-16 text-lg font-bold bg-white text-[#7a3d0e] hover:bg-[#f5ecd9] hover:scale-105 transition-all">
                Book Free Strategy Call
              </BookingButton>
              <div className="mt-8 flex justify-center">
                <WalleRobot className="w-20 h-20 animate-float-slow" />
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </div>
  );
}
