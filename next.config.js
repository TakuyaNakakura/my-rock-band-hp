/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
    unoptimized: process.env.NODE_ENV === 'development',
  },
  // experimental機能を削除
  // swcMinifyは削除 (Next.js 12以降はデフォルトで有効)
}

module.exports = nextConfig
