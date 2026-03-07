import { Suspense } from "react";
import NewsPageClient from "./NewsPageClient";

export default function Page() {
  return (
    <Suspense fallback={<div className="text-white">Loading...</div>}>
      <NewsPageClient />
    </Suspense>
  );
}