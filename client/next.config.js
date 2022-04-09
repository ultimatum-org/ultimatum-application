/** @type {import('next').NextConfig} */
const nextConfig = {
  serverRuntimeConfig: {
    secret: 'THIS IS USED TO SIGN AND VERIFY JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING'
  },
  reactStrictMode: true,
}

module.exports = nextConfig
