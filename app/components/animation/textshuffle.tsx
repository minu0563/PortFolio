'use client';
import { useEffect, useRef, useState, ReactNode, ReactElement } from "react";

interface TextShuffleOn {
  children: ReactNode;
  className?: string;
  speed?: number;
}

const charracters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

const TextShuffle: React.FC<TextShuffleOn> = ({ children, className = "",speed = 50}) => {
    const [chars, setChars] = useState<{ char: string ; done: boolean }[]>([]);

    const extractText = (child: ReactNode): string => {
        if (typeof child === "string" || typeof child === "number") {
            return child.toString();
        } else if (Array.isArray(child)){
            return child.map(extractText).join("");
        } else if ((child as ReactElement <any, any>)?.props?.children) {
            return extractText((child as ReactElement<any, any>).props.children);
        } else {
            return "";  
        }
    };

    useEffect(() => {   
        const text = extractText(children);
        if (!text) return;
        
        setChars(text.split("").map(() => ({ char: "", done: false })));

        let idx = 0;
        const interval = setInterval(() => {
            setChars(prev => 
                prev.map((c, i) => {
                    if (i < idx) {
                        return { char: text[i], done: true };
                    } else {
                        return { char: charracters[Math.floor(Math.random() * charracters.length)], done: false };
                    }
                })
            );

            idx++;
            if (idx > text.length){
                clearInterval(interval);
            }
        }, speed);

        return () => clearInterval(interval);
    }, [children, speed]);

    return <span className={className}>{chars.map(c => c.char).join("")}</span>;
};

export default TextShuffle;
