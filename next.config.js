/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/subscribeuser',
                destination: `https://us21.api.mailchimp.com/3.0/lists/cad94d9d5a/members`,
            },
        ]
    },
    images: {
        formats: ['image/webp'],
    },
    env: {
        STORYBLOK_API_TOKEN: 'QEjX74XvAeEmjk4cCFH7Rgtt',
        MAILCHIMP_API_KEY: "a967b517a8c4fd93b162ec0d0bb2446b-us21",
        MAILCHIMP_API_SERVER: "us21",
        MAILCHIMP_AUDIENCE_ID: "cad94d9d5a",
        MAILCHIMO_URL: ""
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'picsum.photos',
                port: '',
                pathname: '/**',
            },
        ],
    },
}

module.exports = nextConfig
