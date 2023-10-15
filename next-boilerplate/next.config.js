/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES || false;
const isProd = process.env.NODE_ENV === 'production';
const customDomain = 'https://edu4.dev';
const repo = "";
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  assetPrefix: isProd ? customDomain : undefined,
  basePath: isGithubPages ? "" : undefined,
  images: {
    loader: "custom",
    loaderFile: "./src/containers/imgLoaderContainer.js",
  },
  env: {
    IS_GITHUB_PAGE: isGithubPages,
    THEME_FOLDER: repo,
  },
};

module.exports = nextConfig;
