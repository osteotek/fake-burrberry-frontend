import React from 'react';
import styled from 'styled-components';

const Slider = styled.section`
  margin-left: -0.5rem;
  margin-right: -0.5rem;
  // position: relative;
  display: block;
  left: 50%;
  right: 50%;
  width: 100vw;
  white-space: nowrap;
  // overflow: hidden;
  //overflow-x: hidden;
  overflow-y: hidden;
  font-size: 0px;
  @media screen and (min-width: 48rem) {
    position: inherit;
    right: inherit;
    left: inherit;
    width: inherit;
    margin-right: inherit;
    margin-left: inherit;
  }
`;

const Photo = styled.img`
  width: 100%;
  height: auto;
  overflow-x: scroll;
  @media screen and (min-width: 48rem) {
    flex-shrink: 0;
    width: auto;
    height: 576px;
  }
`;

export default () =>
  <Slider>
    <Photo
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
