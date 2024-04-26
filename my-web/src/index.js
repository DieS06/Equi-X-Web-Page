import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import {I18nextProvider} from 'react-i18next'
import i18next from 'i18next';
import './css/index.css';

import App from './App';
import global_ES from "./translation/ES/global.json"
import global_EN from "./translation/EN/global.json"


i18next.init({
  interpolation: {escapevalue: false},
  lng: "es",
  resources:{
    es: {
      global: global_ES
    },
    en: {
      global: global_EN
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>
  
);

reportWebVitals();
