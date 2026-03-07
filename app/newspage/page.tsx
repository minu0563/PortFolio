import { Suspense } from "react";
import NewsPageClient from "./NewsPageClient";

export const metadata = {
  title: "CoCoNuT's News Page | CoCoNuT",
  description: "Stay updated with the latest news and announcements from CoCoNuT.",
};

export default function Page() {
  return (
    <Suspense fallback={<div className="text-white">Loading...</div>}>
      <NewsPageClient />
    </Suspense>
  );
}