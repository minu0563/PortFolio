'use client';

import { useEffect, useState } from "react";
import { useTheme } from "../components/theme/useTheme";
import AnimatedSection from "../components/animation/AnimatedSection";

interface Props {
  page: number;
  setPage: (v: number) => void;
}

export default function SlideNav({ page, setPage }: Props) {
    const { theme } = useTheme();

    const ONBC =
    theme === 'theme-dark'
      ? 'border-white text-white'
      : 'border-black text-black';

    const OFFBC =
    theme === 'theme-dark'
      ? 'border-gray-400 text-gray-400'
      : 'border-gray-400 text-gray-400';

      return (
    <div className="absolute bottom-1 right-8 flex gap-4">
      <AnimatedSection anitype={1} delay={1000}>
        <button
          onClick={() => setPage(0)}
          className={`px-4 py-2 border ${
            page === 0 ? `${ONBC}` : `${OFFBC}`
          }`}
        >
          Portfolio
        </button> 
      </AnimatedSection>
      
      <AnimatedSection anitype={1} delay={1200}>
        <button
          onClick={() => setPage(1)}
          className={`px-4 py-2 border ${
            page === 1 ? `${ONBC}` : `${OFFBC}`
          }`}
        >
          Settings
        </button>
      </AnimatedSection>
    </div>
  );
}
