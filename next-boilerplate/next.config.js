/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES || false;
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  assetPrefix: "https://edu4.dev",
  env: {
    IS_GITHUB_PAGE: isGithubPages,
  },
};

module.exports = nextConfig;
