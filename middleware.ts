// middleware.ts (Edge)
import NextAuth from "next-auth";
import authConfig from "./auth.config"; // <- lean config ONLY

// If you export route constants, ensure they live in a tiny file with only arrays/strings
import {
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
  LOGIN_REDIRECT,
} from "./routes";

export const { auth: baseMiddleware } = NextAuth(authConfig);

export default baseMiddleware((req) => {
  const { nextUrl } = req;
  const pathname = nextUrl.pathname;
  const isLoggedIn = !!req.auth;

  if (pathname.startsWith(apiAuthPrefix)) return;

  const isAuthRoute = authRoutes.includes(pathname);
  if (isAuthRoute && isLoggedIn) {
    return Response.redirect(new URL(LOGIN_REDIRECT, nextUrl));
  }

  const isPublicRoute = publicRoutes.includes(pathname);
  if (!isLoggedIn && !isPublicRoute && !isAuthRoute) {
    return Response.redirect(new URL("/login", nextUrl));
  }

  return;
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
