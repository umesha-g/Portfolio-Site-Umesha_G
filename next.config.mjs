/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    basePath: isProd ? '/Portfolio-Site-Umesha_G' : '',
    output: 'export',
    images:{
        unoptimized:true,
    },
    
    experimental: {
        images: {
            allowFutureImage: true
        }
      },
    
};


export default nextConfig;

