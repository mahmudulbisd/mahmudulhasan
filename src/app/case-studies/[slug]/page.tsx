import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Target, Wrench, TrendingUp } from "lucide-react";
import { getCaseStudyBySlug } from "@/lib/wordpress";
import { BookingButton } from "@/components/booking-button";
import { WalleRobot } from "@/components/walle-robot";

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = await getCaseStudyBySlug(slug);
  if (!cs) return {};
  return {
    title: cs.title,
    description: cs.result || cs.challenge,
    openGraph: cs.image ? { images: [{ url: cs.image }] } : undefined,
  };
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = await getCaseStudyBySlug(slug);
  if (!cs) notFound();

  return (
    <div className="min-h-screen bg-[#0a0e1a] flex flex-col">
      <main className="flex-1 pt-24">
        {/* Breadcrumb */}
        <div className="bg-[#0c1220] py-4 border-b border-[rgba(245,236,217,0.08)]">
          <div className="max-w-7xl mx-auto px-6 flex items-center text-sm text-[#9aa3b8]">
            <Link href="/" className="hover:text-[#35c8c2] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link
              href="/case-studies"
              className="hover:text-[#35c8c2] transition-colors"
            >
              Case Studies
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-[#f5ecd9] font-medium line-clamp-1">
              {cs.title}
            </span>
          </div>
        </div>

        {/* Hero */}
        <section className="py-16 md:py-24 bg-[#0c1220]">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-[rgba(232,135,58,0.1)] text-[#e8873a] font-bold text-xs uppercase tracking-widest rounded-full mb-6 border border-[rgba(232,135,58,0.3)] font-display">
                {cs.industry}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-[#f5ecd9] leading-tight font-display">
                {cs.title}
              </h1>
              <div className="flex flex-wrap gap-3 mb-10">
                <span
                  className="px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full"
                  style={{
                    backgroundColor: "rgba(232,135,58,0.12)",
                    color: "#e8873a",
                  }}
                >
                  {cs.tag}
                </span>
              </div>
              <p className="text-[#9aa3b8] text-lg md:text-xl leading-relaxed">
                {cs.challenge}
              </p>
            </div>

            <div className="bg-[rgba(21,30,54,0.55)] border border-[rgba(245,236,217,0.1)] rounded-3xl overflow-hidden shadow-2xl">
              {cs.image ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={cs.image}
                  alt={cs.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="aspect-video bg-gradient-to-br from-[rgba(232,135,58,0.2)] to-[rgba(53,200,194,0.15)] flex items-center justify-center">
                  <TrendingUp className="w-16 h-16 text-[#35c8c2]/40" />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Challenge / Solution / Result */}
        <section className="py-20 bg-[#0a0e1a]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-[rgba(21,30,54,0.5)] border border-[rgba(245,236,217,0.08)] rounded-3xl p-8">
                <div className="w-12 h-12 bg-[rgba(232,135,58,0.12)] rounded-xl flex items-center justify-center mb-5 border border-[rgba(232,135,58,0.3)]">
                  <Target className="w-6 h-6 text-[#e8873a]" />
                </div>
                <h3 className="text-lg font-black text-[#f5ecd9] uppercase tracking-wide mb-3 font-display">
                  The Challenge
                </h3>
                <p className="text-[#9aa3b8] leading-relaxed">{cs.challenge}</p>
              </div>
              <div className="bg-[rgba(21,30,54,0.5)] border border-[rgba(245,236,217,0.08)] rounded-3xl p-8">
                <div className="w-12 h-12 bg-[rgba(53,200,194,0.1)] rounded-xl flex items-center justify-center mb-5 border border-[rgba(53,200,194,0.3)]">
                  <Wrench className="w-6 h-6 text-[#35c8c2]" />
                </div>
                <h3 className="text-lg font-black text-[#f5ecd9] uppercase tracking-wide mb-3 font-display">
                  The Solution
                </h3>
                <p className="text-[#9aa3b8] leading-relaxed">{cs.solution}</p>
              </div>
              <div className="bg-[rgba(21,30,54,0.5)] border border-[rgba(245,236,217,0.08)] rounded-3xl p-8">
                <div className="w-12 h-12 bg-[rgba(232,135,58,0.12)] rounded-xl flex items-center justify-center mb-5 border border-[rgba(232,135,58,0.3)]">
                  <TrendingUp className="w-6 h-6 text-[#e8873a]" />
                </div>
                <h3 className="text-lg font-black text-[#f5ecd9] uppercase tracking-wide mb-3 font-display">
                  The Result
                </h3>
                <p className="text-[#35c8c2] text-xl font-black leading-relaxed">
                  {cs.result}
                </p>
              </div>
            </div>

            {cs.content && (
              <div
                className="max-w-3xl mx-auto prose-lg text-[#cbd2e1] leading-relaxed space-y-6 wp-content"
                dangerouslySetInnerHTML={{ __html: cs.content }}
              />
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gradient-to-r from-[#b85f1e] to-[#1f4d4b]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="inline-block px-4 py-1.5 bg-white/20 text-white font-bold text-xs uppercase tracking-widest rounded-full mb-8 backdrop-blur-sm font-display">
              Free • No Commitment
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white font-display">
              Ready to get started?
            </h2>
            <p className="text-[#f5ecd9]/85 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Book a free strategy call to discuss your project requirements
              and receive a custom quote.
            </p>
            <BookingButton className="rounded-full px-10 h-16 text-lg font-bold bg-white text-[#7a3d0e] hover:bg-[#f5ecd9] hover:scale-105 transition-all">
              Book Free Strategy Call
            </BookingButton>
            <div className="mt-8 flex justify-center">
              <WalleRobot className="w-20 h-20 animate-float-slow" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
