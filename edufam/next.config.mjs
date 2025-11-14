/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React Compiler
  reactCompiler: true,

  // Add custom headers for specific image types
  async headers() {
    return [
      {
        source: "/(.*).(png|jpg|jpeg|gif|svg|webp)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          }
        ]
      }
    ];
  }
};

export default nextConfig;
