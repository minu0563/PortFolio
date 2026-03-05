'use client';
import ColorChange from '../components/animation/ColorChange';
import AnimatedSection from "../components/animation/AnimatedSection";
import '../globals.css';
import { newsCardData } from '../data/newsCardData/newsCardData';
import NewsCard from '../components/newsCard/NewsCard';
import { useState, useEffect } from 'react';
import NewsTagSelector from '../components/newsCard/NewsTagSelector';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function Home() {
  const [hoveredId, setHoveredID] = useState<number | null>(null);
  const [currentTag, setCurrentTag] =
    useState<'all' | 'update' | 'released' | 'other' | null>(null);

  const [page, setPage] = useState(1);
  const ITEMS_PER_PAGE = 3;

  const searchParams = useSearchParams();

  // 태그 상태 설정
  useEffect(() => {
    const tagFromURL = (searchParams.get('tag') ?? 'all').toLowerCase();
    const validTags = ['all', 'update', 'released', 'other'];
    const newTag = validTags.includes(tagFromURL) ? (tagFromURL as any) : 'all';
    
    setCurrentTag(newTag);
    setPage(1); // 태그가 바뀌면 항상 1페이지로 리셋
  }, [searchParams]);

  // currentTag가 null이면 렌더링 지연
  if (!currentTag) return null;

  // 필터링
  const filteredNews =
    currentTag === 'all'
      ? newsCardData
      : currentTag === 'update' || currentTag === 'released'
      ? newsCardData.filter(item => item.tag.toLowerCase() === currentTag)
      : newsCardData.filter(
          item => !["update", "released"].includes(item.tag.toLowerCase())
        );

  // 페이지 계산
  const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);
  const paginatedNews = filteredNews.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <div className='flex flex-col items-center px-6'>
      {/* Header */}
      <section className="mt-32 mb-5 text-center">
        <AnimatedSection>
          <h1 className="text-6xl gold font-bold">
            <ColorChange animate>News</ColorChange>
          </h1>
        </AnimatedSection>
        <div className="mt-6 text-xl text-gray-400 max-w-2xl">
          <p>Stay updated with CoCoNuT updates and releases.</p>
        </div>
      </section>

      {/* 태그 선택 */}
      <div className="fixed bottom-10 right-8 z-50">
        <NewsTagSelector />
      </div>

      {/* 뉴스 카드 */}
      <div className="flex flex-col items-center w-full mt-10 mb-10">
        {paginatedNews.map((item, index) => (
          <div key={item.id} className="w-full max-w-4xl mb-5">
            <Link href={`/newspage/${item.newspagelink}`}>
              <AnimatedSection delay={Math.min(index * 200, 500)} anitype={1}>
                <NewsCard
                  item={item}
                  isHovered={hoveredId === item.id}
                  isOtherHovered={hoveredId !== null && hoveredId !== item.id}
                  onHover={() => setHoveredID(item.id)}
                  onLeave={() => setHoveredID(null)}
                />
              </AnimatedSection>
            </Link>
          </div>
        ))}
      </div>
      
      {/* 페이지네이션 */}
      {totalPages > 1 && (
        <div className="flex items-center gap-6 mb-40 text-white">
          <button
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={page === 1}
            className={`${page === 1 ? "opacity-30" : "hover:opacity-70"} px-4 py-2`}
          >
            &lt;
          </button>

          <span className="text-lg">{page} / {totalPages}</span>

          <button
            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className={`${page === totalPages ? "opacity-30" : "hover:opacity-70"} px-4 py-2`}
          >
            &gt;
          </button>
        </div>
      )}
    </div>
  );
}