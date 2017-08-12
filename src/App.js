import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import './App.css';

import Header from './Header/';
import Product from './Product/';
import Recommendations from './Recommendations/';
import Footer from './Footer/';

class App extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Long Cotton Gabardine Car Coat | Men - Burberry</title>
        </Helmet>
        <Header />
        <Product />
        <Recommendations />
        <Footer />
      </div>
    );
  }
}

export default App;
