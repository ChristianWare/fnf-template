/* eslint-disable @typescript-eslint/no-explicit-any */
// middleware.ts
import NextAuth from "next-auth";
import authConfig from "./auth.config"; // <-- must be the lean version (no providers/DB/etc.)

// Wrap to populate req.auth (undefined when not logged in)
export const { auth: withAuth } = NextAuth(authConfig);

export default withAuth((req) => {
  const { nextUrl } = req;
  const pathname = nextUrl.pathname;

  // 1) Let NextAuth handle its own routes
  if (pathname.startsWith("/api/auth")) return;

  // 2) Define what is protected (exactly what you asked)
  const isDashboard =
    pathname === "/dashboard" || pathname.startsWith("/dashboard/");
  const isAdminArea = pathname === "/admin" || pathname.startsWith("/admin/");

  // 3) Logged-in state & role pulled from the token/session that NextAuth attached
  const isLoggedIn = !!req.auth;
  const role =
    // prefer what NextAuth puts on user if you mapped it there
    (req.auth as any)?.user?.role ??
    // or read it directly from JWT if you added it in callbacks
    (req.auth as any)?.role;

  // 4) If not logged in, block only dashboard/admin and send to /login
  if (!isLoggedIn && (isDashboard || isAdminArea)) {
    const url = new URL("/login", nextUrl);
    url.searchParams.set("next", pathname); // optional: post-login redirect
    return Response.redirect(url);
  }

  // 5) If logged in but not ADMIN, block admin area
  if (isAdminArea && role !== "ADMIN") {
    return Response.redirect(new URL("/", nextUrl));
  }

  // 6) Otherwise allow
  return;
});

// Only run on real pages / API (skip Next internals & static assets)
export const config = {
  matcher: [
    "/((?!_next|.*\\.(?:css|js(?!on)|mjs|map|jpg|jpeg|png|gif|svg|ico|webp|ttf|woff2?|txt|xml|webmanifest|pdf|zip)).*)",
    "/(api|trpc)(.*)",
  ],
};
