'use client';

import { useTheme } from "../components/theme/useTheme";
import AnimatedSection from "../components/animation/AnimatedSection";

interface Props {
  page: number;
  setPage: (v: number) => void;
  className?: string;
}

export default function SlideNav({ page, setPage, className = "" }: Props) {
  const { theme } = useTheme();

  const OFFBC =
    theme === 'theme-dark'
      ? 'border-gray-400 text-gray-400'
      : 'border-gray-400 text-gray-400';

  return (
    <div className={`w-full flex justify-between lg:justify-end gap-2 sm:gap-4 ${className}`}>
      
      <AnimatedSection anitype={1} delay={1000}>
        <button
          onClick={() => setPage(0)}
          className={`px-3 sm:px-4 py-2 border ${page === 0 ? "" : OFFBC}`}
        >
          {/* 모바일 */}
          <span className="lg:hidden">&lt;</span>

          {/* 데스크탑 */}
          <span className="hidden lg:inline">Portfolio</span>
        </button>
      </AnimatedSection>

      <AnimatedSection anitype={1} delay={1200}>
        <button
          onClick={() => setPage(1)}
          className={`px-3 sm:px-4 py-2 border ${page === 1 ? "" : OFFBC}`}
        >
          {/* 모바일 */}
          <span className="lg:hidden">&gt;</span>

          {/* 데스크탑 */}
          <span className="hidden lg:inline">Settings</span>
        </button>
      </AnimatedSection>

    </div>
  );
}