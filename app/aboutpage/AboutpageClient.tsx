'use client';

import { useEffect, useState } from 'react';
import Portfolio from './Portfolio';
import Settings from './Settings';
import SlideNav from './SlideNav';
import { useAboutPageStore } from '../store/aboutPageStore';

export default function AboutpageClient() {
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
              absolute w-full px-6
              ${page === 0 ? "top-[calc(60%-30px)] lg:top-auto lg:bottom-6" : "bottom-2"}
            `}>
          <SlideNav page={page} setPage={setPage} className='' />
        </div>
      </span>
    </div>
  );
}