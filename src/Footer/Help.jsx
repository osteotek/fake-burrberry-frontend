import React, { Component } from 'react';
import styled from 'styled-components';

const Help = styled.div`
  padding-top: 1.1rem;
  margin-left: -0.5rem;
  margin-right: -0.5rem;
  display: flex;
  justify-content: center;
  @media only screen and (min-width: 48rem) {
    display: none;
  }
`;

const Title = styled.h5`
  margin: 0;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, serif;
  font-size: 1rem;
  line-height: 1.19;
  color: #171717;
`;

export default props =>
  <Help>
    <Title>Need help?</Title>
  </Help>;
