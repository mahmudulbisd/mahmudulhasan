import { siteConfig } from "@/lib/site";
import { CountUp } from "@/components/count-up";

function parseStat(value: string): {
  num: number;
  prefix: string;
  suffix: string;
} {
  const match = value.match(/^([^\d]*)(\d+)(.*)$/);
  if (!match) return { num: 0, prefix: "", suffix: value };
  return { num: Number(match[2]), prefix: match[1], suffix: match[3] };
}

export function TrustBar() {
  return (
    <>
      <section className="py-14 border-y border-border bg-background-alt">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-[11px] font-bold text-muted-2 uppercase tracking-[0.3em] mb-8">
            Trusted by 200+ clients across the US, UK &amp; Australia
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14 opacity-50 hover:opacity-90 transition-all duration-500">
            {siteConfig.brands.map((brand) => (
              <span
                key={brand}
                className="text-lg md:text-xl font-bold tracking-tight text-muted hover:text-accent transition-colors cursor-default"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border text-center bg-surface/40 rounded-2xl border border-border shadow-sm">
            {siteConfig.stats.map((stat) => {
              const parsed = parseStat(stat.value);
              return (
                <div
                  key={stat.label}
                  className="p-8 md:p-10 hover:bg-primary/5 transition-colors flex flex-col justify-center items-center"
                >
                  <CountUp
                    value={parsed.num}
                    prefix={parsed.prefix}
                    suffix={parsed.suffix}
                    className="text-5xl md:text-6xl font-extrabold text-foreground tracking-tight mb-3 font-display text-gradient"
                  />
                  <div className="w-10 h-[2px] bg-primary/30 mb-3" />
                  <p className="text-sm font-medium text-muted">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
