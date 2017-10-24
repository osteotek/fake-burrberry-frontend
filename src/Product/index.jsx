import React, { Component } from 'react';
import styled from 'styled-components';

import { Xs, MdLg } from '../Common/Breakpoints';
import Divider from '../Common/Divider';

import Accordion from './Accordion';
import Delivery from './Delivery';
import Description from './Description';
import MediaQuery from 'react-responsive';
import Info from './Info';

class Product extends Component {
  render() {
    return (
      <main>
        <Info />
        <Divider />
        <div className="container">
          <Xs>
            <Accordion isOpened name="description">
              <Description hideTitle />
            </Accordion>
            <Divider />
            <Accordion name="delivery">
              <Delivery hideTitle />
            </Accordion>
            <Divider />
          </Xs>
          <MdLg>
            <Description />
            <Delivery />
          </MdLg>
        </div>
      </main>
    );
  }
}

export default Product;
