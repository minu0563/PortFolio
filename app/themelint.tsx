'use client';

export default function ThemeLint() {
  const script = `
    (() => {
      try {
        const theme = localStorage.getItem("theme") || "theme-dark";

        document.documentElement.classList.remove("theme-dark", "theme-light");
        document.documentElement.classList.add(theme);
      } catch (e) {
        console.error(e);
      }
    })();
  `;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
