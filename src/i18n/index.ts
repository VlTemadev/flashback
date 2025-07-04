import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import ru from "./locales/ru.json";
import kz from "./locales/kk.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "ru",
    debug: false,
    resources: {
      ru: { translation: ru },
      kz: { translation: kz },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
