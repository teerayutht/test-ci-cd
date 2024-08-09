/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  assetPrefix: process.env.NODE_ENV === 'production' ? '/test-ci-cd/' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
