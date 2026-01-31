'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

type BannerProps = {
  boxes: {
    title: string;
    description: string;
  }[];
  bgColors: string[];
};

export default function Banner({ boxes, bgColors }: BannerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationClass, setAnimationClass] = useState('');
  const [bgAnimClass, setBgAnimClass] = useState('bg-anim-in');
  const [bgColor, setBgColor] = useState(bgColors[0]);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const changeBox = (newIndex: number) => {
    if (isAnimating) return;

    setIsAnimating(true);
    setAnimationClass('animate-fadeUpOut');
    setBgAnimClass('bg-anim-out');

    if (timerRef.current) clearTimeout(timerRef.current);

    setTimeout(() => {
      setCurrentIndex(newIndex);
      setBgColor(bgColors[newIndex]);
      setBgAnimClass('bg-anim-in');

      setAnimationClass('');
      setIsAnimating(false);

      startAutoChange();
    }, 1100);
  };

  const nextBox = () => changeBox((currentIndex + 1) % boxes.length);
  const prevBox = () => changeBox((currentIndex - 1 + boxes.length) % boxes.length);

  const startAutoChange = () => {
    timerRef.current = setTimeout(() => {
      nextBox();
    }, 8000);
  };

  useEffect(() => {
    startAutoChange();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [currentIndex]);

  return (
    <div
      className={`pt-60 pb-70 ${bgAnimClass} w-full`}
      style={{
        '--bg-color': bgColor,
        height: 'min(80vw, 90vh)',
      } as React.CSSProperties}
    >
      <div className="flex justify-center items-start">
        <p className="text-7xl sm:text-7xl md:text-8xl lg:text-9xl font-bold font-geist animate-fadeUp">
          CoCoNuT
        </p>
      </div>

      <div className="flex animate-fadeup-3">
        <Image src="/ARROW-L.png" alt="" width={40} height={40} className="ml-5 cursor-pointer" onClick={prevBox} />
        <Image src="/ARROW-R.png" alt="" width={40} height={40} className="ml-auto mr-5 cursor-pointer" onClick={nextBox}/>
      </div>

      <div className="flex flex-col justify-center items-center text-center">
        <p className={`text-xl sm:text-2xl font-bold mt-8 animate-fadeup-2 ${animationClass}`}>
          {boxes[currentIndex].title}
        </p>
        <p className={`mt-4 text-lg animate-fadeup-3 ${animationClass}`}>
          {boxes[currentIndex].description}
        </p>
      </div>
    </div>
  );
}
