"use client";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import styles from "./styles.module.css";
import React, { useState } from "react";
import { CardListSectionMock } from "./projectList.mock";
import CardListSection from "./projectSection/";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t, i18n } = useTranslation();
  const projects = CardListSectionMock;

  const [selected, setSelected] = useState(String);

  const filteredMock = () => {
    if (selected) {
      return projects.filter((item) => item.filter.includes(selected));
    } else {
      return projects;
    }
  };
  return (
    <div className={styles.projectWrapper} id="projects">
      <div className={styles.upperWrap}>
        <h2 id={styles.projectTitle}>{t("myProjects.myProjects")}</h2>
        <ButtonGroup
          variant="contained"
          aria-label="Basic button group"
          color="primary"
        >
          <Button onClick={() => setSelected("tudo")}>ALL</Button>
          <Button onClick={() => setSelected("Github")}>GITHUB</Button>
          <Button onClick={() => setSelected("vercel")}>VERCEL</Button>
        </ButtonGroup>
      </div>
      <div className={styles.bottomWrap}>
        {filteredMock().map((item, index) => (
          <CardListSection
            key={index}
            title={item.title}
            alt={item.alt}
            image={item.image}
            technologies={item.technologies}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
