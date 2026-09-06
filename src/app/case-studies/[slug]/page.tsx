import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Target, Wrench, TrendingUp } from "lucide-react";
import { getCaseStudyBySlug } from "@/lib/wordpress";
import { siteConfig } from "@/lib/site";
import { BookingButton } from "@/components/booking-button";

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = await getCaseStudyBySlug(slug);
  if (!cs) return {};
  const pageUrl = `${siteConfig.url}/case-studies/${slug}`;
  const desc = cs.result || cs.challenge;
  const image = cs.image || siteConfig.avatar;

  return {
    title: `${cs.title} — Case Study | ${siteConfig.name}`,
    description: desc,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `${cs.title} — Case Study`,
      description: desc,
      url: pageUrl,
      type: "article",
      images: [{ url: image, alt: cs.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${cs.title} — Case Study`,
      description: desc,
      images: [image],
    },
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

  const pageUrl = `${siteConfig.url}/case-studies/${slug}`;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: cs.title,
    description: cs.result || cs.challenge,
    image: cs.image || siteConfig.avatar,
    datePublished: cs.date,
    dateModified: cs.date,
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: siteConfig.avatar,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Case Studies",
        item: `${siteConfig.url}/case-studies`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: cs.title,
        item: pageUrl,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#0a0e1a] flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <main className="flex-1 pt-24">
        {/* Breadcrumb */}
        <div className="bg-[#0c1220] py-4 border-b border-[rgba(238,242,249,0.08)]">
          <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center text-sm text-[#9aa3b8]">
            <Link href="/" className="hover:text-[#38bdf8] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 mx-1.5 shrink-0" />
            <Link
              href="/case-studies"
              className="hover:text-[#38bdf8] transition-colors"
            >
              Case Studies
            </Link>
            <ChevronRight className="hidden sm:block w-4 h-4 mx-1.5 shrink-0" />
            <span className="hidden sm:block text-[#eef2f9] font-medium min-w-0 break-words leading-snug">
              {cs.title}
            </span>
          </div>
        </div>

        {/* Hero */}
        <section className="py-16 md:py-24 bg-[#0c1220]">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-[rgba(99,102,241,0.1)] text-[#6366f1] font-bold text-xs uppercase tracking-widest rounded-full mb-6 border border-[rgba(99,102,241,0.3)] font-display">
                {cs.industry}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-[#eef2f9] leading-tight font-display">
                {cs.title}
              </h1>
              <div className="flex flex-wrap gap-3 mb-10">
                <span
                  className="px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full break-words"
                  style={{
                    backgroundColor: "rgba(99,102,241,0.12)",
                    color: "#6366f1",
                  }}
                >
                  {cs.tag}
                </span>
              </div>
              <p className="text-[#9aa3b8] text-lg md:text-xl leading-relaxed">
                {cs.challenge}
              </p>
            </div>

            <div className="bg-[rgba(21,30,54,0.55)] border border-[rgba(238,242,249,0.1)] rounded-3xl overflow-hidden shadow-2xl aspect-[16/10] md:aspect-[16/9]">
              {cs.image ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={cs.image}
                  alt={cs.title}
                  className="w-full h-full object-cover object-top"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-[rgba(99,102,241,0.2)] to-[rgba(56,189,248,0.15)] flex items-center justify-center">
                  <TrendingUp className="w-16 h-16 text-[#38bdf8]/40" />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Challenge / Solution / Result */}
        <section className="py-20 bg-[#0a0e1a]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-[rgba(21,30,54,0.5)] border border-[rgba(238,242,249,0.08)] rounded-3xl p-8">
                <div className="w-12 h-12 bg-[rgba(99,102,241,0.12)] rounded-xl flex items-center justify-center mb-5 border border-[rgba(99,102,241,0.3)]">
                  <Target className="w-6 h-6 text-[#6366f1]" />
                </div>
                <h3 className="text-lg font-black text-[#eef2f9] uppercase tracking-wide mb-3 font-display">
                  The Challenge
                </h3>
                <p className="text-[#9aa3b8] leading-relaxed">{cs.challenge}</p>
              </div>
              <div className="bg-[rgba(21,30,54,0.5)] border border-[rgba(238,242,249,0.08)] rounded-3xl p-8">
                <div className="w-12 h-12 bg-[rgba(56,189,248,0.1)] rounded-xl flex items-center justify-center mb-5 border border-[rgba(56,189,248,0.3)]">
                  <Wrench className="w-6 h-6 text-[#38bdf8]" />
                </div>
                <h3 className="text-lg font-black text-[#eef2f9] uppercase tracking-wide mb-3 font-display">
                  The Solution
                </h3>
                <p className="text-[#9aa3b8] leading-relaxed">{cs.solution}</p>
              </div>
              <div className="bg-[rgba(21,30,54,0.5)] border border-[rgba(238,242,249,0.08)] rounded-3xl p-8">
                <div className="w-12 h-12 bg-[rgba(99,102,241,0.12)] rounded-xl flex items-center justify-center mb-5 border border-[rgba(99,102,241,0.3)]">
                  <TrendingUp className="w-6 h-6 text-[#6366f1]" />
                </div>
                <h3 className="text-lg font-black text-[#eef2f9] uppercase tracking-wide mb-3 font-display">
                  The Result
                </h3>
                <p className="text-[#38bdf8] text-xl font-black leading-relaxed">
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
        <section className="py-24 bg-gradient-to-r from-[#4f46e5] to-[#1e40af]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="inline-block px-4 py-1.5 bg-white/20 text-white font-bold text-xs uppercase tracking-widest rounded-full mb-8 backdrop-blur-sm font-display">
              Free • No Commitment
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white font-display">
              Ready to get started?
            </h2>
            <p className="text-[#eef2f9]/85 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Book a free strategy call to discuss your project requirements
              and receive a custom quote.
            </p>
            <BookingButton
              variant="light"
              className="rounded-full px-10 h-16 text-lg font-bold hover:scale-105 transition-all"
            >
              Book Free Strategy Call
            </BookingButton>
          </div>
        </section>
      </main>
    </div>
  );
}
