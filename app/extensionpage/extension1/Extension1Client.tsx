'use client';

import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '../../components/animation/AnimatedSection';
import ColorChange from '../../components/animation/ColorChange';
import { useState } from 'react';
import { FAQData1 } from '@/app/data/FAQData/FAQData1';
import FAQ1 from '@/app/components/FAQ/FAQ1';

export default function Extension1PageClient() {
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
      <section className="mt-32 mb-24 border-b border-gray-600 pb-25">
        <AnimatedSection>
          <h1 className="text-3xl md:text-5xl gold font-bold">
            <ColorChange animate duration={1000}>
              CoCoNuT: Convenient YouTube Viewing Tools
            </ColorChange>
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={150}>
          <p className="mt-6 text-xl text-gray-400 text-center">
            Experience multiple useful YouTube features all in one convenient place.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <a
            href="#install"
            className="inline-block mt-12 px-8 py-4 border border-gray-600 gold hover:bg-gray-800 transition"
          >
            Install Extension
          </a>
        </AnimatedSection>
      </section>

      {/* ================= What it does? ================= */}
      <section className="w-full max-w-5xl mb-32 border-b border-gray-600 pb-25">
        <AnimatedSection>
          <h2 className="text-4xl mb-16">
            What it does?
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <AnimatedSection delay={100}>
            <div className="border border-gray-600 p-6">
              <h3 className="text-xl mb-3 gold">Video Quality Lock</h3>
              <p className="text-gray-400">
                Lock video quality to fit your needs.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="border border-gray-600 p-6">
              <h3 className="text-xl mb-3 gold">PIP mode</h3>
              <p className="text-gray-400">
                You can easily watch the currently playing video in PIP mode.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div className="border border-gray-600 p-6">
              <h3 className="text-xl mb-3 gold">Auto-skip Shorts videos</h3>
              <p className="text-gray-400">
                You can automatically skip Shorts videos.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ================= Screenshot ================= */}
      <section className="mb-32 border-b border-gray-600 pb-25 px-5 sm:px-15 md:px-20 lg:px-45">
        <AnimatedSection>
          <h2 className="text-4xl mb-12">
            Interface Preview
          </h2>
        </AnimatedSection>

        <div className="flex flex-col items-center gap-y-20 md:flex-row md:gap-12">
          <AnimatedSection delay={150}>
            <Image
              src="/extension1b.png"
              alt="Extension settings preview"
              width={300}
              height={420}
              className="border border-gray-600"
            />
          </AnimatedSection>

          <AnimatedSection delay={250}>
            <Image
              src="/extension1w.png"
              alt="Extension settings preview"
              width={300}
              height={420}
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

      {/* ================= How it works ================= */}
      <section className="relative w-full max-w-5xl mx-auto mb-32">
        <AnimatedSection>
          <h2 className="text-4xl mb-12">
            How it works
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <p className="text-lg text-gray-400 mb-4">
            1. Install the extension
          </p>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <p className="text-lg text-gray-400 mb-4">
            2. Open the extension panel
          </p>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <p className="text-lg text-gray-400 mb-4">
            3. Choose the feature you want to use.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <p className="text-lg text-gray-400">
            4. Enjoy a cleaner experience
          </p>
        </AnimatedSection>

        <div className="relative w-full border-b border-gray-600 pb-25"></div>
      </section>

      {/* ================= QnA Link ================= */}
      <section className="relative w-full max-w-5xl mx-auto mb-32">
        <AnimatedSection>
          <h2 className="text-3xl mb-5">
            FAQ
          </h2>
        </AnimatedSection>

        {FAQData1.map((item, idx) => (
          <AnimatedSection key={item.id} delay={idx * 200}>
            <FAQ1 item={item} />
          </AnimatedSection>
        ))}

        <div className="relative w-full border-b border-gray-600 pb-25"></div>
      </section>

      {/* ================= Install ================= */}
      <section id="install" className="mb-10 relative border-b border-gray-600 pb-25 sm:px-30 md:px-45 lg:px-80">
        <AnimatedSection>
          <h2 className="text-4xl mb-8">
            Ready to try it?
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={150}>
          <a
            href="https://chromewebstore.google.com/detail/coconut-%EB%8B%B9%EC%8B%A0%EC%9D%98-%ED%8E%B8%EB%A6%AC%ED%95%9C-%EC%9C%A0%ED%8A%9C%EB%B8%8C-%EC%8B%9C%EC%B2%AD%EC%9D%84-%EC%9C%84/ckdkiedamneebnodcphbohikgccaheon"
            target="_blank"
            className="px-10 py-4 border border-gray-500 gold hover:bg-gray-800 transition"
          >
            Install from Chrome Web Store
          </a>
        </AnimatedSection>
      </section>

      <AnimatedSection delay={350}>
        <div className="flex sm:flex-row justify-between gap-10 sm:gap-50 lg:gap-120 text-sm sm:text-base mb-20">
          <Link
            href="/extensionpage"
            className="gold hover:opacity-70 transition"
          >
            ← Back to extensionpage
          </Link>

          <Link
            href="/extensionpage/extension2"
            className="text-gray-400 hover:text-white transition"
          >
            Go next extension →
          </Link>
        </div>
      </AnimatedSection>

    </div>
  );
}
