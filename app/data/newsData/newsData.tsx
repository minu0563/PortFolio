// 태그(무조건) -> Update or Released
// 그외의 태그 -> Other

export interface NewsItem {
    id: number;
    title: string;
    description: string;
    image: string;
    tag: string; 
}

export const newsData: NewsItem[] = [
    {
        id: 1,
        title: "CoCoNuT: test1test1test1",
        description: "test1test1test1test1test1test1test1test1test1test1test1test1",
        image: "test1.jpg",
        tag: "Update",
    },
    {
        id: 2,
        title: "test2",
        description: "test2",
        image: "test2.jpg",
        tag: "Released",
    },
];