import React from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Skeleton,
} from "@mui/material";
import { Icon } from "@iconify/react";
import styles from "../styles.module.css";
import { tech } from "../projectList.mock";
import { useTranslation } from "react-i18next";

interface CardListSection {
  title: string;
  alt: string;
  image: string;
  technologies: tech[];
  siteLink: string;
  repositoryLink: string;
  loading?: boolean;
}

const CardListSection: React.FC<CardListSection> = ({
  title,
  alt,
  image,
  technologies,
  siteLink,
  repositoryLink,
  loading = false,
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
    {
      name: "github",
      IconName: "mdi:github",
    },
    {
      name: "vercel",
      IconName: "radix-icons:vercel-logo",
    },
    {
      name: "tailwind",
      IconName: "mdi:tailwind",
    },
    {
      name: "next",
      IconName: "ri:nextjs-fill",
    },
    {
      name: "php",
      IconName: "material-symbols:php",
    },
  ];
  const getIcon = (techName: string) => {
    const icon = stackIcons.find((icon) => icon.name === techName);
    return icon ? icon.IconName : "";
  };
  const { t, i18n } = useTranslation();
  return (
    <Card className={styles.muiCard} sx={{ pointerEvent: "none" }}>
      <CardActionArea>
        {loading ? (
          <Skeleton variant="rectangular" width={200} height={150} />
        ) : (
          <CardMedia
            component="img"
            alt={alt}
            height="150"
            width="200"
            image={image}
          />
        )}
        <CardContent className={styles.cardContent}>
          {loading ? (
            <Skeleton variant="text" width="80%" />
          ) : (
            <Typography sx={{ fontSize: 18, }} component="div">
              {title}
            </Typography>
          )}
          {loading ? (
            <>
              <Skeleton variant="text" width="70%" />
              <Skeleton variant="text" width="70%" />
            </>
          ) : (
            <CardActions className={styles.cardActions}>
              {siteLink && (
                <Button
                  sx={{ padding: "0px" }}
                  href={siteLink}
                  target="_blank"
                  color="inherit"
                  size="small"
                >
                  {t("projectSection.visitSite")}
                </Button>
              )}

              {repositoryLink && (
                <Button
                  sx={{ padding: "0px" }}
                  color="inherit"
                  size="small"
                  href={repositoryLink}
                  target="_blank"
                >
                  {t("projectSection.sourceCode")}
                </Button>
              )}
            </CardActions>
          )}

          <Typography variant="body2" color="text.secondary">
            {loading ? (
              <Skeleton variant="rectangular" width="100%" height={24} />
            ) : (
              technologies.map((tech, index) => (
                <Icon
                  key={index}
                  icon={getIcon(tech)}
                  className={styles.techIcons}
                />
              ))
            )}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardListSection;
