import type { NextConfig } from "next";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";

const securityHeaders = [
  // Prevent clickjacking — no page may embed this site in an iframe
  { key: "X-Frame-Options", value: "DENY" },
  // Stop browsers from guessing MIME types (MIME-sniffing attacks)
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Control how much referrer info is sent with requests
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Disable access to sensitive device APIs that this site doesn't use
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=()",
  },
  // Legacy XSS filter for older browsers
  { key: "X-XSS-Protection", value: "1; mode=block" },
  // Force HTTPS for 2 years, include subdomains (add to preload list once confirmed)
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Content-Security-Policy — restrict which origins can load resources
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // 'unsafe-inline' required for Next.js inline styles & GSAP; tighten with nonces in future
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: blob:",
      // Allow fetch/XHR only to same origin and your backend API
      `connect-src 'self' ${apiBaseUrl}`,
      "worker-src 'self' blob:",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ]
      .filter(Boolean)
      .join("; "),
  },
];

const nextConfig: NextConfig = {
  compress: true,

  // Never expose source maps to the browser in production
  productionBrowserSourceMaps: false,

  images: {
    formats: ["image/avif", "image/webp"],
  },

  experimental: {
    optimizePackageImports: ["framer-motion", "lucide-react"],
  },

  async headers() {
    return [
      {
        // Apply security headers to every route
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
