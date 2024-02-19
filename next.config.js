/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'scss')],
      },
      env: {
        development: "http://localhost:8010",
        ACCESS_TOKEN: "accessToken",//'CREATE', 'UPDATE', 'DELETE', 'ACTIVE'
      },
      images: {
        domains: ["localhost"]
      }
}

module.exports = nextConfig
