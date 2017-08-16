import React from 'react';
import styled from 'styled-components';

const Slider = styled.section`
  margin-left: -0.5rem;
  margin-right: -0.5rem;
  display: block;
  white-space: nowrap;
  overflow-y: hidden;
  font-size: 0px;
  @media screen and (min-width: 48rem) {
    margin-right: inherit;
    margin-left: inherit;
  }
`;

const Photo = styled.img`
  width: 100%;
  height: auto;
  overflow-x: scroll;
  @media (min-width: 62rem) {
    display: ${props => (props.hero ? 'block' : 'none')};
  }
`;

export default () =>
  <Slider>
    <Photo
      hero
      src="img/product-preview-1.png"
      srcSet="img/product-preview-1@2x.png 2x, img/product-preview-1@3x.png 3x"
      alt="Long Cotton Gabardine Car Coat"
    />
    <Photo
      src="img/product-preview-1.png"
      srcSet="img/product-preview-2@2x.png 2x, img/product-preview-2@3x.png 3x"
      alt="Long Cotton Gabardine Car Coat"
    />
    <Photo
      src="img/product-preview-1.png"
      srcSet="img/product-preview-3@2x.png 2x, img/product-preview-3@3x.png 3x"
      alt="Long Cotton Gabardine Car Coat"
    />
    <Photo
      src="img/product-preview-1.png"
      srcSet="img/product-preview-4@2x.png 2x, img/product-preview-4@3x.png 3x"
      alt="Long Cotton Gabardine Car Coat"
    />
  </Slider>;
