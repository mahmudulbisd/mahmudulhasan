import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, CalendarDays, User } from "lucide-react";
import { getPostBySlug } from "@/lib/wordpress";
import { BookingButton } from "@/components/booking-button";
import { WalleRobot } from "@/components/walle-robot";

export const revalidate = 3600;

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: post.featuredImage
      ? { images: [{ url: post.featuredImage }] }
      : undefined,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen bg-[#0a0e1a] flex flex-col">
      <main className="flex-1 pt-24">
        {/* Breadcrumb */}
        <div className="bg-[#0c1220] py-4 border-b border-[rgba(245,236,217,0.08)]">
          <div className="max-w-4xl mx-auto px-6 flex flex-wrap items-center text-sm text-[#9aa3b8]">
            <Link href="/" className="hover:text-[#35c8c2] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 mx-1.5 shrink-0" />
            <Link href="/blog" className="hover:text-[#35c8c2] transition-colors">
              Blog
            </Link>
            <ChevronRight className="hidden sm:block w-4 h-4 mx-1.5 shrink-0" />
            <span className="hidden sm:block text-[#f5ecd9] font-medium min-w-0 break-words leading-snug">
              {post.title}
            </span>
          </div>
        </div>

        <article className="bg-[#0c1220]">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
            <header className="mb-12">
              {post.categories[0] && (
                <span className="inline-block px-4 py-1.5 bg-[rgba(232,135,58,0.1)] text-[#e8873a] font-bold text-xs uppercase tracking-widest rounded-full mb-6 border border-[rgba(232,135,58,0.3)] font-display">
                  {post.categories[0]}
                </span>
              )}
              <h1 className="text-3xl md:text-5xl font-black text-[#f5ecd9] leading-tight mb-8 font-display break-words">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-[#9aa3b8]">
                <span className="flex items-center gap-2">
                  <User size={16} className="text-[#35c8c2]" />
                  Mahmudul Hasan
                </span>
                <span className="flex items-center gap-2">
                  <CalendarDays size={16} className="text-[#35c8c2]" />
                  {formatDate(post.date)}
                </span>
              </div>
            </header>

            {post.featuredImage && (
              <div className="mb-12 rounded-3xl overflow-hidden border border-[rgba(245,236,217,0.08)] aspect-[16/10] md:aspect-[16/9]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            )}

            {post.content ? (
              <div
                className="prose-lg text-[#cbd2e1] leading-relaxed space-y-6 wp-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            ) : (
              <div className="text-[#9aa3b8] leading-relaxed space-y-6">
                <p>{post.excerpt}</p>
                <p>
                  The full article is published on the WordPress CMS. This is
                  placeholder fallback content shown while the live post is
                  being synced.
                </p>
              </div>
            )}
          </div>
        </article>

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
