'use client';
import React from "react";
import { NewsItem } from "@/app/data/newsData";
import { getTheme } from "../theme/useTheme";
import { useState, useEffect } from "react";

interface NewsCardProps {
    item: NewsItem;
    isHovered?: boolean;     
    isOtherHovered?: boolean;  
    onHover?: () => void;
    onLeave?: () => void;
}

const NewsCard: React.FC<NewsCardProps> = ({ item, isHovered, isOtherHovered, onHover, onLeave }) => {
    const nowTheme = getTheme();
    const [boxColor, setBoxColor] = useState('');

    useEffect(() => {
        if (nowTheme === "theme-dark") {
            setBoxColor('bg-gray-900 border border-gray-200');
        } else {
            setBoxColor('bg-gray-200 border border-gray-900')
        }
    }, [nowTheme]);

    return (
        <div
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            className={`
                flex rounded-lg shadow-lg overflow-hidden w-full max-w-5xl m-3 cursor-pointer
                transition-transform duration-300
                ${boxColor} hover:shadow-xl
                ${isHovered ? 'scale-101 z-10' : ''}
                ${isOtherHovered ? 'scale-99 blur-sm' : ''}
            `}
        >
            <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 sm:w-32 sm:h-32 lg:w-64 lg:h-32 object-cover"
            />
            <div className="p-4 flex flex-col justify-center gap-y-4">
                <h3 className="text-lg sm:text-xl font-semibold mt-5">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-500">{item.description}</p>
            </div>
        </div>
    );
};

export default NewsCard;