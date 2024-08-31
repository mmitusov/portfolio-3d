/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/mitusov-portfolio-3d",
  output: 'export',
  //Here is "Next config" if you want to display any images in nextjs app from accross the internet
  images: {
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
}

export default nextConfig;
