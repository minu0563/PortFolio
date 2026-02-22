'use client';

import './globals.css';
import Image from 'next/image';
import AnimatedSection from './components/animation/AnimatedSection';
import Link from 'next/link';
import ColorChange from './components/animation/ColorChange';
import Banner from './components/animation/Banner';
import { useState } from 'react';

export default function Home() {
  const boxes = [
    {
      title: "Welcome to CoCoNuT's main webpage.",
      description:
        "This is where we’ll showcase and organize our various projects, including extensions, websites, and more.",
    },
    {
      title: 'Explore Our Extensions',
      description: "Check out all the useful browser and software extensions we've created.",
    },
    {
      title: 'Visit Our Websites',
      description: 'Discover our web projects, portfolios, and other online work.',
    },
    {
      title: 'Join the Community',
      description: 'Connect with us and share your ideas with the community.',
    },
  ];

  const bgColors = [
    'rgb(167, 66, 210)',
    'rgb(182, 12, 12)',
    'rgba(168, 233, 250, 1)',
    'rgb(88, 245, 67)',
  ];

  const [membersLoaded, setMembersLoaded] = useState(false);

  return (
    <div>
      {/*Banner*/}
      <Banner boxes={boxes} bgColors={bgColors} />

      <div className="mt-12 flex flex-col justify-center items-center text-center">
        {/*소개*/}
        <section>
          <AnimatedSection>
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-medium mt-20 gold">
              <ColorChange duration={1000} animate={true}>
                Welcome to our official website
              </ColorChange>
            </p>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <h4 className="mt-6 sm:pr-30 md:pr-50 lg:pr-80 sm:pl-30 md:pl-60 lg:pl-80 pb-3 text-lg md:text-2xl lg:text-3xl mb-5 border-b border-gray-600">
              This website is dedicated to our past records
            </h4>
          </AnimatedSection>
        </section>

        {/*팀원소개*/}
        <section className={`mb-15 border-b border-gray-600 ${!membersLoaded ? 'mb-300' : ''}`}>
          <AnimatedSection delay={150}>
            <div className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mt-10 gold mb-10'>
              <ColorChange duration={1000} animate={true}>
                Members
              </ColorChange>
            </div>
          </AnimatedSection>

          <div className='flex [&_h4]:text-2xl mb-10 gap-x-40 mb-5 sm:px-20 md:px-30 lg:px-40 xl:px-50'>
            <div>
              <AnimatedSection anitype={1} delay={1000}>
                <h4>
                  Kwawk Do Young
                </h4>
              </AnimatedSection>
              <AnimatedSection anitype={1} delay={1800}>
                <p className='text-gray-400 mt-3'>
                  CoCoNuT's leader,
                  <br/>
                  CoCoNuT's Developer
                </p>
              </AnimatedSection>
            </div>

            <div>
              <AnimatedSection anitype={1} delay={1200}>
                <h4>
                  Park Ju Hyun
                </h4>
              </AnimatedSection>
              <AnimatedSection anitype={1} delay={1900}>
                <p className='text-gray-400 mt-3'>
                  CoCoNuT's Developer
                </p>
              </AnimatedSection>
            </div>

            <div>
              <AnimatedSection anitype={1} delay={1400}>
                <h4>
                  Cho Seung hyun
                </h4>
              </AnimatedSection>
              <AnimatedSection anitype={1} delay={2000} onComplete={() => setMembersLoaded(true)}>
                <p className='text-gray-400 mt-3'>
                  CoCoNuT's Designer
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {membersLoaded && (
          <div>
            <AnimatedSection delay={500}>
              <div className="flex flex-row items-center justify-between border-b border-gray-600 pb-10 sm:px-30 md:px-40 lg:px-60 xl:px-70 mb-10">
                <div className="flex flex-col items-center justify-between">
                  <h4 className="sm:mr-3 md:mr-6 lg:mr-10 text-lg mb-3">
                    So far, we have released one extension <br />
                    and are preparing to launch another soon.
                  </h4>
                  <Link href="/extensionpage">
                    <h4 className="text-lg cursor-pointer gold sm:mr-3 md:mr-6 lg:mr-10">
                      <ColorChange duration={1000} animate={true}>
                        Go to extension page
                      </ColorChange>
                    </h4>
                  </Link>
                </div>
                <Image src="/extension1b.png" alt="This is our extension" width={300} height={140} />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={550}>
              <div className="mb-10">
                <h4 className="mb-8 text-lg">
                  We also have two website ideas in progress,
                  <br />
                  which will be introduced here on our main page.
                </h4>
                <Image src="/webpage1.png" alt="This is our first web idea" width={1200} height={480} />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={550}>
              <div>
                <h4 className="text-lg border-b border-gray-600 pb-10 sm:pr-30 md:pr-50 lg:pr-80 sm:pl-30 md:pl-60 lg:pl-80 mb-10">
                  Stay tuned as we continue to share our work and upcoming projects with you.
                </h4>
              </div>
            </AnimatedSection>
          </div>
        )}
      </div>
    </div>
  );
}
