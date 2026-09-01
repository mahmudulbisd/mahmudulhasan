const quotes = [
  "WALL·E — Waste Allocation Load Lifter, Earth-Class.",
  "Eeeeeva…",
  "We came all this way to start over.",
  "I don't want to survive. I want to live!",
  "Define dancing.",
  "This is a very nice day. This is a very nice day.",
  "You don't know what you've got till it's gone.",
  "Wall·E, why don't you come on in?",
];

export function QuoteMarquee() {
  const doubled = [...quotes, ...quotes];
  return (
    <div className="py-6 bg-[#0c1220] border-y border-[rgba(245,236,217,0.08)] overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee-x">
        {doubled.map((q, i) => (
          <span
            key={i}
            className="mx-8 inline-flex items-center gap-6 text-[#5f6b8a] font-display text-sm uppercase tracking-[0.2em]"
          >
            <span className="text-[#e8873a]">◆</span>
            {q}
          </span>
        ))}
      </div>
    </div>
  );
}
