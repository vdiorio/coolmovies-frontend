/** @type {import('next').NextConfig} */
module.exports = {
  swcMinify: true,
  compiler: {
    emotion: true,
  },
  async rewrites() {
    return [
      {
        source: "/graphql",
        destination:
          process.env.NEXT_PUBLIC_GRAPHQL_URL ||
          "http://localhost:5001/graphql",
      },
    ];
  },
  images: {
    domains: ["upload.wikimedia.org", "images-na.ssl-images-amazon.com"],
  },
  reactStrictMode: true,
};
