/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['image.cdn-eztravel.com.tw'],
    },
    experimental: {
      appDir: true,
    },
  }
  
module.exports = nextConfig