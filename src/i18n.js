import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getLocales } from 'react-native-localize';

import translationEN from '../locales/en.json';
import translationRO from '../locales/ro.json';

export const userLanguage = getLocales()[0].languageCode;

i18n
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        lng: userLanguage,
        resources: {
            en: translationEN,
            ro: translationRO,
        },
        ns: Object.keys(translationEN),
        defaultNS: 'common',

        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;