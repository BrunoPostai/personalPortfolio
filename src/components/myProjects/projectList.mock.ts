type tech = "javascript" | "stack" | "react" | "typescript" | "css" ;

interface CardListSection {
  title: string;
  alt: string,
  image: string;
  filter: string[];
  technologies: tech[];
  link: string;
}

export const CardListSectionMock:CardListSection[] = [
        {
            image:"./images/project1.webp",
            title: "Primeiro projeto",
            alt: "Projeto js e css",
            filter: ["Github", "tudo"],
            technologies: ["javascript", "css"],
            link: "https://www.youtube.com/",
        },
        {
            image:"./images/project2.webp",
            title: "Segundo projeto",
            alt: "Projeto typescript e react",
            filter: ["Figma", "tudo"],
            technologies: ["typescript","react"],
            link: "https://www.youtube.com/",
        },
        {
            image:"./images/project3.webp",
            title: "Terceiro projeto",
            alt: "Projeto javascript, react e css",
            filter: ["Github", "tudo"],
            technologies: ["javascript", "react", "css"],
            link: "https://www.youtube.com/",
        },
        {
            image:"./images/project4.webp",
            title: "Quarto projeto",
            alt: "Projeto js, stack e react",
            filter: ["Figma", "tudo"],
            technologies: ["javascript","stack","react"],
            link: "https://www.youtube.com/",
        },
    ]