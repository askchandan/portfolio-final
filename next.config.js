/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  poweredByHeader: false,
  // Performance optimizations
  compress: true,
  generateEtags: false,
  httpAgentOptions: {
    keepAlive: true,
  },
}

module.exports = nextConfig

module.exports = nextConfig
