/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export
  },
  // Performance optimizations
  poweredByHeader: false,
  compress: true,
  async redirects() {
    return [
      {
        source: '/resume.html',
        destination: '/resume',
        permanent: true,
      },
      {
        source: '/projects.html',
        destination: '/projects',
        permanent: true,
      },
      {
        source: '/blog.html',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/about.html',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/contact.html',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/gallery.html',
        destination: '/gallery',
        permanent: true,
      },
      {
        source: '/links.html',
        destination: '/links',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
