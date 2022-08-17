/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    URL_POST_DATA: process.env.URL_POST_DATA,
    URL_GET_REASON: process.env.NEXT_URL_GET_REASON
  }
}

module.exports = nextConfig
