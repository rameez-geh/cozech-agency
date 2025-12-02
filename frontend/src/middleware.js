import { NextResponse } from "next/server";

export function middleware(req) {
  const host = req.headers.get("host") || "";
  const url = req.nextUrl.clone();

  // Force www canonical host
  if (host === "cozech.com") {
    url.hostname = "www.cozech.com";
    url.protocol = "https:";
    return NextResponse.redirect(url, 301);
  }

  // If protocol is http (behind a proxy), redirect to https
  if (url.protocol !== "https:") {
    url.protocol = "https:";
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
