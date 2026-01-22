'use client';

import AnimatedSection from "../AnimatedSection";

export default function Settings() {
  return (
    <div className="flex flex-col justify-center items-center h-full text-white">
      <h1 className="text-6xl mb-6">Settings</h1>
      
      <AnimatedSection anitype={1} delay={300}>
        <p className="text-gray-400 mb-2">Theme</p>
      </AnimatedSection>

      <AnimatedSection anitype={1} delay={600}>
        <p className="text-gray-400 mb-2">Portfolio Display</p>
      </AnimatedSection>

      <AnimatedSection anitype={1} delay={900}>
        <p className="text-gray-400">User Preferences</p>
      </AnimatedSection>
    </div>
  );
}
