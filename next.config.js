/** @type {import('next').NextConfig} */
const nextConfig = {

  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  optimizeFonts: true,
  distDir: 'build',


}

module.exports = nextConfig
