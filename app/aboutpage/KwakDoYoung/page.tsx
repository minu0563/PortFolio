'use client';
import AnimatedSection from '../../components/animation/AnimatedSection';
import Image from 'next/image';
import Link from 'next/link';
import { getTheme } from '@/app/components/theme/useTheme';
import { useEffect, useState } from 'react';
import ColorChange from '@/app/components/animation/ColorChange';

export default function Home() {
  const nowTheme = getTheme();
  const [boxColor, setBoxColor] = useState('');

  useEffect(() => {
    if (nowTheme === "theme-dark") {
      setBoxColor('bg-gray-900 border border-gray-200');
    } else {
      setBoxColor('bg-gray-200 border border-gray-900')
    }
  }, [nowTheme]);

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <AnimatedSection delay={100} className="text-center py-16 md:py-24">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Kwak Do Young
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-pink-500 to-blue-600 mb-6">
          Developer Exploring Web Usability & Artificial Intelligence
        </h2>
        <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            Aspiring Frontend Developer building web applications with Next.js and TypeScript, <br/> focusing on responsive design and delivering intuitive UI/UX experiences.       
        </p>
        <div className="flex justify-center gap-4">
          <AnimatedSection delay={800} className='mt-3'>
            <Link href="#projects" className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors">
              View Projects
            </Link> 
          </AnimatedSection>
          
          <AnimatedSection delay={1000} className='mt-3'> 
            <Link href="https://github.com/minu0563" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-900 transition-colors">
              Visit GitHub
            </Link>
          </AnimatedSection>
        </div>
      </AnimatedSection>

      <hr className="my-12 md:my-16" />

      {/* Programming Study Section */}
      <section id="study" className="">
        <h2 className="text-4xl font-bold text-center mb-12 gold">
          <ColorChange animate={true}>
            Programming Study
          </ColorChange>
        </h2>
        <AnimatedSection delay={100} className={`${boxColor} rounded-lg shadow-xl overflow-hidden p-8`}>
          <div className="relative w-full aspect-[16/9] max-h-[400px] mb-6">
            <img
              src="/kwakp1.png"
              alt="Baekjoon Online Judge"
              className="object-contain"
            />
          </div>
          <p className="mb-6 text-center">
            Studied algorithmic problem-solving using <strong>Python</strong> and <strong>C</strong> through <strong>Baekjoon</strong> Online Judge.
            <br />Solutions and codes are archived on GitHub.
          </p>
          <div className="flex justify-center gap-20">
            <Link href="https://github.com/minu0563/baekjoon" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors">
              Github
            </Link>
            <Link href="https://solved.ac/profile/minu080908" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-600 transition-colors">
              Solved.ac
            </Link>
          </div>
        </AnimatedSection>
      </section>

      <hr className="my-12 md:my-16" />

      {/* Projects(Extension) Section */}
      <section id="projects" className="py-16">
        <h2 className="text-4xl font-bold text-center mb-12 gold">
          <ColorChange animate={true}>
            Project - extension
          </ColorChange>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Project 1 */}
          <AnimatedSection delay={200} className={`${boxColor} rounded-lg shadow-xl overflow-hidden`}>
            <div className='relative w-full h-[300px] '>
              <Image src="/kwakp2.png" alt="project1" fill className="object-contain pr-5 pl-5" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">YouTube Convenience Extension</h3>
              <p className="mb-4">
                Developed a Chrome extension to improve the YouTube viewing experience by solving daily inconveniences.
                Reached over <strong>8,000 visitors</strong> and <strong>600 active users</strong>.
              </p>
              <ul className="list-disc list-inside mb-6">
                <li>Auto-adjusts video quality</li>
                <li>One-click Picture-in-Picture (PIP) mode</li>
                <li>Auto-skip for YouTube Shorts ads</li>
              </ul>
              <p>Tech Stack:</p>
              <ul className="list-disc list-inside mb-6">
                <li>html, css, js</li>
              </ul>
              <div className="flex gap-4">
                <Link href="https://chromewebstore.google.com/detail/coconut-%EB%8B%B9%EC%8B%A0%EC%9D%98-%ED%8E%B8%EB%A6%AC%ED%95%9C-%EC%9C%A0%ED%8A%9C%EB%B8%8C-%EC%8B%9C%EC%B2%AD%EC%9D%84-%EC%9C%84/ckdkiedamneebnodcphbohikgccaheon?hl=ko"
                  target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700">
                  Store
                </Link>
                <Link href="/extensionpage" className="bg-white text-black px-4 py-2 rounded-md font-semibold hover:bg-gray-200">
                  extension
                </Link>
                <Link href="https://github.com/minu0563/CoCoNuT_Youtube" rel="noopener noreferrer" className="bg-gray-800 text-white px-4 py-2 rounded-md font-semibold hover:bg-gray-900">
                  GitHub
                </Link>
              </div>
            </div>
          </AnimatedSection>

          {/* Project 2 */}
          <AnimatedSection delay={200} className={`${boxColor} rounded-lg shadow-xl overflow-hidden`}>
            <div className='relative w-full h-[300px] '>
              <Image src="/kwakp3_v2.png" alt="project2" fill className="object-contain pr-5 pl-5" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">Clicker Game Extension</h3>
              <p className="mb-4">
               Developed a Chrome extension to help users pass time and reduce boredom during their free moments.
              Achieved over <strong>2,000</strong> visits and <strong>200</strong> active users.
              </p>
              <ul className="list-disc list-inside mb-6">
                <li>Obtain coconuts with simple clicks</li>
                <li>Simple gacha game using coconuts</li>
                <li>Coconut stock system</li>
              </ul>
              <p>Tech Stack:</p>
              <ul className="list-disc list-inside mb-6">
                <li>html, css, js</li>
              </ul>
              <div className="flex gap-4">
                <Link href="https://chromewebstore.google.com/detail/get-coconut/hebdcmlfkpcjgjkaeifikhpnkbndalla?hl=ko&utm_source=ext_sidebar"
                  target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700">
                  Store
                </Link>
                <Link href="/extensionpage" className="bg-white text-black px-4 py-2 rounded-md font-semibold hover:bg-gray-200">
                  extension
                </Link>
                <Link href="https://github.com/minu0563/CoCoNuT_clickgame" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white px-4 py-2 rounded-md font-semibold hover:bg-gray-900">
                  GitHub
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <hr className="my-12 md:my-16" />

      {/* project(web) Section */}
      <section id="awards" className="py-16">
        <h2 className="text-4xl font-bold text-center mb-12 gold">
          <ColorChange animate={true}>
            Project - Web 
          </ColorChange>
        </h2>
        <AnimatedSection delay={100} className={`${boxColor} rounded-lg shadow-xl overflow-hidden p-8`}>
          <div className='relative w-full aspect-[16/9] '>
            <Image src="/kwakp5_v2.png" alt="project1" fill className="object-contain pr-5 pl-5 pb-5" />
          </div>

          <p className="mb-4 text-center text-2xl">
            <strong>CoCoNuT Official Website</strong>
          </p>
          <p className="mb-4 text-center">
              This website was developed to share development and update news about our projects, <br/> as well as to introduce our projects and present our portfolio.
          </p>
          <ul className='list-disc list-inside mb-6 text-center'>
            <li>Next.js</li>
            <li>TypeScript</li>
            <li> Tailwind CSS</li>
          </ul>
          <div className="flex justify-center  gap-4">
            <Link href="/" className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200">
              Website
            </Link>
            <Link href="https://github.com/minu0563/PortFolio" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors">
              Github
            </Link>
          </div>
        </AnimatedSection>
      </section>

      <hr className="my-12 md:my-16" />

      {/* Project(Competition) Section */}
      <section id="projects" className="py-16">
        <h2 className="text-4xl font-bold text-center mb-12 gold">
          <ColorChange animate={true}>
            Project - Competition
          </ColorChange>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">

          {/* Project 1 */}
          <AnimatedSection delay={200} className={`${boxColor} rounded-lg shadow-xl overflow-hidden`}>
            <div className='relative w-full aspect-[16/9] max-h-[400px] '>
              <Image src="/kwak8.jpg" alt="project1" fill className="object-contain pr-5 pl-5" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">2nd Naver OGQ Competition</h3>
              <p className="mb-4">
                Achieved a perfect performance score in a computer vision competition focused on image upscaling by fine-tuning the <strong>EDSR (Enhanced Deep Super-Resolution)</strong> model, 
                optimizing it for high-quality image reconstruction and super-resolution tasks.
              </p>
              <ul className="list-disc list-inside mb-6">
                <li>Pytorch</li>
                <li>CV(Computer Vision)</li>
                <li>Image upscaling</li>
              </ul>
              <p>Tech Stack:</p>
              <ul className="list-disc list-inside mb-6">
                <li>Pytorch</li>
              </ul>
              <div className="flex gap-4 mt-12">
                <Link href="https://team.gynetworks.com/2024-ai-competition" className="bg-green-400 text-black px-4 py-2 rounded-md font-semibold hover:bg-green-200">
                  news
                </Link>
                <Link href="https://github.com/minu0563/EDSR" rel="noopener noreferrer" className="bg-gray-800 text-white px-4 py-2 rounded-md font-semibold hover:bg-gray-900">
                  GitHub
                </Link>
              </div>
            </div>
          </AnimatedSection>

          {/* Project 2 */}
          <AnimatedSection delay={200} className={`${boxColor} rounded-lg shadow-xl overflow-hidden`}>
            <div className='relative w-full h-[300px] '>
              <Image src="/kwak10.png" alt="project2" fill className="object-contain pr-5 pl-5" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">3rd Naver OGQ Competition</h3>
              <p className="mb-4">
                Participated in a computer vision object detection competition by designing and implementing a novel pipeline that integrates <strong>ActionCLIP</strong> with <strong>YOLOv12</strong>, 
                enabling improved contextual understanding and object detection performance.
              </p>
              <ul className="list-disc list-inside mb-6">
                <li>ActionClip</li>
                <li>YOLOv12</li>
                <li>Computer Vision</li>
                <li>Object Detection</li>
              </ul>
              <p>Tech Stack:</p>
              <ul className="list-disc list-inside mb-6">
                <li>Pytorch</li>
              </ul>
              <div className="flex gap-4">
                <Link href="https://team.gynetworks.com/2025-ai-competition" className="bg-green-400 text-black px-4 py-2 rounded-md font-semibold hover:bg-green-200">
                  news
                </Link>
                <Link href="/githubiscomingsoon" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white px-4 py-2 rounded-md font-semibold hover:bg-gray-900">
                  GitHub
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <div>
          <AnimatedSection delay={100} className={`${boxColor} rounded-lg shadow-xl overflow-hidden p-8`}>
            <div className='relative w-full aspect-[16/9] '>
              <Image src="/kwakp4_v2.png" alt="project1" fill className="object-contain pr-5 pl-5 pb-5" />
            </div>

            <p className="mb-4 text-center text-2xl">
              <strong>Real-Time Translation Application</strong>
            </p>
            <p className="mb-4 text-center">
                 Developed during an AI hackathon — a program that translates spoken language into Korean in real time. <br />
                Built using <strong>Python</strong>, <strong>OpenCV</strong>, <strong>MediaPipe</strong>, and <strong>SpeechRecognition</strong>.
            </p>
            <ul className='list-disc list-inside mb-6 text-center'>
              <li>Python</li>
              <li>OpenCV</li>
              <li>MediaPipe</li>
              <li>SpeechRecognition</li>
            </ul>
            <div className="flex justify-center  gap-4">
              <Link href="/githubiscomingsoon" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors">
                Github
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <hr className="my-12 md:my-16" />

      {/* Awards Section */}
      <section id="awards" className="py-16">

        {/*first award*/}
        <div className='mb-30'>
          <h2 className="text-4xl font-bold text-center mb-12 gold">
            <ColorChange animate={true}>
              Awards
            </ColorChange>
          </h2>
          <AnimatedSection delay={100} className={`${boxColor} rounded-lg shadow-xl overflow-hidden p-8`}>
            <div className='relative w-full aspect-[16/9] '>
              <Image src="/kwak7.JPG" alt="project1" fill className="object-contain pr-5 pl-5 pb-5" />
            </div>

            <p className="mb-4 text-center text-2xl">
              <strong>Winner of the 2nd Naver OGQ Competition</strong>
            </p>
            <p className="mb-4 text-center">
              Achieved a perfect performance score in a computer vision competition focused on image upscaling <br/> by fine-tuning the <strong>EDSR (Enhanced Deep Super-Resolution)</strong> model, <br/>
              optimizing it for high-quality image reconstruction and super-resolution tasks.
            </p>
            <ul className='list-disc list-inside mb-6 text-center'>
              <li>Python</li>
              <li>PyTorch</li>
              <li>EDSR (Enhanced Deep Super-Resolution Network)</li>
              <li>Image Processing Techniques</li>
            </ul>
            <div className="flex justify-center">
              <Link href="https://github.com/minu0563/EDSR" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors">
                Github
              </Link>
            </div>
          </AnimatedSection>
        </div>

        {/*second award*/}
        <div>
          <AnimatedSection delay={100} className={`${boxColor} rounded-lg shadow-xl overflow-hidden p-8`}>
            <div className='relative w-full aspect-[16/9]'>
              <Image src="/kwak8.jpg" alt="project1" fill className="object-contain pr-5 pl-5 pb-5" />
            </div>

            <p className="mb-4 text-center text-2xl">
              <strong>Runner-up of the 3rd Naver OGQ Competition</strong>
            </p>
            <p className="mb-4 text-center">
              Participated in a computer vision object detection competition <br/>
              by designing and implementing a novel pipeline that integrates <strong>ActionCLIP</strong> with <strong>YOLOv12</strong>, <br/>
              enabling improved contextual understanding and object detection performance, <br/> ultimately achieving <strong>second place</strong> in the competition.
            </p>
            <ul className='list-disc list-inside mb-6 text-center'>
              <li>Python</li>
              <li>PyTorch</li>
              <li>EDSR (Enhanced Deep Super-Resolution Network)</li>
              <li>Image Processing Techniques</li>
            </ul>
            <div className="flex justify-center">
              <Link href="https://github.com/minu0563/EDSR" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors">
                Github
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <hr className="my-12 md:my-16" />
    </div>
  );
}
