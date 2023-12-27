import i18 from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "../locales/en.json";
import ptTranslation from "../locales/pt.json";
import itTranslation from "../locales/it.json";

const resources = {
  en: { translation: enTranslation },
  pt: { translation: ptTranslation },
  it: { translation: itTranslation },
};
i18.use(initReactI18next).init({
  resources,
  debug: true,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: true,
  },
});

export default i18;