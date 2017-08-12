import React, { Component } from 'react';
import styled from 'styled-components';

const ColorButton = styled.button`
  padding: 0;
  margin: 0;
  margin-right: 1rem;
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid transparent;
  text-indent: 100%;
  white-space: nowrap;
  overflow: hidden;
  background-color: ${props => props.color};
  border: ${props => (props.active ? '1px solid #232122' : 'none')};
`;

export default props =>
  <ColorButton color={props.color} active={props.active} type="button">
    Colour: {props.name}
  </ColorButton>;
