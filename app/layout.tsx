// layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Children } from "react";
import Link from "next/link";
import ColorChange from "./components/animation/ColorChange";
import ThemeLint from "./components/theme/themelint";
import HeaderMenu from "./components/HeaderMenu.tsx/page";

// for seo
export const metadata: Metadata = {
  metadataBase: new URL("https://coconut-official-website.vercel.app/"),
  title: "CoCoNuT Official Website",
  description: "Official website of CoCoNuT. News, updates and portfolio.",
  keywords: ["coconut", "coconut dev", "coconut website"],
  openGraph: {
    title: "CoCoNuT Official Website | CoCoNuT",
    description: "Official website of CoCoNuT. News, updates and portfolio.",
    url: "https://coconut-official-website.vercel.app",
    siteName: "CoCoNuT",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 549,
      },
    ]
  },
  // icons: {
  //   icon: "/favicon.png",
  // },
  alternates: {
    canonical: "https://coconut-official-website.vercel.app"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en" className="theme-dark" suppressHydrationWarning>
      <head>
        <ThemeLint />
        <meta name="google-site-verification" content="n9f7gWKVxvkDZGS1mVaHIKMDO9x_OCouoxhgSf1zMZk" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "CoCoNuT",
              url: "https://coconut-official-website.vercel.app",
              logo: "https://coconut-official-website.vercel.app/favicon.png"
            }),
          }}
        />

        <meta property="og:site_name" content="CoCoNuT" />
        <meta name="application-name" content="CoCoNuT" />
      </head>

      <body id="app-body" className="flex flex-col min-h-screen font-stretch-75% font-juache">
        <HeaderMenu />

        <main className="flex-1">
          {children}
        </main>
        <footer className="text-center py-2 border-t border-gray-700 flex justify-center">
          <p>© 2025 CoCoNuT. All rights reserved.</p>
        </footer>
      </body>
    </html >
  );
}