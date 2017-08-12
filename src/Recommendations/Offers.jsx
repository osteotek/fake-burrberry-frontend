import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding-top: 2rem;
  padding-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media only screen and (min-width: 48rem) {
    display: none;
  }
`;

const Title = styled.div`
  margin: 0;
  margin-left: 1rem;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, serif;
  font-size: 1rem;
  line-height: 1.19;
  font-weight: 500;
`;

const Links = styled.div`padding-left: 1rem;`;

const Link = styled.a`
  padding-top: 1.1rem;
  display: block;
  text-decoration: inherit;
  font-family: Lora, Helvetica Neue, Helvetica, Arial, serif;
  font-style: italic;
  font-size: 0.875rem;
  line-height: 1.21;
  color: #171717;
`;

class Offers extends Component {
  render() {
    return (
      <Wrapper>
        <Title>MORE FOR YOU</Title>
        <Links>
          <Link>Men’s Black Trench Coats</Link>
          <Link>Men’s Short Trench Coats</Link>
          <Link>Men’s Long Trench Coats</Link>
        </Links>
      </Wrapper>
    );
  }
}

export default Offers;
