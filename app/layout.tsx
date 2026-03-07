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
export const metadata = {
  title: "CoCoNuT Official Website",
  description: "Official website of CoCoNuT. News, updates and portfolio.",
  keywords: ["coconut", "coconut dev", "coconut website", "CoCoNuT", "CoCoNuT Official Website", "CoCoNuT Portfolio", "CoCoNuT News", "CoCoNuT Updates",
    "CoCoNuT Extensions", "CoCoNuT Web Projects", "CoCoNuT Team", "CoCoNuT Community", "coconut extension", "coconut web projects", "coconut team", "coconut community"
  ],
  openGraph: {
    title: "CoCoNuT Official Website",
    description: "Official website of CoCoNuT.",
    url: "https://coconut-official-website.vercel.app",
    siteName: "CoCoNuT",
  },
  icons: {
    icon: "/favicon.png",
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en" className="theme-dark" suppressHydrationWarning>
      <head>
        <ThemeLint />
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