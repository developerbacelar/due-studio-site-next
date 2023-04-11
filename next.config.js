/* eslint-disable @typescript-eslint/camelcase */
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = {
  reactStrictMode: true,
  compress: false,
  images: {
    unoptimized: true,
  },
  optimizeFonts: true,
  distDir: 'build',
  trailingSlash: true,
}