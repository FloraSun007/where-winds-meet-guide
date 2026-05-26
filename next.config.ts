import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "img1.ali213.net" },
      { protocol: "http", hostname: "img1.ali213.net" },
      { protocol: "https", hostname: "img2.ali213.net" },
      { protocol: "http", hostname: "img2.ali213.net" },
    ],
  },
};

export default nextConfig;
