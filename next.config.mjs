/** @type {import('next').NextConfig} */
const nextConfig = {
  //Here is "Next config" if you want to display any images in nextjs app from accross the internet
  images: {
      domains: ['localhost'],
      remotePatterns: [
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
