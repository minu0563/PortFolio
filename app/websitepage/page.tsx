'use client';

import Link from 'next/link';
import AnimatedSection from '../components/animation/AnimatedSection';
import ColorChange from '../components/animation/ColorChange';
import StatusColor from '../components/status/page';

const websites = [
  {
    slug: 'website1',
    name: 'CoCoNuT',
    desc: '“This website showcases our team project and individual portfolios.”',
    status: 'Released',
  },
];

export default function WebSite() {
  return (
    <div className="flex flex-col items-center text-center px-6">

      {/* ===== Header ===== */}
      <section className="mt-32 mb-24">
        <AnimatedSection>
          <h1 className="text-6xl gold font-bold">
            <ColorChange animate>
              Web Sites
            </ColorChange>
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={150}>
          <p className="mt-6 text-xl text-gray-400 max-w-2xl">
            A collection of web pages developed by CoCoNuT, showcasing our projects and ideas.
          </p>
        </AnimatedSection>
      </section>

      {/* ===== List ===== */}
      <section className="w-full max-w-4xl mb-40">
        <div className="flex flex-col gap-12">

          {websites.map((web, i) => (
            <AnimatedSection key={web.slug} delay={i * 150}>
              <Link href={`/websitepage/${web.slug}`}>
                <div className="border border-gray-600 p-8 cursor-pointer hover:border-gray-400 transition">

                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl gold">
                      {web.name}
                    </h2>

                    <span className="text-sm text-gray-400">
                      <StatusColor>
                        {web.status}
                      </StatusColor>
                    </span>
                  </div>

                  <p className="text-gray-400 text-left">
                    {web.desc}
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
