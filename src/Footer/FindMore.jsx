import React, { Component } from 'react';
import styled from 'styled-components';

const FindMore = styled.div`
  padding-top: 1rem;
  margin-left: -0.5rem;
  margin-right: -0.5rem;
  display: flex;
  justify-content: center;
  @media only screen and (min-width: 48rem) {
    display: none;
  }
`;

const Link = styled.a`
  margin-right: 0.1rem;
  font-family: Lora, Helvetica Neue, Helvetica, Arial, serif;
  font-size: 14px;
  font-style: italic;
  line-height: 1.21;
  color: #171717;
  text-decoration: inherit;
`;
export default () =>
  <FindMore>
    <Link>Find out more and contact us</Link>
  </FindMore>;
