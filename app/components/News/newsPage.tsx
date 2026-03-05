'use client';
import { NewsItem } from "@/app/data/newsData/newsData";
import { NewsCardItem } from "@/app/data/newsCardData/newsCardData";
import AnimatedSection from '../../components/animation/AnimatedSection';
import ColorChange from '../../components/animation/ColorChange';
import StatusColor from '@/app/components/status/page';
import Link from 'next/link';

interface NewsProps {
    item: NewsItem;
    tag: NewsCardItem['tag'];
    date: NewsCardItem['date'];
}

const News: React.FC<NewsProps> = ({ item, tag, date }) => {
    return (
        <div className="flex justify-center px-5 sm:px-8">
            <article className="w-full max-w-3xl mt-28 mb-40">

                {/* ================= 메타 정보 ================= */}
                <AnimatedSection>
                    <div className="flex flex-wrap items-center gap-3 text-sm mb-6">
                        <StatusColor>
                            {tag}
                        </StatusColor>
                        <span>{date}</span>
                        <span>·</span>
                        <span>{item.readtime}</span>
                    </div>
                </AnimatedSection>

                {/* ================= 제목 ================= */}
                <AnimatedSection delay={100}>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight gold mb-10">
                        <ColorChange animate duration={1000}>
                            {item.title}
                        </ColorChange>
                    </h1>
                </AnimatedSection>

                {/* ================= 본문1 ================= */}
                <AnimatedSection delay={200}>
                    <div className="space-y-8 text-base sm:text-lg leading-8">

                        {item.contents.map((paragraph, idx) => (
                            <p key={idx}>
                                {paragraph}
                            </p>
                        ))}

                        {/* ================= 뉴스 섹션 (소제목, 소제목 본문, bp) ================= */}
                        {item.sections?.map((section, idx) => (
                            <section key={idx}>
                                <h2 className="text-2xl sm:text-3xl font-semibold mt-12 mb-7">
                                    {/* 소제목 */}
                                    {section.subheading}
                                </h2>

                                {/* 소제목 본문(sc) */}
                                {section.sc?.map((subparagraph, subidx) => (
                                    <p key={subidx} className="mb-5">
                                        {subparagraph}
                                    </p>
                                ))}

                                {/* bullet(bp) */}
                                {section.bp && section.bp.length > 0 && (
                                    <ul className="list-disc pl-6 space-y-3 mt-10">
                                        {section.bp.map((point, pointidx) => (
                                            <li key={pointidx}>{point}</li>
                                        ))}
                                    </ul>
                                )}
                            </section>
                        ))}
                        <blockquote className="border-l-4 border-gray-600 pl-6 italic text-gray-400">
                            {item.last}
                        </blockquote>

                    </div>
                </AnimatedSection>

                {/* ================= 구분선 ================= */}
                <AnimatedSection delay={300}>
                    <div className="border-b border-gray-700 my-16"></div>
                </AnimatedSection>

                {/* ================= 하단 네비게이션 ================= */}
                <AnimatedSection delay={150}>
                    <div className="flex flex-col sm:flex-row justify-between gap-6 text-sm sm:text-base">

                        <Link
                            href="/newspage"
                            className="gold hover:opacity-70 transition"
                        >
                            ← Back to News
                        </Link>

                        <Link
                            href={`/extensionpage/extension${item.extensionId}`}
                            className="text-gray-400 hover:opacity-30 transition"
                        >
                            View Related Project →
                        </Link>

                    </div>
                </AnimatedSection>

            </article>
        </div>
    );
};

export default News;