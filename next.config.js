/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        login: "http://localhost:8080",
        events: "http://localhost:8081"
    }
}

module.exports = nextConfig
