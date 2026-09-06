import { BadgeCheck, CheckCircle2 } from "lucide-react";
import { skillGroups } from "@/lib/content";
import { siteConfig } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import Image from "next/image";

export function AboutMe() {
  return (
    <section id="about" className="py-16 md:py-28 bg-background-alt border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <Reveal>
            <div>
              <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary-hover font-bold text-xs uppercase tracking-widest rounded-full mb-4 border border-primary/30">
                About Me
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-foreground font-display tracking-tight mb-6">
                CRM &amp; Growth Systems,{" "}
                <span className="text-gradient">Delivered End to End</span>
              </h2>

              <div className="space-y-5 text-muted leading-relaxed text-base md:text-lg">
                <p>
                  I&apos;m Mahmudul Hasan — a GoHighLevel CRM &amp; Automation
                  specialist and performance marketer with 4+ years running
                  paid media and automation systems for 200+ clients across the
                  US, UK, and Australia.
                </p>
                <p>
                  My background spans territory sales at FMCG companies,
                  WordPress and Shopify builds, and founding{" "}
                  <span className="text-foreground font-semibold">
                    Mahmud Digital Solutions
                  </span>
                  , where I plan, launch, and optimize full-funnel growth
                  systems — ads, funnels, and CRM automation working as one
                  machine.
                </p>
                <p>
                  My mission is simple: build marketing infrastructure that
                  doesn&apos;t depend on manual follow-up or guesswork — so
                  founders get a predictable pipeline and their time back.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-3 text-sm text-foreground">
                <BadgeCheck size={20} className="text-accent shrink-0" />
                <span>
                  Available for freelance projects &amp; fractional CRM
                  management
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="space-y-6">
              <div className="relative rounded-[2rem] overflow-hidden shadow-xl shadow-primary/10 border border-border-strong bg-surface/50">
                <Image
                  src={siteConfig.avatar}
                  alt={`${siteConfig.name} — ${siteConfig.tagline}`}
                  width={800}
                  height={800}
                  className="w-full h-full object-cover aspect-[4/3] lg:aspect-[5/4]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 bg-foreground/95 text-background backdrop-blur rounded-xl px-5 py-3.5">
                  <p className="font-bold tracking-tight">{siteConfig.name}</p>
                  <p className="text-[11px] font-medium text-background/60 mt-0.5">
                    {siteConfig.tagline}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skillGroups.map((group) => (
                  <div
                    key={group.category}
                    className="bg-surface/50 border border-border rounded-2xl p-5"
                  >
                    <h4 className="text-xs font-bold uppercase tracking-wider text-accent mb-3 font-display">
                      {group.category}
                    </h4>
                    <ul className="space-y-2">
                      {group.skills.map((skill) => (
                        <li
                          key={skill}
                          className="flex items-start gap-2 text-sm text-muted"
                        >
                          <CheckCircle2
                            size={15}
                            className="text-primary-hover shrink-0 mt-0.5"
                          />
                          <span className="break-words">{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
