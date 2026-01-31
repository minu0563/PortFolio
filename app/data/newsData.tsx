export interface NewsItem {
    id: number;
    title: string;
    description: string;
    image: string;
}

export const newsData: NewsItem[] = [
    {
        id: 1,
        title: "CoCoNuT: test1test1test1",
        description: "test1test1test1test1test1test1test1test1test1test1test1test1",
        image: "test1.jpg",
    },
    {
        id: 2,
        title: "test2",
        description: "test2",
        image: "test2.jpg",
    },
];