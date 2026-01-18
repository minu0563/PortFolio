'use client';
import React, { useEffect, useRef } from 'react';
import './globals.css';

interface ColorChangeProps {
  children: string;
  className?: string;
  animate?: boolean;  // 종료 후 gradient 유지 여부
  delay?: number;     // 초 단위
  duration?: number;  // 애니메이션 시간(ms)
}

const ColorChange: React.FC<ColorChangeProps> = ({
  children,
  className = '',
  animate = true,
  delay = 0,
  duration = 1500,
}) => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const timer = setTimeout(() => {
      // 애니메이션 시작
      el.style.transition = `background-position ${duration}ms linear`;
      el.style.backgroundPosition = '0% 0%';
      el.style.webkitTextFillColor = 'transparent'; // 강조 gradient 활성화

      const finishTimer = setTimeout(() => {
        if (!animate) {
          // animate=false → gradient 제거 + 글자 색상 자연스럽게 복원 (하얀색)
          el.style.transition = 'background-position 0.5s linear, -webkit-text-fill-color 0.5s ease';
          el.style.backgroundPosition = '';
          el.style.webkitTextFillColor = '#fff';
        }
        // animate=true → gradient 유지
      }, duration);

      return () => clearTimeout(finishTimer);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [animate, delay, duration]);

  return (
    <span
      ref={ref}
      className={`color-change ${className}`}
      style={{ backgroundPosition: '100% 0%' }} // 초기 위치
    >
      {children}
    </span>
  );
};

export default ColorChange;
