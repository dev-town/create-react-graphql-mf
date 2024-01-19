import i18n from 'i18next';
import { initReactI18next } from "react-i18next";
import trans from '../i18n/en-gb/module.json';

import { module } from '../src/config/settings';

const resources = {
    en: {
        [module]: {
            ...trans,
        }
    }
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: 'en',
    ns: module,
    resources,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });


export default i18n;