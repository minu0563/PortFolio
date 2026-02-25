'use client';

import { useEffect, useState } from 'react';
import Portfolio from './Portfolio';
import Settings from './Settings';
import SlideNav from './SlideNav';
import { useAboutPageStore } from '../store/aboutPageStore';

export default function AboutPage() {
  const [mounted, setMounted] = useState(false);
  const { page, setPage } = useAboutPageStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative w-full overflow-x-hidden">
      <div className="flex transition-transform duration-700 ease-in-out">
        <section
          className={`w-full shrink-0 min-h-[calc(100vh-120px)] flex flex-col ${page === 0 ? 'justify-center items-center' : 'hidden'
            }`}
        >
          <Portfolio />
        </section>

        <section
          className={`w-full shrink-0 min-h-[calc(100vh-120px)] flex items-center justify-center ${page === 1 ? 'flex' : 'hidden'
            }`}
        >
          <Settings />
        </section>
      </div>
      <span className='@container'>
        <div
          className={`
              absolute
              ${page === 0 ? "top-30 right-27 sm:right-5 @4xl:top-55" : "bottom-2 right-2"} 
              2xl:bottom-4 2xl:right-8
            `}
        >
          <SlideNav page={page} setPage={setPage} className={`${page === 1 ? 'gap-60 sm:gap-4' : ''}`} />
        </div>
      </span>
    </div>
  );
}