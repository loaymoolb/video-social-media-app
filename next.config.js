/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['scontent-fra5-2.cdninstagram.com', 'lh3.googleusercontent.com', 'i.pinimg.com'],
  },
}

module.exports = nextConfig
