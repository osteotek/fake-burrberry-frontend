import React, { Component } from 'react';
import styled from 'styled-components';

const Buttons = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  padding: 1rem;
  padding-top: 1.1rem;
  padding-bottom: 1.1rem;
  margin-top: 1rem;
  font-size: 0.75rem;
  font-weight: 300;
  background-color: transparent;
  border-radius: 3px;
  border: none;
`;

const SizeButton = Button.extend`
  color: #ffffff;
  background-color: #171717;
`;

const FindButton = Button.extend`
  padding-bottom: 0.95rem;
  background-color: #fff;
  border: 1px solid #a6a6a6;
`;

const HelpButton = Button.extend`
  padding-left: 0;
  padding-top: 1.65rem;
  padding-bottom: 3.05rem;
  margin: 0;
  align-self: flex-start;
`;

class Actions extends Component {
  render() {
    return (
      <Buttons>
        <SizeButton type="button">SELECT A SIZE</SizeButton>
        <FindButton type="button">FIND IN STORE</FindButton>
        <HelpButton type="button">NEED SIZE HELP?</HelpButton>
      </Buttons>
    );
  }
}

export default Actions;
