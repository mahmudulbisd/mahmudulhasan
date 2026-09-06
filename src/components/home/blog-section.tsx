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
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 md:mb-14">
            <div>
              <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary-hover font-bold text-xs uppercase tracking-widest rounded-full mb-4 border border-primary/30">
                Insights
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight font-display">
                Latest From the <span className="text-gradient">Blog</span>
              </h2>
              <p className="text-muted mt-3 max-w-xl">
                Practical breakdowns on automation, paid ads, and the systems
                behind predictable growth.
              </p>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-accent font-bold uppercase text-xs tracking-widest border-b-2 border-accent/30 hover:border-accent transition-all pb-1 w-fit"
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
                className="group flex flex-col rounded-3xl overflow-hidden bg-surface/50 shadow-lg border border-border hover:border-accent/40 hover:shadow-xl transition-all duration-300 h-full"
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
                  <div className="aspect-video w-full bg-gradient-to-br from-primary/15 to-accent/10 flex items-center justify-center">
                    <span className="text-5xl font-extrabold text-primary/30 font-display">
                      MH
                    </span>
                  </div>
                )}
                <div className="p-6 md:p-7 flex flex-col flex-1 min-w-0">
                  {post.categories[0] && (
                    <span className="inline-flex items-center self-start px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-primary/10 text-primary-hover mb-4">
                      {post.categories[0]}
                    </span>
                  )}
                  <h3 className="text-lg font-bold text-foreground mb-3 leading-snug group-hover:text-accent transition-colors break-words">
                    {post.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed line-clamp-3 flex-1 min-w-0">
                    {post.excerpt}
                  </p>
                  <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs gap-2">
                    <span className="flex items-center gap-1.5 text-muted-2 min-w-0">
                      <CalendarDays size={13} className="shrink-0" />
                      <span className="truncate">{formatDate(post.date)}</span>
                    </span>
                    <span className="inline-flex items-center gap-1 font-bold uppercase tracking-widest text-accent shrink-0">
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
