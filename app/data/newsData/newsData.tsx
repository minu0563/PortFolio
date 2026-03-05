export interface NewsSection {
  subheading?: string;
  sc?: string[];
  bp?: string[];
}

export interface NewsItem {
    id: number;
    title: string;
    contents: string[];
    readtime: string;
    sections?: NewsSection[];
    last?: string;
    extensionId?: number;
}

export const newsData: NewsItem[] = [
    {
        id: 1,
        title: "CoCoNuT: Convenient YouTube Viewing Tools v1.0.0 Official Release",
        contents: [
            "Today, we are excited to officially release our first extension. This marks an important milestone for CoCoNuT as we continue to expand our ecosystem of tools and services.",
            "The extension was designed with simplicity and efficiency in mind. Our goal was to eliminate unnecessary friction while maintaining a clean and minimal interface."
        ],
        readtime: "3 min read",
        sections: [
            {
                subheading: "Why we built this",
                sc: [
                    "We observed that YouTube’s existing tools and features were dispersed across multiple locations, often resulting in an inefficient user experience. ", 
                    "Therefore, we aimed to consolidate these functionalities within a single extension to enhance usability and provide a more streamlined, user-centered workflow."
                ],
            },
            {
                subheading: "Key Features",
                bp: [
                    "Locked Video Quality",
                    "Picture-in-Picture Mode for shortcut key",
                    "Short Video auto skip",
                ]
            },
            {
                sc: [
                    "For more details, please refer to the extension's description page.",
                    "Thank you for your interest in our extension, and we hope it provides you with a better experience!"
                ]
            },
        ],
        last: '"We will continue to enhance your convenience and viewing experience through regular updates. Should you encounter any issues, please do not hesitate to contact us at "coconut1357911@gmail.com". Your feedback is greatly appreciated."',
        extensionId: 1,
    },    
    {
        id: 2,
        title: "CoCoNuT's YouTube extension v1.0.1 Update",
        contents: [
            "Today, we identified and fixed a bug in our extension, “CoCoNuT: Convenient YouTube Viewing Tools,” to ensure a more stable and reliable user experience.",
        ],
        readtime: "5 min read",
        sections: [
            {
                subheading: "the issue that occurred",
                sc: [
                    "The bug that occurred in our extension was that the process of automatically skipping YouTube Shorts did not function smoothly."
                ]
            },
                        {
                subheading: "Fix Summary",
                sc: [
                    "We improved the automatic skipping feature so that it works smoothly in the Shorts view without needing to reload the page.",
                    "In addition, we developed a new function that detects promotional or ad-like videos appearing while watching Shorts and skips them automatically, further enhancing user convenience."
                ],
                bp: [
                    "Short Auto skip bug fixed",
                    "Automatic skipping of promotional Shorts videos"
                ]
            },
            {
                sc: [
                    "For more details, please refer to the extension's description page.",
                    "Thank you for your interest in our extension, and we hope it provides you with a better experience!"
                ]
            },
        ],
        last: '"We will continue to enhance your convenience and viewing experience through regular updates. Should you encounter any issues, please do not hesitate to contact us at "coconut1357911@gmail.com". Your feedback is greatly appreciated."',
        extensionId: 1,
    },
    {
        id: 3,
        title: "CoCoNuT's YouTube extension v1.1.0 Update",
        contents: [
            "Today, we introduced a new feature to our extension, “CoCoNuT: Convenient YouTube Viewing Tools,” to provide a more stable and reliable user experience.",
        ],
        readtime: "5 min read",
        sections: [
            {
                subheading: "Added features",
                sc: [
                    "We have implemented a feature that allows users to activate and exit PiP mode using keyboard shortcuts for improved convenience."    
                ],
                bp: [
                    "Shortcut key support added for Picture-in-Picture (PiP) mode"
                ]
            },
            {
                sc: [
                    "For more details, please refer to the extension's description page.",
                    "Thank you for your interest in our extension, and we hope it provides you with a better experience!"
                ]
            },
        ],
            last: '"We will continue to improve your convenience and viewing experience through consistent updates. If you encounter any new issues, please feel free to contact us at "coconut1357911@gmail.com". We appreciate your feedback."',
        extensionId: 1,
    },
    {
        id: 4,
        title: "CoCoNuT's YouTube extension v1.2.0 Update",
        contents: [
            "Today, we introduced a new feature to our extension, “CoCoNuT: Convenient YouTube Viewing Tools,” to provide a more stable and reliable user experience.",
        ],
        readtime: "3 min read",
        sections: [
            {
                subheading: "Added features",
                sc: [
                    "When watching videos in PiP mode, users can now use keyboard shortcuts to skip forward or rewind by 10 seconds."    
                ],
                bp: [
                    "Shortcut key support added for 10-second skip and rewind in Picture-in-Picture (PiP) mode."
                ]
            },
            {
                sc: [
                    "For more details, please refer to the extension's description page.",
                    "Thank you for your interest in our extension, and we hope it provides you with a better experience!"
                ]
            },
        ],
        last: '"We will continue to enhance your convenience and viewing experience through regular updates. Should you encounter any issues, please do not hesitate to contact us at "coconut1357911@gmail.com". Your feedback is greatly appreciated."',
        extensionId: 1,
    },
    {
        id: 5,
        title: "CoCoNuT's YouTube extension v2.0.0 Update",
        contents: [
            "Today, we rolled out a major update to our extension, “CoCoNuT: Convenient YouTube Viewing Tools,” featuring a complete design overhaul and newly added multilingual support to enhance accessibility and user experience.",
        ],
        readtime: "3 min read",
        sections: [
            {
                subheading: "Changed features",
                sc: [
                    "We completely redesigned our extension, moving beyond the previous GPT-based layout to provide a more user-friendly interface. Additionally, we implemented multilingual support using the i18n approach to better serve users from different regions."    
                ],
                bp: [
                    "Complete design overhaul for improved user experience",
                    "Added multilingual support using i18n approach"
                ]
            },
            {
                sc: [
                    "If your language is not currently supported and you would like it to be added, please contact us at “coconut1357911@gmail.com.” We will be happy to assist you."
                ]
            },
            {
                sc: [
                    "For more details, please refer to the extension's description page.",
                    "Thank you for your interest in our extension, and we hope it provides you with a better experience!"
                ]
            },
        ],
        last: '"We will continue to enhance your convenience and viewing experience through regular updates. Should you encounter any issues, please do not hesitate to contact us at "coconut1357911@gmail.com". Your feedback is greatly appreciated."',
        extensionId: 1,
    },
    {
        id: 6,
        title: "\"Get CoCoNuT!!\" v1.0.0 Official Release",
        contents: [
            "Today, we are thrilled to announce the official release of our second extension, “Get CoCoNuT!!”",
            "This extension is a simple clicker game designed to provide entertainment and help alleviate boredom."
        ],
        readtime: "3 min read",
        sections: [
            {
                subheading: "Why we built this",
                sc: [
                    "This extension has been developed to allow users to enjoy a simple, engaging experience during their free time, helping to alleviate boredom."    
                ],
            },
            {
                subheading: "Key Features",
                bp: [
                    "Obtain coconuts with simple clicks",
                    "Simple gacha game using coconuts",
                    "Achievements based on coconut collection",
                    "Coconut stock system"
                ]
            },
            {
                sc: [
                    "For more details, please refer to the extension's description page.",
                    "Thank you for your interest in our extension, and we hope it brings you fun and enjoyment!"
                ]
            },
        ],
        last: '"We will continue to enhance your experience through regular updates. If you encounter any issues, please do not hesitate to contact us at "coconut1357911@gmail.com". We greatly appreciate your feedback."',
        extensionId: 2,
    },
];