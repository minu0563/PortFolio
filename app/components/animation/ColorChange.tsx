'use client';
import React, { useEffect, useRef } from 'react';
import '../../globals.css';

interface ColorChangeProps {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
  delay?: number;
  duration?: number;
}

const ColorChange: React.FC<ColorChangeProps> = ({
  children,
  className = '',
  animate = false,
  delay = 0,
  duration = 500,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return;

        hasAnimated.current = true;

        const timer = setTimeout(() => {
          el.classList.add('color-change');
          el.style.animation = `slide-gradient ${duration}ms linear forwards`;

          const finishTimer = setTimeout(() => {
            el.style.animation = '';

            if (!animate) {
              el.classList.remove('color-change');

              if (!className) {
                el.classList.add('color-white');
              }
            }
          }, duration);

          return () => clearTimeout(finishTimer);
        }, delay);

        observer.disconnect();
        return () => clearTimeout(timer);
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [animate, delay, duration, className]);

  return (
    <span ref={ref} className={className}>
      {children}
    </span>
  );
};

export default ColorChange;
