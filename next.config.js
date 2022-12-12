/** @type {import('next').NextConfig} */
const nextConfig = {
  env:{
    siteMeta:{
      title: 'dify',
      description: 'teste description',
      url: 'http://localhost:3000',
      imageUrl: '',
    }
  },
  typescript: { ignoreBuildErrors: true },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
