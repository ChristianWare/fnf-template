import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io", pathname: "/images/**" },
    ],
  },

  // If you ever add Turbopack config, make sure it’s NOT on in prod:
  ...(isProd ? {} : { turbopack: {} }),
};

export default nextConfig;
