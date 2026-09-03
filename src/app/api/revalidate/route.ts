import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

/**
 * On-demand revalidation.
 *
 * Have WordPress ping this URL after publishing/updating content so the
 * Next.js cache refreshes without a full redeploy:
 *
 *   GET /api/revalidate?secret=YOUR_REVALIDATION_SECRET&path=/blog
 *
 * For non-GET methods or when a body type is provided, you can also send
 * a JSON body like { "secret": "...", "paths": ["/blog"] }.
 */

const KNOWN_PATHS = [
  "/blog",
  "/case-studies",
  "/", // home (featured blog/case-study sections)
];

export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");
  const path = request.nextUrl.searchParams.get("path") ?? "/blog";
  return handleRevalidate(secret, [path]);
}

export async function POST(request: NextRequest) {
  let secret: string | null = null;
  let paths: string[] = [];

  try {
    const body = await request.json();
    secret = body?.secret ?? null;
    paths = Array.isArray(body?.paths) ? body.paths : [];
  } catch {
    // Fall through to query params.
  }

  if (!secret) secret = request.nextUrl.searchParams.get("secret");
  if (paths.length === 0) {
    const p = request.nextUrl.searchParams.get("path");
    paths = p ? [p] : KNOWN_PATHS;
  }

  return handleRevalidate(secret, paths);
}

async function handleRevalidate(secret: string | null, paths: string[]) {
  if (!secret || secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ error: "Invalid secret." }, { status: 401 });
  }

  try {
    for (const path of paths) {
      revalidatePath(path);
    }
    return NextResponse.json({ revalidated: true, paths });
  } catch (err) {
    console.error("Revalidation error:", err);
    return NextResponse.json(
      { error: "Revalidation failed." },
      { status: 500 }
    );
  }
}
