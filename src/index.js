import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import 'flexboxgrid2';
import 'react-responsive';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import styled from 'styled-components';

import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';

addLocaleData([...en, ...ru]);
const language =
  (navigator.languages && navigator.languages[0]) ||
  navigator.language ||
  navigator.userLanguage;

const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];

ReactDOM.render(
  <IntlProvider locale={languageWithoutRegionCode}>
    <App />
  </IntlProvider>,
  document.getElementById('root')
);

registerServiceWorker();
