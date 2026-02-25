'use client';

import Link from 'next/link';
import AnimatedSection from '../../components/animation/AnimatedSection';
import ColorChange from '../../components/animation/ColorChange';
import StatusColor from '@/app/components/status/page';

export default function NewsDetailPage() {
    return (
        <div className="flex justify-center px-5 sm:px-8">
            <article className="w-full max-w-3xl mt-28 mb-40">

                {/* ================= 메타 정보 ================= */}
                <AnimatedSection>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400 mb-6">
                        <StatusColor>
                            Released
                        </StatusColor>
                        <span>2026.02.20</span>
                        <span>·</span>
                        <span>3 min read</span>
                    </div>
                </AnimatedSection>

                {/* ================= 제목 ================= */}
                <AnimatedSection delay={100}>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight gold mb-10">
                        <ColorChange animate duration={1000}>
                            First Extension Officially Released
                        </ColorChange>
                    </h1>
                </AnimatedSection>

                {/* ================= 본문 ================= */}
                <AnimatedSection delay={200}>
                    <div className="space-y-8 text-base sm:text-lg leading-8 text-gray-300">

                        <p>
                            Today, we are excited to officially release our first extension.
                            This marks an important milestone for CoCoNuT as we continue to
                            expand our ecosystem of tools and services.
                        </p>

                        <p>
                            The extension was designed with simplicity and efficiency in mind.
                            Our goal was to eliminate unnecessary friction while maintaining
                            a clean and minimal interface.
                        </p>

                        <h2 className="text-2xl sm:text-3xl font-semibold mt-12 mb-4 text-white">
                            Why we built this
                        </h2>

                        <p>
                            We noticed that many existing tools either felt overloaded with
                            features or lacked thoughtful design. We wanted to create
                            something focused and intentional.
                        </p>

                        <ul className="list-disc pl-6 space-y-3">
                            <li>Improved usability</li>
                            <li>Lightweight performance</li>
                            <li>Consistent design language</li>
                        </ul>

                        <h2 className="text-2xl sm:text-3xl font-semibold mt-12 mb-4 text-white">
                            What’s next
                        </h2>

                        <p>
                            This release is only the beginning. We are already working on
                            improvements and additional features based on user feedback.
                        </p>

                        <blockquote className="border-l-4 border-gray-600 pl-6 italic text-gray-400">
                            “Our focus remains on thoughtful tools that feel simple yet powerful.”
                        </blockquote>

                    </div>
                </AnimatedSection>

                {/* ================= 구분선 ================= */}
                <AnimatedSection delay={300}>
                    <div className="border-b border-gray-700 my-16"></div>
                </AnimatedSection>

                {/* ================= 하단 네비게이션 ================= */}
                <AnimatedSection delay={350}>
                    <div className="flex flex-col sm:flex-row justify-between gap-6 text-sm sm:text-base">

                        <Link
                            href="/newspage"
                            className="gold hover:opacity-70 transition"
                        >
                            ← Back to News
                        </Link>

                        <Link
                            href="/extensionpage"
                            className="text-gray-400 hover:text-white transition"
                        >
                            View Related Project →
                        </Link>

                    </div>
                </AnimatedSection>

            </article>
        </div>
    );
}