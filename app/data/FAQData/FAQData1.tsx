export interface FAQItem1 {
    id: number;
    Q: string;
    N: string;
}

export const FAQData1: FAQItem1[] = [
    {   
        id: 1,
        Q: "1. Is it possible for Video Quality Lock to select a quality that the video doesn't support?",
        N: "No, but if the video’s max quality is lower than your selection, it will automatically choose the best available. If the video supports your selected quality, it will switch back.",
    },
    {
        id: 2,
        Q: "2. Is it possible to activate PIP mode using a shortcut key?",
        N: "Yes, by following the instructions in the extension's settings tab to set up shortcut keys, you can toggle PIP mode for videos in any window or app on your computer, not just in a browser.",
    },
    {
        id: 3,
        Q: "3. Is it possible to control video playback while watching in PIP mode?",
        N: "By following the instructions in the extension's settings tab to set up shortcut keys, you can even perform actions like skipping forward 10 seconds while watching videos in PIP mode.",
    },
    {
        id: 4,
        Q: "4. Is it possible to set the language of the extension?",
        N: "Our extension currently provides multilingual support based on i18n. If the extension does not support your language, please contact us at coconut135711@gmail.com.",
    },
    {
        id: 5,
        Q: "5. Other",
        N: "Contact us at `coconut135711@gmail.com.`"
    }
]