import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ko from "./locales/ko/translation.json";

i18n.use(initReactI18next).init({
  lng: "en",
  debug: false,
  resources: {
    ko: { translation: ko },
  },
  interpolation: {
    escapeValue: false,
  },
  returnNull: false,
  returnEmptyString: false,
  returnObjects: false,
});

export default i18n;
