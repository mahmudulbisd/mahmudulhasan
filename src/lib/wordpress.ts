import { caseStudies as fallbackCaseStudies } from "@/lib/content";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface WpPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage?: string;
  date: string;
  categories: string[];
  tags: string[];
}

export interface WpCaseStudy {
  slug: string;
  title: string;
  industry: string;
  tag: string;
  image?: string;
  challenge: string;
  solution: string;
  result: string;
  content?: string;
  date: string;
}

export interface PortfolioMetric {
  label: string;
  value: string;
}

export interface PortfolioItem {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  featuredImage?: {
    url: string;
    alt: string;
  };
  client?: string;
  service?: string;
  metrics?: PortfolioMetric[];
  liveUrl?: string;
}

// ---------------------------------------------------------------------------
// WordPress REST helpers
// ---------------------------------------------------------------------------

function wpBaseUrl() {
  return process.env.NEXT_PUBLIC_WORDPRESS_API_URL?.replace(/\/$/, "") ?? "";
}

function wpUrl(path: string, params: Record<string, string | number> = {}) {
  const search = new URLSearchParams(
    Object.entries(params).map(([k, v]) => [k, String(v)])
  );
  return `${wpBaseUrl()}${path}?${search.toString()}`;
}

/** Runs a fetch against the WP REST API. Throws on any network/HTTP failure. */
async function wpFetch<T>(
  path: string,
  params: Record<string, string | number> = {},
  revalidate = 3600
): Promise<T> {
  const url = wpUrl(path, params);

  // Use a short timeout so an unreachable CMS never blocks the page for long.
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 5000);

  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: { Accept: "application/json" },
      next: { revalidate },
    });

    if (!res.ok) {
      throw new Error(
        `WordPress request failed: ${res.status} ${res.statusText}`
      );
    }

    return (await res.json()) as T;
  } finally {
    clearTimeout(timer);
  }
}

interface WpMedia {
  source_url?: string;
  media_details?: {
    sizes?: Record<string, { source_url?: string }>;
  };
}

// ---------------------------------------------------------------------------
// WordPress → content mapping
// ---------------------------------------------------------------------------

const WP_FIELDS =
  "id,slug,title,excerpt,content,date,featured_media,_embedded,categories,tags";

interface RawPost {
  id: number;
  slug: string;
  title?: { rendered?: string };
  excerpt?: { rendered?: string };
  content?: { rendered?: string };
  date?: string;
  featured_media?: number;
  categories?: number[];
  tags?: number[];
  _embedded?: {
    "wp:featuredmedia"?: WpMedia[];
    "wp:term"?: Array<Array<{ id: number; name: string; taxonomy?: string }>>;
  };
}

/** Strip HTML tags and decode common entities. */
export function cleanExcerpt(html?: string, length = 200): string {
  const text = (html ?? "")
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#8217;|&rsquo;/g, "'")
    .replace(/&#8216;|&lsquo;/g, "'")
    .replace(/&#8220;|&ldquo;/g, '"')
    .replace(/&#8221;|&rdquo;/g, '"')
    .replace(/&#8230;|&hellip;/g, "…")
    .replace(/\s+/g, " ")
    .trim();

  if (text.length <= length) return text;
  return `${text.slice(0, length).replace(/\s+\S*$/, "")}…`;
}

interface Term {
  id: number;
  name: string;
}

function getTerms(
  post: RawPost,
  taxonomy: "category" | "post_tag"
): Term[] {
  const terms = post._embedded?.["wp:term"] ?? [];
  const list = terms.find((group) => group.some((t) => t.taxonomy === taxonomy));
  if (list) return list.map((t) => ({ id: t.id, name: t.name }));
  return [];
}

function mapPost(post: RawPost): WpPost {
  const featured = post._embedded?.["wp:featuredmedia"]?.[0];
  const featuredUrl =
    featured?.media_details?.sizes?.large?.source_url ??
    featured?.media_details?.sizes?.medium_large?.source_url ??
    featured?.source_url;

  return {
    id: post.id,
    slug: post.slug,
    title: post.title?.rendered ?? "Untitled",
    excerpt: cleanExcerpt(post.excerpt?.rendered),
    content: post.content?.rendered ?? "",
    featuredImage: featuredUrl,
    date: post.date ?? new Date().toISOString(),
    categories: getTerms(post, "category").map((t) => t.name),
    tags: getTerms(post, "post_tag").map((t) => t.name),
  };
}

// ---------------------------------------------------------------------------
// Case-study mapping from tagged posts
// ---------------------------------------------------------------------------

const caseStudyTagSlug = () =>
  process.env.WORDPRESS_CASE_STUDY_TAG ?? "case-study";

function tagNames(post: RawPost): string[] {
  return getTerms(post, "post_tag").map((t) => t.name);
}

/** Try to extract a short metric/result from the excerpt (e.g. "3x leads"). */
function guessResult(excerpt: string): string {
  const text = cleanExcerpt(excerpt, 300);
  const patterns = [
    /(\d+x|\d+%|\d+\+?)\s+[^,.;]{2,40}/i,
    /(increased|reduced|grew|boosted|cut)[^,.;]{0,50}/i,
  ];
  for (const re of patterns) {
    const m = text.match(re);
    if (m) return m[0].trim();
  }
  return "";
}

function mapCaseStudy(post: RawPost): WpCaseStudy {
  const featured = post._embedded?.["wp:featuredmedia"]?.[0];
  const featuredUrl =
    featured?.media_details?.sizes?.medium_large?.source_url ??
    featured?.source_url;

  const tags = tagNames(post).filter(
    (t) => t.toLowerCase().replace(/\s+/g, "-") !== caseStudyTagSlug()
  );

  const title = post.title?.rendered ?? "Untitled";
  const excerpt = cleanExcerpt(post.excerpt?.rendered, 180);
  const firstSentence = excerpt.split(/(?<=[.!?])\s+/)[0] || excerpt;

  return {
    slug: post.slug,
    title,
    // If tags look like "Plumber", "HVAC" etc, use them; otherwise derive.
    industry:
      tags.find((t) => !/result|lead|client|case/i.test(t)) ??
      tags[0] ??
      "Client Story",
    tag: tags.join(" · ") || "Case Study",
    image: featuredUrl,
    challenge: firstSentence || excerpt,
    solution: cleanExcerpt(post.content?.rendered, 220) || excerpt,
    result: guessResult(excerpt),
    content: post.content?.rendered ?? "",
    date: post.date ?? new Date().toISOString(),
  };
}

// ---------------------------------------------------------------------------
// Fallback / mock data (used when the CMS is unset or unreachable)
// ---------------------------------------------------------------------------

function mockPosts(): WpPost[] {
  return [
    {
      id: 1,
      slug: "gohighlevel-vs-zapier-automation",
      title: "GoHighLevel vs. Zapier: When to Use a Full CRM Platform",
      excerpt:
        "GoHighLevel bundles CRM, pipeline, calendar, and messaging into one tool. Zapier glues apps together. Here's how to choose the right automation backbone for your service business.",
      content: "",
      featuredImage: undefined,
      date: "2026-05-12T10:00:00.000Z",
      categories: ["Automation"],
      tags: ["GoHighLevel", "Zapier", "CRM"],
    },
    {
      id: 2,
      slug: "facebook-ads-for-local-service-businesses",
      title: "Facebook Ads for Local Service Businesses: A Field Guide",
      excerpt:
        "Local service ads live or die on offer, landing page, and follow-up speed. A practical breakdown of what actually moves the needle for plumbers, clinics, and roofers.",
      content: "",
      featuredImage: undefined,
      date: "2026-04-02T10:00:00.000Z",
      categories: ["Paid Ads"],
      tags: ["Facebook Ads", "Lead Generation"],
    },
    {
      id: 3,
      slug: "ghl-custom-fields-that-actually-convert",
      title: "5 GoHighLevel Custom Fields That Actually Convert Leads",
      excerpt:
        "Not every form field earns its place. These five GHL custom fields capture the context you need to close faster without adding friction.",
      content: "",
      featuredImage: undefined,
      date: "2026-02-18T10:00:00.000Z",
      categories: ["CRM & Automation"],
      tags: ["GoHighLevel", "Conversion"],
    },
    {
      id: 4,
      slug: "what-is-a-lead-magnet-funnel",
      title: "Anatomy of a Lead Magnet Funnel in GoHighLevel",
      excerpt:
        "A lead magnet funnel is more than a download page. A look at the pages, emails, and SMS follow-ups that turn a free PDF into booked calls.",
      content: "",
      featuredImage: undefined,
      date: "2026-01-10T10:00:00.000Z",
      categories: ["Funnels"],
      tags: ["GoHighLevel", "Funnels"],
    },
    {
      id: 5,
      slug: "sms-follow-up-automation-examples",
      title: "SMS Follow-Up Automation Examples That Book More Calls",
      excerpt:
        "The fastest leads are the ones you text. Six ready-to-steal SMS follow-up sequences built for speed-to-lead in home services.",
      content: "",
      featuredImage: undefined,
      date: "2025-12-05T10:00:00.000Z",
      categories: ["Automation"],
      tags: ["SMS", "Follow-up", "GoHighLevel"],
    },
  ];
}

/** Fallback case studies double as the mock portfolio when WP is unreachable. */
export function mockCaseStudies(): WpCaseStudy[] {
  return fallbackCaseStudies.map((cs, i) => ({
    slug: cs.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, ""),
    title: cs.title,
    industry: cs.industry,
    tag: cs.tag,
    image: cs.image,
    challenge: cs.challenge,
    solution: cs.solution,
    result: cs.result,
    date: new Date(Date.now() - i * 30 * 24 * 3600 * 1000).toISOString(),
  }));
}

/** Fallback portfolio showcase used when the CMS has no portfolio items yet. */
export function getFallbackPortfolio(): PortfolioItem[] {
  return fallbackCaseStudies.map((cs, i) => ({
    id: i + 1,
    slug: cs.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, ""),
    title: cs.title,
    excerpt: `${cs.challenge} ${cs.solution}`,
    content: "",
    date: new Date(Date.now() - i * 30 * 24 * 3600 * 1000).toISOString(),
    featuredImage: cs.image ? { url: cs.image, alt: cs.title } : undefined,
    client: cs.industry === "Home Services" ? "Plumbing Co." : cs.industry === "Healthcare" ? "Dental Clinic" : "Real Estate Agency",
    service: cs.tag,
    metrics: [
      { label: "Headline Result", value: cs.result.replace(/^(\d+[x%]?)\s+/, "$1 ") },
    ],
  }));
}

// ---------------------------------------------------------------------------
// Public data-access API
// ---------------------------------------------------------------------------

const hasCms = () => Boolean(wpBaseUrl());

/** Fetch recent posts. Falls back to mock posts when no CMS / unreachable. */
export async function getPosts(): Promise<WpPost[]> {
  if (!hasCms()) return mockPosts();

  try {
    const data = await wpFetch<RawPost[]>("/posts", {
      per_page: 12,
      _embed: 1,
      _fields: WP_FIELDS,
    });
    return Array.isArray(data) ? data.map(mapPost) : mockPosts();
  } catch (err) {
    console.warn("WordPress unreachable, using mock posts:", err);
    return mockPosts();
  }
}

/** Fetch a single post by slug. Falls back to the matching mock. */
export async function getPostBySlug(slug: string): Promise<WpPost | null> {
  if (!hasCms()) {
    return mockPosts().find((p) => p.slug === slug) ?? null;
  }

  try {
    const data = await wpFetch<RawPost[]>("/posts", {
      slug,
      _embed: 1,
      _fields: WP_FIELDS,
    });
    return data?.[0] ? mapPost(data[0]) : null;
  } catch (err) {
    console.warn("WordPress unreachable, falling back to mock post:", err);
    return mockPosts().find((p) => p.slug === slug) ?? null;
  }
}

/**
 * Fetch case studies from posts tagged with the case-study tag slug
 * (default: `case-study`). Falls back to mocks when unset/unreachable/empty.
 */
export async function getCaseStudies(): Promise<WpCaseStudy[]> {
  if (!hasCms()) return mockCaseStudies();

  try {
    // Resolve the tag slug to its numeric id, then filter server-side.
    const tagSlug = caseStudyTagSlug();
    const tags = await wpFetch<{ id: number }[]>("/tags", {
      slug: tagSlug,
      per_page: 1,
      _fields: "id",
    });

    const tagId = tags?.[0]?.id;
    if (!tagId) return mockCaseStudies();

    const data = await wpFetch<RawPost[]>("/posts", {
      per_page: 20,
      _embed: 1,
      _fields: WP_FIELDS,
      tags: tagId,
    });

    if (!Array.isArray(data) || data.length === 0) return mockCaseStudies();

    return data.map(mapCaseStudy);
  } catch (err) {
    console.warn("WordPress unreachable, using mock case studies:", err);
    return mockCaseStudies();
  }
}

/** Fetch a single case study by slug from the tagged posts. */
export async function getCaseStudyBySlug(
  slug: string
): Promise<WpCaseStudy | null> {
  if (!hasCms()) {
    return mockCaseStudies().find((c) => c.slug === slug) ?? null;
  }

  try {
    const all = await getCaseStudies();
    return all.find((c) => c.slug === slug) ?? null;
  } catch {
    return mockCaseStudies().find((c) => c.slug === slug) ?? null;
  }
}

// ---------------------------------------------------------------------------
// Portfolio (WordPress `portfolio` custom post type)
// ---------------------------------------------------------------------------

const PORTFOLIO_REVALIDATE = 60;

interface RawPortfolioItem {
  id: number;
  slug: string;
  title?: { rendered?: string };
  excerpt?: { rendered?: string };
  content?: { rendered?: string };
  date?: string;
  acf?: {
    client_name?: string;
    service_type?: string;
    metrics?: { label: string; value: string }[];
    live_url?: string;
  };
  meta?: Record<string, unknown>;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url?: string;
      alt_text?: string;
      media_details?: { sizes?: Record<string, { source_url?: string }> };
    }>;
  };
}

function mapPortfolioItem(item: RawPortfolioItem): PortfolioItem {
  const featured = item._embedded?.["wp:featuredmedia"]?.[0];
  const featuredUrl =
    featured?.media_details?.sizes?.large?.source_url ??
    featured?.media_details?.sizes?.medium_large?.source_url ??
    featured?.source_url;
  const title = item.title?.rendered ?? "Untitled";

  return {
    id: item.id,
    slug: item.slug,
    title,
    excerpt: cleanExcerpt(item.excerpt?.rendered, 200),
    content: item.content?.rendered ?? "",
    date: item.date ?? new Date().toISOString(),
    featuredImage: featuredUrl
      ? {
          url: featuredUrl,
          alt: featured?.alt_text || title,
        }
      : undefined,
    client: item.acf?.client_name || "Confidential Client",
    service: item.acf?.service_type || "Performance Marketing",
    metrics:
      Array.isArray(item.acf?.metrics) && item.acf.metrics.length > 0
        ? item.acf.metrics
        : [{ label: "Growth", value: "+250%" }],
    liveUrl: item.acf?.live_url || "",
  };
}

/**
 * Fetch portfolio items from the `portfolio` CPT.
 * ISR at 60s; falls back to local showcase data when unset/unreachable/empty.
 */
export async function getPortfolioItems(): Promise<PortfolioItem[]> {
  if (!hasCms()) return getFallbackPortfolio();

  try {
    const data = await wpFetch<RawPortfolioItem[]>(
      "/portfolio",
      { per_page: 20, _embed: 1 },
      PORTFOLIO_REVALIDATE
    );

    if (!Array.isArray(data) || data.length === 0) return getFallbackPortfolio();

    return data.map(mapPortfolioItem);
  } catch (err) {
    console.warn("WordPress unreachable, using fallback portfolio:", err);
    return getFallbackPortfolio();
  }
}

/** Fetch a single portfolio item by slug. Falls back to the matching local item. */
export async function getPortfolioItemBySlug(
  slug: string
): Promise<PortfolioItem | null> {
  const fallback = getFallbackPortfolio().find((p) => p.slug === slug);
  if (!hasCms()) return fallback ?? null;

  try {
    const data = await wpFetch<RawPortfolioItem[]>(
      "/portfolio",
      { slug, _embed: 1 },
      PORTFOLIO_REVALIDATE
    );

    if (!data?.[0]) return fallback ?? null;
    return mapPortfolioItem(data[0]);
  } catch (err) {
    console.warn(`WordPress unreachable, falling back for portfolio "${slug}":`, err);
    return fallback ?? null;
  }
}
