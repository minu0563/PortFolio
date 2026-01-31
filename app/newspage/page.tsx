'use client';
import ColorChange from '../components/animation/ColorChange';
import AnimatedSection from "../components/animation/AnimatedSection";
import '../globals.css';
import { newsData } from '../data/newsData';
import NewsCard from '../components/newscard/NewsCard';
import { useState } from 'react';

export default function Home() {
  const [hoveredId, setHoveredID] = useState<number | null>(null);

  return (
    <div className='flex flex-col justify-center items-center'>
      <p className="text-5xl md:text-5xl lg:text-7xl mt-5 mb-5 text-center transition-all duration-500">
        <ColorChange className='gold'>News</ColorChange>
      </p>
      <div className='text-gray-400 flex flex-col justify-center items-center text-m md:text-l lg:text-xl text-center mt-2'>
        <p>Stay updated on the latest CoCoNuT projects,</p>
        <p>including new extensions, web pages, and updates to existing tools.</p>
      </div>

      {/* News 페이지 카드 */}
      <div className="flex flex-col items-center mt-8 w-full">
        {newsData.map((item) => (
          <NewsCard 
            key={item.id} 
            item={item} 
            isHovered={hoveredId === item.id}
            isOtherHovered={hoveredId !== null && hoveredId !== item.id} 
            onHover={() => setHoveredID(item.id)} 
            onLeave={()=> setHoveredID(null)}/>
        ))}
      </div>
    </div>
  );
}

