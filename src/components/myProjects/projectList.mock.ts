export type tech =
  | "javascript"
  | "stack"
  | "react"
  | "typescript"
  | "css"
  | "github"
  | "vercel"
  | "tailwind"
  | "next"
  | "php";

interface CardListSection {
  title: string;
  alt: string;
  image: string;
  filter: string[];
  technologies: tech[];
  link: string;
}

export const CardListSectionMock: CardListSection[] = [
  {
    image: "./images/pokemon_api.png",
    title: "Pokemon API",
    alt: "Pokemon API PROJECT",
    filter: ["tudo", "vercel"],
    technologies: ["react", "javascript", "tailwind",],
    link: "https://b-ppokedex.vercel.app/",
  },
  {
    image: "./images/professional_portfolio.png",
    title: "Modern portfolio",
    alt: "Modern portfolio",
    filter: ["vercel", "tudo"],
    technologies: ["next", "typescript", "tailwind"],
    link: "https://professional-portfolio-sage.vercel.app/",
  },
  {
    image: "./images/project3.webp",
    title: "Wow store",
    alt: "WOW STORE PROJECT MADE ON PHP",
    filter: ["Github", "tudo"],
    technologies: ["php", "javascript", "css"],
    link: "https://github.com/BrunoPostai/WOWSTORE",
  },
  {
    image: "./images/tesla_example.webp",
    title: "Tesla",
    alt: "WOW STORE PROJECT MADE ON PHP",
    filter: ["Github", "tudo"],
    technologies: ["javascript", "css"],
    link: "https://brunopostai.github.io/TeslaCustomizableCar/",
  },
  {
    image: "./images/project3.webp",
    title: "Muscle Mate",
    alt: "Gym app made on React",
    filter: ["Github", "tudo"],
    technologies: ["react", "typescript"],
    link: "https://mucle-matte.vercel.app/",
  },
];
