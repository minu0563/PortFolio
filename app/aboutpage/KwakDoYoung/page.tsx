import AnimatedSection from '../../AnimatedSection';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
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
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          Passionate about software development and AI, focusing on web usability, real-time processing, and vision-based applications.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="#projects" className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors">
            View Projects
          </Link>
          <Link href="https://github.com/minu0563" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-900 transition-colors">
            Visit GitHub
          </Link>
        </div>
      </AnimatedSection>

      <hr className="my-12 md:my-16" />

      {/* Programming Study Section */}
      <section id="study" className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Programming Study
        </h2>
        <AnimatedSection delay={100} className="bg-gray-900 rounded-lg shadow-xl overflow-hidden border border-gray-200 p-8">
          <div className='relative w-full h-[400px] mb-6'>
            <Image src="/kwakp1.png" alt="Baekjoon Online Judge" fill className="object-contain" />
          </div>
          <p className="text-white mb-6 text-center">
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

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Project
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Project 1 */}
          <AnimatedSection delay={200} className="bg-gray-900 rounded-lg shadow-xl overflow-hidden border border-gray-200">
            <div className='relative w-full h-[300px] '>
              <Image src="/kwakp2.png" alt="project1" fill className="object-contain pr-5 pl-5" />
            </div>
            <div className="p-6 text-white">
              <h3 className="text-2xl font-bold mb-3">YouTube Convenience Extension</h3>
              <p className="text-white mb-4">
                Developed a Chrome extension to improve the YouTube viewing experience by solving daily inconveniences.
                Reached over <strong>3,000 visitors</strong> and <strong>200 active users</strong>.
              </p>
              <ul className="list-disc list-inside mb-6 text-white">
                <li>Auto-adjusts video quality</li>
                <li>One-click Picture-in-Picture (PIP) mode</li>
                <li>Auto-skip for YouTube Shorts ads</li>
              </ul>
              <p>Tech Stack:</p>
              <ul className="list-disc list-inside mb-6 text-white">
                <li>html, css, js</li>
              </ul>
              <div className="flex gap-4">
                <Link href="https://chromewebstore.google.com/detail/coconut-%EB%8B%B9%EC%8B%A0%EC%9D%98-%ED%8E%B8%EB%A6%AC%ED%95%9C-%EC%9C%A0%ED%8A%9C%EB%B8%8C-%EC%8B%9C%EC%B2%AD%EC%9D%84-%EC%9C%84/ckdkiedamneebnodcphbohikgccaheon?hl=ko"
                  target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700">
                  Web Store
                </Link>
                <Link href="/githubiscomingsoon" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white px-4 py-2 rounded-md font-semibold hover:bg-gray-900">
                  GitHub
                </Link>
              </div>
            </div>
          </AnimatedSection>

          {/* Project 2 */}
          <AnimatedSection delay={300} className="bg-gray-900 rounded-lg shadow-xl overflow-hidden border border-gray-200">
            <div className='relative w-full h-[300px] '>
              <Image src="/kwakp3.png" alt="project1" fill className="object-contain pr-5 pl-5" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3 text-white">Real-Time Translation Application</h3>
              <p className="text-white mb-4">
                Developed during an AI hackathon — a program that translates spoken language into Korean in real time. <br />
                Built using <strong>Python</strong>, <strong>OpenCV</strong>, <strong>MediaPipe</strong>, and <strong>SpeechRecognition</strong>.
              </p>
              <p>Tech Stack:</p>
              <ul className="list-disc list-inside mb-6 text-white">
                <li>Python</li>
                <li>OpenCV</li>
                <li>EDSR</li>
                <li>Computer Vision</li>
              </ul>
              <div className="flex gap-4">
                <Link href="/githubiscomingsoon" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white px-4 py-2 rounded-md font-semibold hover:bg-gray-900">
                  GitHub
                </Link>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </section>

      <hr className="my-12 md:my-16" />

      {/* Awards Section */}
      <section id="awards" className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Awards</h2>
        <AnimatedSection delay={100} className="bg-gray-900 rounded-lg shadow-xl overflow-hidden border border-gray-200 p-8">
          <div className='relative w-full h-[400px] '>
            <Image src="/kwakp4.png" alt="project1" fill className="object-contain pr-5 pl-5 pb-5" />
          </div>

          <p className="text-white mb-4 text-center ">
            <strong>Winner of the 2nd Naver OGQ Competition</strong> <br /> achieved top results in the Image Super-Resolution (SR) challenge using AI-based models.
          </p>
          <ul className='list-disc list-inside mb-6 text-white text-center'>
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
      </section>

      <hr className="my-12 md:my-16" />

      {/* Paper Reviews Section */}
      <section id="research" className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Paper Reviews</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          <AnimatedSection delay={200} className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200 p-6">
            <h3 className="text-2xl font-bold mb-3 text-gray-600">SRCNN Paper Review</h3>
            <p className="text-gray-700">
              Studied and analyzed the SRCNN paper focusing on deep learning-based image super-resolution.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={300} className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200 p-6">
            <h3 className="text-2xl font-bold mb-3 text-gray-600">ViT (Vision Transformer) Paper Review</h3>
            <p className="text-gray-700">
              Reviewed the Vision Transformer architecture to understand transformer-based vision representation and model optimization.
            </p>
          </AnimatedSection>

        </div>
      </section>
    </div>
  );
}
