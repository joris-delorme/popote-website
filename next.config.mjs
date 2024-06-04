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
<<<<<<< HEAD
            {
=======
{
>>>>>>> 124b5be698e8ec9653c853601d763fe4fc8e5fe7
                protocol: 'https',
                hostname: 'oaidalleapiprodscus.blob.core.windows.net',
                port: '',
                pathname: '/**',
            },
        ],
    }
};

export default nextConfig;
