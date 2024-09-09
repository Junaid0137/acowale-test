/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'media-cldnry.s-nbcnews.com',
                pathname: '**'
            }
        ]
    }
};

export default nextConfig;
