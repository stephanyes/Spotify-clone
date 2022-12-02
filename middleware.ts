// this will execute before any request
// Edge functions work on a different environment
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const signedinPages = ["/", "/playlist", "/library"];
// Reason why its in root folder and not in pages/_middleware.ts -> https://nextjs.org/docs/messages/nested-middleware
export default function middleware(req: NextRequest) {
  if (signedinPages.find((path) => path === req.nextUrl.pathname)) {
    const token = req.cookies.get("SPOTIFY_ACCESS_TOKEN")?.value;

    if (!token) {
      // https://nextjs.org/docs/messages/middleware-relative-urls
      const url = req.nextUrl.clone();
      url.pathname = "/signin";
      return NextResponse.redirect(url);
    }
  }
}
