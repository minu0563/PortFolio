'use client';

import { useEffect, useState } from "react";

type ThemeType = 'theme-dark' | 'theme-light';

// localStorage ssr에서 접근 못함;
export const useTheme = () => {
  const [theme, setThemeState] = useState<ThemeType>('theme-dark');

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme") as ThemeType | null;
      if (savedTheme) {
        setThemeState(savedTheme);
        document.documentElement.classList.add(savedTheme); 
      } else {
        setThemeState('theme-dark');
        document.documentElement.classList.add('theme-dark');
      }
    }
  }, []);

  const setTheme = (newTheme: ThemeType) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newTheme);  
      setThemeState(newTheme);
      document.documentElement.classList.remove('theme-dark', 'theme-light'); 
      document.documentElement.classList.add(newTheme); 
      if (newTheme !== theme) {
        window.location.reload();
      }
    }
  };

  return { theme, setTheme };
};

export const getTheme = (): ThemeType => {
  if (typeof window === "undefined") return 'theme-dark';
  const saved = localStorage.getItem("theme") as ThemeType | null;
  return saved ?? 'theme-dark';
};