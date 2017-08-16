import React, { Component } from 'react';
import styled from 'styled-components';

import { Lg } from '../Common/Breakpoints';

const Title = styled.div`
  font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.188rem;
  display: ${props => (props.hideTitle ? 'none' : 'block')};
`;

const Text = styled.div`
  margin-bottom: 1rem;
  margin-top: 1rem;
  padding-right: 1rem;
  font-family: "Lora", serif;
  font-size: .875rem;
  line-height: 1.5rem;
  color: #171717;
  p,
  ul {
    margin: 0;
    // padding-top: 0;
    // padding-bottom: 0;
    padding-left: 0rem;
    list-style-type: none;
    @media screen and (min-width: 48rem) {
      padding: 0;
    }
  }
`;

const Content = styled.div`
  padding-top: 1.5rem;
  @media all and (min-width: 62rem) {
    padding-top: 4rem;
  }
`;

const Showcase = styled.div`
  @media all and (min-width: 62rem) {
    margin-top: 4rem;
    margin-bottom: 2rem;
    div:nth-child(1) {
      margin-top: 2rem;
    }
    div:nth-child(2) {
      margin-top: 6rem;
    }
    div:nth-child(3) {
      margin-top: 0;
    }
  }
}
`;

const Photo = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

class Description extends Component {
  render() {
    return (
      <Content>
        <div className="row">
          <div className="col-xs-12 col-lg-4">
            <Title hideTitle={this.props.hideTitle}>DESCRIPTION</Title>
            <Text>
              <p>A refined car coat crafted in protective cotton gabardine.</p>
              <p>
                Invented by Thomas Burberry in 1879, cotton gabardine is a
                tightly woven and breathable fabric that protects against wind
                and rain.
              </p>
              <p>
                Raglan sleeves and a concealed button closure complement the
                clean tailored lines.
              </p>
              <p>The piece is finished with a distinctive check undercollar.</p>
              <br />
              <p>
                Coat length: 98cm/38.6in. This is based on a size UK 48 as
                proportions change slightly according to size.
              </p>
              <ul>
                <li>Outer: 100% cotton</li>
                <li>Check lining: 100% cotton</li>
                <li>Sleeve lining: 100% viscose</li>
                <li>Buttons: buffalo horn</li>
                <li>Specialist dry clean</li>
                <li>Made in Europe</li>
                <li>Item 39428531</li>
              </ul>
            </Text>
          </div>
          <Lg>
            <div className="col-lg-8">
              <Photo src="img/product-preview-2@2x.png" alt="Button close-up" />
            </div>
          </Lg>
        </div>
        <Lg>
          <Showcase className="row">
            <div className="col-lg-4">
              <Photo src="img/product-preview-3@2x.png" alt="Collar close-up" />
            </div>
            <div className="col-lg-4">
              <Photo src="img/product-preview-4@2x.png" alt="Back view" />
            </div>
            <div className="col-lg-4">
              <Photo src="img/product-preview-3@2x.png" alt="Collar close-up" />
            </div>
          </Showcase>
        </Lg>
      </Content>
    );
  }
}

export default Description;
