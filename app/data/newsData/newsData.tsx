// 태그(무조건) -> Update or Released
// 그외의 태그 -> Other

export interface NewsItem {
    id: number;
    title: string;
    description: string;
    image: string;
    tag: string; 
    date: string;
    newspagelink: string;
}

export const newsData: NewsItem[] = [
    {
        id: 1,
        title: "CoCoNuT: test1test1test1",
        description: "test1",
        image: "/test1.jpg",
        tag: "Update",
        date: "2026.02.22",
        newspagelink: "news1",
    },
    {
        id: 2,
        title: "test2",
        description: "test2",
        image: "test2.jpg",
        tag: "Released",
        date: "2026.02.22",
        newspagelink: "news2",
    },
    {
        id: 3,
        title: "test3",
        description: "test3",
        image: "test3.jpg",
        tag: "Other",
        date: "2026.02.22",
        newspagelink: "news3",
    },
];