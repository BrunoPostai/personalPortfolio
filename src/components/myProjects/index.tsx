"use client";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid"; // Importando o Grid do MUI
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
    <Container maxWidth="lg">
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
        <Grid container spacing={3} className={styles.bottomWrap}>
          {filteredMock().map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <CardListSection
                title={item.title}
                alt={item.alt}
                image={item.image}
                technologies={item.technologies}
                siteLink={item.siteLink}
                repositoryLink={item.repositoryLink}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  );
}

export default Projects;