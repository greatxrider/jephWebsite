import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize images
  images: {
    formats: ["image/webp", "image/avif"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
    minimumCacheTTL: 60,
  },

  // Compress static assets
  compress: true,

  // Disable ESLint during production builds (we'll fix warnings separately)
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
