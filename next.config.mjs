import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'fa'], 
    defaultLocale: 'en', 
    localeDetection: false,
    // Remove 'localePath' as it is not supported in next.config.js

  },
  reactStrictMode: true,
};

export default nextConfig;
