import React, { Component } from 'react';
import { FormattedNumber } from 'react-intl';
import styled from 'styled-components';

const Link = styled.a`
  padding: 0;
  margin: 0;
  flex-basis: auto;
  flex-grow: 1;
  color: inherit;
  text-decoration: inherit;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Title = styled.h3`
  padding-top: 0.5rem;
  margin: 0;
  font-family: Lora;
  font-size: 1rem;
  line-height: 1.19;
  font-weight: 400;
`;

const Price = styled.p`
  padding-bottom: 1rem;
  padding-top: 0.25rem;
  padding-left: 0;
  margin: 0;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, serif;
  font-size: 0.75rem;
  font-weight: 100;
  line-height: 1.17;
  color: #999999;
  opacity: 0.6;
  @media only screen and (min-width: 48rem) {
  }
`;

class Card extends Component {
  render() {
    return (
      <Link href="/index.html">
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
