/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  poweredByHeader: false,
  // Minimal experimental config to avoid issues
  experimental: {
    // Disable potentially problematic optimizations
    optimizePackageImports: [],
  },
}

module.exports = nextConfig
