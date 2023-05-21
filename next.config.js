/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    reactRoot: true,
    runtime: "nodejs",
    serverComponents: true,
    concurrentFeatures: true,
  },
  distDir: "build",
};

module.exports = nextConfig;
