import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";
import { getCaseStudies } from "@/lib/wordpress";
import { Reveal } from "@/components/reveal";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real results from GoHighLevel automation, paid ads, and funnel projects for service businesses.",
};

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies();

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
                <h1 className="text-4xl md:text-6xl font-black mb-6 text-[#f5ecd9] font-display break-words">
                  Case <span className="text-gradient">Studies</span>
                </h1>
                <p className="text-[#9aa3b8] text-lg md:text-xl max-w-3xl mx-auto">
                  A look inside real growth missions — the challenge, the
                  system, and the numbers that followed.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="py-20 bg-[#0a0e1a]">
          <div className="max-w-7xl mx-auto px-6">
            {caseStudies.length === 0 ? (
              <div className="text-center py-20 text-[#9aa3b8]">
                No case studies yet — check back soon.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {caseStudies.map((cs, i) => (
                  <Reveal key={cs.slug} delay={i * 80}>
                    <Link
                      href={`/case-studies/${cs.slug}`}
                      className="group flex flex-col rounded-3xl overflow-hidden bg-[rgba(21,30,54,0.5)] shadow-lg border border-[rgba(245,236,217,0.08)] hover:border-[rgba(53,200,194,0.4)] hover:shadow-xl transition-all duration-300 h-full"
                    >
                      <div className="relative aspect-video w-full overflow-hidden">
                        {cs.image ? (
                          /* eslint-disable-next-line @next/next/no-img-element */
                          <img
                            src={cs.image}
                            alt={cs.title}
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-[rgba(232,135,58,0.2)] to-[rgba(53,200,194,0.15)] flex items-center justify-center">
                            <TrendingUp className="w-12 h-12 text-[#35c8c2]/40" />
                          </div>
                        )}
                        <div className="absolute inset-0 bg-[#0a0e1a]/80 p-6 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                          <span className="bg-gradient-to-r from-[#e8873a] to-[#b85f1e] text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            {cs.industry}
                          </span>
                          <div className="flex items-center gap-2 text-white font-black text-xs uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                            <span>View Mission Report</span>
                            <ArrowRight
                              size={16}
                              className="group-hover:translate-x-1 transition-transform"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="p-6 md:p-8 flex flex-col flex-1">
                        <div className="mb-4">
                          <span
                            className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded-full"
                            style={{
                              backgroundColor: "rgba(232,135,58,0.12)",
                              color: "#e8873a",
                            }}
                          >
                            {cs.tag}
                          </span>
                        </div>
                        <h2 className="text-xl font-bold text-[#f5ecd9] mb-6 break-words">
                          {cs.title}
                        </h2>
                        <div className="space-y-4 flex-1 min-w-0">
                          <div>
                            <p className="text-[#5f6b8a] text-xs uppercase font-bold tracking-wider mb-1">
                              Challenge
                            </p>
                            <p className="text-[#cbd2e1] text-sm line-clamp-1 min-w-0">
                              {cs.challenge}
                            </p>
                          </div>
                          <div>
                            <p className="text-[#5f6b8a] text-xs uppercase font-bold tracking-wider mb-1">
                              Solution
                            </p>
                            <p className="text-[#cbd2e1] text-sm font-semibold line-clamp-1 min-w-0">
                              {cs.solution}
                            </p>
                          </div>
                          {cs.result && (
                            <div>
                              <p className="text-[#5f6b8a] text-xs uppercase font-bold tracking-wider mb-1">
                                Result
                              </p>
                              <p className="text-[#35c8c2] text-base font-bold break-words">
                                {cs.result}
                              </p>
                            </div>
                          )}
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
