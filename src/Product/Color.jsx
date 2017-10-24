import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.p`
  margin: 0;
  margin-top: 0.2rem;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, serif;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.33;
`;

const ColorSelect = styled.div`
  padding-top: 1rem;
  padding-bottom: 1.5rem;
  display: flex;
  border-bottom: solid 1px #c6c6c6;
  @media (min-width: 62rem) {
    border-bottom: none;
  }
`;

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

class Color extends Component {
  render() {
    return (
      <div>
        <Title>
          Colour: <b>Honey</b>
        </Title>
        <ColorSelect>
          <ColorButton name="black" color="#000000" />
          <ColorButton name="honey" color="#cfa880" active />
        </ColorSelect>
      </div>
    );
  }
}

export default Color;
