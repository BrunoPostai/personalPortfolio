"use client";
import React from "react";
import { Icon } from "@iconify/react";
import styles from "./styles.module.css";

const aboutMeText = `
  Hello, I am Bruno, a dedicated web developer passionate about transforming ideas
  into remarkable digital experiences. With over a year of immersive study in the
  field of web development, I have delved into fundamental languages and technologies
  to craft engaging online environments.

  Throughout this journey, I have honed solid skills in HTML and CSS, which serve as
  the backbone for visual presentation on the web. My proficiency in JavaScript and
  JSON empowers me to create dynamic and interactive interfaces, offering users
  smooth and engaging experiences.

  Whether it is crafting responsive websites, developing interactive applications, or
  optimizing system performance, I am committed to overcoming challenges and
  delivering solutions that make a lasting impression.
`;

const About: React.FC = () => {
  return (
    <div className={styles.containerWrapper}>
      <div className={styles.leftContainer}>
        <h2 className={styles.aboutMe}>ABOUT ME</h2>
        <p>{aboutMeText}</p>
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
