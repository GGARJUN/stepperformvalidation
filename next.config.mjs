/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export
  trailingSlash: true, // Adds trailing slashes to URLs
  images: {
    unoptimized: true, // Disables image optimization for static export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.giphy.com",
        port: "",
        pathname: "/media/**",
      },
    ],
  },
};

export default nextConfig;
