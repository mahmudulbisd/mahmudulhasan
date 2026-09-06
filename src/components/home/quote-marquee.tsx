const phrases = [
  "Cleaning up the galaxy's digital footprint since 2805",
  "Directive: turn leads into booked clients",
  "CRM automation · full-funnel campaigns · measurable growth",
  "200+ clients across the US · UK · Australia",
  "One tidy system at a time",
];

export function QuoteMarquee() {
  const doubled = [...phrases, ...phrases];
  return (
    <div className="py-5 bg-[#0c1220] border-y border-[rgba(238,242,249,0.08)] overflow-hidden">
      <div className="flex w-max whitespace-nowrap animate-marquee-x">
        {doubled.map((q, i) => (
          <span
            key={i}
            className="mx-8 inline-flex items-center gap-6 text-[#5f6b8a] font-display text-sm uppercase tracking-[0.2em]"
          >
            <span className="text-[#6366f1]">◆</span>
            {q}
          </span>
        ))}
      </div>
    </div>
  );
}
