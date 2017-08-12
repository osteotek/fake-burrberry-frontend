import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.div`
  margin: 0;
  margin-bottom: 1rem;
  font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.188rem;
  display: ${props => (props.hideTitle ? 'none' : 'block')};
`;

const Subtitle = styled.div`
  padding-top: 1rem
  margin-top: 1rem;
  margin-bottom: 0;
  font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 0.875rem;
`;

const Text = styled.div`
  padding-bottom: 1.5rem;
  font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-size: 0.75rem;
  line-height: 1rem;
`;

const Image = styled.img`
  display: block;
  width: 100%;
`;

const Wrapper = styled.div`
  // display: none;
  // @media only screen and (min-width: 48rem) {
  //   padding-top: 1.45rem;
  //   display: block;
  // }
`;

class Delivery extends Component {
  render() {
    return (
      <Wrapper>
        <div className="row">
          <div className="col-xs-12 col-md-7">
            <Image src="img/shipping.png" alt="Delivery" />
          </div>
          <div className="col-xs-12 col-md-5">
            <Title hideTitle={this.props.hideTitle}>DELIVERY</Title>
            <Subtitle>Free Next Day Delivery</Subtitle>
            <Text>
              Order before 7pm Monday to Thursday for delivery the next day
            </Text>
            <Subtitle>Collect-in-Store</Subtitle>
            <Text>
              Order online today and pick up your items in store as early as
              tomorrow
            </Text>
            <Subtitle>Free Returns</Subtitle>
            <Text>Enjoy free returns on your order</Text>
            <Subtitle>Free Gift Packaging</Subtitle>
            <Text>
              Discover our gift packaging, a gold lined box tied with a coloured
              ribbon
            </Text>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default Delivery;
