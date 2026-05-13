/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: '.next-runtime',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  reactStrictMode: true,
  turbopack: {
    root: __dirname,
  },
}

module.exports = nextConfig
