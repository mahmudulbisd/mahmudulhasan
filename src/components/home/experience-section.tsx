import { experience } from "@/lib/content";
import { Reveal } from "@/components/reveal";

export function ExperienceSection() {
  return (
    <section id="about" className="py-32 bg-[#0a0e1a]">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-black text-[#f5ecd9] uppercase tracking-tight mb-4 font-display">
              Professional{" "}
              <span className="text-gradient">Evolution</span>
            </h2>
            <p className="text-[#9aa3b8] font-medium max-w-2xl mx-auto">
              From territory sales to founding a performance marketing agency
              serving 200+ international clients.
            </p>
          </div>
        </Reveal>

        <div className="relative max-w-4xl mx-auto pl-2 md:pl-0">
          <div className="absolute left-[52px] top-8 bottom-0 w-[2px] bg-[rgba(232,135,58,0.4)] md:left-[50px]" />
          <div className="space-y-8">
            {experience.map((item, i) => (
              <Reveal key={item.company} delay={i * 100}>
                <div className="relative flex items-start group">
                  <div className="w-[100px] flex-shrink-0 flex items-center justify-center relative z-10 pt-6 md:pt-8">
                    <div className="absolute left-1/2 -translate-x-1/2 top-[32px] md:top-[40px] w-3 h-3 rounded-full bg-[#0a0e1a] border-2 border-[#e8873a] ring-4 ring-[#0a0e1a] group-hover:bg-[#e8873a] group-hover:scale-125 transition-all duration-300" />
                    <div className="w-full text-center">
                      <span className="inline-block px-3 py-1.5 bg-[rgba(232,135,58,0.12)] text-[#e8873a] rounded-full text-[11px] font-bold leading-tight shadow-sm relative z-20 w-full border border-[rgba(232,135,58,0.3)]">
                        {item.period}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 ml-6 md:ml-10">
                    <div className="bg-[rgba(21,30,54,0.5)] p-6 md:p-8 rounded-2xl border-l-4 border-l-[rgba(232,135,58,0.25)] border-y border-r border-[rgba(245,236,217,0.08)] shadow-sm group-hover:shadow-lg group-hover:-translate-y-1 group-hover:border-l-[#e8873a] transition-all duration-300">
                      <h4 className="text-[15px] font-semibold text-[#f5ecd9] mb-1 group-hover:text-[#35c8c2] transition-colors">
                        {item.role}
                      </h4>
                      <p className="text-[13px] text-[#e8873a] mb-3">
                        {item.company}
                      </p>
                      <p className="text-[13px] text-[#9aa3b8] leading-[1.6]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal>
          <div className="mt-20 text-center">
            <a
              href="#home"
              className="px-10 py-4 bg-gradient-to-r from-[#e8873a] to-[#b85f1e] text-white rounded-full font-bold uppercase text-sm tracking-wider hover:from-[#f2a35f] hover:to-[#c96f2a] transition-all hover:shadow-lg hover:-translate-y-1 duration-300"
            >
              View Full Roadmap
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
