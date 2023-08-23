import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

/** Router */
import { BrowserRouter } from 'react-router-dom';

/** Translations */
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import common_en from './translations/en/common.json';
import common_ua from './translations/ua/common.json';
import common_ru from './translations/ru/common.json';

i18next.init({
  interpolation: { escapeValue: false },  // React already does escaping
  lng: 'en',                              // language to use
  useSuspense: false,
  resources: {
    en: {
      common: common_en               // 'common' is our custom namespace
    },
    ua: {
      common: common_ua
    },
    ru: {
      common: common_ru
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App/>
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>
);
