import AnimatedSection from '../../components/animation/AnimatedSection';
import Image from 'next/image';
import Link from 'next/link'; 

export default function Home() {
    return (
        <div className="w-full max-w-5xl mx-auto px-4 py-8">
            
            <AnimatedSection delay={100} className="text-center py-16 md:py-24">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Park Ju Hyun
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-pink-500 to-blue-600 mb-6">
                    Developer Exploring Web Usability & Artificial Intelligence
                </h2>
                <p className="text-lg text-[#3b82f6] mb-8 max-w-2xl mx-auto">
                    From developing browser extensions that improve user experience
                    to exploring AI models,
                    I am tackling a diverse spectrum of technologies.
                </p>
                <div className="flex justify-center gap-4">
                    <Link href="#projects" className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors">
                        View Projects
                    </Link>
                    <Link href="https://github.com/anexclamation" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-900 transition-colors">
                        Visit GitHub
                    </Link>
                </div>
            </AnimatedSection>

            <hr className="my-12 md:my-16" />

            <section id="projects" className="py-16">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Key Projects
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                    <AnimatedSection delay={200} className="
                    bg-linear-to-tl from-[#ffe4e1] via-[#f0fff0] to-[#fffacd] rounded-lg shadow-xl overflow-hidden border border-gray-200">
                        <div className='relative w-full h-[300px]'>
                            <Image src="/parkp1.png" alt="CoCoNuT Project" fill className="object-contain pl-5 pr-5" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-2xl font-bold mb-3 text-gray-950">CoCoNuT: YouTube Convenience Tools</h3>
                            <p className="text-gray-950 mb-4">
                                A Chrome extension for a more convenient YouTube viewing experience.
                            </p>
                            <ul className="list-disc list-inside text-gray-950 mb-6">
                                <li>Auto-set preferred video quality</li>
                                <li>Easy PIP (Picture-in-Picture) mode activation</li>
                                <li>Automatic ad skipping in shorts</li>
                            </ul>
                            <p className="text-gray-950">Tech Stack:</p>
                            <ul className="list-disc list-inside mb-6 text-gray-950">
                              <li>html, css, js</li>
                            </ul>
                            <div className="flex gap-4">
                                <Link href="https://chromewebstore.google.com/detail/coconut-%EB%8B%B9%EC%8B%A0%EC%9D%98-%ED%8E%B8%EB%A6%AC%ED%95%9C-%EC%9C%A0%ED%8A%9C%EB%B8%8C-%EC%8B%9C%EC%B2%AD%EC%9D%84-%EC%9C%84/ckdkiedamneebnodcphbohikgccaheon?hl=ko&utm_source=ext_sidebar"
                                target="_blank" rel="noopener noreferrer" className="
                                bg-linear-to-tr from-[#ffffff0] via-[#00ffff] to-[#0000cd] text-gray-950 px-4 py-2 rounded-md font-semibold hover:bg-red-700">
                                    Web Store
                                </Link>
                            </div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={300} className="
                    bg-linear-to-tr from-[#00ffff] via-[#4169e1] to-[#191970] rounded-lg shadow-xl overflow-hidden border border-gray-200">
                        <Image src="/images/streamer-screenshot.png" alt="Streamer Project" width={600} height={400} className="w-full object-cover" />
                        <div className="p-6 mt-8">
                            <h3 className="text-2xl font-bold mb-3 text-[#ff00ff]">Streaming Status Notifier</h3>
                            <p className="text-[#ba55d3] mb-4">
                                An extension to check the live status of followed streamers in real-time.
                            </p>
                            <ul className="list-disc list-inside text-[#ff00ff] mb-6">
                                <li>Provides a real-time list of live statuses</li>
                                <li>Displays detailed info (viewers, category, etc.)</li>
                                <li>Direct link to the broadcast page</li>
                            </ul>
                            <p className="text-[#ff00ff]">Tech Stack:</p>
                            <ul className="list-disc list-inside mb-6 text-[#ff00ff]">
                              <li>html, css, js</li>
                            </ul>
                            <div className="flex gap-4">
                                <Link href="/githubiscomingsoon" target="_blank" 
                                rel="noopener noreferrer" className="bg-linear-to-tr from-[#ffffff0] via-[#00ffff] to-[#0000cd] text-gray-800 px-4 py-2 rounded-md font-semibold hover:bg-gray-400">
                                    GitHub
                                </Link>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            <hr className="my-12 md:my-16" />

            <section id="research" className="py-16">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Research & Study
                </h2>
                <AnimatedSection delay={100} className="bg-gray-800 rounded-lg shadow-xl border-t-4 border-blue-500
                 rounded-lg shadow-xl overflow-hidden border border-gray-200 p-6 md:p-8">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold mb-3 text-gray-600">AI Paper Study: YOLOv12 </h3>
                            <p className="text-gray-700 mb-4">
                                I have experience analyzing the YOLOv12 paper to deepen my understanding of Object Detection, summarizing its contents, and presenting it.
                            </p>
                            <h4 className="text-lg font-semibold mb-2 text-gray-600">Key Topics Explored:</h4>
                            <ul className="list-disc list-inside text-gray-600">
                                <li><strong>Area Attention Module (A2):</strong> Reducing computational complexity and improving speed</li>
                                <li><strong>R-ELAN:</strong> Stabilizing training and solving optimization issues</li>
                                <li><strong>YOLO-friendly Attention:</strong> Optimized for real-time detection environments</li>
                            </ul>
                        </div>
                        <div className="flex-1 w-full md:w-auto">
                            <Image src="/images/yolov12-structure.png" alt="YOLOv12 Model Structure" width={500} height={300} className="rounded-lg border border-gray-300" />
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection delay={100} className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200 p-6 md:p-8 mt-10">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold mb-3 text-gray-600">AI Paper Study: Stable Diffusion </h3>
                            <p className="text-gray-700 mb-4">
                                I have experience analyzing the Stable Diffusion (Latent Diffusion Model) paper to deepen my understanding of Text-to-Image generation, summarizing its contents, and presenting it.
                            </p>
                            <h4 className="text-lg font-semibold mb-2 text-gray-600">Key Topics Explored:</h4>
                            <ul className="list-disc list-inside text-gray-600">
                                <li><strong>Latent Diffusion Models:</strong> Operating in latent space for high efficiency instead of pixel space.</li>
                                <li><strong>Cross-Attention Mechanism:</strong> Conditioning the generation process on text prompts (via CLIP).</li>
                                <li><strong>U-Net Denoising:</strong> The core architecture for progressively removing noise to generate an image.</li>
                            </ul>
                        </div>
                        <div className="flex-1 w-full md:w-auto">
                            {/* Stable Diffusion 아키텍처 이미지로 경로를 변경하세요 */}
                            <Image src="/images/stable-diffusion-arch.png" alt="Stable Diffusion Model Architecture" width={500} height={300} className="rounded-lg border border-gray-300" />
                        </div>
                    </div>
                </AnimatedSection>
            </section>

            <hr className="my-12 md:my-16" />

            <section id="research" className="py-16">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Awards 
                </h2>

                <AnimatedSection delay={100} className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200 p-6 md:p-8">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold mb-3 text-gray-600">Award: 2nd Prize, NAVER AI Competition</h3>
                            <p className="text-gray-700 mb-4">
                                Won 2nd Prize in the 3rd NAVER OGQ MARKET AI Competition (2025) for the gain diverse experiences.
                            </p>
                            <h4 className="text-lg font-semibold mb-2 text-gray-600">Key Technologies Used:</h4>
                            <ul className="list-disc list-inside text-gray-600">
                                <li>
                                    <strong>YOLOv12:</strong> Utilized YOLOv12 to achieve high performance and real-time processing.
                                </li>
                                <li>
                                    <strong>Action CLIP:</strong> Used Action CLIP to further improve the performance of YOLOv12.
                                </li>
                                <li>
                                    <strong>Dataset:</strong> Prepared a diverse dataset to prevent overfitting and enhance generalization.
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1 w-full md:w-auto">
                            <Image src="/images/ogq-gyn-architecture.png" alt="OGQ GYN Project Architecture (YOLOv12)" width={500} height={300} className="rounded-lg border border-gray-300" />
                        </div>
                    </div>
                </AnimatedSection>
            </section>
        </div>
    );
}

                    <div className='relative w-full h-[400px] mb-6'>
                      <Image src="/kwakp1.png" alt="Baekjoon Online Judge" fill className="object-contain" />
                    </div>