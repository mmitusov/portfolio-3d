import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // generating HTML files that can be deployed to any static hosting platform (e.g., Vercel, Netlify, GitHub Pages).
  output: 'export', // used to export the website as a fully static site, 

  //Here is "Next config" if you want to display any images in nextjs app from accross the internet
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'localhost',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '**',
      },
    ],
  }
};

export default nextConfig;
