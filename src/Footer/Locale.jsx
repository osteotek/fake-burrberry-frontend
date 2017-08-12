import React, { Component } from 'react';
import styled from 'styled-components';

const Buttons = styled.div`
  padding-top: 1.4rem;
  margin-left: -0.5rem;
  margin-right: -0.5rem;
`;

const Button = styled.button`
  padding-left: 1rem;
  padding-top: 0.6rem;
  padding-bottom: 0.5rem;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, serif;
  font-size: 0.75rem;
  line-height: 1.17;
  color: #999999;
  background-color: transparent;
  border: none;
  opacity: 0.6;
  @media (min-width: 48rem) {
    margin-left: inherit;
  }
`;

class Locale extends Component {
  render() {
    return (
      <Buttons>
        <Button type="button">Shipping country: Russian Federation</Button>
        <Button type="button">Language: English</Button>
      </Buttons>
    );
  }
}

export default Locale;
