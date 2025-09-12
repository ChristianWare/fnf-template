// auth.config.ts
import type { NextAuthConfig } from "next-auth";

// Keep ONLY light options (pure objects/functions) that don't import heavy deps.
// No Prisma adapter, no providers, no bcrypt/zod, no DB helpers here.

const authConfig = {
  providers: [],
  session: { strategy: "jwt" },
  trustHost: true,
  pages: { signIn: "/login" },

  // Keep callbacks "pure" (no DB calls). Only transform existing token/session.
  callbacks: {
    jwt: async ({ token }) => token,
    session: async ({ session }) => session,
  },
} satisfies NextAuthConfig;

export default authConfig;
