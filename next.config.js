/** @type {import('next').NextConfig} */
const { i18n } = require("./i18n.config");

const nextConfig = {
  reactStrictMode: true,
  i18n,
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
  env: {
    DOMAIN_BACKEND: "http://localhost:3000",
  },
};
module.exports = nextConfig;
