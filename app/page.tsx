'use client';
import './globals.css';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import AnimatedSection from './AnimatedSection';
import Link from "next/link";

export default function Home() {
  const boxes = [
    {
      title: "Welcome to CoCoNuT's main webpage.",
      description: "This is where we’ll showcase and organize our various projects, including extensions, websites, and more."
    },
    {
      title: "Explore Our Extensions",
      description: "Check out all the useful browser and software extensions we've created."
    },
    {
      title: "Visit Our Websites",
      description: "Discover our web projects, portfolios, and other online work."
    },
    {
      title: "Join the Community",
      description: "Connect with us and share your ideas with the community."
    },
  ];

  const bgColors = [
    'rgb(167, 66, 210)',
    'rgb(182, 12, 12)',
    'rgba(168, 233, 250, 1)',
    'rgb(88, 245, 67)',
  ];

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
    <div>
      <div
        className={`pt-60 pb-70 ${bgAnimClass}`}
        style={{ '--bg-color': bgColor } as React.CSSProperties}
      >
        <div className="flex justify-center items-start">
          <p className="text-7xl sm:text-7xl md:text-8xl lg:text-9xl font-bold font-geist animate-fadeUp">
            CoCoNuT
          </p>
        </div>
        <div className="flex animate-fadeup-3">
          <Image src="/ARROW-L.png" alt="" width={40} height={40} className="ml-5 cursor-pointer" onClick={prevBox} />
          <Image src="/ARROW-R.png" alt="" width={40} height={40} className="ml-auto mr-5 cursor-pointer" onClick={nextBox} />
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
      <div className="mt-12 flex flex-col justify-center items-center text-center">
        <AnimatedSection>
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-medium mt-20 gold">
            Welcome to our official website
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <h4 className="mt-6 sm:pr-30 md:pr-50 lg:pr-80 sm:pl-30 md:pl-60 lg:pl-80 pb-3 text-lg md:text-2xl lg:text-3xl mb-15 border-b border-gray-600">
            This website is dedicated to our past records
          </h4>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className='flex flex-row items-center justify-between border-b border-gray-600 pb-10 sm:pr-30 md:pr-40 lg:pr-60 xl:pr-80 sm:pl-30 md:pl-40 lg:pl-60 xl:pl-80 mb-10'>
            <div className='flex flex-col items-center justify-between'>
              <h4 className='sm:mr-3 md:mr-6 lg:mr-10 text-lg mb-3'>
                So far, we have released one extension <br /> and are preparing to launch another soon.
              </h4>
              <Link href='/extensionpage'>
                <h4 className='text-lg cursor-pointer gold sm:mr-3 md:mr-6 lg:mr-10'>
                  Go to extension page
                </h4>
              </Link>
            </div>
            <Image src="/extension.png" alt="This is our extension" width={300} height={140} />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className='mb-10'>
            <h4 className='mb-8 text-lg'>
              We also have two website ideas in progress,<br /> which will be introduced here on our main page.
            </h4>
            <Image src='/webpage1.png' alt='This is our first web idea' width={1200} height={480} />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div>
            <h4 className='text-lg border-b border-gray-600 pb-10 sm:pr-30 md:pr-50 lg:pr-80 sm:pl-30 md:pl-60 lg:pl-80 mb-10'>
              Stay tuned as we continue to share our work and upcoming projects with you.
            </h4>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
