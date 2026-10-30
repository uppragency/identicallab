/** @type {import('next').NextConfig} */
const nextConfig = {
  // The page relies on imperative DOM behaviours ported 1:1 from the design.
  // Strict Mode double-invokes effects in dev and would bind listeners twice.
  reactStrictMode: false,
  poweredByHeader: false,
  // Unknown URLs render app/global-not-found.tsx, because the site has several root layouts and a [lang] root segment.
  experimental: { globalNotFound: true },
};

export default nextConfig;
