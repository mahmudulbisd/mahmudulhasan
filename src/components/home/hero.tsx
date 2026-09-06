import { ArrowRight, CalendarDays, Zap } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { BookingButton } from "@/components/booking-button";
import { WalleMascot } from "@/components/walle-mascot";
import { PlantInBoot } from "@/components/plant-in-boot";
import { TiltCard } from "@/components/tilt-card";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-44 md:pb-24 overflow-hidden">
      <div className="absolute top-0 right-0 w-[260px] h-[260px] md:w-[600px] md:h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[240px] h-[240px] md:w-[400px] md:h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center justify-center lg:justify-start gap-2.5 px-4 py-2 rounded-full bg-primary/10 text-primary-hover font-semibold text-[11px] uppercase tracking-[0.18em] mb-7 border border-primary/30">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span>GoHighLevel CRM &amp; Automation Specialist</span>
            </div>

            <h1 className="text-[clamp(2.4rem,6vw,3.6rem)] font-extrabold text-foreground leading-[1.12] mb-6 tracking-tight font-display">
              CRM Automation &amp; Paid Media That Turn Leads Into{" "}
              <span className="text-gradient">Booked Clients</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted mb-9 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              I build GoHighLevel systems and full-funnel campaigns for service
              businesses — so every lead is followed up automatically and every
              ad dollar is tracked back to revenue.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <BookingButton className="w-full sm:w-auto rounded-xl font-semibold shadow-xl shadow-primary/25 transition-all hover:scale-[1.03] px-7 py-3.5 text-[15px] gap-2">
                <CalendarDays size={18} />
                Book a Free Strategy Call
              </BookingButton>
              <a
                href="#portfolio"
                className="w-full sm:w-auto bg-transparent border-[1.5px] border-accent/70 text-accent hover:bg-accent/10 rounded-xl font-semibold transition-all hover:scale-[1.03] px-7 py-3.5 text-[15px] flex items-center justify-center gap-2"
              >
                View My Work
                <ArrowRight size={18} />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-3 text-sm text-muted">
              <div className="flex items-center gap-2">
                <Zap size={15} className="text-primary-hover" />
                200+ clients served worldwide
              </div>
              <div className="flex items-center gap-2">
                <Zap size={15} className="text-primary-hover" />
                30+ GoHighLevel systems deployed
              </div>
            </div>
          </div>

          <div className="relative mt-12 lg:mt-0">
            <TiltCard>
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/20 border-[6px] md:border-[10px] border-border-strong bg-surface/50 mx-auto max-w-md lg:max-w-none">
                <Image
                  src={siteConfig.avatar}
                  alt={`${siteConfig.name} — ${siteConfig.tagline}`}
                  width={1200}
                  height={1200}
                  className="w-full h-full object-cover aspect-square"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 bg-foreground text-background px-5 py-3 rounded-2xl shadow-xl border border-border flex items-center gap-3 w-max">
                  <div className="w-10 h-10 bg-primary/15 rounded-xl flex items-center justify-center text-primary-dark">
                    <Zap size={20} className="fill-primary" />
                  </div>
                  <div>
                    <p className="text-lg font-bold leading-none tracking-tight">
                      200+ Clients
                    </p>
                    <p className="text-[10px] font-semibold text-background/60 uppercase tracking-wider mt-1">
                      US · UK · Australia
                    </p>
                  </div>
                </div>
              </div>
            </TiltCard>

            {/* Cursor-tracking WALL·E mascot */}
            <div className="absolute -bottom-6 -left-4 md:-left-8 w-20 h-20 md:w-32 md:h-32">
              <WalleMascot className="w-full h-full animate-float-slow drop-shadow-[0_10px_20px_rgba(99,102,241,0.35)]" />
            </div>

            {/* Plant in a boot — the symbol of growth */}
            <div className="absolute -top-5 -right-2 md:-right-6 w-16 h-16 md:w-24 md:h-24 animate-plant-grow drop-shadow-[0_0_25px_rgba(56,189,248,0.35)]">
              <PlantInBoot className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
