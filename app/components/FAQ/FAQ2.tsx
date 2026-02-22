'use client';

import { FAQItem2 } from "@/app/data/FAQData/FAQData2";
import { useState } from "react";
import AnimatedSection from "../animation/AnimatedSection";

interface FAQ2props {
    item: FAQItem2;
}

const FAQ2: React.FC<FAQ2props> = ({ item }) => {
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

export default FAQ2;