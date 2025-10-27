"use client"

import { useState } from "react";
import Link from "next/link";
import AnimatedSection from "../AnimatedSection";
import "../globals.css";

export default function Home() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1
        className={`text-5xl md:text-5xl lg:text-7xl mt-5 mb-5 text-center transition-all duration-500 
          ${hovered === 1 
            ? "bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-white" 
            : hovered === 2 
              ? "bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-white" 
              : "gold"}`}
      >
        PortFolio
      </h1>

      <AnimatedSection>
        <p className="text-sm sm:text-xl md:text-2xl lg:text-3xl text-center max-w-3xl px-4">
          This is our portfolio page where you can find all our projects and works.
        </p>
      </AnimatedSection>

      <div className="flex flex-wrap justify-center items-start gap-8 mt-10 w-full px-4">
        <AnimatedSection delay={50}>
          <div
            onMouseEnter={() => setHovered(1)}
            onMouseLeave={() => setHovered(null)}
            className={`flex flex-col justify-center items-center p-5 rounded-lg space-y-4 w-64 sm:w-72 md:w-80 lg:w-96 transition-all duration-300
              ${hovered === 1 
                ? "border-2 border-red-400 shadow-[0_0_15px_rgba(248,113,113,0.8)]" 
                : "border-2 border-gray-400"}`}
          >
            <svg className="w-full h-auto" viewBox="0 0 400 400">
              <image href="/kwak.jpg" width="400" height="400" />
            </svg>
            <Link
              href="/aboutpage/KwakDoYoung"
              className="px-4 py-2 rounded-lg border-2 border-gray-400 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-white font-medium text-center w-full"
            >
              Kwak Do Young
            </Link>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div
            onMouseEnter={() => setHovered(2)}
            onMouseLeave={() => setHovered(null)}
            className={`flex flex-col justify-center items-center p-5 rounded-lg space-y-4 w-64 sm:w-72 md:w-80 lg:w-96 transition-all duration-300
              ${hovered === 2 
                ? "border-2 border-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.8)]" 
                : "border-2 border-gray-400"}`}
          >
            <svg className="w-full h-auto" viewBox="0 0 400 400">
              <image href="/park.jpg" width="400" height="400" />
            </svg>
            <Link
              href="/aboutpage/ParkJuHyun"
              className="px-4 py-2 rounded-lg border-2 border-gray-400 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-white font-medium text-center w-full"
            >
              Park Ju Hyun
            </Link>
          </div>
        </AnimatedSection>
      </div>

      <div className="pb-15 border-b-2 border-gray-500 w-2/3 mt-2"></div>
    </div>
  );
}
