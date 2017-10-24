import React, { Component } from 'react';
import Card from './Card';
import Offers from './Offers';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  padding-top: 3rem;
  @media (min-width: 62rem) {
    padding-top: 4rem;
  }
`;

const Title = styled.h2`
  margin: 0;
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  @media (min-width: 62rem) {
    margin-bottom: 2rem;
    text-align: center;
  }
`;

const Cards = styled.h2`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const photos = [
  {
    title: 'Emroided Hooded 2 Lines',
    price: 27000,
    img: 'img/recommend-1.jpg'
  },
  {
    title: 'Relaxed Fit Stretch Jeans ',
    price: 22500,
    img: 'img/recommend-2.jpg'
  },
  {
    title: 'Leather and House Check',
    price: 120000,
    img: 'img/recommend-3.jpg'
  },
  {
    title: 'Leather Wingtip Check',
    price: 46000,
    img: 'img/recommend-4.jpg'
  }
];

class Recommendations extends Component {
  render() {
    return (
      <div className="container">
        <Wrapper>
          <Title>we recommend</Title>
          <Cards>
            <div className="row">
              {photos.map((photo, index) =>
                <div className="col-xs-6 col-md-3" key={index}>
                  <Card
                    title={photo.title}
                    price={photo.price}
                    img={photo.img}
                  />
                </div>
              )}
            </div>
          </Cards>
          <Offers />
        </Wrapper>
      </div>
    );
  }
}

export default Recommendations;
