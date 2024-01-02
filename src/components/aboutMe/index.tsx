"use client";
import React from "react";
import { Icon } from "@iconify/react";
import styles from "./styles.module.css";
import { useTranslation } from "react-i18next";

const aboutMeText = `$`;

const About: React.FC = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className={styles.containerWrapper} id="about">
      <div className={styles.leftContainer}>
        <h2 className={styles.aboutMe}>ABOUT ME</h2>
        <p>{t("aboutMe.aboutMeText")}</p>
      </div>
      <div className={styles.rightContainer}>
        <Icon icon="devicon-plain:materialui" color="white" />
        <Icon icon="mdi:react" color="white" />
        <Icon icon="file-icons:config-typescript" color="white" />
      </div>
    </div>
  );
};

export default About;
