import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, FolderOpen } from "lucide-react";
import { getPosts } from "@/lib/wordpress";
import { Reveal } from "@/components/reveal";

import { siteConfig } from "@/lib/site";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog & Growth Marketing Insights",
  description:
    "Expert insights on GoHighLevel automation, Meta & Google Ads, sales funnels, and CRM architecture from Mahmudul Hasan.",
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
  openGraph: {
    title: `Blog & Growth Insights — ${siteConfig.name}`,
    description:
      "Expert insights on GoHighLevel automation, Meta & Google Ads, sales funnels, and CRM architecture.",
    url: `${siteConfig.url}/blog`,
    type: "website",
    images: [{ url: siteConfig.avatar, width: 1200, height: 1200, alt: "Blog" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Blog & Growth Insights — ${siteConfig.name}`,
    description:
      "Expert insights on GoHighLevel automation, Meta & Google Ads, sales funnels, and CRM architecture.",
    images: [siteConfig.avatar],
  },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default async function BlogPage() {
  const posts = await getPosts();

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
        name: "Blog",
        item: `${siteConfig.url}/blog`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#0a0e1a] flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <main className="flex-1 pt-24">
        <section className="py-20 bg-[#0c1220] border-b border-[rgba(238,242,249,0.08)]">
          <div className="max-w-7xl mx-auto px-6">
            <Reveal>
              <div className="text-center mb-16">
                <div className="inline-block px-4 py-1.5 bg-[rgba(99,102,241,0.1)] text-[#6366f1] font-bold text-xs uppercase tracking-widest rounded-full mb-4 border border-[rgba(99,102,241,0.3)] font-display">
                  Insights
                </div>
                <h1 className="text-4xl md:text-6xl font-black mb-6 text-[#eef2f9] font-display break-words">
                  Growth <span className="text-gradient">Journal</span>
                </h1>
                <p className="text-[#9aa3b8] text-lg md:text-xl max-w-3xl mx-auto">
                  Notes from the trenches on CRM automation, paid media, and
                  building growth systems that actually scale.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="py-20 bg-[#0a0e1a]">
          <div className="max-w-7xl mx-auto px-6">
            {posts.length === 0 ? (
              <div className="text-center py-20 text-[#9aa3b8]">
                No posts yet — check back soon.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post, i) => (
                  <Reveal key={post.slug} delay={i * 80}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group flex flex-col rounded-3xl overflow-hidden bg-[rgba(21,30,54,0.5)] shadow-lg border border-[rgba(238,242,249,0.08)] hover:border-[rgba(56,189,248,0.4)] hover:shadow-xl transition-all duration-300 h-full"
                    >
                      {post.featuredImage ? (
                        <div className="relative aspect-video w-full overflow-hidden">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={post.featuredImage}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                          />
                        </div>
                      ) : (
                        <div className="aspect-video w-full bg-gradient-to-br from-[rgba(99,102,241,0.15)] to-[rgba(56,189,248,0.1)] flex items-center justify-center">
                          <span className="text-5xl font-black text-[#6366f1]/30 font-display">
                            MH
                          </span>
                        </div>
                      )}
                      <div className="p-6 md:p-8 flex flex-col flex-1">
                        {post.categories[0] && (
                          <span className="inline-flex items-center gap-1.5 self-start px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded-full bg-[rgba(99,102,241,0.12)] text-[#6366f1] mb-4">
                            <FolderOpen size={12} />
                            {post.categories[0]}
                          </span>
                        )}
                        <h2 className="text-xl font-bold text-[#eef2f9] mb-3 leading-snug group-hover:text-[#38bdf8] transition-colors break-words">
                          {post.title}
                        </h2>
                        <p className="text-[#9aa3b8] text-sm leading-relaxed line-clamp-3 flex-1 min-w-0">
                          {post.excerpt}
                        </p>
                        <div className="mt-6 pt-5 border-t border-[rgba(238,242,249,0.08)] flex items-center justify-between text-xs gap-2">
                          <span className="flex items-center gap-1.5 text-[#5f6b8a] min-w-0">
                            <CalendarDays size={14} className="shrink-0" />
                            <span className="truncate">{formatDate(post.date)}</span>
                          </span>
                          <span className="inline-flex items-center gap-1 font-black uppercase tracking-widest text-[#38bdf8] shrink-0">
                            Read
                            <ArrowRight
                              size={14}
                              className="group-hover:translate-x-1 transition-transform"
                            />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
