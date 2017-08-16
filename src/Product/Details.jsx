import React, { Component } from 'react';
import styled from 'styled-components';
import { FormattedNumber } from 'react-intl';

import { XsMd, Lg } from '../Common/Breakpoints';
import Color from './Color';
import SizeSelect from './SizeSelect';
import Button from '../Common/Button';
import TextButton from '../Common/TextButton';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 3rem;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  @media (min-width: 48rem) {
    margin-top: 0;
    padding-bottom: 0.85rem;
  }
  @media (min-width: 62rem) {
    padding-bottom: 3rem;
  }
`;

const Price = styled.h2`
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 1rem;
  font-weight: normal;
  line-height: 1.19;
`;

const Item = styled.p`
  margin-top: 0.2rem;
  margin-right: 0.1rem;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, serif;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.33;
`;

const DeliveryInfo = styled.div`
  h3 {
    margin: 0;
    padding-top: 0.5rem;
    padding-bottom: 0.25rem;
    font-size: 0.75rem;
    font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    font-weight: 700;
    line-height: 1.1666666667;
  }
  p {
    margin: 0;
    padding: 0;
    font-size: 0.75rem;
    font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1.3333333333;
  }
`;

class Details extends Component {
  render() {
    return (
      <Wrapper>
        <Info>
          <Price>
            <FormattedNumber
              value={110000}
              style="currency"
              currency="RUB"
              currencyDisplay="code"
              minimumFractionDigits="0"
            />
          </Price>
          <XsMd>
            <Item>Item 39428531</Item>
          </XsMd>
        </Info>
        <div className="row">
          <div className="col-xs-12 col-lg-6">
            <Color />
          </div>
          {/* <Lg> */}
          <div className="col-xs-12 col-lg-6">
            <SizeSelect />
          </div>
          {/* </Lg> */}
        </div>
        <div className="row">
          <Lg>
            <div className="col-lg-6">
              <Button primary>Add to bag</Button>
            </div>
          </Lg>
          <div className="col-xs-12 col-lg-6">
            <Button>Find in store</Button>
          </div>
          <XsMd>
            <div className="col-xs-12 col-lg-6">
              <TextButton>Need size help?</TextButton>
            </div>
          </XsMd>
          <Lg>
            <div className="col-lg-12">
              <DeliveryInfo>
                <h3>Free Next Day Delivery</h3>
                <p>
                  Order before 7pm Monday to Thursday for delivery the next day
                </p>
              </DeliveryInfo>
            </div>
          </Lg>
        </div>
      </Wrapper>
    );
  }
}

export default Details;
