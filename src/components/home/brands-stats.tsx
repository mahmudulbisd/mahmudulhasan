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

export function BrandsStats() {
  return (
    <>
      <section className="py-16 border-y border-[rgba(245,236,217,0.08)] bg-[#0c1220]">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-[10px] font-black text-[#5f6b8a] uppercase tracking-[0.4em] mb-10 font-display">
            Strategic Experience with Global Brands
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 hover:opacity-80 transition-all duration-500">
            {siteConfig.brands.map((brand) => (
              <span
                key={brand}
                className="text-xl md:text-2xl font-black uppercase tracking-tighter text-[#9aa3b8] hover:text-[#35c8c2] transition-colors cursor-default"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-24 bg-[#0a0e1a]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[rgba(245,236,217,0.06)] text-center bg-[rgba(21,30,54,0.4)] rounded-2xl border border-[rgba(245,236,217,0.08)] shadow-sm">
            {siteConfig.stats.map((stat) => {
              const parsed = parseStat(stat.value);
              return (
                <div
                  key={stat.label}
                  className="p-8 md:p-12 hover:bg-[rgba(53,200,194,0.04)] transition-colors flex flex-col justify-center items-center"
                >
                  <CountUp
                    value={parsed.num}
                    prefix={parsed.prefix}
                    suffix={parsed.suffix}
                    className="text-5xl md:text-6xl font-black text-[#f5ecd9] tracking-tighter mb-4 font-display text-gradient"
                  />
                  <div className="w-12 h-[2px] bg-[rgba(232,135,58,0.3)] mb-4" />
                  <p className="text-sm font-semibold text-[#9aa3b8]">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
