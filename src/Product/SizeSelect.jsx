import React from 'react';
import styled from 'styled-components';

import { XsMd, Lg } from '../Common/Breakpoints';
import Button from '../Common/Button';
import SmallButton from '../Common/SmallButton';
import TextButton from '../Common/TextButton';

const Size = styled.p`
  margin: 0;
  font-size: 0.75rem;
  line-height: 1.3333333333;
`;

const SelectedSize = styled.div`
  @media (min-width: 62rem) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
`;

export default () => {
  return (
    <div>
      <XsMd>
        <Button primary>Select a size</Button>
      </XsMd>
      <Lg>
        <SelectedSize>
          <Size>
            Size: <b>XL</b>
          </Size>
          <TextButton>Need size help?</TextButton>
        </SelectedSize>
        <SmallButton>S</SmallButton>
        <SmallButton>M</SmallButton>
        <SmallButton>L</SmallButton>
        <SmallButton selected>XL</SmallButton>
      </Lg>
    </div>
  );
};
