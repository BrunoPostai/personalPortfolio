"use client";
import { Button } from "@mui/material";
import * as React from "react";
import { Icon } from "@iconify/react";
import styles from "./styles.module.css";
import { useTranslation } from "react-i18next";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  ...theme.typography.body2,
  marginTop: "20px",
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  fontSize: "24px",
  width: "100%",
}));

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className={styles.wrapper}>
      <div className={styles.stacks}>
        <Stack direction="row" spacing={3}>
          <Item>
            {" "}
            <a
              className={styles.link}
              href="https://github.com/BrunoPostai"
              target="_blank"
            >
              <Icon icon="mdi:github" color="#3a86df" />
            </a>
          </Item>
          <Item>
            {" "}
            <a
              className={styles.link}
              href="https://www.linkedin.com/in/bruno-postai/"
              target="_blank"
            >
              <Icon icon="mdi:linkedin" color="#3a86df" />
            </a>
          </Item>
          <Item>
            {" "}
            <a
              className={styles.link}
              href="./Bruno_postai_CV.pdf"
              download={"./Bruno_postai_CV.pdf"}
              target="_blank"
            >
              <Icon icon="mingcute:pdf-fill" color="#3a86df" />
            </a>
          </Item>
        </Stack>
      </div>
      <header className={styles.header}>
        <a href="#" className={styles.logo}>
          <img src="./images/main-logo-transparent.png" alt="" />
        </a>
        <nav className={styles.nav}>
          <ul className={styles.ul}>
            <li>
              <a href="#projects" className={styles.li}>
                {t("header.projects")}
              </a>
            </li>
            <li>
              <a href="#about" className={styles.li}>
                {t("header.about")}
              </a>
            </li>
            <li id={styles.contato}>
              <button className={styles.btn}>
                <a href="#contact">{t("header.contact")}</a>
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <section className={styles.section}>
        <div className={styles.animation}>
          <span className={styles.name}>{t("header.name")}</span>
          <br /> <span className={styles.stack}>{t("header.stack")}</span>
        </div>
      </section>
    </div>
  );
};

export default Header;

/* onClick={() => {
  i18n.changeLanguage("pt");
}} */
