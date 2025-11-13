/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV !== "production";

// Define our Content Security Policy (CSP)
const baseCsp = [
  "default-src 'self'",
  "img-src 'self' https: data:",
  "style-src 'self' 'unsafe-inline'",
  "script-src 'self' 'unsafe-inline' https://cdn.shopify.com https://sdks.shopifycdn.com",
  "frame-src https://*",
  "connect-src 'self' https:",
];

// Add 'unsafe-eval' only while developing (needed for local Next.js builds)
const devCsp = [...baseCsp];
devCsp[3] =
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.shopify.com https://sdks.shopifycdn.com";

const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "geolocation=(), microphone=(), camera=()" },
  { key: "Content-Security-Policy", value: (isDev ? devCsp : baseCsp).join("; ") },
];

// Import the MDX plugin so we can write blog posts in .mdx files
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

// Export the combined configuration
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
};

module.exports = withMDX(nextConfig);
