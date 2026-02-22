'use client';
import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import AnimatedSection from "../animation/AnimatedSection";

export default function NewsTagSelector() {
    const TAGS = ["all", "update", "released", "other"] as const;
    type TagType = (typeof TAGS)[number];

    const router = useRouter();
    const searchParams = useSearchParams();

    const [currentTag, setCurrentTag] = useState<TagType>('all');

    useEffect(() => {
        const tagFromURL = (searchParams.get('tag') ?? 'all').toLowerCase();
        const validTag = TAGS.find(tag => tag === tagFromURL) ?? 'all';
        setCurrentTag(validTag as TagType);
    }, [searchParams]);

    const handleTagClick = (tag: TagType) => {
        router.push(`/newspage?tag=${tag}`);
        setCurrentTag(tag);
    };

    return (
        <div className="flex gap-4">
            {TAGS.map((tag, idx) => (
                <AnimatedSection key={tag} anitype={1} delay={(idx * 200) + 800}>
                    <button
                        onClick={() => handleTagClick(tag)}
                        className={`px-4 py-3 border ${currentTag === tag ? 'font-bold border-white text-white' : 'text-gray-400 border-gray-600'
                            }`}
                    >
                        {tag}
                    </button>
                </AnimatedSection>
            ))}
        </div>

    );
}
