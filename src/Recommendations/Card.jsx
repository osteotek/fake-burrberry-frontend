import React, { Component } from 'react';
import { FormattedNumber } from 'react-intl';
import styled from 'styled-components';

const Link = styled.a`
  padding-bottom: 1rem;
  flex-basis: 130px;
  color: inherit;
  text-decoration: inherit;
  @media only screen and (min-width: 48rem) {
    padding-left: 0;
    padding-right: 0.75rem;
  }
`;

const Image = styled.img`
  // padding-top: 1rem;
  padding-left: 0.5rem;
  width: auto;
  height: 174px;
  @media only screen and (min-width: 48rem) {
    padding-left: 0;
    width: 100%;
    height: auto;
  }
`;

const Title = styled.h3`
  padding-left: 0.5rem;
  padding-top: 0.2rem;
  margin: 0;
  font-family: Lora;
  font-size: 1rem;
  line-height: 1.19;
  font-weight: 400;
  @media only screen and (min-width: 48rem) {
    padding-left: 0;
    padding-top: 0.25rem;
  }
`;

const Price = styled.p`
  padding-left: 0.5rem;
  padding-top: 0.5rem;
  margin: 0;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, serif;
  font-size: 0.75rem;
  font-weight: 100;
  line-height: 1.17;
  color: #999999;
  opacity: 0.6;
  @media only screen and (min-width: 48rem) {
    padding-left: 0;
  }
`;

class Card extends Component {
  render() {
    return (
      <Link>
        <Image src={this.props.img} alt={this.props.title} />
        <Title>
          {this.props.title}
        </Title>
        <Price>
          <FormattedNumber
            value={this.props.price}
            style="currency"
            currency="RUB"
          />
        </Price>
      </Link>
    );
  }
}

export default Card;
