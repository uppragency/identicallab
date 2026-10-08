/** @type {import('next').NextConfig} */
const nextConfig = {
  // The page relies on imperative DOM behaviours ported 1:1 from the design.
  // Strict Mode double-invokes effects in dev and would bind listeners twice.
  reactStrictMode: false,
  poweredByHeader: false,
};

export default nextConfig;
