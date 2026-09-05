import { ArrowRight, Zap } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { BookingButton } from "@/components/booking-button";
import { WalleMascot } from "@/components/walle-mascot";
import { PlantInBoot } from "@/components/plant-in-boot";
import { Typewriter } from "@/components/typewriter";
import { TiltCard } from "@/components/tilt-card";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute top-0 right-0 w-[260px] h-[260px] md:w-[600px] md:h-[600px] bg-[#e8873a]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[240px] h-[240px] md:w-[400px] md:h-[400px] bg-[#35c8c2]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center justify-center lg:justify-start text-center lg:text-left leading-relaxed tracking-[0.2em] lg:tracking-widest space-x-2 px-4 py-2 rounded-full bg-[rgba(53,200,194,0.08)] text-[#35c8c2] font-bold text-[10px] uppercase mb-8 border border-[rgba(53,200,194,0.3)]">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#35c8c2] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#35c8c2]" />
              </span>
              <span>
                Cleaning up the galaxy&apos;s digital footprint since 2805
              </span>
            </div>

            <h1 className="text-[clamp(2.5rem,13vw,3rem)] md:text-6xl xl:text-7xl font-black text-[#f5ecd9] leading-[1.1] mb-6 uppercase tracking-tighter font-display">
              Scale Your <br className="hidden sm:block" />
              <span className="text-shimmer">Digital</span> <br className="hidden sm:block" />
              Authority
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-[#9aa3b8] mb-10 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed min-h-[3.5rem]">
              <Typewriter text="Performance Marketing · Meta Ads · Google Ads · LinkedIn Ads · GoHighLevel CRM — 200+ international clients scaled. He spent 700 years tidying a planet; now he's tidying your ad account." />
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <BookingButton className="w-full sm:w-auto rounded-lg font-bold shadow-xl shadow-[rgba(232,135,58,0.25)] transition-all flex items-center justify-center gap-2 hover:scale-105 px-7 py-3.5 text-[15px]">
                <Zap size={18} />
                Book a Free Call
                <ArrowRight size={18} />
              </BookingButton>
              <a
                href="#portfolio"
                className="w-full sm:w-auto bg-transparent border-[1.5px] border-[#35c8c2] text-[#35c8c2] hover:bg-[rgba(53,200,194,0.08)] rounded-lg font-bold transition-all hover:scale-105 px-7 py-3.5 text-[15px] flex items-center justify-center gap-2"
              >
                View My Work
              </a>
            </div>
          </div>

          <div className="relative mt-10 lg:mt-0 lg:order-2">
            <TiltCard>
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-[10px] md:border-[15px] border-[rgba(245,236,217,0.12)] bg-[rgba(21,30,54,0.5)] group aspect-square">
                <Image
                  src={siteConfig.avatar}
                  alt="Mahmudul Hasan"
                  width={1200}
                  height={1200}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  priority
                />
                <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 bg-[rgba(245,236,217,0.95)] backdrop-blur px-6 py-4 rounded-3xl shadow-2xl border border-[#35c8c2]/30 flex items-center gap-4 animate-float-slow">
                  <div className="w-12 h-12 bg-[rgba(232,135,58,0.15)] rounded-2xl flex items-center justify-center text-[#e8873a]">
                    <Zap size={24} className="fill-[#e8873a]" />
                  </div>
                  <div>
                    <p className="text-xl font-black text-[#0a0e1a] tracking-tighter leading-none">
                      200+ Clients
                    </p>
                    <p className="text-[9px] font-black text-[#b85f1e] uppercase tracking-widest mt-1">
                      US · UK · Australia
                    </p>
                  </div>
                </div>
              </div>
            </TiltCard>

            {/* Floating WALL·E mascot — eyes follow your cursor */}
            <div className="absolute -bottom-8 -left-3 md:-left-6 w-24 h-24 md:w-36 md:h-36">
              <WalleMascot className="w-full h-full animate-float-slow drop-shadow-[0_10px_20px_rgba(232,135,58,0.25)]" />
            </div>

            {/* Plant in a boot — the movie's symbol of hope */}
            <div className="absolute -top-5 -right-2 md:-right-8 w-20 h-20 md:w-32 md:h-32 animate-plant-grow drop-shadow-[0_0_25px_rgba(53,200,194,0.4)]">
              <PlantInBoot className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
