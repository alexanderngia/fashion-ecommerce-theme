/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
  env: {
    DOMAIN_BACKEND: "http://localhost:3000",
  },
};
module.exports = nextConfig;
