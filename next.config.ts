import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "github.com",
      "raw.githubusercontent.com",
      "user-images.githubusercontent.com",
    ],
  },
};

export default nextConfig;
