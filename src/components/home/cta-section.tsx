import { Check } from "lucide-react";
import { BookingButton } from "@/components/booking-button";
import { Reveal } from "@/components/reveal";
import { WalleRobot } from "@/components/walle-robot";

const assurances = [
  "No commitment required",
  "Free 30-minute session",
  "Response within 24 hours",
];

export function CtaSection() {
  return (
    <section id="contact" className="py-32 bg-[#0c1220]">
      <div className="max-w-5xl mx-auto px-4">
        <Reveal>
          <div className="bg-gradient-to-br from-[#b85f1e] via-[#8a4a1f] to-[#1f4d4b] rounded-[3.5rem] p-12 md:p-24 text-center relative overflow-hidden shadow-[0_40px_100px_-20px_rgba(232,135,58,0.35)] border border-[rgba(245,236,217,0.1)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_50%)]" />
            <div className="relative z-10">
              <div className="relative w-24 h-24 mx-auto mb-6">
                <div className="absolute inset-0 rounded-full bg-[rgba(53,200,194,0.2)] blur-xl animate-pulse-ring" />
                <WalleRobot className="w-full h-full animate-float-slow drop-shadow-[0_0_20px_rgba(53,200,194,0.5)]" />
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-8 leading-tight font-display">
                Ready to Plant Your <br />
                Seed of Growth?
              </h2>
              <p className="text-[#f5ecd9]/80 text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto">
                No more guesswork. Book a direct strategy call and let&apos;s
                map out your high-performance growth trajectory.
              </p>
              <div className="flex flex-col items-center justify-center gap-6">
                <BookingButton className="w-full md:w-auto px-8 py-[14px] h-auto bg-white text-[#7a3d0e] hover:bg-[#f5ecd9] rounded-lg font-semibold text-base shadow-lg hover:scale-105 transition-all">
                  Book Strategy Call Now
                </BookingButton>
              </div>
              <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
                {assurances.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-white/90 text-sm font-medium"
                  >
                    <Check size={16} className="text-[#35c8c2]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
