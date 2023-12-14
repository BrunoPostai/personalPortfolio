import React from "react";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { CardListSectionMock } from "../projectList.mock";
import { Icon } from "@iconify/react";
import styles from "../styles.module.css";

type tech = "javascript" | "stack" | "react" | "typescript" | "css" ;
interface CardListSection {
  title: string;
  image: string;
  technologies: tech[];
  link: string;
}

const CardListSection: React.FC<CardListSection> = ({
  title,
  image,
  technologies,
  link,
}) => {
  const stackIcons = [
    {
      name: "typescript",
      IconName: "akar-icons:typescript-fill",
    },
    {
      name: "javascript",
      IconName: "simple-icons:javascript",
    },
    {
      name: "stack",
      IconName: "cib:stackoverflow",
    },
    {
      name: "react",
      IconName: "ri:reactjs-fill",
    },
    {
      name: "css",
      IconName: "akar-icons:css-fill",
    },
    {
      name: "language",
      IconName: "cil:language",
    },
  ];
  const getIcon = (techName: string) => {
    const icon = stackIcons.find((icon) => icon.name === techName);
    return icon ? icon.IconName : "";
  };
  return (
    <a href={link} target="_blank">
        <Card  className={styles.muiCard}>
            <CardActionArea>
                <CardMedia  component="img" alt={title} height="200" width="200" image={image}></CardMedia>
                <CardContent className={styles.cardContent}>
                    <Typography sx={{ fontSize: 12 }} component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className={styles.iconsWrapper}>
                        {technologies.map((tech, index) => (<Icon key={index} icon={getIcon(tech)} className={styles.techIcons}/>) )}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </a>
  );
};

export default CardListSection;
