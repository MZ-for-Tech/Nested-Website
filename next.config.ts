import type { NextConfig } from "next";

const SITE = "https://nestedunited.com";

const nextConfig: NextConfig = {
  output: "standalone",
  allowedDevOrigins: ["restorable-nonconcentrically-katalina.ngrok-free.dev"],
  compress: true,

  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    deviceSizes: [360, 480, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [50, 75, 82, 90],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Link", value: `<${SITE}/sitemap.xml>; rel="sitemap"; type="application/xml"` },
          { key: "Link", value: `<${SITE}/llms.txt>; rel="describedby"; type="text/plain"` },
          { key: "Link", value: `<${SITE}/.well-known/ai-plugin.json>; rel="ai-plugin"` },
          { key: "Link", value: `<${SITE}/.well-known/mcp.json>; rel="mcp"` },
          { key: "Link", value: `<${SITE}/.well-known/agent.json>; rel="agent-capabilities"` },
          { key: "Link", value: `<${SITE}/.well-known/openapi.json>; rel="api-catalog"` },
          { key: "Link", value: `<${SITE}/.well-known/oauth-authorization-server>; rel="oauth-authorization-server"` },
          { key: "Link", value: `<${SITE}/.well-known/oauth-protected-resource>; rel="oauth-protected-resource"` },
          { key: "X-Payment-Endpoint", value: `${SITE}/.well-known/x402` },
          { key: "Content-Language", value: "ar-SA, en-US" },
          { key: "X-Robots-Tag", value: "index, follow" },
          { key: "X-AI-Accessible", value: "true" },
        ],
      },
      {
        source: "/content.md",
        headers: [
          { key: "Content-Type", value: "text/markdown; charset=utf-8" },
          { key: "Cache-Control", value: "public, max-age=3600, must-revalidate" },
        ],
      },
      {
        source: "/llms.txt",
        headers: [
          { key: "Content-Type", value: "text/plain; charset=utf-8" },
          { key: "Cache-Control", value: "public, max-age=3600, must-revalidate" },
          { key: "Access-Control-Allow-Origin", value: "*" },
        ],
      },
      {
        source: "/.well-known/(.*)",
        headers: [
          { key: "Content-Type", value: "application/json; charset=utf-8" },
          { key: "Cache-Control", value: "public, max-age=3600, must-revalidate" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET, OPTIONS" },
          { key: "Access-Control-Allow-Headers", value: "Content-Type, Authorization" },
        ],
      },
      {
        source: "/ASSETS/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
