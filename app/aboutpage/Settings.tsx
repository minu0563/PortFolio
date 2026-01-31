'use client';

import { useState } from "react";
import AnimatedSection from "../components/animation/AnimatedSection";
import { useTheme } from "../components/theme/useTheme";

export default function Settings() {
  const { theme, setTheme } = useTheme();
  const [showThemeOptions, setShowThemeOptions] = useState(false);
  const [showDeveloperContact, setShowDeveloperContact] = useState(false);

  return (
    <div className={`flex flex-col justify-center items-center h-full`}>
      <h1 className="text-6xl mb-6">Settings</h1>
      
      <AnimatedSection anitype={1} delay={300}>
        <p className="text-gray-400 mb-2 cursor-pointer" onClick={() => setShowThemeOptions(prev => !prev)}>Theme</p>
      </AnimatedSection>

      {showThemeOptions && (
        <div className="flex flex-nol items-center gap-5 mt-1 mb-2">
          <AnimatedSection anitype={1} delay={200}>
            <p onClick={() => setTheme("theme-dark")} className="cursor-pointer">Dark</p>
          </AnimatedSection>

          <AnimatedSection anitype={1} delay={300}>
            <p onClick={() => setTheme("theme-light")} className="cursor-pointer">Light</p>
          </AnimatedSection>
        </div>
      )}

      <AnimatedSection anitype={1} delay={600}>
        <p className="text-gray-400 mb-2 cursor-pointer">Language</p>
      </AnimatedSection>

      <AnimatedSection anitype={1} delay={900}>
        <p className="text-gray-400 cursor-pointer" onClick={() => setShowDeveloperContact(prev => !prev)}>Developer Contact</p>
      </AnimatedSection>

      {showDeveloperContact && (
        <div className="flex flex-nol items-center gap-5 mt-1 mb-2">
          <AnimatedSection anitype={1} delay={200}>
            <p>coconut135711@gmail.com</p>
          </AnimatedSection>
        </div>
      )}
    </div>
  );
}
