/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'rmtdjrfumsiymxjnoahb.supabase.co',
              port: '',
              pathname: '/storage/v1/object/public/users_recipes/**',
            },
          ],
    }
};

export default nextConfig;
