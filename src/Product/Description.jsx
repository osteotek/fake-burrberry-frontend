import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.div`
  margin: 0;
  padding-top: 1.5rem;
  font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.188rem;
  display: ${props => (props.hideTitle ? 'none' : 'block')};
`;

const Text = styled.div`
  margin-bottom: 2rem;
  margin-top: 1rem;
  font-family: "Lora", serif;
  font-size: .875rem;
  line-height: 1.5rem;
  color: #171717;
  p,
  ul {
    margin: 0;
    padding-top: 0;
    padding-right: .5rem;
    padding-bottom: 0;
    padding-left: .5rem;
    list-style-type: none;
    @media screen and (min-width: 48rem) {
      padding: 0;
    }
  }
`;

class Description extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-lg-4">
          <Title hideTitle={this.props.hideTitle}>DESCRIPTION</Title>
          <Text>
            <p>A refined car coat crafted in protective cotton gabardine.</p>
            <p>
              Invented by Thomas Burberry in 1879, cotton gabardine is a tightly
              woven and breathable fabric that protects against wind and rain.
            </p>
            <p>
              Raglan sleeves and a concealed button closure complement the clean
              tailored lines.
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
      </div>
    );
  }
}

export default Description;
