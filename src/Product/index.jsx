import React, { Component } from 'react';
import Details from './Details';
import Accordion from './Accordion';
import Delivery from './Delivery';
import Description from './Description';
import Divider from './Divider';
import Slider from './Slider';
import MediaQuery from 'react-responsive';
import styled from 'styled-components';

const Title = styled.h1`
  padding: 1rem;
  margin: 0;
  margin-left: -0.5rem;
  margin-right: -0.5rem;
  font-family: Lora, Helvetica Neue, Helvetica, Arial, serif;
  font-size: 1.25rem;
  line-height: 1.2;
  font-weight: 300;
  @media only screen and (min-width: 48rem) {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    padding-left: 0;
    margin: 0;
    font-size: 1.5rem;
  }
`;

class Product extends Component {
  render() {
    return (
      <div className="container">
        <Title>Long Cotton Gabardine Car Coat</Title>
        <div className="row">
          <div className="col-xs-12 col-md-7">
            <Slider />
          </div>
          <div className="col-xs-12 col-md-5">
            <Details />
          </div>
        </div>
        <Divider />
        <MediaQuery query="(max-width: 48rem)">
          <Accordion isOpened name="description">
            <Description hideTitle />
          </Accordion>
          <Divider />
          <Accordion name="delivery">
            <Delivery hideTitle />
          </Accordion>
          <Divider />
        </MediaQuery>
        <MediaQuery query="(min-width:48rem)">
          <Description />
          <Delivery />
        </MediaQuery>
      </div>
    );
  }
}

export default Product;
