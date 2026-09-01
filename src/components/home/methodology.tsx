import { Crosshair, Server, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import Image from "next/image";

const pillars = [
  {
    icon: Crosshair,
    title: "Full-Funnel Paid Media",
    desc: "Meta Ads, Google Ads, and LinkedIn Ads — awareness through conversion and retargeting, with ROAS and CPL optimization.",
  },
  {
    icon: Server,
    title: "Tracking & Infrastructure",
    desc: "GA4, Meta Pixel, GTM, and server-side CAPI configured for accurate conversion tracking and funnel drop-off analysis.",
  },
  {
    icon: ShieldCheck,
    title: "Automation & CRM",
    desc: "GoHighLevel systems with email/SMS workflows, AI chatbots, and pipeline automation for 30+ active client accounts.",
  },
];

export function Methodology() {
  return (
    <section className="py-24 md:py-32 bg-[#0c1220] text-white relative overflow-hidden border-y border-[rgba(245,236,217,0.08)]">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#e8873a]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <Reveal>
            <div>
              <p className="text-[#35c8c2] font-black text-xs uppercase tracking-[0.3em] mb-6 font-display">
                The Methodology
              </p>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-10 font-display">
                Strategy First. <br />
                <span className="text-gradient">ROI Guaranteed.</span>
              </h2>
              <div className="space-y-8">
                {pillars.map((p) => (
                  <div key={p.title} className="flex gap-6">
                    <div className="w-12 h-12 bg-[rgba(53,200,194,0.1)] rounded-xl flex items-center justify-center text-[#35c8c2] shrink-0 border border-[rgba(53,200,194,0.3)]">
                      <p.icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-black uppercase tracking-tight mb-2 font-display">
                        {p.title}
                      </h4>
                      <p className="text-[#9aa3b8] text-sm leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="dark-glass-card p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] h-auto overflow-visible">
              <p className="text-xl md:text-2xl font-medium italic leading-relaxed text-[#cbd2e1] mb-10">
                &ldquo;I don&apos;t just build websites; I engineer digital
                assets that drive predictable revenue. Years of managing complex
                technical projects and scaling online businesses have taught me
                one undeniable truth:{" "}
                <span className="text-[#f5ecd9] font-bold">
                  Results are the only metric that matters.
                </span>
                &rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#e8873a] shrink-0">
                  <Image
                    src={siteConfig.avatar}
                    alt="Mahmudul Hasan"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h5 className="font-black uppercase tracking-tight text-white text-lg font-display">
                    Mahmudul Hasan
                  </h5>
                  <p className="text-[#35c8c2] text-xs font-bold uppercase tracking-wider mt-1">
                    Performance Marketing & Growth Specialist
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
