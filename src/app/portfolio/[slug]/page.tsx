import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ChevronRight,
  Briefcase,
  CalendarDays,
  ExternalLink,
  TrendingUp,
} from "lucide-react";
import { getPortfolioItemBySlug } from "@/lib/wordpress";
import { BookingButton } from "@/components/booking-button";
import { WalleRobot } from "@/components/walle-robot";

export const revalidate = 60;

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = await getPortfolioItemBySlug(slug);
  if (!item) return {};
  return {
    title: item.title,
    description: item.excerpt,
    openGraph: item.featuredImage
      ? { images: [{ url: item.featuredImage.url }] }
      : undefined,
  };
}

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = await getPortfolioItemBySlug(slug);
  if (!item) notFound();

  const metrics = item.metrics ?? [];

  return (
    <div className="min-h-screen bg-[#0a0e1a] flex flex-col">
      <main className="flex-1 pt-24">
        {/* Breadcrumb */}
        <div className="bg-[#0c1220] py-4 border-b border-[rgba(245,236,217,0.08)]">
          <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center text-sm text-[#9aa3b8]">
            <Link href="/" className="hover:text-[#35c8c2] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 mx-1.5 shrink-0" />
            <Link
              href="/portfolio"
              className="hover:text-[#35c8c2] transition-colors"
            >
              Portfolio
            </Link>
            <ChevronRight className="hidden sm:block w-4 h-4 mx-1.5 shrink-0" />
            <span className="hidden sm:block text-[#f5ecd9] font-medium min-w-0 break-words leading-snug">
              {item.title}
            </span>
          </div>
        </div>

        {/* Hero */}
        <section className="py-16 md:py-24 bg-[#0c1220]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[rgba(53,200,194,0.08)] text-[#35c8c2] font-bold text-xs uppercase tracking-widest rounded-full mb-6 border border-[rgba(53,200,194,0.3)] font-display">
                <Briefcase size={14} />
                {item.client}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-[#f5ecd9] leading-tight font-display break-words">
                {item.title}
              </h1>
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-[#9aa3b8]">
                <span className="inline-flex items-center gap-2">
                  <TrendingUp size={16} className="text-[#e8873a]" />
                  {item.service}
                </span>
                <span className="inline-flex items-center gap-2">
                  <CalendarDays size={16} className="text-[#e8873a]" />
                  {formatDate(item.date)}
                </span>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2">
                <div className="rounded-3xl overflow-hidden border border-[rgba(245,236,217,0.1)] shadow-2xl aspect-[16/10] md:aspect-[16/9]">
                  {item.featuredImage ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={item.featuredImage.url}
                      alt={item.featuredImage.alt}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[rgba(232,135,58,0.2)] to-[rgba(53,200,194,0.15)] flex items-center justify-center">
                      <Briefcase className="w-16 h-16 text-[#35c8c2]/40" />
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-[rgba(21,30,54,0.55)] border border-[rgba(245,236,217,0.1)] rounded-3xl p-6">
                  <h3 className="text-xs font-black text-[#5f6b8a] uppercase tracking-widest mb-5 font-display">
                    Key Results
                  </h3>
                  {metrics.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {metrics.map((m) => (
                        <div
                          key={m.label}
                          className="bg-[rgba(232,135,58,0.08)] border border-[rgba(232,135,58,0.2)] rounded-2xl p-4 text-center"
                        >
                          <div className="text-2xl font-black text-[#35c8c2] font-display break-words">
                            {m.value}
                          </div>
                          <div className="text-[11px] font-bold uppercase tracking-wider text-[#9aa3b8] mt-1 break-words">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-[#9aa3b8] text-sm">
                      Results to be added.
                    </p>
                  )}
                </div>

                {item.liveUrl && (
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full rounded-2xl h-12 border-[1.5px] border-[#35c8c2] text-[#35c8c2] font-bold hover:bg-[rgba(53,200,194,0.08)] transition-colors"
                  >
                    <ExternalLink size={16} />
                    Visit Live Project
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Story */}
        {item.content && (
          <section className="py-20 bg-[#0a0e1a]">
            <div className="max-w-3xl mx-auto px-6">
              <h2 className="text-2xl md:text-3xl font-black text-[#f5ecd9] mb-8 font-display">
                The Full Story
              </h2>
              <div
                className="text-[#cbd2e1] leading-relaxed space-y-6 wp-content"
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-24 bg-gradient-to-r from-[#b85f1e] to-[#1f4d4b]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="inline-block px-4 py-1.5 bg-white/20 text-white font-bold text-xs uppercase tracking-widest rounded-full mb-8 backdrop-blur-sm font-display">
              Free • No Commitment
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white font-display">
              Want results like this?
            </h2>
            <p className="text-[#f5ecd9]/85 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Let&apos;s map out a growth system tailored to your business.
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
