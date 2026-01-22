'use client';
import { useEffect, useRef, useState, ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  anitype?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className = "", delay = 0, anitype = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [delay]);

  let animate = '';

  if (anitype === 0) {
    // 위 -> 아래 내려옴
    animate = isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10";
  } else if (anitype === 1) {
    // 아래 -> 위 올라옴
    animate = isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10";
  }

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out transform ${animate}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
