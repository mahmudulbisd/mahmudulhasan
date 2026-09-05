import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getCaseStudies } from "@/lib/wordpress";
import { Reveal } from "@/components/reveal";
import Image from "next/image";

export async function CaseStudiesSection() {
  const caseStudies = (await getCaseStudies()).slice(0, 3);

  if (caseStudies.length === 0) return null;

  return (
    <section
      id="portfolio"
      className="py-16 md:py-32 bg-[#0c1220] border-t border-[rgba(245,236,217,0.08)]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#f5ecd9] uppercase tracking-tight font-display">
              Mission Logs: <span className="text-gradient">Case Studies</span>
            </h2>
            <Link
              href="/case-studies"
              className="text-[#35c8c2] font-black uppercase text-xs tracking-widest border-b-2 border-[rgba(53,200,194,0.3)] hover:border-[#35c8c2] transition-all pb-1 cursor-pointer w-fit"
            >
              All Projects
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((cs, i) => (
            <Reveal key={cs.slug} delay={i * 120}>
              <Link
                href={`/case-studies/${cs.slug}`}
                className="group cursor-pointer flex flex-col rounded-3xl overflow-hidden bg-[rgba(21,30,54,0.5)] shadow-lg border border-[rgba(245,236,217,0.08)] h-full"
              >
                <div className="relative aspect-video w-full overflow-hidden">
                  {cs.image ? (
                    <Image
                      src={cs.image}
                      alt={cs.title}
                      width={640}
                      height={360}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[rgba(232,135,58,0.2)] to-[rgba(53,200,194,0.15)]" />
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
                <div className="p-6 md:p-8 flex flex-col flex-1 min-w-0">
                  <div className="mb-4">
                    <span
                      className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded-full break-words"
                      style={{
                        backgroundColor: "rgba(232,135,58,0.12)",
                        color: "#e8873a",
                      }}
                    >
                      {cs.tag}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-[#f5ecd9] mb-6 break-words">
                    {cs.title}
                  </h4>
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
      </div>
    </section>
  );
}
