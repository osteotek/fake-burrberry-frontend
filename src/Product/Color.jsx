import React, { Component } from 'react';
import ColorButton from './ColorButton';
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
  padding-bottom: 2rem;
  display: flex;
  border-bottom: solid 1px #c6c6c6;
`;

class Color extends Component {
  render() {
    return (
      <div>
        <Title>Colour: Honey</Title>
        <ColorSelect>
          <ColorButton name="black" color="#000000" active={false} />
          <ColorButton name="honey" color="#cfa880" active={true} />
        </ColorSelect>
      </div>
    );
  }
}

export default Color;
