"use client";
import React from "react";
import { Icon } from "@iconify/react";
import styles from "./styles.module.css";

const About: React.FC = () => {
  return (
    <div className={styles.containerWrapper}>
      <div className={styles.leftContainer}>
        <h2 className={styles.aboutMe}>ABOUT ME</h2>
        <p>
          Hello, I'm Bruno, a dedicated web development passionate about turning
          ideas into remarkable digital experiences. Over a year of immersion
          into studying the world of web development, I delved into the
          fundamental languages and technologies to create engaging online
          environments. During this period, I gained solid skills in HTML and
          CSS, which form the backbone of visual presentation on the web. My
          proficiency in JavaScript and JSON allows the creation of dynamic and
          interactive interfaces, providing users with smooth and engaging
          experiences. Whether it's creating responsive websites, developing
          interactive applications, or optimizing system performance, I am
          committed to overcoming challenges and delivering solutions that leave
          an impression. Let's build something amazing together!
        </p>
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
