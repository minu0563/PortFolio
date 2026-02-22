'use client';
import ColorChange from '../components/animation/ColorChange';
import AnimatedSection from "../components/animation/AnimatedSection";
import '../globals.css';
import { newsData } from '../data/newsData/newsData';
import NewsCard from '../components/news/NewsCard';
import { useState, useEffect } from 'react';
import { useTheme } from '../components/theme/useTheme';
import NewsTagSelector from '../components/news/NewsTagSelector';
import { useSearchParams } from 'next/navigation';

export default function Home() {
  const [hoveredId, setHoveredID] = useState<number | null>(null);
  const [currentTag, setCurrentTag] = useState<'all' | 'update' | 'released' | 'other'>('all');
  const { theme } = useTheme();

  // URL에서 태그 가져오기
  const searchParams = useSearchParams();

  useEffect(() => {
    const tagFromURL = (searchParams.get('tag') ?? 'all').toLowerCase();
    const validTags = ['all', 'update', 'released', 'other'];
    const safeTag = validTags.includes(tagFromURL) ? tagFromURL : 'all';
    setCurrentTag(safeTag as 'all' | 'update' | 'released' | 'other');
  }, [searchParams]);

  // 필터링
  const filteredNews =
    currentTag === 'all'
      ? newsData
      : currentTag === 'update' || currentTag === 'released'
        ? newsData.filter(item => item.tag.toLowerCase() === currentTag)
        : newsData.filter(item => !["update", "released"].includes(item.tag.toLowerCase()));

  const ONBC =
    theme === 'theme-dark'
      ? 'border-white text-white'
      : 'border-black text-black';

  const OFFBC =
    theme === 'theme-dark'
      ? 'border-gray-400 text-gray-400'
      : 'border-gray-400 text-gray-400';

  return (
    <div className='flex flex-col items-center px-6'>
      {/* ===== Header ===== */}
      <section className="mt-32 mb-12 text-center">
        <AnimatedSection>
          <h1 className="text-6xl gold font-bold">
            <ColorChange animate>
              News
            </ColorChange>
          </h1>
        </AnimatedSection>
        <div className="mt-6 text-xl text-gray-400 max-w-2xl">
          <AnimatedSection delay={150}>
            <p>
              Stay updated on the latest CoCoNuT projects,
            </p>
          </AnimatedSection>
          <AnimatedSection delay={400}>
            <p>including new extensions, web pages, and updates to existing tools.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* 뉴스 카드 */}
      <div className="flex flex-col items-center w-full mt-5">
        {filteredNews.map((item, index) => (
          <div key={item.id} className="w-full max-w-5xl">
            <AnimatedSection delay={index * 200} anitype={1}>
              <NewsCard
                item={item}
                isHovered={hoveredId === item.id}
                isOtherHovered={hoveredId !== null && hoveredId !== item.id}
                onHover={() => setHoveredID(item.id)}
                onLeave={() => setHoveredID(null)}
              />
            </AnimatedSection>
          </div>
        ))}
      </div>

      {/* 태그 선택 */}
      <div className="absolute bottom-20 right-8">
        <NewsTagSelector />
      </div>
    </div>
  );
}
