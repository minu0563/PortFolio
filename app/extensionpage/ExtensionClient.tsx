'use client';

import Link from 'next/link';
import AnimatedSection from '../components/animation/AnimatedSection';
import ColorChange from '../components/animation/ColorChange';
import StatusColor from '../components/status/page';

const extensions = [
  {
    slug: 'extension1',
    name: 'CoCoNuT: Convenient YouTube Viewing Tools',
    desc: '“Experience multiple useful YouTube features all in one convenient place.”',
    status: 'Released',
  },
  {
    slug: 'extension2',
    name: 'Get CoCoNuT!!',
    desc: '"A clicker game where you obtain coconuts with simple clicks and complete achievements."',
    status: 'Released',
  },
];

export default function ExtensionClient() {
  return (
    <div className="flex flex-col items-center text-center px-6">

      {/* ===== Header ===== */}
      <section className="mt-32 mb-24">
        <AnimatedSection>
          <h1 className="text-6xl gold font-bold">
            <ColorChange animate>
              Extensions
            </ColorChange>
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={150}>
          <p className="mt-6 text-xl text-gray-400 max-w-2xl">
            A collection of tools designed to enhance your experience.
          </p>
        </AnimatedSection>
      </section>

      {/* ===== List ===== */}
      <section className="w-full max-w-4xl mb-40">
        <div className="flex flex-col gap-12">

          {extensions.map((ext, i) => (
            <AnimatedSection key={ext.slug} delay={i * 150}>
              <Link href={`/extensionpage/${ext.slug}`}>
                <div className="border border-gray-600 p-8 cursor-pointer hover:border-gray-400 transition">

                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg md:text-2xl gold">
                      {ext.name}
                    </h2>

                    <span className="text-sm text-gray-400">
                      <StatusColor>
                        {ext.status}
                      </StatusColor>
                    </span>
                  </div>

                  <p className="text-sm md:text-lg text-gray-400 text-left">
                    {ext.desc}
                  </p>

                </div>
              </Link>
            </AnimatedSection>
          ))}

        </div>
      </section>

    </div>
  );
}
