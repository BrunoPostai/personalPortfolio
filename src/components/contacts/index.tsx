import React from "react";
import styles from "./styles.module.css";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t, i18n } = useTranslation();
  return (
    <div className={styles.divWrapper} id="contact">
      <div className={styles.rightWrap}>
        <div className={styles.imageBox}></div>
        <div className={styles.socialMedia}>
          <a
            className={styles.link}
            href="https://github.com/BrunoPostai"
            target="_blank"
          >
            <Icon icon="mdi:github" color="#3a86df" />
          </a>
          <a
            className={styles.link}
            href="https://www.linkedin.com/in/bruno-postai/"
            target="_blank"
          >
            <Icon icon="mdi:linkedin" color="#3a86df" />
          </a>
          <a
            className={styles.link}
            href="./Bruno_postai_CV.pdf"
            download={"./Bruno_postai_CV.pdf"}
            target="_blank"
          >
            <Icon icon="mingcute:pdf-fill" color="#3a86df" />
          </a>
        </div>
      </div>
      <div className={styles.leftWrap}>
        <h2 className={styles.contactTitle}>{t("contacts.title")}</h2>
        <p className={styles.contactText}>{t("contacts.contactMe")}</p>
      </div>
    </div>
  );
}

export default Contact;
