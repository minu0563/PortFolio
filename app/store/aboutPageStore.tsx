import { create } from 'zustand';

interface AboutPageState {
  page: number;
  setPage: (v: number) => void;
}

const getInitialPage = (): number => {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("aboutpage");
    return saved ? Number(saved) : 0;
  }
  return 0;
};

export const useAboutPageStore = create<AboutPageState>((set) => ({
  page: getInitialPage(),
  setPage: (v) => {
    set({ page: v });
    if (typeof window !== "undefined") {
      localStorage.setItem("aboutpage", String(v));
    }
  },
}));