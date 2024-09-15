/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.google.com', 'freepnglogo.com']
  },
  experimental: {  
    appDir: true
  }
};

export default nextConfig;
