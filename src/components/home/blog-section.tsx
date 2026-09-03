import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { getPosts } from "@/lib/wordpress";
import { Reveal } from "@/components/reveal";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export async function BlogSection() {
  const posts = (await getPosts()).slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section className="py-24 bg-[#0a0e1a]">
      <div className="max-w-7xl mx-auto px-4">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-[#f5ecd9] uppercase tracking-tight font-display">
                Latest from the <span className="text-gradient">Journal</span>
              </h2>
              <p className="text-[#9aa3b8] mt-3 max-w-xl">
                Practical breakdowns on automation, paid ads, and the systems
                behind predictable growth.
              </p>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[#35c8c2] font-black uppercase text-xs tracking-widest border-b-2 border-[rgba(53,200,194,0.3)] hover:border-[#35c8c2] transition-all pb-1 w-fit"
            >
              View All Posts
              <ArrowRight size={14} />
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 120}>
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
                <div className="p-6 md:p-7 flex flex-col flex-1">
                  {post.categories[0] && (
                    <span className="inline-flex items-center self-start px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-[rgba(232,135,58,0.12)] text-[#e8873a] mb-4">
                      {post.categories[0]}
                    </span>
                  )}
                  <h3 className="text-lg font-bold text-[#f5ecd9] mb-3 leading-snug group-hover:text-[#35c8c2] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-[#9aa3b8] text-sm leading-relaxed line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="mt-6 pt-4 border-t border-[rgba(245,236,217,0.08)] flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1.5 text-[#5f6b8a]">
                      <CalendarDays size={13} />
                      {formatDate(post.date)}
                    </span>
                    <span className="inline-flex items-center gap-1 font-black uppercase tracking-widest text-[#35c8c2]">
                      Read
                      <ArrowRight
                        size={13}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
