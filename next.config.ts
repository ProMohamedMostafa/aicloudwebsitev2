/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  swcMinify: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Enable gzip compression
  compress: true,
};

module.exports = nextConfig;
