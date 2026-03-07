import NewsClient from "./NewsClient";
import { newsData } from "@/app/data/newsData/newsData";
import { newsCardData } from "@/app/data/newsCardData/newsCardData";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ id: string }>;
}) {

    const { id: rawId } = await params;
    const id = Number(rawId.replace(/\D/g, ""));

    const item = newsData.find((n) => n.id === id);

    if (!item) {
        return {
            title: "News Not Found | CoCoNuT",
            description: "The requested news article could not be found.",
        };
    }
    const description =
        item.contents
            ?.join(" ")
            .replace(/<[^>]*>/g, "")
            .replace(/\n/g, " ")
            .slice(0, 150) + "...";

    return {
        title: `${item.title} | CoCoNuT`,
        description: description,
    };
}

export default async function NewsDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {

    const { id: rawId } = await params;
    const id = Number(rawId.replace(/\D/g, ""));

    const item = newsData.find((n) => n.id === id);
    const card = newsCardData.find((c) => c.id === id);

    if (!item) return <div className="text-white p-10">item not found.</div>;
    if (!card) return <div className="text-white p-10">card not found.</div>;

    return (
        <NewsClient
            item={item}
            tag={card.tag}
            date={card.date}
        />
    );
}