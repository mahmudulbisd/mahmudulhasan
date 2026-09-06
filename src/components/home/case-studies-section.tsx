import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";
import { getPortfolioItems } from "@/lib/wordpress";
import { Reveal } from "@/components/reveal";
import Image from "next/image";

export async function CaseStudiesSection() {
  const caseStudies = (await getPortfolioItems()).slice(0, 3);

  if (caseStudies.length === 0) return null;

  return (
    <section
      id="portfolio"
      className="py-16 md:py-24 bg-background-alt border-t border-border"
    >
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
            <div>
              <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary-hover font-bold text-xs uppercase tracking-widest rounded-full mb-4 border border-primary/30">
                Results
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight font-display">
                Portfolio & <span className="text-gradient">Case Studies</span>
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="text-accent font-bold uppercase text-xs tracking-widest border-b-2 border-accent/30 hover:border-accent transition-all pb-1 cursor-pointer w-fit"
            >
              All Projects
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((cs, i) => (
            <Reveal key={cs.slug} delay={i * 120}>
              <Link
                href={`/portfolio/${cs.slug}`}
                className="group cursor-pointer flex flex-col rounded-3xl overflow-hidden bg-surface/50 shadow-lg border border-border hover:border-primary/40 h-full"
              >
                <div className="relative aspect-video w-full overflow-hidden">
                  {cs.featuredImage ? (
                    <Image
                      src={cs.featuredImage.url}
                      alt={cs.title}
                      width={640}
                      height={360}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/15" />
                  )}
                  <div className="absolute inset-0 bg-background/80 p-6 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="bg-gradient-to-r from-primary to-primary-dark text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {cs.client || "Client Project"}
                    </span>
                    <div className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                      <span>View Case Study</span>
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
                      className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded-full break-words bg-primary/10 text-primary-hover border border-primary/20"
                    >
                      {cs.service || "Strategy"}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-6 break-words">
                    {cs.title}
                  </h4>
                  <div className="space-y-4 flex-1 flex flex-col min-w-0">
                    <div className="flex-1">
                      <p className="text-[#cbd2e1] text-sm line-clamp-3 min-w-0" dangerouslySetInnerHTML={{ __html: cs.excerpt }} />
                    </div>
                    {cs.metrics && cs.metrics.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-border">
                        <p className="text-muted-2 text-xs uppercase font-bold tracking-wider mb-2">
                          Key Result
                        </p>
                        <div className="flex items-center gap-2">
                          <TrendingUp size={16} className="text-accent" />
                          <p className="text-accent text-base font-bold break-words">
                            {cs.metrics[0].value}
                          </p>
                        </div>
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
