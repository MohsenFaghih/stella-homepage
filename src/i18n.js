import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(LanguageDetector)
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'ar'],
    fallbackLng: "en",
    detection: {
      order: [ 'cookie', 'localStorage', 'htmlTag', 'path', 'subdomain' ],
      caches: ['cookie'],
    },
    backend: { loadPath: 'http://localhost:3000/assets/locales/{{lng}}/translation.json' },
    react: { useSuspense: true },
  });

export default i18n;