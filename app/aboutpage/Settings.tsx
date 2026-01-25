'use client';

import AnimatedSection from "../AnimatedSection";

export default function Settings() {
  const setTheme = (theme: "theme-dark" | "theme-light") => {
    const body = document.getElementById("app-body");
    if (!body) return;
    
    body.classList.remove("theme-dark", "theme-light");
    body.classList.add(theme);

    localStorage.setItem("theme", theme);
  }
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <h1 className="text-6xl mb-6">Settings</h1>
      
      <AnimatedSection anitype={1} delay={300}>
        <p className="text-gray-400 mb-2">Theme</p>
        <button onClick={() => setTheme("theme-dark")}>Dark</button>
        <br/>
        <button onClick={() => setTheme("theme-light")}>Light</button>
      </AnimatedSection>

      <AnimatedSection anitype={1} delay={600}>
        <p className="text-gray-400 mb-2">Language</p>
      </AnimatedSection>

      <AnimatedSection anitype={1} delay={900}>
        <p className="text-gray-400">User Preferences</p>
      </AnimatedSection>
    </div>
  );
}
