/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const isGithubPages = process.env.GITHUB_PAGES || false;
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  assetPrefix: isProd ? "https://edu4.dev" : undefined,
  images: {
    loader: "custom",
    loaderFile: "./src/containers/imgLoaderContainer.js",
  },
  env: {
    IS_GITHUB_PAGE: isGithubPages,
  },
};

module.exports = nextConfig;
