import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Children } from "react";
import Link from "next/link";
import ColorChange from "./ColorChange";
import ThemeLint from "./themelint";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeLint />
      </head>
      <body id="app-body" className="flex flex-col min-h-screen font-stretch-75% font-juache">
        <header className="flex justify-between items-center border-b border-gray-700 py-2 px-8">
          <Link href='/' className="text-2xl ml-5 sm:ml-21 mg:ml-33 lg:ml-45">
              <h1 className="cursor-pointer font-bold"><ColorChange className="maintext" delay={0}>CoCoNuT</ColorChange></h1>
          </Link>
          <div className="flex mr-2 sm:mr-12 ml:mr-20 lg:mr-30 gap-3 sm:gap-10 ml:gap-15 lg:gap-20 ">
            <Link href='/websitepage' className="cursor-pointer">
              <h4><ColorChange className="texthovercolor" delay={500}>website</ColorChange></h4>
            </Link>
            <Link href='/extensionpage' className="cursor-pointer">
              <h4><ColorChange className="texthovercolor" delay={1000}>extensions</ColorChange></h4>
            </Link>
            <Link href='/newspage' className="cursor-pointer">  
              <h4><ColorChange className="texthovercolor" delay={1500}>news</ColorChange></h4>
            </Link>
            <Link href='/aboutpage' className="cursor-pointer">
              <h4><ColorChange className="texthovercolor" delay={2000}>about</ColorChange></h4>
            </Link>
          </div>
        </header>

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
