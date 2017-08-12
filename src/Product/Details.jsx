import React, { Component } from 'react';
import Color from './Color';
import Actions from './Actions';
import { FormattedNumber } from 'react-intl';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left: -0.5rem;
  margin-right: -0.5rem;
  display: flex;
  flex-direction: column;
  // border-bottom: solid 1px #c6c6c6;
  @media only screen and (min-width: 48rem) {
    padding-left: 0;
    padding-right: 0;
    margin-left: 0;
    margin-right: 0;
    border-bottom: none;
  }
`;

const Price = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  @media only screen and (min-width: 48rem) {
    margin-top: 0;
    padding-bottom: 0.85rem;
  }
`;

const Title = styled.h2`
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, serif;
  font-size: 1rem;
  font-weight: normal;
  line-height: 1.19;
  @media only screen and (min-width: 48rem) {
    margin: 0;
  }
`;

const Item = styled.p`
  margin-top: 0.2rem;
  margin-right: 0.1rem;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, serif;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.33;
  @media only screen and (min-width: 48rem) {
    margin: 0;
  }
`;

class Details extends Component {
  render() {
    return (
      <Wrapper>
        <Price>
          <Title>
            <FormattedNumber value={110000} style="currency" currency="RUB" />
          </Title>
          <Item>Item 39428531</Item>
        </Price>
        <Color />
        <Actions />
      </Wrapper>
    );
  }
}

export default Details;
