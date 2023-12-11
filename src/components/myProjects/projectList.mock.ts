type tech = "javascript" | "stack" | "react" | "typescript" | "css";

interface CardListSection {
    title: string,
    image: string,
    filter: string[],
    technologies: tech[],
    link: string;
}

export const CardListSectionMock:CardListSection[] = [
        {
            image:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQThwMYYjNxOHRfaep9RvbKC9nCq6TvMLtMJafRlK-tS48piN-J",
            title: "Primeiro projeto",
            filter: ["Github", "tudo"],
            technologies: ["javascript", "css"],
            link: "https://www.youtube.com/",
        },
        {
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgI_jkzmv139TK1GIopQv4oCnxAuiczwLZwSb3ndYPbA&s",
            title: "Segundo projeto",
            filter: ["Figma", "tudo"],
            technologies: ["typescript","react"],
            link: "https://www.youtube.com/",
        },
        {
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIIHlT40JG4U5G69CSKXxuuPwq08Ou6SJQdYyzYtxt9w&s",
            title: "Terceiro projeto",
            filter: ["Github", "tudo"],
            technologies: ["javascript", "react", "css"],
            link: "https://www.youtube.com/",
        },
        {
            image:"https://ovicio.com.br/wp-content/uploads/2023/04/20230405-ovicio-shrek-burro-555x555.jpg",
            title: "Quarto projeto",
            filter: ["Figma", "tudo"],
            technologies: ["javascript","stack","react"],
            link: "https://www.youtube.com/",
        },
    
]