import React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.css";
import { Icon } from "@iconify/react";

const languageActions = [
  { name: "EN", code: "en" },
  { name: "PT", code: "pt" },
  { name: "IT", code: "it" },
];

export default function BasicSpeedDial() {
  const { t, i18n } = useTranslation();

  type Language = "en" | "pt" | "it";

  const changeLanguage = (language: Language) => {
    i18n.changeLanguage(language);
  };

  return (
    <Box
      sx={{
        position: "fixed", 
        bottom: 80, 
        right: 40, 
        zIndex: 1000, 
        transform: "translateZ(0px)", 
      }}
    >
      <SpeedDial
        ariaLabel="SpeedDial language and actions"
        icon={<Icon icon="clarity:language-solid" width="2.2em" height="2.2em" />}
      >
        {languageActions.map((lang) => (
          <SpeedDialAction
            key={lang.code}
            icon={
              <span className={styles.languageIcon}>
                {lang.name}
              </span>
            }
            tooltipTitle={`Switch to ${lang.name}`}
            onClick={() => changeLanguage(lang.code as Language)}
            sx={{
              display:"flex",
              alignItems:"center",
              justifyContent:"center",
              width:"3em",
            }}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
