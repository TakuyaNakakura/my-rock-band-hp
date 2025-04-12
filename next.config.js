/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
    unoptimized: process.env.NODE_ENV === 'development',
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
  },
  // Vercelのデプロイを最適化
  swcMinify: true,
  // 本番環境での画像最適化
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig
