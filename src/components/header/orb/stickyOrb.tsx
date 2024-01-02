import { useTranslation } from "react-i18next";
import styles from "./styles.module.css";
import { Icon } from "@iconify/react";
import { useState } from "react";

export const StickyOrb = () => {
  const { t, i18n } = useTranslation();
  type Language = "en" | "pt" | "it";

  const changeLanguage = (language: Language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div
      className={styles.stickyOrb}
    >
      <Icon icon="ic:round-language" className={styles.orbIcon} />
        <ul className={styles.ul}>
          <li className={styles.li} onClick={() => changeLanguage("en")}>
            EN
          </li>
          <li className={styles.li} onClick={() => changeLanguage("pt")}>
            PT
          </li>
          <li className={styles.li} onClick={() => changeLanguage("it")}>
            IT
          </li>
        </ul>
    </div>
  );
};

export default StickyOrb;
