/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        STORYBLOK_API_TOKEN: 'QEjX74XvAeEmjk4cCFH7Rgtt',
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'picsum.photos',
                port: '',
                pathname: '/seed/**',
            },
        ],
    },
}

module.exports = nextConfig
