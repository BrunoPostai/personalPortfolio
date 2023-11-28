"use client";
import React from "react";
import { Icon } from "@iconify/react";
import "./styles.aboutMe.css";

const About: React.FC = () => {
  return (
    <div className="container-wrapper">
      <div className="leftContainer">
        <h2 id="aboutMe">ABOUT ME</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="rightContainer">
        <Icon icon="devicon-plain:materialui" color="white" />
        <Icon icon="mdi:react" color="white" />
        <Icon icon="file-icons:config-typescript" color="white" />
      </div>
    </div>
  );
};

export default About;
