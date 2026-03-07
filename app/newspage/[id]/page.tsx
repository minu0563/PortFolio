import NewsClient from "./NewsClient";
import { newsData } from "@/app/data/newsData/newsData";
import { newsCardData } from "@/app/data/newsCardData/newsCardData";

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  const { id: rawId } = await params;
  const id = Number(rawId.replace(/\D/g, ""));

  console.log("rawId:", rawId);
  console.log("parsed id:", id);

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