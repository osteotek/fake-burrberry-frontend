import React, { Component } from 'react';
import LogoImg from '../logo.svg';
import styled from 'styled-components';

const Header = styled.header`
  padding: 1rem;
  border-bottom: 1px solid #c6c6c6;
  @media only screen and (min-width: 48rem) {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
`;

const Logo = styled.img`
  margin: auto;
  display: block;
  width: 138px;
  height: 10px;
`;

export default () =>
  <Header>
    <a href="index.html">
      <Logo src={LogoImg} alt="BURBERRY" />
    </a>
  </Header>;
