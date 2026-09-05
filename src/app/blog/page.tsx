import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, FolderOpen } from "lucide-react";
import { getPosts } from "@/lib/wordpress";
import { Reveal } from "@/components/reveal";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Growth marketing insights on GoHighLevel automation, paid ads, funnels, and AI from Mahmudul Hasan.",
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

  return (
    <div className="min-h-screen bg-[#0a0e1a] flex flex-col">
      <main className="flex-1 pt-24">
        <section className="py-20 bg-[#0c1220] border-b border-[rgba(245,236,217,0.08)]">
          <div className="max-w-7xl mx-auto px-6">
            <Reveal>
              <div className="text-center mb-16">
                <div className="inline-block px-4 py-1.5 bg-[rgba(232,135,58,0.1)] text-[#e8873a] font-bold text-xs uppercase tracking-widest rounded-full mb-4 border border-[rgba(232,135,58,0.3)] font-display">
                  Mission Logs
                </div>
                <h1 className="text-4xl md:text-6xl font-black mb-6 text-[#f5ecd9] font-display break-words">
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
                      className="group flex flex-col rounded-3xl overflow-hidden bg-[rgba(21,30,54,0.5)] shadow-lg border border-[rgba(245,236,217,0.08)] hover:border-[rgba(53,200,194,0.4)] hover:shadow-xl transition-all duration-300 h-full"
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
                        <div className="aspect-video w-full bg-gradient-to-br from-[rgba(232,135,58,0.15)] to-[rgba(53,200,194,0.1)] flex items-center justify-center">
                          <span className="text-5xl font-black text-[#e8873a]/30 font-display">
                            MH
                          </span>
                        </div>
                      )}
                      <div className="p-6 md:p-8 flex flex-col flex-1">
                        {post.categories[0] && (
                          <span className="inline-flex items-center gap-1.5 self-start px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded-full bg-[rgba(232,135,58,0.12)] text-[#e8873a] mb-4">
                            <FolderOpen size={12} />
                            {post.categories[0]}
                          </span>
                        )}
                        <h2 className="text-xl font-bold text-[#f5ecd9] mb-3 leading-snug group-hover:text-[#35c8c2] transition-colors break-words">
                          {post.title}
                        </h2>
                        <p className="text-[#9aa3b8] text-sm leading-relaxed line-clamp-3 flex-1 min-w-0">
                          {post.excerpt}
                        </p>
                        <div className="mt-6 pt-5 border-t border-[rgba(245,236,217,0.08)] flex items-center justify-between text-xs gap-2">
                          <span className="flex items-center gap-1.5 text-[#5f6b8a] min-w-0">
                            <CalendarDays size={14} className="shrink-0" />
                            <span className="truncate">{formatDate(post.date)}</span>
                          </span>
                          <span className="inline-flex items-center gap-1 font-black uppercase tracking-widest text-[#35c8c2] shrink-0">
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
