import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import CardListSection from "./index";

const meta: Meta = {
  title: "Components/CardListSection",
  component: CardListSection,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    title: { control: "text" },
    technologies: {
      control: {
        type: "select",
        options: ["javascript", "stack", "react", "typescrypt", "css"],
      },
    },
    image: {
      control: "radio",
      options: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Your Title",
    technologies: ["javascript",], 
    link: "https://www.example.com",
    image: "https://example.com/image1.jpg",
  },
};
