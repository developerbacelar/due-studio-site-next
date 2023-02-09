/* eslint-disable @typescript-eslint/camelcase */
const { createProxyMiddleware } = require("http-proxy-middleware");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  optimizeFonts: true,
  distDir: 'build',
  serverMiddleware: [
    createProxyMiddleware("/api", {
      target: "https://maps.googleapis.com/maps/api/place/details/json",
      changeOrigin: true,
      pathRewrite: { "^/api": "" },
    }),
  ],
};

module.exports = nextConfig;
