/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'rmtdjrfumsiymxjnoahb.supabase.co',
                port: '',
                pathname: '/storage/v1/object/**',
            },
            {
                protocol: 'https',
                hostname: 'oaidalleapiprodscus.blob.core.windows.net',
                port: '',
                pathname: '/**',
            },
        ],
    }
};

export default nextConfig;
