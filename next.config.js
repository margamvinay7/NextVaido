/** @type {import('next').NextConfig} */

 
const nextConfig = {
    reactStrictMode:true,
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
      },
    images: {
        // remotePatterns: [
        //     {
        //         protocol: 'https',
                
        //         port: '*',
        //         pathname: '/**',
        //     },
        // ],
        domains: [
            '*',
          ],
    },
}



module.exports = nextConfig
