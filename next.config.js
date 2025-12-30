/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for PWA offline capability
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Webpack config for TensorFlow.js
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
    };
    return config;
  },
};

module.exports = nextConfig;
