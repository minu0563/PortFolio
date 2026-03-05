// 태그(무조건) -> Update or Released
// 그외의 태그 -> Other

export interface NewsCardItem {
    id: number;
    title: string;
    description: string;
    tag: string; 
    date: string;
    newspagelink: string;
}

export const newsCardData: NewsCardItem[] = [
    {
        id: 1,
        title: "CoCoNuT: Convenient YouTube Viewing Tools v1.0.0",
        description: "First Extension Officially Released",
        tag: "Released",
        date: "2025.02.25",
        newspagelink: "news1",
    },
    {
        id: 2,
        title: "CoCoNuT's YouTube extension v1.0.1 Update",
        description: "Bug fixed",
        tag: "Update",
        date: "2025.06.23",
        newspagelink: "news2",
    },
    {
        id: 3,
        title: "CoCoNuT's YouTube extension v1.1.0 Update",
        description: "Picture-in-Picture Mode for shortcut key added",
        tag: "Update",
        date: "2025.07.04",
        newspagelink: "news3",
    },
    {
        id: 4,
        title: "CoCoNuT's YouTube extension v1.2.0 Update",
        description: "Added a shortcut for skipping 10 seconds during Picture-in-Picture (PiP) mode.",
        tag: "Update",
        date: "2025.07.26",
        newspagelink: "news4",
    },
    {
        id: 5,
        title: "CoCoNuT's YouTube extension v2.0.0 Update",
        description: "Major update with a full design overhaul and multilingual support.",
        tag: "Update",
        date: "2025.11.25",
        newspagelink: "news5",
    },
    {
        id: 6,
        title: "\"Get CoCoNuT!!\" v1.0.0 Official Release",
        description: "Second Extension Officially Released",
        tag: "Released",
        date: "2025.12.11",
        newspagelink: "news6",
    },
];