'use client';

import { FAQItem1 } from "@/app/data/FAQData/FAQData1";
import { useState } from "react";
import AnimatedSection from "../animation/AnimatedSection";

interface FAQ1props {
    item: FAQItem1;
}

const FAQ1: React.FC<FAQ1props> = ({ item }) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(prev => !prev);
    };

    return (
        <div>
            <p className="text-xl mb-2 cursor-pointer mt-6" onClick={toggleVisibility}>
                {item.Q}
            </p>
            {isVisible && 
                <AnimatedSection anitype={1} delay={50}>
                    <p className="text-gray-400 mb-4">
                        {item.N}
                    </p>
                </AnimatedSection>
            }
        </div>
    );
};

export default FAQ1;