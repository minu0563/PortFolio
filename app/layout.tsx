// layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Children } from "react";
import Link from "next/link";
import ColorChange from "./components/animation/ColorChange";
import ThemeLint from "./components/theme/themelint";
import HeaderMenu from "./components/HeaderMenu.tsx/page";

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