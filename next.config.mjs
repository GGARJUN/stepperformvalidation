/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "media.giphy.com",
            port: "", // Leave empty for default port (HTTPS uses 443)
            pathname: "/media/**", // Allow all paths under /media/
          },
        ],
      },
};

export default nextConfig;
