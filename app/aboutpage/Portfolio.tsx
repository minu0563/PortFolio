'use client';

import { useState } from 'react';
import Link from 'next/link';
import AnimatedSection from "../components/animation/AnimatedSection";
import '../globals.css';
import Image from "next/image";

export default function Portfolio() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="flex flex-col items-center">

      <h1
        className={`text-5xl lg:text-7xl mt-20 mb-10 text-center transition-all duration-500
        ${
          hovered === 1
            ? 'neon-red'
            : hovered === 2
            ? 'neon-blue'
            : 'gold'
        }`}
      >
        Portfolio
      </h1>

      {/* 카드 grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">

        {/* Kwak */}
        <AnimatedSection delay={50}>
          <div
            onMouseEnter={() => setHovered(1)}
            onMouseLeave={() => setHovered(null)}
            className={`p-5 rounded-lg w-64 sm:w-72 lg:w-80 transition-all
            ${
              hovered === 1
                ? 'border-2 border-red-400 shadow-[0_0_15px_rgba(248,113,113,0.8)]'
                : 'border-2 border-gray-400'
            }`}
          >
            <div className="relative w-[200px] sm:w-[230px] lg:w-[275px] mx-auto aspect-[275/370] mb-4">
              <Image
                src="/kwak_v2.jpg"
                alt="kwak"
                fill
                sizes="(max-width: 640px) 200px, (max-width: 1024px) 230px, 275px"
                className="rounded-md object-cover"
              />
            </div>

            <Link
              href="/aboutpage/KwakDoYoung"
              className="block text-center text-[21px] bg-clip-text text-transparent bg-gradient-to-r from-white to-red-400 shadow"
            >
              Kwak Do Young
            </Link>
          </div>
        </AnimatedSection>

        {/* Park */}
        <AnimatedSection delay={100}>
          <div
            onMouseEnter={() => setHovered(2)}
            onMouseLeave={() => setHovered(null)}
            className={`p-5 rounded-lg w-64 sm:w-72 lg:w-80 transition-all
            ${
              hovered === 2
                ? 'border-2 border-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.8)]'
                : 'border-2 border-gray-400'
            }`}
          >
            <div className="relative w-[200px] sm:w-[230px] lg:w-[275px] mx-auto aspect-[275/370] mb-4">
              <Image
                src="/park_v2.jpg"
                alt="park"
                fill
                sizes="(max-width: 640px) 200px, (max-width: 1024px) 230px, 275px"
                className="rounded-md object-cover"
              />
            </div>

            <Link
              href="/githubiscomingsoon"
              className="block text-center text-[21px] bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400 shadow"
            >
              Park Ju Hyun
            </Link>
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
}