/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['drive.google.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.scdn.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Performance Optimizations
  swcMinify: true, // Use SWC for minification (faster than Terser)
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production', // Remove console.logs in production
  },
  experimental: {
    optimizeCss: false // Disable CSS optimization for now
  },
  // Enable gzip compression
  compress: true,
  // Optimize production builds
  productionBrowserSourceMaps: false, // Disable source maps in production
  reactStrictMode: true,
  poweredByHeader: false, // Remove X-Powered-By header
}

module.exports = nextConfig
