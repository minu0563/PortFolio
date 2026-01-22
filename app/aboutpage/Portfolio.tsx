'use client';

import { useState } from 'react';
import Link from 'next/link';
import AnimatedSection from "../AnimatedSection";
import '../globals.css';
import Image from "next/image";

export default function Portfolio() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <h1
        className={`text-5xl lg:text-7xl mt-5 mb-5 text-center transition-all duration-500 
          ${
            hovered === 1
              ? 'bg-clip-text text-transparent bg-gradient-to-r from-white to-red-400'
              : hovered === 2
              ? 'bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400'
              : 'gold'
          }`}
      >
        Portfolio
      </h1>

      <div className="flex flex-wrap justify-center gap-8 mt-10">

        {/* KwakDoYoung */}
        <AnimatedSection delay={50}>
          <div
            onMouseEnter={() => setHovered(1)}
            onMouseLeave={() => setHovered(null)}
            className={`p-5 rounded-lg w-80 transition-all
              ${
                hovered === 1
                  ? 'border-2 border-red-400 shadow-[0_0_15px_rgba(248,113,113,0.8)]'
                  : 'border-2 border-gray-400'
              }`}
          >
          <div className="relative w-[275px] aspect-[275/370] mb-4">
            <Image src="/kwak.jpg" alt="kwak" fill className="rounded-md object-cover" />
          </div>
            <Link href="/aboutpage/KwakDoYoung" className="block text-center text-[21px] bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-white">
              Kwak Do Young
            </Link>
          </div>
        </AnimatedSection>
        
        {/* ParkJuHyun */}
        <AnimatedSection delay={100}>
          <div
            onMouseEnter={() => setHovered(2)}
            onMouseLeave={() => setHovered(null)}
            className={`p-5 rounded-lg w-80 transition-all
              ${
                hovered === 2
                  ? 'border-2 border-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.8)]'
                  : 'border-2 border-gray-400'
              }`}
          >
            <div className="relative w-[275px] aspect-[275/370] mb-4">
              <Image src="/park.jpg" alt="park" fill className="rounded-md object-cover" />
            </div>
            <Link href="/aboutpage/ParkJuHyun" className="block text-center text-[21px] bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-white">
              Park Ju Hyun
            </Link>
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
}
