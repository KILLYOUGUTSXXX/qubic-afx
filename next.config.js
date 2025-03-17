

/** @type {import('next').NextConfig} */
module.exports = {
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
