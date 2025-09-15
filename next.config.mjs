/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'quicksavevid.com' }],
        destination: 'https://www.quicksavevid.com/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'header', key: 'x-forwarded-proto', value: 'http' }],
        destination: 'https://www.quicksavevid.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;