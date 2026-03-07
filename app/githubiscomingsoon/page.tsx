'use client';
import TextShuffle from "../components/animation/textshuffle";

export const metadata = {
  title: "GitHub Repository Coming Soon | CoCoNuT",
  description: "The GitHub repository for our project will be released soon.",
};

export default function Home() {
    return (
        <div className="flex w-full h-[72vh] items-center justify-center mt-20">
            <p className="text-5xl text-center">
                <TextShuffle speed={20}>
                The GitHub repository will be released soon.
                </TextShuffle>
       </p>
        </div>
    );
}
