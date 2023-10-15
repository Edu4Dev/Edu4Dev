/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES || false;
const customDomain = "https://edu4.dev";
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  assetPrefix: customDomain,
  env: {
    IS_GITHUB_PAGE: isGithubPages,
  },
};

module.exports = nextConfig;
