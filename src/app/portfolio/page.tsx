import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Briefcase, TrendingUp } from "lucide-react";
import { getPortfolioItems } from "@/lib/wordpress";
import { Reveal } from "@/components/reveal";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "A selection of growth systems, ad campaigns, and CRM builds that delivered measurable results for clients.",
};

export default async function PortfolioPage() {
  const items = await getPortfolioItems();

  return (
    <div className="min-h-screen bg-[#0a0e1a] flex flex-col">
      <main className="flex-1 pt-24">
        <section className="py-20 bg-[#0c1220] border-b border-[rgba(245,236,217,0.08)]">
          <div className="max-w-7xl mx-auto px-6">
            <Reveal>
              <div className="text-center mb-16">
                <div className="inline-block px-4 py-1.5 bg-[rgba(232,135,58,0.1)] text-[#e8873a] font-bold text-xs uppercase tracking-widest rounded-full mb-4 border border-[rgba(232,135,58,0.3)] font-display">
                  Mission Reports
                </div>
                <h1 className="text-4xl md:text-6xl font-black mb-6 text-[#f5ecd9] font-display">
                  The <span className="text-gradient">Portfolio</span>
                </h1>
                <p className="text-[#9aa3b8] text-lg md:text-xl max-w-3xl mx-auto">
                  Real growth systems for real businesses — the challenge, the
                  build, and the numbers that followed.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="py-20 bg-[#0a0e1a]">
          <div className="max-w-7xl mx-auto px-6">
            {items.length === 0 ? (
              <div className="text-center py-20 text-[#9aa3b8]">
                No portfolio items yet — check back soon.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((item, i) => (
                  <Reveal key={item.slug} delay={i * 80}>
                    <Link
                      href={`/portfolio/${item.slug}`}
                      className="group flex flex-col rounded-3xl overflow-hidden bg-[rgba(21,30,54,0.5)] shadow-lg border border-[rgba(245,236,217,0.08)] hover:border-[rgba(53,200,194,0.4)] hover:shadow-xl transition-all duration-300 h-full"
                    >
                      <div className="relative aspect-video w-full overflow-hidden">
                        {item.featuredImage ? (
                          /* eslint-disable-next-line @next/next/no-img-element */
                          <img
                            src={item.featuredImage.url}
                            alt={item.featuredImage.alt}
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-[rgba(232,135,58,0.2)] to-[rgba(53,200,194,0.15)] flex items-center justify-center">
                            <Briefcase className="w-12 h-12 text-[#35c8c2]/40" />
                          </div>
                        )}
                        <div className="absolute inset-0 bg-[#0a0e1a]/80 p-6 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                          <span className="bg-gradient-to-r from-[#e8873a] to-[#b85f1e] text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            {item.service}
                          </span>
                          <div className="flex items-center gap-2 text-white font-black text-xs uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                            <span>View Case Study</span>
                            <ArrowRight
                              size={16}
                              className="group-hover:translate-x-1 transition-transform"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="p-6 md:p-8 flex flex-col flex-1">
                        <div className="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-wider text-[#5f6b8a]">
                          <Briefcase size={14} className="text-[#35c8c2]" />
                          {item.client}
                        </div>
                        <h2 className="text-xl font-bold text-[#f5ecd9] mb-3 leading-snug group-hover:text-[#35c8c2] transition-colors">
                          {item.title}
                        </h2>
                        <p className="text-[#9aa3b8] text-sm leading-relaxed line-clamp-3 flex-1">
                          {item.excerpt}
                        </p>
                        {item.metrics && item.metrics.length > 0 && (
                          <div className="mt-5 flex flex-wrap gap-2">
                            {item.metrics.slice(0, 3).map((m) => (
                              <span
                                key={m.label}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[rgba(53,200,194,0.08)] border border-[rgba(53,200,194,0.2)] text-[#35c8c2] text-xs font-bold"
                              >
                                <TrendingUp size={12} />
                                {m.value}
                              </span>
                            ))}
                          </div>
                        )}
                        <div className="mt-6 pt-5 border-t border-[rgba(245,236,217,0.08)] flex items-center justify-between text-xs">
                          <span className="font-black uppercase tracking-widest text-[#9aa3b8]">
                            {item.service}
                          </span>
                          <span className="inline-flex items-center gap-1 font-black uppercase tracking-widest text-[#35c8c2]">
                            Details
                            <ArrowUpRight
                              size={14}
                              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                            />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
