import React, { Component } from 'react';
import Navigation from './Navigation';
import Help from './Help';
import Locale from './Locale';
import FindMore from './FindMore';
import styled from 'styled-components';

const Footer = styled.footer`
  padding-top: 0.2rem;
  padding-bottom: 2rem;
  background-color: #f3f3f3;
`;

export default () =>
  <Footer>
    <div className="container">
      <Navigation />
      <Locale />
      <Help />
      <FindMore />
    </div>
  </Footer>;
