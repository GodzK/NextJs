/** @type {import('next').NextConfig} */
const nextConfig = {
    // Configure webpack for better compatibility with `fs` usage
    webpack: (config, { isServer }) => {
      if (!isServer) {
        // For webpack 4 (if specifically used)
        if (config.resolve.fallback) {
          config.resolve.fallback.fs = false;
        } else {
          // Default fallback for missing modules (likely webpack 5+)
          config.resolve.fallback = { fs: false };
        }
      }
  
      return config;
    },
  
    // Additional configurations (optional)
    // ... (e.g., assetPrefix, env, etc.)
  };
  
  export default nextConfig;
  