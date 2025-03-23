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
  siteLink: string;
  repositoryLink: string;
  loading?: boolean;
}

export const CardListSectionMock: CardListSection[] = [
  {
    image: "./images/pokemon_api.png",
    title: "Pokemon API",
    alt: "Pokemon API PROJECT",
    filter: ["tudo", "vercel"],
    technologies: ["react", "javascript", "tailwind",],
    siteLink: "https://b-ppokedex.vercel.app/",
    repositoryLink: "https://github.com/BrunoPostai/BPpokedex",
  },
  {
    image: "./images/professional_portfolio.png",
    title: "Modern portfolio",
    alt: "Modern portfolio",
    filter: ["vercel", "tudo"],
    technologies: ["next", "typescript", "tailwind"],
    siteLink: "https://professional-portfolio-sage.vercel.app/",
    repositoryLink: "https://github.com/BrunoPostai/professionalPortfolio",
  },
  {
    image: "./images/project3.webp",
    title: "Wow store",
    alt: "WOW STORE PROJECT MADE ON PHP",
    filter: ["Github", "tudo"],
    technologies: ["php", "javascript", "css"],
    siteLink: "",
    repositoryLink: "https://github.com/BrunoPostai/WOWSTORE",
  },
  {
    image: "./images/tesla_example.webp",
    title: "Tesla",
    alt: "WOW STORE PROJECT MADE ON PHP",
    filter: ["Github", "tudo"],
    technologies: ["javascript", "css"],
    siteLink: "https://brunopostai.github.io/TeslaCustomizableCar/",
    repositoryLink: "https://github.com/BrunoPostai/TeslaCustomizableCar",
  },
  {
    image: "./images/project3.webp",
    title: "Muscle Mate",
    alt: "Gym app made on React",
    filter: ["Github", "tudo"],
    technologies: ["react", "typescript"],
    siteLink: "https://mucle-matte.vercel.app/",
    repositoryLink: "https://github.com/Kallarari/MuscleMate",
  },
];
