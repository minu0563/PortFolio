'use client';
import React from "react";
import { NewsCardItem } from "@/app/data/newsCardData/newsCardData";
import { getTheme } from "../theme/useTheme";
import { useState, useEffect } from "react";
import StatusColor from "../status/page";
import { it } from "node:test";

interface NewsCardProps {
    item: NewsCardItem;
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
            setBoxColor('border border-gray-600 hover:border-gray-400');
        } else {
            setBoxColor('border border-gray-900')
        }
    }, [nowTheme]);

    return (
        <div
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            className={`
                flex overflow-hidden w-full max-w-4xl m-3 cursor-pointer items-center
                transition-transform duration-300
                ${boxColor} hover:shadow-xl
                ${isHovered ? 'scale-101 z-10' : ''}
                ${isOtherHovered ? 'scale-99 blur-sm' : ''}
            `}
        >   
            <div className="p-4 ml-10 flex flex-col justify-center gap-y-4">
                <h3 className="text-lg sm:text-xl font-semibold gold">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-500">{item.description}</p>
            </div>
            <div className="text-gray-400 text-right ml-auto mb-5 mr-5">
                <StatusColor>
                    {item.tag}
                </StatusColor>
                <p className="mt-3 mr-1 text-[14px] text-gray-600">{item.date}</p>
            </div>
        </div>
    );
};

export default NewsCard;