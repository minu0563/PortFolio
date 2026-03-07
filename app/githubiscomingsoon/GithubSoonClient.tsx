'use client';
import TextShuffle from "../components/animation/textshuffle";

export default function GithubSoonClient() {
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
