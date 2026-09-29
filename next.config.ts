import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;
let repo = '';
if (isGithubActions) {
  // Ajusta o caminho base quando estiver rodando no GitHub Pages
  repo = '/carlos-diego-consorcio';
}

const nextConfig: NextConfig = {
  output: "export",
  basePath: repo,
  assetPrefix: repo,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;