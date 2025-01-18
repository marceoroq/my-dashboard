import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "flowbite.com" },
      { protocol: "https", hostname: "covers.openlibrary.org" },
    ],
  },
};

export default nextConfig;
