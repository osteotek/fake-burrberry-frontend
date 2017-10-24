import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import './App.css';

import Header from './Header';
import Product from './Product/';
import Recommendations from './Recommendations/';
import Footer from './Footer/';

import ruLocaleData from 'react-intl/locale-data/ru';
import { IntlProvider, addLocaleData } from 'react-intl';

addLocaleData(ruLocaleData);

class App extends Component {
  render() {
    return (
      <IntlProvider locale="ru">
        <div>
          <Helmet>
            <title>Long Cotton Gabardine Car Coat | Men - Burberry</title>
          </Helmet>
          <Header />
          <Product />
          <Recommendations />
          <Footer />
        </div>
      </IntlProvider>
    );
  }
}

export default App;
