/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
    domains: [],
    unoptimized: true
  },
  async redirects() {
    // Só em produção: deploys de preview continuam acessíveis pelo *.vercel.app
    if (process.env.VERCEL_ENV !== 'production') return []

    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: '.*\\.vercel\\.app' }],
        destination: 'https://thiagodevs.com.br/:path*',
        permanent: true
      }
    ]
  }
}

export default nextConfig
