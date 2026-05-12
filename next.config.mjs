/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Recommendation images from external sources (Unsplash, Google, etc.)
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      { protocol: "https", hostname: "www.luzern.com" },
      { protocol: "https", hostname: "images.squarespace-cdn.com" },
      { protocol: "https", hostname: "static1.squarespace.com" },
      // Add more as content curation reveals them
      // Sanity image CDN
      { protocol: "https", hostname: "cdn.sanity.io" },
    ],
  },
};

export default nextConfig;
