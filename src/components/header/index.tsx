"use client"
import { Button } from "@mui/material";
import React from "react";
import { Icon } from "@iconify/react";
import styles from "./styles.module.css";
import { useTranslation } from "react-i18next";

const Header: React.FC = () => {
  const {t, i18n}= useTranslation();
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <a href="#" className={styles.logo}>
          BP
        </a>
        <nav className={styles.nav}>
          <ul className={styles.ul}>
            <li>
              <a href="#" className={styles.li}>
                {t("projects")}
              </a>
            </li>
            <li>
              <a href="#" className={styles.li}>
                ABOUT ME
              </a>
            </li>
            <li id={styles.contato}>
              <button className={styles.btn}>
                <a href="#" onClick={() => {i18n.changeLanguage("pt")}}>CONTACT</a>
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <section className={styles.section}>
        <p>
          I AM
          <br />
          <span className={styles.name}>BRUNO POSTAI</span>
          <br /> FRONT-END DEVELOPER
        </p>
      </section>
    </div>
  );
};

export default Header;
