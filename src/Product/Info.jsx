import React, { Component } from 'react';
import styled from 'styled-components';

import { XsMd, Lg } from '../Common/Breakpoints';
import Slider from './Slider';
import Details from './Details';

const Title = styled.h1`
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin: 0;
  font-family: Lora, Helvetica Neue, Helvetica, Arial, serif;
  font-size: 1.25rem;
  line-height: 1.2;
  font-weight: 300;
  @media (min-width: 48rem) {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    padding-left: 0;
    margin: 0;
    font-size: 1.5rem;
  }
  @media (min-width: 62rem) {
    padding-top: 10rem;
    padding-bottom: 0.5rem;
  }
`;

const Background = styled.div`
  @media (min-width: 62rem) {
    background-color: #d4bdad;
    width: 100%;
    margin: 0;
    padding: 0;
  }
`;

class Info extends Component {
  render() {
    return (
      <Background>
        <div className="container">
          <XsMd>
            <Title>Long Cotton Gabardine Car Coat</Title>
          </XsMd>
          <div className="row">
            <div className="col-xs-12 col-md-7 col-lg-6">
              <Slider />
            </div>
            <div className="col-xs-12 col-md-5 col-lg-6">
              <Lg>
                <Title>Long Cotton Gabardine Car Coat</Title>
              </Lg>
              <Details />
            </div>
          </div>
        </div>
      </Background>
    );
  }
}

export default Info;
