/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // assetPrefix: "https://cdn.jsdelivr.net",
  images: {
    domains: ["www.datocms-assets.com", "cdn.jsdelivr.net"],
  },
};

module.exports = nextConfig;
