/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "gifdb.com",
                port: "",
                pathname: "/images/high/cute-Love-bear-roses-ou7zho5oosxnpo6k.gif"
            }
        ]
    }
};

export default nextConfig;
