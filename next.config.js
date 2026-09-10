// 2026-09-10 factory: embed policy (frame-ancestors) comes from the platform SDK.
const __embed = require('@craudioviz/platform-sdk/embed-headers.js');
/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [{ source: '/:path*', headers: [...__embed.embedSecurityHeaders()] }];
  },
  transpilePackages: ["@craudioviz/platform-sdk"],};
module.exports = nextConfig;