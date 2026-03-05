    'use client';

    import { use } from "react";
    import News from '@/app/components/News/newsPage';
    import { newsData } from "@/app/data/newsData/newsData";
    import { newsCardData } from "@/app/data/newsCardData/newsCardData";

    export default function NewsDetailPage({ params }: { params: Promise<{ id: string }> }) {
        const { id: rawId } = use(params);
        const id = Number(rawId.replace(/\D/g, ""));

        console.log("rawId:", rawId);
        console.log("parsed id:", id);

        const item = newsData.find(n => n.id === id);
        const card = newsCardData.find(c => c.id === id);

        if (!item) return <div className="text-white p-10">item not found.</div>;
        if (!card) return <div className="text-white p-10">card not found.</div>;

        return (
            <News 
                item={item}
                tag={card.tag}
                date={card.date}
            />
        );
    }