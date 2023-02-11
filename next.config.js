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
};

module.exports = nextConfig;
