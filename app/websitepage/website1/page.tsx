'use client';

import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '../../components/animation/AnimatedSection';
import ColorChange from '../../components/animation/ColorChange';
import { useState } from 'react';
import { FAQData1 } from '@/app/data/FAQData/FAQData1';
import FAQ1 from '@/app/components/FAQ/FAQ1';

export const metadata = {
  title: "CoCoNuT's Official Website | CoCoNuT",
  description: "Explore CoCoNuT's Official Website Projects.",
};

export default function ExtensionPage() {
  const [qnaVisibility, setQnaVisibility] = useState([false, false, false]);

  const toggleQnaVisibility = (index: number) => {
    setQnaVisibility((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };
  return (
    <div className="flex flex-col items-center text-center px-6">

      {/* ================= extension제목 ================= */}
      <section className="mt-32 mb-24 border-b border-gray-600 pb-10">
        <AnimatedSection>
          <h1 className="text-3xl md:text-5xl gold font-bold">
            <ColorChange animate duration={1000}>
              CoCoNuT Official Website
            </ColorChange>
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={150}>
          <p className="mt-6 text-xl text-gray-400 text-center">
            This website showcases our team project and individual portfolios.
          </p>
        </AnimatedSection>
      </section>

      {/* ================= What it does? ================= */}
      <section className="w-full max-w-6xl mb-32 border-b border-gray-600 pb-25">
        <AnimatedSection>
          <h2 className="text-4xl mb-16">
            Features
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <AnimatedSection delay={100}>
            <div className="border border-gray-600 p-6 h-full flex flex-col">
              <h3 className="text-xl mb-3 gold">Website Page</h3>
              <p className="text-gray-400">
                Explanation of the Web Page
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="border border-gray-600 p-6 h-full flex flex-col">
              <h3 className="text-xl mb-3 gold">Extension Page</h3>
              <p className="text-gray-400">
                Explanation of the Extension Page
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div className="border border-gray-600 p-6 h-full flex flex-col">
              <h3 className="text-xl mb-3 gold">News Page</h3>
              <p className="text-gray-400">
                For posting updates and release information about our project.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            <div className="border border-gray-600 p-6 h-full flex flex-col">
              <h3 className="text-xl mb-3 gold">About Page</h3>
              <p className="text-gray-400">
                For managing settings and viewing portfolio content.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ================= Screenshot ================= */}
      <section className="mb-20 border-b border-gray-600 pb-25">
        <AnimatedSection>
          <h2 className="text-4xl mb-12">
            Interface Preview
          </h2>
        </AnimatedSection>

        <div className="flex flex-col items-center gap-y-20 md:flex-row md:gap-12">
          <AnimatedSection delay={150}>
            <Image
              src="/kwakp5_v2.png"
              alt="Extension settings preview" 
              width={1020}
              height={720}
              className="border border-gray-600"
            />
          </AnimatedSection>
        </div>

        <AnimatedSection delay={300}>
          <p className="mt-6 text-gray-400">
            The same clean design you see on our website.
          </p>
        </AnimatedSection>
      </section>

      <AnimatedSection delay={350}>
        <div className="flex sm:flex-row justify-between text-sm sm:text-base mb-20">
          <Link
            href="/websitepage"
            className="gold hover:opacity-70 transition"
          >
            ← Back to webpage
          </Link>
        </div>
      </AnimatedSection>

    </div>
  );
}
