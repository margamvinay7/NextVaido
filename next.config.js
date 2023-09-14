/** @type {import('next').NextConfig} */

 
const nextConfig = {
    reactStrictMode:true,
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
      },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'localhost:3000',
                port: '3000',
                pathname: '/**',
            },
        ],
        domains: [
            'https://vaido.vercel.app/',
          ],
    },
}



module.exports = nextConfig
