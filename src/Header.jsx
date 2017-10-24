import React, { Component } from 'react';
import LogoImg from './Assets/logo.svg';
import styled from 'styled-components';

const Header = styled.header`
  padding: 1rem;
  // border-bottom: 1px solid #c6c6c6;
  @media (min-width: 48rem) {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
  @media (min-width: 61rem) {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
`;

const Logo = styled.img`
  margin: auto;
  display: block;
  width: auto;
  height: 12px;
  @media (min-width: 48rem) {
    height: 16px;
  }
`;

export default () =>
  <Header>
    <a href="index.html">
      <Logo src={LogoImg} alt="BURBERRY" />
    </a>
  </Header>;
