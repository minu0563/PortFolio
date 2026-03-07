export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://coconut-official-website.vercel.app/sitemap.xml",
  };
}