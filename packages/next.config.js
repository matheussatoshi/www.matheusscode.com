/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: false,
  experimental: {
    optimizePackageImports: ["framer-motion"],
  },
  images: {
    domains: [
      "upload.wikimedia.org",
      "ream.com.br",
      "atem.com.br",
      "seeklogo.com",
      "img.icons8.com",
      "static-00.iconduck.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        pathname: "/u/**",
      },
      {
        protocol: "https",
        hostname: "github.com",
        pathname: "/user-attachments/assets/**",
      },
    ],
  },
};

export default config;
