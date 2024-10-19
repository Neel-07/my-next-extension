/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // This enables static export
  trailingSlash: true,  // Adds trailing slash for URLs, required for static exports
  reactStrictMode: true,
};

export default nextConfig;
