import React, { Component } from 'react';
import styled from 'styled-components';

const Menu = styled.nav`
  display: none;
  @media only screen and (min-width: 48rem) {
    display: block;
    padding-top: 0.9rem;
  }
`;

const Title = styled.h4`
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 0.875rem;
`;

const Link = styled.a`
  padding-top: 0rem;
  padding-bottom: 0.75rem;
  font-size: 0.75rem;
  line-height: 1rem;
  display: block;
  text-decoration: none;
  color: #999999;
`;

export default props =>
  <Menu>
    <div className="row">
      <div className="col-md-3">
        <Title>CUSTOMER SERVICE</Title>
        <Link>Contact Us</Link>
        <Link>Payment</Link>
        <Link>Shipping</Link>
        <Link>Returns</Link>
        <Link>Faqs</Link>
        <Link>Live Chat</Link>
        <Link>The Burberry App</Link>
        <Link>Store Locator</Link>
      </div>
      <div className="col-md-3">
        <Title>OUR COMPANY</Title>
        <Link>Our History</Link>
        <Link>Burberry Group Plc</Link>
        <Link>Careers</Link>
        <Link>Corporate Responsibility</Link>
        <Link>Site Map</Link>
      </div>
      <div className="col-md-3">
        <Title>LEGAL &amp; COOKIES</Title>
        <Link>Terms &amp; Conditions</Link>
        <Link>Privacy Policy</Link>
        <Link>Cookie Policy</Link>
        <Link>Accessibility Statement</Link>
        <Link>Japan Only - SCTL indications</Link>
      </div>
    </div>
  </Menu>;
