import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en.json';
import es from './locales/es.json';
import pt from './locales/pt.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
      pt: { translation: pt }
    },
    fallbackLng: 'en',
    detection: {
      order: ['localStorage', 'navigator'],
      lookupFromPathIndex: 0,
      lookupLocalStorage: 'banks-directory-i18nextLng',
      checkWhitelist: true,
      caches: ['localStorage'],
      htmlTag: document.documentElement,
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
