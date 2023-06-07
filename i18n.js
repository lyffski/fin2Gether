import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

// Define the translations
/* const resources = {
  en: {
    translation: {
      homePage: {
        welcome: 'Welcome!',
        title: 'Home Page',
        content: 'This is the content of the home page.',
      },
    },
  },
  fr: {
    translation: {
      homePage: {
        welcome: 'Bienvenue !',
        title: 'Page d\'accueil',
        content: 'Voici le contenu de la page d\'accueil.',
      },
    },
  },
};

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Set the default language here
    fallbackLng: 'en',
    supportedLngs: ['en', 'fr', 'de'], // Add supported languages here
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Set the path to your Contentful translation files
    },
  }); */

  i18n.use(initReactI18next).init({
    fallbackLng: 'en', // Default language fallback
    resources: {}, // Placeholder for translations (to be fetched from Contentful)
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });
  

export default i18n;
