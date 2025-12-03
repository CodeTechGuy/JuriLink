/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsHmrCache: false, // defaults to true
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com",
        hostname: "i.pinimg.com",
        // domains: ['i.pinimg.com'], // 👈 Add this line
        // hostname: "i.pinimg.com" ,
      },
    ],
  },
};

export default nextConfig;
