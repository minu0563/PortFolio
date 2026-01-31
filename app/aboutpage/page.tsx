'use client';

import { useEffect, useState } from 'react';
import Portfolio from './Portfolio';
import Settings from './Settings';
import SlideNav from './SlideNav';
import { useAboutPageStore } from '../store/aboutPageStore';

export default function AboutPage() {
  const [mounted, setMounted] = useState(false);
  const { page, setPage } = useAboutPageStore();

  // 렌더링 클라이언트에서만되게
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; 

  return (
    <div className="relative w-full h-[calc(100vh-120px)] overflow-hidden">
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${page * 100}%)` }}
      >
        <section className="w-full h-full shrink-0">
          <Portfolio />
        </section>

        <section className="w-full h-full shrink-0">
          <Settings />
        </section>
      </div>

      <SlideNav page={page} setPage={setPage} />
    </div>
  );
}
