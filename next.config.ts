import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "occ-0-4916-1740.1.nflxso.net",
      },
    ],
  },
};

export default nextConfig;
