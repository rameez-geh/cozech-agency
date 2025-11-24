/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

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
