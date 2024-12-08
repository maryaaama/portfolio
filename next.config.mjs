
import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'fa'], 
    defaultLocale: 'en', 
    localeDetection: false,
    localePath: path.resolve('./public/locales'), 
  },
  reactStrictMode: true,
};

export default nextConfig;
