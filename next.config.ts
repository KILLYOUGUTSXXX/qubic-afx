import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  compiler: {
    removeConsole: false
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  // webpack: (config: any) => {
  //   config.snapshot = {
  //     ...(config.snapshot ?? {}),
  //     managedPaths: [/^(.+?[\\/]node_modules[\\/])(?!@next)/]
  //   }
  //   return config
  // },
  distDir: 'build'
}

export default nextConfig
